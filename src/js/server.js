const io = require('socket.io')().attach(12346);

io.on('connection', (socket) => {
    socket.on('addItem', (data) => {
        console.log(data);
        socket.broadcast.emit('addItem', data);
    });
});