import React from "react";
import { useTranslation } from "react-i18next";
import "./characteristicsSetup.scss";
import NextBack from "../../components/navigation/NextBack";
import StepProgress from "./StepProgress";
import RadioComp from "./RadioComp";
import DropdownComp from "./DropdownComp";

const CharacteristicsSetup = () => {
  const { t } = useTranslation();
  const steps = ["Security Level", "Card Format", "Card Type"];
  return (
    <div className="characteristics-setup">
      <h1>{t("charSetup.header")}</h1>
      <div className="navigation">
        <NextBack />
      </div>
      <div className="stepper-progress">
        <StepProgress stepState={0} steps={steps} />
      </div>
      <div className="radio-wrapper">
        <RadioComp />
      </div>
      <DropdownComp />
    </div>
  );
};

export default CharacteristicsSetup;
