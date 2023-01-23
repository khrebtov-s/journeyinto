(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/calendar/calendar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/calendar/calendar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/calendar/new/calendar-new.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/calendar/new/calendar-new.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Calendar new works!</p>"

/***/ }),

/***/ "./src/app/pages/student/calendar/calendar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/student/calendar/calendar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/student/calendar/calendar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/student/calendar/calendar.component.ts ***!
  \**************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
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

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/pages/student/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/calendar/calendar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/student/calendar/calendar.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.component */ "./src/app/pages/student/calendar/calendar.component.ts");
/* harmony import */ var _new_calendar_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/calendar-new.component */ "./src/app/pages/student/calendar/new/calendar-new.component.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.module */ "./src/app/components/coming-soon/coming-soon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// TODO: remove coming soon
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_7__["ComingSoonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonComponent"],
                        // component: CalendarComponent,
                        data: {
                            title: 'Calendar',
                            goBack: false
                        }
                    },
                    {
                        path: 'new',
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonComponent"],
                        // component: CalendarNewComponent,
                        data: {
                            title: 'New Calendar',
                            goBack: false
                        }
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],
                _new_calendar_new_component__WEBPACK_IMPORTED_MODULE_5__["CalendarNewComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/pages/student/calendar/new/calendar-new.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/student/calendar/new/calendar-new.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvY2FsZW5kYXIvbmV3L2NhbGVuZGFyLW5ldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/student/calendar/new/calendar-new.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/student/calendar/new/calendar-new.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNewComponent", function() { return CalendarNewComponent; });
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

var CalendarNewComponent = /** @class */ (function () {
    function CalendarNewComponent() {
    }
    CalendarNewComponent.prototype.ngOnInit = function () {
    };
    CalendarNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-new',
            template: __webpack_require__(/*! raw-loader!./calendar-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/calendar/new/calendar-new.component.html"),
            styles: [__webpack_require__(/*! ./calendar-new.component.scss */ "./src/app/pages/student/calendar/new/calendar-new.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarNewComponent);
    return CalendarNewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.9f94913f8b48f5ae65d3.js.map