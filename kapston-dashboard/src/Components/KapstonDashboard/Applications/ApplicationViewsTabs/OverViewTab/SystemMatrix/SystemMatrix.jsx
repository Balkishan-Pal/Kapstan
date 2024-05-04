import React, { useState } from "react";
import MemoryMetrics from "./MemoryMetrics/MemoryMetrics";

import "./SystemMatrix.scss";

function SystemMatrix() {
  const [activeTab, setActiveTab] = useState("CPU");

  const handleTab = (e) => {
    setActiveTab(e.target.textContent);
  };

  return (
    <div className="system-metrics-wrapper">
      <h3>System metrics</h3>
      <div className="cpu-memory-tab" onClick={handleTab}>
        <div className={activeTab === "CPU" ? "tabs active-tabs-2" : "tabs"}>CPU</div>
        <div className={activeTab === "Memory" ? "tabs active-tabs-2" : "tabs"}>
          Memory
        </div>
      </div>
      <div className="sub-heading-wrap">{activeTab === "CPU" ? "CPU Utiliztion(%)" : "Memory"}</div>
      {activeTab === "Memory" ? (
        <div className="metrix-wrap">
          <MemoryMetrics />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SystemMatrix;
