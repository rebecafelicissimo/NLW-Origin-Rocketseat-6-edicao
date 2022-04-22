//  quando eu clicar no ícone do menu, irá abrir o meu menu.
// abre e fecha o menu quando clicar no ícone: hamburguer e x
const nav = document.querySelector('#header nav')
const navigationToggle = document.querySelectorAll('nav .toggle')

for (const element of navigationToggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
} // o meu elemento nesse caso é o ícone do hamburguer e meu x

/* quando clicar em um item do menu, esconder o menu */
const linksDoMenu = document.querySelectorAll('nav ul li a')

for (const link of linksDoMenu) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* ====================================== */
