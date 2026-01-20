let bancoCentral = {
    inflacao: 4,
    politica: "Neutra",
    evento: "Equilíbrio global"
};

function aplicarEvento(){
    const eventos = [
        {txt:"Crise global", inflacao:+0.7},
        {txt:"Expansão mundial", inflacao:-0.4},
        {txt:"Choque energético", inflacao:+0.5},
        {txt:"Estabilidade prolongada", inflacao:-0.2}
    ];

    let e = eventos[Math.floor(Math.random()*eventos.length)];
    bancoCentral.evento = e.txt;
    bancoCentral.inflacao = Math.max(0,bancoCentral.inflacao+e.inflacao);

    bancoCentral.politica =
        bancoCentral.inflacao>6?"Restritiva":
        bancoCentral.inflacao<2?"Expansionista":"Neutra";

    eventoAtual.innerText = bancoCentral.evento;
}
