// menu
const menuu = document.querySelector('#menuu');
const showmenu = document.querySelector('#showmenu');

menuu.addEventListener('click', function() {
    menuu.classList.toggle('menuu_active');
    showmenu.classList.toggle('hidden');
});

// swiper


var swiperhero = new Swiper(".swiper-con", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     520: {
    //         slidesPerView: 2,
    //     },
    //     756: {
    //         slidesPerView: 3,
    //     },
    //     1000: {
    //         slidesPerView: 3,
    //     },
    // },
});

var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: false,
    centerSlide: 'true',
    fade: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        756: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});