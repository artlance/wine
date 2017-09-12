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

    //articles slider +
    var swiperArticles = new Swiper('.articles-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.articles-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.articles-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            1259: {
                slidesPerView: 3,
                spaceBetween: 30,
                paginationCustomRender: function (swiper, current, total) {
                    $('.articles-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.articles-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
                paginationCustomRender: function (swiper, current, total) {
                    $('.articles-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.articles-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15,
                paginationCustomRender: function (swiper, current, total) {
                    $('.articles-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.articles-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //------------------------------------------------------------------------//

    //event other slider +
    var swiperOther = new Swiper('.event-other-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.event-other-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.event-other-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            1259: {
                slidesPerView: 1,
                spaceBetween: 30,
                paginationCustomRender: function (swiper, current, total) {
                    $('.event-other-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.event-other-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15,
                paginationCustomRender: function (swiper, current, total) {
                    $('.event-other-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.event-other-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //------------------------------------------------------------------------//

    var initSlidesPerColumn = 2;
    if ( $(document).innerWidth() <= 624 ) {
        initSlidesPerColumn = 1;
    }

    if ( $('.gallery-slider .swiper-slide').length < 6 ) {
        initSlidesPerColumn = 1;
    }

    //gallery slider +
    var swiperGallery = new Swiper('.gallery-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 3,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 30,
        paginationCustomRender: function (swiper, current, total) {
            $('.gallery-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.gallery-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 15,
                paginationCustomRender: function (swiper, current, total) {
                    $('.gallery-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.gallery-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            639: {
                slidesPerView: 1,
                paginationCustomRender: function (swiper, current, total) {
                    $('.gallery-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.gallery-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //home news slider +
    var swiperNews = new Swiper('.home-news-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 1,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.home-news-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.home-news-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //home events slider +
    var swiperEvents = new Swiper('.home-events-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 1,
        slidesPerColumn: initSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.home-events-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.home-events-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //------------------------------------------------------------------------//

    //gallery main slider +
    var swiperMainGallery = new Swiper('.gallery-main-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.gallery-main-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.gallery-main-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //------------------------------------------------------------------------//

    //gallery main albums +
    var initSlidesPerColumnAlbums = 3;
    if ( $(document).innerWidth() <= 1244 ) {
        initSlidesPerColumnAlbums = 1;
    }

    if ( $('.gallery-main-albums-slider .swiper-slide').length < 8 ) {
        initSlidesPerColumnAlbums = 2;
    }
    if ( $('.gallery-main-albums-slider .swiper-slide').length < 4 ) {
        initSlidesPerColumnAlbums = 1;
    }

    var swiperAlbums = new Swiper('.gallery-main-albums-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 2,
        slidesPerColumn: initSlidesPerColumnAlbums,
        centeredSlides: false,
        spaceBetween: 30,
        paginationCustomRender: function (swiper, current, total) {
            $('.gallery-main-albums-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.gallery-main-albums-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            1259: {
                slidesPerView: 1,
                paginationCustomRender: function (swiper, current, total) {
                    $('.gallery-main-albums-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.gallery-main-albums-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 15,
                paginationCustomRender: function (swiper, current, total) {
                    $('.gallery-main-albums-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.gallery-main-albums-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //------------------------------------------------------------------------//

    //news main slider +
    var swiperNewsMain = new Swiper('.news-main-slider', {
        nextButton: '.news-main-next',
        prevButton: '.news-main-prev',
        pagination: '.news-main-navigation-info',
        paginationType: 'custom',
        slidesPerView: 1,
        slidesPerColumn: 5,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.news-main-navigation-wrapper').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.news-main-navigation-wrapper').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //------------------------------------------------------------------------//

    //study video slider +
    var swiperVideo = new Swiper('.study-video-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.study-video-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.study-video-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //------------------------------------------------------------------------//

    var soonSlidesPerColumn = 3;

    if ( $('.events-soon-slider .swiper-slide').length < 8 ) {
        soonSlidesPerColumn = 2;
    }
    if ( $('.events-soon-slider .swiper-slide').length < 4 ) {
        soonSlidesPerColumn = 1;
    }

    //events soon slider +
    var swiperSoon = new Swiper('.events-soon-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 2,
        slidesPerColumn: soonSlidesPerColumn,
        centeredSlides: false,
        spaceBetween: 30,
        paginationCustomRender: function (swiper, current, total) {
            $('.events-soon-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.events-soon-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            1259: {
                slidesPerView: 1,
                paginationCustomRender: function (swiper, current, total) {
                    $('.events-soon-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.events-soon-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //------------------------------------------------------------------------//

    //events calendar slider =
    var swiperCalendar = new Swiper('.events-calendar-slider', {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
            1259: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        }
    });

    if ( $(document).innerWidth() <= 752 ) {
        if ( $('.events-calendar-slider').length ) {
            swiperCalendar.removeSlide(0);
        }
    }

    //------------------------------------------------------------------------//

    //about slider +
    var swiperAbout = new Swiper('.about-slider', {
        nextButton: '.about-slider-wrapper .swiper-button-next',
        prevButton: '.about-slider-wrapper .swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 600,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        paginationCustomRender: function (swiper, current, total) {
            $('.about-slider-wrapper .swiper-button-next, .about-slider-wrapper .swiper-button-prev').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.about-slider-wrapper .swiper-button-next, .about-slider-wrapper .swiper-button-prev').removeClass('slider-nav-hidden');
            }
            return customPagination;
        }
    });

    //------------------------------------------------------------------------//

    //about purpose slider +
    var swiperPurpose = new Swiper('.about-purpose-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        slidesPerView: 3,
        slidesPerColumn: 2,
        centeredSlides: false,
        spaceBetween: 0,
        paginationCustomRender: function (swiper, current, total) {
            $('.about-purpose-slider .slider-nav').addClass('slider-nav-hidden');
            var customPagination = '';
            if ( total != 1 ) {
                customPagination = current + ' / ' + total;
                $('.about-purpose-slider .slider-nav').removeClass('slider-nav-hidden');
            }
            return customPagination;
        },
        breakpoints: {
            1259: {
                slidesPerView: 2,
                slidesPerColumn: 3,
                paginationCustomRender: function (swiper, current, total) {
                    $('.about-purpose-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.about-purpose-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            },
            639: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                paginationCustomRender: function (swiper, current, total) {
                    $('.about-purpose-slider .slider-nav').addClass('slider-nav-hidden');
                    var customPagination = '';
                    if ( total != 1 ) {
                        customPagination = current + ' / ' + total;
                        $('.about-purpose-slider .slider-nav').removeClass('slider-nav-hidden');
                    }
                    return customPagination;
                }
            }
        }
    });

    //------------------------------------------------------------------------//

    //about gallery =
    var swiperAboutGallery = new Swiper('.about-gallery', {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 0,
        breakpoints: {
            1259: {
                slidesPerView: 1
            }
        }
    });

    //------------------------------------------------------------------------//

    //home slider +
    var swiperHome = new Swiper('.home-hero-slider', {
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
            var paginationBulletResult = '';
            if ( !($('.home-hero-slider .swiper-slide').length == 1) ) {
                paginationBulletResult = '<span class="' + className + '">'+ zero + (index + 1) + '</span>';
            }
            return paginationBulletResult;
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
        minDate: 0,
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

    //content list
    $('.content-list-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.content-list').toggleClass('open');
    });

    //------------------------------------------------------------------------//

    //input file
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(input).next('label').css('background-image', 'url('+e.target.result+')');
                $(input).next('label').find('.new-event-photo-add').html('<span class="new-event-photo-add-ico"></span>Изменить&nbsp;фото мероприятия');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-mod").change(function(){
        readURL(this);
    });

    //------------------------------------------------------------------------//

    //input file avatar
    function readURLAvatar(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(input).next('label').find('.new-event-leader-photo-label-in').css('background-image', 'url('+e.target.result+')');
                $(input).next('label').find('.new-event-leader-photo-label-in').html('<span class="new-event-leader-photo-add"><span class="new-event-leader-photo-add-ico"></span>Изменить фото</span>');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-mod-avatar").change(function(){
        readURLAvatar(this);
    });

    //------------------------------------------------------------------------//

    //input file edit
    function readURLEdit(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.edit-photo-file-img').css('background-image', 'url('+e.target.result+')');
                $('.edit-photo').addClass('added');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.edit-photo-remove').on('click', function(event) {
        event.preventDefault();
        $('.edit-photo-file-img').css('background-image', '');
        $('.edit-photo').removeClass('added');
        $('.edit-photo-file-input').val(null);
    });

    $(document).on('change', '.edit-photo-file-input', function(event) {
        readURLEdit(this);
    });

    //------------------------------------------------------------------------//

    //input resume
    function readURLResume(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileName = $(input).val().split('\\').pop().split('/').pop();
                $('.edit-resume-file-label').text(fileName);
                $('.edit-resume').addClass('added');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.edit-resume-remove').on('click', function(event) {
        event.preventDefault();
        $('.edit-resume-file-label').text('');
        $('.edit-resume').removeClass('added');
        $('.edit-resume-file-input').val(null);
    });

    $(document).on('change', '.edit-resume-file-input', function(event) {
        readURLResume(this);
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