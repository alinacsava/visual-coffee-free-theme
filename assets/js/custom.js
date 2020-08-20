//! Version: 1.0

jQuery(document).ready(function ($) {
	NProgress.start();

	// Mobile main nav toggle
	$("#nav-toggle").on('click', function (e) {
		$(this).toggleClass("active");
		e.preventDefault();
		return false;
	});
});

jQuery(window).on('load', function () {
	NProgress.done();

	// Main nav
	jQuery('.nav-slide-button').on('click', function () {
		jQuery('.pull').fadeToggle();
	});
	jQuery('.top-nav ul > li > a').on('click', function () {
		jQuery('.pull').fadeToggle();
		jQuery("#nav-toggle").toggleClass("active");
	});
});