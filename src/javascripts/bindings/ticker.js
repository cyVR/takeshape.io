/* eslint-disable */
import ko from "knockout";

const DEFAULTS = {
  from: 0,
  to: 0,
  steps: 200,
  roundTo: 1,
  ease: "inOutQuad"
};

const requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

const easings = {

  inOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },

  inCubic(t, b, c, d) {
    const tc = (t /= d) * t * t;
    return b + c * tc;
  },

  inOutQuintic(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
  }
};

const round = function (value, amount) {

  const amountStr = typeof amount === "number" ? amount.toString() : amount;

  if (amountStr.indexOf(".") >= 0) {
    return value.toFixed(amountStr.replace(/^.+\./, "").length);
  } else {
    return Math.round(value / +amount) * +amount;
  }
};

const tick = function (element, settings, callback) {

  const from = +settings.from;
  const to = +settings.to;
  const steps = +settings.steps;
  const roundTo = settings.roundTo;
  const easeFn = easings[settings.ease] || easings[DEFAULTS.ease];

  const updateValue = function (value) {
    element.innerHTML = round(value, roundTo);
  };

  const change = to - from;

  let currentStep = 0;

  const animateTicker = function () {

    currentStep += 1;
    const val = easeFn(currentStep, from, change, steps);
    updateValue(val);

    if (currentStep < steps) {
      requestAnimFrame(animateTicker);
    } else if (callback && typeof callback === "function") {
      callback();
    }
  };

  element.innerHTML = from;
  animateTicker();
};

const update = function (element, valueAccessor) {

  const value = valueAccessor();

  if (value.waitFor && ko.isObservable(value.waitFor)) {
    value.waitFor.subscribe((val) => {
      if (val) {
        const settings = Object.assign(DEFAULTS, value || {});
        tick(element, settings);
      }
    });
  } else {
    const settings = Object.assign(DEFAULTS, value || {});
    tick(element, settings);
  }
};

export default { update, after: [ "inview" ] };
/* eslint-enable */
