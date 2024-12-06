const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http').Server(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

app.use(cors());

let users = [];

socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);

    // New user joining
    socket.on('newUser', (data) => {
        // Add user to list
        users.push(data);
        // Send list of users to client
        socketIO.emit('newUserResponse', users);
    })

    // Disconnect
    socket.on('disconnect', () => {
        console.log('User has disconnected');
        users = users.filter((user) => user.socketID !== socket.id);
        socketIO.emit('newUserResponse', users);
        socket.disconnect();
    })
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Server is running',
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});