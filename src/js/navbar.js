// const navbarCollapsible = document.getElementById('nav');
const btn_rpsv = document.getElementById("btn-rpsv");
const menu_rpsv = document.getElementById("menu-rpsv")

window.addEventListener("scroll", function(){
    if (!navbarCollapsible) {
        return;
    } if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }
})

window.addEventListener("load", function(){
    if(window.pageYOffset > 1){
        navbarCollapsible.classList.add('navbar-shrink')
    }
})

const visibility = () =>{
    if(menu_rpsv.classList.contains("hidden")){
        menu_rpsv.classList.replace("hidden", "block");
    } else {
        menu_rpsv.classList.replace("block", "hidden");
    }
}
