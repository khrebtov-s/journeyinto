(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-student-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/complete/complete.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/complete/complete.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-icon [icon]=\"icon\"\n    [width]=\"100\"\n    [height]=\"100\"></app-icon>\n  <h1 class=\"title-display-2\">{{ title }}</h1>\n  <p class=\"text-desc-container text-display-3\">{{ description }}\n    <a href=\"https://apps.apple.com/gb/app/journey-into/id1522643456\" target=\"_blank\" *ngIf=\"downloadBtn\">\n      <img src=\"/assets/img/app-store_logo.svg\" alt=\"\" width=\"135\" height=\"40\" /></a>\n  </p>\n  <p *ngIf=\"descriptionLine2\">{{descriptionLine2}}</p>\n  <button mat-ripple \n    class=\"btn\" \n    (click)=\"goToDashboard()\">\n    Begin your Journey Into...\n  </button>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p \n    class=\"title-display-3 text-center m-b-6\"\n    *ngIf=\"message\">{{ message }}</p>\n  <p class=\"text-center m-b-6\"\n    *ngIf=\"subtext\">{{ subtext }}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\" class=\"confirm-buttons-container\">\n  <div class=\"width-100 m-t-7\" fxLayout=\"row\">\n    <button \n      *ngIf=\"confirmButtonText\"\n      mat-ripple class=\"btn btn-large btn-rounded bg-20 width-100 m-r-15\" (click)=\"onConfirmClick()\" tabindex=\"1\">\n      {{ confirmButtonText }}\n    </button>\n    <button \n      *ngIf=\"cancelButtonText\"\n      mat-ripple class=\"btn btn-large btn-rounded bg-20 width-100\" mat-dialog-close tabindex=\"-1\">\n      {{ cancelButtonText }}\n    </button>\n  </div>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment-card/payment-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment-card/payment-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article \n    *ngIf=\"card\"\n    class=\"card\"\n    [ngClass]=\"{\n        'is-active': isDefault\n    }\">\n    <div class=\"content-wrapper\">\n        <div class=\"content\">\n            <h1 class=\"text-display-2\">{{card.name}} - {{ card.brand }}</h1>\n            <p class=\"text-display-6\">Ending ****{{ card.last4 }}</p>\n        </div>\n        <div class=\"cta\"\n            [ngClass]=\"{\n                'has-content': customCtaContent\n            }\"\n            #ref>\n            <ng-content></ng-content>\n        </div>\n    </div>\n    <p class=\"active-message text-display-4\" *ngIf=\"isDefault\">This is your active payment card</p>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/account/account.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/account/account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"user && !spinner.isShowing.value\">\n  <app-message [message]=\"message\"></app-message>\n\n  <!-- subscriptions -->\n  <section *ngIf=\"creator\">\n    <h2 class=\"text-display-2\">\n      {{ isUserSubscribed ? \"Your subscriptions\" : \"Your teacher\" }}\n    </h2>\n\n    <app-teacher-card\n      *ngIf=\"isUserSubscribed; else defaultTeacher\"\n      [teacher]=\"creator\"\n    >\n      <p extraDetails>\n        {{ subscription.cost | currency: currency.toUpperCase() }} per\n        {{ subscription.frequency }}\n        <br />\n        {{\n          subscription.status === subscriptionStatuses.canceled\n            ? \"CANCELED. Subscription ends\"\n            : \"Next Payment\"\n        }}: {{ subscription.end_period | date: \"mediumDate\" }}\n      </p>\n\n      <button\n        cta\n        *ngIf=\"subscription.status !== subscriptionStatuses.canceled\"\n        class=\"btn btn-small btn-bordered\"\n        (click)=\"confirmUnsubscribeTeacher(creator)\"\n      >\n        Cancel Subscription\n      </button>\n    </app-teacher-card>\n\n    <ng-template #defaultTeacher>\n      <app-teacher-card [teacher]=\"creator\"></app-teacher-card>\n    </ng-template>\n  </section>\n\n  <!-- Contact details form -->\n  <section>\n    <h1 class=\"text-display-2\">Contact details</h1>\n    <hr />\n    <form [formGroup]=\"contactDetailsForm\">\n      <ng-container *ngIf=\"contactDetailsForm.get('email'); let email\">\n        <app-ji-input\n          [parentForm]=\"contactDetailsForm\"\n          [type]=\"'email'\"\n          [input]=\"'email'\"\n          [title]=\"'Email'\"\n          [errors]=\"email.errors\"\n          [hasError]=\"email.invalid && (email.dirty || email.touched)\"\n        ></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"contactDetailsForm.get('telephone'); let telephone\">\n        <app-ji-input\n          [parentForm]=\"contactDetailsForm\"\n          [input]=\"'telephone'\"\n          [title]=\"'Telephone'\"\n        ></app-ji-input>\n      </ng-container>\n      <p [ngStyle]=\"{color: status === requestStatus.failure ? 'red' : 'green'}\" *ngIf=\"status === requestStatus.failure\n      || status === requestStatus.success\">{{status}}</p>\n      <button\n        mat-ripple\n        type=\"submit\"\n        class=\"btn\"\n        [disabled]=\"\n          contactDetailsForm.invalid ||\n          !isContactDetailsFormEdited\n        \"\n        (click)=\"saveContactDetails()\"\n      >\n        Save changes\n      </button>\n    </form>\n  </section>\n\n  <!-- Password form -->\n  <section>\n    <h1 class=\"text-display-2\">Password</h1>\n    <hr />\n    <form [formGroup]=\"passwordForm\">\n      <app-password-match-input\n        formControlName=\"password\"\n        (passwordFormValid)=\"enableSaveButton($event)\"\n      ></app-password-match-input>\n      <button\n        mat-ripple\n        type=\"submit\"\n        class=\"btn\"\n        [disabled]=\"pwBtnDisabledState\"\n        (click)=\"savePassword()\"\n      >\n        Save changes\n      </button>\n    </form>\n  </section>\n\n  <section>\n    <h1 class=\"text-display-2\">Saved payment methods</h1>\n    <hr />\n\n    <p *ngIf=\"cards.length === 0 && !stripeFormShown\" class=\"text-display-4\">\n      You don't have any saved cards.\n    </p>\n\n    <ul *ngIf=\"cards.length && !stripeFormShown\" class=\"payment-cards\">\n      <li *ngFor=\"let card of cards\">\n        <app-payment-card\n          [card]=\"card\"\n          [isDefault]=\"card.is_default\"\n          [customCtaContent]=\"!card.is_default\"\n        >\n          <button\n            *ngIf=\"!card.is_expired && !card.is_default\"\n            class=\"btn btn-bordered btn-small make-default-btn\"\n            (click)=\"makeDefault(card.id)\"\n          >\n            Make default\n          </button>\n          <button\n            *ngIf=\"!card.is_default\"\n            class=\"btn btn-bordered btn-small\"\n            (click)=\"removeCard(card.id)\"\n          >\n            Remove\n          </button>\n        </app-payment-card>\n      </li>\n    </ul>\n\n    <app-card-button\n      (stripeFormShown)=\"onStripeFormShown($event)\"\n    ></app-card-button>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/dashboard/dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/dashboard/dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <h1 class=\"title-display-1 main-title\">Welcome {{ user?.first_name }}</h1>\n  <section \n    *ngIf=\"!isSubscribedUser && creator?.classes.length\"\n    class=\"subscribe-cta\">\n    <h2 class=\"text-display-2\">Why subscribe?</h2>\n    <hr>\n    <p>Your teacher is creating new content every week so you can practice anywhere, any time with the support of their familiar phrasing, sequences and tone.</p>\n    <button mat-ripple \n      type=\"button\"\n      [routerLink]=\"['/', routeNames.student, routeNames.subscription ]\" \n      class=\"btn\">\n      Subscribe to {{ creator?.first_name }} {{ creator?.last_name }}\n    </button>\n  </section>\n  \n  <section>\n    <!-- USER CLASSES -->\n    <ng-container *ngIf=\"userClasses.length\">\n      <ul class=\"user-classes\">\n        <li *ngFor=\"let userClass of userClasses | slice:0:2\">\n          <app-class-card \n            [singleClass]=\"userClass\"\n            [teacher]=\"creator\"></app-class-card>\n        </li>\n      </ul>\n    </ng-container>\n    \n    <!-- SAMPLE CLASSES -->\n    <ng-container *ngIf=\"!isSubscribedUser\">\n      <h2 class=\"text-display-2\">Short classes</h2>\n      <ng-container *ngIf=\"sampleClasses.length; else emptySampleClasses\">\n        <ul>\n          <li *ngFor=\"let sampleClass of sampleClasses | slice:0:2\">\n            <app-class-card \n              [singleClass]=\"sampleClass\"\n              [teacher]=\"creator\"></app-class-card>\n          </li>\n        </ul>\n      </ng-container>\n      <ng-template #emptySampleClasses>\n        Your teacher doesn't have any short classes yet.\n      </ng-template>\n    </ng-container>\n    \n    <a *ngIf=\"userClasses.length\"\n      class=\"btn view-all-btn\"\n      [routerLink]=\"['/', routeNames.student, routeNames.myPractice]\">View all classes</a>\n  </section>\n\n  <!-- bookings -->\n  <!-- <div class=\"text-display-2 m-t-40\">Your bookings</div>\n  <div *ngIf=\"bookings.length; else elseNoBooking\">\n    <div class=\"m-t-16 card p-t-10 p-r-10 p-l-10 p-b-10\" *ngFor=\"let booking of bookings\">\n      <div class=\"m-t-16\" fxFlex=\"10\">\n        <img class=\"bot-nav-img\" src=\"assets/img/calendar.svg\" />\n      </div>\n      <div fxFlex=\"60\">\n        <div class=\"text-display-5\">{{ booking.title }}</div>\n        <div class=\"text-display-6 m-t-12\">{{ booking.date }}</div>\n      </div>\n      <div class=\"m-t-16\" fxFlex=\"30\" fxLayoutAlign=\"flex-end top\">\n        <button class=\"btn btn-bordered app-small-btn\">View</button>\n      </div>\n    </div>\n    <div class=\"m-t-18\">\n      <button mat-ripple type=\"button\" class=\"btn btn-large btn-rounded bg-20 width-100\">\n        View all bookings\n      </button>\n    </div>\n  </div>\n  <ng-template #elseNoBooking> else No Booking</ng-template>  -->\n  \n  <!-- Notifications -->\n  <!-- <div class=\"text-display-2 m-t-40\">Notifications</div>\n  <div *ngIf=\"notifications.length; else elseNoNotification\">\n    <div class=\"m-t-16 card p-t-10 p-r-10 p-l-10 p-b-10\" *ngFor=\"let notification of notifications\">\n      <div class=\"m-t-16\" fxFlex=\"10\">\n        <img class=\"bot-nav-img\" src=\"assets/img/new.svg\" />\n      </div>\n      <div fxFlex=\"60\">\n        <div class=\"text-display-5\">{{ notification.title }}</div>\n        <div class=\"text-display-6 m-t-12\">{{ notification.description }}</div>\n      </div>\n      <div class=\"m-t-16\" fxFlex=\"30\" fxLayoutAlign=\"flex-end top\">\n        <button class=\"btn btn-bordered app-small-btn\">{{ notification.action }}</button>\n      </div>\n    </div>\n  \n    <div class=\"m-t-12\">\n      <button\n        [routerLink]=\"['/', routeNames.notifications]\"\n        mat-ripple\n        type=\"button\"\n        class=\"btn btn-large btn-rounded bg-20 m-b-12 width-100\"\n      >\n        View all notifications\n      </button>\n    </div>\n  </div>\n  <ng-template #elseNoNotification>\n    <hr class=\"m-t-20\" />\n    <div class=\"text-display-3 m-t-12\">You don’t currently have any notifications.</div>\n    <div class=\"m-t-12\">\n      <div class=\"text-display-2 m-t-40\">Your private profile url is -</div>\n      <hr />\n      <input\n        class=\"text-display-6 m-t-12 width-100 border-none\"\n        type=\"text\"\n        value=\"https://journeyinto.com/teachers/madelaine-hart\"\n        #profileUrl\n      />\n      <button\n        mat-ripple\n        type=\"button\"\n        (click)=\"copyProfileUrl(profileUrl)\"\n        class=\"btn btn-large btn-rounded btn-bordered bg-white font-color-10 m-b-13 width-100 mat-ripple m-t-20\"\n      >\n        Copy url\n      </button>\n    </div>\n  </ng-template>\n  </div>  -->\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/student.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/student.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/student/subscription/subscription.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/student/subscription/subscription.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"creator\">\n  <ng-container *ngIf=\"!isSubscribed && !hasBoughtClass\">\n    <section>\n      <h1 class=\"text-display-5\">Subscribing to</h1>\n      <ng-container *ngIf=\"creator && creator.product\">\n        <app-teacher-card \n          [classBought]=\"classBought\"\n          [subscribeTo]=\"classBought ? '1 class for £5.00' : '1 ' + creator.product.frequency + ' recurring subscription for ' + (creator.product.cost | currency: creator.currency.toUpperCase())\"\n          [large]=\"true\"\n          [teacher]=\"creator\"></app-teacher-card>\n      </ng-container>\n      <ng-container *ngIf=\"creator && !creator.product\">\n        <app-teacher-card \n          [classBought]=\"classBought\"\n          [subscribeTo]=\"'1 recurring subscription'\"\n          [large]=\"true\"\n          [teacher]=\"creator\"></app-teacher-card>\n      </ng-container>\n    </section>\n\n    <section>\n      <h1 class=\"text-display-5\">Payment</h1>\n      <ul class=\"payment-cards\" \n        *ngIf=\"cards && cards.length >= 0\">\n        <li *ngFor=\"let card of cards\">\n          <app-payment-card \n            [card]=\"card\"\n            [customCtaContent]=\"true\">\n            <button class=\"btn btn-bordered btn-small\"\n              (click)=\"subscribeWithExistingCard(card)\">Use this card</button>\n          </app-payment-card>\n        </li>\n      </ul>\n      <app-card-button \n        *ngIf=\"slug\"\n        [slug]=\"slug\"\n        [recording]=\"classBought\"></app-card-button>\n    </section>\n  </ng-container>\n  <ng-container *ngIf=\"isSubscribed || hasBoughtClass\">\n    <app-complete *ngIf=\"hasBoughtClass\"\n      [title]=\"'Payment confirmed'\"\n      [description]=\"\n        'Your purchase was successful. You can access your class on the \\'My Practice\\' section of the app.'\n      \"\n      [doOnboarding]=\"false\"\n      [icon]=\"'check'\"\n      [isSubscription]=\"true\"\n    ></app-complete>\n    <app-complete *ngIf=\"isSubscribed\"\n      [title]=\"'You are subscribed!'\"\n      [description]=\"\n        'Now you can practice with your teacher any time, anywhere. To access your teacher’s content on IOS'\"\n      [descriptionLine2]=\"'To access your teacher’s content on Android or Web'\"\n      [downloadBtn]=\"true\"\n      [doOnboarding]=\"false\"\n      [icon]=\"'check'\"\n      [isSubscription]=\"true\"\n    ></app-complete>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/complete/complete.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/complete/complete.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center; }\n\napp-icon {\n  margin: 80px 0 30px; }\n\nh1 {\n  margin-bottom: 20px; }\n\n.text-desc-container {\n  margin: 0 auto 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYXBwLWljb24ge1xuICBtYXJnaW46IDgwcHggMCAzMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LWRlc2MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/complete/complete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/complete/complete.component.ts ***!
  \***********************************************************/
/*! exports provided: CompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteComponent", function() { return CompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../route-names */ "./src/app/route-names.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompleteComponent = /** @class */ (function () {
    function CompleteComponent(store, router) {
        this.store = store;
        this.router = router;
        this.downloadBtn = false;
        this.doOnboarding = true;
        this.isSubscription = false;
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (user) { return Boolean(user); }));
        this.user = null;
    }
    CompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.user$.subscribe(function (user) {
            _this.user = user;
        }));
    };
    CompleteComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    CompleteComponent.prototype.goToDashboard = function () {
        if (this.user) {
            if (!this.isSubscription) {
                var navigateData = { state: { openTakethetourModal: !!this.doOnboarding } };
                this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_1__["ViewStatuses"].STUDENT
                    ? this.router.navigate(['/', _route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].student], navigateData)
                    : this.router.navigate(['/', _route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher], navigateData);
            }
            else {
                this.user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_1__["ViewStatuses"].STUDENT
                    ? this.router.navigate(['/', _route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].student, _route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].myPractice])
                    : this.router.navigate(['/', _route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher]);
            }
        }
    };
    CompleteComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteComponent.prototype, "descriptionLine2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteComponent.prototype, "downloadBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteComponent.prototype, "doOnboarding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteComponent.prototype, "isSubscription", void 0);
    CompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complete',
            template: __webpack_require__(/*! raw-loader!./complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/complete/complete.component.html"),
            styles: [__webpack_require__(/*! ./complete.component.scss */ "./src/app/components/complete/complete.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CompleteComponent);
    return CompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/complete/complete.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/complete/complete.module.ts ***!
  \********************************************************/
/*! exports provided: CompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteModule", function() { return CompleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete.component */ "./src/app/components/complete/complete.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/components/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompleteModule = /** @class */ (function () {
    function CompleteModule() {
    }
    CompleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_5__["IconModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_complete_component__WEBPACK_IMPORTED_MODULE_4__["CompleteComponent"]],
            exports: [_complete_component__WEBPACK_IMPORTED_MODULE_4__["CompleteComponent"]]
        })
    ], CompleteModule);
    return CompleteModule;
}());



