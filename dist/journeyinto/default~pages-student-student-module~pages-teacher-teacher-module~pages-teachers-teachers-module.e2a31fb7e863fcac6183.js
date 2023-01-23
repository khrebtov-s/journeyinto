(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-student-student-module~pages-teacher-teacher-module~pages-teachers-teachers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/class-card/class-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/class-card/class-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"singleClass\">\n  <div class=\"class-header\">\n    <img [src]=\"poseImg\" />\n\n    <!-- <app-round-photo \n            *ngIf=\"teacher\"\n            [image]=\"teacher?.image\"></app-round-photo> -->\n  </div>\n  <div class=\"class-content\">\n    <audio\n      *ngIf=\"audioSrc\"\n      [src]=\"audioSrc\"\n      (loadedmetadata)=\"getDuration()\"\n      #audio\n    ></audio>\n    <h1 class=\"text-display-2\">\n      {{ singleClass.title || emptyField\n      }}<span *ngIf=\"canEdit && singleClass.status\">\n        - {{ singleClass.status | uppercase }}</span\n      >\n    </h1>\n    <div class=\"text-display-6 class-details\">\n      <p *ngIf=\"!hideClassLength\">\n        <span class=\"text-display-5\">Length:</span>\n        {{ classLength | minuteSeconds }}\n      </p>\n      <p [ngClass]=\"{ 'level-paragraph': hideClassLength }\">\n        <span class=\"text-display-5\">Level:</span>\n        {{ singleClass.difficulty || emptyField }}\n      </p>\n    </div>\n    <div\n      class=\"text-display-3 class-description\"\n      *ngIf=\"singleClass.description && singleClass.description.length > 0\"\n      [innerHTML]=\"\n        (singleClass.description | replaceLineBreaks | excerpt: 200 | getParsedTextWithHref) ||\n          emptyField | safeHTML\n      \"\n    ></div>\n\n    <div\n      class=\"cta\"\n      [ngClass]=\"{\n        'single-btn': (!canEdit && !customContent) || canEdit\n      }\"\n    >\n      <ng-container *ngIf=\"!customContent\">\n        <ng-container *ngIf=\"!canEdit\">\n          <a\n            class=\"btn btn-bordered btn-small\"\n            *ngIf=\"teacher?.slug && singleClass?.slug\"\n            [routerLink]=\"[\n              '/',\n              routeNames.teachers,\n              teacher.slug,\n              routeNames.recordings,\n              singleClass.slug\n            ]\"\n          >\n            Practice\n          </a>\n        </ng-container>\n\n        <ng-container *ngIf=\"canEdit\">\n          <a\n            class=\"btn btn-bordered btn-small \"\n            *ngIf=\"singleClass?.slug\"\n            [routerLink]=\"[\n              '/',\n              routeNames.teacher,\n              routeNames.recordings,\n              singleClass.slug\n            ]\"\n            >View</a\n          >\n          <!-- \n                    <button \n                        class=\"btn btn-bordered btn-small\" \n                        (click)=\"deleteRecording()\">Delete</button>\n        \n\n                    <button \n                        class=\"btn btn-bordered btn-small\"\n                        (click)=\"onClassEdit()\">Edit</button>\n     -->\n          <!-- <a class=\"btn btn-bordered btn-small\" \n                        *ngIf=\"singleClass?.slug\"\n                        [routerLink]=\"[singleClass.slug, routeNames.editAudio]\">Edit class details</a> -->\n        </ng-container>\n      </ng-container>\n\n      <div #ref class=\"custom-content\" *ngIf=\"customContent\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/round-photo/round-photo.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/round-photo/round-photo.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"round-img-container\">\n    <app-icon \n        *ngIf=\"!image\"\n        [icon]=\"'account_icon'\" \n        [width]=\"40\" \n        [height]=\"40\"></app-icon>\n    <img *ngIf=\"image\" [src]=\"image\" />\n</div>"

/***/ }),

