/* abre e fecha o menu quando clicar no icone: hambureguer e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, escoder o menu */
const link = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.renove('show')
  })
}

/* mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

/* testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPeriew: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na pagina */
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reser: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .imaga, #about .text,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testimonials
  #contact .text, #contact .links
`,
  { interval: 100 }
)
