(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/errors/errors.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/errors/errors.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"errors\" [innerHTML]=\"errors | safeHTML\" class=\"text-error\"></p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/confirm-dialog/confirm-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/confirm-dialog/confirm-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div class=\"close-dialog-img pointer\">\n    <img (click)=\"close()\" src=\"assets/img/close_modal.svg\" />\n  </div>\n  <div class=\"title-display-3 text-center m-b-6\">{{ title }}</div>\n  <div class=\"text-display-3 text-center m-b-6\">{{ message }}</div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\" class=\"confirm-buttons-container\">\n  <div class=\"width-100 m-t-7\" fxLayout=\"row\">\n    <button type=\"submit\" mat-ripple class=\"btn btn-large btn-rounded bg-20 width-100\" mat-dialog-close tabindex=\"-1\">\n      {{ cancelButtonText }}\n    </button>\n  </div>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <div class=\"close-dialog-img pointer\">\n        <img (click)=\"close()\" src=\"assets/img/close_modal.svg\" />\n    </div>\n    <div class=\"title-display-3 text-center m-b-6\">{{ title }}</div>\n    <div class=\"text-display-3 text-center m-b-6\">{{ message }}</div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\" class=\"confirm-buttons-container\">\n    <p *ngIf=\"errors\" class=\"text-error m-t-24\">It looks like the email you entered is not valid, please try again.</p>\n    <form [formGroup]=\"forgottenPasswordForm\" class=\"m-t-24\">\n        <ng-container *ngIf=\"forgottenPasswordForm.get('email'); let email\">\n            <app-ji-input\n                [parentForm]=\"forgottenPasswordForm\"\n                [input]=\"'email'\"\n                [type]=\"'email'\"\n                [title]=\"'Email'\"\n                [errors]=\"email.errors\"\n                [isValid]=\"email.valid && email.value\"\n                [hasError]=\"email.invalid && formSubmitted\"></app-ji-input>\n        </ng-container>\n\n        <div class=\"m-t-12\">\n            <button\n                mat-ripple\n                type=\"submit\"\n                class=\"btn btn-large btn-rounded bg-20 m-b-12 width-100\"\n                (click)=\"handleSubmitClick()\"\n                [disabled]=\"forgottenPasswordForm.invalid\">{{confirmButtonText}}</button>\n        </div>\n    </form>\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">  \n  <section class=\"text-center inner-logo\">\n      <img src=\"/assets/img/logo.svg\">\n\n      <app-message [message]=\"message\"></app-message>\n      <app-errors [errors]=\"errors\"></app-errors>\n  </section>\n\n  <form [formGroup]=\"loginForm\" class=\"form-two\">\n    <ng-container *ngIf=\"loginForm.get('email'); let email\">\n      <app-ji-input\n        [parentForm]=\"loginForm\"\n        [input]=\"'email'\"\n        [type]=\"'email'\"\n        [title]=\"'Email'\"\n        [errors]=\"email.errors\"\n        [isValid]=\"email.valid && email.value\"\n        [hasError]=\"email.invalid && loginFormSubmitted\"></app-ji-input>\n    </ng-container>\n    <ng-container *ngIf=\"loginForm.get('password'); let password\">\n      <app-ji-input\n        [parentForm]=\"loginForm\"\n        [input]=\"'password'\"\n        [type]=\"'password'\"\n        [title]=\"'Password'\"\n        [errors]=\"password.errors\"\n        [isValid]=\"password.valid && password.value\"\n        [hasError]=\"password.invalid && loginFormSubmitted\"></app-ji-input>\n    </ng-container>\n    <section class=\"cta\">\n      <button\n        mat-ripple\n        type=\"submit\"\n        class=\"btn btn-large btn-rounded bg-20 width-100\"\n        (click)=\"handleSubmitClick()\"\n        [disabled]=\"status === requestStatus.pending\">Login</button>\n      <button\n        mat-ripple\n        type=\"button\"\n        class=\"btn btn-large btn-rounded btn-bordered width-100\"\n        [disabled]=\"status === requestStatus.pending\"\n        (click)=\"goToSignup()\">Register</button>\n      <a (click)=\"forgottenPassword()\" \n        class=\"text-display-1 forgot-password-link\">Forgot password?</a>\n      <a (click)=\"openTakethetourModal()\" class=\"text-display-1\">Take the tour</a>\n    </section>\n  </form>\n</div>\n"

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

/***/ "./src/app/pages/login/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/login/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
        this.confirmButtonText = '';
        this.cancelButtonText = '';
        this.title = '';
        if (data) {
            this.message = data.message || this.message;
            this.title = data.title || this.title;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
    ConfirmDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirmation-dialog',
            template: __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/confirm-dialog/confirm-dialog.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/confirm-dialog/confirm-dialog.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/login/confirm-dialog/confirm-dialog.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog.component */ "./src/app/pages/login/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
            entryComponents: [_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]
            ]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2ZvcmdvdC1kaWFsb2ctZm9ybS9mb3Jnb3QtZGlhbG9nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9mb3Jnb3QtZGlhbG9nLWZvcm0vZm9yZ290LWRpYWxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotDialogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDialogFormComponent", function() { return ForgotDialogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/forgotten-password/forgotten-password.selectors */ "./src/app/store/modules/forgotten-password/forgotten-password.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_store_modules_forgotten_password_forgotten_password_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/forgotten-password/forgotten-password.actions */ "./src/app/store/modules/forgotten-password/forgotten-password.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ForgotDialogFormComponent = /** @class */ (function () {
    function ForgotDialogFormComponent(data, dialogRef, fb, store) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.store = store;
        this.title = '';
        this.message = '';
        this.confirmButtonText = '';
        this.formSubmitted = false;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__["RequestStatus"];
        this.subscriptions = [];
        this.status = null;
        this.errors = null;
        if (data) {
            this.title = data.title || this.message;
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            }
        }
    }
    ForgotDialogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Forgotten password form inputs
        this.forgottenPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_3__["selectForgottenPasswordStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_3__["selectForgottenPasswordErrors"]));
        // Forgotten password form inputs
        this.forgottenPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        this.subscriptions.push(this.status$.subscribe(function (status) {
            if (status && status === _this.requestStatus.success) {
                _this.dialogRef.close(true);
            }
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }));
    };
    ForgotDialogFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    ForgotDialogFormComponent.prototype.handleSubmitClick = function () {
        this.formSubmitted = true;
        // Send request to backend
        this.store.dispatch(new _src_app_store_modules_forgotten_password_forgotten_password_actions__WEBPACK_IMPORTED_MODULE_6__["ForgottenPasswordResetRequestAction"]({
            email: this.forgottenPasswordForm.get('email').value
        }));
    };
    ForgotDialogFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ForgotDialogFormComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ForgotDialogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-dialog',
            template: __webpack_require__(/*! raw-loader!./forgot-dialog-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.html"),
            styles: [__webpack_require__(/*! ./forgot-dialog-form.component.scss */ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ForgotDialogFormComponent);
    return ForgotDialogFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotDialogFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDialogFormModule", function() { return ForgotDialogFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgot_dialog_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-dialog-form.component */ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForgotDialogFormModule = /** @class */ (function () {
    function ForgotDialogFormModule() {
    }
    ForgotDialogFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_forgot_dialog_form_component__WEBPACK_IMPORTED_MODULE_5__["ForgotDialogFormComponent"]],
            entryComponents: [_forgot_dialog_form_component__WEBPACK_IMPORTED_MODULE_5__["ForgotDialogFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_6__["JiFormsModule"]
            ],
        })
    ], ForgotDialogFormModule);
    return ForgotDialogFormModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding-top: 30px; }\n\n.inner-logo img {\n  width: 110px;\n  height: auto;\n  margin-bottom: 60px; }\n\n.cta {\n  margin: 25px 0; }\n\n.cta button {\n    margin-bottom: 20px; }\n\n.cta a {\n    display: block;\n    text-align: center;\n    cursor: pointer; }\n\n.cta .forgot-password-link {\n    margin-top: 40px;\n    margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxjQUFjLEVBQUE7O0FBRGhCO0lBSUksbUJBQW1CLEVBQUE7O0FBSnZCO0lBUUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBVm5CO0lBY0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uaW5uZXItbG9nbyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG59XG5cbi5jdGEge1xuICBtYXJnaW46IDI1cHggMDtcblxuICBidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/authentication/authentication.actions */ "./src/app/store/modules/authentication/authentication.actions.ts");
