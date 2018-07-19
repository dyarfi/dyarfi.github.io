// Set jQuery
const $ = jQuery;
// const $body = $('body');
// console.log(owlCarousel);
const APPSCRIPT = APPSCRIPT || {};

(function($){

    "use strict";

    APPSCRIPT.initialize = {

        init: function(){
            APPSCRIPT.initialize.responsiveClasses();
            APPSCRIPT.initialize.preloaderHandler();
            APPSCRIPT.initialize.holderThumb();
            APPSCRIPT.initialize.owlCarousel();
            APPSCRIPT.initialize.baguetteBoxes();
            APPSCRIPT.initialize.wayPoints();
            APPSCRIPT.initialize.headerFooter();
        },

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
        preloaderHandler : function() {
            // ==============================================
            // Preloader
            // ==============================================
            // Will first fade out the loading animation
            // $("#loading-animation").fadeOut();
            // Will fade out the whole DIV that covers the website.
            // console.log($("#preloader"));
            // console.log($body);
            if ($body.hasClass('preloader')) {
                // $body.css({'overflow-y':'hidden'});
                setInterval(function(){
                    return $body.delay(800).css({'overflow-y':'auto'}).removeClass('preloader');
                },999);
                $("#preloader").delay(600).fadeOut("slow");
            }
        },
        holderThumb: function() {
            // console.log(Holder);
            Holder.addTheme('thumb', {
                bg: '#55595c',
                fg: '#eceeef',
                text: 'Thumbnail'
            });
        },
        owlCarousel : function() {
            // Index testimonial carousel
            $('.owl-carousel.testimonial').owlCarousel({
                items:1,
                lazyLoad:true,
                loop:true,
                margin:10,
                lazyLoad:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
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
        // baguetteBoxes : function () {
            // baguetteBox.run('.tz-gallery',{animation:'fadeIn'});
            // baguetteBox.run('.mg-gallery',{animation:'fadeIn'});            
        // },
        wayPoints : function() {
            var waypoints = $('.waypoint-handler').waypoint(function(direction) {
                // Add Loader
                this.element.innerHTML = '<div class="spinner scaleout"></div>';
                // Get Column
                var columns = $('.card-columns');
                if (columns.hasClass('json-end') == false) {
                    columns.addClass('json-end');
                    setTimeout(function(){ 
                        $.getJSON('assets/json/wearable.json', function (items, status) {
                            if (status == "success") {
                                var html = '';
                                $.each(items, function(i,item) {
                                    html += '<div class="card"><img class="card-img-top img-fluid ilist-c" src="assets/img/'+item.image+'" data-src="holder.js/227x160/auto" alt="Card image cap">';
                                    html += '<div class="card-body">';
                                    html += '<h5 class="card-title">'+item.title+'</h5>';
                                    html += '<p class="card-text">'+item.description+'</p><ul class="list-inline">';                        
                                    html += '<li class="list-inline-item"><a href="" class="list-item"><span class="fa fa-tag"></span> '+item.category+'</a></li>';
                                    html += '<li class="list-inline-item"><a href="" class="list-item"><span class="fa fa-money-bill-alt"></span> $ '+item.price+'</a></li>';
                                    html += '<li class="list-inline-item"><a href="'+item.link+'" class="list-item" target="_blank"><span class="fa fa-cart-plus"></span> Buy</a></li>';                                    
                                    html += '</ul></div></div>';
                                });
                                setTimeout(function(){
                                    columns.append(html);
                                }, 1000);
                            }               
                        });
                    }, 1500);
                } else {
                    this.element.innerHTML = '-- already reach the end --';
                }
            
            },{
                offset:"75%"
            });
        },
        headerFooter: function() {
            var animEndEventNames = {
                'WebkitAnimation' : 'webkitAnimationEnd',
                'OAnimation' : 'oAnimationEnd',
                'msAnimation' : 'MSAnimationEnd',
                'animation' : 'animationend'
            },
            // animation end event name
            animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
            // support css animations
            support = Modernizr.cssanimations;
            //$(this).on('focus',function(){
            $('#section-nav').addClass('pt-page-moveFromTop pt-page-delay1000').on(animEndEventName,function(){
                $(this).off(animEndEventName);
            });
            // $('#footer').addClass('pt-page-moveFromBottom pt-page-delay1000').on(animEndEventName,function(){
            //     $(this).off(animEndEventName);
            // });
            $('#cookiesCollapse').addClass('pt-page-moveFromBottom pt-page-delay1000').on(animEndEventName,function(){
                $(this).off(animEndEventName);
            });
        }
    };

    APPSCRIPT.documentOnReady = {
        init: function(){
            APPSCRIPT.initialize.init();
            //APPSCRIPT.header.init();
            //APPSCRIPT.documentOnReady.windowscroll();
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
        
        // var t = setTimeout( function(){
        //     PROPARC.header.topsocial();
        //     PROPARC.header.fullWidthMenu();
        //     PROPARC.header.overlayMenu();
        //     PROPARC.initialize.fullScreen();
        //     PROPARC.initialize.verticalMiddle();
        //     PROPARC.initialize.maxHeight();
        //     PROPARC.initialize.testimonialsGrid();
        //     PROPARC.initialize.stickyFooter();
        //     PROPARC.slider.sliderParallaxDimensions();
        //     PROPARC.slider.captionPosition();
        //     PROPARC.portfolio.arrange();
        //     PROPARC.portfolio.portfolioDescMargin();
        //     PROPARC.widget.tabsResponsiveResize();
        //     PROPARC.widget.tabsJustify();
        //     PROPARC.widget.html5Video();
        //     PROPARC.widget.masonryThumbs();
        //     PROPARC.initialize.dataResponsiveClasses();
        //     PROPARC.initialize.dataResponsiveHeights();
        //     if( $gridContainer.length > 0 ) {
        //     if( !$gridContainer.hasClass('.customjs') ) {
        //         if( $().isotope ) {
        //         $gridContainer.isotope('layout');
        //         } else {
        //         console.log('documentOnResize > init: Isotope not defined.');
        //         }
        //     }
        //     }
        //     if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
        //     $('#primary-menu').find('ul.mobile-primary-menu').removeClass('show');
        //     }
        // }, 500 );
        
        windowWidth = $window.width();

        }
    };

    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        //$headerWrap = $('#header-wrap'),
        //$content = $('#content'),
        //$footer = $('#footer'),
        windowWidth = $window.width();//,
        //$goToTopEl = $('#gotoTop');

    $(document).ready( APPSCRIPT.documentOnReady.init );
    //$window.load( PROPARC.documentOnLoad.init );
    $window.on( 'resize', APPSCRIPT.documentOnResize.init );

})(jQuery);
