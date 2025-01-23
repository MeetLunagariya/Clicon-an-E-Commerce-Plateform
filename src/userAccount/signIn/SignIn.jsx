import { GoogleLogo, RightArrow } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
// import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";
import FormUI from "../../ui components/FormUI";
import Inputlabel from "../../ui components/Inputlabel";

const SignIn = () => {
  return (
    <>
      <FormUI>
        {/* <EyeIcon/> */}
        <form action="">
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
        <div className="my-1">
          <div className="flex items-center text-sm font-PublicSans text-[#77878F]  before:flex-1 before:border-t before:border-[#E4E7E9] before:me-6 after:flex-1 after:border-t after:border-[#E4E7E9] after:ms-6 ">
            or
          </div>
        
          <button className="flex border w-full h-[44px] p-2 justify-center">
            <div className="mr-auto p-1">
              <GoogleLogo />
            </div>
            <div className="text-[#475156] font-sans mr-auto text-sm my-auto">
              Login with Google 
            </div>
          </button>
        </div>
        
      </FormUI>
    </>
  );
};

export default SignIn;
