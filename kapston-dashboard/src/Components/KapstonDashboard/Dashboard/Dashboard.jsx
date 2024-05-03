import React, { useState } from 'react';

import './Dashboard.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('cliked')
    setIsSideBarOpen(!isSideBarOpen);
  };


  return (
    <div className='dashboard-container'>
      {/* <NavBar isSideBarOpen={isSideBarOpen} onToggle={toggleSidebar} /> */}
      <SideBar isSideBarOpen={isSideBarOpen} onToggle={toggleSidebar}/>
      <div className='content-wrapper'>
        main content
      </div>
    </div>
  )
}

export default Dashboard
