import './index.scss';

class Cookies {
  constructor() {
    if (!Cookies.hasCookiesAcceptation()) {
      this.initComponent();
    }
  }

  static hasCookiesAcceptation() {
    return window.localStorage.getItem('cookiesAcceptation');
  }

  static createEntity() {
    window.localStorage.setItem('cookiesAcceptation', 'true');
  }

  initComponent() {
    this.buildTemplate();
    this.attachEvents();
  }

  buildTemplate() {
    this.element = document.createElement('div');
    this.element.classList.add('cookies');
    this.element.innerHTML = `
    <div class="container">
      <div class="cookies__inner">
        <div class="text text-700 cookies__text">Мы используем cookie на нашем сайте, чтобы он работал исправно</div>
        <button class="button cookies__button" data-cookies="button" type="button">
          <span>Согласен и принимаю</span>
        </button>
      </div>
    </div>
    `;

    document.body.append(this.element);

    setTimeout(() => {
      document.querySelector('.cookies').classList.add('is-show');
    }, 2000);
  }

  attachEvents() {
    document.querySelector('[data-cookies="button"]').addEventListener('click', () => {
      Cookies.createEntity();
      document.querySelector('.cookies').classList.remove('is-show');

      setTimeout(() => {
        this.element.remove();
      }, 750);
    });
  }
}

export default Cookies;
