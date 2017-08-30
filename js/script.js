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

     //centerModal
    function centerModal() {
        var modalName = $('.modal-center');
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        modalName.each(function() {
            var modalOuterWidth = $(this).outerWidth();
            var modalOuterHeight = $(this).outerHeight();
            $(this).css({
                margin: 0
            });
            if (windowHeight > modalOuterHeight) {
                $(this).css({
                    top: (windowHeight - modalOuterHeight) /2
                });
            } else {
               $(this).css({
                    top: 0
                });
            }
            if (windowWidth > modalOuterWidth) {
                $(this).css({
                    left: (windowWidth - modalOuterWidth) /2
                });
            } else {
               $(this).css({
                    left: 0
                });
            }
        });
    }
    $('[data-toggle="modal"]').on('click', function() {
        centerModal();
    });
    $(window).resize(function(){
        centerModal();
    });
    centerModal();

    //------------------------------------------------------------------------//

    //mask
    $('.mask-phone').mask("+7 (999) 999 99 99", {placeholder:"+7 (968) 123 45 67"});

    //------------------------------------------------------------------------//

    function refreshLang( value, parent ) {
        var langNum = value;
        var langText = '';
        switch(langNum) {
            case 2:
                langText = 'ЧИТАЮ И ПЕРЕВОЖУ СО СЛОВАРЕМ';
                break;
            case 3:
                langText = 'МОГУ ОТВЕЧАТЬ НА ПИСЬМА';
                break;
            case 4:
                langText = 'Я У МАМЫ МОЛОДЕЦ';
                break;
            case 5:
                langText = 'НЭЙТИВ СПИКЕР';
                break;
            default:
                langText = 'АЙ СПИК ФРОМ МАЙ ХАРТ';
        }
        $(parent).next('.registration-language-level-text').text(langText);
    }

    //language level
    $('.slider-level').each(function(index, el) {
        var thisElement = $(this);
        thisElement.slider({
            min: 1,
            max: 5,
            range: "min",
            step: 1,
            value: 3,
            change: function( event, ui ) {
                refreshLang(ui.value, ui.handle.parentElement);
            },
            slide: function( event, ui ) {
                refreshLang(ui.value, ui.handle.parentElement);
            },
            create: function( event, ui ) {
                refreshLang(3, thisElement);
            }
        });
    });

    $('.slider-level').eq(1).slider( 'value', 2 );


    //------------------------------------------------------------------------//

    //fancybox
    $("[data-fancybox]").fancybox({
        buttons: [
            'close'
        ],
        btnTpl: {
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close"></button>'
        },
        clickContent: function( current, event ) {
            return current.type === false;
        },
        iframe: {
            preload: false
        },
        transitionEffect: 'slide'
    });

    //------------------------------------------------------------------------//

    var initSlidesPerColumn = 2;
    if ( $(document).innerWidth() <= 639 ) {
        initSlidesPerColumn = 1;
    }

    //gallery slider
    var swiper = new Swiper('.gallery-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 3,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            639: {
                slidesPerView: 1
            }
        }
    });

    //------------------------------------------------------------------------//

    //gallery main slider
    var swiper = new Swiper('.gallery-main-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0
    });

    //------------------------------------------------------------------------//

    //gallery main albums
    var initSlidesPerColumnAlbums = 3;
    if ( $(document).innerWidth() <= 1259 ) {
        initSlidesPerColumnAlbums = 1;
    }

    var swiper = new Swiper('.gallery-main-albums-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 2,
        slidesPerColumn: initSlidesPerColumnAlbums,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            1259: {
                slidesPerView: 1
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15
            }
        }
    });

    //------------------------------------------------------------------------//

    //study video slider
    var swiper = new Swiper('.study-video-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0
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