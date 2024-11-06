const http = require("http");
const WebSocket = require("ws");

const app = require("./app");
const connectDB = require("./config/db");

const PORT = 6969;

// Connect to DB
connectDB();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.id = Math.random().toString(36).substring(2, 15);

    ws.on("message", (data) => {
        const message = JSON.parse(data);
        message.id = ws.id;

        wss.clients.forEach((client) => {
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify(message));
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});