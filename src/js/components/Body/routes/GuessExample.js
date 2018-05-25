import React, { Component } from 'react';
import { SketchPad } from '../../../../tools';
import IO from 'socket.io-client'
import store from "./../../../store";


const wsClient = IO(`ws://127.0.0.1:12346`);

export default class SketchExample extends Component
{
  socket = null;

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      drawable: false,
      word: store.word
    }
  }

  componentDidMount() {
    wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
    //wsClient.on('addItem', item => this.setState({word: this.state.word.concat([word])}));
  }

  guessWord(myWord){

  	console.log(myWord);

  }

  render() {
    const { items, drawable, word } = this.state;
    return (
      <div>
        <form class="row left"> 
	        Guess Word:
			<input id = "guessWordField" class="btn" type="text" name="guessWord" onChange={(e) => this.guessWord(e.target.value)} />
			<div class = "right" id="wordTextField" >{ word }</div>
		</form>	

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
