(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-teacher-teacher-module~pages-teachers-teachers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher-profile/teachers-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher-profile/teachers-profile.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"teacher && !spinner.isShowing.value\">\n  <app-message [message]=\"message\"></app-message>\n\n  <section class=\"personal-details\">\n    <div class=\"wrapper-full profile-image\" *ngIf=\"teacher.image\">\n      <img src=\"{{ teacher.image }}\" alt=\"Teacher profile photo\" />\n      <h1 class=\"title-display-6\">\n        {{ teacher.first_name }} {{ teacher.last_name }}\n      </h1>\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"main-details\">\n        <p class=\"text-display-6\" *ngIf=\"teacher.qualifications\">\n          {{ teacher.qualifications }}\n        </p>\n        <p class=\"text-display-5\" *ngIf=\"teacher.style\">{{ teacher.style }}</p>\n        <p class=\"teacher-contacts text-display-3\">\n          <span *ngIf=\"teacher.city\">{{ teacher.city }},</span\n          ><a href=\"mailto:{{ teacher.email }}\">{{ teacher.email }}</a>\n        </p>\n        <hr />\n      </div>\n    </div>\n  </section>\n\n  <section class=\"about wrapper\" *ngIf=\"teacher.description || isValidVimeoUrl\">\n    <div\n      class=\"text-display-3\"\n      *ngIf=\"teacher.description\"\n      [innerHTML]=\"teacher.description | replaceLineBreaks | safeHTML\"\n    ></div>\n\n    <ng-container *ngIf=\"isValidVimeoUrl\">\n      <div class=\"video-container\">\n        <iframe\n          [src]=\"teacher.vimeo_url | safeVideo\"\n          frameborder=\"0\"\n          allow=\"autoplay; fullscreen\"\n          allowfullscreen\n        ></iframe>\n      </div>\n    </ng-container>\n  </section>\n\n  <section class=\"news-events wrapper\" *ngIf=\"!!teacher.news_events\">\n    <h1 class=\"text-display-2\">News & Events</h1>\n    <hr />\n    <div\n      class=\"text-display-3\"\n      [innerHTML]=\"teacher.news_events | replaceLineBreaks | safeHTML\"\n    ></div>\n  </section>\n\n  <section\n    class=\"classes wrapper\"\n    *ngIf=\"!isSubscribed && teacher.sample_classes?.length\"\n  >\n    <h1 class=\"text-display-2\">Short classes</h1>\n\n    <ul>\n      <li *ngFor=\"let record of teacher.sample_classes\">\n        <app-class-card\n          [singleClass]=\"record\"\n          [teacher]=\"teacher\"\n        ></app-class-card>\n      </li>\n    </ul>\n  </section>\n  <section\n    class=\"classes wrapper\"\n    *ngIf=\"isSubscribed && teacher.classes?.length\"\n  >\n    <h1 class=\"text-display-2\">Teacher classes</h1>\n\n    <ul>\n      <li *ngFor=\"let record of teacher.classes\">\n        <app-class-card\n          [singleClass]=\"record\"\n          [teacher]=\"teacher\"\n        ></app-class-card>\n      </li>\n    </ul>\n  </section>\n\n  <section class=\"external-links wrapper\" *ngIf=\"links?.length\">\n    <h1 class=\"text-display-2\">External links</h1>\n    <hr />\n    <ul *ngFor=\"let link of links\">\n      <li>\n        <a class=\"text-display-5\" class=\"links\" href=\"{{ link.url }}\" target=\"_blank\">\n          <img src=\"assets/img/{{ link?.icon ? link.icon : 'link' }}.png\" />\n          {{ link?.label }}\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <section class=\"url wrapper\" *ngIf=\"canEdit\">\n    <h1 class=\"text-display-2\">Your personal link</h1>\n    <hr />\n    <p class=\"text-displaty-3\">\n      Share with your students so they can find you instantly\n    </p>\n    <div class=\"copy-area\">\n      <input\n        type=\"text\"\n        value=\"{{ appUrl }}/{{ routeNames.teachers }}/{{ teacher.slug }}\"\n        #profileUrl\n      />\n      <p class=\"text-display-6\">\n        {{ appUrl }}/{{ routeNames.teachers }}/{{ teacher.slug }}\n      </p>\n      <span *ngIf=\"copied\">Copied!</span>\n    </div>\n    <button\n      mat-ripple\n      type=\"button\"\n      (click)=\"copyProfileUrl(profileUrl)\"\n      class=\"btn btn-bordered\"\n    >\n      Copy url\n    </button>\n  </section>\n\n  <section\n    class=\"cta wrapper\"\n    *ngIf=\"\n      canEdit || (!canEdit && (selectable || canSubscribe || !isAuthorized))\n    \"\n  >\n    <a\n      *ngIf=\"canEdit\"\n      [routerLink]=\"['/', routeNames.teacher, routeNames.profileEdit]\"\n      mat-ripple\n      class=\"btn\"\n      >Edit profile</a\n    >\n    <div *ngIf=\"!canEdit\">\n      <div class=\"connect-cta\" *ngIf=\"selectable || !isAuthorized\">\n        <p class=\"text-display-3\">\n          Connect to your teacher’s profile to keep up to date with their\n          teaching schedules, news, events and retreats.\n        </p>\n        <button mat-ripple (click)=\"handleConnectToTeacher()\" class=\"btn\">\n          Connect to {{ teacher.first_name }}\n        </button>\n      </div>\n      <div class=\"subscribe-cta\" *ngIf=\"canSubscribe || !isAuthorized\">\n        <ng-container *ngIf=\"!isSubscribed\">\n          <p class=\"text-display-3\">\n            Your teacher is recording new classes every week so you can practice\n            anywhere, any time with the support of their familiar phrasing and\n            sequences.\n          </p>\n          <button (click)=\"handleSubscribeToTeacher()\" class=\"btn\" mat-ripple>\n            Subscribe to {{ teacher.first_name\n            }}{{\n              teacher.product\n                ? \" for \" +\n                  (teacher.product.cost\n                    | currency: teacher.currency.toUpperCase()) +\n                  \" a \" +\n                  teacher.product.frequency\n                : \"\"\n            }}\n          </button>\n        </ng-container>\n      </div>\n    </div>\n  </section>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/teacher-profile/teachers-profile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/teacher-profile/teachers-profile.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\nsection:not(.personal-details) {\n  margin-top: 40px; }\nsection.url button {\n  margin-top: 20px; }\n.main-details {\n  padding-top: 24px; }\n.profile-image {\n  position: relative; }\n.profile-image img {\n    width: 100%; }\n.profile-image h1 {\n    padding: 0 20px;\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    color: #fff; }\n.teacher-contacts {\n  margin-top: 16px; }\n.teacher-contacts span {\n    margin-right: 5px; }\n.video-container {\n  position: relative;\n  margin-top: 30px;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n.video-container iframe,\n  .video-container object,\n  .video-container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.classes h1,\n.classes li {\n  margin-bottom: 20px; }\n.external-links hr {\n  margin-bottom: 30px; }\n.external-links .links {\n  display: flex;\n  align-items: center; }\n.external-links ul a {\n  display: flex; }\n.external-links ul a img {\n    margin-right: 10px; }\n.news-events hr {\n  margin-bottom: 20px; }\n.connect-cta {\n  margin-bottom: 24px; }\n.copy-area {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap; }\n.copy-area p {\n    margin-bottom: 0; }\n.copy-area input {\n    margin: 10px 0;\n    position: absolute;\n    color: transparent;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    border: none; }\n.copy-area span {\n    margin: 10px 0;\n    margin-left: 10px;\n    color: #009e79; }\n.public-profile-link {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXItcHJvZmlsZS90ZWFjaGVycy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDRFo7RUFFUSxnQkFBZ0IsRUFBQTtBQUZ4QjtFQU9ZLGdCQUFnQixFQUFBO0FBSzVCO0VBQ0ksaUJBQWlCLEVBQUE7QUFPckI7RUFDSSxrQkFBa0IsRUFBQTtBQUR0QjtJQUlRLFdBQVcsRUFBQTtBQUpuQjtJQVFRLGVBQWU7SUFFZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFFUCxXRDdCSyxFQUFBO0FDaUNiO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxpQkFBaUIsRUFBQTtBQUl6QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTtBQUxwQjs7O0lBVVEsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVksRUFBQTtBQUlwQjs7RUFHUSxtQkFBbUIsRUFBQTtBQUkzQjtFQUVRLG1CQUFtQixFQUFBO0FBRjNCO0VBTVEsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0FBUDNCO0VBWVksYUFBYSxFQUFBO0FBWnpCO0lBZWdCLGtCQUFrQixFQUFBO0FBTWxDO0VBRVEsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxtQkFBbUIsRUFBQTtBQUl2QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtBQUpuQjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBV1EsY0FBYztJQUVkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBRVgsWUFBWSxFQUFBO0FBbkJwQjtJQXVCUSxjQUFjO0lBQ2QsaUJBQWlCO0lBRWpCLGNEekdNLEVBQUE7QUM2R2Q7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci1wcm9maWxlL3RlYWNoZXJzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbmNsdWRlIHRoZSBjb21tb24gc3R5bGVzIGZvciBBbmd1bGFyIE1hdGVyaWFsLiBXZSBpbmNsdWRlIHRoaXMgaGVyZSBzbyB0aGF0IHlvdSBvbmx5XG4vLyBoYXZlIHRvIGxvYWQgYSBzaW5nbGUgY3NzIGZpbGUgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwgaW4geW91ciBhcHAuXG4vLyAqKkJlIHN1cmUgdGhhdCB5b3Ugb25seSBldmVyIGluY2x1ZGUgdGhpcyBtaXhpbiBvbmNlISoqXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XG5cbi8vIEFwcCBwYWxldHRlXG4kcGFsZXR0ZTogKFxuICB3aGl0ZTogI2ZmZixcbiAgZXJyb3I6ICNmNDQzMzYsXG4gIGNoYXJjb2FsOiAjMzIyQjIzLFxuICBibGFjazogIzMyMkIyMyxcbiAgc2VtaVRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDAuMDQpLFxuICAxMDogIzEwMGUwYixcbiAgMjA6ICMzMjJiMjUsXG4gIDMwOiAjY2ZjMmI5LFxuICA0MDogI2FjOWE4YyxcbiAgNTA6ICM4ZTQ5MWQsXG4gIDYwOiAjZWRlM2Q0LFxuICA3MDogI2VkZWRlYixcbiAgODA6ICNmNGVlZTUsXG4gIDkwOiAjZmZmY2ZhLFxuICAxMDA6ICNlOGU4ZTgsXG4gIDExMDogI2E3YTdhNyxcbiAgMTIwOiAjNzg3ODc4LFxuICAxMzA6ICM3MTE2MDksXG4gIDE0MDogIzAwOWU3OSxcbiAgMTUwOiAjMmYyZjJmXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvY29tbW9uL3N0eWxlcy5jb21tb24uc2Nzcyc7XG5cbnNlY3Rpb24ge1xuICAgICY6bm90KC5wZXJzb25hbC1kZXRhaWxzKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuXG4gICAgJi51cmwge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1haW4tZGV0YWlscyB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi5wZXJzb25hbC1kZXRhaWxzIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgd2hpdGUpO1xuICAgIH1cbn1cblxuLnRlYWNoZXItY29udGFjdHMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnZpZGVvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGlmcmFtZSxcbiAgICBvYmplY3QsXG4gICAgZW1iZWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5jbGFzc2VzIHtcbiAgICBoMSwgXG4gICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cblxuLmV4dGVybmFsLWxpbmtzIHtcbiAgICBociB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLmxpbmtzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5uZXdzLWV2ZW50cyB7XG4gICAgaHIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cblxuLmNvbm5lY3QtY3RhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG5cbi5jb3B5LWFyZWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcblxuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIFxuICAgICAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgMTQwKTtcbiAgICB9XG59XG5cbi5wdWJsaWMtcHJvZmlsZS1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/teacher-profile/teachers-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/teacher-profile/teachers-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: TeachersProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersProfileComponent", function() { return TeachersProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/students/students.actions */ "./src/app/store/modules/students/students.actions.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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













var TeachersProfileComponent = /** @class */ (function () {
    function TeachersProfileComponent(store, router, titleService, videoService, route, utils, spinner, auth, userService) {
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.videoService = videoService;
        this.route = route;
        this.utils = utils;
        this.spinner = spinner;
        this.auth = auth;
        this.userService = userService;
        this.subscriptions = [];
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"];
        this.canEdit = false;
        this.teacherObj$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_9__["selectTeachersObject"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__["selectUserActive"]));
        this.status = "pending";
        this.message = "";
        this.links = [];
        this.slug = "";
        this.isValidVimeoUrl = false;
        this.selectable = false;
        this.isAuthorized = false;
        this.isSubscribed = false;
        this.canSubscribe = false;
        this.connectOnly = true;
        this.appUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].serverUrl;
        this.copied = false;
        this.newsEventsText = "";
    }
    TeachersProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log("INIT TEACHERS PROFILE");
        this.subscriptions.push(this.teacherObj$.subscribe(function (teacherObj) {
            var currentUserId = _this.auth.getCurrentUserId();
            _this.teacher = teacherObj.currentTeacher;
            if (_this.teacher) {
                if (currentUserId &&
                    _this.teacher.user === currentUserId &&
                    _this.userService.getViewStatus() === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_10__["ViewStatuses"].TEACHER) {
                    _this.canEdit = true;
                }
                _this.initTeacher(_this.teacher);
                _this.spinner.hide();
            }
        }), 
        // I use this cuz I wanna see when I manage to connect to a teacher if I'm a student
        this.user$.subscribe(function (user) {
            _this.user = user;
            _this.isAuthorized = !!user;
            if (user &&
                user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_10__["ViewStatuses"].STUDENT &&
                Array.isArray(user.creators)) {
                if (user.creators.length === 0) {
                    _this.selectable = true;
                    _this.canSubscribe = true;
                }
                else if (!isNaN(user.creators[0])) {
                    if (_this.connectOnly) {
                        _this.log("only connecty");
                        _this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].student]);
                    }
                    else {
                        _this.log("connect + subscribe");
                        _this.router.navigate([
                            "/",
                            _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].student,
                            _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].subscription,
                        ]);
                    }
                }
                else if (_this.teacher && _this.user.creators[0]) {
                    _this.canSubscribe =
                        _this.teacher.slug === _this.user.creators[0].creator.slug;
                }
            }
        }));
        if (history.state.data) {
            if (history.state.data.message) {
                this.message = history.state.data.message;
            }
            this.selectable = history.state.data && history.state.data.selectable;
            this.canSubscribe = this.selectable;
        }
    };
    TeachersProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TeachersProfileComponent.prototype.initTeacher = function (teacher) {
        var teacherTitle;
        var links = teacher.links;
        this.links = this.mapLinks(links);
        if (this.canEdit && !this.route.snapshot.paramMap.get("name")) {
            teacherTitle = "Your Profile";
        }
        else {
            if (teacher.first_name && teacher.last_name && teacher.profile_title) {
                teacherTitle = teacher.first_name + " " + teacher.last_name + " - " + teacher.profile_title;
            }
            else if (teacher.profile_title) {
                teacherTitle = teacher.profile_title;
            }
        }
        if (teacherTitle) {
            this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__["SetTitleSharedAction"](teacherTitle));
        }
        this.isValidVimeoUrl =
            !!teacher.vimeo_url &&
                this.videoService.checkVimeoVideoURL(teacher.vimeo_url);
        if (!this.canEdit && teacher.subscribed && teacher.subscribed.length > 0) {
            this.isSubscribed = true;
        }
        else {
            this.isSubscribed = false;
        }
    };
    TeachersProfileComponent.prototype.mapLinks = function (links) {
        var _this = this;
        var networks = new Map([
            ["twitter", "@"],
            ["instagram", "@"],
            ["facebook", "facebook.com/"],
            ["linkedin", "linkedin.com/"],
        ]);
        return links.map(function (item) {
            var e_1, _a;
            try {
                for (var _b = __values(networks.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var link = _c.value;
                    if (item.url.includes(link)) {
                        return _this.transformSocialLink(item, link, networks);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _this.transformOtherLink(item);
        });
    };
    TeachersProfileComponent.prototype.transformSocialLink = function (item, link, map) {
        return {
            id: item.id,
            icon: link,
            label: "" + map.get(link) + item.url.split("/").filter(function (el) { return el; }).pop(),
            url: item.url,
        };
    };
    TeachersProfileComponent.prototype.transformOtherLink = function (item) {
        return {
            id: item.id,
            label: item.label,
            url: item.url,
        };
    };
    TeachersProfileComponent.prototype.gotoRecording = function (recording) {
        if (this.slug && recording.slug) {
            this.router.navigate([
                "/",
                _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].teachers,
                this.slug,
                recording.slug,
            ]);
        }
    };
    TeachersProfileComponent.prototype.handleConnectToTeacher = function () {
        this.log("CONNECT TO THIS TEACHER");
        var _a = this.teacher, slug = _a.slug, user = _a.user;
        if (this.isAuthorized) {
            this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_7__["ConnectToTeacherRequestAction"]({ slug: slug }));
        }
        else {
            this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].signup], {
                state: { teacher: { slug: slug, user: user } },
            });
        }
    };
    TeachersProfileComponent.prototype.handleSubscribeToTeacher = function () {
        this.log("CONNECT + SUBSCRIBE TO THIS TEACHER");
        this.connectOnly = false;
        this.log(this.connectOnly);
        if (this.selectable || !this.isAuthorized) {
            this.utils.suscriptionOnTeacher = true;
            this.handleConnectToTeacher();
        }
        else {
            this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].student, _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"].subscription]);
        }
    };
    TeachersProfileComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).logall.apply(_a, __spread([text, this.constructor.name], args));
    };
    TeachersProfileComponent.prototype.copyProfileUrl = function (inputElement) {
        inputElement.select();
        document.execCommand("copy");
        inputElement.setSelectionRange(0, 0);
        inputElement.blur();
        this.copied = true;
    };
    TeachersProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["VideoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    TeachersProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-teachers-profile",
            template: __webpack_require__(/*! raw-loader!./teachers-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher-profile/teachers-profile.component.html"),
            styles: [__webpack_require__(/*! ./teachers-profile.component.scss */ "./src/app/components/teacher-profile/teachers-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _services__WEBPACK_IMPORTED_MODULE_5__["VideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], TeachersProfileComponent);
    return TeachersProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher-profile/teachers-profile.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/teacher-profile/teachers-profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: TeachersProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersProfileModule", function() { return TeachersProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teachers_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teachers-profile.component */ "./src/app/components/teacher-profile/teachers-profile.component.ts");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _class_card_class_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../class-card/class-card.module */ "./src/app/components/class-card/class-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TeachersProfileModule = /** @class */ (function () {
    function TeachersProfileModule() {
    }
    TeachersProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _message_message_module__WEBPACK_IMPORTED_MODULE_3__["MessageModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _class_card_class_card_module__WEBPACK_IMPORTED_MODULE_9__["ClassCardModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_teachers_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeachersProfileComponent"]],
            exports: [_teachers_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeachersProfileComponent"]]
        })
    ], TeachersProfileModule);
    return TeachersProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-teacher-teacher-module~pages-teachers-teachers-module.cc27dfec4095c53484b2.js.map