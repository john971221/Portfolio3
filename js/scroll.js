window.addEventListener('DOMContentLoaded', function () {
    var p1 = document.querySelector('.p1');

    window.addEventListener('scroll', function () {
        var win_pos = window.scrollY;
        p1.style.top = win_pos * 0.3 + 'px';
    })

    var work = document.querySelector('#work .pages');
    var f_cont = document.querySelector('#work .full_cont');

    work.addEventListener('scroll', function () {
        var work_pos = work.scrollTop;
        
        f_cont.style.top = work_pos * -1 + 'px';
    })

})
