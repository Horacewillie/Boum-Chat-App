import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./FormField.module.css";

const FormField = ({ id, formdata, change, icon }) => {
  const showError = () => {
    let errorMessage = "";
    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className={styles.error}>{formdata.validationMessage}</div>
      );
    }
    return errorMessage;
  };
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className={styles.formBlock}>
            <div className={styles.formContainer}>
            {icon ? (
                <span className={styles.iconContainer}>
                  <AiOutlineSearch className={styles.icon} />
                </span>
              ) : null}
              <input
                className={styles.inputArea}
                value={formdata.value}
                onBlur={(e) => change({ e, id, blur: true })}
                onChange={(e) => change({ e, id })}
                {...formdata.config}
              />
              {showError()}
            </div>
          </div>
        );
        break;
      case 'textArea':
        formTemplate =(
          <div className={styles.formBlock}>
            <div className={styles.formContainer}>
             <textarea  className={styles.textArea}
                value={formdata.value}
                onBlur={(e) => change({ e, id, blur: true })}
                onChange={(e) => change({ e, id })}
                {...formdata.config} name="" id="" cols="30" rows="10" />
                {showError()}
            </div>
          </div>
        )
        break;
      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
};

FormField.displayName = "FormField";

export default FormField;
