import ko from 'knockout';
import Base from './base';

class Slider extends Base {

  constructor() {
    super();

    this.slideNum = ko.observable(1);
  }

  goToSlide(num) {
    return () => {
      this.slideNum(num);
    };
  }

  destroy() {
    super.destroy();
  }
}

export default Slider;
