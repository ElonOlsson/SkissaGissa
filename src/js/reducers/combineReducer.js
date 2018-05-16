import { combineReducers } from "redux"

import timer from "./timerReducer"
import user from "./userReducer"

export default combineReducers({
  timer,
  user
})
