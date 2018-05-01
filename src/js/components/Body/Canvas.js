import React from "react";
import { subscribeToTimer } from '../../subscribe';



export default class Canvas extends React.Component {

state = {
  timestamp: 'no timestamp yet'
};

constructor(props) {
  super(props);
  subscribeToTimer((err, timestamp) => this.setState({ 
    timestamp 
  }));
}

drawline(){

}


  render() {
  	  console.log("blip");

    return (
    	<div>
	    	<p> This is the timer value: {this.state.timestamp}</p>		
    		<canvas id="drawing"></canvas>
    	</div>   
    );
  }
}