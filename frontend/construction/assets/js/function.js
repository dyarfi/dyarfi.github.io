var $ = jQuery.noConflict();
var CONSTR = CONSTR || {};

(function($){

	"use strict";

	CONSTR.initialize = {

		init: function(){

			CONSTR.initialize.responsiveClasses();		
            CONSTR.initialize.holderThumb();
			CONSTR.initialize.formAccountToggle();	
			CONSTR.initialize.carouselInit();
			CONSTR.initialize.preLoader();
			CONSTR.initialize.searchForm();
			// CONSTR.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			// CONSTR.initialize.stickyElements();
			// CONSTR.initialize.goToTop();
			// CONSTR.initialize.lazyLoad();
			// CONSTR.initialize.fullScreen();
			// CONSTR.initialize.verticalMiddle();
			// CONSTR.initialize.lightbox();
			// CONSTR.initialize.resizeVideos();
			// CONSTR.initialize.imageFade();
			// CONSTR.initialize.pageTransition();
			// CONSTR.initialize.dataResponsiveClasses();
			// CONSTR.initialize.dataResponsiveHeights();
			// CONSTR.initialize.iasContent();
			// CONSTR.initialize.pageContent();
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

        formAccountToggle: function () {
            /*
            var $fsignin = $('#iot-form-login'); 
            var $fcreate = $('#iot-form-create');
            var $fforgot = $('#iot-form-forgot');
            // Itirate forms detection
            $('#iot-account div.iot-form-handler').each(function(i,obj) {
                var $form = $(this);
                $form.removeClass('d-flex').addClass('d-none'); 
                $form.find('.account-link-holder a').click(function() {
                    $form.removeClass('d-flex').addClass('d-none');
                    $($(this).attr('rel')).removeClass('d-none').addClass('d-flex');
                });                           
            }).first().addClass('d-flex');
            */
		},
		
		carouselInit:function () {
			// $('#myCarousel').on('slide.bs.carousel', function () {
				// $(this).find('h1').slideDown();
			// });
		},

		preLoader:function() {
			/* ==============================================
			Preloader
			=============================================== */

			// will first fade out the loading animation
			//$("#loading-animation").fadeOut();
			// will fade out the whole DIV that covers the website.
			//$("#preloader").delay(600).fadeOut("slow");
		},

		searchForm:function() {
            /* Search Form */
            /*
			$('a.search-link').click(function() {
				$('#iot-search-form')
				.removeClass('d-none')
				.addClass('fixed-top')
				.find('input[type=text]')
				.focus();
			});
			$('#iot-search-form input').blur(function() {
				$("#iot-search-form")
				.removeClass('fixed-top')
				.addClass('d-none');
            });
            */
		}
	};

	CONSTR.documentOnReady = {

		init: function(){
			CONSTR.initialize.init();
			//CONSTR.header.init();
			//CONSTR.documentOnReady.windowscroll();
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

			CONSTR.header.stickyMenu( headerWrapOffset );
			CONSTR.header.stickyPageMenu( pageMenuOffset );

			$window.on( 'scroll', function(){

				CONSTR.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				CONSTR.header.stickyMenu( headerWrapOffset );
				CONSTR.header.stickyPageMenu( pageMenuOffset );
				CONSTR.header.logo();

			});

			window.addEventListener('scroll', onScrollSliderParallax, false);

			if( $onePageMenuEl.length > 0 ){
				if( $().scrolled ) {
					$window.scrolled(function() {
						CONSTR.header.onepageScroller();
					});
				} else {
					console.log('windowscroll: Scrolled Function not defined.');
				}
			}
			*/
		}
	};

	CONSTR.documentOnLoad = {

		init: function() {
			/*
			CONSTR.slider.captionPosition();
			CONSTR.slider.swiperSliderMenu(true);
			CONSTR.slider.revolutionSliderMenu(true);
			CONSTR.initialize.maxHeight();
			CONSTR.initialize.testimonialsGrid();
			CONSTR.initialize.verticalMiddle();
			CONSTR.initialize.stickFooterOnSmall();
			CONSTR.initialize.stickyFooter();
			CONSTR.portfolio.gridInit( $gridContainer );
			CONSTR.portfolio.filterInit();
			CONSTR.portfolio.shuffleInit();
			CONSTR.portfolio.arrange();
			CONSTR.portfolio.portfolioDescMargin();
			CONSTR.widget.parallax();
			CONSTR.widget.loadFlexSlider();
			CONSTR.widget.html5Video();
			CONSTR.widget.masonryThumbs();
			CONSTR.header.topsocial();
			CONSTR.header.responsiveMenuClass();
			CONSTR.initialize.modal();
			*/
		}
	};

	CONSTR.isMobile = {
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
			return (CONSTR.isMobile.Android() || CONSTR.isMobile.BlackBerry() || CONSTR.isMobile.iOS() || CONSTR.isMobile.Opera() || CONSTR.isMobile.Windows());
		}
	};

	CONSTR.documentOnResize = {

		init: function() {
			/*
			var t = setTimeout( function(){
				CONSTR.header.topsocial();
				CONSTR.header.fullWidthMenu();
				CONSTR.header.overlayMenu();
				CONSTR.initialize.fullScreen();
				CONSTR.initialize.verticalMiddle();
				CONSTR.initialize.maxHeight();
				CONSTR.initialize.testimonialsGrid();
				CONSTR.initialize.stickyFooter();
				CONSTR.slider.sliderParallaxDimensions();
				CONSTR.slider.captionPosition();
				CONSTR.portfolio.arrange();
				CONSTR.portfolio.portfolioDescMargin();
				CONSTR.widget.tabsResponsiveResize();
				CONSTR.widget.tabsJustify();
				CONSTR.widget.html5Video();
				CONSTR.widget.masonryThumbs();
				CONSTR.initialize.dataResponsiveClasses();
				CONSTR.initialize.dataResponsiveHeights();
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
    
    CONSTR.documentOnScroll = {
        
        init: function() {
            
            CONSTR.documentOnScroll.windowscroll();
        },

        windowscroll: function() {
            var screen = $window.scrollTop();
            if(screen >= $header.height()) {
                $header.find('.navbar-brand').addClass('small');
                $header.find('.iot-navbar-main').removeClass('py-2').addClass('py-0 small');
            } else {
                $header.find('.navbar-brand').removeClass('small');
                $header.find('.iot-navbar-main').addClass('py-2').removeClass('py-0 small');
            }
        }
    };

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#iot-header'),
		//$headerWrap = $('#header-wrap'),
		$content = $('#content'),
		$footer = $('#footer'),
		windowWidth = $window.width(),
		$goToTopEl = $('#gotoTop');

	
	$(document).ready( CONSTR.documentOnReady.init );
	//$window.load( CONSTR.documentOnLoad.init );
    $window.on( 'resize', CONSTR.documentOnResize.init );
    $window.on( 'scroll', CONSTR.documentOnScroll.init );

})(jQuery);