/***/ "./src/app/components/class-card/class-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/class-card/class-card.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.class-header {\n  position: relative; }\n.class-header img {\n    width: 100%; }\n.class-header app-round-photo {\n    position: absolute;\n    bottom: -15px;\n    right: 20px; }\n.class-content {\n  padding: 20px;\n  padding-bottom: 4rem; }\n.class-content .class-details,\n  .class-content .class-description {\n    margin-top: 10px; }\n.class-content ::ng-deep p {\n    margin-bottom: 0; }\n.class-content .class-details {\n    display: flex; }\n.class-content .class-details p.level-paragraph {\n      padding-left: 0 !important; }\n.class-content .class-details p {\n      width: 50%;\n      color: #a7a7a7; }\n.class-content .class-details p span {\n        color: #322B23; }\n.class-content .class-details p:first-child {\n        padding-right: 40px;\n        border-right: solid 1px #e8e8e8; }\n.class-content .class-details p:last-child {\n        padding-left: 40px; }\n@media all and (max-width: 400px) {\n        .class-content .class-details p {\n          width: auto; }\n          .class-content .class-details p:first-child {\n            padding-right: 20px; }\n          .class-content .class-details p:last-child {\n            padding-left: 20px; } }\n.class-content .class-details button {\n      margin-top: 20px; }\n.cta {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between; }\n.cta:not(.single-btn) a,\n  .cta:not(.single-btn) button {\n    width: calc(50% - 10px); }\n.cta.single-btn .custom-content {\n    display: none; }\n.custom-content {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2NsYXNzLWNhcmQvY2xhc3MtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxzRUFBWTtBQ0RaO0VBQ0Usa0JBQWtCLEVBQUE7QUFEcEI7SUFJSSxXQUFXLEVBQUE7QUFKZjtJQVFJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVyxFQUFBO0FBSWY7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7QUFGdEI7O0lBTUksZ0JBQWdCLEVBQUE7QUFOcEI7SUFVSSxnQkFBZ0IsRUFBQTtBQVZwQjtJQWNJLGFBQWEsRUFBQTtBQWRqQjtNQWlCTSwwQkFBMEIsRUFBQTtBQWpCaEM7TUFxQk0sVUFBVTtNQUNWLGNEaEJRLEVBQUE7QUNOZDtRQXlCUSxjRC9CUSxFQUFBO0FDTWhCO1FBNkJRLG1CQUFtQjtRQUNuQiwrQkR6Qk0sRUFBQTtBQ0xkO1FBa0NRLGtCQUFrQixFQUFBO0FBR3BCO1FBckNOO1VBc0NRLFdBQVcsRUFBQTtVQXRDbkI7WUF5Q1UsbUJBQW1CLEVBQUE7VUF6QzdCO1lBNENVLGtCQUFrQixFQUFBLEVBQ25CO0FBN0NUO01Ba0RNLGdCQUFnQixFQUFBO0FBS3RCO0VBQ0UsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUpoQzs7SUFTTSx1QkFBdUIsRUFBQTtBQVQ3QjtJQWVNLGFBQWEsRUFBQTtBQUtuQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3MtY2FyZC9jbGFzcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9jb21tb24vc3R5bGVzLmNvbW1vbi5zY3NzXCI7XG5cbi5jbGFzcy1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGFwcC1yb3VuZC1waG90byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTE1cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLmNsYXNzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcblxuICAuY2xhc3MtZGV0YWlscyxcbiAgLmNsYXNzLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAuY2xhc3MtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHAubGV2ZWwtcGFyYWdyYXBoIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAxMTApO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IG1hcC1nZXQoJHBhbGV0dGUsIDEwMCk7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY3RhIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJjpub3QoLnNpbmdsZS1idG4pIHtcbiAgICBhLFxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICB9XG4gIH1cblxuICAmLnNpbmdsZS1idG4ge1xuICAgIC5jdXN0b20tY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/class-card/class-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/class-card/class-card.component.ts ***!
  \***************************************************************/
/*! exports provided: ClassCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassCardComponent", function() { return ClassCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_recording_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/recording-status */ "./src/app/pages/teacher/recordings/recording-status.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _src_app_services_recording_recording_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/services/recording/recording-utils.service */ "./src/app/services/recording/recording-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClassCardComponent = /** @class */ (function () {
    function ClassCardComponent(store, router, recordingUtilsService) {
        this.store = store;
        this.router = router;
        this.recordingUtilsService = recordingUtilsService;
        this.canEdit = false;
        this.customContent = false;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__["RouteNames"];
        this.classStatuses = _src_app_pages_teacher_recordings_recording_status__WEBPACK_IMPORTED_MODULE_2__["RecordingStatus"];
        this.emptyField = "n/a";
        this.poseImg = "assets/img/class1.png";
        this.validStatus = false;
        this.classLength = "n/a";
        this.hideClassLength = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.audioSrc = "";
    }
    ClassCardComponent.prototype.ngOnInit = function () {
        if (this.singleClass && this.singleClass.file_item) {
            if (this.singleClass.file_item.charAt(0) === "/") {
                this.audioSrc = this.apiUrl + this.singleClass.file_item;
            }
            else {
                this.audioSrc = this.singleClass.file_item;
            }
        }
        if (this.singleClass && this.singleClass.thumbnail) {
            this.poseImg = this.singleClass.thumbnail;
        }
        // if (this.singleClass && this.singleClass.poses.length > 0 && this.singleClass.poses[0].pose.image) {
        //     this.poseImg = this.singleClass.poses[0].pose.image;
        // }
        this.classLength = this.singleClass.length;
        if (this.singleClass.length == null || this.singleClass.length <= 0) {
            this.classLength = 0;
            this.hideClassLength = true;
        }
        this.validStatus =
            (this.singleClass.status === _src_app_pages_teacher_recordings_recording_status__WEBPACK_IMPORTED_MODULE_2__["RecordingStatus"].PUBLISHED ||
                this.singleClass.status === _src_app_pages_teacher_recordings_recording_status__WEBPACK_IMPORTED_MODULE_2__["RecordingStatus"].PROCESSING) &&
                !!this.singleClass.file_item;
    };
    ClassCardComponent.prototype.ngOnDestroy = function () { };
    ClassCardComponent.prototype.ngAfterViewInit = function () { };
    ClassCardComponent.prototype.getDuration = function () {
        // this.classLength = this.recordingUtilsService.getRecordingDuration(this.singleClass, this.audio.nativeElement);
    };
    ClassCardComponent.prototype.deleteRecording = function () {
        if (this.singleClass && this.singleClass.id) {
            this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteRecordingRequestAction"](this.singleClass.id));
        }
    };
    ClassCardComponent.prototype.onClassEdit = function () {
        this.router.navigate([
            "/",
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__["RouteNames"].teacher,
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__["RouteNames"].recordings,
            this.singleClass.slug,
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__["RouteNames"].editRecording,
        ]);
    };
    ClassCardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _src_app_services_recording_recording_utils_service__WEBPACK_IMPORTED_MODULE_7__["RecordingUtilsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("audio", { static: false }),
        __metadata("design:type", Object)
    ], ClassCardComponent.prototype, "audio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassCardComponent.prototype, "singleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassCardComponent.prototype, "teacher", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassCardComponent.prototype, "canEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassCardComponent.prototype, "customContent", void 0);
    ClassCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-class-card",
            template: __webpack_require__(/*! raw-loader!./class-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/class-card/class-card.component.html"),
            styles: [__webpack_require__(/*! ./class-card.component.scss */ "./src/app/components/class-card/class-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _src_app_services_recording_recording_utils_service__WEBPACK_IMPORTED_MODULE_7__["RecordingUtilsService"]])
    ], ClassCardComponent);
    return ClassCardComponent;
}());



