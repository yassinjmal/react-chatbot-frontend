import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import SettingsPage from "../pages/SettingsPage";
import HistoryPage from "../pages/HistoryPage";
import FormPage from "../pages/FormPage"; // Import the FormPage
import "./ChatBubble.css";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bubblePosition, setBubblePosition] = useState({ x: 20, y: 500 });
  const isDraggingRef = useRef(false);
  const isClickRef = useRef(false);
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setBubblePosition((prev) => ({
        x: Math.min(prev.x, screenWidth - 70),
        y: Math.min(prev.y, screenHeight - 100),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth, screenHeight]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMouseDown = (e) => {
    isClickRef.current = true;
    isDraggingRef.current = false;
    setTimeout(() => {
      if (isClickRef.current) {
        isDraggingRef.current = true;
        isClickRef.current = false;
      }
    }, 150);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    let newX = e.clientX - 30;
    let newY = e.clientY - 30;
    newX = Math.max(10, Math.min(newX, screenWidth - 70));
    newY = Math.max(50, Math.min(newY, screenHeight - 100));
    setBubblePosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (isClickRef.current && !isDraggingRef.current) {
      toggleChat(); // Ensure the bubble opens on click
    }
    isClickRef.current = false;
    isDraggingRef.current = false;
    setBubblePosition((prev) => ({
      x: prev.x < screenWidth / 2 ? 10 : screenWidth - 70,
      y: prev.y,
    }));
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="chat-bubble"
        style={{ left: bubblePosition.x, top: bubblePosition.y }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "✖" : "💬"}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }} // Decrease the duration for a quicker open
            style={{
              left: bubblePosition.x < screenWidth / 2 ? bubblePosition.x + 60 : bubblePosition.x - 280,
              top: Math.max(50, Math.min(bubblePosition.y, screenHeight - 400)),
            }}
          >
            <div className="chat-window-header">
              <h3 className="chat-title">ChatBot</h3>
              <div className="menu-container">
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                {menuOpen && (
                  <div className="menu-dropdown">
                    <button onClick={() => handleNavigation("/settings")}>Settings</button>
                    <button onClick={() => handleNavigation("/history")}>History</button>
                  </div>
                )}
              </div>
            </div>

            <div className="chat-window-content">
              <Routes>
                <Route path="/" element={<ChatPage smallView={true} />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/settings/form" element={<FormPage />} /> {/* Add FormPage route */}
              </Routes>
            </div>

            {(location.pathname === "/settings" || location.pathname === "/history" || location.pathname === "/form") && (
              <button className="back-to-chat-btn" onClick={() => handleNavigation("/")}>
                Return to Chat
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBubble;
