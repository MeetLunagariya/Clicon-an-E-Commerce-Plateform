import { Link } from "react-router";
import { RightArrow } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import Inputlabel from "../../ui components/Inputlabel";

const ForgetPassword = ({ setIsForget }) => {
  return (
    <div className="p-[32px]">
      <div className="flex flex-col justify-center text-center gap-3">
        <div className="text-xl text-[#191C1F] font-semibold">
          Forget Password
        </div>
        <div className="text-sm text-[#5F6C72] ">
          Enter the email address or mobile phone number associated with your
          Clicon account.
        </div>
      </div>
      <div className="pt-3">
        <Inputlabel id={"email"} type={"email"}>
          Email Address
        </Inputlabel>
      </div>

      <Link to="/resetPassword">
        <FormButton title={"Send Code"}/>
      </Link>

      <div className="flex flex-col gap-1 py-1 text-sm">
        <div className="flex gap-2">
          <span className="text-[#5F6C72]">Already have account?</span>
          <button className="text-[#2DA5F3] font-semibold">
            {" "}
            <Link to="/signIn" onClick={setIsForget}>
              Sign In
            </Link>{" "}
          </button>
        </div>
        <div className="flex gap-2">
          <span className="text-[#5F6C72]">Don&apos;t have account?</span>
          <button className="text-[#2DA5F3] font-semibold">
            <Link to="/signUp" onClick={setIsForget}>
              Sign Up
            </Link>
          </button>
        </div>
      </div>

      <hr className="my-4 bg-[#E4E7E9]" />

      <p className="text-sm text-[#000000]">
        You may contact{" "}
        <span className="text-[#FA8232]"> Customer Service </span>for help
        restoring access to your account.{" "}
      </p>
    </div>
  );
};

export default ForgetPassword;
