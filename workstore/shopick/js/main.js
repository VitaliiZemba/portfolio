(function ($) {
 "use strict";

/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();

/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	

    /*--------------------------
        jQuery scroll Nav
    ---------------------------- */
    //var top_offset = $('.main-menu-area').height() - 0;  // get height of fixed navbar
    $('.primary-menu').onePageNav({
        scrollOffset: 60
    }); 
        

    /*---------------------
    TOP Menu Stick
    --------------------- 
    var s = $("#sticky-div");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });*/


/*--------------------------
    jQuery sticky
---------------------------- */

    $("#sticky-div").sticky({
        topSpacing: 0
    });



})(jQuery); 