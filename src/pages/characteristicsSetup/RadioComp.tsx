import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useTranslation } from "react-i18next";

const RadioComp = () => {
  const { t } = useTranslation();
  const fontWeight = {
    "& .MuiFormControlLabel-label": {
      fontWeight: 700,
    },
  };
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Security Level</FormLabel> */}
      <p className="radio-title">Security Level</p>

      <p className="radio-subtitle">
        Please select the security level of your project.{" "}
      </p>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="I don't know"
        name="radio-buttons-group"
      >
        <FormControlLabel
          sx={fontWeight}
          value="Highest Level Security"
          control={<Radio />}
          label="Highest Level Security"
        />
        <p className="sub-text">
          High Level Security Military Facility, Credit card factory, Bank
          Vault, High Tech R&D Data Center, Sensitive data Office building,
          Value Factory
        </p>
        <FormControlLabel
          sx={fontWeight}
          value="Medium Level Security"
          control={<Radio />}
          label="Medium Level Security"
        />
        <p className="sub-text">Office building, Warehouse, regular factory</p>
        <FormControlLabel
          sx={fontWeight}
          value="Small Level Security"
          control={<Radio />}
          label="Small Level Security"
        />
        <p className="sub-text">Small office, small shop etc</p>
        <FormControlLabel
          sx={fontWeight}
          value="I don't know"
          control={<Radio />}
          label="I don't know"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComp;
