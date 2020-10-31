const Socket = ( app ) => {
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    
    io.of('/socket').on('connection', (socket) => {
        console.log("New client connected");
        app.locals.socket = socket;
        socket.on("disconnect", () => {
          console.log("Client disconnected");
        });
    });
    return server;
}

module.exports = Socket;