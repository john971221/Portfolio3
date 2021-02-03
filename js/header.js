window.addEventListener('DOMContentLoaded', function () {

    var bar = $('header #menu span');
    console.log()


    $('#menu').on('click', function () {
        el = $('#full_menu');

        if (el.attr('class') == 'active') {
            el.removeClass('active');
            el.addClass('active_2');
            setTimeout(function () {
                el.removeClass('active_2');
            }, 500);
            bar[0].style.transform = 'translateX(0%)';
            bar[2].style.left = '40px';
            setTimeout(function () {
                bar[1].style.transform = 'translateX(0%)';
                bar[3].style.left = '40px';
            }, 200)
        } else {
            bar[0].style.transform = 'translateX(-200%)';
            bar[2].style.left = '0px';
            setTimeout(function () {
                bar[1].style.transform = 'translateX(-200%)';
                bar[3].style.left = '0px';
            }, 200)
            el.addClass('active');
            el.removeClass('active_2');
        };


    })

})
