//  quando eu clicar no ícone do menu, irá abrir o meu menu.
const nav = document.querySelector('#header nav')
const navigationToggle = document.querySelectorAll('nav .toggle')

for (const element of navigationToggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
} // o meu elemento nesse caso é o ícone do hamburguer e meu x
