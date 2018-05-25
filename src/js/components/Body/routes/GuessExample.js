import React, { Component } from 'react';
import { SketchPad } from '../../../../tools';
import IO from 'socket.io-client'

const wsClient = IO(`ws://127.0.0.1:12346`);

export default class SketchExample extends Component
{
  socket = null;


  constructor(props) {
    super(props);

    this.state = {
      items: [],
      drawable: false,
      sketchWord: "katt",
      guessWord: "hej"
    }

}
  

  componentDidMount() {
   // wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
    wsClient.on('addItem', item => this.setState({sketchWord: item}));
  }


  guessWord(myWord){

  	console.log(myWord);
  	this.setState({guessWord: myWord})

  }

  getWord(){
  	return this.state.sketchWord;
  }

  compareWord(myWord){
  	console.log(myWord === "elon");
  	console.log(this.state.sketchWord)
  }

  render() {
    const { items, drawable, sketchWord, guessWord } = this.state;
    return (
      <div>
	        Guess Word:
			<input id = "guessWordField" class="btn" type="text" name="guessWord" onChange={(e) => this.guessWord(e.target.value)} />
  			<button class = "btn" onClick={() => this.compareWord(guessWord)}> Submit </button>
			<div class = "right" id="wordTextField" >{ sketchWord }</div>
        <div style={{float:'left', marginRight:20}}>
	        <SketchPad 
	           width={500}
	           height={500}
	           items={items}
	           drawable={drawable}
	        />
	    </div>    
      </div>
    );
  }
}
