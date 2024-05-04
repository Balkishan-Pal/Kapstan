import React, { useEffect, useState } from "react";

import "./Applications.scss";
import StatusComponent from "../../Common/StatausComponent/StatusComponent";
import MoreOptionsIcon from "../../Common/ImagesAndIcons/MoreOptionsIcon";
import ApplicationViewsTabs from "./ApplicationViewsTabs/ApplicationViewsTabs";
import OverViewTab from "./ApplicationViewsTabs/OverViewTab/OverViewTab";
import EnvVariableTab from "./ApplicationViewsTabs/EnvVariableTab/EnvVariableTab";
import AlertTab from "./ApplicationViewsTabs/AlertTab/AlertTab";
import HistoreTab from "./ApplicationViewsTabs/HistoryTab/HistoreTab";

const statusEnums = {
  deployed: "Deployed",
  uninstalled: "Uninstalled",
};

function Applications(props) {
  const { applicationData, activeApplication } = props;
  const [applicatioActiveTab, setManualAuditactiveTab] = useState("Overview");
  const [dataToShow, setDataToShow] = useState([]);

  const tabsEnums = {
    Overview: <OverViewTab {...props} dataToShow={dataToShow} />,
    environmentVariables: <EnvVariableTab {...props} />,
    Alerts: <AlertTab {...props} />,
    eventHistory: <HistoreTab {...props} />,
  };

  useEffect(() => {
    if (applicationData?.length > 0 && activeApplication) {
      const dataToShow = applicationData.filter(
        (data) => data.name === activeApplication
      );
      setDataToShow(dataToShow);
    }
  }, [applicationData, activeApplication]);

  return (
    <div className="application-top-wrapper">
      <div className="primary-heading-wrap">
        <h3>{dataToShow?.[0] && dataToShow?.[0]?.name}</h3>
        <div className="more-option-wrapper">
          <span>
            <StatusComponent status="success" customName={statusEnums[dataToShow?.[0]?.status] || 'Deployed'} />
          </span>
          <span>
            <MoreOptionsIcon />
          </span>
        </div>
      </div>

      <div>
        <ApplicationViewsTabs
          {...props}
          applicatioActiveTab={applicatioActiveTab}
          setManualAuditactiveTab={setManualAuditactiveTab}
        />
      </div>

      <div>{tabsEnums[applicatioActiveTab]}</div>
    </div>
  );
}

export default Applications;
