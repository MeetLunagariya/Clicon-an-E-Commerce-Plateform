import React, { useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

// const CustomSlider = styled(Slider)({
//   color: 'transparent', // Hide default color
//   height: 4, // Thin track
//   '& .MuiSlider-track': {
//     border: '2px solid #FF7F27', // Orange border for track
//     backgroundColor: 'transparent',
//   },
//   '& .MuiSlider-thumb': {
//     height: 16,
//     width: 16,
//     backgroundColor: '#FFFFFF', // White thumb
//     border: '3px solid #FF7F27', // Orange border
//     '&:hover, &.Mui-focusVisible': {
//       boxShadow: '0px 0px 5px rgba(255, 127, 39, 0.5)', // Light glow on hover
//     },
//   },
//   '& .MuiSlider-rail': {
//     opacity: 1,
//     backgroundColor: '#E0E0E0', // Light gray rail
//   },
// });
const CustomSlider = styled(Slider)({
  color: "#FF7F27", // Main color
  height: 4, // Thin track height
  "& .MuiSlider-track": {
    backgroundColor: "#FF7F27", // Orange filled track between values
    border: "none", // Remove track border
    height: 4,
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#FFFFFF", // White thumb
    border: "3px solid #FF7F27", // Orange border
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0px 0px 5px rgba(255, 127, 39, 0.5)", // Glow effect on hover
    },
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "#E0E0E0", // Light gray rail (outside range)
    height: 4,
  },
});
const Range_Slider = () => {
  const val = useRef();
  const [value, setValue] = useState([20, 80]); // Range slider
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <div className="w-full">
      <div>
        <CustomSlider
          ref={val}
          value={value}
          onChange={handleChange}
          min={0}
          max={10000}
          step={1}
          disableSwap
        />
      </div>
      <div className="flex gap-3">
        <div className="text-[#77878F] rounded-sm border py-2 pl-3 w-full">{value[0]}</div>
        <div className="text-[#77878F]  rounded-sm border py-2 pl-3 w-full">{value[1]}</div>
      </div>
    </div>
  );
};

export default Range_Slider;
