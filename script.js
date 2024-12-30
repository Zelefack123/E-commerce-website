document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".fa-bars");
  const cross = document.querySelector(".fa-xmark");
  const navLinks = document.querySelector(".navlinks");

  hamburger.onclick = () => {
    navLinks.classList.add("active");
  };

  cross.onclick = () => {
    console.log("Cross clicked");
  navLinks.classList.remove("active");
  };
});
