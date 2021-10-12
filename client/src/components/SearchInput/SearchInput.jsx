import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchInput.module.css";

const SearchInput = ({ id, formdata, change, icon }) => {
  return (
    <div className={styles.searchInput}>
      <div className={styles.inputContainer}>
        <AiOutlineSearch className={styles.iconPlus} />
        <input
          value={formdata.value}
          onBlur={(e) => change({ e, id, blur: true })}
          onChange={(e) => change({ e, id })}
          {...formdata.config}
          className={styles.input}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
