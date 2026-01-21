// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

let estadoGlobal = {
    precoAcao: 100,
    inflacao: 4
};

wss.on("connection", ws => {
    // envia estado atual ao conectar
    ws.send(JSON.stringify({
        tipo: "sync",
        estado: estadoGlobal
    }));

    ws.on("message", msg => {
        let data = JSON.parse(msg);

        if(data.tipo === "update"){
            estadoGlobal.precoAcao = data.precoAcao;
            estadoGlobal.inflacao = data.inflacao;

            // broadcast para todos
            wss.clients.forEach(client => {
                if(client.readyState === WebSocket.OPEN){
                    client.send(JSON.stringify({
                        tipo: "sync",
                        estado: estadoGlobal
                    }));
                }
            });
        }
    });
});

console.log("Servidor multiplayer ativo em ws://localhost:8080");
