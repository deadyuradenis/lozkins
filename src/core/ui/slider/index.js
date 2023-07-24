import Swiper, {FreeMode } from 'swiper';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {    
    
    if(document.querySelector('[data-slider-id="theory"]')) {
        const block = document.querySelector('[data-slider-id="theory"]');

        let slider;

        const initSlider = () => {
            slider = new Swiper(block.querySelector('[data-slider="inner"]'), {
                modules: [FreeMode],
                slidesPerView: 'auto',
                spaceBetween: 10,
                // autoHeight: true,
                speed: 900,    
                freeMode: true,
    
                breakpoints: {
                    576: {
                        spaceBetween: 20
                    },
                    833: {
                        spaceBetween: 30
                    },
                    1024: {
                        spaceBetween: 45
                    },
                    1260: {
                        spaceBetween: 60,
                        slidesPerView: 3,
                    },
                    1440: {
                        spaceBetween: 80,
                        slidesPerView: 3,
                    }
                }
            })
        }

        // const check = () => {
        //     const screenWidth = window.innerWidth;

        //     if(screenWidth < 834 && slider === undefined) {
        //         initSlider()
        //     } else if (screenWidth >= 834 && slider !== undefined) {
        //         slider.destroy();
        //         slider = undefined;
        //     }
        // }
        
        initSlider()
        // check();

        // window.addEventListener('resize', check)
    }
})
