import {  AppleLogo, GoogleLogo, RightArrow } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
// import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";
import FormUI from "../../ui components/FormUI";
import IdLogin from "../../ui components/IdLogin";
import Inputlabel from "../../ui components/Inputlabel";

const SignIn = () => {
  return (
    <>
      <FormUI>
        {/* <EyeIcon/> */}
        <form action="" className="px-[32px]  mt-4">
          <div className="flex flex-col gap-y-2">
            <Inputlabel type={"email"} id={"email"}>
              Email Address
            </Inputlabel>
            <Inputlabel type={"password"} id={"pass"}>
              <span>Password</span>
              <span className="text-[#2DA5F3]">Forget Password</span>
            </Inputlabel>
            <FormButton>
              <span>sign in</span>
              <span>
                <RightArrow />
              </span>
            </FormButton>
          </div>
        </form>
        {/* or */}
        <div className="my-1 flex flex-col gap-3 px-[32px]">
          <div className="flex items-center text-sm font-PublicSans text-[#77878F]  before:flex-1 before:border-t before:border-[#E4E7E9] before:me-6 after:flex-1 after:border-t after:border-[#E4E7E9] after:ms-6 ">
            or
          </div>
          <IdLogin service={'Google'}>
            <GoogleLogo/>
          </IdLogin>
          <IdLogin service={'Apple'}>
            <AppleLogo/>
          </IdLogin>
         
        </div>
        
      </FormUI>
    </>
  );
};

export default SignIn;
