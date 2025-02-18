import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full " ref={selectRef}>
      <button
        type="button"
        className="relative bg-transparent  rounded-lg py-2 pl-3 pr-10 text-left focus:border-blue-500 focus:outline-none flex"
        onClick={() => setIsOpen(!isOpen)}  
      >
        <div className="flex items-center">
          <span className="block truncate">
            {selectedOption ? selectedOption.value : placeholder}
          </span> 
        </div>
        <span className="absolute inset-y-0 right-2 flex items-center pr-2">
          <ChevronDown
            className={`h-4 w-4 text-white text-lg transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 -left-[50px] w-[150px] bg-white shadow-lg max-h-60 rounded-md py-1  focus:outline-none border border-gray-100">
          {options.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-gray-100 ${
                option.value === value ? "bg-gray-50" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center">
                {option.img && (
                  <img
                    src={option.img}
                    alt=""
                    className="flex-shrink-0 h-5 w-5 rounded-full mr-2"
                  />
                )}
                <span
                  className={`block truncate text-gray-900 ${
                    option.value === value ? "font-medium" : "font-normal"
                  }`}
                >
                  {option.title}
                </span>
              </div>
              {option.value === value && (
                <Check className="h-4 w-4 text-orange-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