/***/ }),

/***/ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-dialog-container {\n  border-radius: 9px; }\n\n.mat-dialog-content {\n  text-align: center;\n  padding: 0;\n  margin: 0; }\n\n@media all and (max-width: 680px) {\n    .mat-dialog-content {\n      width: 100%;\n      margin: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUVUO0lBTEY7TUFNSSxXQUFXO01BQ1gsWUFBWSxFQUFBLEVBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWVkaXVtOiA2ODBweDtcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = 'Are you sure?';
        this.subtext = '';
        this.confirmButtonText = 'Ok';
        this.cancelButtonText = 'Cancel';
        if (data) {
            this.message = data.message || this.message;
            this.subtext = data.subtext || this.subtext;
            if (data.buttonText) {
                if (data.buttonText.ok === false || data.buttonText.ok) {
                    this.confirmButtonText = data.buttonText.ok;
                }
                if (data.buttonText.cancel === false || data.buttonText.cancel) {
                    this.cancelButtonText = data.buttonText.cancel;
                }
            }
        }
    }
    ConfirmationDialogComponent.prototype.onConfirmClick = function () {
        this.dialogRef.close(true);
    };
    ConfirmationDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirmation-dialog',
            template: __webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/payment-card/payment-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/payment-card/payment-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\narticle {\n  padding: 15px; }\narticle.is-active {\n    padding: 0; }\narticle.is-active .content-wrapper,\n    article.is-active .active-message {\n      padding: 15px; }\narticle .content-wrapper {\n    display: flex; }\n@media all and (max-width: 425px) {\n      article .content-wrapper {\n        flex-direction: column; } }\n.content {\n  flex: 1; }\np {\n  margin-bottom: 0; }\n.active-message {\n  background-color: #cfc2b9; }\n.cta {\n  width: 150px; }\n@media all and (max-width: 425px) {\n    .cta {\n      width: 100%; }\n      .cta.has-content {\n        margin-top: 20px; } }\n.cta ::ng-deep .make-default-btn {\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQtY2FyZC9wYXltZW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esc0VBQVk7QUNDWjtFQUNJLGFBQWEsRUFBQTtBQURqQjtJQUlRLFVBQVUsRUFBQTtBQUpsQjs7TUFRWSxhQUFhLEVBQUE7QUFSekI7SUFlUSxhQUFhLEVBQUE7QUFFYjtNQWpCUjtRQWtCWSxzQkFBc0IsRUFBQSxFQUU3QjtBQUdMO0VBQ0ksT0FBTyxFQUFBO0FBR1g7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLHlCRHRCUyxFQUFBO0FDeUJiO0VBQ0ksWUFBWSxFQUFBO0FBRVo7SUFISjtNQUlRLFdBQVcsRUFBQTtNQUpuQjtRQU9ZLGdCQUFnQixFQUFBLEVBQ25CO0FBUlQ7SUFZUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1jYXJkL3BheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdGhlIGNvbW1vbiBzdHlsZXMgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwuIFdlIGluY2x1ZGUgdGhpcyBoZXJlIHNvIHRoYXQgeW91IG9ubHlcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cbi8vICoqQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhKipcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcblxuLy8gQXBwIHBhbGV0dGVcbiRwYWxldHRlOiAoXG4gIHdoaXRlOiAjZmZmLFxuICBlcnJvcjogI2Y0NDMzNixcbiAgY2hhcmNvYWw6ICMzMjJCMjMsXG4gIGJsYWNrOiAjMzIyQjIzLFxuICBzZW1pVHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gIDEwOiAjMTAwZTBiLFxuICAyMDogIzMyMmIyNSxcbiAgMzA6ICNjZmMyYjksXG4gIDQwOiAjYWM5YThjLFxuICA1MDogIzhlNDkxZCxcbiAgNjA6ICNlZGUzZDQsXG4gIDcwOiAjZWRlZGViLFxuICA4MDogI2Y0ZWVlNSxcbiAgOTA6ICNmZmZjZmEsXG4gIDEwMDogI2U4ZThlOCxcbiAgMTEwOiAjYTdhN2E3LFxuICAxMjA6ICM3ODc4NzgsXG4gIDEzMDogIzcxMTYwOSxcbiAgMTQwOiAjMDA5ZTc5LFxuICAxNTA6ICMyZjJmMmZcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9jb21tb24vc3R5bGVzLmNvbW1vbi5zY3NzJztcblxuJHNtYWxsLXdpZHRoOiA0MjVweDtcblxuYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAuY29udGVudC13cmFwcGVyLFxuICAgICAgICAuYWN0aXZlLW1lc3NhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtd2lkdGgpIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4OiAxO1xufVxuXG5wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWN0aXZlLW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIDMwKTtcbn1cblxuLmN0YSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsLXdpZHRoKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuaGFzLWNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWFrZS1kZWZhdWx0LWJ0biB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/payment-card/payment-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/payment-card/payment-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCardComponent", function() { return PaymentCardComponent; });
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

var PaymentCardComponent = /** @class */ (function () {
    function PaymentCardComponent() {
        this.isDefault = false;
        this.customCtaContent = false;
    }
    PaymentCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaymentCardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaymentCardComponent.prototype, "isDefault", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaymentCardComponent.prototype, "customCtaContent", void 0);
    PaymentCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-card',
            template: __webpack_require__(/*! raw-loader!./payment-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment-card/payment-card.component.html"),
            styles: [__webpack_require__(/*! ./payment-card.component.scss */ "./src/app/components/payment-card/payment-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentCardComponent);
    return PaymentCardComponent;
}());



/***/ }),

