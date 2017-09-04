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
    if ( $(document).innerWidth() <= 624 ) {
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

    //home news slider
    var swiper = new Swiper('.home-news-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 1,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 0
    });

    //home events slider
    var swiper = new Swiper('.home-events-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        slidesPerView: 1,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 0
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
    if ( $(document).innerWidth() <= 1244 ) {
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

    //content list
    $('.content-list-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.content-list').toggleClass('open');
    });

    //------------------------------------------------------------------------//

    //home slider
    var swiper = new Swiper('.home-hero-slider', {
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        centeredSlides: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            var zero = '';
            if ( index + 1 <= 9 ) {
                zero = 0;
            }
            return '<span class="' + className + '">'+ zero + (index + 1) + '</span>';
        }
    });

    //------------------------------------------------------------------------//

    //datepicker
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("#datepicker").datepicker({
        showOtherMonths: true
    });

    $("#datepicker").datepicker("setDate", new Date());
    if ( $("#datepicker").length ) {
        dateSplit();
    }

    function dateSplit() {
        var arrValue = $('#datepicker').val().split('.');
        $('.new-event-date-day').text(arrValue[0]);
        $('.new-event-date-month').text(arrValue[1]);
    }

    $('#datepicker').on('change', function(event) {
        dateSplit();
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