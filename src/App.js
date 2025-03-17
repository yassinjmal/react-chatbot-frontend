import React from "react";
import ChatBubble from "./components/ChatBubble";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatBubble /> {/* ChatBubble est maintenant l'application principale */}
    </div>
  );
}

export default App;