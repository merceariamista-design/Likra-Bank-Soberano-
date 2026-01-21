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
    if(jogo.historico.length>300) jogo.historico.pop();
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

function cicloFinal(){
    aplicarPolitica();
    agirIA();
    agirMultiplayer();
    operarBancos();
    auditarSistema();
    validarConstituicao();
    sincronizar();

    jogo.precoAcao *= (1+(Math.random()*2-1)/100);

    salvar();
    render();
}

setInterval(cicloFinal,12000);
render();
