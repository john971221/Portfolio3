$.ajax({
    type: 'GET',
    url: '../data.json', //이동할 부분(데이터 얻어올 곳) //Spring에서는 controller로 연결
    datatype: 'json',
    success: function (json) { //data
        //alert("ajax success"); //꼭 확인해야 한다. 
        //alert("ajax success");
        //alert("json[0] version : " +json[0].version); //json에 있는 data 를 가져오는 것. 제일 첫 번째 데이터
        // alert("json[0] codename : " +json[0].codename);//키 값으로 값을 불러 오는 것!!!! version , codename 은 key값이다.

        //p태그에 올리기
        //    $("#demo").text(json[0].version + "  ");
        //    $("#demo").append(json[0].codename + "<br><br>");

        //for문으로 전체 출력

        /*li 6개당 한개의 컨텐츠박스로 묶는 과정
        if ((i % 5 == 0 && i != 0) || i == json.items.length - 1) {
            $('#Shop .container').append('<div class=Content_box><ul>' + content + '</ul></div>');
            content = '';
        };
        */
        var content = '';
        for (i = 0; i < json.contents.length; i++) {
            console.log(json.contents[0].name)
            content += "<article class='pages'><btn class='pages_back'><div class='circle'><span>Back</span></div></btn>";
            content += "<section class='screen'><img src='" + json.contents[i].banner + "'></section>";
            content += "<section class='txt'><h2><span>" + json.contents[i].number + json.contents[i].name + "</span></h2>";
            content += "<div class='detail'><p class='Sans'>" + json.contents[i].detail + "</p><a>Visit Site</a></div></section>";
            content += "<section class='full_cont'><div class='head_horse'><h2>" + json.contents[i].full_head + "</h2>";
            content += "<p>" + json.contents[i].full_detail + "</p></div>";
            content += "<div class='slide_scr'><img><img><img></div>";
            //차후 이미지 생성시 json.content[i].imgs[]넣을것
            content += "<div class='slide_btn'><btn class='prev'>Prev</btn><p id='dt_name'>NAME</p><btn class='next'>Next</btn></div>"; //json.content[i].imgs_name[]도 넣을것
            content += "<div class='made_info made_info_1'>";
            content += "<p><span>Date<br></span>" + json.contents[i].date + "</p>";
            content += "<p><span>Client<br></span>" + json.contents[i].client + "</p>";
            content += "<p><span>Skills<br></span>" + json.contents[i].skills + "</p></div>";
            content += "<div class='made_info'>";
            content += "<p><span>RWD<br></span>" + json.contents[i].RWD + "</p>";
            content += "<p><span>Font<br></span><a class='" + json.contents[i].font_s + "'>" + json.contents[i].font + "</a></p>";
            content += "<p><span>Color<br></span><a>" + json.contents[i].color[0] + "</a><a style='background:" + json.contents[i].color[1] + "'>" + json.contents[i].color[1] + "</a>";
            content += "</p></div></section></article>";

            console.log(content)
        };
        $('#work').append(content);

        
        //스크린 클릭시 줌인
        $('.screen').on('click', function (el) {
            console.log(this)
            var work_calc = $(this).parent('.pages').offsetTop;
            console.log(work_calc) //빨리손봐야할거

            $('.pages').addClass('active');
            $('.pages .pages_back').fadeIn();
            $('html,body').addClass('scr_anchor');
            $(window).scrollTop(work_calc);
            $('.pages_back').on('click', function (el) {

                $('.pages').removeClass('active');
                $('html,body').removeClass('scr_anchor')
                $('.pages .pages_back').fadeOut()
                $('.pages').animate({
                    scrollTop: 0
                }, 00)
            })
        })
        
        //스크린 내부 이미지슬라이드
        var slide_imgs = document.querySelectorAll('.pages .slide_scr img');

        slide_imgs.forEach(function (el, idx) {
            el.style = "margin-left:" + idx * 100 + "%"
        })

        var slide_btn = document.querySelectorAll('.slide_btn btn');
        var limit_num = slide_imgs.length;
        console.log(limit_num)

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
        
        
        //스크린 클릭시 파랄랙스
       var work = document.querySelector('#work .pages');
        var f_cont = document.querySelector('#work .full_cont');

        work.addEventListener('scroll', function () {
            var work_pos = work.scrollTop;

            f_cont.style.top = work_pos * -1 + 'px';
        })
//        $('#work .pages').on('mousewheel',function(){
//            var work_pos = work.scrollTop;
//            console.log('ㅁ나양ㄹ허야허ㅚㅓㄴㅁㄹ')
//            $('#work .full_cont').css({
//                top: (work_pos * -1 )+ 'px'
//            })
//        })

        
        //컨텐츠 갯수에 맟춰 work페이지에서의 이동
        var pages_num = $('.main').length + $('#work .pages').length;
        var c_num = 0;
        var scrEvent = false;
        var non_scr = $('.pages');

        $('html,body').on('mousewheel', function (e) {

            var dir = e.originalEvent.deltaY;
            var vh = $('.main').height();
            console.log(vh)

            if (dir < 0 && scrEvent == false && c_num >= 1 && non_scr.attr('class') != 'pages active') {
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
            } else if (dir > 0 && scrEvent == false && c_num < pages_num && non_scr.attr('class') != 'pages active') {
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
        console.log(pages_num)

    },
    error: function () {
        alert("Tlqkf기술적☆오류☆발생!");
    }
});
