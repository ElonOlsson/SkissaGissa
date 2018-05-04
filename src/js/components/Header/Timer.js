import React from "react";

import { subscribeToTimer } from '../../subscribe';

import store from '../../store';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    store.dispatch({
      type: 'START_TIMER',
      offset: Date.now(),
    });
  }
  
  stop() {
    store.dispatch({
      type: 'STOP_TIMER'
    });
  }
  
  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    }
    
    time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
    let ms = pad(time.getMilliseconds().toString(), 3);
    
    return `${m} : ${s} . ${ms}`;
  }

  render() {
    return (
      <div>
        <h1>Time: {this.format(this.props.time)}</h1>
        <button onClick={this.props.isOn ? this.stop : this.start}>
          { this.props.isOn ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }

   /* state = {
    timestamp: 'no timestamp yet'
  };

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }


  render() {
    return (
    	<div id= "timer" class="column right">
        <p> This is the timer value: </p> {this.state.timestamp}  
   		</div>
    );
  }*/
}
