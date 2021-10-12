import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Auth from "./hoc/AuthCheck";

function Routes() {
  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/sign-up" exact component={Auth(SignUp, false)} />
        <Route path="/" exact component={Auth(Home, true)} />
      </Switch>
    </div>
  );
}

export default Routes;
