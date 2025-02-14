let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

document.querySelectorAll('.project .box').forEach(box => {
    box.addEventListener('click', function() {
        // Toggle the active class to show/hide the icons on click
        this.classList.toggle('active');
    });
});
