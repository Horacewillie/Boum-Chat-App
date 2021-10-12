import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routes from "./Routes";
import Reducer from "./redux/reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//Middlewares
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
const createStoreWithMiddleWare = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleWare(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
