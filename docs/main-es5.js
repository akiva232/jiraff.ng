function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./c/jiraff-Administration/j-page/j-page.component */
    "./src/app/c/jiraff-Administration/j-page/j-page.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'giraffe';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-j-page");
        }
      },
      directives: [_c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__["JPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./c/jiraff-Administration/j-page/j-page.component */
    "./src/app/c/jiraff-Administration/j-page/j-page.component.ts");
    /* harmony import */


    var _c_jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./c/jiraff-Administration/j-item/j-item.component */
    "./src/app/c/jiraff-Administration/j-item/j-item.component.ts");
    /* harmony import */


    var _c_jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./c/jiraff-Administration/j-details/j-details.component */
    "./src/app/c/jiraff-Administration/j-details/j-details.component.ts");
    /* harmony import */


    var _c_jiraff_Administration_jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./c/jiraff-Administration/jlabel-span/jlabel-span.component */
    "./src/app/c/jiraff-Administration/jlabel-span/jlabel-span.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _c_jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _c_jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _c_jiraff_Administration_jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_6__["JlabelSpanComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _c_jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _c_jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _c_jiraff_Administration_jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_6__["JlabelSpanComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _c_jiraff_Administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _c_jiraff_Administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _c_jiraff_Administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _c_jiraff_Administration_jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_6__["JlabelSpanComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/c/jiraff-Administration/j-details/j-details.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/c/jiraff-Administration/j-details/j-details.component.ts ***!
    \**************************************************************************/

  /*! exports provided: JDetailsComponent */

  /***/
  function srcAppCJiraffAdministrationJDetailsJDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JDetailsComponent", function () {
      return JDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jlabel-span/jlabel-span.component */
    "./src/app/c/jiraff-Administration/jlabel-span/jlabel-span.component.ts");

    function JDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx_r0.j.isBossy ? " bossy" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jib", ctx_r0.j.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.j.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.color);
      }
    }

    var JDetailsComponent = /*#__PURE__*/function () {
      function JDetailsComponent() {
        _classCallCheck(this, JDetailsComponent);
      }

      _createClass(JDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JDetailsComponent;
    }();

    JDetailsComponent.ɵfac = function JDetailsComponent_Factory(t) {
      return new (t || JDetailsComponent)();
    };

    JDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JDetailsComponent,
      selectors: [["j-details"]],
      inputs: {
        j: "j"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], ["label", "height", 3, "val"], ["label", "color", 3, "val"]],
      template: function JDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JDetailsComponent_div_0_Template, 5, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.j);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_2__["JlabelSpanComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvamlyYWZmLUFkbWluaXN0cmF0aW9uL2otZGV0YWlscy9qLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'j-details',
          templateUrl: './j-details.component.html',
          styleUrls: ['./j-details.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/c/jiraff-Administration/j-item/j-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/c/jiraff-Administration/j-item/j-item.component.ts ***!
    \********************************************************************/

  /*! exports provided: JItemComponent */

  /***/
  function srcAppCJiraffAdministrationJItemJItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JItemComponent", function () {
      return JItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jlabel-span/jlabel-span.component */
    "./src/app/c/jiraff-Administration/jlabel-span/jlabel-span.component.ts");

    var JItemComponent = /*#__PURE__*/function () {
      function JItemComponent() {
        _classCallCheck(this, JItemComponent);

        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // @Output() dbclickNote = new EventEmitter<null>()

        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomColorNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JItemComponent, [{
        key: "deleteNoteFn",
        value: function deleteNoteFn() {
          this.deleteNote.emit(this.j.id);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.randomColorNote.emit(_this.j.color);
          }, 1000 * this.j.id);
        }
      }]);

      return JItemComponent;
    }();

    JItemComponent.ɵfac = function JItemComponent_Factory(t) {
      return new (t || JItemComponent)();
    };

    JItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JItemComponent,
      selectors: [["j-item"]],
      inputs: {
        j: "j"
      },
      outputs: {
        clickNote: "clickNote",
        deleteNote: "deleteNote",
        randomColorNote: "randomColorNote"
      },
      decls: 7,
      vars: 6,
      consts: [[3, "click"], ["label", "height", 3, "val"], ["label", "color", 3, "val"]],
      template: function JItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_div_click_0_listener() {
            return ctx.clickNote.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_button_click_5_listener() {
            return ctx.deleteNoteFn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx.j.isBossy ? " bossy" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jib", ctx.j.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.j.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.color);
        }
      },
      directives: [_jlabel_span_jlabel_span_component__WEBPACK_IMPORTED_MODULE_1__["JlabelSpanComponent"]],
      styles: [".j-item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 1px solid green;\r\n    margin: 4px;\r\n}\r\n\r\n.j-item.bossy[_ngcontent-%COMP%]{\r\n       background-color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy9qaXJhZmYtQWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO09BQ08sdUJBQXVCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYy9qaXJhZmYtQWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5qLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uai1pdGVtLmJvc3N5e1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'j-item',
          templateUrl: './j-item.component.html',
          styleUrls: ['./j-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        randomColorNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/c/jiraff-Administration/j-page/j-page.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/c/jiraff-Administration/j-page/j-page.component.ts ***!
    \********************************************************************/

  /*! exports provided: JPageComponent, jiraff */

  /***/
  function srcAppCJiraffAdministrationJPageJPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JPageComponent", function () {
      return JPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jiraff", function () {
      return jiraff;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function JPageComponent_j_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "j-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function JPageComponent_j_item_4_Template_j_item_clickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var j_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectedj = j_r1;
        })("deleteNote", function JPageComponent_j_item_4_Template_j_item_deleteNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var j_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deletej(j_r1);
        })("randomColorNote", function JPageComponent_j_item_4_Template_j_item_randomColorNote_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.bgRND = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", j_r1);
      }
    }

    var JPageComponent = /*#__PURE__*/function () {
      function JPageComponent() {
        _classCallCheck(this, JPageComponent);

        //data
        this.jiraffsArray = [{
          id: 1,
          name: "shuki",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 2,
          name: "moshe",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 3,
          name: "shuki",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 4,
          name: "yakov",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 5,
          name: "shuki",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 6,
          name: "edna",
          height: 5.55,
          color: "black",
          isBossy: true
        }, {
          id: 7,
          name: "shuki",
          height: 5.55,
          color: "yellow",
          isBossy: false
        }, {
          id: 8,
          name: "shuki",
          height: 5.55,
          color: "blue",
          isBossy: false
        }, {
          id: 9,
          name: "shuki",
          height: 5.55,
          color: "pink",
          isBossy: true
        }];
      }

      _createClass(JPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deletej",
        value: function deletej(j) {
          var index = this.jiraffsArray.findIndex(function (j) {
            return j.id == j.id;
          });
          this.jiraffsArray.splice(index, 1);
        }
      }]);

      return JPageComponent;
    }();

    JPageComponent.ɵfac = function JPageComponent_Factory(t) {
      return new (t || JPageComponent)();
    };

    JPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JPageComponent,
      selectors: [["app-j-page"]],
      decls: 6,
      vars: 4,
      consts: [[2, "display", "flex"], [1, "force-jitem"], ["class", "j-item-as-list", 3, "j", "clickNote", "deleteNote", "randomColorNote", 4, "ngFor", "ngForOf"], [3, "j"], [1, "j-item-as-list", 3, "j", "clickNote", "deleteNote", "randomColorNote"]],
      template: function JPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to World jiraff-Administration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JPageComponent_j_item_4_Template, 1, 1, "j-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "j-details", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bgRND, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffsArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", ctx.selectedj);
        }
      },
      styles: [".j-item-as-list[_ngcontent-%COMP%]{\r\n       list-style-type: disc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy9qaXJhZmYtQWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO09BQ08scUJBQXFCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYy9qaXJhZmYtQWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotaXRlbS1hcy1saXN0e1xyXG4gICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-page',
          templateUrl: './j-page.component.html',
          styleUrls: ['./j-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var jiraff = function jiraff() {
      _classCallCheck(this, jiraff);
    };
    /***/

  },

  /***/
  "./src/app/c/jiraff-Administration/jlabel-span/jlabel-span.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/c/jiraff-Administration/jlabel-span/jlabel-span.component.ts ***!
    \******************************************************************************/

  /*! exports provided: JlabelSpanComponent */

  /***/
  function srcAppCJiraffAdministrationJlabelSpanJlabelSpanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JlabelSpanComponent", function () {
      return JlabelSpanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JlabelSpanComponent = /*#__PURE__*/function () {
      function JlabelSpanComponent() {
        _classCallCheck(this, JlabelSpanComponent);

        this.label = '';
        this.val = '';
      }

      _createClass(JlabelSpanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JlabelSpanComponent;
    }();

    JlabelSpanComponent.ɵfac = function JlabelSpanComponent_Factory(t) {
      return new (t || JlabelSpanComponent)();
    };

    JlabelSpanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JlabelSpanComponent,
      selectors: [["label-span"]],
      inputs: {
        label: "label",
        val: "val"
      },
      decls: 5,
      vars: 2,
      template: function JlabelSpanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MvamlyYWZmLUFkbWluaXN0cmF0aW9uL2psYWJlbC1zcGFuL2psYWJlbC1zcGFuLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JlabelSpanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'label-span',
          templateUrl: './jlabel-span.component.html',
          styleUrls: ['./jlabel-span.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        val: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\angular\giraffe\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map