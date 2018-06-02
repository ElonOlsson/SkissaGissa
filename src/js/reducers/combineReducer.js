/**
 * root / combined reducer. Slices up the state. 
 * The store can only recive one reducer, therefore they needs to be sliced.
 * It also makes sence to have multiple reducers because they handle different data.
 */


import { combineReducers } from "redux"

import timer from "./timerReducer"
import word from "./generateWordReducer"

export default combineReducers({
  timer,
  word
})
