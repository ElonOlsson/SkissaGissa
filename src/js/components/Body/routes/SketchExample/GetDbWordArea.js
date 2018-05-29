import React from "react";
import { connect } from "react-redux"

import {fetchWord} from "./../../../../actions/generateWordActions"
import IO from 'socket.io-client'


const wsClient = IO(`ws://127.0.0.1:12346`);

export default class GetDbWordArea extends React.Component {
//  constructor(props){
//    super(props);
//    this.getWordFoo = this.getWordFoo.bind(this);
//  } 

  @connect((store) => {
    return{
      word: store.word.word
    };

  }) 

        
  render() {
    const{word} = this.props.word;

    return ( 
      <div class="btnGroup">
          <button class="row btn" id="btnGetSendWord" onClick={() => this.props.fetchWord()}>Fetch a word</button>
          <div id="wordTextField" class=" textField">{ word }</div>
          <button class="row btn" id="btnGetSendWord" onClick={() => wsClient.emit('sendWord', word)}>Send word</button>
      </div>
      );
  }
}

function mapStateToProps(state){
  const{ word } = state;
  return{ word };
}

module.exports = connect(mapStateToProps, {fetchWord})(GetDbWordArea);



/*  ==== Word list ====
Easy: 

Angry
Fireworks
Pumpkin
Baby
Flower
Rainbow
Beard
Flying saucer
Recycle

Medium:

Brain
Kitten
Playground
Bubble bath
Kiwi
Pumpkin pie
Buckle
Lipstick
Raindrop

Hard:

Back seat
Highchair
Rock band
Birthday
Hockey
Sasquatch
Black hole
Hotel
Scrambled eggs 
*/
