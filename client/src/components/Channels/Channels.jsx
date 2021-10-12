import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SearchInput from "../SearchInput/SearchInput";
import { generateData, update, isFormValid } from "../../utils/formActions";
import styles from "./Channels.module.css";

const Channels = ({ handleClick, handleOpenClick }) => {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      search: {
        element: "input",
        value: "",
        config: {
          name: "search_input",
          type: "search",
          placeholder: "Search",
        },
        validation: {
          search: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  });
  const updateForm = (element) => {
    const newFormData = update(element, state.formData);

    setState({
      ...state,
      formError: false,
      formData: newFormData,
    });
  };

  return (
    <>
      <div className={styles.sidebarHeader}>
        <h3 className={styles.text} onClick={() => handleClick("")}>
          Channels
        </h3>
        <div className={styles.icon} onClick={() => handleOpenClick()}>
          <AiOutlinePlus className={styles.iconPlus} />
        </div>
      </div>
      <SearchInput
        id={"search"}
        formdata={state.formData.search}
        change={(element) => updateForm(element)}
      />
      {[1, 2, 3, 4].map(() => (
        <div className={styles.channels} onClick={() => handleClick("")}>
          <div className={styles.titleContainer}>
            <h3 className={styles.abbrev}>FD</h3>
          </div>
          <div className={styles.channelTitle}>FrontEnd Developers</div>
        </div>
      ))}
    </>
  );
};

export default Channels;
