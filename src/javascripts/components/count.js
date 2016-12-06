import ko from 'knockout';
import ViewModel from '../core/view-model';

class Count extends ViewModel {

  constructor() {
    super();
    this.observable("factBarInView", false);
  }

  destroy() {
    super.destroy();
  }
}

export default Count;
