const easeOutQuad = t => t * (2 - t);
const animateCountUp = (item, animationDuration, frameDuration) => {
    const totalFrames = Math.round(animationDuration / frameDuration);
    //item.classList.add('anim');
    let frame = 0;
    const countTo = parseInt(item.getAttribute('data-figure'), 10);
    // Start the animation running 60 times per second
    const counter = setInterval(() => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = easeOutQuad(frame / totalFrames);
        // Use the progress value to calculate the current count
        const currentCount = Math.round(countTo * progress);

        // If the current count has changed, update the element
        if (parseInt(item.innerHTML, 10) !== currentCount) {
            item.innerHTML = currentCount;
        }

        // If we’ve reached our last frame, stop the animation
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

export { animateCountUp };
