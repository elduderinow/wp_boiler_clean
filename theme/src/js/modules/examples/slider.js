import Swiper from 'swiper/bundle';

const proto = {
    slider: null,
    init () {
        document.addEventListener( 'DOMContentLoaded', function () {
            proto.goSlider();
        } );
    },
    goSlider () {
        proto.slider = document.getElementsByClassName('paragraph--gallery');
        if (proto.slider.length > 0) {
            for (let i = 0; i < proto.slider.length; i++) {
                let el = proto.slider[i].getElementsByClassName('swiper-container')[0];
                let mySwiper = new Swiper(el, {
                    speed: 400,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    grabCursor: true,
                    reverseDirection: true,
                    watchOverflow: true,
                    centeredSlides: true,
                    autoHeight: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
            }
        }
    }
};

export default Object.create(proto);
