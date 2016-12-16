import ko from 'knockout';
import Base from './base';

class Header extends Base {
  constructor() {
    super();

    this.isOpen = ko.observable(false).publishOn('navIsOpen');
  }

  onClickToggle() {
    console.log(this.isOpen());
    this.isOpen(!this.isOpen());
  }

  destroy() {
    super.destroy();
  }
}

export default Header;
