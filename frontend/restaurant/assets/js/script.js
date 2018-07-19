// Default application script
var APPSCRIPT = APPSCRIPT || {};
var transparent = true;
(function($){

	"use strict";

	APPSCRIPT.initialize = {
		// Initialization
		init: function() {
			APPSCRIPT.initialize.responsiveClasses();
			APPSCRIPT.initialize.searchOverlay();
			APPSCRIPT.initialize.datePicker();
			APPSCRIPT.initialize.isotopeInit();
			APPSCRIPT.initialize.owlCarousels();
			APPSCRIPT.initialize.clickEvents();
			APPSCRIPT.initialize.scrollReveals();
			APPSCRIPT.initialize.scrollToEl();
			/*! Scroll to Top !*/
			APPSCRIPT.initialize.scrollTopInit();
			/*! Onscroll Functions on document ready !*/
			// APPSCRIPT.documentOnScroll.checkScrollForTransparentNavbar();
			// APPSCRIPT.documentOnScroll.init();
			//APPSCRIPT.initialize.documentOnScroll();
		},
		// Responsive Classes -- added automatically in the body tag
        responsiveClasses : function() {
            if( typeof jRespond === 'undefined' ) {
                console.log('responsiveClasses: jQuery jRespond not Defined.');
                return true;
            }
            var jRes = jRespond([
                {
					label: 'smallest',
					enter: 0,
					exit: 479
                },{
					label: 'handheld',
					enter: 480,
					exit: 767
                },{
					label: 'tablet',
					enter: 768,
					exit: 991
                },{
					label: 'laptop',
					enter: 992,
					exit: 1199
                },{
					label: 'desktop',
					enter: 1200,
					exit: 10000
                }
            ]);
            jRes.addFunc([
                {
                breakpoint: 'desktop',
					enter: function() { $body.addClass('device-lg'); },
					exit: function() { $body.removeClass('device-lg'); }
                },{
                breakpoint: 'laptop',
					enter: function() { $body.addClass('device-md'); },
					exit: function() { $body.removeClass('device-md'); }
                },{
                breakpoint: 'tablet',
					enter: function() { $body.addClass('device-sm'); },
					exit: function() { $body.removeClass('device-sm'); }
                },{
                breakpoint: 'handheld',
					enter: function() { $body.addClass('device-xs'); },
					exit: function() { $body.removeClass('device-xs'); }
                },{
                breakpoint: 'smallest',
					enter: function() { $body.addClass('device-xxs'); },
					exit: function() { $body.removeClass('device-xxs'); }
                }
            ]);
		},
		// Search Overlay popup
		searchOverlay:function () {
			$('#trigger-overlay').on('click',function() {
				$('#overlay-search').toggleClass('open');
				$('#form-search input[type=text]').focus();
			});
			$('.overlay-close').on('click',function() {
				$('#overlay-search').removeClass('open');
			});
		},
		datePicker:function () {
			// console.log($.fn.datepicker);
				if (typeof $.fn.datepicker !== 'undefined') {
					// $('#datepicker-alt').datepicker({
					// 	uiLibrary: 'bootstrap4',
					// 	format: 'dd/mm/yyyy'
					// });
					// $('#datepicker-alt').datetimepicker({ footer: true, modal: true });
					// $('#datepicker-alt').datetimepicker({ footer: true, modal: true });
					$('#datepicker-alt').datetimepicker({
						uiLibrary: 'bootstrap4',
						datepicker: { header:false, showOtherMonths: true, calendarWeeks: true }
					});
			}
		},
		isotopeInit:function() {
			/*
			var iso = new Isotope( '.grid', {
			itemSelector: '.grid-item',
			// layoutMode: 'fitRows'//,
			layoutMode: 'fitRows'//,
			});
			*/
			/*
		var iso = new Isotope( '.card-product', {
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
			});
			*/

			$('.btn-filters').on('click','button.btn-filter',function() {
			var $filter = $(this).attr('data-filter');
			// console.log($filter);
			var iso = new Isotope('.card-product', {
				// options
				itemSelector: '.grid-item',
				// layoutMode: 'fitRows',
				filter: $filter
			});
			// iso.filter($filter);
			});
		},
		owlCarousels:function() {
			// Index testimonial carousel
			$('.owl-carousel.testimonial').owlCarousel({
				items:1,
				loop:true,
				margin:10,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					}
				}
			});
			// Custom detail garage
			$('.custom-carousel.owl-carousel').owlCarousel({
				margin:10,
				loop:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					960:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
			// Index half slider
			$('.half-slider-carousel.owl-carousel').owlCarousel({
				items:1,
				loop:true
			});
		},
		clickEvents:function () {
			var hrefs = $('.img-ingredient__hold');
			var arels = $('.img-ingredient__body');
			hrefs.each(function(l) {
				var ahref = hrefs.find('a');
				$(this).find('a').on('click',function(){
					//ahref.find('.img-ingredient__img').removeClass('active');
					ahref.removeClass('active');
					//$(this).find('.img-ingredient__img').addClass('active');
					$(this).addClass('active');
					arels.hide('fast').removeClass('d-block').addClass('d-none');
					$('.'+$(this).attr('rel')).show('fast').removeClass('d-none').addClass('d-block');
				});
			}).find('a').eq(0).click();

			// Close catering form
			$('.mfp-close, .js-popup-closebtn').on('click',function(e) {
				// $('.mfp-animate.mfp-ready').css({'opacity':0});
				$('.mfp-animate').removeClass('mfp-ready');
				// $('.mfp-bg, .mfp-wrap').hide();
				// .css({'z-index':'0','visibility':'invisible'})
				//.delay(600)
				//.addClass('d-none');
			});

			// Form booking catering
			$('.book-catering').on('click',function(evt) {
				$('.mfp-animate').addClass('mfp-ready');
				// $('.mfp-bg, .mfp-wrap').show();
				// .css({'z-index':'2000','visibility':'visible'})
				//.delay(600)
				//.removeClass('d-none');
			});

			// Set active class from navbar-top click ahref
			$('.nav-link.scrollTo').on('click',function() {
				$('.nav-link.scrollTo').removeClass('active');
				$(this).addClass('active');
				// Click to close dropdown collapse on navbar-top
				if ($('.navbar-collapse.collapse').hasClass('show')) {
					// $('.navbar-collapse.collapse').removeClass('show');
					$('.navbar-toggler').click();
				}
			});
		},
		scrollReveals:function() {
			// Initial scrollreveal
			window.sr = ScrollReveal();
			sr.reveal('.copy-text-head', {
				reset:true,
				viewFactor: 0.6,
				origin: 'top',
				scale:'1',
				// opacity:'1',
				duration: '1000',
				delay:'200',
				distance: '12px'
			}, '100');
			// sr.reveal('.copy-text-sub', { reset:true, viewFactor: 0.6, origin: 'bottom', scale:'1', duration: '1000', delay:'200', distance: '12px', }, '100');
			// $('.img-reserve').each(function(i,ir){
				// i = 1;
				// sr.reveal(ir, { reset:true, viewFactor: 0.8, origin: 'bottom', scale:'1', duration: i + '000', delay: i + '00', distance: '12px', }, i + '00');
				// i++;
			// });
			// $('.img-reserve__content').each(function(c,irc){
				// c = 1;
				// sr.reveal(irc, { reset:true, viewFactor: 0.8, origin: 'bottom', scale:'1', duration: c + '000', delay: c + '00', distance: '120px', }, c + '0');
				// c++;
			// });
			/*
			$('.headline').each(function(i,hl){
				i = 1;
				sr.reveal(hl, { reset:true, viewFactor: 0.3, origin: 'bottom', scale:'1', duration: i + '000', delay:i+'00', distance: '12px', }, i + '00');
			});
			$('.headline-sub').each(function(j,shl){
				j = 1;
				sr.reveal(shl, { reset:true, viewFactor: 0.3, origin: 'top', scale:'1', duration: j + '000', delay:j+'00', distance: '5px', }, j + '00');
			});
			$('.feature-content').each(function(k,feat){
				k = k + 1;
				sr.reveal(feat, { reset:true, viewFactor: 0.3, origin: 'bottom', scale:'1', duration: k * 2 + '00', delay:k * 2 +'00', distance: '12px', }, k + '00');
			});
			$('.service-content').each(function(l,sres){
				l = l + 1;
				sr.reveal(sres, { reset:true, viewFactor: 0.3, scale: '1', duration: l * 2 + '00', delay:l+'00', distance: '10px'});
			});
			$('.posts-list__content').each(function(m,post){
				m = m + 1;
				sr.reveal(post, { reset:true, viewFactor: 0.8, scale: '1', origin:'bottom', duration: m * 4 + '00', delay:m +'00' }, m + '0');
			});
			$('.about-us__content').each(function(n,abus){
				n = n + 1;
				sr.reveal(abus, { reset:true, viewFactor: 0.6, scale: '1', origin: 'bottom', duration: n * 4 + '00', delay: n +'00', distance: '1rem', }, n + '0');
			});
			$('.blog-post__content').each(function(o,blog){
				o = o + 1;
				sr.reveal(blog, { reset:true, viewFactor: 0.5, scale: '1', origin: 'left', duration: o * 4 + '00', delay:o+'00', distance: '26px', }, o + '0');
			});
			// $('.work-list__content').each(function(p,grid){
				// p = p + 1;
				// sr.reveal(grid, { reset:true, viewFactor: 0.6, scale: '1', origin:'bottom', duration: p * 4 + '00', delay:p +'00' }, p + '0');
			// });
			// Button filter
			sr.reveal($('.work-list__content'), { reset:true, viewFactor: .1, scale: '1', origin: 'bottom', duration: '900', delay:'2', distance: '30px', }, '5');
			sr.reveal($('.btn-filters'), { reset:true, viewFactor: .8, scale: '1', origin: 'bottom', duration: '900', delay:'20', distance: '30px', }, '50');
			sr.reveal($('.btn-filters'), { reset:true, viewFactor: .8, scale: '1', origin: 'bottom', duration: '900', delay:'20', distance: '30px', }, '50');
			// Testimonial
			sr.reveal($('.testimonial'), { reset:true, viewFactor: .8, scale: '1', origin: 'bottom', duration: '900', delay:'20', distance: '30px', }, '50');
			*/
		},
		scrollToEl: function () {
			$('.scrollTo').on('click', function () {
				if($(this).attr('href').split('#')[1]) {
					var $el = $(this).attr('href').match(/(#[a-z0-9][a-z0-9\-_]*)/ig)[0];
					if ($($el).offset()) {
						$('html, body').animate({
							scrollTop: ($($el).offset().top - 10)
						},1600,'swing');
					}
				}
			});
		},
		scrollTopInit: function () {
			// declare variable
			var scrollTop = $(".scrollTop");
			$(window).scroll(function() {
				// declare variable
				var topPos = $(this).scrollTop();
				// if user scrolls down - show scroll to top button
				if (topPos > 200) {
					$(scrollTop).css({"opacity":"1","z-index":"1"});
				} else {
					$(scrollTop).css({"opacity":"0","z-index":"-1"});
				}
			}); // scroll END

			//Click event to scroll to top
			$(scrollTop).click(function() {
				$('html, body').animate({
					scrollTop: 0
				}, 1000);
				return false;
			}); // click() scroll top EMD
		}
	};

	APPSCRIPT.documentOnReady = {
		init: function() {
			APPSCRIPT.initialize.init();
			// if(!$('.navbar[color-on-scroll]').hasClass('navbar-transparent')) {
			// 	$('.navbar[color-on-scroll]').removeClass('bg-theme');
			// 	transparent = true;
			// }
		},

		windowscroll: function() {
		}
	};

	APPSCRIPT.documentOnLoad = {

	  init: function() {

	  }

	};

	APPSCRIPT.isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (PROPARC.isMobile.Android() || PROPARC.isMobile.BlackBerry() || PROPARC.isMobile.iOS() || PROPARC.isMobile.Opera() || PROPARC.isMobile.Windows());
		}
	};

	APPSCRIPT.documentOnResize = {

	  init: function() {
		windowWidth = $window.width();

	  }
	};

	APPSCRIPT.documentOnScroll = {
		init: function() {
			APPSCRIPT.documentOnScroll.checkNavbarScroll();
			APPSCRIPT.documentOnScroll.checkScrollForTransparentNavbar();
		},

		checkNavbarScroll: function() {
			var windscroll = $(window).scrollTop();
			if (windscroll >= 100) {
				$('section').each(function(i) {
					if ($(this).position().top <= windscroll - 20) {
						$('.nav-link.scrollTo').removeClass('active');
						$('.nav-link.scrollTo').eq(i).addClass('active');
					}
				});

			} else {

				$('.nav-link.scrollTo.active').removeClass('active');
				$('.nav-link.scrollTo:first').addClass('active');
			}
		},

		// checkNavbarScroll: debounce(function() {
		// 	$.each($('section'),function(){
		// 		console.log($(this).offset().top);
		// 	});
		// },10),

		// checkNavbarScroll:function() {
			// $('section').each(function(item,obj){

				// console.log(Math.ceil($(obj).offset().top) +'----');
				// console.log($(obj).attr('id') +'++++');
				// console.log($('.navbar-default').offset());
				// if(Math.ceil($('section').offset().top) < $('.navbar-default').offset().top){
					// console.log($('a[href="#'+ $('section').attr('id') +'"]').html());
					// $('a[href="#'+ $('section').attr('id') +'"]').addClass('active');
				// }
				// $('#collapsibleNavId li a').each(function(i,item){
					// console.log($(item).html());
				// });
				// console.log($(this).offset().top);
			// });
		// },

		checkScrollForTransparentNavbar: debounce(function() {
			var $navbar = $('.navbar[color-on-scroll]');
			var scroll_distance = $navbar.attr('color-on-scroll') || 250;
			if ($(document).scrollTop() > scroll_distance) {
				if (transparent) {
					transparent = false;
					$('.navbar[color-on-scroll]').removeClass('navbar-transparent');
				}
			} else {
				if (!transparent) {
					transparent = true;
					$('.navbar[color-on-scroll]').addClass('navbar-transparent');
				}
			}
		}, 10),
	};

  var $window = $(window),

		  $body = $('body'),
		  //$wrapper = $('#wrapper'),
		  //$header = $('#header'),
		  //$headerWrap = $('#header-wrap'),
		  //$content = $('#content'),
		  //$footer = $('#footer'),
		  windowWidth = $window.width();//,
		  //$goToTopEl = $('#gotoTop');

	$(document).ready( APPSCRIPT.documentOnReady.init );
	// $window.load( PROPARC.documentOnLoad.init );
	// $window.on( 'resize', APPSCRIPT.documentOnResize.init );
	$window.on( 'scroll', APPSCRIPT.documentOnScroll.init );

})(jQuery);


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};
