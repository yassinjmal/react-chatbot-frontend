import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import FormPage from "./pages/FormPage"; // Assurez-vous d'importer FormPage
import ChatBubble from "./components/ChatBubble";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Routes>
        {/* ChatPage devient la page principale */}
        <Route path="/" element={<Layout darkMode={darkMode} />}>
          <Route index element={<ChatPage />} /> {/* Route principale */}
          <Route path="history" element={<HistoryPage />} />
          <Route
            path="settings"
            element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route path="settings/form" element={<FormPage />} /> {/* Nouvelle route */}
        </Route>
      </Routes>
      <ChatBubble /> {/* ChatBubble reste visible */}
    </div>
  );
}

export default App;
