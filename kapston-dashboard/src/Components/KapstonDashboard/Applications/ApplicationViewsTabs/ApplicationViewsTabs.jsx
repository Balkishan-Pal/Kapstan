import React from "react";
import "./ApplicationViewsTabs.scss";
import OverViewIcon from "../../../Common/ImagesAndIcons/OverViewIcon";
import EnvIcon from "../../../Common/ImagesAndIcons/EnvIcon";
import AlertIcon from "../../../Common/ImagesAndIcons/AlertIcon";
import HistoryIcon from "../../../Common/ImagesAndIcons/HistoryIcon";
import DotIcon from "../../../Common/ImagesAndIcons/DotIcon";

const applicationsTabs = [
  {
    value: "Overview",
    label: "Overview",
    width: "90px",
    icon: <OverViewIcon />,
  },
  {
    value: "environmentVariables",
    label: "Environment Variables",
    width: "185px",
    icon: <EnvIcon />,
  },
  { value: "Alerts", label: "Alerts", width: "80px", icon: <AlertIcon /> },
  {
    value: "eventHistory",
    label: "Event history",
    width: "120px",
    icon: <HistoryIcon />,
  },
];

function ApplicationViewsTabs(props) {
  const { applicatioActiveTab, setManualAuditactiveTab } = props;

  const handleTab = (_tab) => {
    setManualAuditactiveTab(_tab);
  };
  return (
    <div className="tabs-parent">
      {applicationsTabs?.map((tabs) => (
        <div
          key={tabs?.value}
          onClick={() => handleTab(tabs?.value)}
          className={
            applicatioActiveTab === tabs?.value
              ? "tabs-active"
              : "tabs-inactive"
          }
          style={{ width: tabs?.width }}
        >
          <section>
            {tabs?.icon}
            {tabs?.label}

            {tabs?.label === "Alerts" && (
              <div className="dot-icon-wrap">
                <DotIcon color="#E91F04" className="dot-icon" />
              </div>
            )}
          </section>
        </div>
      ))}
    </div>
  );
}

export default ApplicationViewsTabs;
