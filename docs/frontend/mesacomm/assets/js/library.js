// JavaScript Document
$(document).ready(function(){	
	
	//CREATE CIRCLES
	//circle content position and size
	/*
	$('.dotgreen').each(function() {
		//create size of circle via random number
		var size = Math.round(Math.random()*50+20);
		//create randomly sized circles from divs
		$(this).css({
			'width':size,
			'height':size,
			'margin-left':-1*size/2,
			'margin-top':-1*size/2,
			borderRadius:size/2+1,
			zIndex:size
		})
	})
	*/
   
	//
	//PACK CIRCLES
	//1st PARAM: holds the jQuery object of circle elements
	//2nd PARAM: holds the settings
	/*
	$('.circles-holder').circlePacker($('.circle'),{
		'damping':0.1,	//amount to move during iterations
		'dampingAccel' : 0.95,	//How quickly should it come to a stop
		'dampingCutoff' : 0.010,	//for quicker stopping (less accuracy),
		'callback' : function(circleHolder) {
			//circleHolder is reference back to holder
			console.log('Finished Packing '+circleHolder.children().length+' Circles');
		}
	});
	*/
   
	$('.navigation-ul').hover(
		function() {
			//$(this).animate({'opacity':1});
		},
		function() {
			//$(this).animate({'opacity':0.85});
		}
	);	
		
	// Initialize the plugin, pass in the class selector for the sections of content (blocks)
	var scrm = $.scrollorama({blocks:'.scrollblock', enablePin:false});		
	// Assign function to add behavior for onBlockChange event
	scrm.onBlockChange(function() {

		// Get block index
		var i = scrm.blockIndex;
		
		// Get navigation index
		var sid = scrm.settings.blocks.eq(i).attr('id');
				
		$('.navigation-ul li').find('a').removeClass('active');
		$('.navigation-ul li a').eq(i).addClass('active');

		
		//$('#console')
			//.css('display','block')
			//.text('onBlockChange | blockIndex:'+i+' | current block: '+sid);
		 
		
		//console.log(cli);	
	});
	
	
	
	// Animate the parallaxing
	/*
	'easeOutBounce',
	'easeOutQuad',
	'easeOutCubic',
	'easeOutQuart',
	'easeOutQuint', 
	'easeOutExpo'
	*/
	scrm		
		.animate('.ct6',{delay: 50, duration: 20, property:'opacity', start:0.2, easing:'easeOutExpo'})
		
		
		
		.animate('.bg-ct5',{delay: 100, duration: 1000, property:'height', start:148,end:252, easing:'easeOutQuint'})
		
		
		.animate('.circ1',{delay: 0, duration: 1000, property:'top', start:-800, end:0, easing:'easeOutQuint'})
		.animate('.circ2',{delay: 0, duration: 1100, property:'top', start:0, end:-200, easing:'easeOutQuint'})
		.animate('.circ3',{delay: 0, duration: 1000, property:'top', start:-1000, end:0, easing:'easeOutQuint'})
		.animate('.circ4',{delay: 0, duration: 1500, property:'top', start:0, end:-200, easing:'easeOutQuint'})
		.animate('.circ5',{delay: 0, duration: 1200, property:'top', start:-600, end:100, easing:'easeOutQuint'})
		.animate('.circ6',{delay: 0, duration: 1000, property:'top', start:0, end:-300, easing:'easeOutQuint'})
		.animate('.circ7',{delay: 0, duration: 1000, property:'top', start:-1000, end:0, easing:'easeOutQuint'})
		.animate('.circ8',{delay: 0, duration: 1500, property:'top', start:0, end:-600, easing:'easeOutQuint'})
		
		
		//.animate('.ct6',{delay: 10, duration: 900, property:'height', start:200,end:0, easing:'easeOutExpo'})
		.animate('.ct6-w4',{delay: 10, duration: 900, property:'top', start:1200,end:0, easing:'easeOutExpo'})
		.animate('.ct6-w3',{delay: 10, duration: 900, property:'top', start:1200,end:0, easing:'easeOutExpo'})
		.animate('.ct6-w2',{delay: 10, duration: 900, property:'top', start:1200,end:0, easing:'easeOutExpo'})
		.animate('.ct6-w1',{delay: 10, duration: 900, property:'bottom', start:1200,end:0, easing:'easeOutExpo'})
		
		.animate('.ct5',{delay: 50, duration: 20, property:'opacity', start:0.2})
		.animate('.ct5-w3',{delay: 40, duration: 600, property:'top', start:-1200,end:0, easing:'easeOutExpo'})
		.animate('.ct5-w2',{delay: 40, duration: 600, property:'bottom', start:-1200,end:0, easing:'easeOutExpo'})
		.animate('.ct5-w1',{delay: 40, duration: 600, property:'bottom', start:1000,end:0, easing:'easeOutExpo'})
		
		.animate('.ct4',{delay: 50, duration: 20, property:'opacity', start:0.2, easing:'easeOutExpo'})
		.animate('.ct4-w3',{delay: 300, duration: 300, property:'top', start:1200,end:0, easing:'easeOutExpo'})
		.animate('.ct4-w2',{delay: 200, duration: 300, property:'top', start:1200,end:0, easing:'easeOutExpo'})
		.animate('.ct4-w1',{delay: 300, duration: 300, property:'bottom', start:-1000,end:0, easing:'easeOutExpo'})
			
		.animate('.bg-ct3',{delay: 400, duration: 1000, property:'top', start:-100,end:120, easing:'easeOutExpo'})
		.animate('.ct3',{delay: 50, duration: 20, property:'opacity', start:0.2, easing:'easeOutExpo'})
		.animate('.ct3-w3',{delay: 40, duration: 600, property:'top', start:-1200,end:0, easing:'easeOutExpo'})
		.animate('.ct3-w2',{delay: 40, duration: 600, property:'bottom', start:-1200,end:0, easing:'easeOutExpo'})
		.animate('.ct3-w1',{delay: 8, duration: 600, property:'bottom', start:-1000,end:0, easing:'easeOutExpo'})
		
		.animate('.ct2-w3',{delay: 50, duration: 700, property:'top', start:-1000,end:0, easing:'easeOutExpo'})
		.animate('.ct2-w4',{delay: 50, duration: 700, property:'bottom', start:-400,end:0, easing:'easeOutExpo'})
		.animate('.ct2-w1',{delay: 50, duration: 700, property:'top', start:-1000,end:0, easing:'easeOutExpo'})
		
		.animate('.lbr',{delay: 10, duration: 100, property:'bottom', start:0, end:15, easing:'easeOutQuint'})
		.animate('.dco',{delay: 20, duration: 200, property:'opacity', start:1, end:0.05, easing:'easeOutQuint'})
		
		.animate('.ct1',{delay: 20, duration: 20, property:'bottom', start:-20, end:0, easing:'easeOutQuart'})
		
		.animate('.ct1-w1',{delay: 200, duration: 400, property:'top', start:600, end:0, easing:'easeOutExpo'})
		.animate('.ct1-w2',{delay: 200, duration: 400, property:'top', start:800, end:0, easing:'easeOutQuint'})
		.animate('.ct1-w3',{delay: 200, duration: 400, property:'bottom', start:200, end:0, easing:'easeOutExpo'})		
				
		//.animate('.c1',{delay: 400, duration: 1500, property:'bottom', start:0, end:200, easing:'easeOutQuad'})
		//.animate('.c2',{delay: 400, duration: 500, property:'bottom', start:200, end:100, easing:'easeOutExpo'})
		//.animate('.c3',{delay: 10, duration: 1500, property:'bottom', start:0, end:80, easing:'easeOutQuint'})
		//.animate('.c4',{delay: 400, duration: 1500, property:'bottom', start:0, end:400, easing:'easeOutQuad'})
		//.animate('.c5',{delay: 400, duration: 500, property:'bottom', start:200, end:-100, easing:'easeOutExpo'})
		//.animate('.c6',{delay: 400, duration: 1200, property:'bottom', start:400, end:-200, easing:'easeOutExpo'})	
		;

	var deck = new $.scrolldeck({
		slides: '.scrollblock',
		buttons: '.navigation-ul a',
		duration: 2000,
		easing: 'easeOutQuint',
		offset: 0
	});
			
	$('#about').parallax("100%", 2500, 0.4, true);
	$('#vision').parallax("100%", 2500, 0.4, true);
	$('#project').parallax("100%", 2500, 0.4, true);
	$('#mission').parallax("100%", 2500, 0.4, true);
	$('#solution').parallax("100%", 2500, 0.4, true);
	$('#contact').parallax("100%", 2500, 0.4, true);	
	
	var $sidebar   = $('.navigation-ul'), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 100;
   
	$window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
			$('.navigation-ul').attr('style','margin-top:0px;opacity:0.85;position:fixed');
			//$('.navigation-ul').addClass('navbar-fixed-top').attr('style','margin-top:0px');
			//$('.navigation').animate({'opacity':'0.85'}, 300, function(){ /* Animation Complete */ });
			//$('.navigation-ul li a').css({'height':'20px'});		
        } else {
			$('.navigation-ul').attr('style','margin-top:15px;opacity:1;position:relative');
			//$('.navigation-ul').removeClass('navbar-fixed-top').attr('style','margin-top:15px');
			//$('.navigation').animate({'opacity':'1'}, 300, function(){ /* Animation Complete */ });
			//$('.navigation-ul li a').css({'height':'30px'});
	    }
    });
	
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

});