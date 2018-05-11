import React from "react";


export default class GetDbWordArea extends React.Component {
  constructor(props){
    super(props);
    this.getWordFoo = this.getWordFoo.bind(this);
  }  
  
  getWordFoo(){    
      var theGottenWord = document.getElementById("drawMeWord");
      const nrOfWords = 26;
      const randomIndex = Math.floor(Math.random() * nrOfWords);

      var dbRef = firebase.database().ref().child("Words");
      dbRef.limitToFirst(randomIndex).once('value').then(snapshot =>
      {
        var word = snapshot.val();

        theGottenWord.innerText.innerText = word;
      });

//      dbRef.on("value", snap => theGottenWord.innerText = snap.val());   
  };
  render() {
      return ( 
      <div>
          <button id="drawMeWord" onClick={this.getWordFoo}>Tryck då</button>
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
