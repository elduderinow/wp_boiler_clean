const accordion = (itemsArray) => {
    itemsArray.forEach((el) => {
        el.addEventListener('click', (e) => {
            let prevOpen = document.querySelectorAll('.accordion .open');
            if (prevOpen.length > 0) {
                if (el === document.querySelectorAll('.accordion .open')[0]) {
                    el.classList.remove('open');
                } else {
                    prevOpen[0].classList.remove('open');
                    el.classList.add('open');
                }
            } else {
                el.classList.add('open');
            }
        });
    });
};

export {accordion};
