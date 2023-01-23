(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-student-student-module~pages-teacher-teacher-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coming-soon/coming-soon.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coming-soon/coming-soon.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n    <h1 class=\"title-display-1\">Coming soon</h1>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/password-match-input/password-match-input.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/password-match-input/password-match-input.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [formGroup]=\"form\">\n    <ng-container *ngIf=\"form.get('password'); let password\">\n        <app-ji-input \n            [parentForm]=\"form\" \n            [type]=\"'password'\"\n            [input]=\"'password'\" \n            [title]=\"'New password'\"\n            [placeholder]=\"'Add your new password'\" \n            [errors]=\"password.errors\"\n            [hasError]=\"password.invalid && (password.dirty || password.touched)\"></app-ji-input>\n    </ng-container>\n    <ng-container *ngIf=\"form.get('confirmPassword'); let confirmPassword\">\n        <app-ji-input \n            [parentForm]=\"form\" \n            [type]=\"'password'\"\n            [input]=\"'confirmPassword'\" \n            [title]=\"'Confirm new password'\"\n            [placeholder]=\"'Re-enter your new password'\" \n            [errors]=\"confirmPassword.errors\"\n            [hasError]=\"confirmPassword.invalid \n                && (\n                    confirmPassword.dirty \n                    || confirmPassword.touched\n                )\"></app-ji-input>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 40px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY29taW5nLXNvb24vY29taW5nLXNvb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent(spinner) {
        this.spinner = spinner;
        this.spinner.hide();
    }
    ComingSoonComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_1__["SpinnerOverlayService"] }
    ]; };
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! raw-loader!./coming-soon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.scss */ "./src/app/components/coming-soon/coming-soon.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["SpinnerOverlayService"]])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.module.ts ***!
  \**************************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonComponent"]],
            exports: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonComponent"]]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());



/***/ }),

/***/ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/modals/confirmation-dialog/confirmation-dialog.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmationDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogModule", function() { return ConfirmationDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ConfirmationDialogModule = /** @class */ (function () {
    function ConfirmationDialogModule() {
    }
    ConfirmationDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]],
            entryComponents: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]
            ],
        })
    ], ConfirmationDialogModule);
    return ConfirmationDialogModule;
}());



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



/***/ })

}]);
//# sourceMappingURL=default~pages-student-student-module~pages-teacher-teacher-module.699a34211a111dddc10b.js.map