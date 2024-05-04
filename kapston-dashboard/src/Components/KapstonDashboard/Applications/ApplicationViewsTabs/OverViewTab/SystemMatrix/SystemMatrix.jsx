import React, { useState } from "react";
import MemoryMetrics from "./MemoryMetrics/MemoryMetrics";

import "./SystemMatrix.scss";
import CpuMetrics from "./CpuMetrics/CpuMetrics";

function SystemMatrix() {
  const [activeTab, setActiveTab] = useState("Memory");

  const [memoryData, setMemoryData] = useState([]);
  const [customizedMemoryData, setCustomizedMemoryData] = useState([]);
  const [maxMinTimeStamp, setMinMaxTimeStamp] = useState([]);

  const [CPUData, setCPUData] = useState([]);
  const [customizedCPUData, setCustomizedCPUData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  const handleTab = (e) => {
    setActiveTab(e.target.textContent);
  };

  return (
    <div className="system-metrics-wrapper">
      <h3>System metrics</h3>
      <div className="cpu-memory-tab" onClick={handleTab}>
        <div className={activeTab === "CPU" ? "tabs active-tabs-2" : "tabs"}>
          CPU
        </div>
        <div className={activeTab === "Memory" ? "tabs active-tabs-2" : "tabs"}>
          Memory
        </div>
      </div>
      <div className="sub-heading-wrap">
        {activeTab === "CPU" ? "CPU Utiliztion(%)" : "Memory"}
      </div>
      {activeTab === "Memory" ? (
        <div className="metrix-wrap">
          <MemoryMetrics
            memoryData={memoryData}
            setMemoryData={setMemoryData}
            maxMinTimeStamp={maxMinTimeStamp}
            setMinMaxTimeStamp={setMinMaxTimeStamp}
            customizedMemoryData={customizedMemoryData}
            setCustomizedMemoryData={setCustomizedMemoryData}
          />
        </div>
      ) : (
        <CpuMetrics
          CPUData={CPUData}
          setCPUData={setCPUData}
          customizedCPUData={customizedCPUData}
          setCustomizedCPUData={setCustomizedCPUData}
          timeData={timeData}
          setTimeData={setTimeData}
        />
      )}
    </div>
  );
}

export default SystemMatrix;
