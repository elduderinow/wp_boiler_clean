const checkPosition = (item, windowHeight) => {
    let posFromTop = item.getBoundingClientRect().top;
    if (posFromTop - windowHeight + 100 <= 0) {
        return true;
    }
    return false;
};

export { checkPosition };
