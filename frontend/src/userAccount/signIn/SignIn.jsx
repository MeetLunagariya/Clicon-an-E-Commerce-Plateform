import { Link, useNavigate } from "react-router";
import { AppleLogo, GoogleLogo } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import IdLogin from "../../ui components/IdLogin";
import Inputlabel from "../../ui components/Inputlabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database"; // Import necessary functions
import { app } from "../../../config/firebase"; // Assuming you have your Firebase app initialization here
import { auth } from "../../../config/firebase";
import { addNotification } from "../../Store/notificationSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Store/context/AuthContext";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});

const SignIn = ({ setIsForget }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setisLoggedIn } = useAuth();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginUser = async (userData) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      // Handle response data, e.g., store the token
    } catch (error) {
      console.error(error.message);
      // Handle error
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      // console.log("User signed in:", user.uid);
      const db = getDatabase(app);
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      console.log("User data:", snapshot.val());
      dispatch(
        addNotification({
          id: Date.now(),
          text: "Signed in successfully",
        })
      );
      // alert("Signed in successfully");

      // Store user credential in local storage for 10 seconds
      const now = new Date();
      const item = {
        value: user,
        expiry: now.getTime() + 3600000, // 1 hour
      };
      localStorage.setItem("user", JSON.stringify(item));
      setisLoggedIn(true);
      navigate("/home");
    } catch (error) {
      dispatch(
        addNotification({
          id: Date.now(),
          text: "Invalid Credentials",
        })
      );
      console.error(error);
      // let errorMessage = "An error occurred during sign-in.";
      // switch (error.code) {
      //   case "auth/user-not-found":
      //     errorMessage = "User not found. Please check your email address.";
      //     break;
      //   case "auth/wrong-password":
      //     errorMessage = "Incorrect password. Please try again.";
      //     break;
      //   // Add other error handling cases as needed
      // }
      // alert(errorMessage);
    }
    // loginUser(data);
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
