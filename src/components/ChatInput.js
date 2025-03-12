import React, { useState } from "react";
import "./ChatInput.css";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    } else if (e.key === "Escape") {
      setText("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default ChatInput;
