let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// при переходе моментальный переход с закрытием меню
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal git

const sr = ScrollReveal ({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay:200, origin:'top'})//всплывающий текст
sr.reveal('.form-container form',{delay:600, origin:'left'})//всплывающие форма даты и времени
sr.reveal('.heading',{delay:400, origin:'top'})// heading 
sr.reveal('.ride-container .box',{delay:400, origin:'top'})// heading
sr.reveal('.services-container .box',{delay:400, origin:'top'})// 
sr.reveal('.about-container .box',{delay:400, origin:'top'})//
sr.reveal('.reviews-container',{delay:600, origin:'top'})//  
sr.reveal('.newsletter .box',{delay:400, origin:'bottom'})// 
