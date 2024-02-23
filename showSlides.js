/* Updated 2/19/2024 */

//// show slides ////
let slideIndex = 1;
showSlides(slideIndex, letter = '');

function plusSlides(n, letter = '') {
    showSlides(slideIndex += n, letter);
}

function currentSlide(n, letter = '') {
    showSlides(slideIndex = n, letter);
}

function showSlides(n, letter = '') {
    let i;
    let slides = document.getElementsByClassName("mySlides" + letter);
    let dots = document.getElementsByClassName("dot" + letter);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//////////button//////

let b = getElementsByClassName("topbutton");

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

