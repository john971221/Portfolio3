window.addEventListener('DOMContentLoaded', function () {
    var p1 = document.querySelector('.p1');

    window.addEventListener('scroll', function () {
        var win_pos = window.scrollY;
        p1.style.top = win_pos * 0.3 + 'px';
    })

    var about = document.querySelector('#about');
    var about_height = document.querySelector('#about .about_1');
    var bs_p = document.querySelectorAll('.basic_info p');
    var sk_p = document.querySelectorAll('.skill_info p');
    var sk_h = document.querySelectorAll('.skill_info h3');

    function sh1t(random,xy) {
        random.forEach(function (el, idx) {
            el.style.transform = 'translate'+xy+'(0%)'
        })
    }

    window.addEventListener('scroll', function () {
        var X = 'X';
        var Y = 'Y'; 
        console.log(window.scrollY);
        if (window.scrollY >= about_height.offsetHeight) {
            sh1t(bs_p,Y)
        }
        if (window.scrollY >= about_height.offsetHeight*2) {
            sh1t(sk_p,X);
            sh1t(sk_h,X);
        }
    })
})
