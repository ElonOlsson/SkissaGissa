import React from "react";
import {Link} from 'react-router-dom';


export default () => 


<div class="homepage">
	<div class="column btnGroup">
		<Link to="/guesser">
			<button id="btnGuess" class="btn row" > Guess </button>
		</Link>
		<Link to="/sketcher">
				<button id="btnSketch" class=" btn row"> Draw</button>
		</Link>
	</div>
	<div id="welcomeText" class="column textField">
		<h2>Welcome to our game!</h2>
		Participate either as a drawer or as a guesser.
		The drawer will start the game and it is the task
		of the guesser to get as many correct guesses before
		the time runs out. 
		<br/><br/>
		Have fun playing!
	</div>
</div> ;
