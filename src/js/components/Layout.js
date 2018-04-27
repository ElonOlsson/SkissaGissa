import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import { addTweet } from "../actions/tweetsActions"


@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component{
  componentWillMount() {
      console.log("user fetched");

    this.props.dispatch(fetchUser())
    //this.props.dispatch(addTweet(""))
    addTweet("hello World")
    addTweet("mememe")
    addTweet("Sunny day indeed")

  }
/*
  addTweet(text){
      console.log("addTweet");
      const { user, tweets} = this.props;


      this.props.dispatch(addTweet(text))
  }
*/
  fetchTweets() {
        console.log("fetch tweets");

    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    
    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    console.log("renderPass");


    //return <h1>{user.name}</h1>;

    //const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
      </div>


  }
}
