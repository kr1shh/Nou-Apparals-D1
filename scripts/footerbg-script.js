const img = document.getElementById("footerbg");

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 480) {
    img.src = "../assets/images/footerbgDesktop.jpg";
  } else {
    img.src = "../assets/images/footerbg.jpg";
  }
}

document.addEventListener("DOMContentLoaded", updateImageSource);
window.addEventListener("resize", updateImageSource);
