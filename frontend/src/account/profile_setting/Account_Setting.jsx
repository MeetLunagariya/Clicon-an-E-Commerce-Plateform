import { CountrySelect, StateSelect } from "react-country-state-city";
import { Avatar } from "../../assets/img";
import Title from "../../product_page/Title";
import Input from "./Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  display_name: yup.string().required("Display name is required"),
  full_name: yup.string().required("Full name is required"),
  secondary_email: yup
    .string()
    .email("Invalid email")
    .required("Secondary email is required"),
  phone_number: yup.string().required("Phone number is required"),
  user_name: yup.string().required("User name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  zip_code: yup.string().required("Zip code is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
});

const Account_Setting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      display_name: "Kevin",
      full_name: "Kevin",
      email: "kevin.gilbert@gmail.com",
      secondary_email: "kevin12345@gmail.com",
      phone_number: "1234567890",
      user_name: "kevin12345",
    },
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="border border-gray-200 rounded-sm"
    >
      <section className="py-2 px-6 uppercase ">
        <Title title={"Account Setting"} key={"Account Setting"} />
      </section>
      <section className="flex gap-4 border-t border-gray-200 py-2 px-6">
        <div className="max-w-[176px] max-h-[176px]">
          <img src={Avatar} alt="" />
        </div>

        {/* Profile Form  */}

        <section className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <Input
                id={"display_name"}
                label={"Display name"}
                type={"text"}
                placeholder={"Enter your name"}
                error={errors.display_name?.message}
                {...register("display_name")}
              />
              <Input
                id={"full_name"}
                label={"Full name"}
                type={"text"}
                placeholder={"Enter your name"}
                error={errors.full_name?.message}
                {...register("full_name")}
              />
              <Input
                id={"secondary_email"}
                label={"Secondary email"}
                type={"email"}
                placeholder={"Enter your secondary email"}
                error={errors.secondary_email?.message}
                {...register("secondary_email")}
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-sm text-[#191C1F] flex gap-1"
                >
                  Country/Region
                </label>
                <CountrySelect
                  id="country"
                  containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
                  inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
                  onChange={(selected) => {
                    setValue("country", selected?.name, {
                      shouldValidate: true,
                    });
                    setSelectedCountry(selected);
                  }}
                  placeHolder="Select Country"
                />
                {errors.country && (
                  <p className="text-sm text-red-500">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Input
                id={"user_name"}
                label={"User name"}
                type={"text"}
                placeholder={"Enter your user name"}
                error={errors.user_name?.message}
                {...register("user_name")}
              />
              <Input
                id={"email"}
                label={"Email"}
                type={"email"}
                placeholder={"Enter your email"}
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                id={"phone_number"}
                label={"Phone number"}
                type={"tel"}
                placeholder={"Enter your phone number"}
                error={errors.phone_number?.message}
                {...register("phone_number")}
              />
              <div className="flex gap-2">
                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="state"
                    className="text-sm text-[#191C1F] flex gap-1"
                  >
                    State
                  </label>
                  <StateSelect
                    id="state"
                    countryid={selectedCountry?.id}
                    containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
                    inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
                    onChange={(selected) => {
                      setValue("state", selected?.name, {
                        shouldValidate: true,
                      });
                      setSelectedState(selected);
                    }}
                    placeHolder="Select State"x
                  />
                  {errors.state && (
                    <p className="text-sm text-red-500">
                      {errors.state.message}
                    </p>
                  )}
                </span>
                <span>
                  <Input
                    id={"zip_code"}
                    label={"Zip code"}
                    type={"text"}
                    placeholder={"Enter your zip code"}
                    error={errors.zip_code?.message}
                    {...register("zip_code")}
                  />
                </span>
              </div>
            </div>
          </div>
          <button className="bg-[#FA8232] text-white px-6 py-3 rounded-sm uppercase text-sm font-medium self-start mb-3">
            Save Changes
          </button>
        </section>
      </section>
    </form>
  );
};

export default Account_Setting;
