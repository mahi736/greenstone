document.addEventListener('scroll', function(){
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('style-nav', window.scrollY > 930);
});
function response(){
    var menu = document.querySelector('.menu-r');
    menu.classList.toggle('resp')
}