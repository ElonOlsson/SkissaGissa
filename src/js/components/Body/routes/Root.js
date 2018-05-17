import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import GuessExample from './GuessExample'
import SketchExample from './SketchExample.jsx'
import Home from './Home'


export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component = {Home} />
			<Route path="/sketcher" component = {SketchExample} />
			<Route path="/guesser" component = {GuessExample} />
		</Switch>
	</BrowserRouter>
);