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
    this.renderModal();
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
       <div class="sideBar">
       <!-- Main menu of the page -->
          <div class="menuDefault">
            <nav
            class="mainNavBar"
            role="navigation"
            aria-label="navBar to navigate among tasks"
            >
              <ul>
                <li class="navOptions addComponent" data-category="all">
                  <div> 
                    <i class="fa fa-list"></i>
                    <span class="visually-hidden">Show All Tasks</span>All Tasks
                  </div>
                  <i class="fa fa-plus"></i>
                </li>
                <li class="navOptions addComponent" data-category="today">
                  <div>
                    <i class="fa fa-calendar"></i>
                    <span class="visually-hidden">Show Tasks Due Today</span>Due to Today
                  </div>
                  <i class="fa fa-plus"></i>
                </li>
                <li class="navOptions" data-category="pastDue">
                  <i class="fa fa-file-excel"></i>
                  <span class="visually-hidden">Show Past-due Tasks</span>Past-due tasks
                </li>
              </ul>
            </nav>
         </div>
         <!-- container to render the menu -->
         <div class="containerDynamicMenu">
           <div class="addFolder"
           role="add new folder">
             <ul>
                <h1>Projects</h1>
               <li>
               <i class="fa fa-plus"></i>
               <span class="visually-hidden">button to Add A New Folder</span>Add A New Folder</li>
             </ul>
           </div>
           <div class="displayFolder" role="Nav to display the new folders created">
             <ul> </ul>
           </div>
         </div>
       </div>
       <div class="content">
          <div class="tasksDisplay" role="Display the selected group of tasks">
            <h1>All Tasks</h1>
            <div class="tasksTable"></div>
          </div>
          <div class="buttonEraser">
            <button role="Button to erase all database">Erase All Tasks</button>
          </div>
       </div>
     </section>`;
    //<i class="fa fa-folder"></i> use it in the new menu
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

  renderModal() {
    const modal = `<section class="modal hidden">
    <div class="modal-createHeader">
      <h1>Create a new Task</h1>
      <button>X</button>
    </div>
    <div class="modal-createContent">
      <input type="text" maxlength="20" placeholder="Title"/>
      <textarea rows="6" cols="50" placeholder="Details" /></textarea>
    </div>
    <div class="modal-createFooter">
      <div class="modal-footerBtnContainer">
        <div class="date-modalFooter">
          <p>Due Date:</p>
          <input type="date" name="calendar" id="dueDate" />
        </div>
        <div class="priority-modalFooter">
          <p>Priority: </p>
          <button class="lowBtn">Low</button>
          <button class="mediumBtn">Medium</button>
          <button class="highBtn">High</button>
        </div>
      </div>
      <button type="submit" class="modal-createSubmitBtn">Add Task</button>
    </div>
  </section>
  <section class="modal addFolderModal hidden">
      <div class="addFolderContainer">
        <div class="addFolderHeader">
          <h1>New Folder</h1>
        </div>
        <div class="addFolderContent">
          <input type="text" placeholder="Title" maxlength="33">
          <div>
            <button class="submitFolder" type="submit">Add Folder</button>
            <button class="cancelFolder">Cancel</button>
          </div>
        </div>
      </div>
    </section>
    <section class="modal alert hidden">
      <h1>Alert</h1>
      <p>All the data will be permanently erased. Do you want to proceed?</p>
      <div class="alertBtnContainer">
        <button id="yes">Yes</button>
        <button id="no">No</button>
      </div>
    </section>
    <section class="displayDetails modal hidden">
      <div class="displayDetailsHeader">
      <h3>Example</h3>
      <button class="closeDisplayDetails">X</button>
      </div>
      <div class="displayContent">
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
        <p>Information: Displaying</p>
      </div>
    </section>
    <div class="overlay hidden"></div>`;
    this.body.insertAdjacentHTML('beforeend', modal);
  }
}

//basic page logic

const pageLayout = new PageLayout();

export default pageLayout;
