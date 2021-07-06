// TYPING EFFECT
const navPortfolio = document.querySelectorAll('.portfolio__item')
const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor')

const textArray = ['Youngmin', 'a developer']
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 2000 // Delay between current and next text
let textArrayIndex = 0
let charIndex = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing')
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    cursorSpan.classList.remove('typing')
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing')
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    )
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    cursorSpan.classList.remove('typing')
    textArrayIndex++
    if (textArrayIndex >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 1100)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250)
})

// MENU SHOW
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
})

/* SCROLL TO HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

/*SCROLL TO ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL TO SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL TO PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 })

/*SCROLL TO CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })
