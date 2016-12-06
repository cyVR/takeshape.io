import ViewModel from '../core/view-model';
import getScript from '../utils/get-script';

class Facebook extends ViewModel {

  constructor() {
    super();

    // Ensure the script is loaded
    getScript('//connect.facebook.net/en_US/sdk.js', 'facebook-jssdk')
      .then(() => {
        window.FB.init({
          appId: '137084826757121',
          xfbml: true,
          version: 'v2.5'
        });
      })
      .catch(console.error);
  }

  openDialogue(data, event) {
    const currTarget = event.currentTarget;
    const content = encodeURIComponent(currTarget.getAttribute('data-content'));

    let url = 'https://www.facebook.com/dialog/share?app_id=137084826757121';
    url += `&display=popup&href=${content}&redirect_uri=${content}`;

    window.open(url, 'newwindow', 'width=450, height=250');
  }

  destroy() {
    super.destroy();
  }
}

export default Facebook;
