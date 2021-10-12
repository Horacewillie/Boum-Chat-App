import React from "react";
import styles from "./ChatCard.module.css";
import photo1 from "../../assets/photo1.jpg";

const ChatCard = () => {
  return (
    <div className={styles.container}>
      <img style={{ width: "50px" }} src={photo1} alt="" />
      <div className={styles.leftP}>
        <div className={styles.textContainer}>
          <h5 className={styles.name}>Horace Akpan</h5>
          <span className={styles.timeStamp}>{Date.now()}</span>
        </div>
        <p className={styles.message}>
          I will be a great Developer someday.. All i need do is put in work
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
