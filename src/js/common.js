$(document).ready(function(){
	console.log('hello');

	$('.main__slider-wrapper').slick({
	  dots: true,
	  infinite: true,
	  prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
		dotsClass: "slider-dots"
	});

	$('#btn-call').on('click', function(e) {
		e.preventDefault();
		$('.main-modal').removeClass('main-modal--close');
	});

	$('.close').on('click', function(e) {
		e.preventDefault();
		$('.main-modal').addClass('main-modal--close');
	});

	$(window).on('keydown', function(e) {
		if(e.keyCode === 27) {
			$('.main-modal').addClass('main-modal--close');
		}
	});

	$('.header__burger-menu').on('click', function(e) {
		e.preventDefault();
		$('.header-mobile').removeClass('header-mobile--close');
	});

	$('.burger-menu--active').on('click', function(e) {
		e.preventDefault();
		$('.header-mobile').addClass('header-mobile--close');
	});

});