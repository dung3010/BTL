window.onload = function () {
//===============Swiper news===================
    let listNews = document.querySelector('#news .slider .list');
    let itemsNews = document.querySelectorAll('#news .slider .list .item');
    let dots = document.querySelectorAll('#news .slider .dots li');
    let prevNews = document.getElementById('prevNews');
    let nextNews = document.getElementById('nextNews');

let activeNews = 0;


// Cập nhật kích thước của danh sách dựa trên số lượng phần tử
let itemWidthNews = itemsNews[0].offsetWidth;
let itemMarginNews = parseInt(getComputedStyle(itemsNews[0]).marginRight);
let listWidthNews = (itemWidthNews + itemMarginNews) * itemsNews.length;
listNews.style.width = `${listWidthNews}px`;



// Thêm dot vào pagination

let heightPrev = prevNews.offsetHeight;
prevNews.style.height = `${heightPrev}px`;

let flag1 = true;
let flag2 = true;

function checkScreenSizeAndAddDot1() {
  if (window.innerWidth < 1024 && flag1 == true) {
          addNewDot();
          flag1 =false;
  }
}

function checkScreenSizeAndAddDot2() {
  if (window.innerWidth < 768 && flag2 == true) {
          addNewDot();
          flag2 =false;
  }
}

function checkScreenSizeAndRemoveDot1() {
  if (window.innerWidth > 1024 && flag1 == false) {
          removeDot();
          flag1 =true;
  }
}

function checkScreenSizeAndRemoveDot2() {
  if (window.innerWidth > 768 && flag2 == false) {
          removeDot();
          flag2 =true;
  }
}


function removeDot() {
  let lastDot = document.querySelector(".dots li:last-child");
  lastDot.remove();
  dots = document.querySelectorAll('.slider .dots li'); // update lại dots
  updateNavigation();
  if (activeNews >= dots.length) {
    activeNews = dots.length - 1;
  }
  reloadSliderNews();
}


// Hàm thêm dot
function addNewDot() {

  let newDot = '<li></li>';
    let addDot = document.querySelector(".dots li:last-child");
    // thêm sau đóng của addDot
    addDot.insertAdjacentHTML("afterend",newDot);
    // lấy lại giá trị mới
    addDot = document.querySelector(".dots li:last-child");
    addDot.addEventListener('click', function() {
        activeNews = dots.length-1; //active dot mới thêm
      reloadSliderNews();
      updateNavigation();
  });


  dots = document.querySelectorAll('.slider .dots li'); // update lại dots
  updateNavigation();
}

// lắng nghe sự kiện resize
window.addEventListener('resize', checkScreenSizeAndAddDot1);
window.addEventListener('resize', checkScreenSizeAndAddDot2);
window.addEventListener('resize', checkScreenSizeAndRemoveDot1);
window.addEventListener('resize', checkScreenSizeAndRemoveDot2);
// Gọi hàm 
checkScreenSizeAndAddDot1();
checkScreenSizeAndAddDot2();
checkScreenSizeAndRemoveDot1();
checkScreenSizeAndRemoveDot2();



// Sự kiện nhấn nút next
nextNews.onclick = function() {
    if (activeNews + 1 > dots.length - 1 ) {
       return;
    }
    else{
        activeNews += 1;
        reloadSliderNews();
        updateNavigation();
    }
}

// Sự kiện nhấn nút prev
prevNews.onclick = function() {
    if (activeNews -1 < 0) {
        return;

    }
    else{
        activeNews -= 1;
        reloadSliderNews();
        updateNavigation();
    }
    
}


function reloadSliderNews() {
    // Cập nhật vị trí của slider
    let newLeftNews = -activeNews * (itemWidthNews + itemMarginNews);
    listNews.style.transform = `translateX(${newLeftNews}px)`;

    let lastActiveDot = document.querySelector('#news .slider .dots li.activeNews');
    if (lastActiveDot) {
      lastActiveDot.classList.remove('activeNews');
  }
  dots[activeNews].classList.add('activeNews');
}

function updateNavigation() {
    if (activeNews < dots.length -1){
        nextNews.classList.remove('disabled');
        nextNews.disable = false;
    }
    else{
        nextNews.classList.add('disabled');
        nextNews.disable = true;
    }

    if (activeNews <= 0){
        prevNews.classList.add('disabled');
        prevNews.disable = true;
    }
    else{
        prevNews.classList.remove('disabled');
        prevNews.disable = false;
    }
}
updateNavigation();

// sự kiện nhấn vào dot chuyển slide
for (let key = 0; key < dots.length; key++){
  let li = dots[key];
  li.addEventListener('click',function(){
      activeNews = key;
      reloadSliderNews();
      updateNavigation();
  })
}




   //=====================Swiper research=========================
    
   const itemsResearch = document.querySelectorAll('.research-right .list .item');
   const prevResearch = document.getElementById('prevResearch');
   const nextResearch = document.getElementById('nextResearch');
   let currentIndex = 0;

   let current = 1;
   const totalItems = itemsResearch.length;


  // hàm update lại size của khung
   function updateListSize() {
    if (current > totalItems) {
        current = 1;
    } else if (current < 1) {
        current = totalItems;
    }
    // Lấy chiều cao của item hiện tại dựa trên giá trị của biến current
    const currentItem = document.querySelector(`.research-right .list .item:nth-child(${current})`);
    const itemHeight = currentItem.offsetHeight;
    // Cập nhật chiều cao của .list theo chiều cao của item hiện tại
    const list = document.querySelector('.research-right .list');
    list.style.transition = 'height 0.5s';
    list.style.height = itemHeight + 'px';
}

// Gọi hàm
updateListSize();

// Gọi lại hàm mỗi khi cửa sổ thay đổi kích thước
window.addEventListener('resize', updateListSize);



   // Đổi item active
   function updateActiveItem() {
       itemsResearch.forEach(item => item.classList.remove('activeResearch'));
       itemsResearch[currentIndex].classList.add('activeResearch');
   }

   //show item
   function showNextItem() {
       currentIndex = (currentIndex + 1) % itemsResearch.length;
       current++;
       updateActiveItem();
       updateListSize();
   }

   function showPrevItem() {
       currentIndex = (currentIndex - 1 + itemsResearch.length) % itemsResearch.length;
       current--;
       updateActiveItem();
       updateListSize();
   }

   // gọi hàm
   prevResearch.addEventListener('click', showPrevItem);
   nextResearch.addEventListener('click', showNextItem);

   // Khởi tạo item đầu tiên
   updateActiveItem();

 
   

   // Thêm sự kiện vào navigation để cập nhật kích thước
   prevResearch.addEventListener('click', updateListSize);
   nextResearch.addEventListener('click', updateListSize);

   // refresh item 
   let interval = setInterval(showNextItem, 5000);

   // khi đưa chuột vào .slider thì refresh dừng
   const slider = document.querySelector('.research-right .slider');
   slider.addEventListener('mouseover', function() {
       clearInterval(interval);
   });
   slider.addEventListener('mouseleave', function() {
       interval = setInterval(showNextItem, 5000);
   });



//==============TÀI TRỢ================

   let itemsSponsor = document.querySelectorAll('.sponsor .slider .list .item');
   let totalDurationSponsor = itemsSponsor.length * 2; // Tổng thời gian chạy animation cho một vòng lặp
 
   for (let i = 0; i < itemsSponsor.length; i++) {
       let delay = (totalDurationSponsor / itemsSponsor.length) * i; // Tính toán delay dựa trên vị trí
       itemsSponsor[i].style.animationDelay = `${delay}s`; // Đặt delay cho mỗi item
     }






//=========Button to top=========================
let mybutton = document.getElementById("myBtn");

// Khi kéo xuống 100px nutton hiện ra
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ấn vào thì quay về đầu
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
};
mybutton.addEventListener('click', topFunction);

}
  
  
  
  
  
  function scrollToElement(elementSelector, instance = 0) {
    /*chọn tất cả phần tử khớp với các selector đã cho*/
    const element = document.querySelectorAll(elementSelector);
  
    if (element.length > instance) {
      element[instance].scrollIntoView({ behavior: "smooth" });
    }
}
  
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");
  const link4 = document.getElementById("link4");
  const link5 = document.getElementById("link5");
  
  link1.addEventListener("click", () => {
    //chuongtrinh
    scrollToElement(".header");
  });
  
  link2.addEventListener("click", () => {
    //gioithieu
    scrollToElement(".header", 1); /*Trượt tới header thứ 2*/
  });
  
  link3.addEventListener("click", () => {
    //nghiencuu
    scrollToElement("#news");
  });
  
  link4.addEventListener("click", () => {
    //lienhe
    scrollToElement(".header", 3);
  });
  
  link5.addEventListener("click", () => {
    //tintuc
    scrollToElement(".lienhe");
  });
  
