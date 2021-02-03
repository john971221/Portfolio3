window.addEventListener('DOMContentLoaded', function () {
    var p1 = document.querySelector('.p1');

    window.addEventListener('scroll', function () {
        var win_pos = window.scrollY;
        p1.style.top = win_pos * 0.35 + 'px';
        p1.style.transition = '0s'
    })


    var pages_num = $('#about>article').length;
    var c_num = 0;
    var scrEvent = false;
    console.log(pages_num)

    $('html,body').on('mousewheel', function (e) {

        var dir = e.originalEvent.deltaY;
        var vh = $('.about_1').height();
        console.log('a')

        if (dir < 0 && scrEvent == false && c_num >= 1) {
            console.log(c_num);
            scrEvent = true;
            c_num--;
            $('html,body').stop().animate({
                scrollTop: vh * c_num
            }, {
                duration: 100,
                complete: function () {
                    scrEvent = false;
                }
            });
        } else if (dir > 0 && scrEvent == false && c_num < pages_num) {
            console.log(c_num);
            scrEvent = true;
            c_num++;
            $('html,body').stop().animate({
                scrollTop: vh * c_num
            }, {
                duration: 100,
                complete: function () {
                    scrEvent = false;
                }
            });
        }
    })
})
