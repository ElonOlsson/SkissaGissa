import React from "react";

import Title from "./Header/Title";
import Timer from "./Header/Timer";
import store from "./../store";


export default class Header extends React.Component {

  render() {

    return ( 
      <div class="row">

        <Title/>
        <Timer updateInterval = {33}/>

      </div>
    );
  }
}


