(function ($) {
    $('.agr-testimonial-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items:1,
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,

    });
    $('.agr-offer-area-slide').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items:4,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        // navText: ['<i class="fa-solid fa-circle-arrow-left"></i>','<i class="fa-solid fa-circle-arrow-right"></i>'],

    });


})(jQuery);