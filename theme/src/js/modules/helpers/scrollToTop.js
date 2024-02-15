const scrollToTop = () => {
    const scroll = setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
            clearInterval(scroll);
        }
    }, 1);
};

export { scrollToTop };
