import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IndexRoute, hashHistory } from "react-router";

import Layout from './Layout'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
//import store from '../store'


//<IndexRoute  component={Header}> </IndexRoute>
//<Route path="/" component={Layout}>
const Root = () => (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute  component={Header}> </IndexRoute>
        <Route path="body" component={Body}></Route>
        <Route path="footer" component={Footer}></Route>
      </Route>
    </Router>
)

//Root.propTypes = {
//  store: PropTypes.object.isRequired
//};

export default Root;

