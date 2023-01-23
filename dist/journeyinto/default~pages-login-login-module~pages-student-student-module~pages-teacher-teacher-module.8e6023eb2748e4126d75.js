(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-student-student-module~pages-teacher-teacher-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content\n    (swipeleft)=\"swipe($event.type, stepper)\" \n    (swiperight)=\"swipe($event.type, stepper)\">\n    <mat-horizontal-stepper \n        linear \n        #stepper\n        >\n      <mat-step *ngFor=\"let step of steps\">\n        <div class=\"step-content\">\n          <div class=\"step-text\">\n            <h1 *ngIf=\"step.title\">{{step.title}}</h1>\n            <div class=\"step-body\" *ngIf=\"step.body\" \n              [innerHTML]=\"step.body | safeHTML\"></div>\n          </div>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n</div>\n<div mat-dialog-actions>\n    <button\n        mat-ripple \n        class=\"btn\"\n        (click)=\"stepper?.selectedIndex === stepper?._steps?.length - 1 ? \n          closeModal() : \n          goForward(stepper)\">\n        {{ stepper?.selectedIndex === stepper?._steps?.length - 1 ? 'Done' : 'Next' }}\n    </button>\n    <a mat-ripple \n      class=\"skip-btn text-display-1 pointer\"\n      (click)=\"closeModal()\">Skip</a>\n</div>\n  "

/***/ }),

