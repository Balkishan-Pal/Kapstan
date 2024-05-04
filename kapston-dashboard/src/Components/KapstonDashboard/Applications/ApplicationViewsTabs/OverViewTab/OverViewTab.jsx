import React from "react";
import "./OverViewTab.scss";
import ArrowUpIcon from "../../../../Common/ImagesAndIcons/ArrowUpIcon";
import DoneStausIcon from "../../../../Common/ImagesAndIcons/DoneStausIcon";
import KapPrimaryButton from "../../../../Common/KapPrimaryButton/KapPrimaryButton";
import EventHistory from "./EventHistory/EventHistory";
import { converTimeToHumanReadableForm } from "../../../../Common/Utils/Utils";

function OverViewTab(props) {
  const { dataToShow } = props;



  return (
    <div className="overview-wrapper">
      <section className="service-info-wrapper">
        <div className="heading-wrap">
          <span className="heading">Service info</span>
          <ArrowUpIcon />
        </div>

        <div className="version-wrapper">
          <span className="current-wrap">
            <p className="sub-heading">Current version</p>

            <span className="data-wrap">
              <DoneStausIcon />
              <p className="info-heading">In sync</p>
            </span>
          </span>

          <span className="deploy-wrap">
            <p className="sub-heading">Desired version</p>
            <p className="info-heading">
              {dataToShow?.[0] && dataToShow?.[0]?.desiredVersion}
            </p>
          </span>
        </div>

        <div className="footer-wrap">
          <KapPrimaryButton buttonText="Deploy" />
          <p className="sub-heading">{`Last updated ${
            dataToShow?.[0] &&
            converTimeToHumanReadableForm(dataToShow?.[0]?.updatedAt * 1000)
          }`}</p>
        </div>
      </section>

      <div className="metrics-wrapper">
        <section className="system-metrics-wrap"></section>
        <section className="history-wrap">
          <EventHistory />
        </section>
      </div>
    </div>
  );
}

export default OverViewTab;
