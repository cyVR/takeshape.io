import 'core-js/es6';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import ready from 'raf-ready';

import App from './app';

window.app = new App();

ready(() => {
  svg4everybody();
  objectFitImages();
  window.app.start();
});
