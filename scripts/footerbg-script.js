document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".footer-container");

  function updateImageSource() {
    const screenWidth = window.innerWidth;
    console.log("working");

    if (screenWidth > 480) {
      img.style.backgroundImage = "url(../assets/images/footerbgDesktop.jpg)";
    } else {
      img.style.backgroundImage = "url(../assets/images/footerbg.jpg)";
    }
  }

  window.addEventListener("resize", updateImageSource);
  updateImageSource();
});
