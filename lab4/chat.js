const express = require('express');
const app = express();
const http = require('http');
const path= require("path")
let PORT =process.env.PORT|| "7003"
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

app.get('/style.css',(req,res)=>{
  res.sendFile(path.join(__dirname,"style.css")) 
 // console.log(path.join(__dirname,"style.css"))
})

io.on('connection', (socket) => {
  io.emit('chat message', "new user connected");
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => {
  console.log("http//"+PORT);
});
