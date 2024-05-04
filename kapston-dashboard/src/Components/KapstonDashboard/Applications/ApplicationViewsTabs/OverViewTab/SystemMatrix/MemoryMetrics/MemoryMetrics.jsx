import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

import "./MemoryMetrics.scss";
import { fetchMemoryMetricsData } from "./MemoryMetricsApi";
import {
  customizeChartData,
  formatTime,
} from "../../../../../../Common/Utils/Utils";

function MemoryMetrics(props) {
  const {
    memoryData,
    setMemoryData,
    customizedMemoryData,
    setCustomizedMemoryData,
    maxMinTimeStamp,
    setMinMaxTimeStamp,
  } = props;


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
          },
        },
        series: customizedMemoryData,

        navigation: {
          menuItemStyle: {
            fontSize: "10px",
          },
        },
      });
    
  }, [customizedMemoryData]);

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

    if (memoryData?.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (memoryData?.length > 0 && customizedMemoryData?.length === 0) {
      let data = customizeChartData(memoryData);
      setCustomizedMemoryData(data);
    }
  }, [memoryData, customizedMemoryData]);
  return <div id="container"></div>;
}

export default MemoryMetrics;
