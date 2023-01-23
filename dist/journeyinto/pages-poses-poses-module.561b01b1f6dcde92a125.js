(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-poses-poses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/poses/item/poses-item.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/poses/item/poses-item.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\" *ngIf=\"pose && !spinner.isShowing.value\">\n  <img *ngIf=\"pose.image\"\n    [src]=\"pose.image\" alt=\"\" />\n  <h1 class=\"title-display-3\">{{ pose.title }}</h1>\n  <p *ngIf=\"pose.title_sanskrit\"\n    class=\"text-display-2\">{{pose.title_sanskrit}}</p>\n  <hr>\n  <div class=\"text-display-3 wysiwyg\"\n    [innerHTML]=\"pose?.text | safeHTML\"></div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/poses/list/poses-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/poses/list/poses-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <ul>\n    <li *ngFor=\"let pose of poses\">\n      <a class=\"card\"\n        routerLink=\"{{ pose.slug }}\">\n        <img *ngIf=\"pose.thumbnail\"\n          [src]=\"pose.thumbnail\" \n          class=\"pose-image-rounded\" />\n        <img *ngIf=\"!pose.thumbnail\"\n          [src]=\"'/assets/img/class.png'\" \n          class=\"pose-image-rounded\" />\n        <h1 class=\"text-display-2\">{{ pose.title }} <span *ngIf=\"pose.title === 'Triangle pose'\">looooogn</span></h1>\n      </a>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/poses/item/poses-item.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/poses/item/poses-item.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  margin-top: 20px; }\n\nh1 {\n  margin: 20px 0; }\n\nhr {\n  margin: 20px 0 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Bvc2VzL2l0ZW0vcG9zZXMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3Nlcy9pdGVtL3Bvc2VzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMjBweCAwIDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/poses/item/poses-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/poses/item/poses-item.component.ts ***!
  \**********************************************************/
/*! exports provided: PosesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosesItemComponent", function() { return PosesItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_poses_poses_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/poses/poses.actions */ "./src/app/store/modules/poses/poses.actions.ts");
/* harmony import */ var _src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/poses/poses.selectors */ "./src/app/store/modules/poses/poses.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PosesItemComponent = /** @class */ (function () {
    function PosesItemComponent(store, activatedRoute, spinner) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.pose$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPoseActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (pose) { return Boolean(pose); }));
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPosesStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_7__["RequestStatus"].success; }));
        this.pose = null;
        this.subscriptions = [];
        this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
        this.title = '';
    }
    PosesItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_8__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].poses]));
        // showoverlay
        this.load();
        this.subscriptions.push(this.status$.subscribe(function () {
            // hideoverlay
        }), this.pose$
            .subscribe(function (pose) {
            _this.pose = pose;
            _this.title = "Poses, " + pose.title;
            // console.log('hide spinner');
            _this.spinner.hide();
        }));
    };
    PosesItemComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    PosesItemComponent.prototype.load = function () {
        this.store.dispatch(new _src_app_store_modules_poses_poses_actions__WEBPACK_IMPORTED_MODULE_2__["GetPosesBySlugRequestAction"]({ slug: this.slug }));
    };
    PosesItemComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] }
    ]; };
    PosesItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poses-item',
            template: __webpack_require__(/*! raw-loader!./poses-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/poses/item/poses-item.component.html"),
            styles: [__webpack_require__(/*! ./poses-item.component.scss */ "./src/app/pages/poses/item/poses-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"]])
    ], PosesItemComponent);
    return PosesItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/poses/list/poses-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/poses/list/poses-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin-top: 20px;\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-wrap: wrap; }\n  ul li {\n    margin-bottom: 20px;\n    width: calc(50% - 10px); }\n  ul li a {\n      display: block;\n      height: 100%; }\n  ul li img {\n      width: 100%; }\n  ul li h1 {\n      padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Bvc2VzL2xpc3QvcG9zZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFFckIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZSxFQUFBO0VBUG5CO0lBVVEsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBO0VBWC9CO01BY1ksY0FBYztNQUNkLFlBQVksRUFBQTtFQWZ4QjtNQW1CWSxXQUFXLEVBQUE7RUFuQnZCO01BdUJZLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc2VzL2xpc3QvcG9zZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/poses/list/poses-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/poses/list/poses-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PosesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosesListComponent", function() { return PosesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_poses_poses_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/poses/poses.actions */ "./src/app/store/modules/poses/poses.actions.ts");
/* harmony import */ var _src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/poses/poses.selectors */ "./src/app/store/modules/poses/poses.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PosesListComponent = /** @class */ (function () {
    function PosesListComponent(store, spinner) {
        this.store = store;
        this.spinner = spinner;
        this.poses$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPoses"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (poses) { return Boolean(poses) && Array.isArray(poses); }));
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_3__["selectPosesStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__["RequestStatus"].success; }));
        this.poses = [];
        this.subscriptions = [];
    }
    PosesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // showoverlay
        this.load();
        this.subscriptions.push(this.poses$.subscribe(function (poses) {
            _this.poses = poses;
            // hideoverlay
            // console.log('hide spinner');
            _this.spinner.hide();
        }));
    };
    PosesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    PosesListComponent.prototype.load = function () {
        this.store.dispatch(new _src_app_store_modules_poses_poses_actions__WEBPACK_IMPORTED_MODULE_2__["GetPosesListRequestAction"]());
    };
    PosesListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"] }
    ]; };
    PosesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poses-list',
            template: __webpack_require__(/*! raw-loader!./poses-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/poses/list/poses-list.component.html"),
            styles: [__webpack_require__(/*! ./poses-list.component.scss */ "./src/app/pages/poses/list/poses-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"]])
    ], PosesListComponent);
    return PosesListComponent;
}());



/***/ }),

/***/ "./src/app/pages/poses/poses.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/poses/poses.module.ts ***!
  \*********************************************/
/*! exports provided: PosesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosesModule", function() { return PosesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_pages_poses_list_poses_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/pages/poses/list/poses-list.component */ "./src/app/pages/poses/list/poses-list.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_pages_poses_item_poses_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/pages/poses/item/poses-item.component */ "./src/app/pages/poses/item/poses-item.component.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PosesModule = /** @class */ (function () {
    function PosesModule() {
    }
    PosesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _src_app_pages_poses_list_poses_list_component__WEBPACK_IMPORTED_MODULE_3__["PosesListComponent"],
                        data: {
                            title: 'Postures',
                            goBack: true
                        }
                    },
                    {
                        path: ':slug',
                        component: _src_app_pages_poses_item_poses_item_component__WEBPACK_IMPORTED_MODULE_6__["PosesItemComponent"],
                        data: {
                            title: 'Posture details',
                            goBack: true
                        }
                    }
                ])
            ],
            declarations: [_src_app_pages_poses_list_poses_list_component__WEBPACK_IMPORTED_MODULE_3__["PosesListComponent"], _src_app_pages_poses_item_poses_item_component__WEBPACK_IMPORTED_MODULE_6__["PosesItemComponent"]],
            providers: [],
            bootstrap: []
        })
    ], PosesModule);
    return PosesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-poses-poses-module.561b01b1f6dcde92a125.js.map