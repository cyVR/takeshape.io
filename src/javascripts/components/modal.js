import ViewModel from '../core/view-model';
import youTubePlayer from 'youtube-player';

const ESC_KEYCODE = 27;

class Modal extends ViewModel {

  constructor() {
    super();

    this.videoId = '';
    this.observable('modalOpen', false);
    this.player = youTubePlayer('player');
    this.modalOpen.subscribe(this.onIsVisible.bind(this));
  }

  onIsVisible(val) {
    if (val) {
      document.onkeydown = this.captureEscape.bind(this);
    } else {
      this.modalOpen(false);
      document.onkeydown = null;
    }
  }

  closeModal() {
    this.modalOpen(false);
    this.pauseVideo();
  }

  openModal(data, event) {
    const currTarget = event.currentTarget;
    this.videoId = currTarget.getAttribute('data-videoId');
    this.modalOpen(true);
    this.playVideo();
  }

  playVideo() {
    this.player.loadVideoById(this.videoId);
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.stopVideo();
  }

  captureEscape(event) {
    if (this.modalOpen() && event.keyCode === ESC_KEYCODE) {
      this.closeModal();
    }
  }

  destroy() {
    super.destroy();
  }
}

export default Modal;