/***/ }),

/***/ "./src/app/components/class-card/class-card.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/class-card/class-card.module.ts ***!
  \************************************************************/
/*! exports provided: ClassCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassCardModule", function() { return ClassCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _class_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-card.component */ "./src/app/components/class-card/class-card.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../round-photo/round-photo.module */ "./src/app/components/round-photo/round-photo.module.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClassCardModule = /** @class */ (function () {
    function ClassCardModule() {
    }
    ClassCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_4__["RoundPhotoModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_class_card_component__WEBPACK_IMPORTED_MODULE_2__["ClassCardComponent"]],
            exports: [_class_card_component__WEBPACK_IMPORTED_MODULE_2__["ClassCardComponent"]]
        })
    ], ClassCardModule);
    return ClassCardModule;
}());



/***/ }),

/***/ "./src/app/components/round-photo/round-photo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.round-img-container {\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid #ededeb;\n  border-radius: 50%;\n  background-color: #fff; }\n.round-img-container img {\n    width: 100%;\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3JvdW5kLXBob3RvL3JvdW5kLXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDRFo7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCRFVTO0VDVFQsa0JBQWtCO0VBQ2xCLHNCREhTLEVBQUE7QUNMYjtJQVdRLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdW5kLXBob3RvL3JvdW5kLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MnO1xuXG4ucm91bmQtaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIDcwKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgd2hpdGUpO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/round-photo/round-photo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoundPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPhotoComponent", function() { return RoundPhotoComponent; });
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

var RoundPhotoComponent = /** @class */ (function () {
    function RoundPhotoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RoundPhotoComponent.prototype, "image", void 0);
    RoundPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-round-photo',
            template: __webpack_require__(/*! raw-loader!./round-photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/round-photo/round-photo.component.html"),
            styles: [__webpack_require__(/*! ./round-photo.component.scss */ "./src/app/components/round-photo/round-photo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoundPhotoComponent);
    return RoundPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/round-photo/round-photo.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/round-photo/round-photo.module.ts ***!
  \**************************************************************/
/*! exports provided: RoundPhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPhotoModule", function() { return RoundPhotoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _round_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./round-photo.component */ "./src/app/components/round-photo/round-photo.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/components/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RoundPhotoModule = /** @class */ (function () {
    function RoundPhotoModule() {
    }
    RoundPhotoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__["IconModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_round_photo_component__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoComponent"]],
            exports: [_round_photo_component__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoComponent"]]
        })
    ], RoundPhotoModule);
    return RoundPhotoModule;
}());



/***/ }),

/***/ "./src/app/services/recording/recording-utils.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/recording/recording-utils.service.ts ***!
  \***************************************************************/
/*! exports provided: RecordingUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingUtilsService", function() { return RecordingUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/services/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RecordingUtilsService = /** @class */ (function (_super) {
    __extends(RecordingUtilsService, _super);
    function RecordingUtilsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordingUtilsService.prototype.getRecordingDuration = function (recording, audio) {
        var start = 0;
        var end = audio.duration;
        if (recording.start_timestamp) {
            start = +recording.start_timestamp;
        }
        if (recording.end_timestamp) {
            end = +recording.end_timestamp;
        }
        return end - start;
    };
    RecordingUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RecordingUtilsService);
    return RecordingUtilsService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-student-student-module~pages-teacher-teacher-module~pages-teachers-teachers-module.e2a31fb7e863fcac6183.js.map