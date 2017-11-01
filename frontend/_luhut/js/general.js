
// jQuery custom function
function window_check () {
	var window_width =  $(window).width();
	if(window_width < '990') {
		jQuery(".title-web").hide();
	} else {
		jQuery(".title-web").show();
	}
}
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	//console.log($(this).scrollTop());
	var offset_navbar = $(this).scrollTop();
	if (offset_navbar > 30) {
		$(".title-web").find('img').attr({'src':'img/title-web-img2.png'})
		.removeClass('animated flipInX')
		.addClass('animated flipInY');	
	} else if (offset_navbar < 1) {
		$(".title-web").find('img').attr({'src':'img/title-web-img.png'})
		.removeClass('animated flipInY')
		.addClass('animated flipInX');	
	}
});


// jQuery document ready
$(document).ready(function() {
	$('.navbar-collapse').on('shown.bs.collapse', function() { 
		//$(".title-web img").hide();
 	});
	$('.navbar-collapse').on('hidden.bs.collapse', function() { 
		//$(".title-web img").show();
	});
	$('.row').addClass("animated").viewportChecker({
	    classToAdd: 'fadeIn', // Class to add to the elements when they are visible
	    offset: 0,
	    repeat: true    
   	});   
});
// jQuery window resize events
$( window ).resize( function() { window_check(); });	
// jQuery load window
jQuery(window).load(function() { window_check(); });
