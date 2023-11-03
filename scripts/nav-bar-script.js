document.addEventListener("DOMContentLoaded", () => {
  const mobMenu = document.querySelector(".nav-container .nav-mob");
  const mobNav = document.querySelector(".nav-container .mob-nav");
  const hMenu = document.querySelectorAll(".nav-mob svg circle");

  mobMenu.addEventListener("click", () => {
    mobMenu.classList.toggle("active");
    mobNav.classList.toggle("open");
    setTimeout(() => {
      hMenu.forEach((element) => {
        element.classList.toggle("change");
      });
    }, 600);
    mobNav.style.display = mobNav.style.display === "none" ? "none" : "flex";
  });
});
