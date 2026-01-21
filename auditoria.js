function auditarSistema(){
    let chance = Math.random();

    if(chance > 0.97){
        log("🚨 Fraude detectada no sistema financeiro");
        jogo.saldo *= 0.9;
        jogo.precoAcao *= 0.85;
    }

    if(constituicao.quebraSistema){
        log("🏛️ Intervenção estatal total");
        jogo.precoAcao *= 0.6;
    }
}
