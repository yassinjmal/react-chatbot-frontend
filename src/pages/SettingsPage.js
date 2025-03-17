import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Icons for showing/hiding password
import "./SettingsPage.css";

const SettingsPage = ({ darkMode, toggleDarkMode }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "admin123"; // Correct password (to be secured)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/settings/form");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="icon-button"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </label>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
      <label htmlFor="darkMode">
        Dark Mode:
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </label>
    </div>
  );
};

export default SettingsPage;
