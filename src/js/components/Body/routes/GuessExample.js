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
      sketchWord: "",
      guessWord: "",
      time: ""
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
  	console.log(sketchWord === guessWord);

  }

  render() {
    const { items, drawable, sketchWord, guessWord, time } = this.state;
    return (
      <div>
	        Guess Word:
			<input id = "guessWordField" class="btn" type="text" name="guessWord" onChange={(e) => this.guessWord(e.target.value)} />
  			<button class = "btn" onClick={() => this.compareWord()}> Submit </button>
			<div class = "right" id="wordTextField" >{ sketchWord }</div>

			Time: {time}
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
