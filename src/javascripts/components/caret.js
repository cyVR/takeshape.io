import ViewModel from '../core/view-model';
import scrollTo from '../utils/scroll-to';

class Caret extends ViewModel {
  onClickCaret() {
    const splashHeight = document.getElementById('splash').scrollHeight - 70;
    scrollTo(splashHeight, null, 1000);
  }
}

export default Caret;
