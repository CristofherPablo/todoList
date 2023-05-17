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
        this.toggleThemeBtn(label);
        return;
      }
    });
    this.body.addEventListener('click', (evet) => {
      if (event.target.matches('.addPlus')) {
        const folderName = event.target.dataset.name;
        this.openAddModal(folderName);
        return;
      } else if (event.target.matches('#eraseAll')) {
        this.openEraseAlert();
        return;
      } else if (event.target.matches('.addFolderBtn')) {
        this.openAddFolderModal();
        return
      }else if(event.target.matches('#closeAddTask')){
        this.openAddModal();
        return;
      }else if(event.target.matches('.cancelFolder')){
        this.openAddFolderModal();
        return;
      }else if(event.target.matches('#no')){
        this.openEraseAlert();
        return;
      }
    });
  }
  
  openAddModal(folderName) {
    const folderTarget = document.querySelector('#addTask');
    folderTarget.classList.toggle('show');
    this.toggleOverlay();
  }

  openEraseAlert() {
    const alert = document.querySelector('.alert');
    alert.classList.toggle('show');
    this.toggleOverlay();
  }

  openAddFolderModal() {
    const addFolder = document.querySelector('.addFolderModal');
    addFolder.classList.toggle('show');
    this.toggleOverlay();
  }

  toggleOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('show');
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
