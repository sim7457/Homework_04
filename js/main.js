$(function () {


    $('.scroll-down i').on('click', function () {
        var sct = $('.main_slick').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    });

    var carName = ['AVENTADOR', 'URUS', 'HURACÁN', 'AVENTADOR', 'URUS', 'HURACÁN']
    var carName02 = ['REAL EMOTIONS SHAPE THE FUTURE', 'UNLOCK ANY ROAD', 'BEYOND THE CONCRETE', 'REAL EMOTIONS SHAPE THE FUTURE', 'UNLOCK ANY ROAD', 'BEYOND THE CONCRETE']

    $('.main_slick .inner').on('init reInit afterChange', function (e, s, c) {
        $('.main_slick .inner figure').eq(c + 5).addClass('on').siblings().removeClass('on')
        $('.carName').text(carName[c]);
        $('.carName02').text(carName02[c]);
    })

    $('.main_slick .inner').slick({
        slidesToShow: 3,
        speed: 600,
        variableWidth: true,
    });
    $('.content_row .inner').slick({
        fade: true,
    });

    $('.footer .right').on('click', function () {
        var sct = $('.header').offset().top;
        console.log(sct)
        $('html,body').animate({ scrollTop: 0 }, 600)
    })
})