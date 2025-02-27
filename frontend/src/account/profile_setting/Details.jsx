import React, { useState } from "react";
import Input from "./Input";
import { CountrySelect, StateSelect } from "react-country-state-city";

const Details = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    capital: "Dhaka",
    currency: "BDT",
    currency_name: "Bangladeshi taka",
    currency_symbol: "৳",
    emoji: "🇧🇩",
    hasStates: true,
    id: 19,
    iso2: "BD",
    iso3: "BGD",
    latitude: "24.00000000",
    longitude: "90.00000000",
    name: "Bangladesh",
    native: "Bangladesh",
    numeric_code: "050",
    phone_code: "880",
    region: "Asia",
    subregion: "Southern Asia",
    tld: ".bd",
  });
  console.log("selectedCountry", selectedCountry);
  return (
    <section className="px-6 flex flex-col py-2 border-t border-gray-200 gap-2">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label={"First Name"}
          id={"first_name"}
          type={"text"}
          placeholder={"Kevin"}
        />
        <Input
          label={"Last Name"}
          id={"last_name"}
          type={"text"}
          placeholder={"Gilbert"}
        />
      </div>
      <Input isOptional label={"Company"} id={"company"} type={"text"} />
      <Input
        isOptional
        label={"Address"}
        id={"address"}
        type={"text"}
        placeholder={"Road No. 13/x, House no. 1320/C, Flat No. 5D"}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="text-sm text-[#191C1F] flex gap-1">
          Country
        </label>
        <CountrySelect
          id="country"
          containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
          inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
          value={selectedCountry?.name}
          placeHolder="Bangladesh"
          onChange={(selected) => {
            setSelectedCountry(selected);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="state" className="text-sm text-[#191C1F] flex gap-1">
          State
        </label>
        <StateSelect
          id="state"
          countryid={selectedCountry?.id}
          containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
          inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
          placeHolder="Select State"
        />
      </div>

      {/* City & Zip Code  */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="state" className="text-sm text-[#191C1F] flex gap-1">
            State
          </label>
          <StateSelect
            id="state"
            countryid={selectedCountry?.id}
            containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
            inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
            placeHolder="Select State"
          />
        </div>
        <span className="flex flex-col gap-2">
          <Input
            label={"Zip Code"}
            id={"zip_code"}
            type={"num"}
            placeholder={"1207"}
          />
        </span>
      </div>

      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        placeholder={"kevin12345@gmail.com"}
      />

      <Input
        label={"Phone Number"}
        id={"phone_number"}
        type={"tel"}
        placeholder={"+1-202-555-0118"}
      />
      
      <button className="bg-[#FA8232] text-white px-6 py-3 rounded-sm uppercase text-sm font-medium self-start my-3">
        Save Changes
      </button>
    </section>
  );
};

export default Details;
