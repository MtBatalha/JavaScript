function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('textano'); //fano recebe o valor inserido
    var res = document.getElementById('res'); // variavel criada para receber o resultado

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERROR] verifique e tente novamente!'); //mensagem de erro 
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade > 0 && idade < 10){
                //criança
                // img.setAttribute('src', 'nome da imagemm') *forma de colocar a imagem*
            }else if(idade < 21){
                //jovem
            }else if (idade < 50){
                //Adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            gênero =  'Mulher'
            if(idade > 0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if (idade < 50){
                //Adulto
            }else{
                //idoso
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+ gênero + ' com ' + idade + ' anos.'
        
        // res.appendChild = (img); para exibir a imagem
    }
}


