import React from "react";
import "./OverViewTab.scss";
import ArrowUpIcon from "../../../../Common/ImagesAndIcons/ArrowUpIcon";
import DoneStausIcon from "../../../../Common/ImagesAndIcons/DoneStausIcon";
import KapPrimaryButton from "../../../../Common/KapPrimaryButton/KapPrimaryButton";

function OverViewTab() {

  const handleDeploy =()=>{
    console.log('clicked')
  }


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
            <p className="info-heading">1.2.1</p>
          </span>
        </div>

        <div className="footer-wrap">
          <KapPrimaryButton buttonText='Deploy'  onClick = {handleDeploy}  />
          <p className="sub-heading">Last updated 5 hours ago</p>
        </div>
      </section>

      <div></div>
    </div>
  );
}

export default OverViewTab;
