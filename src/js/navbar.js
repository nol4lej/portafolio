const menu_container = document.getElementById("menu_container")
const body = document.getElementById("body");

function buttonAction() {
    if (menu_container.style.display === "block") {
        menu_container.style.display = "none";
        body.style.overflow = "";
    } else {
        menu_container.style.display = "block";
        body.style.overflow = "hidden";
    }
  }

function handleResize(){
    if (window.innerWidth < 768 && body.style.overflow === "hidden"){
        menu_container.style.display = "none";
        body.style.overflow = "";
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
