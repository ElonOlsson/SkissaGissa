import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { IndexRoute, hashHistory } from "react-router";


import Root from './components/Root'

import store from "./store"

import Layout from "./components/Layout"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      <Route path="/" component={Layout}></Route>
      <IndexRoute  component={Header}> </IndexRoute>
      <Route path="body" component={Body}></Route>
      <Route path="footer" component={Footer}></Route>
      
      </Switch>
    </Router>
  </Provider>   

,app);


 






