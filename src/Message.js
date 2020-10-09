import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar src="" alt="" />
      <div className="message__info">
        <h4>
          Hongdi
          <span className="message__timestamp">this a timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
