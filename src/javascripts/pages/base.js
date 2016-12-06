/* eslint-disable */
import ViewModel from '../core/view-model';

class Base extends ViewModel {
  constructor(options = {}) {
    super(options);

    this.observable('isIE11', false);

    this.detectBrowser();
  }

  detectBrowser() {
    const sAgent = window.navigator.userAgent;

    if (!!navigator.userAgent.match(/Trident\/7\./)) {
      this.isIE11(true);
    }
  }

  destroy() {
    super.destroy();
  }
}

export default Base;
/* eslint-enable */
