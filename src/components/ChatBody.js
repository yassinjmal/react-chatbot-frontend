import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./ChatBody.css";

const ChatBody = forwardRef(({ messages, isTyping, dummyScrollRef }, ref) => {
  useEffect(() => {
    if (dummyScrollRef.current) {
      dummyScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, dummyScrollRef]);

  return (
    <div className="chat-body" ref={ref}>
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          initial={{ opacity: 0, x: msg.sender === "user" ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
        >
          {msg.text}
        </motion.div>
      ))}

      {isTyping && (
        <motion.div
          className="typing-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Bot is typing...
        </motion.div>
      )}

      <div ref={dummyScrollRef} className="dummy-scroll" />
    </div>
  );
});

export default ChatBody;