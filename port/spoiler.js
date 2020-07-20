$(document).ready(function() {
	$('.price__basic-title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});