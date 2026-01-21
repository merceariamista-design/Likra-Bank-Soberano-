let jogo = JSON.parse(localStorage.getItem("likraBank")) || {
    saldo:3000,
    investido:0,
    emprestimo:0,
    imoveis:0,
    precoAcao:100,
    historico:[]
};

let fundo = 7000000000;

function salvar(){
    localStorage.setItem("likraBank", JSON.stringify(jogo));
}

function log(txt){
    jogo.historico.unshift(new Date().toLocaleString()+" - "+txt);
    if(jogo.historico.length>150) jogo.historico.pop();
    salvar();
    render();
}

function render(){
    saldo.innerText=jogo.saldo.toFixed(2);
    investido.innerText=jogo.investido.toFixed(2);
    precoAcao.innerText=jogo.precoAcao.toFixed(2);
    inflacao.innerText=bancoCentral.inflacao.toFixed(2);
    governo.innerText=governoAtual.nome;
    historico.innerHTML=jogo.historico.join("<br>");
    renderCambio();
}

function emprestimo(){
    let v=Number(valorEmprestimo.value);
    let juros = bancoCentral.jurosDiario;
    jogo.emprestimo+=v;
    jogo.saldo+=v;
    log("Empréstimo tomado");
}

function pagarEmprestimo(){
    let total = jogo.emprestimo * (1 + bancoCentral.jurosDiario);
    if(jogo.saldo>=total){
        jogo.saldo-=total;
        fundo+=total-jogo.emprestimo;
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
    let ganho=jogo.imoveis*120*(1-bancoCentral.inflacao/100);
    jogo.saldo+=ganho;
    fundo+=ganho*0.0023;
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

setInterval(()=>{
    jogo.precoAcao*=(1+(Math.random()*4-2)/100);
    salvar();
    render();
},15000);

render();
