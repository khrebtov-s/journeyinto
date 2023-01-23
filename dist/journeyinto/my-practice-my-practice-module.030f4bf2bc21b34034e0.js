(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-practice-my-practice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/item/my-practice-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/my-practice/item/my-practice-detail.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>My practice detail works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/list/my-practices.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/my-practice/list/my-practices.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>My practices works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/my-practice.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/my-practice/my-practice.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"creator && !spinner.isShowing.value\">\n  <section *ngIf=\"isSubscribedUser\">\n    <h1 class=\"text-display-2\">All classes</h1>\n    <ul *ngIf=\"teacherClasses.length > 0; else noTeacherClasses\">\n      <li *ngFor=\"let userClass of teacherClasses\">\n        <app-class-card \n          [singleClass]=\"userClass\"\n          [teacher]=\"creator\"></app-class-card>\n      </li>\n    </ul>    \n\n    <ng-template #noTeacherClasses>\n      <p>Sorry, your teacher hasn't added any classes yet.</p>\n    </ng-template>\n  </section>\n  \n  <!-- if not subscribed -->\n  <ng-container *ngIf=\"!isSubscribedUser\">\n    <section class=\"subscribe-cta\">\n      <h1 class=\"text-display-2\">Why subscribe?</h1>\n      <hr>\n      <p>Your teacher is creating new content every week so you can practice anywhere, any time with the support of their familiar phrasing and sequences.</p>\n\n      <button \n        mat-ripple \n        class=\"btn\"\n        (click)=\"subscribeToTeacher()\">Subscribe to {{creator.first_name}} for {{creator.product.cost | currency : creator.currency.toUpperCase()}} a {{ creator.product.frequency }}</button>\n    </section>\n  \n    <!-- Teachers classes -->\n    <section>\n      <h1 class=\"text-display-2\">Your latest classes</h1>\n      <ul *ngIf=\"teacherClasses.length; else emptyTeacherClasses\">\n        <li *ngFor=\"let class of teacherClasses\">\n          <app-class-card \n            [teacher]=\"creator\"\n            [singleClass]=\"class\"\n            [customContent]=\"true\">\n            <div class=\"two-col-btns\"\n              *ngIf=\"!class.is_bought\">\n              <!-- <a class=\"btn btn-small btn-bordered\"\n                (click)=\"subscribeToTeacher(class)\">Buy for £5.00</a> -->\n              <a class=\"btn btn-small btn-bordered\"\n                (click)=\"subscribeToTeacher()\">Subscribe for {{creator.product.cost | currency: creator.currency.toUpperCase() }}</a>\n            </div>\n            <a class=\"btn btn-small btn-bordered\"\n                *ngIf=\"class.is_bought\"\n                [routerLink]=\"['/', routeNames.teachers, creator.slug, routeNames.recordings, class.slug]\">Practice</a>\n          </app-class-card>\n        </li>\n      </ul>\n      <ng-template #emptyTeacherClasses>\n        <p>Your teacher has no classes.</p>\n      </ng-template>\n    </section>\n\n    <section>\n      <!-- Sample classes -->\n      <h1 class=\"text-display-2\">Sample class</h1>\n      <ul *ngIf=\"sampleClasses.length; else emptySampleClasses\">\n        <li *ngFor=\"let class of sampleClasses\">\n          <app-class-card \n            [singleClass]=\"class\"\n            [teacher]=\"creator\"></app-class-card>\n        </li>\n      </ul>\n      <ng-template #emptySampleClasses>\n        <p>Your teacher has no sample classes.</p>\n      </ng-template>\n    </section>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/student/my-practice/item/my-practice-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/student/my-practice/item/my-practice-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvbXktcHJhY3RpY2UvaXRlbS9teS1wcmFjdGljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/student/my-practice/item/my-practice-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/student/my-practice/item/my-practice-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyPracticeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPracticeDetailComponent", function() { return MyPracticeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyPracticeDetailComponent = /** @class */ (function () {
    function MyPracticeDetailComponent() {
    }
    MyPracticeDetailComponent.prototype.ngOnInit = function () { };
    MyPracticeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-practice-detail',
            template: __webpack_require__(/*! raw-loader!./my-practice-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/item/my-practice-detail.component.html"),
            styles: [__webpack_require__(/*! ./my-practice-detail.component.scss */ "./src/app/pages/student/my-practice/item/my-practice-detail.component.scss")]
        })
    ], MyPracticeDetailComponent);
    return MyPracticeDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/my-practice/list/my-practices.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/student/my-practice/list/my-practices.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvbXktcHJhY3RpY2UvbGlzdC9teS1wcmFjdGljZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/student/my-practice/list/my-practices.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/student/my-practice/list/my-practices.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyPracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPracticesComponent", function() { return MyPracticesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPracticesComponent = /** @class */ (function () {
    function MyPracticesComponent() {
    }
    MyPracticesComponent.prototype.ngOnInit = function () { };
    MyPracticesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-practices',
            template: __webpack_require__(/*! raw-loader!./my-practices.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/list/my-practices.component.html"),
            styles: [__webpack_require__(/*! ./my-practices.component.scss */ "./src/app/pages/student/my-practice/list/my-practices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPracticesComponent);
    return MyPracticesComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/my-practice/my-practice.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/student/my-practice/my-practice.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section:first-child {\n    margin-top: 24px; }\n  section h1 {\n    margin-bottom: 20px; }\n  section hr {\n    margin-bottom: 30px; }\n  .subscribe-cta button {\n  margin-top: 30px; }\n  ul li {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N0dWRlbnQvbXktcHJhY3RpY2UvbXktcHJhY3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGdCQUFnQixFQUFBO0VBSnhCO0lBUVEsbUJBQW1CLEVBQUE7RUFSM0I7SUFZUSxtQkFBbUIsRUFBQTtFQUkzQjtFQUVRLGdCQUFnQixFQUFBO0VBSXhCO0VBRVEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkZW50L215LXByYWN0aWNlL215LXByYWN0aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxufVxuXG4uc3Vic2NyaWJlLWN0YSB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59XG5cbnVsIHtcbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/student/my-practice/my-practice.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/student/my-practice/my-practice.component.ts ***!
  \********************************************************************/
/*! exports provided: MyPracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPracticeComponent", function() { return MyPracticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyPracticeComponent = /** @class */ (function () {
    function MyPracticeComponent(store, router, spinner) {
        this.store = store;
        this.router = router;
        this.spinner = spinner;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"];
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (user) { return Boolean(user); }));
        this.user = null;
        this.creator = null;
        this.sampleClasses = [];
        this.teacherClasses = [];
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__["ViewStatuses"];
        this.emptyField = 'n/a';
    }
    MyPracticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ('GetCurrentUserRequestAction');
        this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetCurrentUserRequestAction"]());
        this.subscriptions.push(this.user$.subscribe(function (user) {
            _this.user = user;
            if (_this.user.creators.length) {
                _this.creator = user.creators[0].creator;
                // ({creator: this.creator});
                if (_this.creator) {
                    // hideoverlay
                    // console.log('hide spinner');
                    _this.spinner.hide();
                    _this.isSubscribedUser = _this.creator.subscribed.length > 0;
                    _this.teacherClasses = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.orderBy(_this.creator.classes, ['is_bought', 'created_at'], ['desc', 'desc']);
                    _this.sampleClasses = _this.creator.sample_classes;
                }
                else {
                    _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetCurrentUserRequestAction"]());
                }
            }
        }));
    };
    MyPracticeComponent.prototype.subscribeToTeacher = function (classBought) {
        if (classBought === void 0) { classBought = false; }
        this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].student, _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].subscription], {
            state: {
                data: { classBought: classBought }
            }
        });
    };
    MyPracticeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    MyPracticeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"] }
    ]; };
    MyPracticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-practice',
            template: __webpack_require__(/*! raw-loader!./my-practice.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/my-practice/my-practice.component.html"),
            styles: [__webpack_require__(/*! ./my-practice.component.scss */ "./src/app/pages/student/my-practice/my-practice.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"]])
    ], MyPracticeComponent);
    return MyPracticeComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/my-practice/my-practice.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/student/my-practice/my-practice.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyPracticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPracticeModule", function() { return MyPracticeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_pages_student_my_practice_my_practice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/pages/student/my-practice/my-practice.component */ "./src/app/pages/student/my-practice/my-practice.component.ts");
