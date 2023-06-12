/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})





// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

var formulario = document.formulario_registro,
    elementos = formulario.elements;

// Funcion que se ejecuta cuando el evento click es activado

var validarInputs = function(){
    for (var i = 0; i < elementos.length; i++) {
        // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
            // Si es tipo texto, email o password vamos a comprobar que esten completados los input
            if (elementos[i].value.length == 0) {
                console.log('El campo ' + elementos[i].name + ' esta incompleto');
                elementos[i].className = elementos[i].className + " error";
                return false;
            } else {
                elementos[i].className = elementos[i].className.replace(" error", "");
            }
        }
    }

    // Comprobando que las contraseñas coincidan
    if (elementos.pass.value !== elementos.pass2.value) {
        elementos.pass.value = "";
        elementos.pass2.value = "";
        elementos.pass.className = elementos.pass.className + " error";
        elementos.pass2.className = elementos.pass2.className + " error";
    } else {
        elementos.pass.className = elementos.pass.className.replace(" error", "");
        elementos.pass2.className = elementos.pass2.className.replace(" error", "");
    }

    return true;
};

var validarRadios = function(){
    var opciones = document.getElementsByName('sexo'),
        resultado = false;

    for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
            // Recorremos los radio button
            for (var o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }

            if (resultado == false) {
                elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                console.log('El campo sexo esta incompleto');
                return false;
            } else {
                // Eliminamos la clase Error del radio button
                elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                return true;
            }
        }
    }
};

var validarCheckbox = function(){
    var opciones = document.getElementsByName('terminos'),
        resultado = false;

    for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].type == "checkbox"){
            for (var o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }

            if (resultado == false) {
                elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                console.log('El campo checkbox esta incompleto');
                return false;
            } else {
                // Eliminamos la clase Error del checkbox
                elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                return true;
            }
        }
    }
};

var enviar = function(e){
    if (!validarInputs()) {
        console.log('Falto validar los Input');
        e.preventDefault();
    } else if (!validarRadios()) {
        console.log('Falto validar los Radio Button');
        e.preventDefault();
    } else if (!validarCheckbox()) {
        console.log('Falto validar Checkbox');
        e.preventDefault();
    } else {
        console.log('Envia');
        e.preventDefault();
    }
};

var focusInput = function(){
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
    if (this.value <= 0) {
        this.parentElement.children[1].className = "label";
        this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
};

// --- Eventos ---
formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
        elementos[i].addEventListener("focus", focusInput);
        elementos[i].addEventListener("blur", blurInput);
    }
}

}())