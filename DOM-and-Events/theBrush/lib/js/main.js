const body = document.querySelector('body');
const image = document.getElementById("rengar");


function imageSource() {
    image.src = "assets/rengar.png"
}

body.addEventListener("click", imageSource);