/***/ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n::ng-deep .cdk-overlay-pane.takethetour-modal {\n  max-width: 500px !important; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-dialog-actions {\n    margin-bottom: 0;\n    padding: 0;\n    min-height: initial;\n    justify-content: center; }\n@media all and (max-height: 450px), (max-width: 420px) {\n      ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-dialog-actions button {\n        padding: 10px 20px; } }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-dialog-actions .skip-btn {\n      display: inline-block;\n      padding: 20px 20px 0 20px; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-dialog-content {\n    margin: 0;\n    padding: 0;\n    max-height: initial; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-stepper-horizontal {\n    position: relative; }\n@media all and (max-width: 420px) {\n    ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-dialog-container {\n      height: calc(100vh - 50px);\n      padding-bottom: 40px;\n      border-radius: 0; } }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-content-container {\n    padding: 0; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    justify-content: center;\n    background-color: #fff; }\n@media all and (max-height: 450px), (max-width: 420px) {\n      ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container {\n        height: 40px; } }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-horizontal-stepper-header {\n      height: auto;\n      padding: 0;\n      pointer-events: none; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-step-label,\n    ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-stepper-horizontal-line,\n    ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-step-icon-content {\n      display: none; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-step-icon {\n      margin-right: 0;\n      margin: 0 2px;\n      width: 10px;\n      height: 10px;\n      background-color: #fff;\n      border: solid 1px #322B23; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-header-container .mat-step-icon-selected {\n      background-color: #322B23; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content {\n    margin-bottom: 60px;\n    padding: 20px;\n    padding-bottom: 0;\n    text-align: center; }\n@media all and (max-height: 450px) {\n      ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content {\n        margin-bottom: 40px;\n        padding-top: 0; } }\n@media all and (max-width: 420px) {\n      ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content {\n        margin-bottom: 40px;\n        padding-left: 0;\n        padding-right: 0; } }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-text {\n      height: 200px;\n      overflow-y: auto;\n      display: flex;\n      justify-content: center;\n      align-items: flex-start; }\n@media all and (max-width: 420px) {\n        ::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-text {\n          height: calc(100vh - 250px); } }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-text a {\n        text-decoration: underline; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-text .learn-more-link {\n        margin-top: 40px; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-text p:last-child {\n        margin-bottom: 0; }\n::ng-deep .cdk-overlay-pane.takethetour-modal .mat-horizontal-stepper-content .step-content .step-body img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy90YWtldGhldG91ci1kaWFsb2cvdGFrZXRoZXRvdXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDSVo7RUFDSSwyQkFBMEIsRUFBQTtBQUQ5QjtJQUlRLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBRW5CLHVCQUF1QixFQUFBO0FBR25CO01BWFo7UUFZZ0Isa0JBQWtCLEVBQUEsRUFFekI7QUFkVDtNQWlCWSxxQkFBcUI7TUFDckIseUJBQXlCLEVBQUE7QUFsQnJDO0lBdUJRLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7QUF6QjNCO0lBNkJRLGtCQUFrQixFQUFBO0FBSWxCO0lBakNSO01Ba0NZLDBCQUEwQjtNQUMxQixvQkFBb0I7TUFDcEIsZ0JBQWdCLEVBQUEsRUFFdkI7QUF0Q0w7SUF5Q1EsVUFBVSxFQUFBO0FBekNsQjtJQThDUSxrQkFBa0I7SUFDbEIsU0FBUztJQUVULFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBRXZCLHNCRHJESyxFQUFBO0FDdURMO01BdkRSO1FBd0RZLFlBQ0osRUFBQSxFQTBCSDtBQW5GTDtNQTREWSxZQUFZO01BQ1osVUFBVTtNQUNWLG9CQUFvQixFQUFBO0FBOURoQzs7O01Bb0VZLGFBQWEsRUFBQTtBQXBFekI7TUF3RVksZUFBZTtNQUNmLGFBQWE7TUFDYixXQUFXO01BQ1gsWUFBWTtNQUNaLHNCRDVFQztNQzZFRCx5QkQxRUksRUFBQTtBQ0hoQjtNQWlGWSx5QkQ5RUksRUFBQTtBQ0hoQjtJQXVGWSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUVqQixrQkFBa0IsRUFBQTtBQUVsQjtNQTdGWjtRQThGZ0IsbUJBQW1CO1FBQ25CLGNBQWMsRUFBQSxFQThDckI7QUEzQ0c7TUFsR1o7UUFtR2dCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCLEVBQUEsRUF3Q3ZCO0FBN0lUO01BeUdnQixhQUFhO01BQ2IsZ0JBQWdCO01BRWhCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsdUJBQXVCLEVBQUE7QUFNdkI7UUFwSGhCO1VBcUhvQiwyQkFBMkIsRUFBQSxFQWNsQztBQW5JYjtRQXlIb0IsMEJBQTBCLEVBQUE7QUF6SDlDO1FBNkhvQixnQkFBZ0IsRUFBQTtBQTdIcEM7UUFpSW9CLGdCQUFnQixFQUFBO0FBaklwQztNQXVJb0IsY0FBYztNQUNkLGVBQWU7TUFDZixZQUFZO01BQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy90YWtldGhldG91ci1kaWFsb2cvdGFrZXRoZXRvdXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MnO1xuXG4kc21hbGw6IDQyMHB4O1xuJG1lZGl1bTogNjgwcHg7XG5cbiRzbWFsbC1oZWlnaHQ6IDQ1MHB4O1xuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUudGFrZXRoZXRvdXItbW9kYWwge1xuICAgIG1heC13aWR0aDogNTAwcHghaW1wb3J0YW50O1xuICAgIFxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LWhlaWdodDogJHNtYWxsLWhlaWdodCksIChtYXgtd2lkdGg6ICRzbWFsbCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lwLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWF4LWhlaWdodDogaW5pdGlhbDtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAvLyBTVEVQU1xuICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgd2hpdGUpO1xuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiAkc21hbGwtaGVpZ2h0KSwgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHhcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgICAgIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUsXG4gICAgICAgIC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIHdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWNvbnRlbnQgIHtcbiAgICAgICAgLnN0ZXAtY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiAkc21hbGwtaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0ZXAtdGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiAkc21hbGwtaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHggLSA5MHB4IC0gODBweCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxlYXJuLW1vcmUtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGVwLWJvZHkge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbi8vICAgICBwYWRkaW5nOiAyMHB4O1xuLy8gICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICAgIC5zdGVwLWNvbnRlbnQge1xuLy8gICAgICAgICAuc3RlcC10ZXh0IHtcbi8vICAgICAgICAgICAgIGEge1xuLy8gICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAubGVhcm4tbW9yZS1saW5rIHtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubWF0LWRpYWxvZy1jb250ZW50IHtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG5cbi8vICAgICB3aWR0aDogNTAwcHg7XG5cbi8vICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDA7XG4vLyAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4vLyB9XG5cbi8vIC5zdGVwLWNvbnRlbnQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcbi8vICAgICBwYWRkaW5nOiAwIDQwcHg7XG5cbi8vICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAkc21hbGwpIHtcbi8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICB9XG5cbi8vICAgICBpbWcge1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuLy8gICAgIH1cblxuLy8gICAgIGltZyxcbi8vICAgICAuc3RlcC10ZXh0IHtcbi8vICAgICAgICAgd2lkdGg6IDgwJTtcbi8vICAgICAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgIH1cblxuLy8gICAgIC5zdGVwLXRleHQge1xuLy8gICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgYXtcbi8vICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCBlcnJvcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8qKioqKioqKioqKioqKioqKioqKioqKiogXG4vLyAqKiogU1RFUFBFUiBPVkVSUklERVMgKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyAubWF0LWRpYWxvZy1jb250ZW50IDo6bmctZGVlcCB7XG4vLyAgICAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcbi8vICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuLy8gICAgICAgICBvcmRlcjogMjtcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5tYXQtc3RlcC1oZWFkZXIubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuLy8gICAgICAgICBwYWRkaW5nOiAwO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLFxuLy8gICAgIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbi8vICAgICAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCB3aGl0ZSk7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbi8vICAgICAgICAgd2lkdGg6IDEwcHg7XG4vLyAgICAgICAgIGhlaWdodDogMTBweDtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSxcbi8vICAgICAubWF0LXN0ZXAtbGFiZWwsXG4vLyAgICAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaGVhZGVyLXJpcHBsZSB7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwgXG4vLyAgICAgLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLCBcbi8vICAgICAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbi8vICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbi8vICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgICAgIC5tYXQtc3RlcC1pY29uIHtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuLy8gICAgICAgICBwYWRkaW5nOiAwIDAgMjRweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC8qIE1vYmlsZSBTdHlsaW5nICAqL1xuLy8gOjpuZy1kZWVwIC50YWtldGhldG91ci1tb2RhbCB7XG4vLyAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4vLyAgICAgICAgIG1heC13aWR0aDogMTAwdnchaW1wb3J0YW50O1xuLy8gICAgIH1cblxuLy8gICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4vLyAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuLy8gICAgICAgICAgICAgdGFrZXRoZXRvdXItZGlhbG9nIHtcbi8vICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogODBweDsgLy9iZWNhdXNlIHBob25lIHNjcmVlbnMgaGF2ZSB0aGF0IGV4dHJhIGJhciB0aGF0IG90aGVyd2lzZSBoaWRlcyB0aGUgdG9wXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4IC0gMTAwcHgpO1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgICAgICAgICAgICAgICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4vLyAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TakethetourDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakethetourDialogComponent", function() { return TakethetourDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TakethetourDialogComponent = /** @class */ (function () {
    function TakethetourDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.learnMoreLink = "<p class=\"text-display-6 learn-more-link\">\n      <a href=\"" + _src_app_route_names__WEBPACK_IMPORTED_MODULE_2__["jIWebsite"] + "\" target=\"_blank\">Learn more</a>\n    </p>";
        this.numberSteps = 5;
        this.steps = [
            {
                body: "<p class=\"text-display-2\">Journey Into is a bridge between live yoga classes and self practice.</p>\n      <img src=\"/assets/img/takethetour/step-1.png\">"
            },
            {
                body: "<p class=\"text-display-2\">Students; Receive your teacher\u2019s weekly audio and video classes to guide you in\n        your self practice.</p> \n        <img src=\"/assets/img/takethetour/step-2.png\">\n        <p class=\"text-display-3\">Practice with your teacher, whenever you want, wherever you are.</p>\n        " + this.learnMoreLink
            },
            {
                body: "<p class=\"text-display-2\">Teachers; Record and share weekly video and audio classes with your students.</p>\n      <img src=\"/assets/img/takethetour/step-3.png\">\n        <p class=\"text-display-3\">Grow your business, strengthen your community and create an extra revenue stream.</p>\n        " + this.learnMoreLink
            },
            {
                body: "<p class=\"text-display-2\">Our posture glossary is a resource for teachers and students. Teachers can add \n        the relevant poses to their class to support their students\u2019 practice.</p>\n        <img src=\"/assets/img/takethetour/step-4.png\">\n        " + this.learnMoreLink
            }
        ];
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    TakethetourDialogComponent.prototype.ngOnInit = function () { };
    TakethetourDialogComponent.prototype.goBack = function (stepper) {
        stepper.previous();
    };
    TakethetourDialogComponent.prototype.goForward = function (stepper) {
        stepper.next();
    };
    TakethetourDialogComponent.prototype.swipe = function (eType, stepper) {
        var isNotFirstStep = stepper.selectedIndex > 0;
        var isNotLastStep = stepper.selectedIndex !== stepper._steps.length - 1;
        if (eType === this.SWIPE_ACTION.LEFT && isNotLastStep) {
            stepper.next();
        }
        else if (eType === this.SWIPE_ACTION.RIGHT && isNotFirstStep) {
            stepper.previous();
        }
    };
    TakethetourDialogComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    TakethetourDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    TakethetourDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'takethetour-dialog',
            template: __webpack_require__(/*! raw-loader!./takethetour-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.html"),
            styles: [__webpack_require__(/*! ./takethetour-dialog.component.scss */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TakethetourDialogComponent);
    return TakethetourDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/modals/takethetour-dialog/takethetour-dialog.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TakethetourDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakethetourDialogModule", function() { return TakethetourDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _takethetour_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./takethetour-dialog.component */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TakethetourDialogModule = /** @class */ (function () {
    function TakethetourDialogModule() {
    }
    TakethetourDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_takethetour_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TakethetourDialogComponent"]],
            entryComponents: [_takethetour_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TakethetourDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            providers: [
                {
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
                },
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"],
                    useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"]
                }
            ]
        })
    ], TakethetourDialogModule);
    return TakethetourDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-student-student-module~pages-teacher-teacher-module.8e6023eb2748e4126d75.js.map