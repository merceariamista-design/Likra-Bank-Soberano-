let empresas = [];

function criarEmpresa(){
    if(jogo.saldo >= 2000){
        jogo.saldo -= 2000;
        empresas.push({
            nome: "Empresa "+(empresas.length+1),
            capital: 2000,
            lucro: 0
        });
        log("Empresa criada");
    }
}

function atualizarEmpresas(){
    empresas.forEach(e=>{
        let ganho = e.capital * (Math.random()*0.06);
        let imposto = ganho * (governoAtual.impostoEmpresas/100);
        e.lucro += ganho - imposto;
        jogo.saldo += ganho - imposto;
    });

    empresasDiv.innerHTML = empresas
        .map(e=>`${e.nome} | Capital: ${e.capital.toFixed(0)} | Lucro: ${e.lucro.toFixed(0)}`)
        .join("<br>");
}
