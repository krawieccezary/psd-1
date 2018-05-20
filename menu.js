var menuButton = document.getElementById('burger_nav');
var menuDiv = document.querySelector('#burger_nav div');

var menuAfter = window.getComputedStyle(
	document.querySelector('#burger_nav'), ':after'
);



menuButton.addEventListener('click', openMenu);

function openMenu(){
    var menu = document.querySelector('header nav ul');
    menu.classList.toggle('open');
    
    menuButton.classList.toggle('active');
};