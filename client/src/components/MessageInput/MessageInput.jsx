import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import styles from "./MessageInput.module.css";

const SearchInput = ({ id, formdata, change, icon }) => {
  return (
    <div>
      <div className={styles.messageInput}>
        <input
          value={formdata.value}
          onBlur={(e) => change({ e, id, blur: true })}
          onChange={(e) => change({ e, id })}
          {...formdata.config}
          type="text"
          className={styles.input}
        />
        <div className={styles.iconContainer}>
          <AiOutlineSend className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
