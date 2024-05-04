import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Applications from "../Applications/Applications";

import "./Dashboard.scss";

function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("applications");

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="dashboard-container">
      <SideBar
        activeTab={activeTab}
        onToggle={toggleSidebar}
        setActiveTab={setActiveTab}
        isSideBarOpen={isSideBarOpen}
      />

      <div className="content-wrapper">
        <NavBar isSideBarOpen={isSideBarOpen} onToggle={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Applications />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
