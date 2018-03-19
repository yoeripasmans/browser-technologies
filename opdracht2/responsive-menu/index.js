var menuOpen = document.querySelector('.menu-toggle');
var menuClose = document.querySelector('.menu-close');
var overlay = document.querySelector('.overlay');
var menu = document.querySelector('#main-menu');
var body = document.querySelector('body');

menuOpen.addEventListener('click', function(e){
	e.preventDefault();
	menu.classList.add('open');
	body.classList.add('noscroll');
});

menuClose.addEventListener('click', function(e){
	e.preventDefault();
	menu.classList.remove('open');
	body.classList.remove('noscroll');
});

overlay.addEventListener('click', function(e){
	e.preventDefault();
	menu.classList.remove('open');
	body.classList.remove('noscroll');
});
