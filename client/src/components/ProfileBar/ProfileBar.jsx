import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./ProfileBar.module.css";
import photo1 from "../../assets/photo1.jpg";

const ProfileBar = ({openModal}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={photo1} alt="" />
      </div>
      <h3 className={styles.text}>Horace Akpan</h3>
      <div>
        <MdKeyboardArrowDown onClick={() => openModal()} className={styles.icon} />
      </div>
    </div>
  );
};

export default ProfileBar;
