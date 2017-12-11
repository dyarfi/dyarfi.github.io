
var $ = jQuery.noConflict();
var HOSPITAL = HOSPITAL || {};

(function($){

	"use strict";

	HOSPITAL.initialize = {

		init: function(){

			HOSPITAL.initialize.responsiveClasses();		
			HOSPITAL.initialize.holderThumb();	
			//HOSPITAL.initialize.carouselTabs();	
			HOSPITAL.initialize.owlCarousel();
			HOSPITAL.initialize.wayPoints();
			// HOSPITAL.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			// HOSPITAL.initialize.stickyElements();
			// HOSPITAL.initialize.goToTop();
			// HOSPITAL.initialize.lazyLoad();
			// HOSPITAL.initialize.fullScreen();
			// HOSPITAL.initialize.verticalMiddle();
			// HOSPITAL.initialize.lightbox();
			// HOSPITAL.initialize.resizeVideos();
			// HOSPITAL.initialize.imageFade();
			// HOSPITAL.initialize.pageTransition();
			// HOSPITAL.initialize.dataResponsiveClasses();
			// HOSPITAL.initialize.dataResponsiveHeights();
			// HOSPITAL.initialize.iasContent();
			// HOSPITAL.initialize.pageContent();
		},

		responsiveClasses: function(){

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

		imagePreload: function(selector, parameters){
			var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);

			$(selector).each(function() {
				var image = $(this);
				image.css({visibility:'hidden', opacity: 0, display:'block'});
				image.wrap('<span class="preloader" />');
				image.one("load", function(evt) {
					$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function() {
					if(this.complete) $(this).trigger("load");
				});
			});
		},

		holderThumb: function() {
			Holder.addTheme('thumb', {
				bg: '#55595c',
				fg: '#eceeef',
				text: 'Thumbnail'
			});
		},
		/*
		carouselTabs : function () {
			var clickEvent = false;
				$('#myCarousel1').carousel({
					interval:   4000	
				}).on('click', '.list-group .list-group-item', function() {
						clickEvent = true;
						$('.list-group .list-group-item').removeClass('active');
						$(this).addClass('active');		
				}).on('slid.bs.carousel', function(e) {
					if(!clickEvent) {
						var count = $('.list-group').children().length -2;
						var current = $('.list-group .list-group-item.active');
						current.removeClass('active').next().addClass('active');
						var id = parseInt(current.data('slide-to'));
						if(count == id) {
							$('.list-group .list-group-item').first().addClass('active');	
						}
					}
					clickEvent = false;
				});
		},
		*/
		owlCarousel : function() {			
			var owl = $('.main-carousel').owlCarousel({
                animateOut:'fadeOut',
				animateIn:'fadeIn',
				items:1,
				autoplay:1,
				loop:1,
				margin:30,
				lazyLoad:1,
                stagePadding:0,
                smartSpeed:450
			});
						
			owl.on('changed.owl.carousel', function(event) {
				var obj = event.target;
				// Item Head
				var itemHead = $(obj).find('.owl-caption > h1');
				// Item Content				
				var itemContent = $(obj).find('.owl-caption > p');				
				// Current Owl slide Heading 
				itemHead.eq(event.item.index)
				.removeClass('d-none')
				.addClass('animated fadeInDown');
				// Current Owl slide Content 				
				itemContent.eq(event.item.index)
				.removeClass('d-none')
				.addClass('animated fadeInUp');
			});
			owl.on('change.owl.carousel', function(event) {
				var obj = event.target;
				// Item Head
				var itemHead = $(obj).find('.owl-caption > h1').addClass('d-none');
				// Item Content				
				var itemContent = $(obj).find('.owl-caption > p').addClass('d-none');
			});
		}/*,
		wayPoints:function () {
			var waypoints = $('#box-waypoint-handler').waypoint({
				handler: function(direction) {
					$('.box-waypoint').addClass('animated fadeInDown');
				}
			})
		}*/	
	};

	HOSPITAL.documentOnReady = {

		init: function(){
			HOSPITAL.initialize.init();
			//HOSPITAL.header.init();
			//HOSPITAL.documentOnReady.windowscroll();
		},

		windowscroll: function() {

			/*
			var headerOffset = 0,
				headerWrapOffset = 0,
				pageMenuOffset = 0;

			if( $header.length > 0 ) { headerOffset = $header.offset().top; }
			if( $header.length > 0 ) { headerWrapOffset = $headerWrap.offset().top; }
			if( $pagemenu.length > 0 ) {
				if( $header.length > 0 && !$header.hasClass('no-sticky') ) {
					if( $header.hasClass('sticky-style-2') || $header.hasClass('sticky-style-3') ) {
						pageMenuOffset = $pagemenu.offset().top - $headerWrap.outerHeight();
					} else {
						pageMenuOffset = $pagemenu.offset().top - $header.outerHeight();
					}
				} else {
					pageMenuOffset = $pagemenu.offset().top;
				}
			}

			var headerDefinedOffset = $header.attr('data-sticky-offset');
			if( typeof headerDefinedOffset !== 'undefined' ) {
				if( headerDefinedOffset == 'full' ) {
					headerWrapOffset = $window.height();
					var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if( typeof headerOffsetNegative !== 'undefined' ) { headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1; }
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			}

			HOSPITAL.header.stickyMenu( headerWrapOffset );
			HOSPITAL.header.stickyPageMenu( pageMenuOffset );

			$window.on( 'scroll', function(){

				HOSPITAL.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				HOSPITAL.header.stickyMenu( headerWrapOffset );
				HOSPITAL.header.stickyPageMenu( pageMenuOffset );
				HOSPITAL.header.logo();

			});

			window.addEventListener('scroll', onScrollSliderParallax, false);

			if( $onePageMenuEl.length > 0 ){
				if( $().scrolled ) {
					$window.scrolled(function() {
						HOSPITAL.header.onepageScroller();
					});
				} else {
					console.log('windowscroll: Scrolled Function not defined.');
				}
			}
			*/
		}
	};

	HOSPITAL.documentOnLoad = {

		init: function() {
			/*
			HOSPITAL.slider.captionPosition();
			HOSPITAL.slider.swiperSliderMenu(true);
			HOSPITAL.slider.revolutionSliderMenu(true);
			HOSPITAL.initialize.maxHeight();
			HOSPITAL.initialize.testimonialsGrid();
			HOSPITAL.initialize.verticalMiddle();
			HOSPITAL.initialize.stickFooterOnSmall();
			HOSPITAL.initialize.stickyFooter();
			HOSPITAL.portfolio.gridInit( $gridContainer );
			HOSPITAL.portfolio.filterInit();
			HOSPITAL.portfolio.shuffleInit();
			HOSPITAL.portfolio.arrange();
			HOSPITAL.portfolio.portfolioDescMargin();
			HOSPITAL.widget.parallax();
			HOSPITAL.widget.loadFlexSlider();
			HOSPITAL.widget.html5Video();
			HOSPITAL.widget.masonryThumbs();
			HOSPITAL.header.topsocial();
			HOSPITAL.header.responsiveMenuClass();
			HOSPITAL.initialize.modal();
			*/
		}
	};

	HOSPITAL.isMobile = {
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
			return (HOSPITAL.isMobile.Android() || HOSPITAL.isMobile.BlackBerry() || HOSPITAL.isMobile.iOS() || HOSPITAL.isMobile.Opera() || HOSPITAL.isMobile.Windows());
		}
	};

	HOSPITAL.documentOnResize = {

		init: function() {
			/*
			var t = setTimeout( function(){
				HOSPITAL.header.topsocial();
				HOSPITAL.header.fullWidthMenu();
				HOSPITAL.header.overlayMenu();
				HOSPITAL.initialize.fullScreen();
				HOSPITAL.initialize.verticalMiddle();
				HOSPITAL.initialize.maxHeight();
				HOSPITAL.initialize.testimonialsGrid();
				HOSPITAL.initialize.stickyFooter();
				HOSPITAL.slider.sliderParallaxDimensions();
				HOSPITAL.slider.captionPosition();
				HOSPITAL.portfolio.arrange();
				HOSPITAL.portfolio.portfolioDescMargin();
				HOSPITAL.widget.tabsResponsiveResize();
				HOSPITAL.widget.tabsJustify();
				HOSPITAL.widget.html5Video();
				HOSPITAL.widget.masonryThumbs();
				HOSPITAL.initialize.dataResponsiveClasses();
				HOSPITAL.initialize.dataResponsiveHeights();
				if( $gridContainer.length > 0 ) {
					if( !$gridContainer.hasClass('.customjs') ) {
						if( $().isotope ) {
							$gridContainer.isotope('layout');
						} else {
							console.log('documentOnResize > init: Isotope not defined.');
						}
					}
				}
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
					$('#primary-menu').find('ul.mobile-primary-menu').removeClass('show');
				}
			}, 500 );
			*/
			windowWidth = $window.width();

		}
	};

	var $window = $(window),
		$body = $('body'),
		//$wrapper = $('#wrapper'),
		//$header = $('#header'),
		//$headerWrap = $('#header-wrap'),
		$content = $('#content'),
		//$footer = $('#footer'),
		windowWidth = $window.width(),
		$goToTopEl = $('#gotoTop');

	
	$(document).ready( HOSPITAL.documentOnReady.init );
	//$window.load( HOSPITAL.documentOnLoad.init );
	$window.on( 'resize', HOSPITAL.documentOnResize.init );

})(jQuery);
