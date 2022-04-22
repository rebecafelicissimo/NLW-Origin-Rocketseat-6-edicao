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
/* mudar o header da página quando der scroll, ou seja, vai adicionar uma sombra no header. */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // deslocamento da altura

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior ou igual a altura do header
    header.classList.add('scroll')
  } else {
    // scroll menor que a altura do header
    header.classList.remove('scroll')
  }
})

// Testimonials slider / carrossel / swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* Scroll Reveal: mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
