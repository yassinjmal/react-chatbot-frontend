import React, { useState, useEffect, useRef } from "react";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";
import "./ChatPage.css";

function ChatPage({ smallView }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);
  const dummyScrollRef = useRef(null);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setIsTyping(true);

    try {
      // Uncomment this fetch logic if connecting to backend
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }), // Send user message to the backend
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply }, // Use the bot's response from the backend
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      if (error.response) {
        console.error("Status code:", error.response.status);
        console.error("Response data:", error.response.data);
      }
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't process your message." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto-scroll when messages change
  useEffect(() => {
    if (dummyScrollRef.current) {
      dummyScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className={`chat-page ${smallView ? "small" : ""}`}>
      <div className="chat-controls">
        <button className="clear-chat-btn" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
      <ChatBody
        messages={messages}
        isTyping={isTyping}
        ref={chatBodyRef}
        dummyScrollRef={dummyScrollRef}
      />
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
