import React from "react";
import "./HistoryPage.css";

function HistoryPage() {
  const chatLogs = [
    { id: 1, title: "Chat #1 - Asking about X" },
    { id: 2, title: "Chat #2 - Discussing Y" },
  ];

  return (
    <div className="history-page">
      <h2>Chat History</h2>
      <ul>
        {chatLogs.map((log) => (
          <li key={log.id}>{log.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;