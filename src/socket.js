const Socket = ( app ) => {
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    
    // let interval;
    // const getApiAndEmit = socket => {
    //     const response = new Date();
    //     // Emitting a new message. Will be consumed by the client
    //     socket.emit("FromAPI", response);
    //   };
    
    io.on('connection', (socket) => {
        console.log("New client connected");
        // if (interval) {
        //   clearInterval(interval);
        // }
        app.locals.socket = socket;
        // interval = setInterval(() => getApiAndEmit(socket), 1000);
        socket.on("disconnect", () => {
          console.log("Client disconnected");
        //   clearInterval(interval);
        });
    });
    return server;
}

module.exports = Socket;