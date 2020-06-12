/*LEMBRETE, USAMOS THIS NA FUNÇÃO PARA QUE AQUELE ATRIBUTO FIQUE DISPONIVEL FORA DA FUNÇÃO */
function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    /*Poderiamos usar o classList.add tambem*/
    elem.className = className

    return elem
}

/*Função para criar barreira,  e a reversa é a que vai em cima, this.elemento seria a DOM*/
function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    /*Aqui estamos criando elemento com a função novoElemento, a div e o nome da classe*/
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    /*Se for barreira reversa corpo senão borda na primeira chamada*/
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}
//EXEMPLO, COM ISSO IRIAMOS EXIBIR UMA BARREIRA NO TOPO DA TELA
// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

/*Função ParDeBarreiras que tem a barreira superior e a inferior*/
function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    /*Random varia de  zero até altura - abertura */
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    /* getX left.split(px)[0], ou seja o inicio da tela  no lado esquerdo*/
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])//Para pegarmos a posição da barreira em pixels
    this.setX = x => this.elemento.style.left = `${x}px`//Mudando a posição de X
    this.getLargura = () => this.elemento.clientWidth //Pegando a largura do elemento

    this.sortearAbertura()
    this.setX(x)
}

//LEMBRETE ALTURA ABERTURA HORIZONTAL --- APENAS TESTE, VARIANDO TAMANHOS SUPERIOR E INFERIOR
// const obj = new ParDeBarreiras(500, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(obj.elemento)

/* Animação das barreiras aparecendo na tela */
function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura,abertura,largura),
        new ParDeBarreiras(altura,abertura,largura + espaco),
        new ParDeBarreiras(altura,abertura,largura + espaco * 2),
        new ParDeBarreiras(altura,abertura,largura + espaco * 3)
    ]
    /*Deslocamento é em quanto em quanto pixels ou seja a velocidade */
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento)

            /*Quando o elemento sair da tela, voltar para o final*/
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
                const meio = largura / 2
                const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
                if(cruzouMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo){
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    /*Posição vertical*/
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px` 
    /*Quando um tecla estiver sendo pressionado let voando ficará true */
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => { /*Se estiver true voando ele sobe 8 senão estiver false ele cai -5 */
        const novoY = this.getY() + (voando ? 5 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        /*Lógica para o passaro não passar do chão e nem da borda de cima */
        if(novoY <= 0){
            this.setY(0)
        } else if (novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
        /*Para que o pássaro inicie no centro da tela verticalmente*/
        this.setY(alturaJogo / 2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function gameOver(){
    const areaDoJogo = document.querySelector('[wm-flappy]')
    this.elemento = novoElemento('span', 'game-over')
    this.elemento.innerHTML = 'Game Over'
    areaDoJogo.appendChild(this.elemento)    
}   

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() /*Retângulo associado ao elementoA*/
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        } else {
            gameOver()
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0
    /*Pegando área do jogo, sua altura e largura*/
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth
    /*Instanciando as funções construtoras*/
    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)
    /*Adicionando os elementos na área do jogo através da DOM*/
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    /*Start no game*/
    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()

/*TESTE APENAS*/
// const barreiras = new Barreiras(500, 1200, 200, 400)
// const passaro = new Passaro(500)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => {areaDoJogo.appendChild(par.elemento)})
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// },20)

