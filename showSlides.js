/* Updated 1/16/2022 */


/* ARTICLES SLIDESHOW */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



/* ALBUM COVERS SLIDESHOW*/

let slideIndexB = 1;

showSlidesB(slideIndexB);

function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  let i;
  i = 0;
  let slidesB = document.getElementsByClassName("mySlidesB");
  let dotsB = document.getElementsByClassName("dotB");
  if (n > slidesB.length) {slideIndexB = 1}    
  if (n < 1) {slideIndexB = slidesB.length}
  for (i = 0; i < slidesB.length; i++) {
    slidesB[i].style.display = "none";  
  }
  for (i = 0; i < dotsB.length; i++) {
    dotsB[i].className = dotsB[i].className.replace(" active", "");
  }
  slidesB[slideIndexB-1].style.display = "block"
  dotsB[slideIndexB-1].className += " active"; /*changes the color of the dot when active*/
}


/* THREAD SLIDESHOW */
let slideIndexD = 1;
showSlidesD(slideIndexD);

function plusSlidesD(n) {
  showSlidesD(slideIndexD += n);
}

function currentSlideD(n) {
  showSlidesD(slideIndexD = n);
}

function showSlidesD(n) {
  let i;
  let slidesD = document.getElementsByClassName("mySlidesD");
  let dotsD = document.getElementsByClassName("dotD");
  if (n > slidesD.length) {slideIndexD = 1}    
  if (n < 1) {slideIndexD = slidesD.length}
  for (i = 0; i < slidesD.length; i++) {
    slidesD[i].style.display = "none";  
  }
  for (i = 0; i < dotsD.length; i++) {
    dotsD[i].className = dotsD[i].className.replace(" active", "");
  }
  slidesD[slideIndexD-1].style.display = "block";  
  dotsD[slideIndexD-1].className += " active";
}

/* hymn book layout*/

let slideIndexC = 1;

showSlidesC(slideIndexC);

function plusSlidesC(n) {
  showSlidesC(slideIndexC += n);
}

function currentSlideC(n) {
  showSlidesC(slideIndexC = n);
}

function showSlidesC(n) {
  let i;
  i = 0;
  let slidesC = document.getElementsByClassName("mySlidesC");
  let dotsC = document.getElementsByClassName("dotC");
  if (n > slidesC.length) {slideIndexC = 1}    
  if (n < 1) {slideIndexC = slidesC.length}
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";  
  }
  for (i = 0; i < dotsC.length; i++) {
    dotsC[i].className = dotsC[i].className.replace(" active", "");
  }
  slidesC[slideIndexC-1].style.display = "block"
  dotsC[slideIndexC-1].className += " active"; 
}

/* MENTAL SLIDESHOW*/

let slideIndexE = 1;

showSlidesE(slideIndexE);

function plusSlidesE(n) {
  showSlidesE(slideIndexE += n);
}

function currentSlideE(n) {
  showSlidesE(slideIndexE = n);
}

function showSlidesE(n) {
  let i;
  i = 0;
  let slidesE = document.getElementsByClassName("mySlidesE");
  let dotsE = document.getElementsByClassName("dotE");
  if (n > slidesE.length) {slideIndexE = 1}    
  if (n < 1) {slideIndexE = slidesE.length}
  for (i = 0; i < slidesE.length; i++) {
    slidesE[i].style.display = "none";  
  }
  for (i = 0; i < dotsE.length; i++) {
    dotsE[i].className = dotsE[i].className.replace(" active", "");
  }
  slidesE[slideIndexE-1].style.display = "block"
  dotsE[slideIndexE-1].className += " active"; /*changes the color of the dot when active*/
}



//////////button//////

let b = getElementsByClassName("topbutton");

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//////////////// collapse button ///////////
var collapse = document.getElementsByClassName("collapsebutton");
var i;
function expandcollapse() {
  let i = 0
  if (i == 0){
    content
  }


}
for (i = 0; i < collapse.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}