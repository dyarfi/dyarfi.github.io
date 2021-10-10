$(window).scroll(function() {		
	menuFixTop();
	function menuFixTop () {
		var screen = $(window).scrollTop();
		//alert($('.header-main').height());
		if(screen >= $('#navbar-main').height()) {
			$('.header-main').addClass('fixed-top');
			$('.header-main').find('a.navbar-brand img').attr('src','assets/img/logo.png');
		} else {
			$('.header-main').removeClass('fixed-top');
			$('.header-main').find('a.navbar-brand img').attr('src','assets/img/logo-big.png');
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
	//$('#btnCollapse').click(function() {
		//$('#navbar-main').removeClass('fixed-top')
	//});
});
