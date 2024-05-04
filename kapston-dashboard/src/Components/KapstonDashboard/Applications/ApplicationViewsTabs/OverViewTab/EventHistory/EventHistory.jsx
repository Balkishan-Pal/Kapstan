import React, { useEffect, useState } from "react";
import "./EventHistory.scss";
import StatusComponent from "../../../../../Common/StatausComponent/StatusComponent";
import { fetchEvetHistoryData } from "./ApiEventHistory";
import { converTimeToHumanReadableForm } from "../../../../../Common/Utils/Utils";

const statusEnums = {
  failed: "failed",
  successful: "success",
  in_progress: "inprogress",
};

function EventHistory() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchEvetHistoryData();
        setHistoryData(data);
      } catch (error) {
        setHistoryData([]);
      }
    }

    fetchData();
  }, []);
  return (
    <section className="event-history-wrapper">
      <h3 className="heading">Event History</h3>

      <div className="table-wrapper">
        <div className="table-heads">
          <span>Event</span>
          <span>Version</span>
          <span>Status</span>
        </div>
        <div className="table-body-wrapper">
          {historyData?.map(
            (historyInfo, index) =>
              index < 4 && (
                <div className="table-row" key={index}>
                  <div>
                    <div>{historyInfo?.event}</div>
                    <div className="event-time">
                      {historyInfo?.timestamp &&
                        converTimeToHumanReadableForm(
                          historyInfo?.timestamp * 1000
                        )}
                    </div>
                  </div>
                  <div>{historyInfo?.version}</div>
                  <div>
                    <StatusComponent
                      status={statusEnums[historyInfo?.status]}
                    />
                  </div>
                </div>
              )
          )}
          {historyData?.length >= 4 && <p className="view-more">View more</p>}
        </div>
      </div>
    </section>
  );
}

export default EventHistory;
