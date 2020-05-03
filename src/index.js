const server = require('./server');
var http = require('http').createServer(server);
var io = require('socket.io')(http);


//Sockets 
io.on('connection', (socket) => {
  console.log('a user connected');
});

//Database
require("./database");

//Start Server
server.listen(server.get("port"), ()=>{
    console.log(`Server on port ${server.get("port")}`);
});