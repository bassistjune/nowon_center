(function() {
    // 메인슬라이드
    $('.main_slide').slick({
        arrows: false,
    });
    // 뉴스슬라이드
    $('.news_slide').slick({
        arrows: true, 
        speed: 300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                prevArrow : ".news-slick-prev",		
                nextArrow : ".news-slick-next",
              }
            }]
    });
    // 센터슬라이드
    $('.center_slide').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		
		nextArrow : "<button type='button' class='slick-next'>Next</button>",
        responsive: [
          {
            breakpoint: 1006,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      bannerSlide();
      function bannerSlide() {

        // 배너슬라이드
        $('.banner-slide').slick({
          
          dots: false,
          infinite: true,
          arrows: true,
          autoplay : true,
          autoplaySpeed: 1000,
          easing: 'linear',
          cssEase: 'linear',
          speed: 1000,
          slidesToShow: 6,
          slidesToScroll: 1,
          prevArrow : ".banner-slick-prev",		
          nextArrow : ".banner-slick-next",
          responsive: [
            {
              breakpoint: 1006,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        var sliderToggle = true;
        $('.slider-start_stop').on('click', function() {
          if(sliderToggle) {
            $('.banner-slide').slick('slickPause'); 
              $(this).text('자동재생').addClass('on');
          } else {
            $('.banner-slide').slick('slickPlay'); 
              $(this).text('일시정지').removeClass('on');
          }
          sliderToggle = !sliderToggle;
        });
      }
  
      

    $('#header .mobile_menu_list>ul>li>a').off().on('click', function() {
        $(this).parent().toggleClass('on').siblings('li').removeClass('on');
        $('.depth_2').hide();
        $(this).next('.depth_2').slideToggle();
    });

    $('#header .mobile_nav_btn').off().on('click', function() {
        $(this).toggleClass('on');
        $('#header .mobile_menu_list').slideToggle();
    });
    $('#container .news_wrap .news_inner').hide();
    $('#container .news_wrap .left_news .news_tab ul li a').on('click',function(e){
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
        
        var idx = $(this).parent().index();
        var newsInner = $('#container .news_wrap .news_inner');
       
        newsInner.eq(idx).show().siblings().hide();

    });
    $('#container .news_wrap .left_news .news_tab ul li').find('a').eq(1).trigger('click');

    $('#footer .family_site_wrap .family_site_list').hide();
    $('#footer .family_site_wrap .family_site button').off().on('click', function() {
      $(this).parent().toggleClass('active');
      $('#footer .family_site_wrap .family_site_list').slideToggle();
    });

    // 팝업
    popUp();

    function popUp() {
      $('.popup').hide();

      $('#footer .foot_menu li:first-child a').on('click', function() {
        $('.popup').show();
      });
     
      

      $('.popup .popup_inner .close_btn').on('click', function() {
        $('.popup').hide();
      });
    }

    // 서브페이지 
    $('.sub_container .sub_lnb .section_inner .lnb_list li').mouseenter(function() {
        $(this).parent().addClass('active');
        $(this).children('.lnb_depth_2').show();
    }).mouseleave(function() {
      $(this).parent().removeClass('active');
      $(this).children('.lnb_depth_2').hide();
    })
   
})();