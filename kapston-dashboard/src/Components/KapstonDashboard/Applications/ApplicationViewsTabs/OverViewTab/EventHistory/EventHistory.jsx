import React from "react";
import "./EventHistory.scss";
import StatusComponent from "../../../../../Common/StatausComponent/StatusComponent";

const testData = [
  {
    event: "Deploy",
    version: "1.2.1",
    status: "inprogress",
    time: "1 minutes ago",
  },
  { event: "Deploy", version: "1.2.1", status: "success", time: "5 hours ago" },

  {
    event: "Uninstall",
    version: "1.2.1",
    status: "failed",
    time: "2 hours ago",
  },
  {
    event: "Deploy",
    version: "1.2.1",
    status: "success",
    time: "10 hours ago",
  },
  {
    event: "Deploy",
    version: "1.2.1",
    status: "inprogress",
    time: "10 hours ago",
  },
];

function EventHistory() {
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
          {testData?.map(
            (historyInfo, index) =>
              index < 4 && (
                <div className="table-row" key={index}>
                  <div>
                    <div>{historyInfo?.event}</div>
                    <div className="event-time">{historyInfo?.time}</div>
                  </div>
                  <div>{historyInfo?.version}</div>
                  <div>
                    <StatusComponent status={historyInfo?.status} />{" "}
                  </div>
                </div>
              )
          )}
          {testData?.length >= 4 && <p className="view-more">View more</p>}
        </div>
      </div>
    </section>
  );
}

export default EventHistory;
