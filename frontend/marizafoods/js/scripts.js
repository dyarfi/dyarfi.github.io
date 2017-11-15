
$(window).resize(function() {
	screenResponse();	
	function screenResponse () {
		var screen = $(window).width();		
		/** screen < 785px **/
		if(screen < 785) {
			$('.dropdown-menu.mega-menu').css('left','-' + (screen / 5 + 10) + 'px').css('width','310%').find('ul').css('width','140px');
			$('.navbar-collapse').removeClass('in');
		} else {
			$('.dropdown-menu.mega-menu').css('left','0px').css('width','460px').find('ul').css('width','140px');			
			$('.navbar-collapse').removeClass('in');
		}
		/** screen reach 800px **/
		if(screen <= 800) {
		} else {
			
		}		
	}	
});

$(window).scroll(function() {		
	menuFixTop();
	function menuFixTop () {
		var screen = $(window).scrollTop();
		if(screen >= $('.header').height()) {
			$('.navigation').addClass('navbar-fixed-top');
		} else {
			$('.navigation').removeClass('navbar-fixed-top');
		}
	}
	/* this is supposed to be detecting dropdown menu to uncollapse 
	if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	*/
});

$(document).ready(function() {
	$(".dropdown").hover(
		function() { $('.dropdown-menu', this).fadeIn("fast");
		},
		function() { $('.dropdown-menu', this).stop().fadeOut("fast");
	});
	
	$('.carousel-top').carousel({
		interval: 9000
	});
	
	$('.carousel-mid').carousel({
		interval: 5000
	});
				
	$('.carousel-bot').carousel({
		interval: 9000
	});
	
	$('.carousel-top').on('slide.bs.carousel', function () {
		//$(this).find('.carousel-caption').css({'bottom':'90px'});
		$(this).fadeOut(250).fadeIn(250);
	});
	$('.carousel-top').hover(function(){
		$(this).find('.carousel-caption').slideDown(450);
		$(this).find('.carousel-indicators').animate({opacity:1});		
	},function(){
		$(this).find('.carousel-caption').slideUp(450);
		$(this).find('.carousel-indicators').animate({opacity:0});		
	});
	$('.product-item h4, .product-item h5').hide();	
	$('.mid-slider').hover(function() {
		//$(this).animate({borderWidth:2},100);
		//$(this).find('.product-item h4, .product-item h5').slideDown(350);
		$(this).find('.product-item h4, .product-item h5').fadeIn(500);
	},function(){
		//$(this).animate({borderWidth:0},100);		
		//$(this).stop().find('.product-item h4, .product-item h5').slideUp(250);
		$(this).stop().find('.product-item h4, .product-item h5').fadeOut(500);
	});
	
	$(".colorbox").colorbox({'initialWidth':0,'initialHeight':0});
	
	$('.btn-apply').click(function(){
		var subject = $(this).parents().parents().find('.subject').text();
		$('.form-handler').find('input[name="subject"]').val('').fadeOut('1000').fadeIn('1000').val(subject);
		click_scroll = true;
        $(window).scrollTo('#form-career', 1000, function(){
          click_scroll = false;
        });
        return false;      
	  
	});
});
