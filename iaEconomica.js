let ia = [
    {nome:"Fundo Atlas", capital:500000},
    {nome:"Grupo Ômega", capital:900000}
];

function agirIA(){
    ia.forEach(i=>{
        let fator = Math.random();
        if(fator > 0.5){
            i.capital *= 1.03;
            jogo.precoAcao *= 0.99;
        } else {
            i.capital *= 0.97;
            jogo.precoAcao *= 1.02;
        }
    });

    iaStatus.innerHTML = ia
        .map(i=>`${i.nome}: ${i.capital.toFixed(0)} K$`)
        .join("<br>");
}
