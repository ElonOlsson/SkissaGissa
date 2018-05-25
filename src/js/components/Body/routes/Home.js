import React from "react";
import {Link} from 'react-router-dom';


export default () => 
<div>
	<Link to="/guesser">
		<button id="btnGuess" class="btn"> Guess </button>
	</Link>
	<Link to="/sketcher">
			<button id="btnSketch" class="btn"> Draw</button>
	</Link>
</div> ;
