
class PageLogic {
    constructor() {
      this.body = document.querySelector('body');
      this.darkLightBtn = document.querySelector('.theme');
    }
  
    init() {
      this.toggleThemeBtn();
    }
  
    toggleThemeBtn() {
      this.darkLightBtn.addEventListener('click', () => {
        this.body.classList.toggle('light-mode');
      });
    }
  }
  const pageLogic = new PageLogic();

  export default pageLogic;