(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-reset-password-reset-password-module~pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/errors/errors.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/errors/errors.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"errors\" [innerHTML]=\"errors | safeHTML\" class=\"text-error\"></p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/form-header/form-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/form-header/form-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-header-container\">\n    <section class=\"form-header\">\n        <button *ngIf=\"canGoBack\" \n            type=\"button\" \n            class=\"btn left-arrow-btn\" \n            (click)=\"goBack()\"></button>\n        <a *ngIf=\"backTo\"\n            type=\"button\" \n            class=\"btn left-arrow-btn\" \n            [routerLink]=\"backTo\"></a>\n        <h1 class=\"text-display-2\">{{title}}</h1>\n    </section>\n    <hr>\n</div>\n<span></span>"

/***/ }),

/***/ "./src/app/components/errors/errors.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/errors/errors.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/errors/errors.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/errors/errors.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
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

var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent() {
    }
    ErrorsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorsComponent.prototype, "errors", void 0);
    ErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errors',
            template: __webpack_require__(/*! raw-loader!./errors.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/errors/errors.component.html"),
            styles: [__webpack_require__(/*! ./errors.component.scss */ "./src/app/components/errors/errors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/components/errors/errors.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/errors/errors.module.ts ***!
  \****************************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.component */ "./src/app/components/errors/errors.component.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_errors_component__WEBPACK_IMPORTED_MODULE_2__["ErrorsComponent"]],
            exports: [_errors_component__WEBPACK_IMPORTED_MODULE_2__["ErrorsComponent"]]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/components/form-header/form-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-header/form-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.form-header-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  background-color: #fff; }\nspan {\n  display: block;\n  margin-top: 53px; }\n.form-header {\n  position: relative;\n  padding: 15px 20px; }\n.form-header .left-arrow-btn {\n    position: absolute;\n    padding: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\nh1 {\n  text-align: center; }\nhr {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2Zvcm0taGVhZGVyL2Zvcm0taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDRFo7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBRVgsYUFBYTtFQUViLHNCREhTLEVBQUE7QUNNYjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUZ0QjtJQUtRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtBQUluQztFQUNJLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWhlYWRlci9mb3JtLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdGhlIGNvbW1vbiBzdHlsZXMgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwuIFdlIGluY2x1ZGUgdGhpcyBoZXJlIHNvIHRoYXQgeW91IG9ubHlcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cbi8vICoqQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhKipcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcblxuLy8gQXBwIHBhbGV0dGVcbiRwYWxldHRlOiAoXG4gIHdoaXRlOiAjZmZmLFxuICBlcnJvcjogI2Y0NDMzNixcbiAgY2hhcmNvYWw6ICMzMjJCMjMsXG4gIGJsYWNrOiAjMzIyQjIzLFxuICBzZW1pVHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gIDEwOiAjMTAwZTBiLFxuICAyMDogIzMyMmIyNSxcbiAgMzA6ICNjZmMyYjksXG4gIDQwOiAjYWM5YThjLFxuICA1MDogIzhlNDkxZCxcbiAgNjA6ICNlZGUzZDQsXG4gIDcwOiAjZWRlZGViLFxuICA4MDogI2Y0ZWVlNSxcbiAgOTA6ICNmZmZjZmEsXG4gIDEwMDogI2U4ZThlOCxcbiAgMTEwOiAjYTdhN2E3LFxuICAxMjA6ICM3ODc4NzgsXG4gIDEzMDogIzcxMTYwOSxcbiAgMTQwOiAjMDA5ZTc5LFxuICAxNTA6ICMyZjJmMmZcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb21tb24vc3R5bGVzLmNvbW1vbi5zY3NzJztcblxuLmZvcm0taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgei1pbmRleDogMTAwMDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIHdoaXRlKTtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNTNweDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuXG4gICAgLmxlZnQtYXJyb3ctYnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/form-header/form-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-header/form-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeaderComponent", function() { return FormHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormHeaderComponent = /** @class */ (function () {
    function FormHeaderComponent(location) {
        this.location = location;
        this.title = '';
        this.canGoBack = false;
    }
    FormHeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    FormHeaderComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderComponent.prototype, "canGoBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormHeaderComponent.prototype, "backTo", void 0);
    FormHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-header',
            template: __webpack_require__(/*! raw-loader!./form-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/form-header/form-header.component.html"),
            styles: [__webpack_require__(/*! ./form-header.component.scss */ "./src/app/components/form-header/form-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FormHeaderComponent);
    return FormHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/form-header/form-header.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/form-header/form-header.module.ts ***!
  \**************************************************************/
/*! exports provided: FormHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeaderModule", function() { return FormHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_components_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/components/form-header/form-header.component */ "./src/app/components/form-header/form-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormHeaderModule = /** @class */ (function () {
    function FormHeaderModule() {
    }
    FormHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_src_app_components_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_2__["FormHeaderComponent"]],
            exports: [_src_app_components_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_2__["FormHeaderComponent"]]
        })
    ], FormHeaderModule);
    return FormHeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-reset-password-reset-password-module~pages-sign-up-sign-up-module.b66472518810e76d9a9d.js.map