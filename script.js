document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".fa-bars");
  const cross = document.querySelector(".fa-xmark");
  const navLinks = document.querySelector(".navlinks");
  const mainImage = document.querySelector("#mainImage");
  const smallImages = document.querySelectorAll(".small-img-col");


  hamburger.onclick = () => {
    alert("hamburger has been clicked");
    console.log("hamburger h");
    navLinks.classList.add("active");
  };

  cross.onclick = () => {
    console.log("Cross clicked");
  navLinks.classList.remove("active");
  };

  

smallImages.forEach(element => {
  let Image =  element.querySelector("img");
  console.log(Image.src);
  element.addEventListener("click",()=>{
  if(Image) {
   mainImage.src = Image.src;
  }
  else{
    console.log("there is no img tag");
  }
   }
  )
    
  });


});

