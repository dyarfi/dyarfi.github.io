$(document).ready(function() {
    // Get all nav tabs li
    var list = $( ".nav.nav-tabs li" );
    // Loop the tabs and find a to click function
    list.each(function( i ) {
        var ahref = list.find('a');            
        $(this).find('a').on('click',function () {
            // Remove all span class with fa class
            ahref.find('span.fa').removeClass('fa-beat');
            // Add fa-beat current clicked nav items
            $(this).find('span.fa').addClass('fa-beat');
        });
    })
    // Clicked the first nav automatically
    .find('a').eq(0).click();
});