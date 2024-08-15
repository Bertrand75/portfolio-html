function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var domSlideIndexes = document.getElementsByClassName("slide-index");
for (let i = 0; i < domSlideIndexes.length; i++) {
    domSlideIndexes[i].innerHTML = i + 1 + " / " + domSlideIndexes.length;
}

var slides = document.getElementsByClassName("slide");
let dotsContainer = document.getElementsByClassName("slide-dot");
for (i = 1; i <= slides.length; i++) {
    dotsContainer[0].innerHTML +=
        '<span class="dot" onclick="currentSlide(' + i + ')"></span>';
}

var slideIndex = 1;
showSlides(slideIndex);
