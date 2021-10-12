import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./UserList.module.css";

const UserList = ({ handleClick }) => {
  return (
    <>
      <div className={styles.sidebarHeader}>
        <div className={styles.icon} onClick={() => handleClick("channel")}>
          <MdKeyboardArrowLeft className={styles.iconArrow} />
        </div>
        <h3 className={styles.text}>All Channels</h3>
      </div>

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={styles.channels}>
          {/* <div className={styles.titleContainer}>
            <h3 className={styles.abbrev}>FD</h3>
          </div>
          <div className={styles.channelTitle}>FrontEnd Developers</div> */}
        </div>
      ))}
    </>
  );
};

export default UserList;
