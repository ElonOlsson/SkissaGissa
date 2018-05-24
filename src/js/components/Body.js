import React from "react";

//import SketchExample from './Body/routes/SketchExample.jsx';
import GetDbWordArea from "./Body/routes/GetDbWordArea";
import Routes from "./Body/routes/Root" 


export default class Body extends React.Component {
/*
  render() {
    return ( 
      <div class="row">
        <SketchExample/>
        <GetDbWordArea/>
      </div>
      ) ;
  }
  */

  render() {
    return ( 
      <div class="row">
	        <Routes/>
      </div>
      ) ;
  }
}