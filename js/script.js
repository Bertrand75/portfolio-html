// NAVBAR
// Changement de Navbar en fonction de la position
function navChange() {
    let hidden_navbar = document.getElementById("hidden_navbar");
    let header = document.getElementsByTagName("header")[0];
    let sticky = header.clientHeight - hidden_navbar.clientHeight;
    if (window.scrollY >= sticky - 1) {
        hidden_navbar.classList.remove("absolute");
        hidden_navbar.classList.add("appear");
    } else {
        hidden_navbar.classList.remove("appear");
        hidden_navbar.classList.add("absolute");
    }
}

window.addEventListener("DOMContentLoaded", navChange);
window.addEventListener("scroll", navChange);
window.addEventListener("resize", navChange);

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer tous les liens de la navbar
    let navLinks = document.querySelectorAll("#hidden_navbar a");

    // Parcourir les liens et ajouter un gestionnaire d'événements pour chaque lien
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // event.preventDefault(); // Empêche le comportement par défaut du lien

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

// BURGER

function openBurger() {
    const navbar = document.querySelector("#hidden_navbar");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", (e) => {
        navbar.classList.toggle("show-nav");
        burger.classList.toggle("cross-mode");
    });
}
openBurger();

// ONGLETS PROJETS
function openTab(x) {
    let contents = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        buttons[i].classList.remove("tab-btn-active");
    }
    contents[x].style.display = "block";
    buttons[x].classList.add("tab-btn-active");
}

// LIRE LA SUITE
window.addEventListener("load", function () {
    // Récupération des iframes du slider
    let iframes = document.querySelectorAll(".tab-contents iframe");
    // Récupération des div qui contiennent les iframes
    let iframeContainers = document.querySelectorAll(".tab-content");
    // Pour chaque iframe on récupère la page d'origine
    for (let i = 0; i < iframes.length; i++) {
        let iframeContent =
            iframes[i].contentWindow.document.getElementsByTagName("html")[0];
        // Technique pour pouvoir obtenir la hauteur de la page , il faut d'abord inclure celle-ci dans le DOM courant
        // D'abord clonage pour ne pas que la page d'origine ne s'affiche plus
        iframeContent = iframeContent.cloneNode(true);
        iframeContent.style.visibility = "hidden";
        document.body.appendChild(iframeContent);
        // Récupération de la hauteur
        let height = iframeContent.clientHeight;
        document.body.removeChild(iframeContent);
        iframeContent.style.visibility = "visible";
        // On ajuste la hauteur de la div qui contient la iframe
        iframeContainers[i].style.height = height + 100 + "px";
    }
});

function readMore(x) {
    let projetDescriptions = document.querySelectorAll(".tab-content");
    let shadow = document.querySelectorAll(".tab-content div");
    let buttons = document.querySelectorAll(".tab-content button");
    projetDescriptions[x].classList.toggle("article-reduced");
    setTimeout(() => {
        shadow[x].classList.toggle("hidden");
    }, 400);
    if (buttons[x].innerHTML == "Lire la suite") {
        buttons[x].classList.add("fade");
        setTimeout(() => {
            buttons[x].innerHTML = "Réduire";
        }, 400);
        setTimeout(() => {
            buttons[x].classList.remove("fade");
        }, 400);
    } else {
        buttons[x].classList.add("fade");
        setTimeout(() => {
            buttons[x].innerHTML = "Lire la suite";
        }, 400);
        setTimeout(() => {
            buttons[x].classList.remove("fade");
        }, 400);
    }
}

// CV ZOOM
// On récupère l'élément à afficher
function displayCV() {
    let cv = document.getElementById("cv_container");
    let cvPlus = document.getElementById("cv-plus");
    let cvMinus = document.getElementById("cv-minus");
    cv.classList.toggle("expanded");
    cvPlus.classList.toggle("hidden");
    cvMinus.classList.toggle("hidden");
    // if (!cvMinus.style.boxShadow) {
    //     cvMinus.style.boxShadow = "inset 0 5px #0078d4";
    // } else {
    //     cvMinus.style.removeProperty("box-shadow");
    // }
}
