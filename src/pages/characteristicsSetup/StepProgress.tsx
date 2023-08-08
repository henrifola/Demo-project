import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type StepProgressProps = {
  stepState: number;
  steps: string[];
};

const StepProgress = ({ stepState, steps }: StepProgressProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepState} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default StepProgress;
