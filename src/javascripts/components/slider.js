import ViewModel from '../core/view-model';

class Slider extends ViewModel {

  constructor() {
    super();

    this.observable('slideNum', 1);
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
