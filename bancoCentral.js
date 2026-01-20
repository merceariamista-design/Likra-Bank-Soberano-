let bancoCentral = {
    inflacao: 3.5,
    politica: "Neutra",
    evento: "Mercado estável"
};

function aplicarEvento(){
    const eventos = [
        {txt:"Crescimento econômico", inflacao:-0.3, impacto:1.05},
        {txt:"Crise financeira", inflacao:+0.6, impacto:0.93},
        {txt:"Estímulo monetário", inflacao:+0.4, impacto:1.08},
        {txt:"Austeridade fiscal", inflacao:-0.5, impacto:0.96},
        {txt:"Boom imobiliário", inflacao:+0.2, impacto:1.1}
    ];

    let e = eventos[Math.floor(Math.random()*eventos.length)];
    bancoCentral.evento = e.txt;
    bancoCentral.inflacao = Math.max(0, bancoCentral.inflacao + e.inflacao);

    bancoCentral.politica =
        bancoCentral.inflacao > 6 ? "Restritiva" :
        bancoCentral.inflacao < 2 ? "Expansionista" : "Neutra";

    for(let m in jogo.moedas){
        jogo.moedas[m] *= e.impacto;
    }

    jogo.precoAcao *= e.impacto;

    document.getElementById("eventoAtual").innerText = e.txt;
}
