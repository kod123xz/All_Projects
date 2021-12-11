$(document).ready(function(){
    $('.header__burger, .header__link').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
    
    $('.header__burger,.header__menu,.header__link').fadeIn(600);

    

    
  });
// Slick slider
    $('.services__slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        adaptiveHeight:true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },{
                breakpoint: 991,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ],
        mobileFirst:true,
    });
// Slick slider
// POPUP
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
// POPUP
// TABS
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
// TABS
// ПЛАВНАЯ ПРОКРУТКА ЯКОРНЫХ ССЫЛОК
  $(document).ready(function() {
      $("a.header__link, .header__logo").click(function() {
          $("html, body").animate({
              scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000,
                easing: "swing"
          });
          return false;
      });
  });
// ПЛАВНАЯ ПРОКРУТКА ЯКОРНЫХ ССЫЛОК
  AOS.init();
// ПОХОЖЕ ЭТО АНИМАЦИЯ ИЗОБРАЖЕНИЯ ПРИ СКРОЛЕ
// const img__animation = document.querySelector(".img__wrapper");



// window.addEventListener("scroll", checkScroll);

// document.addEventListener("DOMContentLoaded",  checkScroll);

// function checkScroll() {
//     let scrollPos = window.scrollY;

//     console.log(scrollPos);

//     if(scrollPos > 800) {
//         img__animation.classList.add('red');
//     } else {
//         img__animation.classList.remove('red');
//     }
//     // if(scrollPos > 2300) {
//     //     img__animation.classList.remove('red');
       
//     // } else {
//     //     img__animation.classList.add('red');
//     // }
// }
// ПОХОЖЕ ЭТО АНИМАЦИЯ ИЗОБРАЖЕНИЯ ПРИ СКРОЛЕ
// ПОХОЖЕ ЭТО АНИМАЦИЯ ИЗОБРАЖЕНИЯ ПРИ СКРОЛЕ
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
        }
    });
}

let options = {
     threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements =
document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}
// new WOW().init();
// ПОХОЖЕ ЭТО АНИМАЦИЯ ИЗОБРАЖЕНИЯ ПРИ СКРОЛЕ

// Слайдер обычный, не слик
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
// Слайдер обычный, не слик
// ШАПКА МЕНЯЕТЬСЯ ПРИ СКРОЛЕ
const header = document.querySelector(".header");

window.addEventListener("scroll", checkScroll);

document.addEventListener("DOMContentLoaded",  checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('header__scroll');
    } else{
        header.classList.remove('header__scroll');
    }
}
// ШАПКА МЕНЯЕТЬСЯ ПРИ СКРОЛЕ
// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
        
    }
}
// accordion
// // progrees bar
// var a = 0;
// var run = setInterval(frames, 50);
// function frames() {
//     a = a + 1;
//     if(a == 40) {
//         clearInterval(run);
//     } else {
//         var counter = document.querySelector('.counter');
//         counter.textContent = a + '%';
//     }
// }
// setTimeout(stopPoint, 5000);
// function stopPoint() {
//     var stop = document.querySelector('.stop');
//     stop.style.display = 'block';
// }
// //progrees bar
