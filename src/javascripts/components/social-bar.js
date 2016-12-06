import ViewModel from '../core/view-model';
import removeClass from '../utils/remove-class';
import addClass from '../utils/add-class';

class SocialBar extends ViewModel {
  constructor() {
    super();

    this.onRailway = this.onRailway.bind(this);
  }

  onRailway(element, direction, event) {
    console.log('event: ', event, ', direction: ', direction);

    if (event === 'enter') {
      removeClass(element, 'is-stuck');
      addClass(element, 'is-fixed');
    }

    if (event === 'exit' && direction === 'down') {
      removeClass(element, 'is-fixed');
      addClass(element, 'is-stuck');
    }

    if (event === 'exit' && direction === 'tooSmall') {
      removeClass(element, 'is-stuck is-fixed');
    }

    if (event === 'exit' && direction === 'up') {
      removeClass(element, 'is-stuck is-fixed');
    }
  }

  destroy() {
    super.destroy();
  }
}

export default SocialBar;
