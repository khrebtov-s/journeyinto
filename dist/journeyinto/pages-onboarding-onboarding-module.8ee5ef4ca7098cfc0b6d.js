(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/round-photo/round-photo.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/round-photo/round-photo.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"round-img-container\">\n    <app-icon \n        *ngIf=\"!image\"\n        [icon]=\"'account_icon'\" \n        [width]=\"40\" \n        [height]=\"40\"></app-icon>\n    <img *ngIf=\"image\" [src]=\"image\" />\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/student/onboarding-student.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/onboarding/student/onboarding-student.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"user && user.view_status === viewStatuses.STUDENT\">\n  <ng-container *ngIf=\"!isCompleted\">\n    <div class=\"wrapper\">\n      <section class=\"search-header\">\n        <h1 class=\"title-display-1\">Find your Teacher</h1>\n        <p class=\"title-display-2\">Type your teacher’s name. If you do not have a teacher, select from the list below.</p>\n      </section>\n  \n      <section>\n        <app-errors [errors]=\"errors\"></app-errors>\n        <app-teacher-search\n          [selectable]=\"true\"></app-teacher-search>\n      </section>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"isCompleted\">\n    <app-complete\n      [title]=\"'Thank you for registering'\"\n      [description]=\"'Subscribe to your teachers content and book their classes'\"\n      [icon]=\"'logo-header'\"></app-complete>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <ng-container *ngIf=\"user && user.view_status === viewStatuses.TEACHER\">\n    <app-message [message]=\"usefulMessage\"></app-message>\n    <p class=\"text-display-2\">Your profile is the first thing students see when they search for you. Tell them a bit about yourself, then you can start recording classes your students can subscribe to or purchase.</p>\n    <app-teacher-profile-form \n      [allowSkip]=\"true\"\n      [errors]=\"errors\"\n      (continueClicked)=\"onContinueClicked($event)\"></app-teacher-profile-form>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-message [message]=\"usefulMessage\"></app-message>\n  <section class=\"top-block\">\n    <app-teacher-stripe-form></app-teacher-stripe-form>\n  </section>\n  <p>\n    <a class=\"skip-btn\" [routerLink]=\"'/'\">Skip</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/round-photo/round-photo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.round-img-container {\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid #ededeb;\n  border-radius: 50%;\n  background-color: #fff; }\n.round-img-container img {\n    width: 100%;\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3JvdW5kLXBob3RvL3JvdW5kLXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDRFo7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCRFVTO0VDVFQsa0JBQWtCO0VBQ2xCLHNCREhTLEVBQUE7QUNMYjtJQVdRLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdW5kLXBob3RvL3JvdW5kLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MnO1xuXG4ucm91bmQtaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIDcwKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgd2hpdGUpO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/round-photo/round-photo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoundPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPhotoComponent", function() { return RoundPhotoComponent; });
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

var RoundPhotoComponent = /** @class */ (function () {
    function RoundPhotoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RoundPhotoComponent.prototype, "image", void 0);
    RoundPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-round-photo',
            template: __webpack_require__(/*! raw-loader!./round-photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/round-photo/round-photo.component.html"),
            styles: [__webpack_require__(/*! ./round-photo.component.scss */ "./src/app/components/round-photo/round-photo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoundPhotoComponent);
    return RoundPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/round-photo/round-photo.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.module.ts ***!
  \**************************************************************/
/*! exports provided: RoundPhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPhotoModule", function() { return RoundPhotoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _round_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./round-photo.component */ "./src/app/components/round-photo/round-photo.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/components/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RoundPhotoModule = /** @class */ (function () {
    function RoundPhotoModule() {
    }
    RoundPhotoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__["IconModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_round_photo_component__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoComponent"]],
            exports: [_round_photo_component__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoComponent"]]
        })
    ], RoundPhotoModule);
    return RoundPhotoModule;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
