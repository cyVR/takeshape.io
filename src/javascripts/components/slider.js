import ViewModel from '../core/view-model';

class Slider extends ViewModel {

  constructor() {
    super();

    this.observable('quoteSlideNum', 1);
  }

  goToSlide(num) {
    return () => {
      this.quoteSlideNum(num);
    };
  }

  destroy() {
    super.destroy();
  }
}

export default Slider;
