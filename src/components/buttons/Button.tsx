import React from "react";
import "./button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className="button-wrapper">
      <button className="button-component" onClick={() => onClick()}>
        {text}
      </button>
    </div>
  );
};

export default Button;
