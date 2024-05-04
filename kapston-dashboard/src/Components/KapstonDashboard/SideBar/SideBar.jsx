import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.scss";

import { sideBarContants } from "./SideBarConstants";
import ShrinkWindowIcon from "../../Common/ImagesAndIcons/ShrinkWindowIcon";

function SideBar(props) {
  const { isSideBarOpen, onToggle, activeTab } = props;
  return (
    <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
      <div className="container-wrapper">
        <div>
          {sideBarContants?.map((sideCons, index) => (
            <div key={index}>
              {sideCons?.positionStarts === "top" && (
                <div className="sidebar-top-container">
                  <p
                    className={
                      isSideBarOpen ? "p-wrap" : "p-wrap-without-width"
                    }
                  >
                    <Link
                      to={sideCons?.route?.available && sideCons?.route?.link}
                    >
                      <span
                        className={
                          activeTab === sideCons.heading?.toLocaleLowerCase() &&
                          sideCons?.heading !== "Kapstan"
                            ? "actual-value active"
                            : sideCons?.heading === "Kapstan" && isSideBarOpen
                            ? "kapston-logo-style"
                            : "actual-value"
                        }
                      >
                        <span>{sideCons?.icon}</span>
                        {isSideBarOpen && (
                          <span
                            className={
                              sideCons?.heading === "Kapstan"
                                ? "kapstan-styles"
                                : ""
                            }
                          >
                            {sideCons?.heading}
                            {sideCons?.heading === "Security" && (
                              <span className="beta-tag">Beta</span>
                            )}
                          </span>
                        )}
                      </span>
                    </Link>
                  </p>
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
                  <p
                    className={
                      isSideBarOpen ? "p-wrap" : "p-wrap-without-width"
                    }
                  >
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
                        <span>
                          {sideCons?.heading === "" && !isSideBarOpen ? (
                            <ShrinkWindowIcon rotate="180" />
                          ) : (
                            sideCons?.icon
                          )}
                        </span>
                        {isSideBarOpen && <span>{sideCons?.heading}</span>}
                      </span>
                    </Link>
                  </p>
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
