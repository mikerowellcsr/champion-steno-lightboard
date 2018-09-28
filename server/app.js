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

        switch (data.type) {
            case 'USER_LOGGED_ON':
                index = users.length;

                users.push({
                    username: data.username,
                    socketId: '000'
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
            default:
                break;
        }
    });
    ws.on('close', () => {
        users.splice(index, 1);

        broadcast({
            type: 'LIST_USERS',
            users
        }, ws);
    });
});