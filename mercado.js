let moedas = {
    ouro: 23.66,
    petra: 34.89,
    baxe: 4.89
};

function renderCambio(){
    cambio.innerHTML = "";
    for(let m in moedas){
        let div = document.createElement("div");
        div.innerHTML = `
            ${m.toUpperCase()} — ${moedas[m].toFixed(2)} K$
            <button onclick="comprarMoeda('${m}')">Comprar</button>
        `;
        cambio.appendChild(div);
    }
}

function comprarMoeda(m){
    let custo = moedas[m];
    if(jogo.saldo >= custo){
        jogo.saldo -= custo;
        log("Compra de moeda " + m);
    }
}
