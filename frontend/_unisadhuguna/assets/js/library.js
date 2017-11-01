// JavaScript Document
$(document).ready(function(){	
	// Set pngfix
	$(document).pngFix();
	
	$("body").queryLoader2({
        barColor: "#fff",
        backgroundColor: "#fff",
        percentage: false,
        barHeight: 0,
        completeAnimation: "grow",
		onComplete: function () {
			//$('#qLoverlay').html('<img id="preloder" src="assets/img/status.gif"/>');
			//alert('asdf');
			//alert('asdf');
		}//,
		//onLoadComplete: function () {
			//$('#qLoverlay').empty();
			//alert('asdf');
		//}
    });

});