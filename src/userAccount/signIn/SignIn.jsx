import FormButton from "../../ui components/FormButton";
// import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";
import FormUI from "../../ui components/FormUI";
import Inputlabel from "../../ui components/Inputlabel";
import ArrowRight  from "../../assets/svg/arrowRight.svg?react";

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
            <Inputlabel type={"password"} id={"pass"} >
              <span>Password</span>
              <span className="text-[#2DA5F3]">Forget Password</span>
            </Inputlabel>
            <FormButton>
              <span>sign in</span>
              <span>
                <ArrowRight />
              </span>
            </FormButton>
          </div>
        </form>
      </FormUI>
    </>
  );
};

export default SignIn;
