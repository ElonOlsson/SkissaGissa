import { combineReducers } from "redux"

import reducer from "./timerReducer"
import user from "./userReducer"

export default combineReducers({
  reducer,
  user
})
