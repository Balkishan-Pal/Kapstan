import React from "react";
import "./NavBar.scss";
import ArrowDownIcon from "../../Common/ImagesAndIcons/ArrowDownIcon";
import ApplicationPopover from "./ApplicationPopover/ApplicationPopover";

function NavBar(props) {

  return (
    <div className="navbar-top-wrapper">
      <div className="applications-wrap">
        <span className="heading">Applications</span>
        <span><ApplicationPopover {...props} /></span>
      </div>

      <div className="user-info-wrap">
        <span className="name-initials">BP</span>
        <span className="name">Balkishan Pal</span>
        <span className="arrow-wrap">
          <ArrowDownIcon />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
