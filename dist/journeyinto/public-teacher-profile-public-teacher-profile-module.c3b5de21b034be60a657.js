(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-teacher-profile-public-teacher-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/profile/profile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teachers/public-teacher-profile/profile/profile.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-teachers-profile></app-teachers-profile>\n"

/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/profile/profile.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/profile/profile.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXJzL3B1YmxpYy10ZWFjaGVyLXByb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/profile/profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/profile/profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
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






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store, utils, spinner) {
        this.store = store;
        this.utils = utils;
        this.spinner = spinner;
        this.prevUrl = ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_3__["RouteNames"].teachers];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_2__["SetBackSharedAction"](this.prevUrl));
    };
    ProfileComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).logall.apply(_a, __spread([text, this.constructor.name], args));
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teachers/public-teacher-profile/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/teachers/public-teacher-profile/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/teachers/public-teacher-profile/public-teacher-profile.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/teachers/public-teacher-profile/public-teacher-profile.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PublicTeacherProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicTeacherProfileModule", function() { return PublicTeacherProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_components_teacher_profile_teachers_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/components/teacher-profile/teachers-profile.module */ "./src/app/components/teacher-profile/teachers-profile.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/teachers/public-teacher-profile/profile/profile.component.ts");
/* harmony import */ var _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/class-recording/class-recording.module */ "./src/app/components/class-recording/class-recording.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PublicTeacherProfileModule = /** @class */ (function () {
    function PublicTeacherProfileModule() {
    }
    PublicTeacherProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _src_app_components_teacher_profile_teachers_profile_module__WEBPACK_IMPORTED_MODULE_7__["TeachersProfileModule"],
                _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_9__["ClassRecordingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                        data: {
                            title: 'Teacher Profile',
                            goBack: true
                        }
                    },
                    {
                        path: _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].recordings,
                        loadChildren: function () { return __webpack_require__.e(/*! import() | recordings-public-recordings-module */ "recordings-public-recordings-module").then(__webpack_require__.bind(null, /*! ./recordings/public-recordings.module */ "./src/app/pages/teachers/public-teacher-profile/recordings/public-recordings.module.ts"))
                            .then(function (mod) { return mod.PublicRecordingsModule; }); }
                    },
                ])
            ]
        })
    ], PublicTeacherProfileModule);
    return PublicTeacherProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=public-teacher-profile-public-teacher-profile-module.c3b5de21b034be60a657.js.map