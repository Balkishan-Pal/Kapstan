import React from "react";
import "./KapPrimaryButton.scss";

function KapPrimaryButton(props) {
  const { buttonText, disabled, onClick } = props;
  return (
    <button className="kaps-primary-button" onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
}

export default KapPrimaryButton;