/***/ "./src/app/components/payment-card/payment-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/payment-card/payment-card.module.ts ***!
  \****************************************************************/
/*! exports provided: PaymentCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCardModule", function() { return PaymentCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _payment_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-card.component */ "./src/app/components/payment-card/payment-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentCardModule = /** @class */ (function () {
    function PaymentCardModule() {
    }
    PaymentCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_payment_card_component__WEBPACK_IMPORTED_MODULE_1__["PaymentCardComponent"]],
            declarations: [_payment_card_component__WEBPACK_IMPORTED_MODULE_1__["PaymentCardComponent"]],
            providers: [],
        })
    ], PaymentCardModule);
    return PaymentCardModule;
}());



/***/ }),

/***/ "./src/app/pages/student/account/account.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/student/account/account.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section hr {\n    margin: 20px 0 30px; }\n  .payment-cards li {\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N0dWRlbnQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFJUSxtQkFBbUIsRUFBQTtFQUkzQjtFQUVRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBcbiAgICBociB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDMwcHg7XG4gICAgfVxufVxuXG4ucGF5bWVudC1jYXJkcyB7XG4gICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/student/account/account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/student/account/account.component.ts ***!
  \************************************************************/
/*! exports provided: StudentAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAccountComponent", function() { return StudentAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/cards/cards.selectors */ "./src/app/store/modules/cards/cards.selectors.ts");
/* harmony import */ var _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/cards/cards.actions */ "./src/app/store/modules/cards/cards.actions.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/modals/confirmation-dialog/confirmation-dialog.component */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/store/modules/students/students.actions */ "./src/app/store/modules/students/students.actions.ts");
/* harmony import */ var _src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/store/modules/students/students.selectors */ "./src/app/store/modules/students/students.selectors.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_students_students_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/store/modules/students/students.types */ "./src/app/store/modules/students/students.types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var StudentAccountComponent = /** @class */ (function () {
    function StudentAccountComponent(store, activatedRoute, fb, dialog, spinner) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.dialog = dialog;
        this.spinner = spinner;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"];
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_16__["RouteNames"];
        // Forms
        this.contactDetailsForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            telephone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.isContactDetailsFormEdited = false;
        this.passwordForm = this.fb.group({
            password: "",
        });
        this.pwBtnDisabledState = true;
        // Store
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (user) { return Boolean(user); }));
        this.userStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (status) { return Boolean(status); }));
        this.message$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserMessages"]));
        this.cards$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_6__["selectCards"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (cards) { return Boolean(cards); })
        // map(cards => {
        //   return cards.filter(card => card.is_default);
        // })
        );
        this.cardStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_6__["selectCardsStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (status) { return Boolean(status) && status !== _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].pending; }));
        this.studentStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_15__["selectStudentsStatus"]));
        this.studentsSubscriptionStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_15__["selectStudentsSubscriptionStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
        this.user = null;
        this.subscriptionStatuses = _src_app_store_modules_students_students_types__WEBPACK_IMPORTED_MODULE_17__["SubscriptionStatus"];
        this.creator = null;
        this.cards = [];
        this.currency = '';
        this.status = null;
        this.slug = "";
        this.description = "";
        this.message = "";
        this.unsubscribing = false;
        this.stripeFormShown = false;
    }
    StudentAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        // showoverlay
        this.loadUserCardsList();
        this.subscriptions.push(this.contactDetailsForm.valueChanges.subscribe(function (formValues) {
            _this.isContactDetailsFormEdited = Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["checkEdited"])(formValues, _this.user);
        }), this.user$.subscribe(function (user) {
            _this.user = user;
            if (user.creators) {
                _this.creator = user.creators[0].creator;
                _this.isUserSubscribed = _this.creator.subscribed.length > 0;
                _this.subscription = _this.creator.subscribed[0];
                _this.currency = _this.creator.currency;
                _this.slug = _this.creator.slug;
                _this.description = _this.creator.description;
                if (_this.contactDetailsForm) {
                    _this.contactDetailsForm.controls.email.setValue(user.email);
                    _this.contactDetailsForm.controls.telephone.setValue(user.telephone);
                }
                _this.spinner.hide();
            }
        }), this.userStatus$.subscribe(function (status) {
            _this.status = status;
            if (_this.status !== _this.requestStatus.pending) {
                _this.spinner.hide();
            }
        }), this.message$.subscribe(function (message) {
            if (message) {
                _this.message = message.message || message;
                // console.log('GetCurrentUserRequestAction');
                _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["GetCurrentUserRequestAction"]());
                Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["resetForm"])(_this.passwordForm);
                window.scrollTo(0, 0);
            }
        }), this.studentStatus$.subscribe(function (status) {
            if (status && status !== _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].pending) {
                // console.log('hiding from account');
                // hideoverlay
            }
            if (_this.unsubscribing) {
                // console.log('unsubscribed!');
                _this.unsubscribing = false;
            }
        }), this.studentsSubscriptionStatus$.subscribe(function (subscriptionStatus) {
            _this.isUserSubscribed = !!subscriptionStatus;
            _this.spinner.hide();
        }), this.cardStatus$.subscribe(function () {
            // hideoverlay
        }), this.cards$.subscribe(function (cards) {
            _this.cards = cards;
        }));
    };
    StudentAccountComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    StudentAccountComponent.prototype.loadUserCardsList = function () {
        this.store.dispatch(new _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_7__["GetUserCardsRequestAction"]());
    };
    StudentAccountComponent.prototype.saveContactDetails = function () {
        this.spinner.show();
        if (this.contactDetailsForm.valid) {
            var payload = {
                email: this.contactDetailsForm.get("email").value,
                telephone: this.contactDetailsForm.get("telephone").value,
            };
            this.updateUser(payload);
        }
    };
    StudentAccountComponent.prototype.savePassword = function () {
        if (this.passwordForm.valid) {
            var payload = {
                password: this.passwordForm.get("password").value,
            };
            this.updateUser(payload);
        }
    };
    StudentAccountComponent.prototype.updateUser = function (payload) {
        // showoverlay
        this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateCurrentUserRequestAction"](payload));
    };
    StudentAccountComponent.prototype.removeCard = function (cardId) {
        var _this = this;
        var dialogRef = this.dialog.open(_src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogComponent"], {
            panelClass: "journeyinto-modal",
            data: { message: "Are you sure you want to delete this card?" },
        });
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (result) { return Boolean(result); }))
            .subscribe(function () {
            // showoverlay
            _this.store.dispatch(new _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_7__["RemoveUserCardRequestAction"](cardId));
        });
    };
    StudentAccountComponent.prototype.makeDefault = function (cardId) {
        // showoverlay
        this.store.dispatch(new _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_7__["MakeUserCardDefaultRequestAction"](cardId));
    };
    StudentAccountComponent.prototype.confirmUnsubscribeTeacher = function (teacher) {
        var _this = this;
        var dialogRef = this.dialog.open(_src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogComponent"], {
            panelClass: "journeyinto-modal",
            data: {
                message: "Are you sure you want to unsubscribe from your teacher " + teacher.first_name + " " + teacher.last_name + "?",
                buttonText: {
                    ok: "YES",
                    cancel: "NO",
                },
            },
        });
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (result) { return Boolean(result); }))
            .subscribe(function () {
            _this.unsubscribing = true;
            // showoverlay
            _this.spinner.show();
            _this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_14__["UnsubscribeFromTeacherRequestAction"](teacher));
        });
    };
    StudentAccountComponent.prototype.enableSaveButton = function ($event) {
        this.pwBtnDisabledState = !$event;
    };
    StudentAccountComponent.prototype.onStripeFormShown = function ($event) {
        // console.log('stripe form shown: ', $event);
        this.stripeFormShown = $event;
    };
    StudentAccountComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerOverlayService"] }
    ]; };
    StudentAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-student-account-component",
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/student/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerOverlayService"]])
    ], StudentAccountComponent);
    return StudentAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/student/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-title {\n  margin-top: 50px; }\n\nsection {\n  margin-top: 40px; }\n\nsection.subscribe-cta p {\n  margin: 20px 0 30px; }\n\n.user-classes {\n  margin-bottom: 40px; }\n\n.view-all-btn {\n  margin-top: 30px; }\n\nul li {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N0dWRlbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbnNlY3Rpb24uc3Vic2NyaWJlLWN0YSB7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDMwcHg7XG4gICAgfVxufVxuXG4udXNlci1jbGFzc2VzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udmlldy1hbGwtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG51bCB7XG4gICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/student/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/student/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.selectors */ "./src/app/store/modules/recording/recording.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_components_modals_takethetour_dialog_modal_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/modal-utils */ "./src/app/components/modals/takethetour-dialog/modal-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var StudentDashboardComponent = /** @class */ (function () {
    function StudentDashboardComponent(store, router, dialog, spinner) {
        this.store = store;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"];
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (user) { return Boolean(user); }));
        this.recordings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_7__["selectRecordingEntities"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (recordings) { return Boolean(recordings); }));
        this.user = null;
        this.recordings = [];
        this.teacherClasses = [];
        this.userClasses = [];
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__["ViewStatuses"];
        this.emptyField = 'n/a';
        this.sampleClasses = [];
        this.creator = null;
        this.navigationData = {};
        this.gettingCorrectUser = false;
        var currentNav = this.router.getCurrentNavigation();
        this.navigationData = currentNav ? currentNav.extras.state : {};
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.navigate(['/', this.routeNames.student, this.routeNames.myPractice]);
        this.load();
        this.subscriptions.push(this.user$.subscribe(function (user) {
            _this.user = user;
            if (!_this.gettingCorrectUser && user.creators.length && !isNaN(user.creators[0])) {
                _this.gettingCorrectUser = true;
                _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetCurrentUserRequestAction"]());
            }
            else {
                _this.gettingCorrectUser = false;
                _this.spinner.hide();
                if (_this.user.creators.length && user.creators[0].creator) {
                    _this.creator = user.creators[0].creator;
                    var creatorClasses = _this.creator.classes ? _this.creator.classes : [];
                    _this.isSubscribedUser = _this.creator.subscribed.length > 0;
                    _this.sampleClasses = _this.creator.sample_classes;
                    if (!_this.isSubscribedUser) {
                        _this.teacherClasses = creatorClasses.filter(function (teacherClass) { return !teacherClass.is_bought; });
                        _this.userClasses = creatorClasses.filter(function (teacherClass) { return teacherClass.is_bought; });
                    }
                    else {
                        _this.userClasses = _this.creator.classes;
                    }
                }
            }
        }));
    };
    StudentDashboardComponent.prototype.load = function () {
        // console.log('GetCurrentUserRequestAction');
        // this.store.dispatch(new GetCurrentUserRequestAction());
    };
    StudentDashboardComponent.prototype.ngAfterViewInit = function () {
        this.checkOpenTakethetourModal();
    };
    StudentDashboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    StudentDashboardComponent.prototype.onClassView = function (recording) {
        this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].recordings, recording.creatorslug, recording.slug]);
    };
    StudentDashboardComponent.prototype.checkOpenTakethetourModal = function () {
        if (this.navigationData && this.navigationData.openTakethetourModal) {
            Object(_src_app_components_modals_takethetour_dialog_modal_utils__WEBPACK_IMPORTED_MODULE_11__["openTourModal"])(this.dialog);
        }
    };
    StudentDashboardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"] }
    ]; };
    StudentDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/student/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"]])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/student.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/student/student.component.ts ***!
  \****************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/student.component.html")
        })
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/pages/student/student.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.module.ts ***!
  \*************************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/takethetour-dialog.module */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.module.ts");
