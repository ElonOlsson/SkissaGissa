import React from "react";

import Canvas from "./Body/Canvas";
import GetDbWordArea from "./Body/GetDbWordArea";


export default class Body extends React.Component {

  render() {
    return ( 
      <div class="row">
        <Canvas/>
        <GetDbWordArea/>
      </div>
      ) ;
  }
}