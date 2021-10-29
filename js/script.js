$("document").ready(function ($) {

    $(".hero-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        loop: true,
        draggable: false,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});

$("document").ready(function ($) {

    $(".history-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        loop: true,
        draggable: true,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});

$('.counter').counterUp({
    delay: 10,
    time: 5000
});

$("document").ready(function ($) {

    $(".testimonial-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        loop: true,
        draggable: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }


        ]
    });
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});