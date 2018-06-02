export function fetchWord(){
  return function(dispatch){
    dispatch({type: "FETCH_WORD"});

    const nrOfWords = 26;
    const randomIndex = Math.floor(Math.random() * nrOfWords);

    var dbRef = firebase.database().ref().child("Words");
    var theGeneratedWord;
    dbRef.once('value')
    .then(function(snap){
      theGeneratedWord = snap.child(randomIndex).val();
    })
    .then(function(){
      dispatch({type: "FETCH_WORD_FULFILLED", word: theGeneratedWord});
    });

// We wanted to make a error handler, but cant really check if anything is wrong.
//    .catch(function(err){
//      dispatch({type: "FETCH_WORD_REJECTED", payload: err});
//      console.log("HEJ DET BLEV FETT FEL");
//      
//    });

  } 
}