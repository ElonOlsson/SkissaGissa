const io = require('socket.io')().attach(12346);

io.on('connection', (socket) => {
    socket.on('addItem', (data) => {
        console.log(data);
        socket.broadcast.emit('addItem', data);
    });
    
});

io.on('connection', (socket) => {
    socket.on('sendWord', (data) => {
        console.log(data);
        socket.broadcast.emit('sendWord', data);
    });
    
});

io.on('connection', (socket) => {
    socket.on('sendTime', (data) => {
        console.log(data);
        socket.broadcast.emit('sendTime', data);
    });
    
});