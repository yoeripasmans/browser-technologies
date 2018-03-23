(function() {
	if (!document.querySelector || !('classList' in document.body)) {
		return false;
	}

	var menuOpen = document.querySelector('.menu-toggle');
	var menuClose = document.querySelector('.menu-close');
	var overlay = document.querySelector('.overlay');
	var menu = document.querySelector('#main-menu');
	var body = document.querySelector('body');

	menuOpen.addEventListener('click', function(e) {
		menu.classList.add('open');
		body.classList.add('noscroll');
		e.preventDefault();
	});

	menuClose.addEventListener('click', function(e) {
		menu.classList.remove('open');
		body.classList.remove('noscroll');
		e.preventDefault();
	});

	overlay.addEventListener('click', function(e) {
		menu.classList.remove('open');
		body.classList.remove('noscroll');
		e.preventDefault();
	});

})();
