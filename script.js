var btns = document.getElementsByClassName("btn")
var numeroWidth = window.innerWidth
var numeroHeight = window.innerHeight

//tela de carregamento
var telacarregamento = document.getElementById("telacarregamento")
var telainiciar = document.getElementById("telainiciar")
var secdigitar = document.getElementById("secdigitar")

function carregando() {
    setTimeout(() => {
        telacarregamento.style.display = "none"
        telainiciar.style.display = "flex"
        telainiciar.style.animation = "aparecer 1s linear"
    }, 1000);
    setTimeout(() => {
        telainiciar.style.opacity = 1
    }, 2000);
}

var divs = document.getElementsByClassName("divpalavras")
var btnpal = document.getElementById("btnpal")
var setavoltar = document.getElementById("setavoltar")
var logoDeCor = document.getElementById("logoDeCor")
var btnini = document.getElementsByClassName("btn")

function btnpalavra() {
    if (numeroHeight > numeroWidth) {
        btnpal.classList.add("btnHover")
        setTimeout(() => {
            btnpal.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            btnpalavraf()
        }, 650);
    } else {
        btnpalavraf()
    }
}
function btnpalavraf() {
    for (let i = 3; i < 5; i++) {
        btnini[i].style.pointerEvents = "none"
        btnini[i].style.animation = "aumentar 1s linear"
    }
    btnpal.style.pointerEvents = "none"
    setavoltar.style.pointerEvents = "none"
    logoDeCor.style.animation = "sumir 1s linear"
    secdigitar.style.opacity = 0
    setTimeout(() => {
        telainiciar.style.display = "none"
        setavoltar.style.display = "flex"
        secdigitar.style.display = "flex"
        setavoltar.style.animation = "aparecer 1s linear"
        secdigitar.style.animation = "aparecer 1s linear"
    }, 950);
    setTimeout(() => {
        setavoltar.style.pointerEvents = "all"
        secdigitar.style.opacity = 1
        secdigitar.style.animation = ""
    }, 1950);
}

function voltar() {
    if (numeroHeight > numeroWidth) {
        setavoltar.classList.add("btnHover")
        setTimeout(() => {
            setavoltar.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            voltarf()
        }, 650);
    } else {
        voltarf()
    }
}

function voltarf() {
    secdigitar.style.animation = "sumiro 1s linear"
    secdecorar.style.animation = "sumiro 1s linear"
    setavoltar.style.animation = "sumiro 1s linear"
    setTimeout(() => {
        secdigitar.style.opacity = 0
        secdecorar.style.opacity = 0
        setavoltar.style.opacity = 0
        location = location
        window.location.reload()
    }, 500);
}

var texto = document.getElementById("ipalavraInput")
var btnenviar = document.getElementById("btnenviar")
var arraypal = []
var indice = 0

var valorMaximo
function escrevendo(event) {
    var tecla = event.keyCode
    if (tecla == 13) {
        if (Number(texto.value.length) == 0) {
            alertando()
            palerta.innerHTML = "Digite algo!"
        } else if (Number(texto.value.length) < 2 || Number(texto.value.length) > 20 || texto.value.match(/\d/) || texto.value.match(/[^\wÀ-ÿ- ]/) || texto.value.match(/[A-Z]/)) {
            alertando()
            palerta.innerHTML = "Valor inválido! Digite no mínimo 2 letras e sem maiúsculas, numerais ou caracteres especiais."
            document.removeEventListener('keydown', escrevendo)
        } else if (indice < divs.length) {
            arraypal.push(divs[indice].innerHTML = texto.value)
            divs[indice].style.textTransform = "capitalize"
            divs[indice].style.backgroundColor = "rgba(255, 255, 255, .85)"
            indice++
            console.log(arraypal)
            valorMaximo = indice;
        } else {
            alertando()
            palerta.innerHTML = "Limite de palavras alcançado!"
            document.removeEventListener('keydown', escrevendo)
        }
        texto.value = ''
        if (indice >= 2) {
            btnenviar.classList.remove("btnGray")
        }
    }
}

function focoEsc() {
    document.addEventListener('keydown', escrevendo)
}

function focoSec() {
    document.addEventListener('keydown', decorando)
}

var corpo = document.getElementById("corpo")
var fundoAlerta = document.getElementById("fundoAlerta")
var alerta = document.getElementById("alerta")
var palerta = document.getElementById("palerta")
var btnok = document.getElementById("btnok")
var simnaoflex = document.getElementById("simnaoflex")
var simteste = false
var naoteste = false

function alertando() {
    alerta.style.display = "flex"
    fundoAlerta.style.display = "block"
    corpo.style.overflow = "hidden"
}

function dandoOK() {
    alerta.style.display = "none"
    fundoAlerta.style.display = "none"
    corpo.style.overflow = "visible"
}

function sim() {
    simteste = true
    naoteste = false
    alerta.style.display = "none"
    fundoAlerta.style.display = "none"
    corpo.style.overflow = "visible"
    simnaoteste()
}
function nao() {
    simteste = false
    naoteste = true
    alerta.style.display = "none"
    fundoAlerta.style.display = "none"
    simnaoteste()
}

function enviando() {
    if (numeroHeight > numeroWidth) {
        btnenviar.classList.add("btnHover")
        setTimeout(() => {
            btnenviar.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            enviandof()
        }, 650);
    } else {
        enviandof()
    }
}

