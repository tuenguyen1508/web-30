$(document).ready(function() {
	$('.menu li').hover(function() {
		$(this).find('ul:first').slideDown(1000);
	}, function() {
		$(this).find('ul:first').hide(1000);
	});
});