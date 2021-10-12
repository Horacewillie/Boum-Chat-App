import { CREATE_CHANNEL } from "../actions/types";

//eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_CHANNEL:
      return { ...state, channel: action.payload };

    default:
      return state;
  }
}
