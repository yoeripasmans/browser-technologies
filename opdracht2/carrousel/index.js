(function() {
	if (!document.querySelector || !('classList' in document.body)) {
		return false;
	}

	var carousel = document.querySelector('.carousel');
	var carouselContent = document.querySelector('.content');
	var nextButton = carousel.querySelector('.next-button');
	var prevButton = carousel.querySelector('.prev-button');

	var slides = carousel.querySelectorAll('.content li');

	var slidesLength = slides.length;
	var currentSlideID = 0;
	var current = slides[0];

	var viewWidth = carousel.offsetWidth;
	var carouselWidth = slidesLength * viewWidth;

	function initCarousel() {
		carousel.classList.add('active');
		carouselContent.style.width = (slidesLength * 100) + '%';
		carouselContent.style.transform = 'translateX(-' + animatePos() + 'px)';
		sliderNavIcons();
		// startCarouselInterval();
	}

	function animateNext() {
		if (currentSlideID >= (slidesLength - 1)) {
			currentSlideID = 0;
		} else {
			currentSlideID++;
		}
		carouselContent.style.transform = 'translateX(-' + animatePos() + 'px)';
		sliderNavIcons();
	}

	function animatePrev() {
		if (currentSlideID > 0) {
			currentSlideID--;
		}
		carouselContent.style.transform = 'translateX(-' + animatePos() + 'px)';
		sliderNavIcons();
	}

	function sliderNavIcons() {
		if (currentSlideID === 0) {
			prevButton.style.display = 'none';
		} else {
			prevButton.style.display = 'inline';
		}

		if (currentSlideID >= (slidesLength - 1)) {
			nextButton.style.display = 'none';

		} else {
			nextButton.style.display = 'inline';
		}

	}

	function animatePos() {
		return viewWidth * currentSlideID;
	}
	//
	// function startCarouselInterval() {
	// 	myVar = setInterval(animateNext, 6000);
	// }

	// add event handlers to buttons
	nextButton.addEventListener('click', animateNext);
	prevButton.addEventListener('click', animatePrev);

	// show the first element
	// (when direction is 0 counter doesn't change)
	initCarousel();
})();
