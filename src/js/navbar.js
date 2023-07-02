const toggleBtn = document.getElementById('toggleBtn');
const menuContainer = document.getElementById('nav__menu');

toggleBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('active');
  if(menuContainer.classList.contains("active")){
    toggleBtn.textContent = "close"
  } else {
    toggleBtn.textContent = "menu"  
  }
  
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 640 || window.innerWidth <= 640){
        menuContainer.classList.remove('active')
        toggleBtn.textContent = "menu" 
    }
});


