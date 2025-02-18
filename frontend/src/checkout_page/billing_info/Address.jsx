import { useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import Inputlabel from "../../ui components/Inputlabel";

const Address = ({register,setValue}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <>
      <span className="col-span-4">
        <Inputlabel
          type={"text"}
          id={"address_1"}
          label={"Address"}
          {...register("address_1")}
        />
      </span>
      <span className="flex flex-col gap-2">
        <label htmlFor="country" className="text-sm text-[#191C1F] flex gap-1">
          Country
        </label>
        <CountrySelect
          id="country"
          containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
          inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
          onChange={(selected) => {
            setValue("country", selected?.name);
            setSelectedCountry(selected);
          }}
          onTextChange={(_txt) => console.log(_txt)}
          placeHolder="Select Country"
        />
      </span>
      <span className="flex flex-col gap-2">
        <label htmlFor="state" className="text-sm text-[#191C1F] flex gap-1">
          State
        </label>
        <StateSelect
          id="state"
          countryid={selectedCountry?.id}
          containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
          inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
          onChange={(selected) => {
            setValue("state", selected?.name);
            setSelectedState(selected);
          }}
          onTextChange={(_txt) => console.log(_txt)}
          // defaultValue={currentState}
          placeHolder="Select State"
        />
      </span>
      <span className="flex flex-col gap-2">
        <label htmlFor="state" className="text-sm text-[#191C1F] flex gap-1">
          City
        </label>
        <StateSelect
          id="City"
          countryid={selectedCountry?.id}
          stateid={selectedState?.id}
          containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
          inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
          onChange={(selected) => {
            setValue("city", selected?.name);
            setSelectedCity(selected);
          }}
          onTextChange={(_txt) => console.log(_txt)}
          // defaultValue={currentState}
          placeHolder="Select State"
        />
      </span>
      <span className="flex flex-col gap-2">
        <Inputlabel
          type={"number"}
          id={"zip"}
          label={"Zip Code"}
          {...register("zip")}
        />
      </span>
    </>
  );
};

export default Address;
