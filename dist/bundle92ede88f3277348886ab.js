/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buildPage.js":
/*!*****************************!*\
  !*** ./src/js/buildPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_lista_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/lista.png */ "./src/assets/lista.png");
/* harmony import */ var _assets_greyNote_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/greyNote.png */ "./src/assets/greyNote.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import icon image



//render page basic layout
var PageLayout = /*#__PURE__*/function () {
  function PageLayout() {
    _classCallCheck(this, PageLayout);
    this.body = document.querySelector('body');
    this.container = document.createElement('div');
    this.iconLink = document.querySelector("link[rel~='icon']");
  }
  _createClass(PageLayout, [{
    key: "init",
    value: function init() {
      this.renderIcon();
      this.renderContainer();
    }

    //get the icon image and render in the page
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      this.iconLink.href = _assets_lista_png__WEBPACK_IMPORTED_MODULE_0__;
    }
  }, {
    key: "renderContainer",
    value: function renderContainer() {
      this.container.classList.add('container');
      this.body.appendChild(this.container);
      this.renderHeader();
      this.renderMainSection();
      this.renderFooter();
      this.renderModal();
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var header = "\n    <header>\n     <div class=\"logoContainer\">\n     <img src=".concat(_assets_greyNote_png__WEBPACK_IMPORTED_MODULE_1__, " alt=\"icon of a paper sheet simulating a to-do list\"> To-do List\n     </div>\n     <div class=\"darkLightMode\">\n     <input type=\"checkbox\" class=\"checkbox\" id=\"chk\"/>\n     <label for=\"chk\" class=\"label\" title=\"Switch to light mode\">\n       <span class=\"visually-hidden\">Toggle dark mode</span>\n       <i class=\"fas fa-moon\"></i>\n       <i class=\"fas fa-sun\"></i>\n       <div class=\"ball\"></div>\n     </label>\n     </div>\n    </header>");
      this.container.insertAdjacentHTML('beforeend', header);
    }
  }, {
    key: "renderMainSection",
    value: function renderMainSection() {
      var main = "<section class=\"contentContainer\">\n       <div class=\"sideBar\">\n       <!-- Main menu of the page -->\n          <div class=\"menuDefault\">\n            <nav\n            class=\"mainNavBar\"\n            role=\"navigation\"\n            aria-label=\"navBar to navigate among tasks\"\n            >\n              <ul>\n                <li class=\"navOptions addComponent\" data-category=\"all\">\n                  <div> \n                    <i class=\"fa fa-list\"></i>\n                    <span class=\"visually-hidden\">Show All Tasks</span>All Tasks\n                  </div>\n                  <i class=\"fa fa-plus\"></i>\n                </li>\n                <li class=\"navOptions addComponent\" data-category=\"today\">\n                  <div>\n                    <i class=\"fa fa-calendar\"></i>\n                    <span class=\"visually-hidden\">Show Tasks Due Today</span>Due to Today\n                  </div>\n                  <i class=\"fa fa-plus\"></i>\n                </li>\n                <li class=\"navOptions\" data-category=\"pastDue\">\n                  <i class=\"fa fa-file-excel\"></i>\n                  <span class=\"visually-hidden\">Show Past-due Tasks</span>Past-due tasks\n                </li>\n              </ul>\n            </nav>\n         </div>\n         <!-- container to render the menu -->\n         <div class=\"containerDynamicMenu\">\n           <div class=\"addFolder\"\n           role=\"add new folder\">\n             <ul>\n                <h1>Projects</h1>\n               <li>\n               <i class=\"fa fa-plus\"></i>\n               <span class=\"visually-hidden\">button to Add A New Folder</span>Add A New Folder</li>\n             </ul>\n           </div>\n           <div class=\"displayFolder\" role=\"Nav to display the new folders created\">\n             <ul> </ul>\n           </div>\n         </div>\n       </div>\n       <div class=\"content\">\n          <div class=\"tasksDisplay\" role=\"Display the selected group of tasks\">\n            <h1>All Tasks</h1>\n            <div class=\"tasksTable\"></div>\n          </div>\n          <div class=\"buttonEraser\">\n            <button role=\"Button to erase all database\">Erase All Tasks</button>\n          </div>\n       </div>\n     </section>";
      //<i class="fa fa-folder"></i> use it in the new menu
      this.container.insertAdjacentHTML('beforeend', main);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footer = "<footer><p>\n    Made by\n    <a href=\"https://github.com/CristofherPablo\" target=\"_blank\"\n      >Cristofher Guersoni</a\n    >\n    for\n    <a href=\"https://www.theodinproject.com/paths\" target=\"_blank\"\n      >Odin Project</a\n    >\n    </p></footer>";
      this.container.insertAdjacentHTML('beforeend', footer);
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var modal = "<section class=\"modal hidden\">\n    <div class=\"modal-createHeader\">\n      <h1>Create a new Task</h1>\n      <button>X</button>\n    </div>\n    <div class=\"modal-createContent\">\n      <input type=\"text\" maxlength=\"20\" placeholder=\"Title\"/>\n      <textarea rows=\"6\" cols=\"50\" placeholder=\"Details\" /></textarea>\n    </div>\n    <div class=\"modal-createFooter\">\n      <div class=\"modal-footerBtnContainer\">\n        <div class=\"date-modalFooter\">\n          <p>Due Date:</p>\n          <input type=\"date\" name=\"calendar\" id=\"dueDate\" />\n        </div>\n        <div class=\"priority-modalFooter\">\n          <p>Priority: </p>\n          <button class=\"lowBtn\">Low</button>\n          <button class=\"mediumBtn\">Medium</button>\n          <button class=\"highBtn\">High</button>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"modal-createSubmitBtn\">Add Task</button>\n    </div>\n  </section>\n    <div class=\"overlay hidden\"></div>";
      this.body.insertAdjacentHTML('beforeend', modal);
    }
  }]);
  return PageLayout;
}(); //basic page logic
var pageLayout = new PageLayout();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLayout);

