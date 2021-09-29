(function() {
    // 메인슬라이드
    $('.main_slide').slick({
        arrows: false,
    });
    // 뉴스슬라이드
    $('.news_slide').slick({
        arrows: false, 
        speed: 300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
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
    
    
    $('.slider-start_stop').on('click').toggle(function() {
      $('.banner-slide').slick('slickPause'); 
    }, function() {
      $('.banner-slide').slick('slickPlay'); 
    });

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
    })
})();