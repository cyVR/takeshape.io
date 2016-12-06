let scrollRange = 0;

const setScrollRange = function (el) {
  scrollRange = el.getBoundingClientRect().height;
};

const resizeHandler = function (el) {
  return () => {
    setScrollRange(el);
  };
};

const scrollHandler = function (el, scrollEl, opacityEl) {
  return () => {
    const rect = el.getBoundingClientRect();
    const moved = -(0.5 * scrollRange) / (scrollRange / rect.top);
    const faded = 1 + ((3 * rect.top) / scrollRange);

    scrollEl.style.top = moved + 'px';
    opacityEl.style.opacity = faded;
  };
};

const init = function (el) {
  const parallaxEl = el.querySelector('[data-parallax]');
  const opacityEl = el.querySelector('[data-opacity]');

  setScrollRange(el);

  const onScroll = scrollHandler(el, parallaxEl, opacityEl);
  const onResize = resizeHandler(el);

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);

  onScroll();
};

export default {init};
