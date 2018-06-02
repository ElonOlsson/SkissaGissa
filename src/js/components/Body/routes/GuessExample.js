import React, { Component } from 'react';
import { SketchPad } from '../../../../tools';
import IO from 'socket.io-client'

//const wsClient = IO(`ws://127.0.0.1:12346`);
const wsClient = IO(`ws://127.0.0.1:12346`);
  const WIDTH = window.innerWidth/3;
  const HEIGHT = window.innerHeight/2;
/*
window.onresize = function(event) {
   WIDTH = window.innerWidth/3;
   HEIGHT = window.innerHeight/2;

};
*/
export default class SketchExample extends Component
{
  socket = null;


  constructor(props) {
    super(props);

    this.state = {
      items: [],
      drawable: false,
      sketchWord: "Not Received Yet",
      guessWord: "",
      time: "",
      guessMsg: "Make a guess above...",
      points: 0
    }

}
  

  componentDidMount() {
   	wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
    wsClient.on('sendWord', item => this.setState({sketchWord: item}));
    wsClient.on('sendTime', item => this.setState({time: item}));

  }


  guessWord(myWord){

  	console.log(myWord);
  	this.setState({guessWord: myWord})

  }

  getWord(){
  	return this.state.sketchWord;
  }

  compareWord(){

  	const { sketchWord, guessWord } = this.state;
      
    if(sketchWord === guessWord){
      this.setState({guessMsg: "Correct Guess! Next Word "})
    }else{
      this.setState({guessMsg: "Wrong Guess! Try again... "})
    }
    //lastGuess = bool(sketchWord === guessWord);
  	console.log(sketchWord === guessWord);

  }

  render() {
    const { items, drawable, sketchWord, guessWord, time, guessMsg } = this.state;
    return (
      <div>
        <div class="column left">
                  <div class="left">Guess Word:</div>
			    <input id = "guessWordField" class=" textField" type="text" name="guessWord"  onChange={(e) => this.guessWord(e.target.value)} />
          <button id="btnSubmit" class = "btn" onClick={() => this.compareWord()}> Submit </button>
    		 <div class = " textField" id="guessMsgField" >
            { guessMsg }
          </div>

    			<div>
            Time: {time}
          </div>
        </div>
        <div class="column " id="canvasGuess">
    	       <SketchPad 
    	         width={400}
    	         height={400}
    	         items={items}
    	         drawable={drawable}
    	       />
        </div>
      </div>
    );
  }
}
