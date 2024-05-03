import React from "react";
import "./SideBar.scss";
import { sideBarContants } from "./SideBarConstants";

function SideBar(props) {
  const { isSideBarOpen, onToggle } = props;
  return (
    <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
      <div className="container-wrapper">
        <div>
          {sideBarContants?.map((sideCons, index) => (
            <div key={index}>
              {sideCons?.positionStarts === "top" && (
                <div className="sidebar-top-container">
                  <span className="actual-value">
                    <span>{sideCons?.icon}</span>
                    {isSideBarOpen && <span>{sideCons?.heading}</span>}
                  </span>
                </div>
              )}
              {sideCons?.seperatorPresent &&
                sideCons?.positionStarts === "top" && (
                  <hr className="seperator"></hr>
                )}
            </div>
          ))}
        </div>

        <div>
          {sideBarContants?.map((sideCons, index) => (
            <div key={index}>
              {sideCons?.positionStarts === "bottom" && (
                <div className="sidebar-bottom-container">
                  <span className="actual-value">
                    <span>{sideCons?.icon}</span>
                    {isSideBarOpen && <span>{sideCons?.heading}</span>}
                  </span>
                </div>
              )}
              {sideCons?.seperatorPresent &&
                sideCons?.positionStarts === "bottom" && (
                  <hr className="seperator"></hr>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
