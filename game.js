let jogo = JSON.parse(localStorage.getItem("likraBank")) || {
    saldo:3000,
    investido:0,
    precoAcao:100,
    historico:[]
};

function salvar(){
    localStorage.setItem("likraBank", JSON.stringify(jogo));
}

function log(txt){
    jogo.historico.unshift(new Date().toLocaleString()+" - "+txt);
    if(jogo.historico.length>120) jogo.historico.pop();
    salvar();
    render();
}

function render(){
    saldo.innerText=jogo.saldo.toFixed(2);
    investido.innerText=jogo.investido.toFixed(2);
    precoAcao.innerText=jogo.precoAcao.toFixed(2);
    inflacao.innerText=bancoCentral.inflacao.toFixed(2);
    politica.innerText=bancoCentral.politica;
    governo.innerText=governoAtual.nome;
    presidente.innerText=bancoCentral.presidente;
    historico.innerHTML=jogo.historico.join("<br>");
    atualizarEmpresas();
}

function comprarAcao(){
    if(jogo.saldo>=jogo.precoAcao){
        jogo.saldo-=jogo.precoAcao;
        jogo.investido+=jogo.precoAcao;
        log("Compra de ação Likra Bank");
    }
}

function venderAcao(){
    if(jogo.investido>=jogo.precoAcao){
        jogo.saldo+=jogo.precoAcao;
        jogo.investido-=jogo.precoAcao;
        log("Venda de ação Likra Bank");
    }
}

function cicloGeral(){
    aplicarPolitica();
    agirIA();
    atualizarEmpresas();
    let v=(Math.random()*4-2)/100;
    jogo.precoAcao *= (1+v);
    variacao.innerText=(v*100).toFixed(2)+"%";
    variacao.className=v>=0?"green":"red";
    salvar();
    render();
}

setInterval(cicloGeral,15000);
render();
