/*------------------------------*/
/*--------INITIALIZATION--------*/
/*------------------------------*/

const backToTop = document.getElementById("backToTop");
const menu = document.getElementById("menu");
const headerContainer = document.getElementById("headerContainer");
const mainNav = document.getElementById("mainNav");
const ulMainNav = document.getElementById("ulMainNav");
const hamburguer = document.getElementById("hamburguer");
const logoContainer = document.getElementById("logoContainer");

const liMainNav = document.getElementsByClassName("navSide");
const filmImage = document.querySelectorAll(".filmImage");
const maxWidthNav = window.matchMedia("(max-width: 768px)");

const liMainNavArray = Array.from(liMainNav);

ToTheTop();

/*------------------------------*/
/*------------EVENTS------------*/
/*------------------------------*/

/* When the scroll bar of an element is moved, it calls the ToTheTop function*/
window.addEventListener('scroll', ToTheTop);

/* When the element is clicked, it brings the scroll bar to the top of the page */
backToTop.addEventListener('click', () =>{
  window.scrollTo(0,0);
}); 

/* Create two events, one when hovering over an element and the other when leaving it, for each element in an array*/
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

/* Create a click event for an element, adding or removing classes on the menu icon*/ 
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

/*------------------------------*/
/*----------FUNCTIONS-----------*/
/*------------------------------*/

/* Function that shows or hides the "go to top" icon at the top of the page*/
function ToTheTop() {
  if (window.pageYOffset == 0) {
    backToTop.style.display = "none";
  } else {
    backToTop.style.display = "flex";
  }
}







