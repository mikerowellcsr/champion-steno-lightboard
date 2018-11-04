<<<<<<< HEAD
const cors = require(`cors`);
const cowsay = require(`cowsay`);
const express = require(`express`);
const http = require(`http`);
const path = require(`path`);
const WebSocket = require(`ws`).Server;
=======
const cors = require('cors');
const cowsay = require('cowsay');
const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws').Server;
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
const app = express();
const httpServer = http.createServer(app);
let PORT = process.env.PORT || 8000;

// Create new WebSockets connection.
const wss = new WebSocket({
    server: httpServer
});

const corsOptions = {
<<<<<<< HEAD
    origin: `http://localhost:3000`,
    // some legacy browsers (IE11, various SmartTVs) choke on 204
    optionsSuccessStatus: 200
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, `client/build`)));
=======
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
app.use(cors());


// Global path.
<<<<<<< HEAD
app.get(`*`, (request, response) => {
    response.sendFile(path.join(__dirname, `client/build`, `index.html`));
});

// Serve our base route that returns a Hello World cow
app.get(`/api/cow/`, cors(corsOptions), async(req, res, next) => {
    try {
        const moo = cowsay.say({ text: `Hello World!` });
=======
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(corsOptions), async(req, res, next) => {
    try {
        const moo = cowsay.say({ text: 'Hello World!' });
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
        res.json({ moo });
    } catch (err) {
        next(err);
    }
});

const users = {
    list: [],
    listUsers: function() {
        return this.list;
    },

    addUser: function(user) {
        this.list.push(user);
    },

    removeUser: function(id) {
        this.list.forEach((user, index) => {
            if (user.id === id) {
                this.list.splice(index, 1);
            }
        });
    },

    checkIfUserExists: function(username) {
        return this.list.some(user => user.username === username);
    }
};

const broadcast = (data, ws) => {
    wss.clients.forEach(client => {
        if (client !== ws && client.readyState === 1) {
            client.send(JSON.stringify(data));
        }
    });
};

<<<<<<< HEAD
wss.on(`connection`, ws => {
    let userId;

    ws.on(`message`, message => {
        const data = JSON.parse(message);
        console.log(data);
        switch (data.type) {
            case `USER_LOGGED_ON`:
                userId = data.id;

                // Checks to see if the user exists before adding to the list.
                console.log(`username:  ${data.username}`);
                if (!users.checkIfUserExists(data.username)) {
                    users.addUser({
                        id: data.id,
                        username: data.username ? data.username.trim() : ``,
=======
wss.on('connection', ws => {
    let userId;

    ws.on('message', message => {
        const data = JSON.parse(message);
        console.log(data);
        switch (data.type) {
            case 'USER_LOGGED_ON':

                userId = data.id;

                console.log('username: ' + data.username);
                if (!users.checkIfUserExists(data.username)) {
                    users.addUser({
                        id: data.id,
                        username: data.username ? data.username.trim() : '',
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                        logOnTime: data.logOnTime
                    });
                }

                ws.send(JSON.stringify({
<<<<<<< HEAD
                    type: `LIST_USERS`,
                    users: users.listUsers()
                }));

                // Broadcast out the updated list of users.
                broadcast({
                    type: `LIST_USERS`,
                    users: users.listUsers()
                }, ws);

                console.log(`\n users in ${JSON.stringify(users.listUsers())}`);
                break;
            case `USER_LOGGED_OFF`:
                console.log(`user logged off!`);
                break;

            // Fire keypress event when admin presses keys in lightboard.
            case `SEND_KEY_PRESS`:
                broadcast({
                    type: `SEND_KEY_PRESS`,
                    key: data.key
                }, ws);
                console.log(`received: ${data.key}`);
                break;
=======
                    type: 'LIST_USERS',
                    users: users.listUsers()
                }));

                broadcast({
                    type: 'LIST_USERS',
                    users: users.listUsers()
                }, ws);

                console.log('\n users in ' + JSON.stringify(users.listUsers()));

                break;
            case 'USER_LOGGED_OFF':
                console.log('user logged off!');
            case 'SEND_KEY_PRESS':
                broadcast({
                    type: 'SEND_KEY_PRESS',
                    key: data.key
                }, ws);

                console.log('received: ' + data.key);

                break;

>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
            default:
                break;
        }
    });

<<<<<<< HEAD
    ws.on(`close`, () => {

        // When user logs off, remove the user with their user ID from the list.
=======
    ws.on('close', () => {
        console.log('user logged off ' + userId);

>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
        if (userId) {
            users.removeUser(userId);
        }

        broadcast({
<<<<<<< HEAD
            type: `LIST_USERS`,
=======
            type: 'LIST_USERS',
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
            users: users.listUsers()
        }, ws);

    });
});

httpServer.listen(PORT, () => console.log(`Listening on ${PORT}!`));
module.exports = app;