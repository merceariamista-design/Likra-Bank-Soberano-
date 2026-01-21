let bancosPrivados = [];

function criarBanco(){
    if(jogo.saldo >= 5000){
        jogo.saldo -= 5000;
        bancosPrivados.push({
            nome: "Banco Privado " + (bancosPrivados.length+1),
            capital: 5000,
            emprestimos: 0
        });
        log("Banco privado criado");
    }
}

function operarBancos(){
    bancosPrivados.forEach(b=>{
        let lucro = b.capital * (Math.random()*0.04);
        b.capital += lucro;
        jogo.precoAcao *= 0.995;
    });
}
