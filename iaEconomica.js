let ia = [
    {nome:"Fundo Atlas", capital:600000, risco:0.4},
    {nome:"Grupo Ômega", capital:1000000, risco:0.7}
];

function agirIA(){
    ia.forEach(i=>{
        let decisao = Math.random();
        if(decisao > i.risco){
            i.capital *= 1.04;
            jogo.precoAcao *= 0.99;
        } else {
            i.capital *= 0.96;
            jogo.precoAcao *= 1.02;
        }
    });
}
