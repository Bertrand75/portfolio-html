// MODAL
// Ajout d'une fonction d'ouverture sur les images du slider des iframes
// Récupération des iframes

window.onload = function () {
    let iframes = document.querySelectorAll(".tab-contents iframe");
    // Récupération des images des sliders des iframes
    for (let i = 0; i < iframes.length; i++) {
        let images =
            iframes[i].contentWindow.document.getElementsByClassName(
                "slide-img"
            );

        // Ajout des fonctions de déclenchement aux images
        for (let j = 0; j < images.length; j++) {
            images[j].addEventListener("click", () => {
                parent.openModal(i, j);
            });
        }
    }
};

function openModal(x, y) {
    // Récupération du bloc modal
    var modal = document.getElementById("myModal");

    // Récupération de l'image du modal
    let imageModal = document.getElementById("modal-image");

    // Récupération de l'image à charger
    let iframe = document.getElementsByTagName("iframe")[x];
    let image =
        iframe.contentWindow.document.getElementsByClassName("slide-img")[y];
    // Chargement de l'image
    imageModal.src = image.src;
    // Récupération et chargement du texte
    let captionText = document.getElementById("caption");
    let text =
        iframe.contentWindow.document.getElementsByClassName("slide-text")[y];
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
