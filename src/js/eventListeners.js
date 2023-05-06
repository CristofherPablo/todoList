class PageLogic {
  constructor() {
    this.body = document.querySelector('body');
  }

  init() {
    this.bodyEventDelegation();
  }

  bodyEventDelegation(){
    this.body.addEventListener('click',(event) => {
      if(event.target.classList.contains('theme')){
        this.toggleThemeBtn();
      }
    })
  }

  toggleThemeBtn() {
    console.log('test 1');
  }
}
const pageLogic = new PageLogic();

export default pageLogic;
