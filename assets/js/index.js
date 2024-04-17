;(function($) {
    "use strict"; 

    // sticky header js
    window.onscroll = function () {
        var header = document.querySelector("header");
        if (window.pageYOffset > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
    
    // mobile menu js
    $('.mobile-menu-opner').on('click', function(){
        $('.overlay, .main-menu-wrapper').addClass('active');
    });
    $('.mobile-menu-closer, .overlay').on('click', function(){
        $('.overlay, .main-menu-wrapper').removeClass('active');
    });

    
 
    
})(jQuery);