/*! exports provided: OnBoardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingModule", function() { return OnBoardingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_onboarding_student_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student/onboarding-student.module */ "./src/app/pages/onboarding/student/onboarding-student.module.ts");
/* harmony import */ var _teacher_onboarding_teacher_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher/onboarding-teacher.module */ "./src/app/pages/onboarding/teacher/onboarding-teacher.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnBoardingModule = /** @class */ (function () {
    function OnBoardingModule() {
    }
    OnBoardingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _student_onboarding_student_module__WEBPACK_IMPORTED_MODULE_1__["OnBoardingStudentModule"],
                _teacher_onboarding_teacher_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingTeacherModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: []
        })
    ], OnBoardingModule);
    return OnBoardingModule;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/student/onboarding-student.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/onboarding/student/onboarding-student.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section.search-header {\n    margin-top: 24px; }\n  section.search-header h1 {\n      margin-bottom: 15px; }\n  .submit-wrapper {\n  margin-top: 100px; }\n  .teacher-search-bar {\n  position: relative; }\n  .teacher-search-bar span {\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .input-icon {\n  display: inline-block;\n  cursor: pointer; }\n  .input-icon app-icon {\n    display: flex;\n    align-items: center; }\n  .input-icon.dropdown-icon app-icon {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n  .input-icon.dropdown-icon.up app-icon {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvc3R1ZGVudC9vbmJvYXJkaW5nLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLGdCQUFnQixFQUFBO0VBSnBCO01BT00sbUJBQW1CLEVBQUE7RUFLekI7RUFDRSxpQkFBaUIsRUFBQTtFQUduQjtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBRVgsd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBO0VBSXBDO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtFQUZqQjtJQUtJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVdNLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtFQVgvQjtJQWdCUSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL3N0dWRlbnQvb25ib2FyZGluZy1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcblxuICAmLnNlYXJjaC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc3VibWl0LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnRlYWNoZXItc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDEwcHg7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuXG4uaW5wdXQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcC1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLmRyb3Bkb3duLWljb24ge1xuICAgIGFwcC1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgIFxuICAgICYudXAge1xuICAgICAgYXBwLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/onboarding/student/onboarding-student.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/onboarding/student/onboarding-student.component.ts ***!
  \**************************************************************************/
/*! exports provided: OnBoardingStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingStudentComponent", function() { return OnBoardingStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.actions */ "./src/app/store/modules/onboarding/onboarding.actions.ts");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};













var OnBoardingStudentComponent = /** @class */ (function () {
    function OnBoardingStudentComponent(store, fb, spinnerOverlayService, router) {
        this.store = store;
        this.fb = fb;
        this.spinnerOverlayService = spinnerOverlayService;
        this.router = router;
        this.teachersFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required);
        this.panelStatus = 'close';
        // Store
        this.subscriptions = [];
        this.teachersList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_2__["selectTeachers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (teachers) { return Boolean(teachers); }));
        this.teachersStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_2__["selectTeachersStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__["RequestStatus"].success; }));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_4__["selectOnboardingErrors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (errors) { return Boolean(errors); }));
        this.isCompleted$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_4__["selectOnboardingIscompleted"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (isCompleted) { return Boolean(isCompleted); }));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (user) { return Boolean(user); }));
        this.status = null;
        this.errors = null;
        this.user = null;
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_9__["ViewStatuses"];
        this.slug = '';
        this.stepOneForm = this.fb.group({
            teacher: this.teachersFormControl
        });
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__["RequestStatus"];
        // Teacher list for dropdown
        this.teachersList = [];
        // Is onboarding completed?
        this.isCompleted = false;
    }
    OnBoardingStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // showoverlay
        this.showDataOptions();
        this.subscriptions.push(this.user$.subscribe(function (user) {
            if (!_this.user) {
                _this.user = user;
            }
            if (user && user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_9__["ViewStatuses"].TEACHER) {
                _this.router.navigate(['/']);
            }
            if (user && user.creators && user.creators.length) {
                // hideoverlay
                _this.router.navigate(['/']);
            }
        }), this.teachersList$.subscribe(function (teachers) {
            _this.teachersList = teachers
                .filter(function (teacher) { return teacher.first_name || teacher.last_name; })
                .map(function (teacher) { return ({
                name: teacher.first_name + " " + teacher.last_name,
                slug: teacher.slug
            }); });
        }), this.teachersStatus$.subscribe(function (status) {
            // hideoverlay
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }), this.isCompleted$.subscribe(function (isCompleted) {
            _this.isCompleted = isCompleted;
            if (isCompleted) {
                // console.log('GetCurrentUserRequestAction');
                _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_12__["GetCurrentUserRequestAction"]());
            }
        }));
    };
    OnBoardingStudentComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.teachersList.filter(function (_a) {
            var name = _a.name;
            return name.toLowerCase().includes(filterValue);
        });
    };
    OnBoardingStudentComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * Handle click submit button
     */
    OnBoardingStudentComponent.prototype.handleSubmitClick = function () {
        this.stepOneForm.markAllAsTouched();
        if (this.stepOneForm.invalid) {
            return;
        }
        if (this.slug) {
            // Store first step
            this.store.dispatch(new _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_3__["OnboardingStudentStepOneRequestAction"]({
                teacherSlug: this.slug
            }));
        }
    };
    OnBoardingStudentComponent.prototype.selected = function (event) {
        var value = event.option.value;
        var _a = __read(this.teachersList.filter(function (teacher) { return teacher.name === value; }), 1), teacher = _a[0];
        if (teacher) {
            this.slug = teacher.slug;
        }
    };
    OnBoardingStudentComponent.prototype.showDataOptions = function () {
        var _this = this;
        this.filteredOptions = this.teachersFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (label) { return _this._filter(label); }));
    };
    OnBoardingStudentComponent.prototype.togglePanelOpen = function (panelStatus) {
        this.panelStatus = panelStatus;
    };
    OnBoardingStudentComponent.prototype.clearTeacher = function () {
        this.teachersFormControl.setValue('');
        this.teachersFormControl.markAsPristine();
        this.teachersFormControl.markAsUntouched();
    };
    OnBoardingStudentComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    OnBoardingStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding-student',
            template: __webpack_require__(/*! raw-loader!./onboarding-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/student/onboarding-student.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-student.component.scss */ "./src/app/pages/onboarding/student/onboarding-student.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], OnBoardingStudentComponent);
    return OnBoardingStudentComponent;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/student/onboarding-student.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/onboarding/student/onboarding-student.module.ts ***!
  \***********************************************************************/
/*! exports provided: OnBoardingStudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingStudentModule", function() { return OnBoardingStudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _onboarding_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onboarding-student.component */ "./src/app/pages/onboarding/student/onboarding-student.component.ts");
/* harmony import */ var _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/complete/complete.module */ "./src/app/components/complete/complete.module.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/components/icon/icon.module */ "./src/app/components/icon/icon.module.ts");
/* harmony import */ var _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/components/errors/errors.module */ "./src/app/components/errors/errors.module.ts");
/* harmony import */ var _src_app_components_teacher_search_teacher_search_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/teacher-search/teacher-search.module */ "./src/app/components/teacher-search/teacher-search.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var OnBoardingStudentModule = /** @class */ (function () {
    function OnBoardingStudentModule() {
    }
    OnBoardingStudentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_11__["CompleteModule"],
                _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_14__["ErrorsModule"],
                _src_app_components_teacher_search_teacher_search_module__WEBPACK_IMPORTED_MODULE_15__["TeacherSearchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_12__["RouteNames"].student,
                        component: _onboarding_student_component__WEBPACK_IMPORTED_MODULE_10__["OnBoardingStudentComponent"],
                        data: {
                            title: 'Complete Registration',
                            goBack: false
                        }
                    }
                ])
            ],
            providers: [],
            bootstrap: [],
            declarations: [_onboarding_student_component__WEBPACK_IMPORTED_MODULE_10__["OnBoardingStudentComponent"]]
        })
    ], OnBoardingStudentModule);
    return OnBoardingStudentModule;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/teacher/onboarding-teacher.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/onboarding/teacher/onboarding-teacher.module.ts ***!
  \***********************************************************************/
