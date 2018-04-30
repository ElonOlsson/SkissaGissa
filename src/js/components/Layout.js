import React from "react"
import { connect } from "react-redux"

import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"


@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component{
  
  render(){
    return(
        <div>
          <Header/>
          <Body/>
          <Footer/>
        </div>

      );
  }
}
