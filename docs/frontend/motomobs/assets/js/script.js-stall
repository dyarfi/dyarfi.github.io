$(document).ready(function() {			
    //$('.carousel').on('slide.bs.carousel', function () {
		//$(this).find('.carousel-caption').css({'bottom':'90px'});
		//$(this).fadeOut(250).fadeIn(250);
    //});
    baguetteBox.run('.tz-gallery',{animation:'fadeIn'});
/* ==============================================
    Preloader
    =============================================== */
    // Will first fade out the loading animation
    $("#loading-animation").fadeOut();
    // Will fade out the whole DIV that covers the website.
    $("#preloader").delay(600).fadeOut("slow");
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
        /*
        $('#navbarResponsive li.nav-item').each(function(e) {
            var $lics = $(this).parent().find('li');
            $(this).find('a.nav-link').on("click", function(evt) {
                evt.preventDefault();
                var $section = '#'+$(this).data('rel');
                var $li_curr = $(this).parent();
                var $ani_in  = $(this).data('animate-in');
                var $ani_out = $(this).data('animate-out');
                
                $lics.removeClass('active');
                $li_curr.addClass('active');

                // All Section
                $('.section').removeClass($ani_in + ' pt-page-delay300')
                .addClass( $ani_out + ' pt-page-delay300' )
                .on(animEndEventName,function(){
                    $(this).off(animEndEventName);
                });
                
                // Current Section
                $($section).css({
                    'visibility':'visible',
                    '-webkit-backface-visibility':'visible',
                    '-moz-backface-visibility':'visible',
                    'backface-visibility':'visible'
                }).removeClass($ani_out + ' pt-page-delay300')
                .addClass($ani_in + ' pt-page-delay300')
                .on(animEndEventName,function(){
                    $($section).off(animEndEventName);
                });
                //console.log($section);
                $('#overlay-navbar').removeClass('open').on(animEndEventName,function(){
                    $($section).off(animEndEventName);
                });
            });
        }).eq(0).find('a').click();
        */
    //});
    // $('.card-columns').masonry({
        // options
        // itemSelector: '.card'
    // });
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
                }, 3000);
            } else {
                this.element.innerHTML = '-- already reach the end --';
            }
          
        },{
            offset:"75%"
        });

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
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        // autoWidth:true,
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
    })
});