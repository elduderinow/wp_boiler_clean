import _ from 'lodash';

import {accordion} from './helpers/accordion';
import {animateCountUp} from './helpers/animateCountUp';
import {animateValue} from './helpers/animateValue';
import {checkPosition} from './helpers/checkPosition';
import {scrollToTop} from './helpers/scrollToTop';
import {scrollTo} from './helpers/scrollTo';

const proto = {
    accordionHeadArray: [...document.getElementsByClassName('js-accordion')],
    count: [...document.getElementsByClassName('js-count')],
    checkPosItems: [...document.getElementsByClassName('check-pos')],
    wHeight: null,
    toTopTrigger: document.getElementsByClassName('js-scroll-top')[0],
    scrollTrigger: document.getElementsByClassName('js-scroll-trigger')[0],
    init() {
        accordion(proto.accordionHeadArray);

        proto.count.forEach((el) => {
            animateCountUp(el, 2000, 1000 / 60);
        });

        animateValue('value-id', 10, 200, 2000);

        proto.wHeight = window.innerHeight;
        proto.onScroll();
        proto._addEventHandlers();
    },
    _addEventHandlers() {
        window.addEventListener('scroll', _.debounce(proto.onScroll, 70));
        //window.addEventListener('resize', _.debounce(proto.init, 100));

        proto.toTopTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            scrollToTop();
        });

        proto.scrollTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            let target = document.querySelectorAll(`${proto.scrollTrigger.getAttribute('href')}`)[0];
            scrollTo(target.getBoundingClientRect().top, 600);
            console.log(proto.scrollTrigger.getAttribute('href'));
        });
    },
    onScroll() {
        proto.checkPosItems.forEach((el) => {
            let view = checkPosition(el, proto.wHeight);
            if (view) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    }
};

export default Object.create(proto);