/* harmony import */ var _src_app_store_modules_authentication_authentication_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/authentication/authentication.selectors */ "./src/app/store/modules/authentication/authentication.selectors.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _forgot_dialog_form_forgot_dialog_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-dialog-form/forgot-dialog-form.component */ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.component.ts");
/* harmony import */ var _src_app_pages_login_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/pages/login/confirm-dialog/confirm-dialog.component */ "./src/app/pages/login/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/forgotten-password/forgotten-password.selectors */ "./src/app/store/modules/forgotten-password/forgotten-password.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.selectors */ "./src/app/store/modules/shared/shared.selectors.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_app_components_modals_takethetour_dialog_modal_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/modal-utils */ "./src/app/components/modals/takethetour-dialog/modal-utils.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
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



















var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, store, router, route, dialog, spinner) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.spinner = spinner;
        this.routeNames = _route_names__WEBPACK_IMPORTED_MODULE_16__["RouteNames"];
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_authentication_authentication_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAuthenticationStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_authentication_authentication_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAuthenticationErrors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["filter"])(Boolean));
        this.loginData$ = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_14__["combineLatest"])([
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__["selectUserActive"])),
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_shared_shared_selectors__WEBPACK_IMPORTED_MODULE_13__["selectCancelUrl"]))
        ]);
        this.message$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_10__["selectForgottenPasswordMessage"]));
        this.status = null;
        this.errors = null;
        this.message = null;
        this.loginFormSubmitted = false;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__["RequestStatus"];
        this.usefulMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.hide();
        setTimeout(function () {
            if (_this.spinner.isShowing.value) {
                _this.spinner.hide();
            }
        }, 400);
        // Login form inputs
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
        this.subscriptions.push(this.loginData$.subscribe(function (_a) {
            var _b = __read(_a, 2), user = _b[0], back_url = _b[1];
            if (user) {
                var dashboardUrl = user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_12__["ViewStatuses"].STUDENT ? _route_names__WEBPACK_IMPORTED_MODULE_16__["RouteNames"].student : _route_names__WEBPACK_IMPORTED_MODULE_16__["RouteNames"].teacher;
                _this.router.navigate(['/', dashboardUrl]);
            }
        }), this.status$.subscribe(function (status) {
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            // console.log('LOGIN ERRORS', errors);
            if (errors === 'No active account found with the given credentials') {
                errors = 'Sorry, we don\'t recognise your password';
            }
            _this.errors = errors;
        }), this.message$.subscribe(function (message) {
            _this.message = message;
            _this.errors = null;
        }), this.loginForm.valueChanges.subscribe(function (change) {
            _this.errors = null;
        }));
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * Handle submit click
     */
    LoginComponent.prototype.handleSubmitClick = function () {
        this.loginFormSubmitted = true;
        this.loginForm.markAllAsTouched();
        if (this.loginForm.invalid) {
            return;
        }
        // Send request to backend
        this.store.dispatch(new _src_app_store_modules_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_4__["AuthenticationBasicRequestAction"]({
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        }));
    };
    LoginComponent.prototype.forgottenPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_forgot_dialog_form_forgot_dialog_form_component__WEBPACK_IMPORTED_MODULE_8__["ForgotDialogFormComponent"], {
            panelClass: 'journeyinto-modal',
            data: {
                title: 'Reset password',
                message: "To reset your password, please enter the email address you signed up with and we'll send you an email with a reset link.",
                buttonText: {
                    ok: 'Reset password'
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.dialog.open(_src_app_pages_login_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                    panelClass: 'journeyinto-modal',
                    data: {
                        title: 'Reset password',
                        message: _this.message
                            ? _this.message
                            : 'We sent you a message with a unique link to reset your password, please check your email.',
                        buttonText: {
                            cancel: 'Back to login'
                        }
                    }
                });
            }
        });
    };
    LoginComponent.prototype.openTakethetourModal = function () {
        Object(_src_app_components_modals_takethetour_dialog_modal_utils__WEBPACK_IMPORTED_MODULE_15__["openTourModal"])(this.dialog);
        // this.dialog.open(TakethetourDialogComponent, {
        //   panelClass: 'takethetour-modal',
        // });
    };
    LoginComponent.prototype.goToSignup = function () {
        this.router.navigate(['/', _route_names__WEBPACK_IMPORTED_MODULE_16__["RouteNames"].signup], {
            state: {
                data: this.loginForm.value
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_18__["SpinnerOverlayService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_18__["SpinnerOverlayService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _forgot_dialog_form_forgot_dialog_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-dialog-form/forgot-dialog-form.module */ "./src/app/pages/login/forgot-dialog-form/forgot-dialog-form.module.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.module */ "./src/app/pages/login/confirm-dialog/confirm-dialog.module.ts");
/* harmony import */ var _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/takethetour-dialog.module */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.module.ts");
/* harmony import */ var _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/components/errors/errors.module */ "./src/app/components/errors/errors.module.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _forgot_dialog_form_forgot_dialog_form_module__WEBPACK_IMPORTED_MODULE_8__["ForgotDialogFormModule"],
                _confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"],
                _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_10__["TakethetourDialogModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_13__["JiFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
                _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_12__["ErrorsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/store/modules/authentication/authentication.selectors.ts":
/*!**************************************************************************!*\
  !*** ./src/app/store/modules/authentication/authentication.selectors.ts ***!
  \**************************************************************************/
/*! exports provided: selectAuthenticationState, selectAuthenticationStatus, selectAuthenticationEntity, selectAuthenticationErrors, selectIsAuthenticated, selectUserId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationState", function() { return selectAuthenticationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationStatus", function() { return selectAuthenticationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationEntity", function() { return selectAuthenticationEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationErrors", function() { return selectAuthenticationErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return selectIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserId", function() { return selectUserId; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/adapters */ "./src/app/store/helpers/adapters.ts");


var selectAuthenticationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('authentication');
var selectAuthenticationStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthenticationState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getStatus"]);
var selectAuthenticationEntity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthenticationState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getEntity"]);
var selectAuthenticationErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthenticationState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getErrors"]);
var selectIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthenticationEntity, function (entity) { return entity.isAuthenticated; });
var selectUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthenticationEntity, function (state) { return state.user_id; });


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.b5b96b9b3fee7bb51f38.js.map