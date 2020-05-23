$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(736);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 736 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready