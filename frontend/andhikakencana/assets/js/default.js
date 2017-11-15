
$(document).ready(function() {

	jQuery(function(){jQuery(document).pngFix();});
	
	$('#carousel_home').carousel({
		interval: 5000
	});
	
	$('#carousel_home').on('slide.bs.carousel', function () {
		$(this).fadeOut('slow');
		$(this).fadeIn('slow');
	});

	$('.ak-menu a').hover(function(){
		$(this).animate({opacity:'0.62'});
	},function(){
		$(this).animate({opacity:'1'});
	});
	
	$('#_register, #_forgot').click(function(){
		var title = $(this).html();
		var html = '<div class="form-group"><label>Email<input type="text" placeholder="Email" class="form-control"></label><label>Username<input type="text" placeholder="Username" class="form-control"></label><button class="btn btn-primary">Submit</button></div>';		
		bootbox.dialog({
			message: html,
				title: title,
					buttons: {
						success: {
						label: "Success!",
						className: "btn-success",
						callback: function() {
							Example.show("great success");
						}
					},
					danger: {
						label: "Cancel!",
						className: "btn-danger",
						callback: function() {
							Example.show("uh oh, look out!");
						}
					},
					main: {
						label: "Submit!",
						className: "btn-primary",
						callback: function() {
							Example.show("Primary button");
					}
				}
			}
		});
	});
	
	$('.menu-tab li.active').removeClass('active').find('a').trigger('click');
	
	$('.menu-tab a').click(function (e) {		
		var i = $('.menu-tab').find('li').length;
		//alert($(this).parent().parent().html());
		//$('.nav li.active').removeClass('active').find('a').trigger('click');
		$(this).parent().parent().removeClass('active').find('a').removeClass('active');
		$(this).addClass('active');
		$(this).animate({opacity:'0.72'}).animate({opacity:'1'});
	});
	
	$('.input-daterange').datepicker({
		todayBtn: "linked"
	});
	
	/*
	var tabCarousel = setInterval(function() {
		var tabs = $('.menu-tab > li'),
			active = tabs.filter('.active'),
			next = active.next('li'),
			toClick = next.length ? next.find('a') : tabs.eq(0).find('a');
		toClick.trigger('click');
	}, 8000);
	*/
   
	$('.reload_captcha').click(function() {
		var url	= $(this).attr('href');		
		$.ajax({
			type: "POST",
			url: url,
			data: 'file=true',
			cache: true,
			async: true,
			success: function(msg){
				$('.reload_captcha').empty().html(msg);
				// Need random for browser recache
				img		= $('.reload_captcha').find('.captcha');
				src		= img.attr('src');
				ran		= img.fadeOut(10).fadeIn(220).attr('src', src + '?=' + Math.random());
			},
			complete: function(msg) {},
			error: function(msg) {}
		});
		return false;	
	});
	
	$('ul.ulSocial li a').tooltip({
		title: 'title', 
		placement: 'bottom',
		animation: true
		//delay: 100,
		//trigger: 'hover'
	});
		
	//$('#fade').cycle();
	
});

// Extend Jquery Functions
$.extend({
	getHistory: function () {
		//alert($.cookie('keywords'));
	}
});