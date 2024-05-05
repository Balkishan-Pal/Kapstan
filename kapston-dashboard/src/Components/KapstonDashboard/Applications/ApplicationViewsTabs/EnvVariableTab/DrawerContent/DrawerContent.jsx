import React from "react";
import "./DrawerContent.scss";
import UploadIcon from "../../../../../Common/ImagesAndIcons/UploadIcon";
import KapPrimaryButton from "../../../../../Common/KapPrimaryButton/KapPrimaryButton";
import KapSecondaryButton from "../../../../../Common/KapSecondayButton/KapSecondaryButton";

function DrawerContent() {
  const handleAddEnvData = () => {};

  return (
    <div className="drawer-content">
      <div className="drop-wrapper">
        <div className="actual-drop-n-click-wrap">
          <UploadIcon />
          <div className="text-content-inside-drop">{`Click or drag file(s) here to upload`}</div>
        </div>

        <div className="sub-heading-env-info">
          Upload a .env file. It should not be greater than 5KB.
        </div>

        <div className="footer-env-wrap">
          <KapPrimaryButton buttonText="Add" onClick={handleAddEnvData} />
          <KapSecondaryButton buttonText="Add" />
        </div>
      </div>
    </div>
  );
}

export default DrawerContent;
