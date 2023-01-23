(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-onboarding-onboarding-module~pages-student-student-module~pages-teachers-teachers-modu~00bd549d"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher-card/teacher-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher-card/teacher-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article \n    class=\"subscribed-teacher-small card\" \n    *ngIf=\"teacher && !large\">\n    <app-round-photo [image]=\"teacher.image\"></app-round-photo>\n    <div class=\"teacher-content\">\n        <h1 class=\"text-display-2\">{{ teacher.first_name }} {{ teacher.last_name }} - {{ teacher?.profile_title }}\n        </h1>\n        <div class=\"card-extra-details\">\n            <p class=\"text-display-1 single-info\" \n                *ngIf=\"extra.childNodes.length == 0\">{{teacher.style}}</p>\n            <span #extra>\n                <ng-content select=\"[extraDetails]\"></ng-content>\n            </span>\n        </div>\n    </div>\n    <div class=\"cta-container\">\n        <a *ngIf=\"cta.childNodes.length == 0\"\n            class=\"btn btn-bordered btn-small\"\n            [routerLink]=\"teacherLink\">View profile</a>\n        <span #cta>\n            <ng-content select=\"[cta]\"></ng-content>\n        </span>\n    </div>\n</article>\n\n<article \n    *ngIf=\"teacher && large\"\n    class=\"subscribed-teacher-large card\">\n    <div class=\"image-header\">\n        <img *ngIf=\"teacher.image\" src=\"{{ teacher.image }}\" />\n        <img *ngIf=\"!teacher.image\" src=\"assets/img/class1.png\" />\n    </div>\n    <div class=\"content\">\n        <div>\n            <h1 *ngIf=\"teacher.first_name && teacher.last_name\" \n                class=\"title-display-5\">{{teacher.first_name}} {{teacher.last_name}}{{classBought ? ' - ' + classBought.title : ''}}</h1>\n            \n            <p *ngIf=\"teacher.style\" class=\"text-display-5 teacher-style\">{{teacher.style}}</p>\n        </div>\n        <div \n            class=\"cta\"\n            [ngClass]=\"{\n                'single-btn': selectable,\n                'subscription': !!subscribeTo\n            }\">\n            <ng-container *ngIf=\"!subscribeTo; else subscribeSection\">\n                <a (click)=\"goToTeacher()\"\n                    class=\"btn btn-bordered btn-small\">View profile</a>\n                    \n                <!-- <button \n                    *ngIf=\"selectable\"\n                    (click)=\"handleConnect()\"\n                    class=\"btn btn-small\">Select teacher</button> -->\n            </ng-container>\n            <ng-template #subscribeSection>\n                <p class=\"text-display-4\">{{subscribeTo}}</p>\n            </ng-template>\n        </div>\n    </div>\n</article>"

/***/ }),

