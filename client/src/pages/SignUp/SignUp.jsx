import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { generateData, update, isFormValid } from "../../utils/formActions";
import { registerUser } from "../../redux/actions/user_actions";
import styles from "./SignUp.module.css";
import FormField from "../../utils/FormField/FormField";
//import Button from "../../utils/Button/Button";
import AuthLayout from "../../hoc/AuthLayout";

const SignUp = (props) => {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "name",
          placeholder: "input Name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      username: {
        element: "input",
        value: "",
        config: {
          name: "username_input",
          type: "username",
          placeholder: "input Username",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
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
  console.log(props);

  const submitForm = (e) => {
    e.preventDefault();
    let dataToSubmit = generateData(state.formData, "signup");
    let formIsValid = isFormValid(state.formData, "signup");

    if (formIsValid) {
      props
        .dispatch(registerUser(dataToSubmit))
        .then((res) => {
          console.log(res, "register");
          if (res.payload.success) {
            setState({
              ...state,
              formError: false,
              formSuccess: true,
            });
            setTimeout(() => {
              props.history.push("/login");
            }, 3000);
          } else {
            setState({
              ...state,
              formError: true,
            });
          }
        })
        .catch((e) => {
          setState({
            ...state,
            formError: true,
          });
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
        <h4 className={styles.welcomeText}>Register</h4>
        <div className={styles.passwordContainer}>
          <p className={styles.title}>Name</p>
          <FormField
            id={"name"}
            formdata={state.formData.name}
            change={(element) => updateForm(element)}
          />
        </div>
        <div className={styles.passwordContainer}>
          <p className={styles.title}>Username</p>
          <FormField
            id={"username"}
            formdata={state.formData.username}
            change={(element) => updateForm(element)}
          />
        </div>
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
          SIGN IN
        </button>
        <div className={styles.questionWrapper}>
          <span className={styles.noAccount}>Have an Account?</span>
          <span className={styles.signIn}>
            <Link to="/login">Sign In</Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
};

export default connect()(SignUp);
