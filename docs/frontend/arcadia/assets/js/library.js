// JavaScript Document
$(document).ready(function(){	
	// Animate
	
	$('.productlist').hover(
            function (){
//              $('.productlist').animate({ borderColor: '#959595' }, 'slow');
                //alert('asdf');
                $('.productlist').animate({ backgroundColor: '#959595'});			
            },
            function (){
                //alert('asdf');

//		$('.productlist').animate({ borderColor: '#FFFFFF' }, 'slow');
                $('.productlist').animate({ backgroundColor: '#FFFFFF'});

            }
	);
	
	/*
   $('.productlist').hover(

        function(){
			alert('sdfdsf');
            $(this).animate({ backgroundColor: '#990000' });
        }, 
        function(){
            $(this).animate({ backgroundColor: '#ff0000' });
        }
    ); 
		*/
	// Colorbox
	// 	$(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, iframe:false, fixed:false});
	// $(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"50%",height:"50%", iframe:false, fixed:false});

	// $(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"62%",height:"auto", iframe:false, fixed:false});
	$(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"62%",height:"auto",innerWidth:500, innerHeight:409, iframe:false, fixed:false});
	
	$(".colorbox").colorbox({rel:'colorbox', fixed:false});

        $('.logo a').hover(function() {
           $(this).find('img').stop().animate({'opacity':0.55}); 
        },function () {
            $(this).find('img').stop().animate({'opacity':1}); 
        });
	// pngFix
	//$(document).pngFix(); 
        $('.productlist a, a.product_new').click(function(){
            var href = $(this).attr('rel');
            $.colorbox({href:href,
            iframe:true,
            width:"62%",height:$(window).height(),innerWidth:500, innerHeight:409,
//		height:$(window).height(),
            fixed:true, 
            title:false, 
            //onClosed:function(){ if ($.getUrlVar('ref') != 'nav'); parent.location.reload(); },
            returnFocus:true});
            return false;
	});
	//********* jQuery Cycle -- start *********//
	// Cycle pager
	$.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
		$(pager).find('li').removeClass('activelI') 
        .filter('li:eq('+currSlideIndex+')').addClass('activelI'); 
	};
	
	$('.slideshow-portfolio').cycle({
            //fx:'scrollHort',
            //timeout:0,
            prev:'#prev',
            next:'#next',
            pager:'#nav',
            height:'474px',
            pagerAnchorBuilder:pagerFactory
	});
        
        var idx = $('.slideshow .item').length;
	function pagerFactory(idx,slide){
            var s= idx > 8 ? ' style="display:none"':'';
            return'<li'+s+'><a href="#">'+(idx+1)+'</a></li>';
	};
	//********* jQuery Cycle -- end *********//
        $('#carousel-home').carousel({
            interval: 6000
        });
        $('#carousel-home,#carousel-portfolio').on('slide.bs.carousel', function () {
            //$(this).find('.carousel-caption').css({'bottom':'90px'});
            //$(this).fadeOut(350).fadeIn(350);
            $(this).find('.carousel-inner').fadeOut(350).fadeIn(350);
            //$(this).find('.carousel-caption').css({'bottom':'90px'});
	});
        $('#carousel-product').on('slide.bs.carousel', function () {
            //$(this).find('.carousel-caption').css({'bottom':'90px'});
            //$(this).find('.carousel-inner').fadeOut(350).fadeIn(350);
            //$(this).find('.carousel-inner').fadeOut(350).fadeIn(350);
            //$(this).find('.carousel-caption').css({'bottom':'90px'});
	});
        $('.carousel-caption,.carousel-control').css({opacity:0});
	$('#carousel-home').hover(function(){
            $(this).find('.carousel-caption').animate({opacity:1,bottom:0}, 500, 'easeInOutExpo');
            //$(this).find('.carousel-indicators').animate({opacity:1}, 800, 'easeInOutExpo');
            $(this).find('.carousel-control').animate({'opacity':0.5});
	},function(){
            $(this).find('.carousel-caption').stop().animate({opacity:0,bottom:-50}, 600, 'easeInOutExpo');
            //$(this).find('.carousel-indicators').animate({opacity:1}, 800, 'easeInOutExpo');
            $(this).find('.carousel-control').animate({'opacity':0});
	});
        $('#carousel-product').carousel({
            interval: false
        });
        $('#carousel-portfolio').carousel({
            interval: false
        });
        
});