window.onload = function () {



let navMenuLinks = document.getElementById("navMenuLinks");
let menuIcon = document.querySelector('.menu-icon');
    navMenuLinks.style.maxHeight = "0px";

function toggleMenu() {
    if (navMenuLinks.style.maxHeight == "0px"){
    navMenuLinks.style.maxHeight = "500px";
    } else {
    navMenuLinks.style.maxHeight = "0px";
    }
}

menuIcon.addEventListener('click', toggleMenu);





//=========Button to top=========================
let mybutton = document.getElementById("myBtn");


// Khi kéo xuống 100px button hiện ra
window.addEventListener("scroll", function (){
  if(window.scrollY > 100){
    mybutton.classList.add("show");
  }else{
    mybutton.classList.remove("show");
  }
})











}