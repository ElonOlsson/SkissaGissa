import React from "react";



import Title from "./Header/Title";
import Timer from "./Header/Timer";

//import store from "./../store";


export default class Header extends React.Component {
  handleChange(e) {
   // const title = e.target.value;
   // this.props.changeTitle(title);
  }

  render() {

    return ( 
      <div class="row">

        <Title/>
      </div>
      ) ;
   /* return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );*/
  }
}
