import { RightArrow } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import Inputlabel from "../../ui components/Inputlabel";

const ResetPassword = () => {
  return (
    <div className="px-[30px] pt-[30px]">
      {" "}
      <div className="flex flex-col justify-center text-center gap-3">
        <div className="text-xl text-[#191C1F] font-semibold">
          Reset Password
        </div>
        <div className="text-sm text-[#5F6C72] ">
          Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce
          lorem nunc, fringilla sit amet nunc.
        </div>
      </div>

      <form action="" className="flex flex-col gap-4 mt-4">
        <Inputlabel id={'password'} placeholder={'8+ characters'} type={'password'}>Password</Inputlabel>
        <Inputlabel id={'confirmPassword'}  type={'password'}>Confirm Password</Inputlabel>
        <FormButton>
          <span>reset password</span>
          <span><RightArrow/></span>
        </FormButton>
      </form>
    </div>
  );
};

export default ResetPassword;
