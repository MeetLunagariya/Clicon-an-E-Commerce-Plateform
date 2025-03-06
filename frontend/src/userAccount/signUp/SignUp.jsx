import Inputlabel from "../../ui components/Inputlabel";
import { AppleLogo, Check, GoogleLogo } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import IdLogin from "../../ui components/IdLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addNotification } from "../../Store/notificationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import config from "../../../config/config";

const schema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Name must be at least 8 characters")
    .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    .matches(RegExp("(.*\\d.*)"), "Number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special"),
  confirm_password: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms_and_conditions: yup
    .boolean()
    .oneOf([true], "Please agree to terms and conditions"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try {
      // to create user in firebase auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // to store user's SignUp data in firestore
      const userRef = `${config.API_URL}/users/${user.uid}/user_data?documentId=SignUp_data`;
      const userData = {
        fields: {
          username: {
            stringValue: data.username,
          },
          email: {
            stringValue: data.email,
          },
          password: {
            stringValue: data.password,
          },
        },
      };
      try {
        async function createUser(userRef, data) {
          const response = await axios.post(userRef, data);
          console.log("data : ", response);
        }
        createUser(userRef, userData);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
        console.log(error.response.status);
      }

      dispatch(
        addNotification({
          id: Date.now(),
          text: "Registered successfully",
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch(
        addNotification({
          id: Date.now(),
          text: err.message,
        })
      );
    }
  };

  return (
    <>
      <form action="" className="px-[32px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <Inputlabel
            type={"name"}
            id={"username"}
            label={"Username"}
            {...register("username")}
          />{" "}
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
          <Inputlabel
            type={"email"}
            id={"email"}
            label={"Email Address"}
            {...register("email")}
          />{" "}
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <Inputlabel
            type={"password"}
            id={"password"}
            placeholder={"8+ characters"}
            label={"Password"}
            {...register("password")}
          />{" "}
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <Inputlabel
            type={"password"}
            id={"confirmPassword"}
            label={"Confirm Password"}
            {...register("confirm_password")}
          />{" "}
          {errors.confirm_password && (
            <p className="text-sm text-red-500">
              {errors.confirm_password.message}
            </p>
          )}
          <div className="flex gap-2 mx-w-[360px]">
            <div className="inline-flex items-center mb-auto">
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md border border-slate-300 checked:bg-[#FA8232] checked:border-[#FA8232]"
                  id="check"
                  {...register("terms_and_conditions")}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <Check />
                </span>
              </label>
            </div>
            <div className="text-sm  font-sans text-[#475156]">
              Are you agree to Clicon{" "}
              <span className="text-cyan-500"> Terms of Condition </span>and{" "}
              <span className="text-cyan-500">Privacy Policy.</span>
            </div>
          </div>
          {errors.terms_and_conditions && (
            <p className="text-sm text-red-500">
              {errors.terms_and_conditions.message}
            </p>
          )}
        </div>
        <FormButton
          title={isSubmitting ? "Signing Up..." : "Sign Up"}
          type="submit"
          disabled={isSubmitting}
        />
      </form>
      <div className="my-1 flex flex-col gap-3 px-[32px]">
        <div className="flex items-center text-sm font-PublicSans text-[#77878F]  before:flex-1 before:border-t before:border-[#E4E7E9] before:me-6 after:flex-1 after:border-t after:border-[#E4E7E9] after:ms-6 ">
          or
        </div>
        <IdLogin service="Google" logo={<GoogleLogo />} />

        <IdLogin service="Apple" logo={<AppleLogo />} />
      </div>
    </>
  );
};

export default SignUp;
