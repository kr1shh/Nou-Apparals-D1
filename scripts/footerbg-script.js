const image = document.getElementById("footerbg");

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 480) {
    image.src = "../assets/images/footerbgDesktop.jpg";
  } else {
    image.src = "../assets/images/footerbg.jpg";
  }
}

document.addEventListener("DOMContentLoaded", updateImageSource);
window.addEventListener("resize", updateImageSource);
