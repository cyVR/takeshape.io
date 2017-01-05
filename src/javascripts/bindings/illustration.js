import anime from 'animejs';

const init = function (el) {
  const reps = el.getAttribute('data-reps');
  const pathBase = el.getElementsByTagName('svg')[0];

  el.removeChild(pathBase);

  let pathNew;

  for (let i = 0; i < reps; i++) {
    pathNew = pathBase.cloneNode(true);

    const pathOpacity = 0.1 + (0.8 * i/reps);
    const pathRotation = 2 * i;

    pathNew.style.opacity = pathOpacity;
    pathNew.style.transform = "rotate("+ pathRotation +"deg)";

    el.appendChild(pathNew);
  }

  anime({
    targets: el.getElementsByTagName('svg'),
    rotate: function(el, index) {
      return index * 2;
    },
    translateX: function(el, index) {
      const translateNew = index * -0.5;

      return translateNew + 'rem';
    },
    translateY: function(el, index) {
      const translateNew = index * 0.4;

      return translateNew + 'rem';
    },
    scale: [0.75, 0.9],
    delay: function(el, index) {
      return -index + index * 80;
    },
    duration: 5000,
    elasticity: 700,
    direction: 'alternate',
    loop: true
  });

  console.log('anime', anime);
};

export default {init};
