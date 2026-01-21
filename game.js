let socket = new WebSocket("ws://localhost:8080");

let jogo = {
    saldo: 3000,
    precoAcao: 100,
    historico: []
};

socket.onmessage = event => {
    let msg = JSON.parse(event.data);

    if(msg.tipo === "sync"){
        jogo.precoAcao = msg.estado.precoAcao;
        bancoCentral.inflacao = msg.estado.inflacao;
        render();
    }
};

function enviarEstado(){
    socket.send(JSON.stringify({
        tipo: "update",
        precoAcao: jogo.precoAcao,
        inflacao: bancoCentral.inflacao
    }));
}

function log(txt){
    jogo.historico.unshift(new Date().toLocaleTimeString()+" - "+txt);
    if(jogo.historico.length > 100) jogo.historico.pop();
    render();
}

function render(){
    saldo.innerText = jogo.saldo.toFixed(2);
    precoAcao.innerText = jogo.precoAcao.toFixed(2);
    inflacao.innerText = bancoCentral.inflacao.toFixed(2);
    historico.innerHTML = jogo.historico.join("<br>");
    renderCambio();
}

function comprarAcao(){
    if(jogo.saldo >= jogo.precoAcao){
        jogo.saldo -= jogo.precoAcao;
        jogo.precoAcao *= 1.01;
        log("Compra de ação");
        enviarEstado();
    }
}

function venderAcao(){
    jogo.saldo += jogo.precoAcao;
    jogo.precoAcao *= 0.99;
    log("Venda de ação");
    enviarEstado();
}

setInterval(()=>{
    jogo.precoAcao *= (1 + (Math.random()*2-1)/100);
    enviarEstado();
}, 10000);

render();
