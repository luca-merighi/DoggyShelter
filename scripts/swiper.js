const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            setWrapperSize: true
        },
        1440: {
            slidesPerView: 3
        } 
    }
})