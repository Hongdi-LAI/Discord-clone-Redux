import React from "react";
import "./SidebarChannel.css";
import { setChannelInfo } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hashtag">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
