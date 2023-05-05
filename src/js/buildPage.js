// import icon image
import noteIcon from '../assets/lista.png';

class PageLayout {
  constructor() {
    this.body = document.querySelector('body');
    this.iconLink = document.querySelector(`link[rel~='icon']`);
  }

  init() {
    this.renderIcon();
    this.renderHeader();
    this.renderMainSection();
    this.renderFooter();
  }

  //get the icon image and render in the page
  renderIcon() {
    this.iconLink.href = noteIcon;
  }

  renderHeader() {
    const header = `
    <header>
     <div class="logo"></div>
     <div class="darkLightMode">
       <button></button>
     </div>
    </header>`;
    this.body.insertAdjacentHTML('beforeend', header);
  }

  renderMainSection() {
    const main = `<section class="main">
       <div class="sideBar"></div>
       <div class="content"></div>
     </section>`;
    this.body.insertAdjacentHTML('beforeend', main);
  }

  renderFooter() {
    const footer = `<footer><p></p></footer>`;
    this.body.insertAdjacentHTML('beforeend', footer);
  }
}

const pageLayout = new PageLayout();
export default pageLayout;
