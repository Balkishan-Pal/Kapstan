import React from "react";
import "./StatusComponent.scss";
import DotIcon from "../ImagesAndIcons/DotIcon";

const statusEnums = {
  success: "Successful",
  inprogress: "In progress",
  failed: "Failed",
};

const StatusColorEnums = {
  success: "#00B88C",
  inprogress: "#F39C12",
  failed: "#E91F04",
};

function StatusComponent(props) {
  const { status, customName } = props;

  return (
    <div className={`status-top-wrapper ${status} `}>
      <DotIcon color={StatusColorEnums[status]} />

      <span> {customName || statusEnums[status]}</span>
    </div>
  );
}

export default StatusComponent;
