//! Version: 1.4

jQuery(document).ready(function ($) {
	NProgress.start();
});

jQuery(window).on('load', function () {
	NProgress.done();

	// Main nav
	jQuery('.nav-slide-button').on('click', function () {
		jQuery('.pull').fadeToggle();
	});
	jQuery('.top-nav ul > li > a').on('click', function () {
		jQuery('.pull').fadeToggle();
	});
});
