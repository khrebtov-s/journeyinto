(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recordings-public-recordings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <ul class=\"teachers-recordings\">\n        <li *ngFor=\"let recording of recordings\">\n            <app-class-card \n                [singleClass]=\"recording\"\n                [teacher]=\"teacher\"></app-class-card>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!accessDenied.status\">\n    <app-class-recording \n        *ngIf=\"recording\"\n        [recording]=\"recording\"></app-class-recording>\n</ng-container>\n<ng-container *ngIf=\"accessDenied.status\">\n    <section class=\"wrapper\">\n        <p>Sorry, you can't access this recording.</p>\n        \n        <a *ngIf=\"accessDenied.reason.url\"\n            mat-ripple\n            class=\"btn access-denied-cta\"\n            [routerLink]=\"accessDenied.reason.url\">{{accessDenied.reason.text}}</a>\n        \n        <button *ngIf=\"accessDenied.reason.classBought\"\n            mat-ripple\n            class=\"btn access-denied-cta\"\n            (click)=\"buyClass(accessDenied.reason.classBought)\">\n            {{accessDenied.reason.text}}\n        </button>\n    </section>\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teachers-recordings {\n  margin-top: 40px;\n  padding: 0; }\n\nli:not(:last-child) {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXJzL3B1YmxpYy10ZWFjaGVyLXByb2ZpbGUvcmVjb3JkaW5ncy9wdWJsaWMtcmVjb3JkaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXJzL3B1YmxpYy10ZWFjaGVyLXByb2ZpbGUvcmVjb3JkaW5ncy9wdWJsaWMtcmVjb3JkaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFjaGVycy1yZWNvcmRpbmdzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PublicRecordingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRecordingsComponent", function() { return PublicRecordingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PublicRecordingsComponent = /** @class */ (function () {
    function PublicRecordingsComponent(store, router, spinnerOverlay) {
        this.store = store;
        this.router = router;
        this.spinnerOverlay = spinnerOverlay;
        this.subscriptions = [];
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_2__["selectTeachersObject"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean));
        // showoverlay
    }
    PublicRecordingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when someone lands on this page, direct them to the teacher profile instead!
        this.subscriptions.push(this.teacher$.subscribe(function (obj) {
            var teacher = obj.currentTeacher;
            if (teacher) {
                _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].teachers, teacher.slug]);
            }
        }));
    };
    PublicRecordingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    PublicRecordingsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] }
    ]; };
    PublicRecordingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-recordings',
            template: __webpack_require__(/*! raw-loader!./public-recordings.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.html"),
            styles: [__webpack_require__(/*! ./public-recordings.component.scss */ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"]])
    ], PublicRecordingsComponent);
    return PublicRecordingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PublicRecordingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRecordingsModule", function() { return PublicRecordingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_recordings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-recordings.component */ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.component.ts");
/* harmony import */ var _single_recording_public_single_recording_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-recording/public-single-recording.component */ "./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.ts");
/* harmony import */ var _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/components/class-card/class-card.module */ "./src/app/components/class-card/class-card.module.ts");
/* harmony import */ var _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/class-recording/class-recording.module */ "./src/app/components/class-recording/class-recording.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PublicRecordingsModule = /** @class */ (function () {
    function PublicRecordingsModule() {
    }
    PublicRecordingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _public_recordings_component__WEBPACK_IMPORTED_MODULE_6__["PublicRecordingsComponent"],
                _single_recording_public_single_recording_component__WEBPACK_IMPORTED_MODULE_7__["PublicSingleRecordingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_8__["ClassCardModule"],
                _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_9__["ClassRecordingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _public_recordings_component__WEBPACK_IMPORTED_MODULE_6__["PublicRecordingsComponent"],
                        data: {
                            title: 'Teacher Classes',
                            goBack: true
                        }
                    },
                    {
                        path: ':recordingSlug',
                        component: _single_recording_public_single_recording_component__WEBPACK_IMPORTED_MODULE_7__["PublicSingleRecordingComponent"],
                        data: {
                            title: 'Listen and Flow',
                            goBack: true
                        }
                    }
                ])
            ]
        })
    ], PublicRecordingsModule);
    return PublicRecordingsModule;
}());



