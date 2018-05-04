import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8020'); //why does it not connect to 8020 but 3000 instead?


function subscribeToTimer(cb) { // caller passes in a time intercal and cb, a callback function

	socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000); //1000 = interval
} 
export { subscribeToTimer }

