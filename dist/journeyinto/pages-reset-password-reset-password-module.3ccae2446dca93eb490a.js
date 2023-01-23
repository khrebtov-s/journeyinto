(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/password-match-input/password-match-input.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/password-match-input/password-match-input.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [formGroup]=\"form\">\n    <ng-container *ngIf=\"form.get('password'); let password\">\n        <app-ji-input \n            [parentForm]=\"form\" \n            [type]=\"'password'\"\n            [input]=\"'password'\" \n            [title]=\"'New password'\"\n            [placeholder]=\"'Add your new password'\" \n            [errors]=\"password.errors\"\n            [hasError]=\"password.invalid && (password.dirty || password.touched)\"></app-ji-input>\n    </ng-container>\n    <ng-container *ngIf=\"form.get('confirmPassword'); let confirmPassword\">\n        <app-ji-input \n            [parentForm]=\"form\" \n            [type]=\"'password'\"\n            [input]=\"'confirmPassword'\" \n            [title]=\"'Confirm new password'\"\n            [placeholder]=\"'Re-enter your new password'\" \n            [errors]=\"confirmPassword.errors\"\n            [hasError]=\"confirmPassword.invalid \n                && (\n                    confirmPassword.dirty \n                    || confirmPassword.touched\n                )\"></app-ji-input>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reset-password/reset-password.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reset-password/reset-password.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-header \n    [title]=\"'Reset Password'\"\n    [backTo]=\"['/', routeNames.login]\"></app-form-header>    \n    \n<div class=\"wrapper\">\n    <section>\n        <app-errors [errors]=\"this.errors\"></app-errors>\n        <form [formGroup]=\"resetPasswordForm\" class=\"form-one m-b-40\">\n    \n            <app-password-match-input formControlName=\"password\"></app-password-match-input>\n    \n            <div class=\"m-t-40\">\n                <button \n                    mat-ripple \n                    type=\"button\" \n                    class=\"btn btn-large btn-rounded bg-20 width-100\"\n                    [disabled]=\"resetPasswordForm.invalid\" \n                    (click)=\"handleSubmit()\">\n                    Reset\n                </button>\n            </div>\n        </form>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/components/password-match-input/password-match-input.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/password-match-input/password-match-input.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQtbWF0Y2gtaW5wdXQvcGFzc3dvcmQtbWF0Y2gtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/password-match-input/password-match-input.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/password-match-input/password-match-input.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PasswordMatchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchInputComponent", function() { return PasswordMatchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var lower = /[a-z]/;
var upper = /[A-Z]/;
var numbers = /[0-9]/;
var CUSTOM_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PasswordMatchInputComponent; }),
    multi: true,
};
var PasswordMatchInputComponent = /** @class */ (function () {
    function PasswordMatchInputComponent(store) {
        var _this = this;
        this.store = store;
        this.passwordFormValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_4__["RequestStatus"].success; }));
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            // Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
            // control => this.passwordValidator(control)
        ]);
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            // Validators.required,
            function (control) { return _this.matchValidator(control); }
        ]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: this.password,
            confirmPassword: this.confirmPassword
        });
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.disabled = false;
        this.form.valueChanges.subscribe(function (_) { return _this.checkValue(); });
    }
    PasswordMatchInputComponent.prototype.ngOnInit = function () {
        this.subscriptions.push(this.status$.subscribe(function (status) {
        }));
    };
    PasswordMatchInputComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    PasswordMatchInputComponent.prototype.isActive = function (value) {
        return value === this.level;
    };
    PasswordMatchInputComponent.prototype.checkValue = function () {
        // if the passwords are valid, update the control value to match the password value (if form is valid both passwords must match)
        if (this.form.valid) {
            this.onChange(this.password.value);
        }
        else {
            this.onChange(null);
        }
        var isPasswordFormValid = Boolean(this.password.value
            && this.confirmPassword.value
            && this.form.valid);
        this.passwordFormValid.emit(isPasswordFormValid);
        this.onTouched();
    };
    PasswordMatchInputComponent.prototype.writeValue = function (value) {
        this.form.setValue({
            password: value,
            confirmPassword: value
        });
    };
    PasswordMatchInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PasswordMatchInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PasswordMatchInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    PasswordMatchInputComponent.prototype.matchValidator = function (control) {
        if (control.value && this.password.value !== control.value) {
            return { mismatch: true };
        }
    };
    PasswordMatchInputComponent.prototype.passwordValidator = function (control) {
        if (control.value) {
            var password = control.value;
            if (password.length < 8) {
                return { length: true };
            }
        }
    };
    PasswordMatchInputComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PasswordMatchInputComponent.prototype, "passwordFormValid", void 0);
    PasswordMatchInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-match-input',
            providers: [CUSTOM_VALUE_ACCESSOR],
            template: __webpack_require__(/*! raw-loader!./password-match-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/password-match-input/password-match-input.component.html"),
            styles: [__webpack_require__(/*! ./password-match-input.component.scss */ "./src/app/components/password-match-input/password-match-input.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PasswordMatchInputComponent);
    return PasswordMatchInputComponent;
}());



