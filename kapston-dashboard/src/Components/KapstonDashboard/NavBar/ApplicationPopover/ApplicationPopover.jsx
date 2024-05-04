import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import "./ApplicationPopover.scss";
import ArrowDownIcon from "../../../Common/ImagesAndIcons/ArrowDownIcon";

function ApplicationPopover(props) {
  const { applicationData, activeApplication, setActiveApplication } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(null);

  const handleOpenPopover = (applications) => {
    const opening = document.getElementById("popover");
    setAnchorEl(opening);
    setOpen(applications);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpen(null);
  };

  const handleApplicationChange = (applicationName) => {
    setActiveApplication(applicationName);
    setOpen(null);
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleOpenPopover("applications")}
        id={`popover`}
        className="applications-button"
      >
        {activeApplication}
        <ArrowDownIcon />
      </button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="application-content-wrap">
          {applicationData?.map((applicationName, index) => (
            <div
            className="content"
              key={index}
              onClick={() => handleApplicationChange(applicationName?.name)}
            >
              {applicationName?.name}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}

export default ApplicationPopover;
