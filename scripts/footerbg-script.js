document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".footer-bg");

  function updateImageSource() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 480) {
      img.style.backgroundImage = "../assets/images/footerbgDesktop.jpg";
    } else {
      img.style.backgroundImage = "../assets/images/footerbg.jpg";
    }
  }

  window.addEventListener("resize", updateImageSource);
  updateImageSource();
});
