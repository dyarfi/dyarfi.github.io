var $ = jQuery.noConflict();
var IOTAGENT = IOTAGENT || {};

(function($){

	"use strict";

	IOTAGENT.initialize = {

		init: function(){

			IOTAGENT.initialize.responsiveClasses();		
            IOTAGENT.initialize.holderThumb();
			IOTAGENT.initialize.formAccountToggle();	
			IOTAGENT.initialize.carouselInit();
			IOTAGENT.initialize.preLoader();
			IOTAGENT.initialize.searchForm();
			// IOTAGENT.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			// IOTAGENT.initialize.stickyElements();
			// IOTAGENT.initialize.goToTop();
			// IOTAGENT.initialize.lazyLoad();
			// IOTAGENT.initialize.fullScreen();
			// IOTAGENT.initialize.verticalMiddle();
			// IOTAGENT.initialize.lightbox();
			// IOTAGENT.initialize.resizeVideos();
			// IOTAGENT.initialize.imageFade();
			// IOTAGENT.initialize.pageTransition();
			// IOTAGENT.initialize.dataResponsiveClasses();
			// IOTAGENT.initialize.dataResponsiveHeights();
			// IOTAGENT.initialize.iasContent();
			// IOTAGENT.initialize.pageContent();
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
                        
            // $('.account-link-holder a').click(function() {
                // console.log($(this).offsetParent().html());
            // });
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
			$("#loading-animation").fadeOut();
			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(600).fadeOut("slow");
		},

		searchForm:function() {
			/* Search Form */
			$('a.search-link').click(function() {
				$('#iot-search-form').toggleClass('d-none fixed-top').find('input[type=text]').focus();
			});
		}
	};

	IOTAGENT.documentOnReady = {

		init: function(){
			IOTAGENT.initialize.init();
			//IOTAGENT.header.init();
			//IOTAGENT.documentOnReady.windowscroll();
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

			IOTAGENT.header.stickyMenu( headerWrapOffset );
			IOTAGENT.header.stickyPageMenu( pageMenuOffset );

			$window.on( 'scroll', function(){

				IOTAGENT.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				IOTAGENT.header.stickyMenu( headerWrapOffset );
				IOTAGENT.header.stickyPageMenu( pageMenuOffset );
				IOTAGENT.header.logo();

			});

			window.addEventListener('scroll', onScrollSliderParallax, false);

			if( $onePageMenuEl.length > 0 ){
				if( $().scrolled ) {
					$window.scrolled(function() {
						IOTAGENT.header.onepageScroller();
					});
				} else {
					console.log('windowscroll: Scrolled Function not defined.');
				}
			}
			*/
		}
	};

	IOTAGENT.documentOnLoad = {

		init: function() {
			/*
			IOTAGENT.slider.captionPosition();
			IOTAGENT.slider.swiperSliderMenu(true);
			IOTAGENT.slider.revolutionSliderMenu(true);
			IOTAGENT.initialize.maxHeight();
			IOTAGENT.initialize.testimonialsGrid();
			IOTAGENT.initialize.verticalMiddle();
			IOTAGENT.initialize.stickFooterOnSmall();
			IOTAGENT.initialize.stickyFooter();
			IOTAGENT.portfolio.gridInit( $gridContainer );
			IOTAGENT.portfolio.filterInit();
			IOTAGENT.portfolio.shuffleInit();
			IOTAGENT.portfolio.arrange();
			IOTAGENT.portfolio.portfolioDescMargin();
			IOTAGENT.widget.parallax();
			IOTAGENT.widget.loadFlexSlider();
			IOTAGENT.widget.html5Video();
			IOTAGENT.widget.masonryThumbs();
			IOTAGENT.header.topsocial();
			IOTAGENT.header.responsiveMenuClass();
			IOTAGENT.initialize.modal();
			*/
		}
	};

	IOTAGENT.isMobile = {
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
			return (IOTAGENT.isMobile.Android() || IOTAGENT.isMobile.BlackBerry() || IOTAGENT.isMobile.iOS() || IOTAGENT.isMobile.Opera() || IOTAGENT.isMobile.Windows());
		}
	};

	IOTAGENT.documentOnResize = {

		init: function() {
			/*
			var t = setTimeout( function(){
				IOTAGENT.header.topsocial();
				IOTAGENT.header.fullWidthMenu();
				IOTAGENT.header.overlayMenu();
				IOTAGENT.initialize.fullScreen();
				IOTAGENT.initialize.verticalMiddle();
				IOTAGENT.initialize.maxHeight();
				IOTAGENT.initialize.testimonialsGrid();
				IOTAGENT.initialize.stickyFooter();
				IOTAGENT.slider.sliderParallaxDimensions();
				IOTAGENT.slider.captionPosition();
				IOTAGENT.portfolio.arrange();
				IOTAGENT.portfolio.portfolioDescMargin();
				IOTAGENT.widget.tabsResponsiveResize();
				IOTAGENT.widget.tabsJustify();
				IOTAGENT.widget.html5Video();
				IOTAGENT.widget.masonryThumbs();
				IOTAGENT.initialize.dataResponsiveClasses();
				IOTAGENT.initialize.dataResponsiveHeights();
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
    
    IOTAGENT.documentOnScroll = {
        
        init: function() {
            
            IOTAGENT.documentOnScroll.windowscroll();
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

	
	$(document).ready( IOTAGENT.documentOnReady.init );
	//$window.load( IOTAGENT.documentOnLoad.init );
    $window.on( 'resize', IOTAGENT.documentOnResize.init );
    $window.on( 'scroll', IOTAGENT.documentOnScroll.init );

})(jQuery);
