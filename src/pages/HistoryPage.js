import React from "react";
import { motion } from "framer-motion";
import "./HistoryPage.css";

const HistoryPage = () => {
  const chatLogs = [
    { id: 1, title: "Chat #1 - Invoice Issue", timestamp: "2025-03-12 14:20" },
    { id: 2, title: "Chat #2 - Adding a New Client", timestamp: "2025-03-11 10:45" },
    { id: 3, title: "Chat #3 - Stock Availability", timestamp: "2025-03-10 16:30" },
  ];

  return (
    <div className="history-page">
      <h2>Chat History</h2>
      <ul>
        {chatLogs.map((log) => (
          <motion.li
            key={log.id}
            className="history-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: log.id * 0.1 }}
          >
            <div className="history-title">{log.title}</div>
            <div className="history-timestamp">{log.timestamp}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
