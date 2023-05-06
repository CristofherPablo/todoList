class PageLogic {
  constructor() {
    this.body = document.querySelector('body');
  }

  init() {
    this.bodyEventDelegation();
  }

  bodyEventDelegation() {
    this.body.addEventListener('change', (event) => {
      if (event.target.matches('#chk')) {
        this.toggleThemeBtn();
      }
    });
  }

  toggleThemeBtn() {
    this.body.classList.toggle('light-mode');
  }
}
const pageLogic = new PageLogic();

export default pageLogic;
