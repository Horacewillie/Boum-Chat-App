import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styles from "./Home.module.css";
import RightSide from "../../components/RightSide/RightSide";
import SideBar from "../../components/SideBar/SideBar";
import AddChannel from "../../components/AddChannel/AddChannel";

const Home = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [toggle, setToggle] = useState("channel");

  const handleOpenClick = () => {
    setPopUp((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <SideBar
          toggle={toggle}
          setToggle={setToggle}
          handleOpenClick={handleOpenClick}
        />
      </div>
      <div className={styles.rightSide}>
        <RightSide />
      </div>
      <AddChannel showPopUp={popUp} setPopUp={setPopUp} />
    </div>
  );
};

export default connect()(Home);
