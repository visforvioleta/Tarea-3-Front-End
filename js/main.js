//Esta es una hoja de javascript
//Para hacer un menu hamburguesa

//const burguer = document.getElementById('burguer');
//const menu = document.getElementById('menu');

//burguer.addEventListener('click',()=>{
//    menu.classList.toggle('show');
//});

function toggleMenu() {
  document
    .querySelector(".header__menu")
    .classList.toggle("header__menu--active");
}