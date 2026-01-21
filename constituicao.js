let constituicao = {
    inflacaoMax: 10,
    jurosMax: 3,
    impostoMax: 30,
    quebraSistema: false
};

function validarConstituicao(){
    if(
        bancoCentral.inflacao > constituicao.inflacaoMax ||
        governoAtual.jurosBase > constituicao.jurosMax ||
        governoAtual.impostoEmpresas > constituicao.impostoMax
    ){
        constituicao.quebraSistema = true;
        log("⚠️ Crise sistêmica: Constituição violada");
        jogo.precoAcao *= 0.7;
    }
}
