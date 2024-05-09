let mobiletags = function() {
    let elementos = document.querySelector(".plinks");
    let computedStyle = window.getComputedStyle(elementos);

    if (computedStyle.display === "none") {
        elementos.style.display = "flex";
    } else {
        elementos.style.display = "none";
    }
}

