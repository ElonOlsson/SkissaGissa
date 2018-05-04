import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000'); //why does it not connect to 8000 but 3000 instead?

function subscribeToDrawing(cb) {	// caller passes in a time intercal and cb, a callback function
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
} 
export { subscribeToDrawing}