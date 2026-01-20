let jogo = JSON.parse(localStorage.getItem("likraBank")) || {
    saldo:3000,
    investido:0,
    fundo:7000000000,
    imoveis:0,
    moedas:{ ouro:23.66, petra:34.89, baxe:4.89 },
    precoAcao:100,
    historico:[]
};

function salvar(){
    localStorage.setItem("likraBank", JSON.stringify(jogo));
}

function log(txt){
    jogo.historico.unshift(new Date().toLocaleString()+" - "+txt);
    if(jogo.historico.length>80) jogo.historico.pop();
    salvar();
    render();
}

function render(){
    saldo.innerText=jogo.saldo.toFixed(2);
    investido.innerText=jogo.investido.toFixed(2);
    fundo.innerText=jogo.fundo.toLocaleString();
    ouro.innerText=jogo.moedas.ouro.toFixed(2);
    petra.innerText=jogo.moedas.petra.toFixed(2);
    baxe.innerText=jogo.moedas.baxe.toFixed(2);
    precoAcao.innerText=jogo.precoAcao.toFixed(2);
    historico.innerHTML=jogo.historico.join("<br>");
    inflacao.innerText=bancoCentral.inflacao.toFixed(2);
    politica.innerText=bancoCentral.politica;
}

function mercado(){
    let v=(Math.random()*4-2).toFixed(2);
    jogo.precoAcao*=(1+v/100);
    variacao.innerText=v+"%";
    variacao.className=v>=0?"green":"red";
    aplicarEvento();
    salvar();
    render();
}

function comprarMoeda(m){
    let custo=jogo.moedas[m]*1.037;
    if(jogo.saldo>=custo){
        jogo.saldo-=custo;
        jogo.fundo+=jogo.moedas[m]*0.037;
        log("Compra de "+m);
    }
}

function venderMoeda(m){
    let ganho=jogo.moedas[m]*0.963;
    jogo.saldo+=ganho;
    jogo.fundo+=jogo.moedas[m]*0.037;
    log("Venda de "+m);
}

function comprarImovel(){
    if(jogo.saldo>=1000){
        jogo.saldo-=1000;
        jogo.imoveis++;
        log("Imóvel comprado");
    }
}

function receberAluguel(){
    let ganho=jogo.imoveis*120*(1-bancoCentral.inflacao/100);
    jogo.saldo+=ganho;
    log("Aluguel recebido");
}

function comprarAcao(){
    if(jogo.saldo>=jogo.precoAcao){
        jogo.saldo-=jogo.precoAcao;
        jogo.investido+=jogo.precoAcao;
        log("Ação comprada");
    }
}

function venderAcao(){
    if(jogo.investido>=jogo.precoAcao){
        jogo.saldo+=jogo.precoAcao;
        jogo.investido-=jogo.precoAcao;
        log("Ação vendida");
    }
}

setInterval(mercado,12000);
render();
