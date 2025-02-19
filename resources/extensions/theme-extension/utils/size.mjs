const breakpoints = {
    mobile: 768,
    tablet: 1024,
};

export const isMobile = () => {
    return window.matchMedia(`(max-width: ${breakpoints.mobile}px)`).matches;
};

export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};