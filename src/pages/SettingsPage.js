import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Icônes pour masquer/afficher
import "./SettingsPage.css";

const SettingsPage = ({ darkMode, toggleDarkMode }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "admin123"; // Mot de passe correct (à sécuriser)

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
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </label>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
      <label>
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