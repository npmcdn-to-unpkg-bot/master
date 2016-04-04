'use strict';

// On document ready:
$(function () {
	//Hamburger Menu slideToggle
	var currentWidth = $(window).width();
	if (currentWidth <= 940) {
		$('#hamburger').on('click', function () {
			$('ul.mainMenu').slideToggle('slow');
		});
		//close menu when link is clicked
		$('ul.mainMenu li a').on('click', function () {
			$('ul.mainMenu').slideToggle('slow');
		});
	}
	//End of hamburger menu

	//Instantiate Flickity Gallery for Blog Posts
	var currentWidth = $(window).width();
	if (currentWidth <= 600) {
		$("ul.featuredBlogs").flickity({
			imagesLoaded: true,
			wrapAround: true,
			freeScroll: true,
			contain: true,
			prevNextButtons: true
		});

		//SlideToggle form in contact section when window width is 600
		$("#contact").hide();
		$('.contactForm h2').on('click', function () {
			$('#contact').slideToggle();
			$(this).toggleClass('open');
		});
	};
	//End of Flickity Gallery	

	//Instantiate MixItUp:
	var $filterSelect = $('#filterSelect'),
	    $container = $('#container');

	$container.mixItUp();

	$filterSelect.on('change', function () {
		$container.mixItUp('filter', this.value);
	});
	//End of MixItUp

	//Instatiate "smoothScrolling" effect
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	//End of "smoothScrolling"
});