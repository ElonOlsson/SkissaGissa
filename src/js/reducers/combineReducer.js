import { combineReducers } from "redux"

import timer from "./timerReducer"
import word from "./generateWordReducer"

export default combineReducers({
  timer,
  word
})
