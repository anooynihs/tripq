// section2 배너 슬라이드
const nowSlide = document.querySelector('.now');
const totalSlide = document.querySelector('.total');
const slide = document.querySelectorAll('.swiper-slide');

totalSlide.textContent = slide.length;

const swiper = new Swiper('.typical-bnr', {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    effect: 'fade',
    navigation: {
        prevEl: '.slide-btn .prev',
        nextEl: '.slide-btn .next',
    },
    on:{
        slideChange:function(){
            nowSlide.textContent = this.realIndex + 1;
        }
    },
});