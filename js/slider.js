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

// MODAL

let images = document.getElementsByClassName("slide-img");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        openModal(i);
    });
}
function openModal(x) {
    // Récupération du bloc modal
    var modal = document.getElementById("myModal");
    // Récupération et chargement de l'image
    let imageModal = document.getElementById("modal-image");
    let image = document.getElementsByClassName("slide-img")[x];
    imageModal.src = image.src;
    // Récupération et chargement du texte
    let captionText = document.getElementById("caption");
    let text = document.getElementsByClassName("slide-text")[x];
    captionText.innerHTML = text.innerHTML;
    // Affichage du bloc modal
    modal.style.display = "block";
    // Fermeture du modal
    let span = document.getElementById("modal-close");
    span.onclick = function () {
        modal.style.display = "none";
    };
    modal.style.cursor = "pointer";
    modal.onclick = function () {
        modal.style.display = "none";
    };
}
