const menu_container = document.getElementById("menu-container")
const body = document.getElementById("body");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const nav_btn = document.getElementById("nav-btn")

nav_btn.onclick = buttonAction;

function buttonAction() {
    if (menu_container.style.display === "block") {
        menu_container.style.display = "none";
        body.style.overflow = "";
        cross.style.display = "none";
        hamburger.style.display = "block";
    } else {
        menu_container.style.display = "block";
        body.style.overflow = "hidden";
        cross.style.display = "block";
        hamburger.style.display = "none";
    }
  }

function handleResize(){
    if (window.innerWidth < 768 && body.style.overflow === "hidden"){
        menu_container.style.display = "none";
        body.style.overflow = "";
        cross.style.display = "none";
        hamburger.style.display = "block";
    }
}
window.addEventListener('resize', handleResize);

function navResize(){
    if (window.innerWidth > 640){
        menu_container.style.display = "flex";
    } else {
        menu_container.style.display = "none";
    }
}
window.addEventListener('resize', navResize);


