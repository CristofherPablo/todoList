// import icon image
import listaIcon from '../assets/lista.png';
import noteIcon from '../assets/greyNote.png';

//render page basic layout
class PageLayout {
  constructor() {
    this.body = document.querySelector('body');
    this.container = document.createElement('div');
    this.iconLink = document.querySelector(`link[rel~='icon']`);
  }

  init() {
    this.renderIcon();
    this.renderContainer();
  }

  //get the icon image and render in the page
  renderIcon() {
    this.iconLink.href = listaIcon;
  }

  renderContainer() {
    this.container.classList.add('container');
    this.body.appendChild(this.container);
    this.renderHeader();
    this.renderMainSection();
    this.renderFooter();
  }

  renderHeader() {
    const header = `
    <header>
     <div class="logoContainer">
     <img src=${noteIcon} alt="icon of a paper sheet simulating a to-do list"> To-do List
     </div>
     <div class="darkLightMode">
     <input type="checkbox" class="checkbox" id="chk"/>
     <label for="chk" class="label" title="Switch to light mode">
       <span class="visually-hidden">Toggle dark mode</span>
       <i class="fas fa-moon"></i>
       <i class="fas fa-sun"></i>
       <div class="ball"></div>
     </label>
     </div>
    </header>`;
    this.container.insertAdjacentHTML('beforeend', header);
  }

  renderMainSection() {
    const main = `<section class="contentContainer">
       <div class="sideBar"></div>
       <div class="content"></div>
     </section>`;
    this.container.insertAdjacentHTML('beforeend', main);
  }

  renderFooter() {
    const footer = `<footer><p>
    Made by
    <a href="https://github.com/CristofherPablo" target="_blank"
      >Cristofher Guersoni</a
    >
    for
    <a href="https://www.theodinproject.com/paths" target="_blank"
      >Odin Project</a
    >
    </p></footer>`;
    this.container.insertAdjacentHTML('beforeend', footer);
  }
}

//basic page logic

const pageLayout = new PageLayout();

export default pageLayout;
