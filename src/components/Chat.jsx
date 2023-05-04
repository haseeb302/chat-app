import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Message from "./Message";
import Send from "./Send";
// import "./chat.scss";

const Chat = () => {
  // const { data } = useContext(ChatContext);
  let data = [];

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Message />
      <Send />
    </div>
  );
};

export default Chat;
