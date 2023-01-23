(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-route-not-found-route-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/route-not-found/route-not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/route-not-found/route-not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-60\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div fxFlex=\"45\" fxFlex.xs=\"70\" fxFlex.sm=\"50\" class=\"m-t-50\"> \n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"18px\">\n      <div>\n        <!-- <svg width=\"40\" height=\"40\">\n          <image xlink:href=\"/assets/img/close_icon.svg\" width=\"40\" height=\"40\" />\n        </svg>\n        -->\n      </div>\n      <div class=\"title-display-2 text-center\">Something went wrong</div>\n      <div>\n        <div class=\"text-display-3 text-center\">Sorry the page you were looking for was not found.</div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/route-not-found/route-not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/route-not-found/route-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: RouteNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteNotFoundComponent", function() { return RouteNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteNotFoundComponent = /** @class */ (function () {
    function RouteNotFoundComponent(router, spinner) {
        this.router = router;
        this.spinner = spinner;
        this.spinner.hide();
    }
    RouteNotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayService"] }
    ]; };
    RouteNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-not-found',
            template: __webpack_require__(/*! raw-loader!./route-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/route-not-found/route-not-found.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayService"]])
    ], RouteNotFoundComponent);
    return RouteNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/route-not-found/route-not-found.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/route-not-found/route-not-found.module.ts ***!
  \*****************************************************************/
/*! exports provided: RouteNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteNotFoundModule", function() { return RouteNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _route_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-not-found.component */ "./src/app/pages/route-not-found/route-not-found.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RouteNotFoundModule = /** @class */ (function () {
    function RouteNotFoundModule() {
    }
    RouteNotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_route_not_found_component__WEBPACK_IMPORTED_MODULE_3__["RouteNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _route_not_found_component__WEBPACK_IMPORTED_MODULE_3__["RouteNotFoundComponent"],
                        data: {
                            goBack: false
                        }
                    }
                ]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], RouteNotFoundModule);
    return RouteNotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-route-not-found-route-not-found-module.dab151fae2ebfa3a3f3b.js.map