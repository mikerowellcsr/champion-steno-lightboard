const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const wss = new WebSocket.Server({
    port: 8989
});

app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.post('/upload', (req, res) => {
    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({file: `public/${req.body.filename}.jpg`});
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
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
    console.log('8000');
});

module.exports = app;