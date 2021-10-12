import React from "react";
import {AiOutlineTwitter} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import styles from "./ProfileModal.module.css";

const ProfileModal = ({ modal }) => {
  return modal ? (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div  className={styles.iconCon}>
            <CgProfile className={styles.icon} />
        </div>
        <h3 className={styles.text}>Profile</h3>
      </div>
      <div className={styles.tweet}>
        <div  className={styles.iconCon}>
            <AiOutlineTwitter className={styles.icon} />
        </div>
        <h3 className={styles.text}>Tweeter</h3>
      </div>
      <div className={styles.line}></div>
      <div className={styles.logout}>
        <div className={styles.iconCon}>
            <FiLogOut className={styles.iconD}/>
        </div>
        <h3 className={styles.textD}>Logout</h3>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProfileModal;