/* harmony import */ var _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/components/complete/complete.module */ "./src/app/components/complete/complete.module.ts");
/* harmony import */ var _src_app_pages_student_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/pages/student/dashboard/dashboard.component */ "./src/app/pages/student/dashboard/dashboard.component.ts");
/* harmony import */ var _src_app_pages_student_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/pages/student/account/account.component */ "./src/app/pages/student/account/account.component.ts");
/* harmony import */ var _src_app_pages_student_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/pages/student/subscription/subscription.component */ "./src/app/pages/student/subscription/subscription.component.ts");
/* harmony import */ var _src_app_pages_student_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/pages/student/student.component */ "./src/app/pages/student/student.component.ts");
/* harmony import */ var _src_app_components_add_card_button_add_card_button_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/add-card-button/add-card-button.module */ "./src/app/components/add-card-button/add-card-button.module.ts");
/* harmony import */ var _src_app_components_modals_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/components/modals/confirmation-dialog/confirmation-dialog.module */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.module.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/guards/private-route.guard */ "./src/app/guards/private-route.guard.ts");
/* harmony import */ var _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/app/components/icon/icon.module */ "./src/app/components/icon/icon.module.ts");
/* harmony import */ var _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @src/app/components/password-match-input/password-match-input.module */ "./src/app/components/password-match-input/password-match-input.module.ts");
/* harmony import */ var _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @src/app/components/message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/app/components/class-card/class-card.module */ "./src/app/components/class-card/class-card.module.ts");
/* harmony import */ var _src_app_components_teacher_card_teacher_card_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/app/components/teacher-card/teacher-card.module */ "./src/app/components/teacher-card/teacher-card.module.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
/* harmony import */ var _src_app_components_round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @src/app/components/round-photo/round-photo.module */ "./src/app/components/round-photo/round-photo.module.ts");
/* harmony import */ var _src_app_components_payment_card_payment_card_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @src/app/components/payment-card/payment-card.module */ "./src/app/components/payment-card/payment-card.module.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.module */ "./src/app/components/coming-soon/coming-soon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_9__["TakethetourDialogModule"],
                _src_app_components_add_card_button_add_card_button_module__WEBPACK_IMPORTED_MODULE_15__["AddCardButtonModule"],
                _src_app_components_modals_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_24__["JiFormsModule"],
                _src_app_components_teacher_card_teacher_card_module__WEBPACK_IMPORTED_MODULE_23__["TeacherCardModule"],
                _src_app_components_round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_25__["RoundPhotoModule"],
                _src_app_components_payment_card_payment_card_module__WEBPACK_IMPORTED_MODULE_26__["PaymentCardModule"],
                _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_27__["ComingSoonModule"],
                // MyPracticeModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _src_app_pages_student_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StudentDashboardComponent"],
                        data: {
                            title: 'Dashboard',
                            goBack: false
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateRouteGuard"]]
                    },
                    {
                        path: _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__["RouteNames"].account,
                        component: _src_app_pages_student_account_account_component__WEBPACK_IMPORTED_MODULE_12__["StudentAccountComponent"],
                        data: {
                            title: 'My account',
                            cancelUrl: _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__["RouteNames"].login,
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateRouteGuard"]]
                    },
                    {
                        path: _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__["RouteNames"].myPractice,
                        loadChildren: function () { return __webpack_require__.e(/*! import() | my-practice-my-practice-module */ "my-practice-my-practice-module").then(__webpack_require__.bind(null, /*! ./my-practice/my-practice.module */ "./src/app/pages/student/my-practice/my-practice.module.ts")).then(function (mod) { return mod.MyPracticeModule; }); },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateRouteGuard"]]
                    },
                    {
                        path: _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__["RouteNames"].calendar,
                        loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "./src/app/pages/student/calendar/calendar.module.ts")).then(function (mod) { return mod.CalendarModule; }); },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateRouteGuard"]]
                    },
                    {
                        path: _src_app_route_names__WEBPACK_IMPORTED_MODULE_17__["RouteNames"].subscription,
                        // component: ComingSoonComponent,
                        component: _src_app_pages_student_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__["StudentSubscriptionComponent"],
                        data: {
                            title: 'Confirm subscription',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateRouteGuard"]]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _src_app_components_complete_complete_module__WEBPACK_IMPORTED_MODULE_10__["CompleteModule"],
                _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_19__["IconModule"],
                _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_20__["PasswordMatchInputModule"],
                _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_21__["MessageModule"],
                _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_22__["ClassCardModule"],
                _src_app_components_teacher_card_teacher_card_module__WEBPACK_IMPORTED_MODULE_23__["TeacherCardModule"]
            ],
            declarations: [
                _src_app_pages_student_student_component__WEBPACK_IMPORTED_MODULE_14__["StudentComponent"],
                _src_app_pages_student_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StudentDashboardComponent"],
                _src_app_pages_student_account_account_component__WEBPACK_IMPORTED_MODULE_12__["StudentAccountComponent"],
                _src_app_pages_student_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__["StudentSubscriptionComponent"],
            ],
            providers: [],
            bootstrap: []
        })
    ], StudentModule);
    return StudentModule;
}());



