/*for (var c = 1; c <= 5; c++) {
    console.log(`Passo ${c}`)
}*/
function contador() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div.res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossível Contar!')
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1.')
            p = 1
        }
            //Contagem crescente
        if ( i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += (` ${c} \u{1F449}`)  
            }   
        }else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += (`${c} \u{1F449}`)
            }
        }
    }
    res.innerHTML += (`\u{1F3C1}`)
}
