import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8020');


function subscribeToTimer(cb) {

	socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 5000); //1000 = interval
} 
export { subscribeToTimer }
