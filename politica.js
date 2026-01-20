let governoAtual = {
    nome: "Tecnocrata",
    jurosBase: 1.8,
    impostoEmpresas: 15
};

let candidatos = [
    {nome:"Tecnocrata", juros:1.5, imposto:12},
    {nome:"Populista", juros:2.2, imposto:20},
    {nome:"Liberal", juros:1.2, imposto:8}
];

function realizarEleicao(){
    let eleito = candidatos[Math.floor(Math.random()*candidatos.length)];
    governoAtual.nome = eleito.nome;
    governoAtual.jurosBase = eleito.juros;
    governoAtual.impostoEmpresas = eleito.imposto;
    log("Eleição realizada: Governo "+eleito.nome);
}
