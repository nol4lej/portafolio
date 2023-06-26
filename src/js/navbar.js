const menu_container = document.getElementById("menu-container");
const body = document.getElementById("body");
const nav_btn = document.getElementById("nav-btn");
const nav_icon = document.getElementById("nav-icon");

nav_btn.onclick = buttonAction;

function buttonAction() {
    if (menu_container.style.display === "block") {
        menu_container.style.display = "none";
        body.style.overflow = "";
        nav_icon.innerText = "menu";
    } else {
        menu_container.style.display = "block";
        body.style.overflow = "hidden";
        nav_icon.innerText = "close";
    }
  }

function handleResize(){
    if (window.innerWidth < 768 && body.style.overflow === "hidden"){
        menu_container.style.display = "none";
        body.style.overflow = "";
        nav_icon.innerText = "menu";
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


