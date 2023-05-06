class PageLogic {
  constructor() {
    this.body = document.querySelector('body');
  }

  init() {
    this.bodyEventDelegation();
  }

  bodyEventDelegation() {
    this.body.addEventListener('click', (event) => {
      if (event.target.classList.contains('theme')) {
        let themeBtn = event.target;
        this.toggleThemeBtn(themeBtn);
      }
    });
  }

  toggleThemeBtn(themeBtn) {
    this.body.classList.toggle('light-mode');
    if (themeBtn.innerText === 'Light Mode') {
      themeBtn.innerText = 'Dark Mode';
    } else {
      themeBtn.innerText = 'Light Mode';
    }
  }
}
const pageLogic = new PageLogic();

export default pageLogic;
