


module.exports = (server) => {

   
    var io = require('socket.io')(server, {

        pingTimeout: 900000,
        cookie: true
    });



    var socketApi = {};
    socketApi.io = io;


    io.on('connection', function (socket) {

        console.log('%s sockets is connected', Object.keys(io.sockets.sockets).length);
        console.log('A user connected id: ', socket.id);



        socket.on('join', (message) => {
            console.log('User connected received :', message);  
            socket.send("Welcome!");
        });


        socket.on('message', (message) => {
            console.log('Message is received : "', message, '" from  :', socket.id);
            socket.send("Response from server : " + Math.random());
        });


        socket.on('disconnect', (reason) => {
            console.log("user disconnect", socket.id);    
            console.log();
            console.log();  
        });
    });


    return socketApi;
}