var secdecorar = document.getElementById("secdecorar")
function enviandof() {
    secdigitar.style.animation = "sumiro 1s linear"
    btnenviar.style.pointerEvents = "none"
    setavoltar.style.animation = "sumiro 1s linear"
    setTimeout(() => {
        secdigitar.style.display = "none"
        setavoltar.style.opacity = 0
    }, 1000);
    setTimeout(() => {
        secdecorar.style.display = "flex"
        secdecorar.style.animation = "aparecer 1s linear"
        setavoltar.style.animation = "aparecer 1s linear"
        secdecorar.style.opacity = 1
        setavoltar.style.opacity = 1
    }, 2000);
}

var ifieldset = document.getElementsByClassName("ifieldset")[1]
var btnsorte = document.getElementById("btnsorte")
var sorte = document.getElementById("sorte")
var btnverifica = document.getElementById("btnverifica")
var indicerandom
var escrito = document.getElementById("escrito")
var arrayElement = []
var decora = document.getElementById("idecoraInput")
let palavra
let nova_palavra
decora.style.pointerEvents = "none"
ifieldset.style.border = "2px solid gray"

function simnaoteste() {
    if (simteste == true && naoteste == false) {
        sorteados = []
        btnsorte.disabled = false;
        btnsorte.style.display = "block"
        btnverifica.style.display = "none"
        decora.classList.add("btnGray")
        ifieldset.style.border = "2px solid gray"
        decora.style.pointerEvents = "none"
        btnok.style.display = "block"
        simnaoflex.style.display = "none"
        dica.classList.add("btnGray")
        return;
    } else if (simteste == false && naoteste == true) {
        voltar()
    }
}

function sorteando() {
    if (numeroHeight > numeroWidth) {
        btnsorte.classList.add("btnHover")
        setTimeout(() => {
            btnsorte.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            sorteandof()
        }, 650);
    } else {
        sorteandof()
    }
}

function sorteandof() {
    dica.classList.remove("btnGray")

    btnsorte.style.display = "none"
    btnverifica.style.display = "block"
    btnsorte.style.display = "none"
    btnverifica.style.display = "block"

    decora.classList.remove("btnGray")
    ifieldset.style.border = "2px solid var(--corbtn)"
    decora.style.pointerEvents = "all"

    console.log(arraypal)
    console.log(sorteados)

    if (sorteados.length == valorMaximo) {
        // desabilitar o botão "reiniciar"
        btnsorte.disabled = true;

        // limpar o conteúdo de "sorte"
        sorte.innerHTML = "";

        // exibir mensagem de que todos os números já foram sorteados
        alertando()
        palerta.innerHTML = "Todos os números já foram sorteados! Decorar novamente? (Senão atualizará a página e as palavras serão perdidas."
        btnok.style.display = "none"
        simnaoflex.style.display = "flex"
    } else {
        palavra = arraypal[criarUnico()];

        // Modifica a palavra
        nova_palavra = palavra.charAt(0) + palavra.slice(1, -1).replace(/[a-zA-Z]/g, "_") + palavra.charAt(palavra.length - 1);
        sorte.innerHTML = nova_palavra
        sorte.style.backgroundColor = "rgba(255, 255, 255, .85)"
    }
}

var sorteados = [];
function criarUnico() {
    var sugestao = Math.floor(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.floor(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    return sugestao; // devolver o numero único
}

sorte.style.textTransform = "capitalize"
function decorando(event) {
    document.removeEventListener('keydown', escrevendo)
    var tecla = event.keyCode
    if (tecla == 13) {
        if (Number(decora.value.length) == 0) {
            alertando()
            palerta.innerHTML = "Digite algo"
        } else if (Number(decora.value.length) < 2 || Number(decora.value.length) > 20 || decora.value.match(/\d/)) {
            alertando()
            palerta.innerHTML = "Valor inválido"
        } else {
            escrito.innerHTML = decora.value
            escrito.style.textTransform = "capitalize"
            escrito.style.backgroundColor = "rgba(255, 255, 255, .85)"
            btnverifica.classList.remove("btnGray")
        }
        decora.value = ''

    }
}

function verificando() {
    if (numeroHeight > numeroWidth) {
        btnverifica.classList.add("btnHover")
        setTimeout(() => {
            btnverifica.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            verificandof()
        }, 650);
    } else {
        verificandof()
    }
}

function verificandof() {
    document.removeEventListener('keydown', escrevendo)
    if (palavra == escrito.innerHTML) {
        btnsorte.classList.remove("btnGray")
        btnverifica.classList.add("btnGray")
        decora.classList.add("btnGray")
        ifieldset.style.border = "2px solid gray"
        decora.style.pointerEvents = "none"
        decora.value = ''
        alertando()
        palerta.innerHTML = "Você acertou!"
        palerta.style.color = "green"

        dica.classList.add("btnGray")

        btnsorte.style.display = "block"
        btnverifica.style.display = "none"
        escrito.innerHTML = ""
        sorte.innerHTML = ""
        sorte.style.backgroundColor = "rgba(255, 255, 255, .5)"
        escrito.style.backgroundColor = "rgba(255, 255, 255, .5)"
    } else {
        btnverifica.classList.add("btnGray")
        alertando()
        palerta.innerHTML = "Você errou! Certifique-se que escreveu em minúsculas."
        palerta.style.color = "red"
        decora.value = ''
    }

}

function dandoDica() {
    if (numeroHeight > numeroWidth) {
        dica.classList.add("btnHover")
        setTimeout(() => {
            dica.classList.remove("btnHover")
        }, 400);
        setTimeout(() => {
            dandoDicaf()
        }, 650);
    } else {
        dandoDicaf()
    }
}

var dica = document.getElementById("dica")
function dandoDicaf() {
    var testeIndex = nova_palavra.indexOf("_")
    if (testeIndex == -1) {
        sorte.innerHTML = nova_palavra
    } else {
        sorte.innerHTML = palavra
        dica.classList.add("btnGray")
    }
}

