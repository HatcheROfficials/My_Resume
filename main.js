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

// Make selection from Nav Menu
function navMenuItemSelect(event){
    var navMenuList = document.querySelectorAll(".topNav li");

    for(var i=0; i<navMenuList.length; i++){
        if(navMenuList[i].classList.contains("active")){ 
            var currentActive = navMenuList[i];
        }
    }
    
    currentActive.classList.remove("active");
    event.target.classList.add("active");

    displayActiveArticle(event.target.getAttribute("data-id"));
}

var navMenuItem = document.querySelectorAll(".topNav li:not(.hamburger)");
navMenuItem.forEach((navItem)=>{
    navItem.addEventListener("click",navMenuItemSelect);
});

// Display active content in the content area
function displayActiveArticle(activeDataId){
    var articles = document.querySelectorAll("#content>article");

    for(var i=0; i<articles.length; i++){
        if(articles[i].getAttribute("data-id") == activeDataId){
            articles[i].style.display = "";
            articles[i].style.width = "100%";
            articles[i].style.height = "100%";
        } else{
            articles[i].style.display = "none";
        }
    }
}

// Display a default content onload
window.addEventListener("load",displayActiveArticle(3));

