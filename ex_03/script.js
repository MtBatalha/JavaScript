function contar(){
    let inicio = document.getElementById('texti');
    let fim = document.getElementById('textf');
    let passos = document.getElementById('textp');
    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert("[ERROR] Tente inserir um número válido.");
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);
        if (p <= 0 ){
            p = 1
        }

        if(i <f ){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} | `
        }
       
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} | `
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }

    
}