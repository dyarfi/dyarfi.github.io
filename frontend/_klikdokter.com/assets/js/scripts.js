$(document).ready(function() {
	$('.tooltip_poll').tooltip({
//		html : 'html'
		trigger : 'hover'
	});
	$('.tooltip_ht').tooltip({
//		html : 'html'
		placement : 'top',
		trigger : 'hover'
	});
	//$('.tooltip_poll').hover();
	$('.mid-holder .thumbnail').hover(function(){
		$(this).find('.caption').animate({top:-70});
	},function(){
		$(this).find('.caption').animate({top:-50});
	});
});