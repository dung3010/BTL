window.onload = function () {


//==============NAVBAR=======================
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




//===================== Show and hide content ==========================
let loaiHocBong = document.querySelectorAll(".hocbong .noidung h2");
let contents = document.querySelectorAll(".hocbong .noidung div h3");
for (let i = 0; i < loaiHocBong.length; i++){
  let hocBong = loaiHocBong[i];
  let content = contents[i];
  hocBong.addEventListener('click',function(){
    hocBong.classList.toggle("showContent");
    content.parentElement.classList.toggle("showContent");
  })
}
    
    
    
    
    
    //==================Button to top=========================
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