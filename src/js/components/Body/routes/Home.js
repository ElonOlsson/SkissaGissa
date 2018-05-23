import React from "react";
import {Link} from 'react-router-dom';


export default () => 
<div>
	<Link to="/guesser">
		<button id="btnGuess" class="homeButton"> Guess </button>
	</Link>
	<Link to="/sketcher">
			<button id="btnSketch" class="homeButton"> Draw</button>
	</Link>
</div> ;
