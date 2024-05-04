import React, { useState } from "react";

import "./Applications.scss";
import StatusComponent from "../../Common/StatausComponent/StatusComponent";
import MoreOptionsIcon from "../../Common/ImagesAndIcons/MoreOptionsIcon";
import ApplicationViewsTabs from "./ApplicationViewsTabs/ApplicationViewsTabs";
import OverViewTab from "./ApplicationViewsTabs/OverViewTab/OverViewTab";
import EnvVariableTab from "./ApplicationViewsTabs/EnvVariableTab/EnvVariableTab";
import AlertTab from "./ApplicationViewsTabs/AlertTab/AlertTab";
import HistoreTab from "./ApplicationViewsTabs/HistoryTab/HistoreTab";

function Applications(props) {
  const [applicatioActiveTab, setManualAuditactiveTab] = useState("Overview");

  console.log(applicatioActiveTab, "applicatioActiveTab");

  const tabsEnums = {
    Overview: <OverViewTab />,
    environmentVariables: <EnvVariableTab />,
    Alerts: <AlertTab />,
    eventHistory: <HistoreTab />,
  };

  return (
    <div className="application-top-wrapper">
      <div className="primary-heading-wrap">
        <h3>tic-tac-toe</h3>
        <div className="more-option-wrapper">
          <span>
            <StatusComponent status="success" customName="Deployed" />
          </span>
          <span>
            <MoreOptionsIcon />
          </span>
        </div>
      </div>

      <div>
        <ApplicationViewsTabs
          applicatioActiveTab={applicatioActiveTab}
          setManualAuditactiveTab={setManualAuditactiveTab}
        />
      </div>

      <div>{tabsEnums[applicatioActiveTab]}</div>
    </div>
  );
}

export default Applications;
