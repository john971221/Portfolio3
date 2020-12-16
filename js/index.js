window.addEventListener('DOMContentLoaded', function () {
    window.onload = function(){
        setTimeout (function(){
            scrollTo(0,0);
        },100)
    }
    setTimeout(function loadfont(){
        
        $('.face_font h2 span').css({
            transform:'translateY(0%)'
        })
    },300)
    
    $('.screen').on('click', function (el) {
        $('.pages').addClass('active');
        $('.pages .pages_back').fadeIn();
        $('html,body').addClass('scr_anchor');
    })
    $('.pages_back').on('click', function (el) {
        $('.pages').removeClass('active');
        $('html,body').removeClass('scr_anchor')
        $('.pages .pages_back').fadeOut()
        $('.pages').animate({
            scrollTop: 0
        }, 00)
    })






    var slide_imgs = document.querySelectorAll('.slide_scr img');

    slide_imgs.forEach(function (el, idx) {
        el.style = "margin-left:" + idx * 100 + "%"
    })

    var slide_btn = document.querySelectorAll('.slide_btn btn');
    var limit_num = slide_imgs.length;

    num = 0;
    $('.slide_btn btn').on('click', function () {

        if (this.getAttribute('class') == 'next' && num < (limit_num - 1)) {
            num += 1;
        } else if (this.getAttribute('class') == 'prev' && num > 0) {
            num -= 1;
        } else if (this.getAttribute('class') == 'next' && num == (limit_num - 1)) {
            num = 0;
        } else if (this.getAttribute('class') == 'prev' && num == 0) {
            num = limit_num - 1;
        }
        console.log(num);
        $('.slide_scr img').css({
            transform: 'translateX(-' + 100 * num + '%)'
        })
    })


})
