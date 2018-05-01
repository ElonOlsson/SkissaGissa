import React from "react";

import { subscribeToTimer } from '../../subscribe';



export default class Title extends React.Component {

    state = {
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
    	<div id= "timer" class="column">
        <p> This is the timer value: </p> {this.state.timestamp}  
   		</div>
    );
  }
}
