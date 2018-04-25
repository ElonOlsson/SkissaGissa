* Frameworks:

 - React
 - Nodejs
 - Database on Firebase

* Functional specification:
The main goal is to create a draw- and- guess game where one player draws a word on an empty canvas on the screen and other players should be able to see what is being drawn in real time. The other players are then supposed to guess on what word is being drawn.

* Technological specification:
A wordlist hosted on Firebase or other suitable database where the word to be guessed is generated from.
We have little to none experience with frameworks and backend. What we have found so far is that for the frontend React seams suitable. For the backend we consider using Nodejs with a socket that the players can subscribe to, to solve the real time drawing issue. 
We found this tutorial saying “All you need is react and firebase”: https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf. How applicable/ suitable is this to our project? 

/******************************
** INSTALL COMMANDS WITH NPM **
*******************************/

$ npm init

$ npm install webpack --save-dev

$ npm add babel-core babel-preset-es2015 babel-preset-react --only=dev

$ npm add babel-loader --only=dev

$ npm add webpack-dev-server --only=dev

$ npm add css-loader style-loader --only=dev

$ npm add react react-dom

$ npm i -S redux

/*****************
** RUN WITH NPM **
*****************/

$ npm start 
or
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





