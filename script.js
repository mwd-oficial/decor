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

var btnpal = document.getElementById("btnpal")
var setavoltar = document.getElementById("setavoltar")
var logoDeCor = document.getElementById("logoDeCor")
var btnini = document.getElementsByClassName("btn")
function btnpalavra() {
    for (let i = 0; i < 2; i++) {
        btnini[i].style.animation = "aumentar 1s linear"
        btnini[i].style.pointerEvents = "none"
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
    secdigitar.style.animation = "sumiro 1s linear"
    secdecorar.style.animation = "sumiro 1s linear"
    setavoltar.style.animation = "sumiro 1s linear"
    setTimeout(() => {
        location = location
        window.location.reload()
    }, 500);
}

var texto = document.getElementById("ipalavraInput")
var divs = document.getElementsByClassName("divpalavras")
var btnenviar = document.getElementById("btnenviar")
var arraypal = []
var indice = 0

var valorMaximo
function escrevendo(event) {
    var tecla = event.keyCode
    if (tecla == 13) {
        if (Number(texto.value.length) == 0) {
            alert("Digite algo")
        } else if (Number(texto.value.length) < 2 || Number(texto.value.length) > 20 || texto.value.match(/\d/)) {
            alert("Valor inválido")
        } else if (indice < divs.length) {
            arraypal.push(divs[indice].innerHTML = texto.value)
            divs[indice].style.textTransform = "capitalize"
            divs[indice].style.backgroundColor = "rgba(255, 255, 255, .85)"
            indice++
            console.log(arraypal)
            valorMaximo = indice;
        } else {
            alert("Limite de palavras alcançado")
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

var secdecorar = document.getElementById("secdecorar")
function enviando() {
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

var btnsorte = document.getElementById("btnsorte")
var sorte = document.getElementById("sorte")
var btnverifica = document.getElementById("btnverifica")
var indicerandom
var escrito = document.getElementById("escrito")
var arrayElement = []
var decora = document.getElementById("idecoraInput")
decora.style.pointerEvents = "none"

function sorteando() {
    btnsorte.classList.add("btnGray")
    decora.classList.remove("btnGray")
    decora.style.pointerEvents = "all"
    console.log(arraypal)
    console.log(sorteados)
    if (sorteados.length == valorMaximo) {
        // desabilitar o botão "reiniciar"
        btnsorte.disabled = true;

        // limpar o conteúdo de "sorte"
        sorte.innerHTML = "";

        // exibir mensagem de que todos os números já foram sorteados
        if (confirm("Todos os números já foram sorteados! Decorar novamente?") == true) {
            sorteados = []
            btnsorte.disabled = false;
            btnsorte.classList.remove("btnGray")
            decora.classList.add("btnGray")
            decora.style.pointerEvents = "none"
            return;
        } else {
            voltar()
        }
    } else {
        sorte.innerHTML = arraypal[criarUnico()]
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
            alert("Digite algo")
        } else if (Number(decora.value.length) < 2 || Number(decora.value.length) > 20 || decora.value.match(/\d/)) {
            alert("Valor inválido")
        } else {
            escrito.innerHTML = decora.value
            escrito.style.textTransform = "capitalize"
            btnverifica.classList.remove("btnGray")
        }
        decora.value = ''

    }
}

function verificando() {
    document.removeEventListener('keydown', escrevendo)
    if (sorte.innerHTML == escrito.innerHTML) {
        btnsorte.classList.remove("btnGray")
        btnverifica.classList.add("btnGray")
        decora.classList.add("btnGray")
        decora.style.pointerEvents = "none"
        decora.value = ''
        alert("deu certo")
        escrito.innerHTML = ""
        sorte.innerHTML = ""
    } else {
        btnverifica.classList.add("btnGray")
        alert("nao deu certo")
        decora.value = ''
    }

}

