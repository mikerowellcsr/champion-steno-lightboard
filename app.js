const cors = require('cors');
const cowsay = require('cowsay');
const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws').Server;
const app = express();
const httpServer = http.createServer(app);
let PORT = process.env.PORT || 8000;



// Create new WebSockets connection.
const wss = new WebSocket({
    server: httpServer
});

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());


// Global path.
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(corsOptions), async(req, res, next) => {
    try {
        const moo = cowsay.say({ text: 'Hello World!' });
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
                        logOnTime: data.logOnTime
                    });
                }

                ws.send(JSON.stringify({
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

            default:
                break;
        }
    });

    ws.on('close', () => {
        console.log('user logged off ' + userId);

        if (userId) {
            users.removeUser(userId);
        }

        broadcast({
            type: 'LIST_USERS',
            users: users.listUsers()
        }, ws);

    });
});

httpServer.listen(PORT, () => console.log(`Listening on ${PORT}!`));
module.exports = app;