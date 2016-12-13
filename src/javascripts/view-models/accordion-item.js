import ko from 'knockout';
import Base from './base';

class AccordionItem extends Base {
  constructor({componentInfo}) {
    super();
    this.element = componentInfo.element;
    this.contentElement = null;

    this.isOpen = ko.observable(false);
    this.initialHeight = ko.observable(null);
    this.currentHeight = ko.observable(null);
    this.currentHeightStyle = ko.computed(this.currentHeightStyle, this);

    this.afterRender = this.afterRender.bind(this);
  }

  onClickToggle() {
    if (this.isOpen()) {
      this.currentHeight(this.initialHeight());
      this.isOpen(false);
    } else {
      this.currentHeight(this.initialHeight() + this.contentElement.clientHeight);
      this.isOpen(true);
    }
  }

  currentHeightStyle() {
    return this.currentHeight() === null ? 'initial' : `${this.currentHeight()}px`;
  }

  afterRender() {
    super.afterRender(...arguments);

    this.initialHeight(0);
    this.currentHeight(this.initialHeight());

    const contentElements = this.element.querySelectorAll('[data-accordion-content]');
    const hasCurrentChild = this.element.querySelectorAll('.is-current');

    if (contentElements && contentElements.length) {
      this.contentElement = contentElements[0];
    }

    if (hasCurrentChild.length) {
      this.currentHeight(this.initialHeight() + this.contentElement.clientHeight);
      this.isOpen(true);
    }
  }
}

export default AccordionItem;
