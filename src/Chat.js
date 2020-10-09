import React from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.css";
function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages"></div>
      <div className="chat__input"></div>
    </div>
  );
}

export default Chat;