/***/ }),

/***/ "./src/app/components/password-match-input/password-match-input.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/password-match-input/password-match-input.module.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordMatchInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchInputModule", function() { return PasswordMatchInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _password_match_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-match-input.component */ "./src/app/components/password-match-input/password-match-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PasswordMatchInputModule = /** @class */ (function () {
    function PasswordMatchInputModule() {
    }
    PasswordMatchInputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_4__["JiFormsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_password_match_input_component__WEBPACK_IMPORTED_MODULE_2__["PasswordMatchInputComponent"]],
            exports: [_password_match_input_component__WEBPACK_IMPORTED_MODULE_2__["PasswordMatchInputComponent"]]
        })
    ], PasswordMatchInputModule);
    return PasswordMatchInputModule;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/forgotten-password/forgotten-password.selectors */ "./src/app/store/modules/forgotten-password/forgotten-password.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_forgotten_password_forgotten_password_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/forgotten-password/forgotten-password.actions */ "./src/app/store/modules/forgotten-password/forgotten-password.actions.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
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










var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, store, location, route, spinner) {
        this.fb = fb;
        this.store = store;
        this.location = location;
        this.route = route;
        this.spinner = spinner;
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_5__["selectForgottenPasswordStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_forgotten_password_forgotten_password_selectors__WEBPACK_IMPORTED_MODULE_5__["selectForgottenPasswordErrors"]));
        this.status = null;
        this.errors = null;
        // Reactive form
        this.resetPasswordForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_3__["RequestStatus"];
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"];
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.hide();
        this.subscriptions.push(this.status$.subscribe(function (status) {
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }));
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    ResetPasswordComponent.prototype.handleSubmit = function () {
        this.resetPasswordForm.markAllAsTouched();
        if (this.resetPasswordForm.invalid) {
            return;
        }
        var tokenUid = this.route.snapshot.paramMap.get('token');
        var _a = __read(tokenUid.split('XXXX'), 2), token = _a[0], uid = _a[1];
        if (!token || !uid) {
            this.errors = 'This reset password url seems to be compromised. Please go back to your email and click on the link again.';
            return;
        }
        var payload = {
            uid: uid,
            token: token,
            new_password1: this.resetPasswordForm.get('password').value,
            new_password2: this.resetPasswordForm.get('password').value
        };
        this.store.dispatch(new _src_app_store_modules_forgotten_password_forgotten_password_actions__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordRequestAction"](payload));
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"] }
    ]; };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/password-match-input/password-match-input.module */ "./src/app/components/password-match-input/password-match-input.module.ts");
/* harmony import */ var _src_app_components_form_header_form_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/components/form-header/form-header.module */ "./src/app/components/form-header/form-header.module.ts");
/* harmony import */ var _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/errors/errors.module */ "./src/app/components/errors/errors.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: ':token',
                        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
                        data: {
                            goBack: false
                        }
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_9__["PasswordMatchInputModule"],
                _src_app_components_form_header_form_header_module__WEBPACK_IMPORTED_MODULE_10__["FormHeaderModule"],
                _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_11__["ErrorsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reset-password-reset-password-module.3ccae2446dca93eb490a.js.map