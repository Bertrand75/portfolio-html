const hidden_navbar = document.getElementById("hidden_navbar");
const sticky = window.innerHeight - 150;
window.addEventListener("scroll", myFunction);

function myFunction() {
    if (window.pageYOffset >= sticky) {
        hidden_navbar.classList.remove("absolute");
        hidden_navbar.classList.add("appear");
    } else {
        hidden_navbar.classList.remove("appear");
        hidden_navbar.classList.add("absolute");
    }
}
// console.log(window.innerWidth);
// console.log(window.innerHeight);
let map = L.map("map").setView([48.862208, 2.343391], 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker([48.862208, 2.343391]).addTo(map);

// Nav qui s'ajuste à la position

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer tous les liens de la navbar
    let navLinks = document.querySelectorAll("#hidden_navbar a");

    // Parcourir les liens et ajouter un gestionnaire d'événements pour chaque lien
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien

            // Réinitialiser la couleur de tous les liens
            navLinks.forEach(function (resetLink) {
                resetLink.style.color = "#a7a7a7";
                resetLink.style.background = "#363839";
                resetLink.style.boxShadow = "none";
            });

            // Mettre à jour la couleur du lien cliqué
            link.style.color = "#fdfdfd";
            link.style.background = "#5d5d5c";
            link.style.boxShadow = "inset 0 5px #0078d4";

            // Récupérer l'ID de la section cible à partir de l'attribut href
            let targetId = link.getAttribute("href").substring(1);

            // Obtenir la position de la section cible
            let targetPosition = document.getElementById(targetId).offsetTop;

            // Faire défiler la page jusqu'à la section cible
            window.scrollTo({
                top: targetPosition,
            });
        });
    });

    // Ajouter un gestionnaire de défilement pour mettre à jour la couleur du lien actif
    window.addEventListener("scroll", function () {
        // Obtenir la position de défilement
        let scrollPosition = window.scrollY;

        // Parcourir les liens et mettre à jour la couleur en fonction de la position de la page
        navLinks.forEach(function (link) {
            let targetId = link.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (
                targetSection.offsetTop <= scrollPosition + 50 &&
                targetSection.offsetTop + targetSection.offsetHeight >
                    scrollPosition - 50
            ) {
                // Réinitialiser la couleur de tous les liens
                navLinks.forEach(function (resetLink) {
                    resetLink.style.color = "#a7a7a7";
                    resetLink.style.background = "#363839";
                    resetLink.style.boxShadow = "none";
                });

                // Mettre à jour la couleur du lien actif
                link.style.color = "#fdfdfd";
                link.style.background = "#5d5d5c";
                link.style.boxShadow = "inset 0 5px #0078d4";
            }
        });
    });
});
