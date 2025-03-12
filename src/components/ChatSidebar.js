import React from "react";
import { NavLink } from "react-router-dom";
import "./ChatSidebar.css";

function ChatSidebar() {
  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-robot"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827..." />
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0..." />
        </svg>
        <h2>ChatBot</h2>
      </div>

      <p>Talk to AI chatbot about anything</p>

      <nav className="sidebar-menu">
        <NavLink to="/" end>
          💡 New Chat
        </NavLink>
        <NavLink to="history">
          📜 Chat History
        </NavLink>
        <NavLink to="settings">
          ⚙️ Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default ChatSidebar;
