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
        const label = event.target.nextElementSibling;
        console.log(label);
        this.toggleThemeBtn(label);
      }
    });
  }

  toggleThemeBtn(label) {
    this.body.classList.toggle('light-mode');
    if (label.title === 'Switch to dark mode') {
      label.title = 'Switch to light mode';
    } else {
      label.title = 'Switch to dark mode';
    }
  }
}
const pageLogic = new PageLogic();

export default pageLogic;