/* harmony import */ var _list_my_practices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/my-practices.component */ "./src/app/pages/student/my-practice/list/my-practices.component.ts");
/* harmony import */ var _item_my_practice_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/my-practice-detail.component */ "./src/app/pages/student/my-practice/item/my-practice-detail.component.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.module */ "./src/app/components/coming-soon/coming-soon.module.ts");
/* harmony import */ var _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/class-card/class-card.module */ "./src/app/components/class-card/class-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MyPracticeModule = /** @class */ (function () {
    function MyPracticeModule() {
    }
    MyPracticeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_8__["ComingSoonModule"],
                _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_9__["ClassCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _src_app_pages_student_my_practice_my_practice_component__WEBPACK_IMPORTED_MODULE_4__["MyPracticeComponent"],
                        data: {
                            title: 'My practice',
                            goBack: false
                        }
                    },
                    {
                        path: 'all',
                        // component: MyPracticesComponent,
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_7__["ComingSoonComponent"],
                        data: {
                            title: 'All of my practices',
                            goBack: true
                        }
                    },
                    {
                        path: ':className',
                        // component: MyPracticeDetailComponent,
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_7__["ComingSoonComponent"],
                        data: {
                            title: 'My practice Detail',
                            goBack: true
                        }
                    }
                ])
            ],
            declarations: [
                _src_app_pages_student_my_practice_my_practice_component__WEBPACK_IMPORTED_MODULE_4__["MyPracticeComponent"],
                _list_my_practices_component__WEBPACK_IMPORTED_MODULE_5__["MyPracticesComponent"],
                _item_my_practice_detail_component__WEBPACK_IMPORTED_MODULE_6__["MyPracticeDetailComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], MyPracticeModule);
    return MyPracticeModule;
}());



/***/ })

}]);
//# sourceMappingURL=my-practice-my-practice-module.030f4bf2bc21b34034e0.js.map