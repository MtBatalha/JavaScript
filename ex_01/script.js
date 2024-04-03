function carregar(){
    var msg = window.document.getElementById('msg');
    var img = document.querySelector('#img img');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours(); 
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    msg.innerHTML = ("São " + hora + ':' + minutos);
    if(hora >= 0 && hora < 12){
        //Bom Dia 
        img.src = 'pexels-torsten-kellermann-955656.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //Boa Tarde
        document.body.style.background = '#e2c79f'
        img.src = 'pexels-anderson-martins-2386144 (1).jpg'
    }else {
        //Boa Noite
        img.src = 'pexels-pixabay-355465.jpg'
    }

}
