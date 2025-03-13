import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatBubble from "./components/ChatBubble";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Masquer toutes les autres pages */}
      <div className="hidden-content">
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="history" element={<div />} />
          <Route path="settings" element={<div />} />
          <Route path="settings/form" element={<div />} />
        </Routes>
      </div>
      
      {/* Afficher uniquement la bulle de chat */}
      <ChatBubble />
    </div>
  );
}

export default App;
