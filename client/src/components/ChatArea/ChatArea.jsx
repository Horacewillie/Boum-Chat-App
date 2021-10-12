import React from "react";
import ChatCard from "../ChatCard/ChatCard";
import styles from "./ChatArea.module.css";

const ChatArea = () => {
  return (
    <div className={styles.chatArea}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
        <ChatCard />
      ))}
    </div>
  );
};

export default ChatArea;
