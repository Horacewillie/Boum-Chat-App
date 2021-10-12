import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions/user_actions";
import { generateData, update, isFormValid } from "../../utils/formActions";
import styles from "./Login.module.css";
import FormField from "../../utils/FormField/FormField";
import AuthLayout from "../../hoc/AuthLayout";

const Login = (props) => {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "input Email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "input Password",
        },
        validation: {
          required: true,
          password: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  });

  const submitForm = (e) => {
    e.preventDefault();
    let dataToSubmit = generateData(state.formData, "login");
    let formIsValid = isFormValid(state.formData, "login");

    if (formIsValid) {
      props.dispatch(loginUser(dataToSubmit)).then((res) => {
        console.log(res);
        if (res.payload.success) {
          props.history.push("/");
        } else {
          setState({
            ...state,
            formError: true,
          });
        }
      });
    } else {
      setState({
        ...state,
        formError: true,
      });
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
  return (
    <AuthLayout>
      <form onSubmit={(e) => submitForm(e)}>
        <h4 className={styles.welcomeText}>Welcome Back!</h4>
        <div className={styles.emailContainer}>
          <p className={styles.title}>Email</p>
          <FormField
            id={"email"}
            formdata={state.formData.email}
            change={(element) => updateForm(element)}
          />
        </div>
        <div className={styles.passwordContainer}>
          <p className={styles.title}>Password</p>
          <FormField
            id={"password"}
            formdata={state.formData.password}
            change={(element) => updateForm(element)}
          />
        </div>
        <div
          style={{ color: "red", marginLeft: "10px", paddingBottom: "10px" }}
        >
          {state.formError ? <div>Please check your data</div> : null}
        </div>
        <button onClick={(e) => submitForm(e)} className={styles.btn}>
          LOG IN
        </button>
        <div className={styles.questionWrapper}>
          <span className={styles.noAccount}>Don't have an account?</span>
          <span className={styles.signIn}>
            <Link to="/sign-up">Sign Up</Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
};

export default connect()(withRouter(Login));