/***/ }),

/***/ "./src/app/pages/student/subscription/subscription.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/student/subscription/subscription.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section:first-child {\n    margin-top: 24px; }\n  section h1 {\n    margin-bottom: 20px; }\n  .payment-cards li {\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N0dWRlbnQvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBSVEsZ0JBQWdCLEVBQUE7RUFKeEI7SUFRUSxtQkFBbUIsRUFBQTtFQUkzQjtFQUVRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5wYXltZW50LWNhcmRzIHtcbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/student/subscription/subscription.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/student/subscription/subscription.component.ts ***!
  \**********************************************************************/
/*! exports provided: StudentSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSubscriptionComponent", function() { return StudentSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/cards/cards.actions */ "./src/app/store/modules/cards/cards.actions.ts");
/* harmony import */ var _src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/cards/cards.selectors */ "./src/app/store/modules/cards/cards.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/services/spinner-overlay/spinner-overlay.service */ "./src/app/services/spinner-overlay/spinner-overlay.service.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/students/students.actions */ "./src/app/store/modules/students/students.actions.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StudentSubscriptionComponent = /** @class */ (function () {
    function StudentSubscriptionComponent(store, spinner, router) {
        this.store = store;
        this.spinner = spinner;
        this.router = router;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"];
        this.isSubscribed = false;
        this.hasBoughtClass = false;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (user) { return Boolean(user); }));
        this.cards$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCards"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (cards) { return Boolean(cards); }));
        this.user = null;
        this.creator = null;
        this.cards = [];
        this.slug = '';
        this.subscriptions = [];
        this.cardStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCardsStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) { return Boolean(status); }));
        this.userStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__["RequestStatus"].success; }));
        this.cardsStatusAction$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_cards_cards_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCardStatusActions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(Boolean));
        this.cardSelected = false;
        this.classBought = history.state.data && history.state.data.classBought ? history.state.data.classBought : false;
    }
    StudentSubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_12__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].student, _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].myPractice]));
        // showoverlay
        this.loadUserCardsList();
        this.subscriptions.push(this.user$.subscribe(function (user) {
            // hideoverlay
            _this.user = user;
            // console.log(this.user);
            if (user.creators && user.creators.length) {
                _this.creator = __assign({}, user.creators[0].creator);
                // hideoverlay
                // console.log(this.creator, {user});
                if (_this.creator && _this.creator.slug) {
                    _this.spinner.hide();
                    _this.isSubscribed = _this.creator && Array.isArray(_this.creator.subscribed) && _this.creator.subscribed.length > 0;
                    // if (!this.creator.product) {
                    // this.creator.product = {
                    //   frequency: 'monthly',
                    //   cost: 23.99
                    // };
                    // console.log(this.creator);
                    // }
                    _this.slug = _this.creator.slug;
                    if (_this.classBought) {
                        // console.log('CLASSBOUGHT:', this.classBought);
                        _this.hasBoughtClass = !!_this.creator.classes.find(function (singleClass) {
                            // if (singleClass.id === this.classBought.id) {
                            //   console.log('Found classbought in teacher classes: ', singleClass);
                            // }
                            return !!(singleClass.id === _this.classBought.id && singleClass.is_bought);
                        });
                        // console.log('Has bought class: ', this.hasBoughtClass);
                    }
                }
                else {
                    _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_10__["GetCurrentUserRequestAction"]());
                }
            }
        }), this.cards$.subscribe(function (cards) {
            // console.log({cards});
            _this.cards = cards;
        }), this.cardStatus$.subscribe(function (status) {
            if (status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_6__["RequestStatus"].failure) {
                // hideoverlay
            }
        }), this.cardsStatusAction$.subscribe(function (statusAction) {
            // console.log({statusAction});
            if (statusAction.action === _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_3__["CardsActionTypes"].MAKE_USER_CARD_DEFAULT_SUCCESS
                && _this.cardSelected) {
                // console.log('card is now default');
                _this.cardSelected = false;
                _this.subscribeToTeacher();
            }
        }));
    };
    StudentSubscriptionComponent.prototype.loadUserCardsList = function () {
        this.store.dispatch(new _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserCardsRequestAction"]());
    };
    StudentSubscriptionComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    StudentSubscriptionComponent.prototype.subscribeWithExistingCard = function (card) {
        this.cardSelected = true;
        if (!card.is_default) {
            this.store.dispatch(new _src_app_store_modules_cards_cards_actions__WEBPACK_IMPORTED_MODULE_3__["MakeUserCardDefaultRequestAction"](card.id));
        }
        else {
            // if the user clicked on the already default card
            this.subscribeToTeacher();
        }
    };
    StudentSubscriptionComponent.prototype.subscribeToTeacher = function () {
        if (this.classBought) {
            this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_9__["PurchaseTeacherClassRequestAction"]({
                teacher_slug: this.slug,
                recording_id: this.classBought.id
            }));
        }
        else {
            this.store.dispatch(new _src_app_store_modules_students_students_actions__WEBPACK_IMPORTED_MODULE_9__["SubscribeToTeacherRequestAction"]({ teacher_slug: this.slug }));
        }
    };
    StudentSubscriptionComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerOverlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
    ]; };
    StudentSubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-subscription',
            template: __webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/student/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/pages/student/subscription/subscription.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_spinner_overlay_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerOverlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], StudentSubscriptionComponent);
    return StudentSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/store/modules/students/students.types.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/modules/students/students.types.ts ***!
  \**********************************************************/
/*! exports provided: SubscriptionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStatus", function() { return SubscriptionStatus; });
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["canceled"] = "canceled";
    SubscriptionStatus["incomplete"] = "incomplete";
    SubscriptionStatus["incomplete_expired"] = "incomplete_expired";
    SubscriptionStatus["trialing"] = "trialing";
    SubscriptionStatus["active"] = "active";
    SubscriptionStatus["past_due"] = "past_due";
    SubscriptionStatus["unpaid"] = "unpaid";
})(SubscriptionStatus || (SubscriptionStatus = {}));


/***/ })

}]);
//# sourceMappingURL=pages-student-student-module.6327f82980b4bc697e12.js.map