import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.scss";

import { sideBarContants } from "./SideBarConstants";

function SideBar(props) {
  const { isSideBarOpen, onToggle, setActiveTab, activeTab } = props;
  console.log(activeTab, "activeTab");
  return (
    <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
      <div className="container-wrapper">
        <div>
          {sideBarContants?.map((sideCons, index) => (
            <div key={index}>
              {console.log(sideCons, "sideCons")}
              {sideCons?.positionStarts === "top" && (
                <div className="sidebar-top-container">
                  <Link
                    to={sideCons?.route?.available && sideCons?.route?.link}
                  >
                    <span
                      className={
                        activeTab === sideCons.heading?.toLocaleLowerCase()
                          ? "actual-value active"
                          : "actual-value"
                      }
                    >
                      <span>{sideCons?.icon}</span>
                      {isSideBarOpen && <span>{sideCons?.heading}</span>}
                    </span>
                  </Link>
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
                  <Link
                    to={sideCons?.route?.available && sideCons?.route?.link}
                  >
                    <span
                      onClick={sideCons?.heading === "" ? onToggle : ""}
                      className={
                        activeTab === sideCons.heading?.toLocaleLowerCase()
                          ? "actual-value active"
                          : "actual-value"
                      }
                    >
                      <span>{sideCons?.icon}</span>
                      {isSideBarOpen && <span>{sideCons?.heading}</span>}
                    </span>
                  </Link>
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
