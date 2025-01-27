import React from "react";
import Inputlabel from "../../ui components/Inputlabel";
import { AppleLogo, Check, GoogleLogo, RightArrow } from "../../assets/svg";
import FormButton from "../../ui components/FormButton";
import IdLogin from "../../ui components/IdLogin";

const SignUp = () => {
  return (
    <>
      <form action="" className="px-[32px]">
        <div className="flex flex-col gap-y-2">
          <Inputlabel type={"name"} id={"name"} label={"Name"} />
           
          <Inputlabel type={"email"} id={"email"} label={"Email Address"} />
            
          <Inputlabel
            type={"password"}
            id={"password"}
            placeholder={"8+ characters"}
            label={"Password"}
            
          />
           
          <Inputlabel type={"password"} id={"confirmPassword"} label={"Confirm Password"} />
            

          <div className="flex gap-2 mx-w-[360px]">
            <div className="inline-flex items-center mb-auto">
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md border border-slate-300 checked:bg-[#FA8232] checked:border-[#FA8232]"
                  id="check"
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
        </div>
        <FormButton title={"sign up"} />
          
      </form>
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
    </>
  );
};

export default SignUp;
