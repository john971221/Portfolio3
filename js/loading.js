window.addEventListener('DOMContentLoaded', function () {
    var loadfonts = document.querySelectorAll('#loading1 h2');
    var lf = [loadfonts[0],loadfonts[1],loadfonts[2],loadfonts[3]]

    setTimeout(function(){
        $(lf).eq(0).addClass('active');
    },00)
        setTimeout(function(){
        $(lf).eq(0).removeClass('active');
    },190)
    setTimeout(function(){
        $(lf).eq(1).addClass('active')
        $('#loading').css({
            background:'#fff'
        })
    },500)
        setTimeout(function(){
        $(lf).eq(1).removeClass('active');
    },700)
    setTimeout(function(){
        $(lf).eq(2).addClass('active');
                $('#loading').css({
            background:'#000'
        })
    },1000)
    setTimeout(function(){
        $(lf).eq(2).removeClass('active');
    },1200)
    setTimeout(function(){
        $(lf).eq(3).css({
            transform:'translateY(0)'
        })
    },1500)
    setTimeout(function(){
        $(lf).eq(3).css({
            transform:'translateY(-110%)'
        })
    },2200)
    setTimeout(function(){
        $('#loading').fadeOut()
        
    },2800)
    
    
})