/***/ "./src/app/components/teacher-card/teacher-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/teacher-card/teacher-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.subscribed-teacher-small {\n  margin-top: 20px;\n  padding: 20px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between; }\n.subscribed-teacher-small app-round-photo {\n    width: 60px; }\n.subscribed-teacher-small .teacher-content {\n    margin-right: 20px;\n    width: calc(100% - 80px - 115px); }\n@media all and (max-width: 500px) {\n      .subscribed-teacher-small .teacher-content {\n        width: calc(100% - 80px); } }\n.subscribed-teacher-small .card-extra-details ::ng-deep p {\n    color: #a7a7a7; }\n.subscribed-teacher-small .card-extra-details ::ng-deep p:last-child, .subscribed-teacher-small .card-extra-details ::ng-deep p.single-info {\n      margin-bottom: 0; }\n.subscribed-teacher-small .cta-container {\n    width: 115px; }\n.subscribed-teacher-small .cta-container button {\n      min-width: initial;\n      max-width: initial; }\n@media all and (max-width: 500px) {\n      .subscribed-teacher-small .cta-container {\n        margin-top: 10px;\n        width: 100%; } }\n.subscribed-teacher-large {\n  overflow: hidden; }\n.subscribed-teacher-large .image-header {\n    height: 0;\n    padding-bottom: 70%;\n    overflow: hidden;\n    position: relative; }\n.subscribed-teacher-large .image-header img {\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.subscribed-teacher-large .content > div:first-child {\n    padding: 25px 15px 0; }\n.subscribed-teacher-large .content h1 {\n    margin-bottom: 20px; }\n.subscribed-teacher-large .content p {\n    margin-bottom: 5px; }\n.subscribed-teacher-large .content p span:first-child {\n      margin-right: 10px; }\n.subscribed-teacher-large .content p.teacher-style {\n      margin-top: 20px; }\n.subscribed-teacher-large .content .cta {\n    margin-top: 20px; }\n.subscribed-teacher-large .content .cta:not(.subscription) {\n      padding: 0 15px 25px; }\n.subscribed-teacher-large .content .cta.subscription p {\n      padding: 15px;\n      margin-bottom: 0;\n      background-color: #cfc2b9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXItY2FyZC90ZWFjaGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esc0VBQVk7QUNDWjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFFbEIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsOEJBQThCLEVBQUE7QUFQbEM7SUFVUSxXQUFXLEVBQUE7QUFWbkI7SUFjUSxrQkFBa0I7SUFDbEIsZ0NBQThDLEVBQUE7QUFFOUM7TUFqQlI7UUFrQlksd0JBQXdCLEVBQUEsRUFFL0I7QUFwQkw7SUF3QlksY0RORSxFQUFBO0FDbEJkO01BNEJnQixnQkFBZ0IsRUFBQTtBQTVCaEM7SUFrQ1EsWUFwQ2UsRUFBQTtBQUV2QjtNQXFDWSxrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7QUFHdEI7TUF6Q1I7UUEwQ1ksZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQSxFQUVsQjtBQUdMO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFJUSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQVAxQjtNQVVZLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUE7QUFkdkM7SUFzQmdCLG9CQUFvQixFQUFBO0FBdEJwQztJQTJCWSxtQkFBbUIsRUFBQTtBQTNCL0I7SUErQlksa0JBQWtCLEVBQUE7QUEvQjlCO01Ba0NnQixrQkFBa0IsRUFBQTtBQWxDbEM7TUFzQ2dCLGdCQUFnQixFQUFBO0FBdENoQztJQTJDWSxnQkFBZ0IsRUFBQTtBQTNDNUI7TUE4Q2dCLG9CQUFvQixFQUFBO0FBOUNwQztNQW9Eb0IsYUFBYTtNQUNiLGdCQUFnQjtNQUVoQix5QkQ3RlAsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci1jYXJkL3RlYWNoZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdGhlIGNvbW1vbiBzdHlsZXMgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwuIFdlIGluY2x1ZGUgdGhpcyBoZXJlIHNvIHRoYXQgeW91IG9ubHlcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cbi8vICoqQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhKipcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcblxuLy8gQXBwIHBhbGV0dGVcbiRwYWxldHRlOiAoXG4gIHdoaXRlOiAjZmZmLFxuICBlcnJvcjogI2Y0NDMzNixcbiAgY2hhcmNvYWw6ICMzMjJCMjMsXG4gIGJsYWNrOiAjMzIyQjIzLFxuICBzZW1pVHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gIDEwOiAjMTAwZTBiLFxuICAyMDogIzMyMmIyNSxcbiAgMzA6ICNjZmMyYjksXG4gIDQwOiAjYWM5YThjLFxuICA1MDogIzhlNDkxZCxcbiAgNjA6ICNlZGUzZDQsXG4gIDcwOiAjZWRlZGViLFxuICA4MDogI2Y0ZWVlNSxcbiAgOTA6ICNmZmZjZmEsXG4gIDEwMDogI2U4ZThlOCxcbiAgMTEwOiAjYTdhN2E3LFxuICAxMjA6ICM3ODc4NzgsXG4gIDEzMDogIzcxMTYwOSxcbiAgMTQwOiAjMDA5ZTc5LFxuICAxNTA6ICMyZjJmMmZcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb21tb24vc3R5bGVzLmNvbW1vbi5zY3NzJztcblxuJHNtYWxsLWNvbC13aWR0aDogMTE1cHg7XG5cbi5zdWJzY3JpYmVkLXRlYWNoZXItc21hbGwge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYXBwLXJvdW5kLXBob3RvIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICAgIFxuICAgIC50ZWFjaGVyLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4IC0gI3skc21hbGwtY29sLXdpZHRofSk7XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWV4dHJhLWRldGFpbHMgeyAgICAgICAgXG4gICAgICAgIDo6bmctZGVlcCBwIHtcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAxMTApO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQsXG4gICAgICAgICAgICAmLnNpbmdsZS1pbmZvIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN0YS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogJHNtYWxsLWNvbC13aWR0aDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN1YnNjcmliZWQtdGVhY2hlci1sYXJnZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAuaW1hZ2UtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuXG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMTVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGVhY2hlci1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jdGEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpub3QoLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnN1YnNjcmlwdGlvbiB7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAzMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/teacher-card/teacher-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/teacher-card/teacher-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: TeacherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCardComponent", function() { return TeacherCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/students/students.actions */ "./src/app/store/modules/students/students.actions.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherCardComponent = /** @class */ (function () {
    function TeacherCardComponent(store, spinnerOverlayService, router) {
        this.store = store;
        this.spinnerOverlayService = spinnerOverlayService;
        this.router = router;
        this.selectable = false;
        this.large = false; // if large is true, just do a different styling of image
        this.subscribeTo = '';
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"];
        this.subscriptions = [];
    }
    TeacherCardComponent.prototype.ngOnInit = function () {
        this.teacherLink = ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].teachers, this.teacher.slug];
    };
    TeacherCardComponent.prototype.goToTeacher = function () {
        this.router.navigate(this.teacherLink, {
            state: {
                data: {
                    selectable: this.selectable
                }
            }
        });
    };
    TeacherCardComponent.prototype.handleDisconnect = function () {
        this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_2__["DisconnectFromTeacherRequestAction"](this.teacher));
    };
    TeacherCardComponent.prototype.handleConnect = function () {
        // showoverlay
        this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_2__["ConnectToTeacherRequestAction"]({ slug: this.teacher.slug }));
    };
    TeacherCardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_3__["SpinnerOverlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherCardComponent.prototype, "selectable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherCardComponent.prototype, "teacher", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherCardComponent.prototype, "large", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherCardComponent.prototype, "subscribeTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherCardComponent.prototype, "classBought", void 0);
    TeacherCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-card',
            template: __webpack_require__(/*! raw-loader!./teacher-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher-card/teacher-card.component.html"),
            styles: [__webpack_require__(/*! ./teacher-card.component.scss */ "./src/app/components/teacher-card/teacher-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_3__["SpinnerOverlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TeacherCardComponent);
    return TeacherCardComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher-card/teacher-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/teacher-card/teacher-card.module.ts ***!
  \****************************************************************/
/*! exports provided: TeacherCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCardModule", function() { return TeacherCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teacher_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-card.component */ "./src/app/components/teacher-card/teacher-card.component.ts");
/* harmony import */ var _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-photo/round-photo.module */ "./src/app/components/round-photo/round-photo.module.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TeacherCardModule = /** @class */ (function () {
    function TeacherCardModule() {
    }
    TeacherCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_teacher_card_component__WEBPACK_IMPORTED_MODULE_2__["TeacherCardComponent"]],
            exports: [_teacher_card_component__WEBPACK_IMPORTED_MODULE_2__["TeacherCardComponent"]]
        })
    ], TeacherCardModule);
    return TeacherCardModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-onboarding-onboarding-module~pages-student-student-module~pages-teachers-teachers-modu~00bd549d.9a080a4045a20a39803b.js.map