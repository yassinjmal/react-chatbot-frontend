import React, { useState } from "react";
import "./FormPage.css"; // Import the CSS file

const FormPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    adminId: "",
    route: "",
    password: "",
    port: "",
    userRole: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error message when user types
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.adminId.trim()) newErrors.adminId = "Admin ID is required!";
    if (!formData.route.trim()) newErrors.route = "Route is required!";
    if (!formData.password.trim()) newErrors.password = "Password is required!";
    if (!formData.port.trim()) newErrors.port = "Port is required!";
    if (!formData.userRole.trim()) newErrors.userRole = "User Role is required!";

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Admin Configuration</h2>
        <form onSubmit={handleSubmit}>
          {/* Admin ID Field */}
          <div className="form-group">
            <label htmlFor="adminId">Admin ID</label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              value={formData.adminId}
              onChange={handleChange}
            />
            {errors.adminId && <span className="error-message">{errors.adminId}</span>}
          </div>

          {/* Route Field */}
          <div className="form-group">
            <label htmlFor="route">Route</label>
            <input
              type="text"
              id="route"
              name="route"
              value={formData.route}
              onChange={handleChange}
            />
            {errors.route && <span className="error-message">{errors.route}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Port Field */}
          <div className="form-group">
            <label htmlFor="port">Port</label>
            <input
              type="number"
              id="port"
              name="port"
              value={formData.port}
              onChange={handleChange}
            />
            {errors.port && <span className="error-message">{errors.port}</span>}
          </div>

          {/* User Role Dropdown */}
          <div className="form-group">
            <label htmlFor="userRole">User Role</label>
            <select
              id="userRole"
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            {errors.userRole && <span className="error-message">{errors.userRole}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
