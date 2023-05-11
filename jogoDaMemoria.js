let cards = document.querySelectorAll(".memory-card")
let button = document.querySelector("button")
button.addEventListener("click", reiniciar /* () => location.reload() */)

function reiniciar() {
  for(let card of cards) {
    card.addEventListener("click", virarCarta)
    card.classList.remove('flip')
  } 
  primeiraCarta = null
  segundaCarta = null
  algumaCartaVirou = false
  travarOTabuleiro = false

  aleatorio()
}


for(let card of cards) {
  card.addEventListener("click", virarCarta)
}

let primeiraCarta, segundaCarta
let algumaCartaVirou = false
let travarOTabuleiro = false

function virarCarta() {
  if(travarOTabuleiro) {
    return
  }  

  this.classList.add("flip")

  if(!algumaCartaVirou) {
    primeiraCarta = this
    algumaCartaVirou = true
    return;
  }

  if(primeiraCarta === this) {
    return
  }

  segundaCarta = this
  algumaCartaVirou = false

  checarCartasIguais()
}

function checarCartasIguais() {
  if(primeiraCarta.dataset.framework === segundaCarta.dataset.framework) {
    primeiraCarta.removeEventListener("click", virarCarta)
    segundaCarta.removeEventListener("click", virarCarta)
  } else {

    travarOTabuleiro = true

    setTimeout(() => {
      primeiraCarta.classList.remove('flip')
      segundaCarta.classList.remove('flip')
      travarOTabuleiro = false
    }, 1200)
  }
}

function aleatorio() {
  for(let card of cards) {
    let aleatorio = Math.floor(Math.random() * 12)
    card.style.order = aleatorio
  }
}

aleatorio()