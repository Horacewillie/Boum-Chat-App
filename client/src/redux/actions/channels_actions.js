import axios from "axios";
import { CHANNEL_SERVER } from "../../utils/misc";
import { CREATE_CHANNEL } from "./types";

export function createChannel(dataToSubmit) {
  const request = axios
    .post(`${CHANNEL_SERVER}/create-channel`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: CREATE_CHANNEL,
    payload: request,
  };
}
