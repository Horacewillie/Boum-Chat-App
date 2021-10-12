import React from 'react';
import styles from "./AuthLayout.module.css";

const AuthLayout = props => {
    return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>
          {props.children}
      </div>
    </div>
    )
}

export default AuthLayout
