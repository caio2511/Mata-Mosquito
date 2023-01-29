var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
var criaMosquitoTempo = 1500

nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    var criaMosquitoTempo = 1000
}else if(nivel === 'muito-dificil'){
    var criaMosquitoTempo = 600
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight 
    largura = window.innerWidth 
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function (){

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href('vitoria.html')
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }   
}, 1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if (vidas > 3){

            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    console.log(posicaoX, posicaoY)

    if (posicaoX < 0){
        posicaoX = 0
    }else if (posicaoY < 0){
        posicaoY = 0
    }

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

    tamanhoRandomico()
}

function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }   
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }   
}