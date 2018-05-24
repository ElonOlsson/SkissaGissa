import React from "react";
import { connect } from "react-redux"

import {generateWord} from "./../../../actions/generateWordActions"

export default class GetDbWordArea extends React.Component {
  constructor(props){
    super(props);
    this.getWordFoo = this.getWordFoo.bind(this);
  }  
  
  getWordFoo(){    
    var keys = new Array();    
    var theButton = document.getElementById("drawMeWord");
    const nrOfWords = 26;
    const randomIndex = Math.floor(Math.random() * nrOfWords);

    //var axios = require('axios');
    var dbRef = firebase.database().ref().child("Words");
    dbRef.once('value', function(snap){
      console.log("vafan är snap?: " + snap.val()); //{Angry, Fireworks, ...}
      console.log("vafan är snap type?: " + typeof snap.val()); //object
      snap.forEach(function(item){
        console.log(item.val() + " " + typeof item.val());
        keys.push(item.val());
      });
    });
    console.log("NUMMER 1");
    console.log("längden på keys: " + keys.length);
    theButton.innerText = keys[randomIndex];

    //dbRef.on("value", snap => theButton.innerText = snap.val());   
    
  };

  @connect((store) => {
    return{
      word: store.generateWord.word
    };
  })

  render() {
      return ( 
      <div>
          <button id="drawMeWord" onClick={this.getWordFoo}>Slumpa ett ord</button>
          
      </div>
      );
  }
}

/*
export default class Title extends React.Component {
  render() {
    return (
    	<div id="title" class="column left">
         Guess and Draw 

        </div>
    );
  }
}

*/

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