/*! exports provided: OnboardingTeacherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingTeacherModule", function() { return OnboardingTeacherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _step_one_onboarding_teacher_step_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step-one/onboarding-teacher-step-one.component */ "./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.ts");
/* harmony import */ var _step_two_onboarding_teacher_step_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step-two/onboarding-teacher-step-two.component */ "./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.ts");
/* harmony import */ var _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/complete/complete.module */ "./src/app/components/complete/complete.module.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var _components_profile_image_edit_profile_image_edit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/profile-image-edit/profile-image-edit.module */ "./src/app/components/profile-image-edit/profile-image-edit.module.ts");
/* harmony import */ var _components_class_media_uploading_class_media_uploading_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/class-media-uploading/class-media-uploading.module */ "./src/app/components/class-media-uploading/class-media-uploading.module.ts");
/* harmony import */ var _src_app_components_teacher_profile_form_teacher_profile_form_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/components/teacher-profile-form/teacher-profile-form.module */ "./src/app/components/teacher-profile-form/teacher-profile-form.module.ts");
/* harmony import */ var _src_app_components_teacher_add_class_form_teacher_add_class_form_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/components/teacher-add-class-form/teacher-add-class-form.module */ "./src/app/components/teacher-add-class-form/teacher-add-class-form.module.ts");
/* harmony import */ var _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/guards/private-route.guard */ "./src/app/guards/private-route.guard.ts");
/* harmony import */ var _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/components/teacher-stripe-form/teacher-stripe-form.module */ "./src/app/components/teacher-stripe-form/teacher-stripe-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var OnboardingTeacherModule = /** @class */ (function () {
    function OnboardingTeacherModule() {
    }
    OnboardingTeacherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].teacher,
                        children: [
                            {
                                path: _route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].stepOne,
                                component: _step_one_onboarding_teacher_step_one_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingTeacherStepOneComponent"],
                                data: {
                                    title: 'Create your profile',
                                    goBack: false
                                },
                                canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_16__["PrivateRouteGuard"]]
                            },
                            {
                                path: _route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].stepTwo,
                                component: _step_two_onboarding_teacher_step_two_component__WEBPACK_IMPORTED_MODULE_8__["OnboardingTeacherStepTwoComponent"],
                                data: {
                                    title: 'Manage Your Money',
                                    goBack: false
                                },
                                canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_16__["PrivateRouteGuard"]]
                            }
                        ]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_9__["CompleteModule"],
                _components_profile_image_edit_profile_image_edit_module__WEBPACK_IMPORTED_MODULE_11__["ProfileImageEditModule"],
                _components_class_media_uploading_class_media_uploading_module__WEBPACK_IMPORTED_MODULE_12__["ClassMediaUploadingModule"],
                _src_app_components_teacher_profile_form_teacher_profile_form_module__WEBPACK_IMPORTED_MODULE_13__["TeacherProfileFormModule"],
                _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_17__["TeacherStripeFormModule"],
                _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                _src_app_components_teacher_add_class_form_teacher_add_class_form_module__WEBPACK_IMPORTED_MODULE_14__["TeacherAddClassFormModule"],
            ],
            providers: [],
            bootstrap: [],
            declarations: [_step_one_onboarding_teacher_step_one_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingTeacherStepOneComponent"], _step_two_onboarding_teacher_step_two_component__WEBPACK_IMPORTED_MODULE_8__["OnboardingTeacherStepTwoComponent"]]
        })
    ], OnboardingTeacherModule);
    return OnboardingTeacherModule;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvdGVhY2hlci9zdGVwLW9uZS9vbmJvYXJkaW5nLXRlYWNoZXItc3RlcC1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvdGVhY2hlci9zdGVwLW9uZS9vbmJvYXJkaW5nLXRlYWNoZXItc3RlcC1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OnboardingTeacherStepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingTeacherStepOneComponent", function() { return OnboardingTeacherStepOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_sign_up_sign_up_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/store/modules/sign-up/sign-up.selectors */ "./src/app/store/modules/sign-up/sign-up.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OnboardingTeacherStepOneComponent = /** @class */ (function () {
    function OnboardingTeacherStepOneComponent(store, userService, router) {
        this.store = store;
        this.userService = userService;
        this.router = router;
        this.routeNames = _route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"];
        // Store
        this.subscriptions = [];
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__["selectOnboardingErrors"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (user) { return !!user; }));
        this.message$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_sign_up_sign_up_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSignUpMessage"]));
        this.errors = null;
        this.user = null;
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"];
        this.usefulMessage = '';
        this.exampleTeacherSlug = '';
        this.continueClicked = false;
    }
    OnboardingTeacherStepOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (history.state.data && history.state.data.message) {
            this.usefulMessage = history.state.data.message;
        }
        this.subscriptions.push(this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }), this.message$.subscribe(function (message) {
            _this.usefulMessage = message;
        }), this.user$.subscribe(function (user) {
            _this.user = user;
            // if it is a student, go home
            if (_this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"].STUDENT) {
                _this.router.navigate(['/']);
            }
            if (_this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"].TEACHER) {
                // console.log('doing onboarding checkes');
                if (_this.user.creator) {
                    if (_this.continueClicked) {
                        // console.log('going to step two');
                        _this.router.navigate(_route_names__WEBPACK_IMPORTED_MODULE_7__["TeacherStepTwo"], {
                            state: {
                                data: {
                                    noSkip: true
                                }
                            }
                        });
                    }
                    else {
                        // console.log('going home');
                        _this.router.navigate(['/']);
                    }
                }
            }
        }));
    };
    OnboardingTeacherStepOneComponent.prototype.ngAfterContentInit = function () {
        // console.log('now scroll up', window.scrollY);
        window.scrollTo(0, 0);
        setTimeout(function () {
            if (window.scrollY > 0) {
                window.scrollTo(0, 0);
            }
        }, 500);
    };
    OnboardingTeacherStepOneComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    OnboardingTeacherStepOneComponent.prototype.onContinueClicked = function (e) {
        // console.log('CONTINUE WAS CLICKED', e);
        this.continueClicked = true;
    };
    OnboardingTeacherStepOneComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    OnboardingTeacherStepOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding-teacher-step-one',
            template: __webpack_require__(/*! raw-loader!./onboarding-teacher-step-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-teacher-step-one.component.scss */ "./src/app/pages/onboarding/teacher/step-one/onboarding-teacher-step-one.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OnboardingTeacherStepOneComponent);
    return OnboardingTeacherStepOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvdGVhY2hlci9zdGVwLXR3by9vbmJvYXJkaW5nLXRlYWNoZXItc3RlcC10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL3RlYWNoZXIvc3RlcC10d28vb25ib2FyZGluZy10ZWFjaGVyLXN0ZXAtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OnboardingTeacherStepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingTeacherStepTwoComponent", function() { return OnboardingTeacherStepTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OnboardingTeacherStepTwoComponent = /** @class */ (function () {
    function OnboardingTeacherStepTwoComponent(store, spinner, userService, router) {
        this.store = store;
        this.spinner = spinner;
        this.userService = userService;
        this.router = router;
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].success; }));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (user) { return !!user; }));
        this.user = null;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"];
        // Is onboarding completed?
        this.isCompleted = false;
        this.usefulMessage = '';
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__["ViewStatuses"];
        this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_10__["GetCurrentUserRequestAction"]());
    }
    OnboardingTeacherStepTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (history.state.data && history.state.data.message) {
            this.usefulMessage = history.state.data.message;
        }
        // showoverlay
        this.subscriptions.push(this.status$.subscribe(function () {
            // hideoverlay
        }), this.user$.subscribe(function (user) {
            _this.user = user;
            if (_this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__["ViewStatuses"].STUDENT) {
                _this.router.navigate(['/']);
            }
            if (!_this.user.creator) {
                _this.router.navigate(_src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["TeacherStepOne"]);
            }
            else {
                if (history.state.data && history.state.data.noSkip) {
                    // console.log('No skippiing step two!!');
                    _this.spinner.hide();
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }));
    };
    OnboardingTeacherStepTwoComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    OnboardingTeacherStepTwoComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    OnboardingTeacherStepTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding-teacher-step-two',
            template: __webpack_require__(/*! raw-loader!./onboarding-teacher-step-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-teacher-step-two.component.scss */ "./src/app/pages/onboarding/teacher/step-two/onboarding-teacher-step-two.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], OnboardingTeacherStepTwoComponent);
    return OnboardingTeacherStepTwoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-onboarding-module.8ee5ef4ca7098cfc0b6d.js.map