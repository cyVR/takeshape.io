import ViewModel from '../core/view-model';

export default class Header extends ViewModel {
  constructor() {
    super();

    this.observable('isOpen', false);
    this.observable('isMuted', true);

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  toggleOpen() {
    this.isOpen(!this.isOpen());
  }

  onScroll() {
    const offset = 10;

    if (this.isMuted() && window.pageYOffset >= offset) {
      this.isMuted(false);
    } else if (!this.isMuted() && window.pageYOffset < offset) {
      this.isMuted(true);
    }
  }

  destroy() {
    super.destroy();
  }
}
