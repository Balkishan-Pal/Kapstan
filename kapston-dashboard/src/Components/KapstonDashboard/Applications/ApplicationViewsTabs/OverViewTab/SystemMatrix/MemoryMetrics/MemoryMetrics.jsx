import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

import "./MemoryMetrics.scss";
import { fetchMemoryMetricsData } from "./MemoryMetricsApi";
import { customizeChartData } from "../../../../../../Common/Utils/Utils";

function formatTime(timestamp) {
  const milliseconds = timestamp * 1000;
  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return formattedTime;
}

function MemoryMetrics() {
  const [memoryData, setMemoryData] = useState([]);
  const [customizedMemoryData, setCustomizedMemoryData] = useState([]);
  const [maxMinTimeStamp, setMinMaxTimeStamp] = useState([]);
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "spline",
        scrollablePlotArea: {
          minWidth: 500,
          scrollPositionX: 1,
        },
      },
      title: {
        text: "",
      },

      xAxis: [
        {
          visible: true,
          labels: {
            overflow: "justify",
          },
          lineWidth: 2,
          tickInterval: 8,
          categories: maxMinTimeStamp,
        },
      ],
      yAxis: {
        title: {
          text: "",
        },
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        tickInterval: 5,
      },
      tooltip: {
        valueSuffix: "",
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
          //   pointInterval: 3600000, // one hour
          //   pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
        },
      },
      series: customizedMemoryData,

      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
    });
  }, [customizedMemoryData, maxMinTimeStamp]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMemoryMetricsData();
        setMemoryData(data);
        const timestamps = data.map(({ timestamp }) => parseInt(timestamp));

        const formattedTimes = timestamps.map((timestamp) =>
          formatTime(timestamp)
        );

        setMinMaxTimeStamp(formattedTimes);
      } catch (error) {
        setMemoryData([]);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (memoryData?.length > 0 && customizedMemoryData?.length === 0) {
      let data = customizeChartData(memoryData);
      setCustomizedMemoryData(data);
    }
  }, [memoryData,customizedMemoryData]);
  return <div id="container"></div>;
}

export default MemoryMetrics;
