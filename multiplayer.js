let jogadores = [
    {nome:"Jogador A", saldo:5000, perfil:"conservador"},
    {nome:"Jogador B", saldo:8000, perfil:"agressivo"},
    {nome:"Jogador C", saldo:6000, perfil:"misto"}
];

function agirMultiplayer(){
    jogadores.forEach(j=>{
        if(j.perfil==="agressivo"){
            jogo.precoAcao *= 1.01;
        }
        if(j.perfil==="conservador"){
            jogo.precoAcao *= 0.995;
        }
    });
}