/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  text-align: center;\n  padding-top: 24px; }\n\n.access-denied-cta {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXJzL3B1YmxpYy10ZWFjaGVyLXByb2ZpbGUvcmVjb3JkaW5ncy9zaW5nbGUtcmVjb3JkaW5nL3B1YmxpYy1zaW5nbGUtcmVjb3JkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhY2hlcnMvcHVibGljLXRlYWNoZXItcHJvZmlsZS9yZWNvcmRpbmdzL3NpbmdsZS1yZWNvcmRpbmcvcHVibGljLXNpbmdsZS1yZWNvcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4uYWNjZXNzLWRlbmllZC1jdGEge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PublicSingleRecordingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicSingleRecordingComponent", function() { return PublicSingleRecordingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};












var PublicSingleRecordingComponent = /** @class */ (function () {
    function PublicSingleRecordingComponent(store, router, route, authservice, spinner, utils) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.authservice = authservice;
        this.spinner = spinner;
        this.utils = utils;
        this.subscriptions = [];
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_3__["selectTeachersObject"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.recordingSlug = this.route.snapshot.paramMap.get('recordingSlug');
        this.accessDeniedReasons = {
            differentTeacher: {
                text: 'View your profile.',
                url: ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].profile]
            },
            differentStudentTeacher: {
                text: 'View your teacher\'s profile.',
                url: []
            },
            noPurchase: {
                text: 'Purchase this class for £5',
                classBought: null
            },
            noLoggedIn: {
                text: 'Log in and try again',
                url: ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].login]
            }
        };
        this.accessDenied = {
            status: false,
            reason: null
        };
        this.viewStatus = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"];
        // showoverlay
    }
    PublicSingleRecordingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.user$.subscribe(function (user) {
            _this.user = user;
            _this.checkRecordingAccess();
        }), this.teacher$.subscribe(function (_a) {
            var currentTeacher = _a.currentTeacher;
            if (currentTeacher) {
                // hideoverlay
                var allClasses = __spread(currentTeacher.sample_classes, currentTeacher.classes);
                _this.recording = allClasses.find(function (recording) {
                    return recording.slug === _this.recordingSlug;
                });
                if (!_this.recording) {
                    _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].notFound]);
                }
                else {
                    _this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_9__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].teachers, currentTeacher.slug]));
                    // if it is a short class don't worry about permissions
                    if (_this.recording.is_fixed) {
                        return;
                    }
                    // if it NOT a short class, let's check permissions....
                    if (!_this.authservice.isAuthenticated()) {
                        _this.accessDenied = {
                            status: true,
                            reason: _this.accessDeniedReasons.noLoggedIn
                        };
                    }
                    else {
                        _this.checkRecordingAccess();
                    }
                    _this.spinner.hide();
                }
            }
        }));
    };
    PublicSingleRecordingComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    PublicSingleRecordingComponent.prototype.buyClass = function (classBought) {
        this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].student, _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].subscription], {
            state: {
                data: { classBought: classBought }
            }
        });
    };
    PublicSingleRecordingComponent.prototype.checkRecordingAccess = function () {
        var _this = this;
        if (this.user && this.recording) {
            // Access is denied if...
            // 1) if the user is a teacher and the creatorslug of the recording is different from the slug of the teacher/..
            if (this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"].TEACHER &&
                this.user.creator &&
                this.user.creator.slug !== this.recording.creatorslug) {
                this.accessDenied = {
                    status: true,
                    reason: this.accessDeniedReasons.differentTeacher
                };
            }
            // 2) if the user is a student...
            if (this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"].STUDENT) {
                var studentTeacher = this.user.creators ? this.user.creators[0].creator : false;
                // 2a) ...and the creatorslug of the recording is different from the slug of the teacher they are connected to
                if (studentTeacher.slug !== this.recording.creatorslug) {
                    this.accessDenied = {
                        status: true,
                        reason: this.accessDeniedReasons.differentStudentTeacher
                    };
                    this.accessDeniedReasons.differentStudentTeacher.url = ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].teachers, studentTeacher.slug];
                    // 2b) ... and the student is not subscribed to the teacher and they haven't bought the class
                }
                else if (studentTeacher.subscribed.length === 0 && !this.recording.is_fixed) {
                    var studentRecording = studentTeacher.classes.find(function (singleClass) {
                        return singleClass.id === _this.recording.id;
                    });
                    if (studentRecording && !studentRecording.is_bought) {
                        this.accessDenied = {
                            status: true,
                            reason: this.accessDeniedReasons.noPurchase
                        };
                        this.accessDeniedReasons.noPurchase.classBought = studentRecording;
                    }
                }
            }
        }
    };
    PublicSingleRecordingComponent.prototype.log = function (text) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.utils.log(text, 'pink', 'blue', args);
    };
    PublicSingleRecordingComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthorizationService"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_8__["SpinnerOverlayService"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] }
    ]; };
    PublicSingleRecordingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-single-recording',
            template: __webpack_require__(/*! raw-loader!./public-single-recording.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.html"),
            styles: [__webpack_require__(/*! ./public-single-recording.component.scss */ "./src/app/pages/teachers/public-teacher-profile/recordings/single-recording/public-single-recording.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_8__["AuthorizationService"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_8__["SpinnerOverlayService"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]])
    ], PublicSingleRecordingComponent);
    return PublicSingleRecordingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=recordings-public-recordings-module.19170ca715a7ddaf03a6.js.map