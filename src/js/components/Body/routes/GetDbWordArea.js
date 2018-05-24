import React from "react";
import { connect } from "react-redux"

import {fetchWord} from "./../../../actions/generateWordActions"

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
      return ( 
      <div>
          <button id="drawMeWord" onClick={() => this.props.fetchWord()}>Slumpa ett ord</button>
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
