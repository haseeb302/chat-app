import { useContext, useEffect, useState } from "react";
import "./styles/chat.scss";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  console.log(chats);
  return (
    <>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            className="chats-container"
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <div className="avatar-container">
              <img className="avatar" src={chat[1]?.userInfo.photoURL} />
            </div>
            <div className="chats-info-wrapper">
              <span className="sender-name">
                {chat[1]?.userInfo.displayName}
              </span>
              <span className="last-message">{chat[1]?.lastMessage?.text}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default Chats;
