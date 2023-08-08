import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./nextBack.scss";

const NextBack = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="nav-wrapper">
      <div className="back" onClick={() => navigate("/")}>
        {"< "}
        {t("charSetup.back")}
      </div>
      <div className="next">
        {t("charSetup.next")}
        {" >"}
      </div>
    </div>
  );
};

export default NextBack;
