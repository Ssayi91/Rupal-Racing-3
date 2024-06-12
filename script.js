let search   = document.querySelector('.searchbox');

document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
}
document.getElementById('menu-icon').onclick = function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}