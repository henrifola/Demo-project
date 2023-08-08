import React from "react";
import { useTranslation } from "react-i18next";
import "./accessConfigurator.scss";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const AccessConfigurator = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="access-config">
      <h1>{t("accessConfig.header")}</h1>
      <p className="main-text text">{t("accessConfig.mainText")}</p>
      <div className="navigation">
        <Button text={t("accessConfig.loadConfig")} onClick={() => undefined} />
        <Button
          text={t("accessConfig.newConfig")}
          onClick={() => navigate("/characteristics-setup")}
        />
      </div>
    </div>
  );
};

export default AccessConfigurator;
