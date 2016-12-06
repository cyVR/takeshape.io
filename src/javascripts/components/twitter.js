import ViewModel from '../core/view-model';

class Tweet extends ViewModel {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  openDialogue(data, event) {
    const currTarget = event.currentTarget;

    let url = `https://twitter.com/intent/tweet?`;

    if (currTarget.getAttribute('data-text')) {
      const tweetText = encodeURIComponent(currTarget.getAttribute('data-text'));
      url += `text=${tweetText}&`;
    }

    if (currTarget.getAttribute('data-url')) {
      const tweetUrl = encodeURIComponent(currTarget.getAttribute('data-url'));
      url += `url=${tweetUrl}&`;
    }

    if (currTarget.getAttribute('data-via')) {
      const tweetVia = encodeURIComponent(currTarget.getAttribute('data-via'));
      url += `via=${tweetVia}`;
    }

    window.open(url, 'newwindow', 'width=450, height=250');
  }

  destroy() {
    super.destroy();
  }
}

export default Tweet;
