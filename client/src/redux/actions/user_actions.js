import axios from "axios";
import { USER_SERVER } from "../../utils/misc";
import { AUTH_USER, REGISTER_USER, LOGIN_USER } from "./types";

export function auth() {
  const request = axios.get(`${USER_SERVER}/auth`).then((res) => {
    return res.data;
  });

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/sign-up`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
