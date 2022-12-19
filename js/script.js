const backToTop = document.getElementById("backToTop");

const filmImage = document.querySelectorAll(".filmImage");
const menu = document.getElementById("menu");
const maxWidthNav = window.matchMedia("(max-width: 768px)");
const headerContainer = document.getElementById("headerContainer");
const logoContainer = document.getElementById("logoContainer");
const mainNav = document.getElementById("mainNav");
const ulMainNav = document.getElementById("ulMainNav");
const liMainNav = document.getElementsByClassName("navSide");
const hamburguer = document.getElementById("hamburguer");
const liMainNavArray = Array.from(liMainNav);

ToTheTop();

/*------------EVENTS------------*/

window.addEventListener('scroll', ToTheTop);
backToTop.addEventListener('click', () =>{
  window.scrollTo(0,0);
}); 


for(let element of filmImage){
  element.addEventListener("mouseenter", () =>{
    element.children[0].children[1].classList.add("filmCardOn");
    element.children[0].classList.add("filmCardOver");
    
  });
  
  element.addEventListener("mouseleave", () =>{
    element.children[0].children[1].classList.remove("filmCardOn");
    element.children[0].classList.remove("filmCardOver");
  });
}

menu.addEventListener("click",() =>{
  if(!hamburguer.classList.contains("openNav")){
    hamburguer.classList.add("openNav");
    hamburguer.classList.remove("closeNav");

  }else{
    hamburguer.classList.remove("openNav"); 
    hamburguer.classList.add("closeNav"); 
  }
  
  menu.classList.toggle("displayMenu");
  mainNav.classList.toggle("displayNav");
  logoContainer.classList.toggle("displayLogo");
  headerContainer.classList.toggle("displayHeaderContainer");
  ulMainNav.classList.toggle("ulMainNav");

  liMainNavArray.map((e) => {
    e.classList.toggle("displayLiMainNav");
  });


});

/*------------FUNCTIONS------------*/


function ToTheTop() {
  if (window.pageYOffset == 0) {
    backToTop.style.display = "none";
  } else {
    backToTop.style.display = "flex";
  }
}







