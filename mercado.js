let moedas = {
    ouro: 23.66,
    petra: 34.89,
    baxe: 4.89
};

function renderCambio(){
    cambio.innerHTML="";
    for(let m in moedas){
        let div=document.createElement("div");
        div.innerHTML = `
            ${m.toUpperCase()} — ${moedas[m].toFixed(2)} K$
            <button onclick="comprarMoeda('${m}')">Comprar</button>
            <button onclick="venderMoeda('${m}')">Vender</button>
        `;
        cambio.appendChild(div);
    }
}

function comprarMoeda(m){
    let custo = moedas[m]*1.037;
    if(jogo.saldo>=custo){
        jogo.saldo-=custo;
        fundo+=moedas[m]*0.037;
        log("Compra de "+m);
    }
}

function venderMoeda(m){
    let ganho = moedas[m]*0.963;
    jogo.saldo+=ganho;
    fundo+=moedas[m]*0.037;
    log("Venda de "+m);
}
