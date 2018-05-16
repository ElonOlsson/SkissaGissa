import React from "react";

import Canvas from "./Body/Canvas";
import SketchExample from './Body/SketchExample.jsx';
import GetDbWordArea from "./Body/GetDbWordArea";


export default class Body extends React.Component {

  render() {
    return ( 
      <div class="row">
        <SketchExample/>
        <Canvas/>
        <GetDbWordArea/>
      </div>
      ) ;
  }
}