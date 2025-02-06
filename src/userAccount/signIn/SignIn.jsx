import { Link } from "react-router";
import { AppleLogo, GoogleLogo } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import IdLogin from "../../ui components/IdLogin";
import Inputlabel from "../../ui components/Inputlabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const checkIfEmailExists = async (email) => {
  const existingUsers = ["user1@gmail.com", "user2@gmail.com"];
  return existingUsers.includes(email);
};

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required")
    .test("email-exists", "This email is not registered", async (value) => {
      if (!value) return false;
      const exists = await checkIfEmailExists(value);
      return exists; // Must return true for valid
    }),
  password: yup.string().required("Password is required"),
});

const SignIn = ({ setIsForget }) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // Check valid credentials Here
  };

  return (
    <form className="px-[32px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2">
        <Inputlabel
          type="email"
          id="email"
          label="Email Address"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <Inputlabel
          type="password"
          id="pass"
          label="Password"
          {...register("password")}
        />

        <div className="text-[#2DA5F3] text-sm flex justify-between -mt-1">
          <span>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </span>
          <button type="button" onClick={setIsForget}>
            <Link to="/forgotPassword">Forget Password</Link>
          </button>
        </div>
        <FormButton title="Sign In" type="submit" />
      </div>

    
      <div className="my-1 flex flex-col gap-3 ">
        <div className="flex items-center text-sm font-PublicSans text-[#77878F] before:flex-1 before:border-t before:border-[#E4E7E9] before:me-6 after:flex-1 after:border-t after:border-[#E4E7E9] after:ms-6 ">
          or
        </div>
        <IdLogin service="Google" logo={<GoogleLogo />} />

        <IdLogin service="Apple" logo={<AppleLogo />} />
      </div>
    </form>
  );  
};

export default SignIn;
