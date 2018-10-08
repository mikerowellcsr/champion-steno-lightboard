const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/check', (req, res) => {
    res.send('Up and running!');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.post('/upload', cors(corsOptions), function(req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let speakerPhoto = req.files.speakerPhoto0;
    console.log(req.files);
    // console.log(req.files.speakerPhoto.name.split('.')[1]);

    // Use the mv() method to place the file somewhere on your server
    speakerPhoto.mv('../public/uploads/speakerPhoto0.jpg', function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded!');
    });
});

const wss = new WebSocket.Server({
    port: 8989
});


const users = [];

const broadcast = (data, ws) => {
    wss.clients.forEach(client => {
         if (client.readyState === WebSocket.OPEN && client !== ws) {
             client.send(JSON.stringify(data));
         }
    });
};

wss.on('connection', ws => {
    let index;

    ws.on('message', message => {
        const data = JSON.parse(message);
        console.log(data);
        switch (data.type) {
            case 'USER_LOGGED_ON':
                index = users.length;

                users.push({
                    username: data.username,
                    id: data.id,
                    logOnTime: data.logOnTime
                });

                ws.send(JSON.stringify({
                    type: 'LIST_USERS',
                    users
                }));

                broadcast({
                    type: 'LIST_USERS',
                    users
                }, ws);
                break;
            case 'SEND_KEY_PRESS':
                broadcast({
                    type: 'SEND_KEY_PRESS',
                    key: data.key
                }, ws);

                console.log('received: ' +  data.key);
                break;
            default:
                break;
        }
    });

    ws.on('close', () => {
        users.splice(index, 1);
        console.log('user left.');
        broadcast({
            type: 'LIST_USERS',
            users
        }, ws);
    });
});

app.listen(8000, () => {
    console.log('Running on 8000');
});

module.exports = app;