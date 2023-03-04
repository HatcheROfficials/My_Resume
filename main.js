// Implement Dropdown Menu CSS - START
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
// Implement Dropdown Menu CSS - END

function navMenuItemSelect(event){
    var navMenuContainer = document.querySelector(".topNav");
    var navMenuList = document.querySelectorAll(".topNav li");

    for(var i=0; i<navMenuList.length; i++){
        if(navMenuList[i].classList.contains("active")){
            var currentActive = navMenuList[i];
        }
    }
    
    currentActive.classList.remove("active");
    event.target.classList.add("active");

    // console.log(currentActive);
    // console.log(event.target);
    // navMenuContainer.insertBefore(event.target,currentActive);
}

var navMenuItem = document.querySelectorAll(".topNav li:not(.hamburger)");
navMenuItem.forEach((navItem)=>{
    navItem.addEventListener("click",navMenuItemSelect);
});