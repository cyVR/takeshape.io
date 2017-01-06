import anime from 'animejs';

const init = function (el) {
  const type = el.getAttribute('data-anim-type') || 'rotate';
  const reps = el.getAttribute('data-anim-reps') || 20;
  const delay = el.getAttribute('data-anim-delay') || 0;
  const duration = el.getAttribute('data-anim-duration') || 4000;
  const elasticity = el.getAttribute('data-anim-elasticity') || 0;
  const translateXBase = el.getAttribute('data-anim-translate-x') || 0;
  const translateYBase = el.getAttribute('data-anim-translate-y') || 0;

  const pathBase = el.getElementsByTagName('svg')[0];
  const pathMorph = el.getAttribute('data-anim-path');

  el.removeChild(pathBase);

  let pathNew;

  for (let i = 0; i < reps; i++) {
    pathNew = pathBase.cloneNode(true);

    pathNew.style.opacity = 0.1 + (0.8 * i/reps);

    switch (type) {
      case 'rotate':
        const pathRotation = 2 * i;

        pathNew.style.transform = 'rotate('+ pathRotation +'deg)';

        break;
      case 'morph':
        const scaleX = 1 - (i/reps);
        const scaleY = 1 - (i/reps);
        const translateX = translateXBase * i;
        const translateY = translateYBase * i;

        pathNew.style.transform = 'translateX('+ translateX +'rem) translateY('+ translateY +'rem) scale('+ scaleX +', '+ scaleY +')';

        break;
      default:
        break;
    }

    el.appendChild(pathNew);
  }

  switch (type) {
    case 'rotate':
      anime({
        targets: el.getElementsByTagName('svg'),
        rotate: function(el, index) {
          return index * 2;
        },
        translateX: function(el, index) {
          const translateX = index * translateXBase;

          return translateX + 'rem';
        },
        translateY: function(el, index) {
          const translateY = index * translateYBase;

          return translateY + 'rem';
        },
        delay: function(el, index) {
          return -delay + (index * delay);
        },
        duration: duration,
        elasticity: elasticity,
        direction: 'alternate',
        loop: true
      });

      break;

    case 'morph':
      anime({
        targets: el.getElementsByTagName('path'),
        d: pathMorph,
        delay: function(el, index) {
          return -delay + (index * delay);
        },
        duration: duration,
        elasticity: elasticity,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });

      break;
    default:
      break;
  }
};

export default {init};
