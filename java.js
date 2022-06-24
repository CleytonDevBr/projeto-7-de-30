const botao = document.getElementById('btn')

function abrirMenu(){
  const nav= document.getElementById('nav')
  nav.classList.toggle('active')
}




/* O BUTTON VAI TER UM EVENTO QUANDO CLICADO */
botao.addEventListener('click', abrirMenu)