import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import store from "./store"
import Timer from "./components/Header/Timer";

const app = document.getElementById('app')


const render = () => {

ReactDOM.render(<Provider store={store}>
	    <Timer 
      time={store.getState().time}
      isOn={store.getState().isOn}
      interval={store.getState().interval}
    />
</Provider>, app);
}


store.subscribe(render);

var interval = null;
store.subscribe(() => {
    if (store.getState().isOn && interval === null) {
      interval = setInterval(() => {
        store.dispatch({
          type: 'TICK',
          time: Date.now()
        });
      });
    }
    if (!store.getState().isOn && interval !== null) {
      clearInterval(interval);
      interval = null;
    }
});

render();