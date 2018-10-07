const WebSocket = require('ws');
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