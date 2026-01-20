let ia = [
    {nome:"Fundo Atlas", capital:500000},
    {nome:"Consórcio NovaEra", capital:800000},
    {nome:"Grupo Ômega", capital:1200000}
];

function agirIA(){
    ia.forEach(i=>{
        let acao = Math.random();
        if(acao>0.6){
            i.capital*=1.05;
            jogo.precoAcao*=0.98;
        }else if(acao<0.3){
            i.capital*=0.97;
            jogo.precoAcao*=1.03;
        }
    });

    iaStatus.innerHTML = ia.map(i=>`${i.nome}: ${i.capital.toFixed(0)} K$`).join("<br>");
}
