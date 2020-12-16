window.addEventListener('DOMContentLoaded', function () {
    $('#menu').on('click', function () {
        el = $('#full_menu');

        if (el.attr('class') == 'active') {
            el.removeClass('active');
            el.addClass('active_2');
            setTimeout(function () {
                el.removeClass('active_2');
            }, 500);
        } else {
            el.addClass('active');
            el.removeClass('active_2');
        };


    })

})
