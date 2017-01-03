import moment from 'moment';

const init = function (el) {
  const rawDate = el.getAttribute('data-date');
  const formattedDate = moment(rawDate).fromNow();

  el.setAttribute('data-from-now', formattedDate);
};

export default {init};
