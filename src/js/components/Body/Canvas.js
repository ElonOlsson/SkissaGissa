import React from "react";
import { subscribeToDrawing } from '../../subscribe';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    subscribeToDrawing((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };
  
  render() {
    return (
    	<div>
	    	<h1>Tiden är kommen: {this.state.timestamp}</h1>		
    		<canvas></canvas>
    	</div>   
    );
  }
}