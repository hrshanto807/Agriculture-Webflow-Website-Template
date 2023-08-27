(function ($) {
    jQuery('#icon').click(function () {
        jQuery('.agr-primary-menu ul').slideToggle();

    });
    jQuery(window).resize(function () {
        let windowSize = jQuery(window).width();
        if (windowSize > 768) {
            jQuery('.agr-primary-menu ul').removeAttr('style');
        }
    });
    $('.agr-testimonial-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,

    });
    $('.agr-offer-area-slide').owlCarousel({        
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                
            },
            600: {
                items: 2,
                nav: true,                
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            },
           
        }

        // navText: ['<i class="fa-solid fa-circle-arrow-left"></i>','<i class="fa-solid fa-circle-arrow-right"></i>'],

    });



})(jQuery);