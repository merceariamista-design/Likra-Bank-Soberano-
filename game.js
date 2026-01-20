let jogo = JSON.parse(localStorage.getItem("likraBank")) || {
    saldo:3000,
    investido:0,
    fundo:7000000000,
    emprestimo:0,
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
    if(jogo.historico.length>60) jogo.historico.pop();
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
}

function mercado(){
    for(let m in jogo.moedas){
        jogo.moedas[m]*=(1+(Math.random()*0.04-0.02));
    }
    let v=(Math.random()*6-3).toFixed(2);
    jogo.precoAcao*=(1+v/100);
    variacao.innerText=v+"%";
    variacao.className=v>=0?"green":"red";
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

function solicitarEmprestimo(){
    let v=Number(valorEmprestimo.value);
    if(v>0){
        jogo.emprestimo+=v;
        jogo.saldo+=v;
        log("Empréstimo tomado: "+v);
    }
}

function pagarEmprestimo(){
    let juros=jogo.emprestimo*0.018;
    let total=jogo.emprestimo+juros;
    if(jogo.saldo>=total){
        jogo.saldo-=total;
        jogo.fundo+=juros;
        jogo.emprestimo=0;
        log("Empréstimo quitado");
    }
}

function comprarImovel(){
    if(jogo.saldo>=1000){
        jogo.saldo-=1000;
        jogo.imoveis++;
        log("Imóvel comprado");
    }
}

function receberAluguel(){
    let ganho=jogo.imoveis*120;
    let taxa=ganho*0.0023;
    jogo.saldo+=ganho-taxa;
    jogo.fundo+=taxa;
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

setInterval(mercado,10000);
render();
