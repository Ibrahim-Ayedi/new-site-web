let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItmes.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');

document.querySelector('search btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('acitve');
    cartItmes.classList.remove('active');
}

let cartItmes = document.querySelector('.cart-items-container');

document.querySelector('cart-btn').onclick = () =>{
    cartItmes.classList.toggle('active');
    navbar.classList.remove('acitve');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('acitve');
    searchForm.classList.remove('active');
    cartItmes.classList.remove('active');
}