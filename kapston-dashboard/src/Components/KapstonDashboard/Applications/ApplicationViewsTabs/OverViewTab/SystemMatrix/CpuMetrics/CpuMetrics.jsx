import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

import "./CpuMetrics.scss";
import { fetchCPUMetricsData } from "./ApiCpuMetrics";
import {
  customizeChartData,
  formatTime,
} from "../../../../../../Common/Utils/Utils";

function CpuMetrics(props) {
  const {
    CPUData,
    setCPUData,
    customizedCPUData,
    setCustomizedCPUData,
    timeData,
    setTimeData,
  } = props;

  useEffect(() => {
    Highcharts.chart("chart-container", {
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
          categories: timeData,
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
      series: customizedCPUData,

      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
    });
  }, [customizedCPUData]);

  useState(() => {
    async function fetchData() {
      try {
        const data = await fetchCPUMetricsData();
        setCPUData(data);

        const timestamps = data.map(({ timestamp }) => parseInt(timestamp));

        const formattedTimes = timestamps.map((timestamp) =>
          formatTime(timestamp)
        );

        setTimeData(formattedTimes);
      } catch (error) {
        setCPUData([]);
      }
    }

    if (CPUData?.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (CPUData?.length > 0 && customizedCPUData?.length === 0) {
      let data = customizeChartData(CPUData);
      setCustomizedCPUData(data);
    }
  }, [CPUData, customizedCPUData]);

  return <div id="chart-container"></div>;
}

export default CpuMetrics;
