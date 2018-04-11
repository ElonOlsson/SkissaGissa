import {createStore } from "redux";



const reducer = function(state, action){

  if(action.type === "INC")
      return state+action.number;
  if(action.type === "DEC")
      return state-action.number;
  return state;

}

// initial state = 0
const store = createStore(reducer, {
  user: {
    name: "Lovisa",
    age: 25,

  },
  tweets: []

});

//subscribe to console.log
store.subscribe(() => {
  console.log("store changed", store.getState())
})

//dispatch events
store.dispatch({type: "INC", number: 1})
store.dispatch({type: "INC", number: 2})
store.dispatch({type: "INC", number: 22})
store.dispatch({type: "INC", number: 1})
store.dispatch({type: "DEC", number: 1000})