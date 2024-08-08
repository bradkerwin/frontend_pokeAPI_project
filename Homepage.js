function changePikachu() {
    const newImagesrc = "new_fighting_pikachu.png";
    document.getElementById("pikachu-image").src = newImagesrc;
}

function revertPikachu() {
    const newImagesrc = "og_pikachu.jpg";
    document.getElementById("pikachu-image").src = newImagesrc;
}