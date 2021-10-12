import React from "react";
import styles from "./AuthRight.module.css";

const AuthRight = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default AuthRight;
