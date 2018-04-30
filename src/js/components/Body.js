import React from "react";

import Canvas from "./Body/Canvas";

export default class Body extends React.Component {

  render() {
    return ( 
      <div>
        <h1> I am a body</h1>
        <Canvas/>
      </div>
      ) ;
  }
}