/***/ }),

/***/ "./src/js/eventListeners.js":
/*!**********************************!*\
  !*** ./src/js/eventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PageLogic = /*#__PURE__*/function () {
  function PageLogic() {
    _classCallCheck(this, PageLogic);
    this.body = document.querySelector('body');
  }
  _createClass(PageLogic, [{
    key: "init",
    value: function init() {
      this.bodyEventDelegation();
    }
  }, {
    key: "bodyEventDelegation",
    value: function bodyEventDelegation() {
      var _this = this;
      this.body.addEventListener('change', function (event) {
        if (event.target.matches('#chk')) {
          var label = event.target.nextElementSibling;
          console.log(label);
          _this.toggleThemeBtn(label);
        }
      });
    }
  }, {
    key: "toggleThemeBtn",
    value: function toggleThemeBtn(label) {
      this.body.classList.toggle('light-mode');
      if (label.title === 'Switch to dark mode') {
        label.title = 'Switch to light mode';
      } else {
        label.title = 'Switch to dark mode';
      }
    }
  }]);
  return PageLogic;
}();
var pageLogic = new PageLogic();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLogic);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\nBasic CSS styles for a page layout with header, main content, and footer sections.\r\n*/\r\n:root {\r\n  --color-primary: #202123;\r\n  --color-secondary: #343641;\r\n  --color-tertiary: #444654;\r\n  --color-quaternary: #343541;\r\n  --font-color: #ffffff;\r\n  --font-color-table:#ffffff; \r\n\r\n  /* Button dark/light mode colors\r\n  --button-background:#89c7e7;\r\n  --button-circle:#f8ed62;\r\n */\r\n  --button-background:#444654;\r\n  --button-circle:#fffec8;\r\n}\r\n\r\n.light-mode {\r\n  --color-primary: #2f5061;\r\n  --color-secondary: #4297a0;\r\n  --color-tertiary: #f4eae6;\r\n  --color-quaternary: #f4eae6;\r\n  --font-color: #ffffff;\r\n  --font-color-table:#000000; \r\n\r\n  /* Button dark/light mode colors #ffa17f */\r\n  --button-background: #131862;\r\n  --button-circle: #546bab;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody{\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* Setting the delay transition to smoothly toggle between dark and light mode */\r\nbody,\r\nheader,\r\n.sideBar,\r\n.content,\r\nfooter {\r\n  transition: 1s;\r\n}\r\n/* Container to wrap all the content */\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  transition: 1s;\r\n}\r\n\r\n/* Header basic setup */\r\n\r\nheader {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  padding: 5px 10px;\r\n  background-color: var(--color-primary);\r\n}\r\n\r\nheader .logoContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  font-size: larger;\r\n  color: var(--font-color);\r\n}\r\n\r\nheader img {\r\n  width: 50px;\r\n}\r\n\r\n/* Button dark/light settings */\r\n.checkbox {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.label {\r\n  background-color: var(--button-background);\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n  position: relative;\r\n  height: 20px;\r\n  width: 50px;\r\n  transform: scale(1);\r\n  transition: 1s;\r\n}\r\n\r\n.label .ball {\r\n  background-color: var(--button-circle);\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border: 1px solid var(--button-background);\r\n  box-sizing: border-box;\r\n  left: 3px;\r\n  height: 25px;\r\n  width: 24px;\r\n  transform: translateX(0px);\r\n  transition: transform 0.5s linear;\r\n}\r\n\r\n.checkbox:checked + .label .ball {\r\n  transform: translateX(30px);\r\n}\r\n\r\n.fa-moon {\r\n  color: #546bab;\r\n}\r\n\r\n.fa-sun {\r\n  color: \t#fffec8;\r\n}\r\n\r\n/*Class to hide all the attributes to help the app be more accessible for screen readers */\r\n.visually-hidden {\r\n  display: none;\r\n}\r\n\r\n/* Main basic setup */\r\n.contentContainer {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n}\r\n\r\n.contentContainer .sideBar {\r\n  flex: 1;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.contentContainer .content {\r\n  flex: 3;\r\n  background-color: var(--color-tertiary);\r\n}\r\n\r\n/* Footer basic setup */\r\nfooter {\r\n  text-align: center;\r\n  background-color: var(--color-primary);\r\n  color: var(--font-color);\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter a:hover {\r\n  color: lightgrey;\r\n}\r\n\r\n/* hidden class*/\r\n.hidden{\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;;EAE1B;;;EAGA;EACA,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;;EAE1B,0CAA0C;EAC1C,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;AACA,gFAAgF;AAChF;;;;;EAKE,cAAc;AAChB;AACA,sCAAsC;AACtC;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,cAAc;AAChB;;AAEA,uBAAuB;;AAEvB;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,kBAAkB;EAClB,0CAA0C;EAC1C,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA,0FAA0F;AAC1F;EACE,aAAa;AACf;;AAEA,qBAAqB;AACrB;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,OAAO;EACP,wCAAwC;AAC1C;;AAEA;EACE,OAAO;EACP,uCAAuC;AACzC;;AAEA,uBAAuB;AACvB;EACE,kBAAkB;EAClB,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,aAAa;AACf","sourcesContent":["/*\r\nBasic CSS styles for a page layout with header, main content, and footer sections.\r\n*/\r\n:root {\r\n  --color-primary: #202123;\r\n  --color-secondary: #343641;\r\n  --color-tertiary: #444654;\r\n  --color-quaternary: #343541;\r\n  --font-color: #ffffff;\r\n  --font-color-table:#ffffff; \r\n\r\n  /* Button dark/light mode colors\r\n  --button-background:#89c7e7;\r\n  --button-circle:#f8ed62;\r\n */\r\n  --button-background:#444654;\r\n  --button-circle:#fffec8;\r\n}\r\n\r\n.light-mode {\r\n  --color-primary: #2f5061;\r\n  --color-secondary: #4297a0;\r\n  --color-tertiary: #f4eae6;\r\n  --color-quaternary: #f4eae6;\r\n  --font-color: #ffffff;\r\n  --font-color-table:#000000; \r\n\r\n  /* Button dark/light mode colors #ffa17f */\r\n  --button-background: #131862;\r\n  --button-circle: #546bab;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody{\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* Setting the delay transition to smoothly toggle between dark and light mode */\r\nbody,\r\nheader,\r\n.sideBar,\r\n.content,\r\nfooter {\r\n  transition: 1s;\r\n}\r\n/* Container to wrap all the content */\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  transition: 1s;\r\n}\r\n\r\n/* Header basic setup */\r\n\r\nheader {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  padding: 5px 10px;\r\n  background-color: var(--color-primary);\r\n}\r\n\r\nheader .logoContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n  font-size: larger;\r\n  color: var(--font-color);\r\n}\r\n\r\nheader img {\r\n  width: 50px;\r\n}\r\n\r\n/* Button dark/light settings */\r\n.checkbox {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.label {\r\n  background-color: var(--button-background);\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n  position: relative;\r\n  height: 20px;\r\n  width: 50px;\r\n  transform: scale(1);\r\n  transition: 1s;\r\n}\r\n\r\n.label .ball {\r\n  background-color: var(--button-circle);\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border: 1px solid var(--button-background);\r\n  box-sizing: border-box;\r\n  left: 3px;\r\n  height: 25px;\r\n  width: 24px;\r\n  transform: translateX(0px);\r\n  transition: transform 0.5s linear;\r\n}\r\n\r\n.checkbox:checked + .label .ball {\r\n  transform: translateX(30px);\r\n}\r\n\r\n.fa-moon {\r\n  color: #546bab;\r\n}\r\n\r\n.fa-sun {\r\n  color: \t#fffec8;\r\n}\r\n\r\n/*Class to hide all the attributes to help the app be more accessible for screen readers */\r\n.visually-hidden {\r\n  display: none;\r\n}\r\n\r\n/* Main basic setup */\r\n.contentContainer {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n}\r\n\r\n.contentContainer .sideBar {\r\n  flex: 1;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.contentContainer .content {\r\n  flex: 3;\r\n  background-color: var(--color-tertiary);\r\n}\r\n\r\n/* Footer basic setup */\r\nfooter {\r\n  text-align: center;\r\n  background-color: var(--color-primary);\r\n  color: var(--font-color);\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter a:hover {\r\n  color: lightgrey;\r\n}\r\n\r\n/* hidden class*/\r\n.hidden{\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Basic Modal specifications */\r\n.modal {\r\n  position: absolute;\r\n  top: 20%;\r\n  z-index: 2;\r\n\r\n  box-sizing: border-box;\r\n  border: 1px solid var(--color-tertiary);\r\n  border-radius: 10px;\r\n  background-color: var(--color-tertiary);\r\n}\r\n/* specifications to Create a Task modal */\r\n\r\n.modal-createHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n  padding: 10px;\r\n  background-color: var(--color-primary);\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.modal-createHeader h1 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-createHeader button {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: var(--font-color);\r\n  font-size: 1.3rem;\r\n  font-weight: 300;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-createHeader button:hover {\r\n  color: var(--color-tertiary);\r\n}\r\n\r\n.modal-createHeader button:active {\r\n  color: var(--color-secondary);\r\n}\r\n\r\n/* content input */\r\n\r\n.modal-createContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.modal-createContent input,\r\n.modal-createContent textarea{\r\n  box-sizing: border-box;\r\n  padding: 5px;\r\n  background-color: var(--color-tertiary);\r\n  border: none;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.modal-createContent input:focus,\r\n.modal-createContent textarea:focus{\r\n  outline: none;\r\n}\r\n.modal-createContent input::placeholder,\r\n.modal-createContent textarea::placeholder{\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.modal-createContent input{\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.modal-createContent textarea{\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* Create Footer modal setup */\r\n.modal-createFooter{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 15px 15px 15px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-size: 1.3rem;\r\n}\r\n/* Date input setup */\r\n.modal-createFooter .date-modalFooter{\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--font-color-table);\r\n} \r\n\r\n.modal-createFooter .date-modalFooter input[type='date']{\r\n  font-size: 1.2rem;\r\n  border-radius: 10px;\r\n  border: 1px solid #4dab9e;\r\n  padding: 3px;\r\n  margin-left: 10px;\r\n  background-color: var(--color-tertiary);\r\n  color: #4dab9e;\r\n  text-align: center;\r\n  width: 150px;\r\n}\r\n\r\n.modal-createFooter .date-modalFooter input[type='date']::-webkit-calendar-picker-indicator{\r\n  text-align: center;\r\n}\r\n\r\n.priority-modalFooter{\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.priority-modalFooter button{\r\n  font-size: 1.2rem;\r\n  color: var(--font-color-table);\r\n  background-color: var(--color-tertiary);\r\n  padding: 3px 10px;\r\n  border: none;\r\n  border-radius:10px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n\r\n.priority-modalFooter button:active{\r\n  background-color: white;\r\n  color: aliceblue;\r\n}\r\n\r\n.lowBtn{\r\n  border: 1px solid orange !important;\r\n  color: orange !important;\r\n}\r\n\r\n.lowBtn:hover{\r\n  background-color: orange;\r\n  color: black !important;\r\n}\r\n.mediumBtn{\r\n  border: 1px solid #05ef05 !important;\r\n  color: #05ef05 !important;\r\n}\r\n\r\n.mediumBtn:hover{\r\n  background-color: #05ef05;\r\n  color: black !important;\r\n}\r\n.highBtn{\r\n  border: 1px solid red !important;\r\n  color: red !important;\r\n}\r\n\r\n.highBtn:hover{\r\n  background-color: red;\r\n  color: black !important;\r\n}\r\n\r\n/* submit button */\r\n\r\n.modal-createSubmitBtn{\r\n  margin-top: auto;\r\n  font-size: 1.2rem;\r\n  color: var(--font-color-table);\r\n  border:1px solid var(--color-primary);\r\n  border-radius: 10px;\r\n  background-color: transparent;\r\n  padding: 5px 10px;\r\n  transition: 1s;\r\n}\r\n\r\n.modal-createSubmitBtn:hover{\r\n  background-color: var(--color-primary);\r\n  color: var(--font-color);\r\n}\r\n\r\n.modal-createSubmitBtn:active{\r\n  background-color: white;\r\n  \r\n}\r\n\r\n/* Overlay specifications */\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,+BAA+B;AAC/B;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;;EAEV,sBAAsB;EACtB,uCAAuC;EACvC,mBAAmB;EACnB,uCAAuC;AACzC;AACA,0CAA0C;;AAE1C;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;AACA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,uCAAuC;EACvC,YAAY;EACZ,8BAA8B;AAChC;;AAEA;;EAEE,aAAa;AACf;AACA;;EAEE,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;EACX,sBAAsB;EACtB,iBAAiB;AACnB;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,uCAAuC;EACvC,cAAc;EACd,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,uCAAuC;EACvC,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;AACA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;AACA;EACE,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA,kBAAkB;;AAElB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,8BAA8B;EAC9B,qCAAqC;EACrC,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;;AAEzB;;AAEA,2BAA2B;AAC3B;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ","sourcesContent":["/* Basic Modal specifications */\r\n.modal {\r\n  position: absolute;\r\n  top: 20%;\r\n  z-index: 2;\r\n\r\n  box-sizing: border-box;\r\n  border: 1px solid var(--color-tertiary);\r\n  border-radius: 10px;\r\n  background-color: var(--color-tertiary);\r\n}\r\n/* specifications to Create a Task modal */\r\n\r\n.modal-createHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n  padding: 10px;\r\n  background-color: var(--color-primary);\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.modal-createHeader h1 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-createHeader button {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: var(--font-color);\r\n  font-size: 1.3rem;\r\n  font-weight: 300;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-createHeader button:hover {\r\n  color: var(--color-tertiary);\r\n}\r\n\r\n.modal-createHeader button:active {\r\n  color: var(--color-secondary);\r\n}\r\n\r\n/* content input */\r\n\r\n.modal-createContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.modal-createContent input,\r\n.modal-createContent textarea{\r\n  box-sizing: border-box;\r\n  padding: 5px;\r\n  background-color: var(--color-tertiary);\r\n  border: none;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.modal-createContent input:focus,\r\n.modal-createContent textarea:focus{\r\n  outline: none;\r\n}\r\n.modal-createContent input::placeholder,\r\n.modal-createContent textarea::placeholder{\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.modal-createContent input{\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.modal-createContent textarea{\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* Create Footer modal setup */\r\n.modal-createFooter{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 15px 15px 15px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-size: 1.3rem;\r\n}\r\n/* Date input setup */\r\n.modal-createFooter .date-modalFooter{\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--font-color-table);\r\n} \r\n\r\n.modal-createFooter .date-modalFooter input[type='date']{\r\n  font-size: 1.2rem;\r\n  border-radius: 10px;\r\n  border: 1px solid #4dab9e;\r\n  padding: 3px;\r\n  margin-left: 10px;\r\n  background-color: var(--color-tertiary);\r\n  color: #4dab9e;\r\n  text-align: center;\r\n  width: 150px;\r\n}\r\n\r\n.modal-createFooter .date-modalFooter input[type='date']::-webkit-calendar-picker-indicator{\r\n  text-align: center;\r\n}\r\n\r\n.priority-modalFooter{\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.priority-modalFooter button{\r\n  font-size: 1.2rem;\r\n  color: var(--font-color-table);\r\n  background-color: var(--color-tertiary);\r\n  padding: 3px 10px;\r\n  border: none;\r\n  border-radius:10px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n\r\n.priority-modalFooter button:active{\r\n  background-color: white;\r\n  color: aliceblue;\r\n}\r\n\r\n.lowBtn{\r\n  border: 1px solid orange !important;\r\n  color: orange !important;\r\n}\r\n\r\n.lowBtn:hover{\r\n  background-color: orange;\r\n  color: black !important;\r\n}\r\n.mediumBtn{\r\n  border: 1px solid #05ef05 !important;\r\n  color: #05ef05 !important;\r\n}\r\n\r\n.mediumBtn:hover{\r\n  background-color: #05ef05;\r\n  color: black !important;\r\n}\r\n.highBtn{\r\n  border: 1px solid red !important;\r\n  color: red !important;\r\n}\r\n\r\n.highBtn:hover{\r\n  background-color: red;\r\n  color: black !important;\r\n}\r\n\r\n/* submit button */\r\n\r\n.modal-createSubmitBtn{\r\n  margin-top: auto;\r\n  font-size: 1.2rem;\r\n  color: var(--font-color-table);\r\n  border:1px solid var(--color-primary);\r\n  border-radius: 10px;\r\n  background-color: transparent;\r\n  padding: 5px 10px;\r\n  transition: 1s;\r\n}\r\n\r\n.modal-createSubmitBtn:hover{\r\n  background-color: var(--color-primary);\r\n  color: var(--font-color);\r\n}\r\n\r\n.modal-createSubmitBtn:active{\r\n  background-color: white;\r\n  \r\n}\r\n\r\n/* Overlay specifications */\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebarMenu.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sidebarMenu.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Navbar from sideBar set up*/\r\n\r\n.sideBar{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--font-color);\r\n    font-size: 1.1rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sideBar ul{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.sideBar li{\r\n    list-style: none;\r\n    padding: 10px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: 1s;\r\n}\r\n\r\n.sideBar li:hover{\r\n    background-color: var(--color-tertiary);\r\n}\r\n\r\n.sideBar .addComponent{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n/* make a click effect */\r\n.sideBar li:active {\r\n    background-color: #ccc; \r\n    color: #fff; \r\n  }\r\n\r\n.sideBar li i{\r\n    padding: 0px 10px;\r\n}\r\n\r\n.menuDefault{\r\n    border-bottom: 1px solid white;\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    padding: 25px 0px 25px 0px;\r\n}\r\n\r\n.containerDynamicMenu{\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.containerDynamicMenu .displayFolder{\r\n    flex: 1;\r\n    margin-top: 20px !important;\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: auto;\r\n    max-height: 240px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/sidebarMenu.css"],"names":[],"mappings":"AAAA,6BAA6B;;AAE7B;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,wBAAwB;AACxB;IACI,sBAAsB;IACtB,WAAW;EACb;;AAEF;IACI,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,2BAA2B;IAC3B,UAAU;IACV,SAAS;IACT,UAAU;IACV,cAAc;IACd,iBAAiB;AACrB","sourcesContent":["/*Navbar from sideBar set up*/\r\n\r\n.sideBar{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--font-color);\r\n    font-size: 1.1rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sideBar ul{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.sideBar li{\r\n    list-style: none;\r\n    padding: 10px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: 1s;\r\n}\r\n\r\n.sideBar li:hover{\r\n    background-color: var(--color-tertiary);\r\n}\r\n\r\n.sideBar .addComponent{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n/* make a click effect */\r\n.sideBar li:active {\r\n    background-color: #ccc; \r\n    color: #fff; \r\n  }\r\n\r\n.sideBar li i{\r\n    padding: 0px 10px;\r\n}\r\n\r\n.menuDefault{\r\n    border-bottom: 1px solid white;\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    padding: 25px 0px 25px 0px;\r\n}\r\n\r\n.containerDynamicMenu{\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.containerDynamicMenu .displayFolder{\r\n    flex: 1;\r\n    margin-top: 20px !important;\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: auto;\r\n    max-height: 240px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tasksTable.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tasksTable.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.content .tasksDisplay {\r\n  width: 80%;\r\n  height: 80%;\r\n  box-sizing: border-box;\r\n  max-height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: auto;\r\n}\r\n\r\n.tasksDisplay h1 {\r\n  padding-left: 10px;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.tasksDisplay .tasksTable {\r\n  flex: 2 1 auto;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n}\r\n\r\n/* Button eraser settings */\r\n\r\n.content .buttonEraser{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    margin-top: auto;\r\n}\r\n\r\n.buttonEraser button {\r\n    padding: 7px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: 1.1rem;\r\n    background-color: var(--color-primary);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.buttonEraser button:active {\r\n    background-color: var(--color-secondary); \r\n    color: #fff; \r\n  }\r\n", "",{"version":3,"sources":["webpack://./src/css/tasksTable.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,sCAAsC;IACtC,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,wCAAwC;IACxC,WAAW;EACb","sourcesContent":[".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--font-color-table);\r\n}\r\n\r\n.content .tasksDisplay {\r\n  width: 80%;\r\n  height: 80%;\r\n  box-sizing: border-box;\r\n  max-height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: auto;\r\n}\r\n\r\n.tasksDisplay h1 {\r\n  padding-left: 10px;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.tasksDisplay .tasksTable {\r\n  flex: 2 1 auto;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n}\r\n\r\n/* Button eraser settings */\r\n\r\n.content .buttonEraser{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    margin-top: auto;\r\n}\r\n\r\n.buttonEraser button {\r\n    padding: 7px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: 1.1rem;\r\n    background-color: var(--color-primary);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.buttonEraser button:active {\r\n    background-color: var(--color-secondary); \r\n    color: #fff; \r\n  }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/sidebarMenu.css":
/*!*********************************!*\
  !*** ./src/css/sidebarMenu.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebarMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebarMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/tasksTable.css":
/*!********************************!*\
  !*** ./src/css/tasksTable.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasksTable_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tasksTable.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tasksTable.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasksTable_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasksTable_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasksTable_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasksTable_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/greyNote.png":
/*!*********************************!*\
  !*** ./src/assets/greyNote.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "greyNote.png";

/***/ }),

/***/ "./src/assets/lista.png":
/*!******************************!*\
  !*** ./src/assets/lista.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lista.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildPage */ "./src/js/buildPage.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ "./src/js/eventListeners.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_sidebarMenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/sidebarMenu.css */ "./src/css/sidebarMenu.css");
/* harmony import */ var _css_tasksTable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/tasksTable.css */ "./src/css/tasksTable.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/modal.css */ "./src/css/modal.css");


// main css style page




_buildPage__WEBPACK_IMPORTED_MODULE_0__["default"].init();
_eventListeners__WEBPACK_IMPORTED_MODULE_1__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=bundle92ede88f3277348886ab.js.map