//Слайдер swiper
new Swiper('.task-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    spaceBetween: 56,
    breakpoints: {
        1773: {
            slidesPerView: 3
        },
        1322: {
            slidesPerView: 2
        },
        401: {
            slidesPerView: 1
        },
        0: {
            slidesPerView: 1
        },
    },
});





