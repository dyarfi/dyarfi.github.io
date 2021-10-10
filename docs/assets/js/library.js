// JavaScript Document
$(document).ready(function() {
	// Set pngfix
	$(document).pngFix();
	// Set button tooltip
	$('.icon-facebook, .icon-twitter, .icon-gplus, .icon-linkedin, .icon-pinterest').tooltip();
	// Set Effects on continue button
	$('.nav-circle a, .continue a').hover(
		function() {$(this).stop().animate({color:'#ffffff','duration': 200});},
		function() {$(this).stop().animate({color:'#c4a38f','duration': 200});}
	);
	// Initialize the plugin, pass in the class selector for the sections of content (blocks)
	var scrm = $.scrollorama({blocks:'.scrollblock', enablePin:false});
	// Assign function to add behavior for onBlockChange event
	scrm.onBlockChange(function() {
	var i = scrm.blockIndex;
		// Get navigation index
		var sid = scrm.settings.blocks.eq(i).attr('id');
		$('#console').css('display','none')
		.text('onBlockChange | blockIndex:'+i+' | current block: '+sid);
		$('.nav-circle li').find('a').removeClass('active');
		$('.nav-circle li a').eq(i).addClass('active');
	});
	// Set ScrollDeck
   	var deck = new $.scrolldeck({
		slides: '.scrollblock',
		buttons: '.nav-circle li a',
		duration: 4000,
		easing: 'easeOutQuint',
		offset: 0
	});
	// Set Parallax
	$('#intro').parallax("50%", 1200, 0.1, true);
	$('#about').parallax("50%", 1200, 0.3, true);
	$('#interest').parallax("50%", 1200, 0.4, true);
	$('#works').parallax("50%", 1200, 0.3, true);
	$('#contact').parallax("50%", 1200, 0.3, true);
	// Hide Nvaigate before query loader execute
	$('.scrollblock, #navigation').hide();
	// Set Queryloader2 for Intro
	$('body').queryLoader2({
        barColor: "#fff",
        backgroundColor: "#fff",
        percentage: false,
        barHeight: 0,
        completeAnimation: "grow",
		onProgress : function () {
			$('body').hide().show();
		},
		onComplete: function () {
			$('#intro').show()
			.find('.welcome, .continue')
			.animate({color:'#c4a38f',duration: 180, easing:'easeOutQuint'});
			$('.office').animate({letterSpacing:-1,color:'#c4a38f',duration: 180, easing:'easeOutQuint'});
		}
    });
	// Set continue to click and display real content
	$('.continue').click(function(){
		setTimeout(function() {
			$('#intro').attr('style','position:absolute;').fadeOut('fast');
			//setTimeout($('.scrollblock, #navigation').fadeIn('slow'),3000);
			$('.scrollblock, #navigation').fadeIn('slow');
		}, 600);
	});
	// Set Effects for continue button
	$('.continue').hover(
		function (e){
			e.preventDefault();
			$(this).stop().animate({color:'#b7a9a1',letterSpacing:5,duration: 80, easing:'easeOutQuint'});
		},
		function (e){
			e.preventDefault();
			$(this).stop().animate({color:'#c4a38f',letterSpacing:-0.01,duration: 80, easing:'easeOutQuint'});
		}
	);
	$('.headline').hover(
		function (){//$(this).animate({color:'#b7a9a1',letterSpacing:5,duration: 180, easing:'easeOutQuint'})
		},
		function (){//$(this).animate({color:'#c4a38f',letterSpacing:-0.05,duration: 180, easing:'easeOutQuint'})
		}
	);
	// Set XHTTP HEADERS from contact submit form
	$('#contact_form').submit(function(e){
		// Prevent form from submitting normally
		e.preventDefault();
		// Set preloader image
		$('#loader').html('<img width="28" height="28" src="assets/img/spinner.gif"/>&nbsp;&nbsp;Sending...');
		$('#result_callback').empty();
		// Set ajax post handler
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
			data: {
				name	: $('#name').val(),
				email	: $('#email').val(),
				message	: $('#message').val()
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
					var alert = '<div class="alert alert-error">'+ ahref +'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';
					$('#result_callback').append(alert).delay(1000).fadeIn('slow');
				}
				// Empty All input value
				$('#name').val('');
				$('#email').val('');
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
   /*
	var title = document.title;
	$.address.crawlable(true).init(function(event) {
		$('.nav-circle a').click(function(event) {
			var id = $(this).attr('href').replace(/^#/, '');
			$.address.value(id);
			$.address.update();
			var desc = $(this).text();
			$.address.title(title + ' - ' + desc);
		});
	}).change(function(event) {
		$('.nav-circle a').each(function() {
			//var text = $(this).text();
			//$(this).toggleClass('active', $(this).text() == text);
			//$(this).toggleClass('active');
		});
	});
	$('.nav-circle li a').click(function (e) {
		var id		= $(this).attr('href').replace(/^#/, '');
		$('.nav-circle li a').removeClass('active');
		if (id !== '') {
			$(this).addClass('active');
		}
		var desc = $(this).text();
		$.address.title(title + ' - ' + desc);
		e.preventDefault();
	});
	*/
   $('.button').click( function () { });
});
/*
$.address.crawlable(true).init(function(event) {
	$('#myTab a').click(function(event) {
		var id = $(this).attr('href').replace('/^#/', '');
		tabEvent = true;
		$.address.value(id);
		var desc = $(this).text();
		$.address.title(title + ' - ' + desc);
	});
}).change(function(event) {
	var text = (event.value == '') ? 'Home' :
		event.pathNames[0].substr(0, 1).toUpperCase() +
		event.pathNames[0].substr(1);
	$('#myTab a').each(function() {
		$(this).toggleClass('selected', $(this).text() == text);
	});
});
*/
