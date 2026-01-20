let bancoCentral = {
    inflacao: 4,
    politica: "Neutra",
    presidente: "Indicado"
};

function aplicarPolitica(){
    bancoCentral.presidente = governoAtual.nome;
    bancoCentral.politica =
        governoAtual.jurosBase > 2 ? "Restritiva" :
        governoAtual.jurosBase < 1.5 ? "Expansionista" : "Neutra";
}
