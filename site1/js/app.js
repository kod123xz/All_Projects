$(document).ready(function(){
    $('.header__burger,.header__link,.tabs__btn,.tabs__photo').click(function(event) {
        $('.header__burger,.header__menu,.tabs__btn,.tabs__photo').toggleClass('active');
    });
    
    $('.header__burger,.header__menu,.header__link,.tabs__photo,.tabs__btn').fadeIn(600);

    

    
  });
  
  
    // $('.services__slider').slick({
    //     arrows:false,
    //     dots:true,
    //     slidesToShow:1,
    //     slidesToScroll:1,
    //     adaptiveHeight:true,
    //     // autoplay: true,
    //     // autoplaySpeed: 2000,
    //     responsive:[
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow:1,
    //                 slidesToScroll:1
    //             }
    //         },{
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow:1,
    //                 slidesToScroll:1
    //             }
    //         }
    //     ],
    //     mobileFirst:true,
    // });
    
    $('.open-popup').click(function() {
        $('.popup-bg').fadeIn(600);
        // $(document).bind('scroll', function () {
        //     window.scrollTo(0, 0);  
        // });
    });
    
    $('.close-popup').click(function() {
        $('.popup-bg').fadeOut(600);
        // $(document).unbind('scroll');
    });
    
    
    $('.open-popup-sort').click(function() {
        $('.popup-bgc').fadeIn(600);
        // $(document).bind('scroll', function () {
        //     window.scrollTo(0, 0);  
        // });
    });
    
    $('.close-sort').click(function() {
        $('.popup-bgc').fadeOut(600);
        // $(document).unbind('scroll');
    });
    // FORM
    $('.open-form').click(function() {
        $('.card__form__bg').fadeIn(600);
        // $(document).bind('scroll', function () {
        //     window.scrollTo(0, 0);  
        // });
    });
    
    $('.close-form').click(function() {
        $('.card__form__bg').fadeOut(600);
        // $(document).unbind('scroll');
    });
// tabs  
  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach(function(item) {
      item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
    
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }


       
      });
  });
// tabs  

  $(document).ready(function() {
      $("a.header__link").click(function() {
          $("html, body").animate({
              scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000,
                easing: "swing"
          });
          return false;
      });
  });

//   AOS.init();
// Слайдер
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const btnPrev = $('.btn__prev');
    const btnNext = $('.btn__next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item) {
        $(item).css({
            minWidth: itemWidth,
        })
    });

    btnNext.click(function() {
        position -= movePosition;

        setPosition();
        checkBtns();
    });

    btnPrev.click(function() {
        position += movePosition;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkBtns();
});
// Слайдер
