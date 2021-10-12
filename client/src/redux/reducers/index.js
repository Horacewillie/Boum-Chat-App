import { combineReducers } from "redux";
import user from "./user_reducer.js";
import channel from "./channel_reducer.js";
import ui from "./ui_reducer.js";

const rootReducer = combineReducers({
  user,
  channel,
  ui,
});

export default rootReducer;
