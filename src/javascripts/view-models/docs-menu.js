import ko from 'knockout';
import Base from './base';

class DocsMenu extends Base {
  constructor() {
    super();

    this.isOpen = ko.observable(false);
  }

  onClickToggle() {
    if (this.isOpen()) {
      this.isOpen(false);
    } else {
      this.isOpen(true);
    }
  }
}

export default DocsMenu;
