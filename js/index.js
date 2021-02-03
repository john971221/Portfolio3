window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0);
    }, 100)
}
window.addEventListener('DOMContentLoaded', function () {
    var work = document.querySelector('#work');



    setTimeout(function loadfont() {
        $('.face_font h2 span').css({
            transform: 'translateY(0%)'
        })
    }, 2500)

    var p1 = document.querySelector('.p1');

        window.addEventListener('scroll', function () {
            var win_pos = window.scrollY;
            p1.style.top = win_pos * 0.4 + 'px';
        })

   

})
