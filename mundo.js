let mundo = [
    {nome:"Arkon", pib:1200000, risco:0.9},
    {nome:"Beltria", pib:900000, risco:1.1},
    {nome:"Cyrenia", pib:1500000, risco:0.8},
    {nome:"Draxon", pib:600000, risco:1.3},
    {nome:"Elyra", pib:2000000, risco:0.7}
];

function renderMundo(){
    mapa.innerHTML="";
    mundo.forEach(p=>{
        let div=document.createElement("div");
        div.innerText=`${p.nome} | PIB: ${p.pib.toLocaleString()} | Risco: ${p.risco}`;
        mapa.appendChild(div);
    });
}
