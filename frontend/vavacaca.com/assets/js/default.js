
$(document).ready(function() {

	/*
	$("body").queryLoader2({
        barColor: "#fff",
        backgroundColor: "#fff",
        percentage: false,
        barHeight: 0,
        completeAnimation: "grow",
		onComplete: function () {
			//$('#qLoverlay').html('<img id="preloder" src="assets/img/status.gif"/>');
			//alert('asdf');
			//alert('asdf');
		}//,
		//onLoadComplete: function () {
			//$('#qLoverlay').empty();
			//alert('asdf');
		//}
    });
	*/
   
	jQuery(function(){jQuery(document).pngFix();});

	Socialite.load();

	$('.connectthedots, .findaway, .findobject, .findtherightway, .findtheanimals, .turtlecoloring').colorbox({iframe:true, width:"60%", height:"90%"});

	$('#carousel_home').carousel({
		interval: 5000
	});
	
	$('#carousel_home').on('slide.bs.carousel', function () {
		$(this).fadeOut('slow');
		$(this).fadeIn('slow');
	});

	$('.navigation a').hover(function(){
		$(this).animate({opacity:'0.92'});
	},function(){
		$(this).animate({opacity:'1'});
	});
	
	$('.cloud').pan({fps: 30, speed: 0.6, dir: 'right', depth: 30});
	
	$('.box_chars').hide();
	$('.chars a').on('click',function() {		
		$(this).parents().find('.box_chars').show().text($(this).parent().find('div.hidden').text());
		/*
		$(this).parent().prepend('<div class="box_chars">Dida is a humorous friend. He is always making his friends happy and laughs. Dida is a really good singer, and he can also play guitar player really well. He really likes to create something from unused bottles, and make a good toys or art out of it.</div>');
		*/
	});
	
	$('.chars a').on('blur', function(){
		$(this).parents().find('.box_chars').hide();
	});
	
	$('.chars a').hover(function(){
		$(this).stop().animate({opacity:'0.82'/*,fontSize:'1.5em'*/});
	},function(){
		$(this).stop().animate({opacity:'1'/*,fontSize:'1.2em'*/});
	});
	
	$(".newsletter").colorbox({iframe:true,width:"40%", height:"50%"});
	
	// Set XHTTP HEADERS from contact submit form	
	$('#contact_form').submit(function(e){
		// Prevent form from submitting normally
		e.preventDefault();		
		// Set preloader image
		$('#loader').html('<img width="28" height="28" src="assets/images/themes/loading.gif"/>&nbsp;&nbsp;Sending...');
		$('#result_callback').empty();
		// Set ajax post handler
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
			data: { 
				fullname	: $('#fullname').val(),
				email		: $('#email').val(),
				phone		: $('#phone').val(),
				message		: $('#message').val()
			},
			cache: false,
			async: true,	
			timeout:8000,
			datatype: "JSON",
			success: function(json) {
				// Parse JSON result
				var data = jQuery.parseJSON(json);
				
				if(data.result == 0) {
					var err = data.message;
					var alert_err = '<div class="alert">'+ err +'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';
					
					$('#result_callback').append(alert_err).delay(1000).fadeIn('slow');
					
				} else if(data.result == 2) {
					$('#result_callback').html(data.message).delay(1000).fadeOut('slow');
				} else {
					var ahref = data.message;
					var alert = '<div class="alert alert-warning">'+ ahref +'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';					
					$('#result_callback').append(alert).delay(1000).fadeIn('slow');					
				}				
				// Empty All input value				
				$('#fullname').val('');
				$('#email').val('');
				$('#phone').val('');
				$('#message').val('');				
				// Empty loader image
				$('#loader').html('');							
			},
			complete: function(json) { },
			error: function(x,json,t) { 
				if(message==="timeout") {
					//alert("got timeout");
				} else {
					//alert(message);
				}	
			}
		});
	});	

	
	// Set XHTTP HEADERS from contact submit form	
	$('#subscribers_form').submit(function(e){
		// Prevent form from submitting normally
		e.preventDefault();			
		// Set preloader image
		$('#loader').html('<img width="28" height="28" src="assets/images/themes/preloader.gif"/>&nbsp;&nbsp;Sending...');
		$('#result_callback').empty();
		// Set ajax post handler
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
			data: { 
				email		: $('#email').val()
			},
			cache: false,
//			async: true,	
			timeout:8000,
			datatype: "JSON",
			success: function(json) {
				// Parse JSON result
				var data = jQuery.parseJSON(json);
				
				if(data.result == 0) {
					var err = data.message;
					var alert_err = '<div class="alert">'+ err +'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';
					
					$('#result_callback').append(alert_err).delay(1000).fadeIn('slow');
					
				} else if(data.result == 2) {
					$('#result_callback').html(data.message).delay(1000).fadeOut('slow');
				} else {
					var ahref = data.message;
					var alert = '<div class="alert alert-warning">'+ ahref +'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';					
					$('#result_callback').append(alert).delay(1000).fadeIn('slow');					
				}				
				// Empty All input value				
				$('#email').val('');									
				// Empty loader image
				$('#loader').html('');	
			},
			complete: function(json) { },
			error: function(x,json,t) { 
				if(message==="timeout") {
					//alert("got timeout");
				} else {
					//alert(message);
				}	
			}
		});
	});	
	
});

// Extend Jquery Functions
$.extend({
	getHistory: function () {
		//alert($.cookie('keywords'));
	}
});