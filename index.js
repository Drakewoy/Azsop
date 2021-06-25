//Title starts here.
//The toggle-button
// document.querySelector(".humberger-menu").addEventListener("click", function(){
//     document.querySelector(".toggleMenuContainer").classList.toggle("active");
// });
$(".humberger-menu").click(function(){$(".toggleMenuContainer").slideToggle();});
//Title ends here
//The electronic Items part start here
//otg0
var randomNumber1 = Math.floor(Math.random()*3)+1;
var otgRandom = "image/otg" + randomNumber1 + ".jpeg";
document.querySelectorAll(".electronic-items img")[0].setAttribute("src", otgRandom);

//nickon0
var randomNumber2 = Math.floor(Math.random()*2)+1;
var nickonRandom = "image/nickon" + randomNumber2 + ".jpeg";
document.querySelectorAll(".electronic-items img")[1].setAttribute("src", nickonRandom);

//phone0
var phoneRandom ="image/a" + randomNumber2 + ".jpeg" ;
document.querySelectorAll(".electronic-items img")[2].setAttribute("src", phoneRandom);

//laptop0
var laptopRandom ="image/mac" + randomNumber2 + ".jpeg";
document.querySelectorAll(".electronic-items img")[3].setAttribute("src", laptopRandom);

//The second electronic part

//otg1
var randomNumber1 = Math.floor(Math.random()*3)+1;
var otgRandom = "image/otg" + randomNumber1 + ".jpeg";
document.querySelectorAll(".electronic-items img")[4].setAttribute("src", otgRandom);

//nickon1
var randomNumber2 = Math.floor(Math.random()*2)+1;
var nickonRandom = "image/nickon" + randomNumber2 + ".jpeg";
document.querySelectorAll(".electronic-items img")[5].setAttribute("src", nickonRandom);

//phone1
var phoneRandom ="image/a" + randomNumber2 + ".jpeg" ;
document.querySelectorAll(".electronic-items img")[6].setAttribute("src", phoneRandom);

//laptop1
var laptopRandom ="image/mac" + randomNumber2 + ".jpeg";
document.querySelectorAll(".electronic-items img")[7].setAttribute("src", laptopRandom);

// The electronic items ends here.

// The carousel part
let slidePosition = 0;
const slides = document.querySelectorAll(".carousel__item");
const totalSlides = slides.length;

document.querySelector("#carousel-button-next").addEventListener("click", function(){
moveToNextSlide();
});

document.querySelector("#carousel-button-prev").addEventListener("click", function(){
moveToPrevSlide();
});
function updateSlide(){
    for (let slide of slides){
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add("carousel__item--visible");
}
function moveToNextSlide(){
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    updateSlide();

}

function moveToPrevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    }else{
        slidePosition--;
    }

    updateSlide();
}
setInterval(moveToNextSlide, 6000);


// The media querySelector
// var d;
// function screenResolution(x){
//   if(x.matches){
// // d =  document.getElementsByClassName("electronic-items").classList.add("col-md-6");
//
//   }
// }
// var x = window.matchMedia("(max-width:769px)")
// screenResolution(x)
// x.addListener(screenResolution)

// The price and the description
var price = document.getElementById('price');
price.innerHTML = "12$";
function priceAndDecription(price, description, area, seller){
    this.price = price;
    this.description = description;
    this.area = area;
    this.seller = seller;
  }
