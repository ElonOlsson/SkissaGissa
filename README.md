* Frameworks:

 - React
 - Nodejs
 - Database on Firebase

* Functional specification:
The main goal is to create a draw- and- guess game where one player draws a word on an empty canvas on the screen and other players should be able to see what is being drawn in real time. The other players are then supposed to guess on what word is being drawn.

* Technological specification:
A wordlist hosted on Firebase or other suitable database where the word to be guessed is generated from.
We have little to none experience with frameworks and backend. What we have found so far is that for the frontend React seams suitable. For the backend we consider using Nodejs with a socket that the players can subscribe to, to solve the real time drawing issue. 


/****************************************
** INSTALL COMMANDS WITH NPM (OR YARN) **
*****************************************/
Install the dependencies listed in package.json


/*****************
** RUN WITH NPM **
*****************/

$ npm run dev

Open localhost:8080 in webbrowser

/*****************
** PROBLEM FIX **
*****************/

if you get errror; "Invalid configuration object. Webpack 
has been initialised using a configuration object that does not match the API schema..."
 
Do the following:

$npm uninstall webpack --save-dev
$npm install webpack@2.1.0-beta.22 --save-dev





