if ($(window).width() > 750) {
    $('body').each(function() {
        'use strict';
        var link = $(`<div class="option"><div class="option-switcher "><div class="option-switcher-btn icon-option"><i class="fas fa-cog"></i></div><div class="themes-dropdown"><div class="dropdown"><a class="btn dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Premium Themes<span class="badge badge-warning">categories</span></a><div class="dropdown-menu" id="ajaxContent" aria-labelledby="dropdownMenuLink"></div></div></div><div class="option-swticher-header"><div class="option-switcher-heading">Theme Option</div></div><div class="option-swticher-body"><span class="subtitle">Color Options</span><ul class="list-unstyled color-options"><li class="theme-default theme-active"data-color="default"></li><li class="theme-color1" data-color="theme_alt1"></li><li class="theme-color2" data-color="theme_alt2"></li><li class="theme-color3" data-color="theme_alt3"></li><li class="theme-color4" data-color="theme_alt4"></li></ul><span class="subtitle">Layout Options</span><div class="no-col-space layoutStyle"><a href="javascript:void(0);"class="btn-u active-switcher-btn wide-layout-btn">Wide</a><a href="javascript:void(0);"class="btn-u boxed-layout-btn">Boxed</a></div><div class="bg-patern"><h3>Background pattern</h3><ul class="list-unstyled"><li class="pattern-default pattern-active"></li><li class="pattern1"></li><li class="pattern2"></li><li class="pattern3"></li><li class="pattern4"></li><li class="pattern5"></li><li class="pattern6"></li><li class="pattern7"></li></ul></div><span class="subtitle">Header Styles</span><div class="no-col-space"><a href="javascript:void(0);"class="btn-u static-header">Static</a><a href="javascript:void(0);"class="btn-u fixed-header">Fixed</a></div><a href="https://goo.gl/DPjZnJ"class="btn-purchase"><i class="fa fa-shopping-cart"></i>Buy This Theme</a></div></div></div>`);
        $('body').prepend(link);
    });
    $(window).on('load', function() {
        'use strict';
        var url = 'http://themes.iamabdus.com/options/data.json';
        var dataformat = {
            format: 'json'
        };

        function getContent(data) {
            var htmlString = '';
            var promo = '';
            $.each(data, function(key, value) {
                $.each(value.themes, function(k, val) {
                    htmlString += '<a class="dropdown-item" href="' + val.link + '" target="_blank">' + val.title + ' <span class="badge badge-category">' + val.category + '</span>';
                    htmlString += '<div class="project-promo">';
                    htmlString += '<img class="img-full" src="' + val.thumbnail + '" alt="project">';
                    htmlString += '</div>';
                    htmlString += '</a>';
                });
                $.each(value.advertisement, function(k, v) {
                    promo += '<a href="' + v.link + '">';
                    promo += '<img class="card-img" src="' + v.image + '" alt="' + v.title + '">';
                    promo += '</a>';
                });
            });
            $('#ajaxContent').append(htmlString);
            $('#adv').append(promo);
        }
        //$.getJSON(url, dataformat, getContent);
    });
}
var panel = $('.option-switcher');
$('.option-switcher-btn').on('click', function() {
    'use strict';
    //$(this).toggleClass('cross');
    $(this).find('.fa-cog').toggleClass('fa-spin text-muted');
    $('.option-switcher').toggleClass('option-visible');
});
$('.color-options li').click(function() {
    'use strict';
    var color = $(this).attr('data-color');
    setColor(color);
    $('.color-options li').removeClass('theme-active');
    $(this).addClass('theme-active');
});
var setColor = function(color) {
    'use strict';
    $('#option_color').attr('href', 'assets/css/' + color + '.css');
}
var boxed = $('.boxed-layout-btn');
var wide = $('.wide-layout-btn');
if ($('body').hasClass('boxed container')) {
    boxed.addClass('active-switcher-btn');
    $('.bg-patern').css({
        'display': 'block'
    });
    wide.removeClass('active-switcher-btn');
} else {
    boxed.removeClass('active-switcher-btn');
    $('.bg-patern').css({
        'display': 'none'
    });
    wide.addClass('active-switcher-btn');
}
$('.boxed-layout-btn').click(function() {
    $(this).addClass("active-switcher-btn");
    $(".wide-layout-btn").removeClass("active-switcher-btn");
    //$("body").addClass("bodyColor wrapper default");
    $('#wrapper').addClass('container');    
    $(".bg-patern").css({
        "display": "block"
    });
});
$('.wide-layout-btn').click(function() {
    $(this).addClass("active-switcher-btn");
    $(".boxed-layout-btn").removeClass("active-switcher-btn");
    //$("body").removeClass("bodyColor wrapper default");
    $('#wrapper').removeClass('container');        
    $(".bg-patern").css({
        "display": "none"
    });
});
$('.bg-patern li.pattern-default').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern-default").addClass("pattern-active");
    $("body").addClass("default").removeClass("pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07");
});
$('.bg-patern li.pattern1').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern1").addClass("pattern-active");
    $("body").addClass("pattern-01").removeClass("default pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07");
});
$('.bg-patern li.pattern2').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern2").addClass("pattern-active");
    $("body").addClass("pattern-02").removeClass("default pattern-01 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07");
});
$('.bg-patern li.pattern3').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern3").addClass("pattern-active");
    $("body").addClass("pattern-03").removeClass("default pattern-01 pattern-02 pattern-04 pattern-05 pattern-06 pattern-07");
});
$('.bg-patern li.pattern4').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern4").addClass("pattern-active");
    $("body").addClass("pattern-04").removeClass("default pattern-01 pattern-02 pattern-03 pattern-05 pattern-06 pattern-07");
});
$('.bg-patern li.pattern5').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern5").addClass("pattern-active");
    $("body").addClass("pattern-05").removeClass("default pattern-01 pattern-02 pattern-03 pattern-04 pattern-06 pattern-07");
});
$('.bg-patern li.pattern6').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern6").addClass("pattern-active");
    $("body").addClass("pattern-06").removeClass("default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-07");
});
$('.bg-patern li.pattern7').click(function() {
    $('.bg-patern li').removeClass("pattern-active");
    $(".bg-patern li.pattern7").addClass("pattern-active");
    $("body").addClass("pattern-07").removeClass("default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06");
});
var fixed = $('.fixed-header');
var stat = $('.static-header');
if ($('body').hasClass('static')) {
    fixed.removeClass('active-switcher-btn');
    stat.addClass('active-switcher-btn');
} else {
    stat.removeClass('active-switcher-btn');
    fixed.addClass('active-switcher-btn ');
}
$('.fixed-header').click(function() {
    'use strict';
    $(this).addClass('active-switcher-btn');
    $('.static-header').removeClass('active-switcher-btn');
    //$('body').removeClass('static');
    $('#iot-header').removeClass('static-top').addClass('fixed-top');
    $('#wrapper').removeClass('static');
});
$('.static-header').click(function() {
    'use strict';
    $(this).addClass('active-switcher-btn');
    $('.fixed-header').removeClass('active-switcher-btn');
    //$('body').addClass('static');
    $('#iot-header').removeClass('fixed-top').addClass('static-top');
    $('#wrapper').addClass('static');
});
var desktop = $('.preview-desktop');
var mobile = $('.preview-mobile');
/*
if ($('html').hasClass('pmobile')) {
    desktop.removeClass('active-switcher-btn');
    mobile.addClass('active-switcher-btn');
} else {
    desktop.addClass('active-switcher-btn');
    mobile.removeClass('active-switcher-btn');
}
*/
desktop.click(function () {
    //'use strict';
    $(this).addClass('active-switcher-btn');
    mobile.removeClass('active-switcher-btn');
    $('html').removeClass('pmobile');
    
});
mobile.click(function () {
    //'use strict';
    $(this).addClass('active-switcher-btn');
    desktop.removeClass('active-switcher-btn');
    $('html').addClass('pmobile');
});