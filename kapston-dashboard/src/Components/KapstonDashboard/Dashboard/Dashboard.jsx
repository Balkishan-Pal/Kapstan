import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Applications from "../Applications/Applications";

import "./Dashboard.scss";
import { fetchApplicationData } from "./APIApplications";

function Dashboard() {
  const [activeApplication, setActiveApplication] = useState("tic-tac-toc");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("applications");
  const [applicationData, setApplicationData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchApplicationData();
        setApplicationData(data);
      } catch (error) {
        setApplicationData([]);
      }
    }

    fetchData();
  }, []);

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
        <NavBar
          isSideBarOpen={isSideBarOpen}
          onToggle={toggleSidebar}
          activeApplication={activeApplication}
          setActiveApplication={setActiveApplication}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Applications
                applicationData={applicationData}
                activeApplication={activeApplication}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <Applications
                applicationData={applicationData}
                activeApplication={activeApplication}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
