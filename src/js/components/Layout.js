import React from "react"
import { connect } from "react-redux"

import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"

import { Link } from "react-router-dom"

@connect((store) => {
  return {
/*   //store object
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
    */
  };
})
export default class Layout extends React.Component{
  apa(){
    console.log(this.props.children);
  }
  render(){
    return(
      <div>
        <Header/>
        <button onClick={this.apa.bind(this)}>apa</button>
        {this.props.children}
        <Link to="body">I want to draw(Body)</Link>
        
        <Link to="footer">I want to guess</Link>
        <Footer/>
      </div>
    );
  }
}

