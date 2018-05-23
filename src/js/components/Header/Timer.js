import React from "react";
import { connect } from "react-redux"

import {startTimer,stopTimer,resetTimer} from "../../actions/timerActions"




function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
  if (!startedAt) {
    return baseTime;
  } else {
    return baseTime - (stoppedAt - startedAt);
  }
}

@connect((store) => {
  return{
    baseTime: store.timer.baseTime,
    startedAt: store.timer.startedAt,
    stoppedAt: store.timer.stoppedAt
  };
})

export default class Timer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);    // 33ms is default
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

    return `${m} : ${s} : ${ms}`;
  }
 
  render() {

	  	const { baseTime, startedAt, stoppedAt } = this.props;
	    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

	    return (
	      <div>
	        <div>Time: {this.format(elapsed)}</div>
	        <div>
	          <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
	          <button onClick={() => this.props.stopTimer()}>Stop</button>
	          <button onClick={() => this.props.resetTimer()}>Reset</button>
	        </div>
	      </div>
	    );
	}

}

function mapStateToProps(state) {
  const { baseTime, startedAt, stoppedAt } = state;
  return { baseTime, startedAt, stoppedAt };
}

module.exports = connect(
    mapStateToProps,{ startTimer, stopTimer, resetTimer })(Timer);





