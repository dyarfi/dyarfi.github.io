var $ = jQuery.noConflict();
var PROPARC = PROPARC || {};

(function($){

	"use strict";

	PROPARC.initialize = {

		init: function(){

			PROPARC.initialize.responsiveClasses();		
			PROPARC.initialize.holderThumb();	
			// PROPARC.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			// PROPARC.initialize.stickyElements();
			// PROPARC.initialize.goToTop();
			// PROPARC.initialize.lazyLoad();
			// PROPARC.initialize.fullScreen();
			// PROPARC.initialize.verticalMiddle();
			// PROPARC.initialize.lightbox();
			// PROPARC.initialize.resizeVideos();
			// PROPARC.initialize.imageFade();
			// PROPARC.initialize.pageTransition();
			// PROPARC.initialize.dataResponsiveClasses();
			// PROPARC.initialize.dataResponsiveHeights();
			// PROPARC.initialize.iasContent();
			// PROPARC.initialize.pageContent();
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
		}
	};

	PROPARC.documentOnReady = {

		init: function(){
			PROPARC.initialize.init();
			//PROPARC.header.init();
			//PROPARC.documentOnReady.windowscroll();
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

			PROPARC.header.stickyMenu( headerWrapOffset );
			PROPARC.header.stickyPageMenu( pageMenuOffset );

			$window.on( 'scroll', function(){

				PROPARC.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				PROPARC.header.stickyMenu( headerWrapOffset );
				PROPARC.header.stickyPageMenu( pageMenuOffset );
				PROPARC.header.logo();

			});

			window.addEventListener('scroll', onScrollSliderParallax, false);

			if( $onePageMenuEl.length > 0 ){
				if( $().scrolled ) {
					$window.scrolled(function() {
						PROPARC.header.onepageScroller();
					});
				} else {
					console.log('windowscroll: Scrolled Function not defined.');
				}
			}
			*/
		}
	};

	PROPARC.documentOnLoad = {

		init: function() {
			/*
			PROPARC.slider.captionPosition();
			PROPARC.slider.swiperSliderMenu(true);
			PROPARC.slider.revolutionSliderMenu(true);
			PROPARC.initialize.maxHeight();
			PROPARC.initialize.testimonialsGrid();
			PROPARC.initialize.verticalMiddle();
			PROPARC.initialize.stickFooterOnSmall();
			PROPARC.initialize.stickyFooter();
			PROPARC.portfolio.gridInit( $gridContainer );
			PROPARC.portfolio.filterInit();
			PROPARC.portfolio.shuffleInit();
			PROPARC.portfolio.arrange();
			PROPARC.portfolio.portfolioDescMargin();
			PROPARC.widget.parallax();
			PROPARC.widget.loadFlexSlider();
			PROPARC.widget.html5Video();
			PROPARC.widget.masonryThumbs();
			PROPARC.header.topsocial();
			PROPARC.header.responsiveMenuClass();
			PROPARC.initialize.modal();
			*/
		}
	};

	PROPARC.isMobile = {
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

	PROPARC.documentOnResize = {

		init: function() {
			/*
			var t = setTimeout( function(){
				PROPARC.header.topsocial();
				PROPARC.header.fullWidthMenu();
				PROPARC.header.overlayMenu();
				PROPARC.initialize.fullScreen();
				PROPARC.initialize.verticalMiddle();
				PROPARC.initialize.maxHeight();
				PROPARC.initialize.testimonialsGrid();
				PROPARC.initialize.stickyFooter();
				PROPARC.slider.sliderParallaxDimensions();
				PROPARC.slider.captionPosition();
				PROPARC.portfolio.arrange();
				PROPARC.portfolio.portfolioDescMargin();
				PROPARC.widget.tabsResponsiveResize();
				PROPARC.widget.tabsJustify();
				PROPARC.widget.html5Video();
				PROPARC.widget.masonryThumbs();
				PROPARC.initialize.dataResponsiveClasses();
				PROPARC.initialize.dataResponsiveHeights();
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

	
	$(document).ready( PROPARC.documentOnReady.init );
	//$window.load( PROPARC.documentOnLoad.init );
	$window.on( 'resize', PROPARC.documentOnResize.init );

})(jQuery);
