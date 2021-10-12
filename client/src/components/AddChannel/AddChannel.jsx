import React from "react";
import { useState, useRef } from "react";
import FormField from "../../utils/FormField/FormField";
import Button from "../../utils/Button/Button";
import { generateData, update, isFormValid } from "../../utils/formActions";
import styles from "./AddChannel.module.css";

const AddChannel = ({ showPopUp, setPopUp }) => {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      title: {
        element: "input",
        value: "",
        config: {
          name: "title_input",
          type: "title",
          placeholder: "Enter title of Channel",
        },
        validation: {
          required: true,
          title: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      description: {
        element: "textArea",
        value: "",
        config: {
          name: "description_input",
          type: "description",
          placeholder: "Enter Description",
        },
        validation: {
          required: true,
          description: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  });
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setPopUp(false);
    }
  };
  const updateForm = (element) => {
    const newFormData = update(element, state.formData);

    setState({
      ...state,
      formError: false,
      formData: newFormData,
    });
  };
  return showPopUp ? (
    <div className={styles.modalWrapper} ref={modalRef} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>NEW CHANNEL</div>
        <div className={styles.formWrapper}>
          <FormField
            id={"title"}
            formdata={state.formData.title}
            change={(element) => updateForm(element)}
          />
        </div>
        <div className={styles.formWrapper}>
          <FormField
            id={"description"}
            formdata={state.formData.description}
            change={(element) => updateForm(element)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.btn}>Save</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddChannel;
