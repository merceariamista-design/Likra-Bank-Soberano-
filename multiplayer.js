let sessao = localStorage.getItem("likraSessao") || Math.random().toString(36).substring(2);
localStorage.setItem("likraSessao", sessao);

function sincronizar(){
    let estadoGlobal = JSON.parse(localStorage.getItem("likraGlobal")) || {
        precoAcao: jogo.precoAcao,
        inflacao: bancoCentral.inflacao
    };

    estadoGlobal.precoAcao = (estadoGlobal.precoAcao + jogo.precoAcao)/2;
    jogo.precoAcao = estadoGlobal.precoAcao;

    localStorage.setItem("likraGlobal", JSON.stringify(estadoGlobal));
}
