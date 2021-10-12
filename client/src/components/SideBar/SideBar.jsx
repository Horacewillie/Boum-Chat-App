import React from "react";
import { useState } from "react";

import Channels from "../Channels/Channels";
import UserList from "../UserList/UserList";
import ProfileBar from "../ProfileBar/ProfileBar";

import ProfileModal from "../ProfileModal/ProfileModal";

import styles from "./SideBar.module.css";

const SideBar = ({ handleOpenClick, toggle, setToggle }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.channelsContainer}>
        {toggle === "channel" ? (
          <Channels handleClick={setToggle} handleOpenClick={handleOpenClick} />
        ) : (
          <UserList handleClick={setToggle} />
        )}
      </div>
      <ProfileModal modal={modal} />
      <ProfileBar openModal={openModal} />
    </div>
  );
};

export default SideBar;
