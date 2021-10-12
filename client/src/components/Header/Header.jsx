import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h4 className={styles.headerText}>Welcome!</h4>
      </div>
    </div>
  );
};

export default Header;
