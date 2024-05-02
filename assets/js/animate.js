
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.header__content-title`, { delay: 200 })
sr.reveal(`.header__content-sub, .about__content-img,   
            .about__content-text, .porfolio__hide`, { origin: 'top', delay: 300 })
sr.reveal(`.header__content-btns, .contact-info`, {distance: '100px', delay: 600, origin: 'bottom' })
sr.reveal(`.blog__content-menu`, { duration: 1000, delay: 100, origin: 'top' })
sr.reveal(`.blog__content-card, .portfolio__cards, .contact__img`, {  duration: 1000, origin: 'right', distance: '100px' })
sr.reveal(`.blog__content-card, .portfolio__cards, .contact__form`, {   duration: 1000, origin: 'left',  distance: '100px' })
sr.reveal(`.seeMore,`, { duration: 1500, origin: 'bottom', delay: 100 })

