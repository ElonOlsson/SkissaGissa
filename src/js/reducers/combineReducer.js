import { combineReducers } from "redux"

import timer from "./timerReducer"
import user from "./userReducer"
import word from "./generateWordReducer"

export default combineReducers({
  timer,
  user,
  word
})
