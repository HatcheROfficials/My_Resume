function navMenuHideShow(){
    var navMenu = document.querySelector(".topNav");
    if(navMenu.className == "topNav"){
        navMenu.className += " responsiveNavMenu";
    } else{
        navMenu.className = "topNav";
    }
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",navMenuHideShow);