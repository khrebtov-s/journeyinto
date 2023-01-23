(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-up/sign-up.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-header [title]=\"'Register'\"\n  [canGoBack]=\"true\"></app-form-header>\n<div class=\"wrapper\">\n  <app-errors [errors]=\"errors\"></app-errors>\n\n  <div class=\"explainer\">\n    <p class=\"text-display-3\">Welcome to Journey Into.</p>\n    <p class=\"text-display-3\"><strong>Yoga students</strong><br> Subscribe to your yoga teacher for weekly video and audio classes to guide your self practice any time, anywhere.</p>\n    <p class=\"text-display-3\"><strong>Yoga teachers</strong><br> Create a profile and record classes your students can subscribe to.</p>\n  </div>\n\n  <form [formGroup]=\"signUpForm\" class=\"form-two\">\n    <fieldset>\n      <p class=\"text-display-2\">Login details</p>\n      <hr />\n\n      <ng-container *ngIf=\"signUpForm.get('email'); let email\">\n        <app-ji-input \n          #validatedField\n          [parentForm]=\"signUpForm\" \n          [input]=\"'email'\" \n          [type]=\"'email'\" \n          [title]=\"'Email'\" \n          [errors]=\"email.errors\"\n          [hasError]=\"email.invalid && signupFormSubmitted\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"signUpForm.get('password'); let password\">\n        <app-ji-input \n          #validatedField\n          [parentForm]=\"signUpForm\" \n          [input]=\"'password'\" \n          [type]=\"'password'\" \n          [title]=\"'Password'\" \n          [errors]=\"password.errors\"\n          [hasError]=\"password.invalid && signupFormSubmitted\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"signUpForm.get('telephone'); let telephone\">\n        <app-ji-input \n          [parentForm]=\"signUpForm\" \n          [input]=\"'telephone'\" \n          [type]=\"'tel'\" \n          [title]=\"'Mobile telephone'\"\n          [explainerText]=\"'We are developing in app messaging but in the meantime add your number so your students can contact you directly.'\"></app-ji-input>\n      </ng-container>\n    </fieldset>\n\n    <fieldset>\n      <ng-container *ngIf=\"signUpForm.get('first_name'); let firstName\">\n        <app-ji-input \n          #validatedField\n          [parentForm]=\"signUpForm\" \n          [input]=\"'first_name'\" \n          [title]=\"'First name'\" \n          [errors]=\"firstName.errors\"\n          [hasError]=\"firstName.invalid && signupFormSubmitted\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"signUpForm.get('last_name'); let lastName\">\n        <app-ji-input \n          #validatedField\n          [parentForm]=\"signUpForm\" \n          [input]=\"'last_name'\" \n          [title]=\"'Last name'\" \n          [errors]=\"lastName.errors\"\n          [hasError]=\"lastName.invalid && signupFormSubmitted\"></app-ji-input>\n      </ng-container>\n    </fieldset>\n\n    <fieldset>\n      <ng-container *ngIf=\"signUpForm.get('terms'); let terms\">\n        <app-ji-checkbox \n          #validatedField\n          [parentForm]=\"signUpForm\"\n          [name]=\"'terms'\"\n          [hasError]=\"terms.invalid && signupFormSubmitted\">\n          I accept the Terms & Conditions. (<a \n            [href]=\"externalRouteNames.tnc\" \n            target=\"_blank\">Click here to read more.</a>)\n        </app-ji-checkbox>\n      </ng-container>\n      <ng-container *ngIf=\"signUpForm.get('marketing'); let marketing\">\n        <app-ji-checkbox \n          [parentForm]=\"signUpForm\"\n          [name]=\"'marketing'\">\n          Join the mailing list for member news and offers\n        </app-ji-checkbox>\n      </ng-container>\n    </fieldset>\n\n    <div class=\"m-t-40 m-b-40\">\n      <button\n        mat-ripple\n        type=\"submit\"\n        class=\"btn btn-large btn-rounded bg-20 width-100\"\n        (click)=\"handleSubmitClick(viewStatuses.STUDENT)\"\n        [disabled]=\"status === requestStatus.pending\">\n        Want to practice? Find your teacher</button>\n    </div>\n    \n    <div class=\"m-t-24 m-b-24\">\n      <button\n        mat-ripple\n        type=\"button\"\n        class=\"btn btn-large btn-rounded bg-20 width-100\"\n        [disabled]=\"status === requestStatus.pending\"\n        (click)=\"handleSubmitClick(viewStatuses.TEACHER)\">\n        Are you a teacher? Create your profile</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".explainer {\n  margin: 24px 0 30px; }\n\nfieldset > hr {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUVRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGxhaW5lciB7XG4gICAgbWFyZ2luOiAyNHB4IDAgMzBweDtcbn1cblxuZmllbGRzZXQge1xuICAgID4gaHIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_sign_up_sign_up_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/sign-up/sign-up.actions */ "./src/app/store/modules/sign-up/sign-up.actions.ts");
/* harmony import */ var _src_app_store_modules_sign_up_sign_up_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/sign-up/sign-up.selectors */ "./src/app/store/modules/sign-up/sign-up.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, store, location, spinner) {
        this.fb = fb;
        this.store = store;
        this.location = location;
        this.spinner = spinner;
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_sign_up_sign_up_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSignUpStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_sign_up_sign_up_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSignUpErrors"]));
        this.status = null;
        this.errors = null;
        this.signupFormSubmitted = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        this.loginDetailsForm = this.fb.group({
            email: this.email,
            password: this.password,
            telephone: null
        });
        this.personalDetailsForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // Reactive form
        this.signUpForm = this.fb.group({
            email: this.email,
            password: this.password,
            telephone: null,
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            terms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]],
            marketing: false
        });
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__["RequestStatus"];
        // User view statuses - student or teacher
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_5__["ViewStatuses"];
        this.externalRouteNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["ExternalRouteNames"];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.hide();
        if (history.state && history.state.data) {
            var _a = history.state.data, email = _a.email, password = _a.password;
            if (email) {
                this.email.setValue(email);
            }
            if (password) {
                this.password.setValue(password);
            }
        }
        this.subscriptions.push(this.status$.subscribe(function (status) {
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }), this.signUpForm.valueChanges
            .subscribe(function (val) {
            if (_this.errors) {
                _this.errors = null;
            }
        }));
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * Handle submit click
     */
    SignUpComponent.prototype.handleSubmitClick = function (view_status) {
        this.signupFormSubmitted = true;
        this.signUpForm.markAllAsTouched();
        if (this.signUpForm.invalid) {
            Object(_src_app_helpers__WEBPACK_IMPORTED_MODULE_9__["formValidationScrollFocus"])(this.signUpForm, this.formFields);
            return;
        }
        var data = {
            view_status: view_status,
            email: this.signUpForm.get('email').value,
            password: this.signUpForm.get('password').value,
            first_name: this.signUpForm.get('first_name').value,
            last_name: this.signUpForm.get('last_name').value,
            marketing: this.signUpForm.get('marketing').value
        };
        if (this.signUpForm.get('telephone').value) {
            data.telephone = this.signUpForm.get('telephone').value;
        }
        this.store.dispatch(new _src_app_store_modules_sign_up_sign_up_actions__WEBPACK_IMPORTED_MODULE_3__["SignUpRequestAction"](data));
    };
    SignUpComponent.prototype.goBack = function () {
        this.location.back();
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_10__["SpinnerOverlayService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('validatedField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SignUpComponent.prototype, "formFields", void 0);
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/pages/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_10__["SpinnerOverlayService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _src_app_components_form_header_form_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/form-header/form-header.module */ "./src/app/components/form-header/form-header.module.ts");
/* harmony import */ var _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/components/errors/errors.module */ "./src/app/components/errors/errors.module.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
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
                _src_app_components_form_header_form_header_module__WEBPACK_IMPORTED_MODULE_9__["FormHeaderModule"],
                _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_10__["ErrorsModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_11__["JiFormsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module.ad3c5ee9f42ad174b8fb.js.map