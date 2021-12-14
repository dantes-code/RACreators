var slideIndex=0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("imageSlider");
    var dots = document.getElementsByClassName("dot");

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.
                            replace(" active", "");
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    // Change image every 2 seconds
    setTimeout(showSlides, 2000);
}


//For the products
var coldfever = document.getElementsByClassName("oneRow");
var dryeyes = document.getElementsByClassName("twoRow");
var Nutrition = document.getElementsByClassName("threeRow");
var Skincare = document.getElementsByClassName("fourRow");
var Vitamins = document.getElementsByClassName("fiveRow");

function coldFever(){
    coldfever[0].style.display = "block";
    dryeyes[0].style.display = "none";
    Nutrition[0].style.display = "none";
    Skincare[0].style.display = "none";
    Vitamins[0].style.display = "none";
}

function dryEyes(){
    coldfever[0].style.display = "none";
    dryeyes[0].style.display = "block";
    Nutrition[0].style.display = "none";
    Skincare[0].style.display = "none";
    Vitamins[0].style.display = "none";
}

function nutrition(){
    coldfever[0].style.display = "none";
    dryeyes[0].style.display = "none";
    Nutrition[0].style.display = "block";
    Skincare[0].style.display = "none";
    Vitamins[0].style.display = "none";
}

function skinCare(){
    coldfever[0].style.display = "none";
    dryeyes[0].style.display = "none";
    Nutrition[0].style.display = "none";
    Skincare[0].style.display = "block";
    Vitamins[0].style.display = "none";
}

function vitamins(){
    coldfever[0].style.display = "none";
    dryeyes[0].style.display = "none";
    Nutrition[0].style.display = "none";
    Skincare[0].style.display = "none";
    Vitamins[0].style.display = "block";
}