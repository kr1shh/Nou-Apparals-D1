const image = document.getElementById("hero-bg");

function updateImageSource() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 480) {
    image.src = "../assets/images/Hero-Desktop.jpg";
  } else {
    image.src = "../assets/images/Hero-Mobile.jpg";
  }
}

document.addEventListener("DOMContentLoaded", updateImageSource);
window.addEventListener("resize", updateImageSource);
