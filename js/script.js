$(document).ready(function(){

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//

    //menu
    $(document).on('click', 'html:not(".menu-open-hide") .menu-toggle', function(event) {
        event.preventDefault();
        $('html').addClass('menu-open');
    });

    $('.menu-close, .menu-block-wrap').on('click', function(event) {
        event.preventDefault();
        $('html').addClass('menu-open-hide').removeClass('menu-open');
        setTimeout(function(){
            $('html').removeClass('menu-open-hide');
        }, 290);
    });

    //------------------------------------------------------------------------//

     //fullScreen
    $('.fullScreen').fullScreen({minus: 200});

    //------------------------------------------------------------------------//

    //articles slider
    var swiper = new Swiper('.articles-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
            1259: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15
            }
          }
    });

    //------------------------------------------------------------------------//

    //event other slider
    var swiper = new Swiper('.event-other-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
            1259: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15
            }
          }
    });

    //------------------------------------------------------------------------//

});//document ready

//*********************************************************************//

$(window).load(function() {

    //load
    $('body').addClass('doc-loaded');

    //------------------------------------------------------------------------//

});//window load

//*********************************************************************//

$(window).resize(function() {

    //resize

});//window resize