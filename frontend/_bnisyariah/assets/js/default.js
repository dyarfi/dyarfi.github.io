//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    //if ($(".navbar").offset().top > 50) {
        //$(".navbar-fixed-top").addClass("top-nav-collapse");
    //} else {
        //$(".navbar-fixed-top").removeClass("top-nav-collapse");
    //}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('.iframe-holder').perfectScrollbar();
	$('html').queryLoader2({
		//barColor: "#fff",
		barColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        percentage: false,
        barHeight: 0,
        completeAnimation: "grow",
		onComplete: function () {
			//$('#intro').show()
			//.find('.welcome, .continue')
			//.animate({color:'#c4a38f',duration: 180, easing:'easeOutQuint'});			
			//$('.office').animate({letterSpacing:-1,color:'#c4a38f',duration: 180, easing:'easeOutQuint'});	
		}
    });
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});