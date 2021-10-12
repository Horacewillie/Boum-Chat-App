import React from "react";
import { useState } from "react";
import { generateData, update, isFormValid } from "../../utils/formActions";

import { withRouter } from "react-router-dom";
import AuthRight from "../../hoc/AuthRight";
import MessageInput from "../MessageInput/MessageInput";
import ChatArea from "../ChatArea/ChatArea";
import Header from "../Header/Header";
import styles from "./RightSide.module.css";

const RightSide = ({ right, setRight }) => {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      message: {
        element: "input",
        value: "",
        config: {
          name: "message_input",
          type: "message",
          placeholder: "Type a message",
        },
        validation: {
          message: true,
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
    <AuthRight>
      <div>
        <Header />
        <p
          style={{
            fontFamily: "cursive",
            color: "white",
            marginLeft: "60px",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Please Select a channel!
        </p>
      </div>

      {/* <>
        <ChatArea />
        <MessageInput
          id={"message"}
          formdata={state.formData.message}
          change={(element) => updateForm(element)}
        />
      </> */}
    </AuthRight>
  );
};

export default RightSide;
