(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-onboarding-onboarding-module~pages-teacher-teacher-module"],{

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/class-media-uploading/class-media-uploading.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/class-media-uploading/class-media-uploading.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileImageForm\" enctype=\"multipart/form-data\">\n  <div class=\"m-t-30\">\n    <label class=\"text-display-4\">{{ title }}</label>\n\n    <!-- <div\n      *ngIf=\"user?.creator?.image && !fileName\"\n      class=\"m-t-24 m-b-24 profile-photo\"\n    >\n      <img src=\"{{ user.creator.image }}\" alt=\"\" />\n    </div> -->\n    <div *ngIf=\"fileName\" class=\"m-t-24 m-b-24\">\n      <img\n        *ngIf=\"accept === 'image/*'\"\n        class=\"preview-image\"\n        src=\"\"\n        alt=\"\"\n        #imagePreview\n      />\n\n      <p *ngIf=\"accept === 'video/*'\">{{ videoPreview }}</p>\n      <p *ngIf=\"accept === 'audio/*'\">{{ audioPreview }}</p>\n    </div>\n\n    <div class=\"m-t-12 m-b-40\">\n      <input\n        #profileImageFile\n        name=\"_image\"\n        type=\"file\"\n        [accept]=\"accept\"\n        (change)=\"onProfileImageForm($event); setFileInfo($event)\"\n        class=\"display-none\"\n        id=\"fileUp\"\n      />\n      <input type=\"hidden\" name=\"image\" formControlName=\"image\" />\n\n      <button\n        mat-ripple\n        type=\"button\"\n        class=\"btn\"\n        [disabled]=\"status === requestStatus.pending\"\n        (click)=\"profileImageFile.click()\"\n      >\n        {{ buttonText }}\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/complete/complete.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/complete/complete.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-icon [icon]=\"icon\"\n    [width]=\"100\"\n    [height]=\"100\"></app-icon>\n  <h1 class=\"title-display-2\">{{ title }}</h1>\n  <p class=\"text-desc-container text-display-3\">{{ description }}\n    <a href=\"https://apps.apple.com/gb/app/journey-into/id1522643456\" target=\"_blank\" *ngIf=\"downloadBtn\">\n      <img src=\"/assets/img/app-store_logo.svg\" alt=\"\" width=\"135\" height=\"40\" /></a>\n  </p>\n  <p *ngIf=\"descriptionLine2\">{{descriptionLine2}}</p>\n  <button mat-ripple \n    class=\"btn\" \n    (click)=\"goToDashboard()\">\n    Begin your Journey Into...\n  </button>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/errors/errors.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/errors/errors.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"errors\" [innerHTML]=\"errors | safeHTML\" class=\"text-error\"></p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile-image-edit/profile-image-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile-image-edit/profile-image-edit.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileImageForm\" enctype=\"multipart/form-data\">\n    <div class=\"m-t-30\">\n        <label class=\"text-display-4\">Your profile image</label>\n\n        <div *ngIf=\"user?.creator?.image && !fileName\" class=\"m-t-24 m-b-24 profile-photo\">\n            <img src=\"{{ user.creator.image }}\" alt=\"\" />\n        </div>\n        <div *ngIf=\"fileName\" class=\"m-t-24 m-b-24\">\n            <img class=\"preview-image\" src=\"\" alt=\"\" #imagePreview />\n            <!-- <p>{{fileName}}</!-->\n        </div>\n\n        <div class=\"m-t-12 m-b-40\">\n            <input #profileImageFile name=\"_image\" type=\"file\" accept=\"image/*\" (change)=\"onProfileImageForm($event)\"\n                class=\"display-none\" />\n            <input type=\"hidden\" name=\"image\" formControlName=\"image\" />\n\n            <button mat-ripple type=\"button\" class=\"btn\"\n                [disabled]=\"status === requestStatus.pending\" \n                (click)=\"profileImageFile.click()\">\n                {{ (fileName || user?.creator?.image) ? 'Change Photo' : 'Upload photo' }}\n            </button>\n            <p class=\"text-display-6 m-t-10\" *ngIf=\"!fileName || !user?.creator?.image\">A head and shoulders picture is perfect!</p>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher-add-class-form/teacher-add-class-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher-add-class-form/teacher-add-class-form.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!spinner.isShowing.value\">\n  <div *ngIf=\"errors\" class=\"text-error m-t-24 m-b-24\">\n    {{ errors }}\n  </div>\n\n  <ng-container>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n      <div class=\"btn btn-bordered switch-btn-content\">\n        <button\n          *ngFor=\"let type of viewTypes\"\n          [ngClass]=\"{ 'active-btn': type.active }\"\n          (click)=\"switchTypes(type.value)\"\n        >\n          {{ type.name }}\n        </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <app-class-media-uploading\n    *ngIf=\"isVideo\"\n    key=\"'video'\"\n    [file]=\"selectedthumbnail\"\n    [user]=\"user\"\n    [status]=\"status\"\n    [requestStatus]=\"requestStatus\"\n    [title]=\"\"\n    [buttonText]=\"'Upload Video'\"\n    [accept]=\"'video/*'\"\n    (setDuration)=\"setDurationValue($event)\"\n    (profileImageUploaded)=\"onAddMediaUploaded($event, 'video_item')\"\n  ></app-class-media-uploading>\n\n  <app-class-media-uploading\n    *ngIf=\"!isVideo\"\n    key=\"'audio'\"\n    [file]=\"selectedthumbnail\"\n    [user]=\"user\"\n    [status]=\"status\"\n    [requestStatus]=\"requestStatus\"\n    [title]=\"\"\n    [accept]=\"'audio/*'\"\n    [buttonText]=\"'Upload Audio'\"\n    (profileImageUploaded)=\"onAddMediaUploaded($event, 'file_item')\"\n  ></app-class-media-uploading>\n\n  <app-class-media-uploading\n    key=\"'image'\"\n    [file]=\"selectedthumbnail\"\n    [user]=\"user\"\n    [status]=\"status\"\n    [requestStatus]=\"requestStatus\"\n    [title]=\"\"\n    [accept]=\"'image/*'\"\n    [buttonText]=\"'Upload Thumbnail'\"\n    (profileImageUploaded)=\"onAddMediaUploaded($event, 'thumbnail')\"\n  ></app-class-media-uploading>\n\n  <form [formGroup]=\"stepOneForm\" class=\"form-one\">\n    <ng-container *ngIf=\"stepOneForm.get('title'); let title\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'title'\"\n        [title]=\"'Title'\"\n        [placeholder]=\"''\"\n        [errors]=\"title.errors\"\n        [hasError]=\"title.invalid && (title.dirty || title.touched)\"\n      ></app-ji-input>\n    </ng-container>\n\n    <ng-container\n      *ngIf=\"stepOneForm.get('descriptionText'); let descriptionText\"\n    >\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [type]=\"'textarea'\"\n        input=\"descriptionText\"\n        [title]=\"'Description'\"\n        [placeholder]=\"''\"\n        [errors]=\"descriptionText.errors\"\n        [hasError]=\"descriptionText.invalid && stepOneFormSubmitted\"\n      >\n      </app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('props'); let props\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [type]=\"'textarea'\"\n        input=\"props\"\n        [title]=\"'Props'\"\n        [placeholder]=\"''\"\n        [errors]=\"props.errors\"\n        [hasError]=\"props.invalid && stepOneFormSubmitted\"\n      >\n      </app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('difficulty'); let difficulty\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'difficulty'\"\n        [title]=\"'Difficulty'\"\n        [placeholder]=\"''\"\n        [errors]=\"difficulty.errors\"\n        [hasError]=\"difficulty.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <hr />\n\n    <button\n      mat-ripple\n      type=\"button\"\n      class=\"btn\"\n      [disabled]=\"status === requestStatus.pending\"\n      (click)=\"handleNextClick()\"\n    >\n      {{ ctaText }}\n    </button>\n  </form>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher-profile-form/teacher-profile-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher-profile-form/teacher-profile-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!spinner.isShowing.value\">\n  <div *ngIf=\"errors\" class=\"text-error m-t-24 m-b-24\">\n    {{ errors }}\n  </div>\n\n  <app-profile-image-edit\n    [file]=\"selectedImage\"\n    [user]=\"user\"\n    [status]=\"status\"\n    [requestStatus]=\"requestStatus\"\n    (profileImageUploaded)=\"onProfileImageUploaded($event)\"\n  ></app-profile-image-edit>\n\n  <form [formGroup]=\"stepOneForm\" class=\"form-one\">\n    <ng-container *ngIf=\"stepOneForm.get('profile_title'); let profileTitle\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'profile_title'\"\n        [title]=\"'Profile name'\"\n        [placeholder]=\"''\"\n        [explainerText]=\"'This is how your students will search for you.'\"\n        [errors]=\"profileTitle.errors\"\n        [hasError]=\"profileTitle.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('city'); let city\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'city'\"\n        [title]=\"'Location'\"\n        [placeholder]=\"'East London, Central London'\"\n        [explainerText]=\"\n          'Where do you spend the majority of your time teaching?'\n        \"\n        [errors]=\"city.errors\"\n        [hasError]=\"city.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <ng-container>\n      <p class=\"text-display-4\">Choose currency</p>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <div class=\"btn btn-bordered switch-btn-content\">\n          <button\n            *ngFor=\"let currency of viewCurrences\"\n            [ngClass]=\"{ 'active-btn': currency.active }\"\n            (click)=\"switchUserCurrency(currency.value)\"\n          >\n            {{ currency.name }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('description'); let description\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [type]=\"'textarea'\"\n        input=\"description\"\n        [teachersLink]=\"true\"\n        [title]=\"'About You'\"\n        [placeholder]=\"''\"\n        [explainerText]=\"\n          'Tell your students a bit about yourself. E.g. How did you come to be a teacher? What sort of experience do you have? Where are you from? Why do you love teaching? What are the principals and ethos behind the way you teach? How do you teach? For example; Is it breath led? Do you teach to music? Is it dynamic or gentle? Any other friendly or personal note you’d like to mention?'\n        \"\n        [errors]=\"description.errors\"\n        [hasError]=\"description.invalid && stepOneFormSubmitted\"\n        (teachersLinkChange)=\"teachersLinkChange()\"\n      >\n      </app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('news_events'); let newsEvents\">\n      <app-ji-input\n        #validatedField\n        [type]=\"'textarea'\"\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'news_events'\"\n        [title]=\"'News & events'\"\n        [errors]=\"newsEvents.errors\"\n        [hasError]=\"newsEvents.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('style'); let style\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'style'\"\n        [title]=\"'What do you teach?'\"\n        [placeholder]=\"'Vinyasa, Ashtanga, Pregnancy'\"\n        [explainerText]=\"'List what you teach with a comma separating each'\"\n        [errors]=\"style.errors\"\n        [hasError]=\"style.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <ng-container *ngIf=\"stepOneForm.get('qualifications'); let qualifications\">\n      <app-ji-input\n        #validatedField\n        [parentForm]=\"stepOneForm\"\n        [input]=\"'qualifications'\"\n        [title]=\"'Training'\"\n        [placeholder]=\"'RYT 200hrs, Post natal, Pilates'\"\n        [errors]=\"qualifications.errors\"\n        [hasError]=\"qualifications.invalid && stepOneFormSubmitted\"\n      ></app-ji-input>\n    </ng-container>\n\n    <fieldset class=\"external-urls\">\n      <p class=\"text-display-4\">Links to Websites, Social Media and Events</p>\n      <fieldset\n        class=\"m-b-30\"\n        formArrayName=\"links\"\n        *ngFor=\"let item of stepOneForm.get('links')['controls']; let i = index\"\n      >\n        <ng-container [formGroupName]=\"i\">\n          <ng-container *ngIf=\"item.get('label'); let label\">\n            <app-ji-input\n              [parentForm]=\"item\"\n              [input]=\"'label'\"\n              [id]=\"'label-' + item.value.id\"\n              [title]=\"'Title'\"\n              [errors]=\"label.errors\"\n              [hasError]=\"\n                (label.invalid || !isLinksValid) && stepOneFormSubmitted\n              \"\n            ></app-ji-input>\n          </ng-container>\n          <ng-container *ngIf=\"item.get('url'); let url\">\n            <app-ji-input\n              [parentForm]=\"item\"\n              [input]=\"'url'\"\n              [title]=\"'Url'\"\n              [id]=\"'url-' + item.value.id\"\n              [placeholder]=\"'Starts with http:// or https://'\"\n              [errors]=\"url.errors\"\n              [customErrorText]=\"{\n                pattern: 'This needs to be a valid url'\n              }\"\n              [hasError]=\"\n                (url.invalid || !isLinksValid) && stepOneFormSubmitted\n              \"\n            ></app-ji-input>\n          </ng-container>\n\n          <button\n            mat-ripple\n            type=\"button\"\n            class=\"btn btn-large bg-20 btn-rounded m-t-12\"\n            (click)=\"removeAddress(i)\"\n          >\n            Remove\n          </button>\n        </ng-container>\n      </fieldset>\n\n      <button\n        mat-ripple\n        type=\"button\"\n        class=\"btn btn-large btn-rounded btn-bordered bg-white font-color-10 width-100\"\n        [disabled]=\"status === requestStatus.pending\"\n        (click)=\"handleAddAnotherExternalUrlClick()\"\n      >\n        {{\n          stepOneForm.get(\"links\")[\"controls\"].length > 0\n            ? \"Add another\"\n            : \"Add An External Url\"\n        }}\n      </button>\n    </fieldset>\n\n    <hr />\n\n    <button\n      mat-ripple\n      type=\"button\"\n      class=\"btn\"\n      [disabled]=\"status === requestStatus.pending\"\n      (click)=\"handleNextClick(false)\"\n    >\n      {{ ctaText }}\n    </button>\n\n    <a *ngIf=\"allowSkip\" class=\"skip-btn\" (click)=\"handleNextClick(true)\"\n      >Skip</a\n    >\n  </form>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher-stripe-form/teacher-stripe-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher-stripe-form/teacher-stripe-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!showForm\">\n    <p *ngIf=\"introText\">{{introText}}</p>\n    <button \n        class=\"btn\"\n        (click)=\"showForm = !showForm\">Complete your payments account</button>\n</ng-container>\n<ng-container *ngIf=\"showForm && user?.creator?.stripe_link && !user?.creator?.stripe_user_id\">\n    <p>Congratulations! You are on your way to creating a subscription business.</p>\n    <p>Your profile has been created in the Journey Into app. Download to begin recording and sharing your classes.</p>\n    <p><a href=\"https://apps.apple.com/gb/app/journey-into/id1522643456\" target=\"_blank\">\n        <img src=\"/assets/img/app-store_logo.svg\" alt=\"\" width=\"135\" height=\"40\" /></a></p>\n    <p>Before students can subscribe to you, you will need to set up or link to your exiting Stripe account.</p>\n    <p>Do this now, or come back to it before you publish your first class.</p>\n    <a [href]=\"user.creator.stripe_link\" class=\"btn\">Complete now</a>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/fileReader.js":
/*!******************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/fileReader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileReader; });
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isReactNative */ "./node_modules/tus-js-client/lib.esm/browser/isReactNative.js");
/* harmony import */ var _uriToBlob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uriToBlob */ "./node_modules/tus-js-client/lib.esm/browser/uriToBlob.js");
/* harmony import */ var _isCordova__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isCordova */ "./node_modules/tus-js-client/lib.esm/browser/isCordova.js");
/* harmony import */ var _readAsByteArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readAsByteArray */ "./node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var FileSource = /*#__PURE__*/function () {
  // Make this.size a method
  function FileSource(file) {
    _classCallCheck(this, FileSource);

    this._file = file;
    this.size = file.size;
  }

  _createClass(FileSource, [{
    key: "slice",
    value: function slice(start, end) {
      // In Apache Cordova applications, a File must be resolved using
      // FileReader instances, see
      // https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#read-a-file
      if (Object(_isCordova__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        return Object(_readAsByteArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._file.slice(start, end));
      }

      var value = this._file.slice(start, end);

      return Promise.resolve({
        value: value
      });
    }
  }, {
    key: "close",
    value: function close() {// Nothing to do here since we don't need to release any resources.
    }
  }]);

  return FileSource;
}();

var StreamSource = /*#__PURE__*/function () {
  function StreamSource(reader, chunkSize) {
    _classCallCheck(this, StreamSource);

    this._chunkSize = chunkSize;
    this._buffer = undefined;
    this._bufferOffset = 0;
    this._reader = reader;
    this._done = false;
  }

  _createClass(StreamSource, [{
    key: "slice",
    value: function slice(start, end) {
      if (start < this._bufferOffset) {
        return Promise.reject(new Error("Requested data is before the reader's current offset"));
      }

      return this._readUntilEnoughDataOrDone(start, end);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function _readUntilEnoughDataOrDone(start, end) {
      var _this = this;

      var hasEnoughData = end <= this._bufferOffset + len(this._buffer);

      if (this._done || hasEnoughData) {
        var value = this._getDataFromBuffer(start, end);

        var done = value == null ? this._done : false;
        return Promise.resolve({
          value: value,
          done: done
        });
      }

      return this._reader.read().then(function (_ref) {
        var value = _ref.value,
            done = _ref.done;

        if (done) {
          _this._done = true;
        } else if (_this._buffer === undefined) {
          _this._buffer = value;
        } else {
          _this._buffer = concat(_this._buffer, value);
        }

        return _this._readUntilEnoughDataOrDone(start, end);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function _getDataFromBuffer(start, end) {
      // Remove data from buffer before `start`.
      // Data might be reread from the buffer if an upload fails, so we can only
      // safely delete data when it comes *before* what is currently being read.
      if (start > this._bufferOffset) {
        this._buffer = this._buffer.slice(start - this._bufferOffset);
        this._bufferOffset = start;
      } // If the buffer is empty after removing old data, all data has been read.


      var hasAllDataBeenRead = len(this._buffer) === 0;

      if (this._done && hasAllDataBeenRead) {
        return null;
      } // We already removed data before `start`, so we just return the first
      // chunk from the buffer.


      return this._buffer.slice(0, end - start);
    }
  }, {
    key: "close",
    value: function close() {
      if (this._reader.cancel) {
        this._reader.cancel();
      }
    }
  }]);

  return StreamSource;
}();

function len(blobOrArray) {
  if (blobOrArray === undefined) return 0;
  if (blobOrArray.size !== undefined) return blobOrArray.size;
  return blobOrArray.length;
}
/*
  Typed arrays and blobs don't have a concat method.
  This function helps StreamSource accumulate data to reach chunkSize.
*/


function concat(a, b) {
  if (a.concat) {
    // Is `a` an Array?
    return a.concat(b);
  }

  if (a instanceof Blob) {
    return new Blob([a, b], {
      type: a.type
    });
  }

  if (a.set) {
    // Is `a` a typed array?
    var c = new a.constructor(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
  }

  throw new Error("Unknown data type");
}

var FileReader = /*#__PURE__*/function () {
  function FileReader() {
    _classCallCheck(this, FileReader);
  }

  _createClass(FileReader, [{
    key: "openFile",
    value: function openFile(input, chunkSize) {
      // In React Native, when user selects a file, instead of a File or Blob,
      // you usually get a file object {} with a uri property that contains
      // a local path to the file. We use XMLHttpRequest to fetch
      // the file blob, before uploading with tus.
      if (Object(_isReactNative__WEBPACK_IMPORTED_MODULE_0__["default"])() && input && typeof input.uri !== "undefined") {
        return Object(_uriToBlob__WEBPACK_IMPORTED_MODULE_1__["default"])(input.uri).then(function (blob) {
          return new FileSource(blob);
        })["catch"](function (err) {
          throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. " + err);
        });
      } // Since we emulate the Blob type in our tests (not all target browsers
      // support it), we cannot use `instanceof` for testing whether the input value
      // can be handled. Instead, we simply check is the slice() function and the
      // size property are available.


      if (typeof input.slice === "function" && typeof input.size !== "undefined") {
        return Promise.resolve(new FileSource(input));
      }

      if (typeof input.read === "function") {
        chunkSize = +chunkSize;

        if (!isFinite(chunkSize)) {
          return Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));
        }

        return Promise.resolve(new StreamSource(input, chunkSize));
      }

      return Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));
    }
  }]);

  return FileReader;
}();



/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/fingerprint.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/fingerprint.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fingerprint; });
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isReactNative */ "./node_modules/tus-js-client/lib.esm/browser/isReactNative.js");
 // TODO: Differenciate between input types

/**
 * Generate a fingerprint for a file which will be used the store the endpoint
 *
 * @param {File} file
 * @param {Object} options
 * @param {Function} callback
 */

function fingerprint(file, options) {
  if (Object(_isReactNative__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return Promise.resolve(reactNativeFingerprint(file, options));
  }

  return Promise.resolve(["tus-br", file.name, file.type, file.size, file.lastModified, options.endpoint].join("-"));
}

function reactNativeFingerprint(file, options) {
  var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : "noexif";
  return ["tus-rn", file.name || "noname", file.size || "nosize", exifHash, options.endpoint].join("/");
}

function hashCode(str) {
  // from https://stackoverflow.com/a/8831937/151666
  var hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (var i = 0; i < str.length; i++) {
    var _char = str.charCodeAt(i);

    hash = (hash << 5) - hash + _char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
}

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/httpStack.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/httpStack.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XHRHttpStack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window */
var XHRHttpStack = /*#__PURE__*/function () {
  function XHRHttpStack() {
    _classCallCheck(this, XHRHttpStack);
  }

  _createClass(XHRHttpStack, [{
    key: "createRequest",
    value: function createRequest(method, url) {
      return new Request(method, url);
    }
  }, {
    key: "getName",
    value: function getName() {
      return "XHRHttpStack";
    }
  }]);

  return XHRHttpStack;
}();



var Request = /*#__PURE__*/function () {
  function Request(method, url) {
    _classCallCheck(this, Request);

    this._xhr = new XMLHttpRequest();

    this._xhr.open(method, url, true);

    this._method = method;
    this._url = url;
    this._headers = {};
  }

  _createClass(Request, [{
    key: "getMethod",
    value: function getMethod() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function getURL() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function setHeader(header, value) {
      this._xhr.setRequestHeader(header, value);

      this._headers[header] = value;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._headers[header];
    }
  }, {
    key: "setProgressHandler",
    value: function setProgressHandler(progressHandler) {
      // Test support for progress events before attaching an event listener
      if (!("upload" in this._xhr)) {
        return;
      }

      this._xhr.upload.onprogress = function (e) {
        if (!e.lengthComputable) {
          return;
        }

        progressHandler(e.loaded);
      };
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Promise(function (resolve, reject) {
        _this._xhr.onload = function () {
          resolve(new Response(_this._xhr));
        };

        _this._xhr.onerror = function (err) {
          reject(err);
        };

        _this._xhr.send(body);
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      this._xhr.abort();

      return Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);

  return Request;
}();

var Response = /*#__PURE__*/function () {
  function Response(xhr) {
    _classCallCheck(this, Response);

    this._xhr = xhr;
  }

  _createClass(Response, [{
    key: "getStatus",
    value: function getStatus() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._xhr.getResponseHeader(header);
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);

  return Response;
}();

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/index.js ***!
  \*************************************************************/
/*! exports provided: Upload, canStoreURLs, defaultOptions, isSupported, enableDebugLog, HttpStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload */ "./node_modules/tus-js-client/lib.esm/upload.js");
/* harmony import */ var _noopUrlStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noopUrlStorage */ "./node_modules/tus-js-client/lib.esm/noopUrlStorage.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "./node_modules/tus-js-client/lib.esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableDebugLog", function() { return _logger__WEBPACK_IMPORTED_MODULE_2__["enableDebugLog"]; });

/* harmony import */ var _urlStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlStorage */ "./node_modules/tus-js-client/lib.esm/browser/urlStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canStoreURLs", function() { return _urlStorage__WEBPACK_IMPORTED_MODULE_3__["canStoreURLs"]; });

/* harmony import */ var _httpStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpStack */ "./node_modules/tus-js-client/lib.esm/browser/httpStack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpStack", function() { return _httpStack__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _fileReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fileReader */ "./node_modules/tus-js-client/lib.esm/browser/fileReader.js");
/* harmony import */ var _fingerprint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fingerprint */ "./node_modules/tus-js-client/lib.esm/browser/fingerprint.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global window */








var defaultOptions = _objectSpread({}, _upload__WEBPACK_IMPORTED_MODULE_0__["default"].defaultOptions, {
  httpStack: new _httpStack__WEBPACK_IMPORTED_MODULE_4__["default"](),
  fileReader: new _fileReader__WEBPACK_IMPORTED_MODULE_5__["default"](),
  urlStorage: _urlStorage__WEBPACK_IMPORTED_MODULE_3__["canStoreURLs"] ? new _urlStorage__WEBPACK_IMPORTED_MODULE_3__["WebStorageUrlStorage"]() : new _noopUrlStorage__WEBPACK_IMPORTED_MODULE_1__["default"](),
  fingerprint: _fingerprint__WEBPACK_IMPORTED_MODULE_6__["default"]
});

var Upload = /*#__PURE__*/function (_BaseUpload) {
  _inherits(Upload, _BaseUpload);

  var _super = _createSuper(Upload);

  function Upload() {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Upload);

    options = _objectSpread({}, defaultOptions, {}, options);
    return _super.call(this, file, options);
  }

  _createClass(Upload, null, [{
    key: "terminate",
    value: function terminate(url, options, cb) {
      options = _objectSpread({}, defaultOptions, {}, options);
      return _upload__WEBPACK_IMPORTED_MODULE_0__["default"].terminate(url, options, cb);
    }
  }]);

  return Upload;
}(_upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

var _window = window,
    XMLHttpRequest = _window.XMLHttpRequest,
    Blob = _window.Blob;
var isSupported = XMLHttpRequest && Blob && typeof Blob.prototype.slice === "function";


/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/isCordova.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/isCordova.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isCordova = function isCordova() {
  return typeof window != "undefined" && (typeof window.PhoneGap != "undefined" || typeof window.Cordova != "undefined" || typeof window.cordova != "undefined");
};

/* harmony default export */ __webpack_exports__["default"] = (isCordova);

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/isReactNative.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/isReactNative.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isReactNative = function isReactNative() {
  return typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
};

/* harmony default export */ __webpack_exports__["default"] = (isReactNative);

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readAsByteArray; });
/**
 * readAsByteArray converts a File object to a Uint8Array.
 * This function is only used on the Apache Cordova platform.
 * See https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/index.html#read-a-file
 */
function readAsByteArray(chunk) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      var value = new Uint8Array(reader.result);
      resolve({
        value: value
      });
    };

    reader.onerror = function (err) {
      reject(err);
    };

    reader.readAsArrayBuffer(chunk);
  });
}

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/uriToBlob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/uriToBlob.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uriToBlob; });
/**
 * uriToBlob resolves a URI to a Blob object. This is used for
 * React Native to retrieve a file (identified by a file://
 * URI) as a blob.
 */
function uriToBlob(uri) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";

    xhr.onload = function () {
      var blob = xhr.response;
      resolve(blob);
    };

    xhr.onerror = function (err) {
      reject(err);
    };

    xhr.open("GET", uri);
    xhr.send();
  });
}

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/browser/urlStorage.js":
/*!******************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/browser/urlStorage.js ***!
  \******************************************************************/
/*! exports provided: canStoreURLs, WebStorageUrlStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canStoreURLs", function() { return canStoreURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageUrlStorage", function() { return WebStorageUrlStorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window, localStorage */
var hasStorage = false;

try {
  hasStorage = "localStorage" in window; // Attempt to store and read entries from the local storage to detect Private
  // Mode on Safari on iOS (see #49)

  var key = "tusSupport";
  localStorage.setItem(key, localStorage.getItem(key));
} catch (e) {
  // If we try to access localStorage inside a sandboxed iframe, a SecurityError
  // is thrown. When in private mode on iOS Safari, a QuotaExceededError is
  // thrown (see #49)
  if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
    hasStorage = false;
  } else {
    throw e;
  }
}

var canStoreURLs = hasStorage;
var WebStorageUrlStorage = /*#__PURE__*/function () {
  function WebStorageUrlStorage() {
    _classCallCheck(this, WebStorageUrlStorage);
  }

  _createClass(WebStorageUrlStorage, [{
    key: "findAllUploads",
    value: function findAllUploads() {
      var results = this._findEntries("tus::");

      return Promise.resolve(results);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint) {
      var results = this._findEntries("tus::".concat(fingerprint, "::"));

      return Promise.resolve(results);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      localStorage.removeItem(urlStorageKey);
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint, upload) {
      var id = Math.round(Math.random() * 1e12);
      var key = "tus::".concat(fingerprint, "::").concat(id);
      localStorage.setItem(key, JSON.stringify(upload));
      return Promise.resolve(key);
    }
  }, {
    key: "_findEntries",
    value: function _findEntries(prefix) {
      var results = [];

      for (var i = 0; i < localStorage.length; i++) {
        var _key = localStorage.key(i);

        if (_key.indexOf(prefix) !== 0) continue;

        try {
          var upload = JSON.parse(localStorage.getItem(_key));
          upload.urlStorageKey = _key;
          results.push(upload);
        } catch (e) {// The JSON parse error is intentionally ignored here, so a malformed
          // entry in the storage cannot prevent an upload.
        }
      }

      return results;
    }
  }]);

  return WebStorageUrlStorage;
}();

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/error.js":
/*!*****************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/error.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DetailedError = /*#__PURE__*/function (_Error) {
  _inherits(DetailedError, _Error);

  var _super = _createSuper(DetailedError);

  function DetailedError(message) {
    var _this;

    var causingErr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var req = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, DetailedError);

    _this = _super.call(this, message);
    _this.originalRequest = req;
    _this.originalResponse = res;
    _this.causingError = causingErr;

    if (causingErr != null) {
      message += ", caused by ".concat(causingErr.toString());
    }

    if (req != null) {
      var requestId = req.getHeader("X-Request-ID") || "n/a";
      var method = req.getMethod();
      var url = req.getURL();
      var status = res ? res.getStatus() : "n/a";
      var body = res ? res.getBody() || "" : "n/a";
      message += ", originated from request (method: ".concat(method, ", url: ").concat(url, ", response code: ").concat(status, ", response text: ").concat(body, ", request id: ").concat(requestId, ")");
    }

    _this.message = message;
    return _this;
  }

  return DetailedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/* harmony default export */ __webpack_exports__["default"] = (DetailedError);

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/logger.js ***!
  \******************************************************/
/*! exports provided: enableDebugLog, log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableDebugLog", function() { return enableDebugLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* eslint no-console: "off" */
var isEnabled = false;
function enableDebugLog() {
  isEnabled = true;
}
function log(msg) {
  if (!isEnabled) return;
  console.log(msg);
}

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/noopUrlStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/noopUrlStorage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoopUrlStorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-unused-vars: "off" */
var NoopUrlStorage = /*#__PURE__*/function () {
  function NoopUrlStorage() {
    _classCallCheck(this, NoopUrlStorage);
  }

  _createClass(NoopUrlStorage, [{
    key: "listAllUploads",
    value: function listAllUploads() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint, upload) {
      return Promise.resolve(null);
    }
  }]);

  return NoopUrlStorage;
}();



/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/upload.js":
/*!******************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/upload.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/tus-js-client/node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/tus-js-client/lib.esm/error.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/tus-js-client/lib.esm/logger.js");
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uuid */ "./node_modules/tus-js-client/lib.esm/uuid.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window */





var defaultOptions = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  _onUploadUrlAvailable: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: null,
  chunkSize: Infinity,
  retryDelays: [0, 1000, 3000, 5000],
  parallelUploads: 1,
  storeFingerprintForResuming: true,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false,
  urlStorage: null,
  fileReader: null,
  httpStack: null
};

var BaseUpload = /*#__PURE__*/function () {
  function BaseUpload(file, options) {
    _classCallCheck(this, BaseUpload);

    // Warn about removed options from previous versions
    if ("resume" in options) {
      console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."); // eslint-disable-line no-console
    } // The default options will already be added from the wrapper classes.


    this.options = options; // The storage module used to store URLs

    this._urlStorage = this.options.urlStorage; // The underlying File/Blob object

    this.file = file; // The URL against which the file will be uploaded

    this.url = null; // The underlying request object for the current PATCH request

    this._req = null; // The fingerpinrt for the current file (set after start())

    this._fingerprint = null; // The key that the URL storage returned when saving an URL with a fingerprint,

    this._urlStorageKey = null; // The offset used in the current PATCH request

    this._offset = null; // True if the current PATCH request has been aborted

    this._aborted = false; // The file's size in bytes

    this._size = null; // The Source object which will wrap around the given file and provides us
    // with a unified interface for getting its size and slice chunks from its
    // content allowing us to easily handle Files, Blobs, Buffers and Streams.

    this._source = null; // The current count of attempts which have been made. Zero indicates none.

    this._retryAttempt = 0; // The timeout's ID which is used to delay the next retry

    this._retryTimeout = null; // The offset of the remote upload before the latest attempt was started.

    this._offsetBeforeRetry = 0; // An array of BaseUpload instances which are used for uploading the different
    // parts, if the parallelUploads option is used.

    this._parallelUploads = null; // An array of upload URLs which are used for uploading the different
    // parts, if the parallelUploads option is used.

    this._parallelUploadUrls = null;
  }
  /**
   * Use the Termination extension to delete an upload from the server by sending a DELETE
   * request to the specified upload URL. This is only possible if the server supports the
   * Termination extension. If the `options.retryDelays` property is set, the method will
   * also retry if an error ocurrs.
   *
   * @param {String} url The upload's URL which will be terminated.
   * @param {object} options Optional options for influencing HTTP requests.
   * @return {Promise} The Promise will be resolved/rejected when the requests finish.
   */


  _createClass(BaseUpload, [{
    key: "findPreviousUploads",
    value: function findPreviousUploads() {
      var _this = this;

      return this.options.fingerprint(this.file, this.options).then(function (fingerprint) {
        return _this._urlStorage.findUploadsByFingerprint(fingerprint);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function resumeFromPreviousUpload(previousUpload) {
      this.url = previousUpload.uploadUrl || null;
      this._parallelUploadUrls = previousUpload.parallelUploadUrls || null;
      this._urlStorageKey = previousUpload.urlStorageKey;
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var file = this.file;

      if (!file) {
        this._emitError(new Error("tus: no file or stream to upload provided"));

        return;
      }

      if (!this.options.endpoint && !this.options.uploadUrl) {
        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));

        return;
      }

      var retryDelays = this.options.retryDelays;

      if (retryDelays != null && Object.prototype.toString.call(retryDelays) !== "[object Array]") {
        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));

        return;
      }

      if (this.options.parallelUploads > 1) {
        // Test which options are incompatible with parallel uploads.
        ["uploadUrl", "uploadSize", "uploadLengthDeferred"].forEach(function (optionName) {
          if (_this2.options[optionName]) {
            _this2._emitError(new Error("tus: cannot use the ".concat(optionName, " option when parallelUploads is enabled")));
          }
        });
      }

      this.options.fingerprint(file, this.options).then(function (fingerprint) {
        if (fingerprint == null) {
          Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.");
        } else {
          Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Calculated fingerprint: ".concat(fingerprint));
        }

        _this2._fingerprint = fingerprint;

        if (_this2._source) {
          return _this2._source;
        } else {
          return _this2.options.fileReader.openFile(file, _this2.options.chunkSize);
        }
      }).then(function (source) {
        _this2._source = source; // If the upload was configured to use multiple requests or if we resume from
        // an upload which used multiple requests, we start a parallel upload.

        if (_this2.options.parallelUploads > 1 || _this2._parallelUploadUrls != null) {
          _this2._startParallelUpload();
        } else {
          _this2._startSingleUpload();
        }
      })["catch"](function (err) {
        _this2._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */

  }, {
    key: "_startParallelUpload",
    value: function _startParallelUpload() {
      var _this3 = this;

      var totalSize = this._size = this._source.size;
      var totalProgress = 0;
      this._parallelUploads = [];
      var partCount = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads; // The input file will be split into multiple slices which are uploaded in separate
      // requests. Here we generate the start and end position for the slices.

      var parts = splitSizeIntoParts(this._source.size, partCount, this._parallelUploadUrls); // Create an empty list for storing the upload URLs

      this._parallelUploadUrls = new Array(parts.length); // Generate a promise for each slice that will be resolve if the respective
      // upload is completed.

      var uploads = parts.map(function (part, index) {
        var lastPartProgress = 0;
        return _this3._source.slice(part.start, part.end).then(function (_ref) {
          var value = _ref.value;
          return new Promise(function (resolve, reject) {
            // Merge with the user supplied options but overwrite some values.
            var options = _objectSpread({}, _this3.options, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: part.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: false,
              removeFingerprintOnSuccess: false,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              metadata: {},
              // Add the header to indicate the this is a partial upload.
              headers: _objectSpread({}, _this3.options.headers, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: resolve,
              onError: reject,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function onProgress(newPartProgress) {
                totalProgress = totalProgress - lastPartProgress + newPartProgress;
                lastPartProgress = newPartProgress;

                _this3._emitProgress(totalProgress, totalSize);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              _onUploadUrlAvailable: function _onUploadUrlAvailable() {
                _this3._parallelUploadUrls[index] = upload.url; // Test if all uploads have received an URL

                if (_this3._parallelUploadUrls.filter(function (u) {
                  return !!u;
                }).length === parts.length) {
                  _this3._saveUploadInUrlStorage();
                }
              }
            });

            var upload = new BaseUpload(value, options);
            upload.start(); // Store the upload in an array, so we can later abort them if necessary.

            _this3._parallelUploads.push(upload);
          });
        });
      });
      var req; // Wait until all partial uploads are finished and we can send the POST request for
      // creating the final upload.

      Promise.all(uploads).then(function () {
        req = _this3._openRequest("POST", _this3.options.endpoint);
        req.setHeader("Upload-Concat", "final;".concat(_this3._parallelUploadUrls.join(" "))); // Add metadata if values have been added

        var metadata = encodeMetadata(_this3.options.metadata);

        if (metadata !== "") {
          req.setHeader("Upload-Metadata", metadata);
        }

        return _this3._sendRequest(req, null);
      }).then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this3._emitHttpError(req, res, "tus: unexpected response while creating upload");

          return;
        }

        var location = res.getHeader("Location");

        if (location == null) {
          _this3._emitHttpError(req, res, "tus: invalid or missing Location header");

          return;
        }

        _this3.url = resolveUrl(_this3.options.endpoint, location);
        Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Created upload at ".concat(_this3.url));

        _this3._emitSuccess();
      })["catch"](function (err) {
        _this3._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */

  }, {
    key: "_startSingleUpload",
    value: function _startSingleUpload() {
      // First, we look at the uploadLengthDeferred option.
      // Next, we check if the caller has supplied a manual upload size.
      // Finally, we try to use the calculated size from the source object.
      if (this.options.uploadLengthDeferred) {
        this._size = null;
      } else if (this.options.uploadSize != null) {
        this._size = +this.options.uploadSize;

        if (isNaN(this._size)) {
          this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));

          return;
        }
      } else {
        this._size = this._source.size;

        if (this._size == null) {
          this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));

          return;
        }
      } // Reset the aborted flag when the upload is started or else the
      // _performUpload will stop before sending a request if the upload has been
      // aborted previously.


      this._aborted = false; // The upload had been started previously and we should reuse this URL.

      if (this.url != null) {
        Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Resuming upload from previous URL: ".concat(this.url));

        this._resumeUpload();

        return;
      } // A URL has manually been specified, so we try to resume


      if (this.options.uploadUrl != null) {
        Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Resuming upload from provided URL: ".concat(this.options.url));
        this.url = this.options.uploadUrl;

        this._resumeUpload();

        return;
      } // An upload has not started for the file yet, so we start a new one


      Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Creating a new upload");

      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */

  }, {
    key: "abort",
    value: function abort(shouldTerminate, cb) {
      var _this4 = this;

      if (typeof cb === "function") {
        throw new Error("tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead");
      } // Stop any parallel partial uploads, that have been started in _startParallelUploads.


      if (this._parallelUploads != null) {
        this._parallelUploads.forEach(function (upload) {
          upload.abort(shouldTerminate);
        });
      } // Stop any current running request.


      if (this._req !== null) {
        this._req.abort();

        this._source.close();
      }

      this._aborted = true; // Stop any timeout used for initiating a retry.

      if (this._retryTimeout != null) {
        clearTimeout(this._retryTimeout);
        this._retryTimeout = null;
      }

      if (!shouldTerminate || this.url == null) {
        return Promise.resolve();
      }

      return BaseUpload.terminate(this.url, this.options) // Remove entry from the URL storage since the upload URL is no longer valid.
      .then(function () {
        return _this4._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function _emitHttpError(req, res, message, causingErr) {
      this._emitError(new _error__WEBPACK_IMPORTED_MODULE_2__["default"](message, causingErr, req, res));
    }
  }, {
    key: "_emitError",
    value: function _emitError(err) {
      var _this5 = this;

      // Do not emit errors, e.g. from aborted HTTP requests, if the upload has been stopped.
      if (this._aborted) return; // Check if we should retry, when enabled, before sending the error to the user.

      if (this.options.retryDelays != null) {
        // We will reset the attempt counter if
        // - we were already able to connect to the server (offset != null) and
        // - we were able to upload a small chunk of data to the server
        var shouldResetDelays = this._offset != null && this._offset > this._offsetBeforeRetry;

        if (shouldResetDelays) {
          this._retryAttempt = 0;
        }

        if (shouldRetry(err, this._retryAttempt, this.options)) {
          var delay = this.options.retryDelays[this._retryAttempt++];
          this._offsetBeforeRetry = this._offset;
          this._retryTimeout = setTimeout(function () {
            _this5.start();
          }, delay);
          return;
        }
      }

      if (typeof this.options.onError === "function") {
        this.options.onError(err);
      } else {
        throw err;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @api private
     */

  }, {
    key: "_emitSuccess",
    value: function _emitSuccess() {
      if (this.options.removeFingerprintOnSuccess) {
        // Remove stored fingerprint and corresponding endpoint. This causes
        // new uploads of the same file to be treated as a different file.
        this._removeFromUrlStorage();
      }

      if (typeof this.options.onSuccess === "function") {
        this.options.onSuccess();
      }
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */

  }, {
    key: "_emitProgress",
    value: function _emitProgress(bytesSent, bytesTotal) {
      if (typeof this.options.onProgress === "function") {
        this.options.onProgress(bytesSent, bytesTotal);
      }
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */

  }, {
    key: "_emitChunkComplete",
    value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
      if (typeof this.options.onChunkComplete === "function") {
        this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
      }
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */

  }, {
    key: "_createUpload",
    value: function _createUpload() {
      var _this6 = this;

      if (!this.options.endpoint) {
        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));

        return;
      }

      var req = this._openRequest("POST", this.options.endpoint);

      if (this.options.uploadLengthDeferred) {
        req.setHeader("Upload-Defer-Length", 1);
      } else {
        req.setHeader("Upload-Length", this._size);
      } // Add metadata if values have been added


      var metadata = encodeMetadata(this.options.metadata);

      if (metadata !== "") {
        req.setHeader("Upload-Metadata", metadata);
      }

      var promise;

      if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
        this._offset = 0;
        promise = this._addChunkToRequest(req);
      } else {
        promise = this._sendRequest(req, null);
      }

      promise.then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this6._emitHttpError(req, res, "tus: unexpected response while creating upload");

          return;
        }

        var location = res.getHeader("Location");

        if (location == null) {
          _this6._emitHttpError(req, res, "tus: invalid or missing Location header");

          return;
        }

        _this6.url = resolveUrl(_this6.options.endpoint, location);
        Object(_logger__WEBPACK_IMPORTED_MODULE_3__["log"])("Created upload at ".concat(_this6.url));

        if (typeof _this6.options._onUploadUrlAvailable === "function") {
          _this6.options._onUploadUrlAvailable();
        }

        if (_this6._size === 0) {
          // Nothing to upload and file was successfully created
          _this6._emitSuccess();

          _this6._source.close();

          return;
        }

        _this6._saveUploadInUrlStorage();

        if (_this6.options.uploadDataDuringCreation) {
          _this6._handleUploadResponse(req, res);
        } else {
          _this6._offset = 0;

          _this6._performUpload();
        }
      })["catch"](function (err) {
        _this6._emitHttpError(req, null, "tus: failed to create upload", err);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */

  }, {
    key: "_resumeUpload",
    value: function _resumeUpload() {
      var _this7 = this;

      var req = this._openRequest("HEAD", this.url);

      var promise = this._sendRequest(req, null);

      promise.then(function (res) {
        var status = res.getStatus();

        if (!inStatusCategory(status, 200)) {
          if (inStatusCategory(status, 400)) {
            // Remove stored fingerprint and corresponding endpoint,
            // on client errors since the file can not be found
            _this7._removeFromUrlStorage();
          } // If the upload is locked (indicated by the 423 Locked status code), we
          // emit an error instead of directly starting a new upload. This way the
          // retry logic can catch the error and will retry the upload. An upload
          // is usually locked for a short period of time and will be available
          // afterwards.


          if (status === 423) {
            _this7._emitHttpError(req, res, "tus: upload is currently locked; retry later");

            return;
          }

          if (!_this7.options.endpoint) {
            // Don't attempt to create a new upload if no endpoint is provided.
            _this7._emitHttpError(req, res, "tus: unable to resume upload (new upload cannot be created without an endpoint)");

            return;
          } // Try to create a new upload


          _this7.url = null;

          _this7._createUpload();

          return;
        }

        var offset = parseInt(res.getHeader("Upload-Offset"), 10);

        if (isNaN(offset)) {
          _this7._emitHttpError(req, res, "tus: invalid or missing offset value");

          return;
        }

        var length = parseInt(res.getHeader("Upload-Length"), 10);

        if (isNaN(length) && !_this7.options.uploadLengthDeferred) {
          _this7._emitHttpError(req, res, "tus: invalid or missing length value");

          return;
        }

        if (typeof _this7.options._onUploadUrlAvailable === "function") {
          _this7.options._onUploadUrlAvailable();
        } // Upload has already been completed and we do not need to send additional
        // data to the server


        if (offset === length) {
          _this7._emitProgress(length, length);

          _this7._emitSuccess();

          return;
        }

        _this7._offset = offset;

        _this7._performUpload();
      })["catch"](function (err) {
        _this7._emitHttpError(req, null, "tus: failed to resume upload", err);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */

  }, {
    key: "_performUpload",
    value: function _performUpload() {
      var _this8 = this;

      // If the upload has been aborted, we will not send the next PATCH request.
      // This is important if the abort method was called during a callback, such
      // as onChunkComplete or onProgress.
      if (this._aborted) {
        return;
      }

      var req; // Some browser and servers may not support the PATCH method. For those
      // cases, you can tell tus-js-client to use a POST request with the
      // X-HTTP-Method-Override header for simulating a PATCH request.

      if (this.options.overridePatchMethod) {
        req = this._openRequest("POST", this.url);
        req.setHeader("X-HTTP-Method-Override", "PATCH");
      } else {
        req = this._openRequest("PATCH", this.url);
      }

      req.setHeader("Upload-Offset", this._offset);

      var promise = this._addChunkToRequest(req);

      promise.then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this8._emitHttpError(req, res, "tus: unexpected response while uploading chunk");

          return;
        }

        _this8._handleUploadResponse(req, res);
      })["catch"](function (err) {
        // Don't emit an error if the upload was aborted manually
        if (_this8._aborted) {
          return;
        }

        _this8._emitHttpError(req, null, "tus: failed to upload chunk at offset " + _this8._offset, err);
      });
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */

  }, {
    key: "_addChunkToRequest",
    value: function _addChunkToRequest(req) {
      var _this9 = this;

      var start = this._offset;
      var end = this._offset + this.options.chunkSize;
      req.setProgressHandler(function (bytesSent) {
        _this9._emitProgress(start + bytesSent, _this9._size);
      });
      req.setHeader("Content-Type", "application/offset+octet-stream"); // The specified chunkSize may be Infinity or the calcluated end position
      // may exceed the file's size. In both cases, we limit the end position to
      // the input's total size for simpler calculations and correctness.

      if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
        end = this._size;
      }

      return this._source.slice(start, end).then(function (_ref2) {
        var value = _ref2.value,
            done = _ref2.done;

        // If the upload length is deferred, the upload size was not specified during
        // upload creation. So, if the file reader is done reading, we know the total
        // upload size and can tell the tus server.
        if (_this9.options.uploadLengthDeferred && done) {
          _this9._size = _this9._offset + (value && value.size ? value.size : 0);
          req.setHeader("Upload-Length", _this9._size);
        }

        if (value === null) {
          return _this9._sendRequest(req);
        } else {
          _this9._emitProgress(_this9._offset, _this9._size);

          return _this9._sendRequest(req, value);
        }
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */

  }, {
    key: "_handleUploadResponse",
    value: function _handleUploadResponse(req, res) {
      var offset = parseInt(res.getHeader("Upload-Offset"), 10);

      if (isNaN(offset)) {
        this._emitHttpError(req, res, "tus: invalid or missing offset value");

        return;
      }

      this._emitProgress(offset, this._size);

      this._emitChunkComplete(offset - this._offset, offset, this._size);

      this._offset = offset;

      if (offset == this._size) {
        // Yay, finally done :)
        this._emitSuccess();

        this._source.close();

        return;
      }

      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */

  }, {
    key: "_openRequest",
    value: function _openRequest(method, url) {
      var req = openRequest(method, url, this.options);
      this._req = req;
      return req;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */

  }, {
    key: "_removeFromUrlStorage",
    value: function _removeFromUrlStorage() {
      var _this10 = this;

      if (!this._urlStorageKey) return;

      this._urlStorage.removeUpload(this._urlStorageKey)["catch"](function (err) {
        _this10._emitError(err);
      });

      this._urlStorageKey = null;
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */

  }, {
    key: "_saveUploadInUrlStorage",
    value: function _saveUploadInUrlStorage() {
      var _this11 = this;

      // Only if a fingerprint was calculated for the input (i.e. not a stream), we can store the upload URL.
      if (!this.options.storeFingerprintForResuming || !this._fingerprint) {
        return;
      }

      var storedUpload = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: new Date().toString()
      };

      if (this._parallelUploads) {
        // Save multiple URLs if the parallelUploads option is used ...
        storedUpload.parallelUploadUrls = this._parallelUploadUrls;
      } else {
        // ... otherwise we just save the one available URL.
        storedUpload.uploadUrl = this.url;
      }

      this._urlStorage.addUpload(this._fingerprint, storedUpload).then(function (urlStorageKey) {
        return _this11._urlStorageKey = urlStorageKey;
      })["catch"](function (err) {
        _this11._emitError(err);
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */

  }, {
    key: "_sendRequest",
    value: function _sendRequest(req) {
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return sendRequest(req, body, this.options);
    }
  }], [{
    key: "terminate",
    value: function terminate(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;

      if (typeof options === "function" || typeof cb === "function") {
        throw new Error("tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead");
      }

      var req = openRequest("DELETE", url, options);
      return sendRequest(req, null, options).then(function (res) {
        // A 204 response indicates a successfull request
        if (res.getStatus() === 204) {
          return;
        }

        throw new _error__WEBPACK_IMPORTED_MODULE_2__["default"]("tus: unexpected response while terminating upload", null, req, res);
      })["catch"](function (err) {
        if (!(err instanceof _error__WEBPACK_IMPORTED_MODULE_2__["default"])) {
          err = new _error__WEBPACK_IMPORTED_MODULE_2__["default"]("tus: failed to terminate upload", err, req, null);
        }

        if (!shouldRetry(err, 0, options)) {
          throw err;
        } // Instead of keeping track of the retry attempts, we remove the first element from the delays
        // array. If the array is empty, all retry attempts are used up and we will bubble up the error.
        // We recursively call the terminate function will removing elements from the retryDelays array.


        var delay = options.retryDelays[0];
        var remainingDelays = options.retryDelays.slice(1);

        var newOptions = _objectSpread({}, options, {
          retryDelays: remainingDelays
        });

        return new Promise(function (resolve) {
          return setTimeout(resolve, delay);
        }).then(function () {
          return BaseUpload.terminate(url, newOptions);
        });
      });
    }
  }]);

  return BaseUpload;
}();

function encodeMetadata(metadata) {
  var encoded = [];

  for (var key in metadata) {
    encoded.push(key + " " + js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(metadata[key]));
  }

  return encoded.join(",");
}
/**
 * Checks whether a given status is in the range of the expected category.
 * For example, only a status between 200 and 299 will satisfy the category 200.
 *
 * @api private
 */


function inStatusCategory(status, category) {
  return status >= category && status < category + 100;
}
/**
 * Create a new HTTP request with the specified method and URL.
 * The necessary headers that are included in every request
 * will be added, including the request ID.
 *
 * @api private
 */


function openRequest(method, url, options) {
  var req = options.httpStack.createRequest(method, url);
  req.setHeader("Tus-Resumable", "1.0.0");
  var headers = options.headers || {};

  for (var name in headers) {
    req.setHeader(name, headers[name]);
  }

  if (options.addRequestId) {
    var requestId = Object(_uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
    req.setHeader("X-Request-ID", requestId);
  }

  return req;
}
/**
 * Send a request with the provided body while invoking the onBeforeRequest
 * and onAfterResponse callbacks.
 *
 * @api private
 */


function sendRequest(req, body, options) {
  var onBeforeRequestPromise = typeof options.onBeforeRequest === "function" ? Promise.resolve(options.onBeforeRequest(req)) : Promise.resolve();
  return onBeforeRequestPromise.then(function () {
    return req.send(body).then(function (res) {
      var onAfterResponsePromise = typeof options.onAfterResponse === "function" ? Promise.resolve(options.onAfterResponse(req, res)) : Promise.resolve();
      return onAfterResponsePromise.then(function () {
        return res;
      });
    });
  });
}
/**
 * Checks whether the browser running this code has internet access.
 * This function will always return true in the node.js environment
 *
 * @api private
 */


function isOnline() {
  var online = true;

  if (typeof window !== "undefined" && "navigator" in window && window.navigator.onLine === false) {
    online = false;
  }

  return online;
}
/**
 * Checks whether or not it is ok to retry a request.
 * @param {Error} err the error returned from the last request
 * @param {number} retryAttempt the number of times the request has already been retried
 * @param {object} options tus Upload options
 *
 * @api private
 */


function shouldRetry(err, retryAttempt, options) {
  // We only attempt a retry if
  // - retryDelays option is set
  // - we didn't exceed the maxium number of retries, yet, and
  // - this error was caused by a request or it's response and
  // - the error is server error (i.e. not a status 4xx except a 409 or 423) or
  // a onShouldRetry is specified and returns true
  // - the browser does not indicate that we are offline
  if (options.retryDelays == null || retryAttempt >= options.retryDelays.length || err.originalRequest == null) {
    return false;
  }

  if (options && typeof options.onShouldRetry === "function") {
    return options.onShouldRetry(err, retryAttempt, options);
  }

  var status = err.originalResponse ? err.originalResponse.getStatus() : 0;
  return (!inStatusCategory(status, 400) || status === 409 || status === 423) && isOnline();
}
/**
 * Resolve a relative link given the origin as source. For example,
 * if a HTTP request to http://example.com/files/ returns a Location
 * header with the value /upload/abc, the resolved URL will be:
 * http://example.com/upload/abc
 */


function resolveUrl(origin, link) {
  return new url_parse__WEBPACK_IMPORTED_MODULE_1___default.a(link, origin).toString();
}
/**
 * Calculate the start and end positions for the parts if an upload
 * is split into multiple parallel requests.
 *
 * @param {number} totalSize The byte size of the upload, which will be split.
 * @param {number} partCount The number in how many parts the upload will be split.
 * @param {string[]} previousUrls The upload URLs for previous parts.
 * @return {object[]}
 * @api private
 */


function splitSizeIntoParts(totalSize, partCount, previousUrls) {
  var partSize = Math.floor(totalSize / partCount);
  var parts = [];

  for (var i = 0; i < partCount; i++) {
    parts.push({
      start: partSize * i,
      end: partSize * (i + 1)
    });
  }

  parts[partCount - 1].end = totalSize; // Attach URLs from previous uploads, if available.

  if (previousUrls) {
    parts.forEach(function (part, index) {
      part.uploadUrl = previousUrls[index] || null;
    });
  }

  return parts;
}

BaseUpload.defaultOptions = defaultOptions;
/* harmony default export */ __webpack_exports__["default"] = (BaseUpload);

/***/ }),

/***/ "./node_modules/tus-js-client/lib.esm/uuid.js":
/*!****************************************************!*\
  !*** ./node_modules/tus-js-client/lib.esm/uuid.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uuid; });
/**
 * Generate a UUID v4 based on random numbers. We intentioanlly use the less
 * secure Math.random function here since the more secure crypto.getRandomNumbers
 * is not available on all platforms.
 * This is not a problem for us since we use the UUID only for generating a
 * request ID, so we can correlate server logs to client errors.
 *
 * This function is taken from following site:
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 *
 * @return {string} The generate UUID
 */
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/***/ }),

/***/ "./node_modules/tus-js-client/node_modules/js-base64/base64.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tus-js-client/node_modules/js-base64/base64.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.6.4";
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa && typeof global.btoa == 'function'
        ? function(b){ return global.btoa(b) } : function(b) {
        if (b.match(/[^\x00-\xFF]/)) throw new RangeError(
            'The string contains invalid characters.'
        );
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = function(u) {
        return btoa(utob(String(u)));
    };
    var mkUriSafe = function (b64) {
        return b64.replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encode = function(u, urisafe) {
        return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
    };
    var encodeURI = function(u) { return encode(u, true) };
    var fromUint8Array;
    if (global.Uint8Array) fromUint8Array = function(a, urisafe) {
        // return btoa(fromCharCode.apply(null, a));
        var b64 = '';
        for (var i = 0, l = a.length; i < l; i += 3) {
            var a0 = a[i], a1 = a[i+1], a2 = a[i+2];
            var ord = a0 << 16 | a1 << 8 | a2;
            b64 +=    b64chars.charAt( ord >>> 18)
                +     b64chars.charAt((ord >>> 12) & 63)
                + ( typeof a1 != 'undefined'
                    ? b64chars.charAt((ord >>>  6) & 63) : '=')
                + ( typeof a2 != 'undefined'
                    ? b64chars.charAt( ord         & 63) : '=');
        }
        return urisafe ? mkUriSafe(b64) : b64;
    };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob && typeof global.atob == 'function'
        ? function(a){ return global.atob(a) } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = function(a) { return btou(_atob(a)) };
    var _fromURI = function(a) {
        return String(a).replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/'
        }).replace(/[^A-Za-z0-9\+\/]/g, '');
    };
    var decode = function(a){
        return _decode(_fromURI(a));
    };
    var toUint8Array;
    if (global.Uint8Array) toUint8Array = function(a) {
        return Uint8Array.from(atob(_fromURI(a)), function(c) {
            return c.charCodeAt(0);
        });
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));


/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ "./src/app/components/class-media-uploading/class-media-uploading.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/class-media-uploading/class-media-uploading.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-photo img,\n.preview-image {\n  max-width: 300px;\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2xhc3MtbWVkaWEtdXBsb2FkaW5nL2NsYXNzLW1lZGlhLXVwbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3MtbWVkaWEtdXBsb2FkaW5nL2NsYXNzLW1lZGlhLXVwbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBob3RvIGltZyxcbi5wcmV2aWV3LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/class-media-uploading/class-media-uploading.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/class-media-uploading/class-media-uploading.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClassMediaUploadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMediaUploadingComponent", function() { return ClassMediaUploadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_services_teacher_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/teacher/upload.service */ "./src/app/services/teacher/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassMediaUploadingComponent = /** @class */ (function () {
    function ClassMediaUploadingComponent(store, fb, uploadService) {
        this.store = store;
        this.fb = fb;
        this.uploadService = uploadService;
        this.profileImageUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDuration = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @ViewChild("videoPreview", { static: false }) videoPreview: ElementRef;
        // Reactive form
        this.profileImageForm = this.fb.group({
            image: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.fileName = "";
        this.videoPreview = "";
        this.audioPreview = "";
        this.ids = [];
    }
    Object.defineProperty(ClassMediaUploadingComponent.prototype, "file", {
        set: function (file) {
            if (file) {
                this.fileName = file.name;
                this.readURL(file);
                this.profileImageForm.patchValue({
                    image: file,
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ClassMediaUploadingComponent.prototype.ngOnInit = function () {
    };
    /**
     * On profile image file input change
     *
     * @param $event
     */
    // apiService(file, id) {
    //   const data = {
    //     id,
    //     file
    //   }
    //   this.store.dispatch(new AddVideoToClassAction(data));
    // }
    ClassMediaUploadingComponent.prototype.onProfileImageForm = function ($event) {
        // Get the selected file from event
        var file = $event.target.files[0];
        // const chunkSize = 4000000;
        // function getRandomId() {
        //   return Math.floor((Math.random()*12335430)+1);
        // }
        // for (let offset = 0; offset < file.size; offset += chunkSize){
        //   const chunk = file.slice( offset, offset + chunkSize );
        //   // this.apiService(chunk, getRandomId())
        // }
        // this.uploadService.uploadFile(file, file.name);
        if (file) {
            // Update form value
            this.profileImageForm.patchValue({
                image: file,
            });
            this.fileName = file.name;
            this.profileImageUploaded.emit(file);
            this.readURL(file);
        }
    };
    ClassMediaUploadingComponent.prototype.setFileInfo = function (event) {
        var _this = this;
        var attachedFile = event.target.files[0];
        var duration;
        var video = document.createElement("video");
        video.preload = "metadata";
        var setData = function (videoDuration) {
            _this.setDuration.emit(videoDuration);
        };
        video.onloadedmetadata = function () {
            window.URL.revokeObjectURL(video.src);
            setData(video.duration);
            duration = video.duration;
        };
        video.src = URL.createObjectURL(attachedFile);
    };
    ClassMediaUploadingComponent.prototype.readURL = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            if (file.type.includes("mp4")) {
                _this.videoPreview = file.name;
                _this.audioPreview = file.name;
            }
            else if (file.type.startsWith("image")) {
                _this.imagePreview &&
                    (_this.imagePreview.nativeElement.src = e.target.result);
            }
            else if (file.type.startsWith("video")) {
                _this.videoPreview = file.name;
            }
            else {
                _this.audioPreview = file.name;
            }
        };
        reader.readAsDataURL(file);
    };
    ClassMediaUploadingComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _src_app_services_teacher_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "requestStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassMediaUploadingComponent.prototype, "videoDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", File),
        __metadata("design:paramtypes", [File])
    ], ClassMediaUploadingComponent.prototype, "file", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClassMediaUploadingComponent.prototype, "profileImageUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClassMediaUploadingComponent.prototype, "setDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imagePreview", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClassMediaUploadingComponent.prototype, "imagePreview", void 0);
    ClassMediaUploadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-class-media-uploading",
            template: __webpack_require__(/*! raw-loader!./class-media-uploading.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/class-media-uploading/class-media-uploading.component.html"),
            styles: [__webpack_require__(/*! ./class-media-uploading.component.scss */ "./src/app/components/class-media-uploading/class-media-uploading.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _src_app_services_teacher_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], ClassMediaUploadingComponent);
    return ClassMediaUploadingComponent;
}());



/***/ }),

/***/ "./src/app/components/class-media-uploading/class-media-uploading.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/class-media-uploading/class-media-uploading.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ClassMediaUploadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMediaUploadingModule", function() { return ClassMediaUploadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _class_media_uploading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-media-uploading.component */ "./src/app/components/class-media-uploading/class-media-uploading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClassMediaUploadingModule = /** @class */ (function () {
    function ClassMediaUploadingModule() {
    }
    ClassMediaUploadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_class_media_uploading_component__WEBPACK_IMPORTED_MODULE_6__["ClassMediaUploadingComponent"]],
            exports: [_class_media_uploading_component__WEBPACK_IMPORTED_MODULE_6__["ClassMediaUploadingComponent"]]
        })
    ], ClassMediaUploadingModule);
    return ClassMediaUploadingModule;
}());



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

/***/ "./src/app/components/errors/errors.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/errors/errors.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/errors/errors.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/errors/errors.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
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

var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent() {
    }
    ErrorsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorsComponent.prototype, "errors", void 0);
    ErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errors',
            template: __webpack_require__(/*! raw-loader!./errors.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/errors/errors.component.html"),
            styles: [__webpack_require__(/*! ./errors.component.scss */ "./src/app/components/errors/errors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/components/errors/errors.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/errors/errors.module.ts ***!
  \****************************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.component */ "./src/app/components/errors/errors.component.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_errors_component__WEBPACK_IMPORTED_MODULE_2__["ErrorsComponent"]],
            exports: [_errors_component__WEBPACK_IMPORTED_MODULE_2__["ErrorsComponent"]]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/components/profile-image-edit/profile-image-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/profile-image-edit/profile-image-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-photo img,\n.preview-image {\n  max-width: 300px;\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1pbWFnZS1lZGl0L3Byb2ZpbGUtaW1hZ2UtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1pbWFnZS1lZGl0L3Byb2ZpbGUtaW1hZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBob3RvIGltZyxcbi5wcmV2aWV3LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile-image-edit/profile-image-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profile-image-edit/profile-image-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileImageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageEditComponent", function() { return ProfileImageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileImageEditComponent = /** @class */ (function () {
    function ProfileImageEditComponent(fb) {
        this.fb = fb;
        this.profileImageUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Reactive form
        this.profileImageForm = this.fb.group({
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.fileName = '';
    }
    Object.defineProperty(ProfileImageEditComponent.prototype, "file", {
        set: function (file) {
            if (file) {
                this.fileName = file.name;
                this.readURL(file);
                this.profileImageForm.patchValue({
                    image: file
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ProfileImageEditComponent.prototype.ngOnInit = function () { };
    /**
     * On profile image file input change
     *
     * @param $event
     */
    ProfileImageEditComponent.prototype.onProfileImageForm = function ($event) {
        // Get the selected file from event
        var file = $event.target.files[0];
        if (file) {
            // Update form value
            this.profileImageForm.patchValue({
                image: file
            });
            this.fileName = file.name;
            this.profileImageUploaded.emit(file);
            this.readURL(file);
        }
    };
    ProfileImageEditComponent.prototype.readURL = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imagePreview.nativeElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    ProfileImageEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileImageEditComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileImageEditComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileImageEditComponent.prototype, "requestStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", File),
        __metadata("design:paramtypes", [File])
    ], ProfileImageEditComponent.prototype, "file", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProfileImageEditComponent.prototype, "profileImageUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imagePreview', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileImageEditComponent.prototype, "imagePreview", void 0);
    ProfileImageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-image-edit',
            template: __webpack_require__(/*! raw-loader!./profile-image-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile-image-edit/profile-image-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-image-edit.component.scss */ "./src/app/components/profile-image-edit/profile-image-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProfileImageEditComponent);
    return ProfileImageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-image-edit/profile-image-edit.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile-image-edit/profile-image-edit.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileImageEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageEditModule", function() { return ProfileImageEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _profile_image_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-image-edit.component */ "./src/app/components/profile-image-edit/profile-image-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileImageEditModule = /** @class */ (function () {
    function ProfileImageEditModule() {
    }
    ProfileImageEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_profile_image_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProfileImageEditComponent"]],
            exports: [_profile_image_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProfileImageEditComponent"]]
        })
    ], ProfileImageEditModule);
    return ProfileImageEditModule;
}());



/***/ }),

/***/ "./src/app/components/teacher-add-class-form/teacher-add-class-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/teacher-add-class-form/teacher-add-class-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin: 40px 0; }\n\na.skip-btn {\n  cursor: pointer;\n  margin-top: 30px;\n  display: block;\n  text-align: center; }\n\n.status-message {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 2rem; }\n\n.switch-btn-content {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  margin-bottom: 1rem; }\n\n.switch-btn-content button {\n    background: beige;\n    cursor: pointer;\n    padding: 16px 24px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-family: \"Futura Std Medium\", serif;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0.5px;\n    background-color: #fff;\n    color: #322b23;\n    border: none; }\n\n.switch-btn-content button.active-btn {\n      color: #fff;\n      background-color: #322b23; }\n\n.switch-btn-content button:first-child {\n      border-radius: 100px 0 0 100px; }\n\n.switch-btn-content button:last-child {\n      border-radius: 0 100px 100px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci1hZGQtY2xhc3MtZm9ybS90ZWFjaGVyLWFkZC1jbGFzcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7RUFFVixtQkFBbUIsRUFBQTs7QUFOckI7SUFTSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVksRUFBQTs7QUF2QmhCO01BMEJNLFdBQVc7TUFDWCx5QkFBeUIsRUFBQTs7QUEzQi9CO01BK0JNLDhCQUE4QixFQUFBOztBQS9CcEM7TUFtQ00sOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXItYWRkLWNsYXNzLWZvcm0vdGVhY2hlci1hZGQtY2xhc3MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbmEuc2tpcC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAycmVtO1xufVxuXG4uc3dpdGNoLWJ0bi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwO1xuICAvLyBib3JkZXI6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFN0ZCBNZWRpdW1cIiwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMzMjJiMjM7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJi5hY3RpdmUtYnRuIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmIyMztcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMCAxMDBweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAxMDBweCAxMDBweCAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/teacher-add-class-form/teacher-add-class-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/teacher-add-class-form/teacher-add-class-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TeacherAddClassFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAddClassFormComponent", function() { return TeacherAddClassFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.actions */ "./src/app/store/modules/teachers/teachers.actions.ts");
/* harmony import */ var _src_app_store_modules_spinner_spinner_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/spinner/spinner.actions */ "./src/app/store/modules/spinner/spinner.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
/* harmony import */ var _src_app_services_teacher_teacher_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/services/teacher/teacher.service */ "./src/app/services/teacher/teacher.service.ts");
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

















var TeacherAddClassFormComponent = /** @class */ (function () {
    function TeacherAddClassFormComponent(fb, store, router, spinner, utils, teacherService) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.spinner = spinner;
        this.utils = utils;
        this.teacherService = teacherService;
        this.errors = null;
        this.ctaText = "Save";
        this.succesText = "Your class has been successfully added";
        this.continueClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__["RequestStatus"].success; }));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserActive"]));
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTeachersObject"]));
        this.formData$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_15__["selectOnboardingTeacherFormData"]));
        this.status = null;
        this.user = null;
        this.teacher = null;
        this.stepOneForm = this.fb.group({
            title: null,
            descriptionText: null,
            type: null,
            thumbnail: null,
            file_item: null,
            video_item: null,
            props: null,
            difficulty: null,
            end_timestamp: null,
        });
        this.stepOneFormSubmitted = false;
        this.formArrays = ["links"];
        this.linksGroup = this.stepOneForm.get("links");
        this.isLinksValid = true;
        this.viewTypes = [
            { name: "Video", value: "video", active: true },
            { name: "Audio", value: "audio", active: false },
        ];
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__["RequestStatus"];
        this.requestUpdating = false;
        this.successAdd = false;
        this.isVideo = true;
    }
    TeacherAddClassFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["CheckUserToken"]());
        this.subscriptions.push(this.formData$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (item) { return !!item; }))
            .subscribe(function (formData) {
            _this.fillForm(formData);
        }));
        // showoverlay
        this.subscriptions.push(this.user$.subscribe(function (user) {
            if (!_this.user && user && user.creator) {
                _this.fillForm(user.creator);
            }
            if (!_this.user) {
                _this.user = user;
                _this.spinner.hide();
            }
        }));
        this.subscriptions.push(this.teacher$.subscribe(function (obj) {
            if (obj.addedNewClass) {
                _this.spinner.hide();
                _this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].teacher]);
                _this.store.dispatch(new _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_6__["AddClassSuccessEnd"]());
            }
        }));
    };
    Object.defineProperty(TeacherAddClassFormComponent.prototype, "selectedthumbnail", {
        get: function () {
            if (typeof this.stepOneForm.get("thumbnail").value === "object") {
                return this.stepOneForm.get("thumbnail").value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TeacherAddClassFormComponent.prototype.ngAfterViewInit = function () { };
    TeacherAddClassFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.user = null;
    };
    TeacherAddClassFormComponent.prototype.fillForm = function (creator) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.keys(this.stepOneForm.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                var formEl = this.stepOneForm.controls[control];
                if (creator[control]) {
                    if (this.formArrays.includes(control)) {
                        this.fillFormArray(control, creator[control]);
                    }
                    else {
                        formEl.setValue(creator[control]);
                    }
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
    };
    TeacherAddClassFormComponent.prototype.createExternalUrlField = function () {
        return this.fb.group({
            id: "",
            label: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(_helpers__WEBPACK_IMPORTED_MODULE_12__["urlValidator"])]],
        });
    };
    TeacherAddClassFormComponent.prototype.fillFormArray = function (formArrayName, arrayValues) {
        var _this = this;
        var controlArray = this.stepOneForm.controls[formArrayName];
        arrayValues.map(function (item) {
            controlArray.push(_this.fb.group(item));
        });
    };
    TeacherAddClassFormComponent.prototype.handleNextClick = function () {
        var _this = this;
        var e_2, _a;
        this.continueClicked.emit(true);
        this.stepOneFormSubmitted = true;
        this.stepOneForm.markAllAsTouched();
        if (this.stepOneForm.invalid) {
            this.log("TEACHER PROFILE FORM is invalid!!");
            Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["formValidationScrollFocus"])(this.stepOneForm, this.formFields);
            return;
        }
        // build formdata
        var payload = new FormData();
        try {
            for (var _b = __values(Object.keys(this.stepOneForm.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                var val = this.stepOneForm.get(control).value;
                if (control == "video_item") {
                    val === null ? payload.append("end_timestamp", "") : "";
                }
                if (val !== null) {
                    // if (control == "video_item" || control == "file_item" ) {
                    //   payload.append(control, val)
                    // } else 
                    if (control === "thumbnail") {
                        if (typeof val !== "string") {
                            payload.append(control, val);
                        }
                    }
                    else {
                        if (control == "descriptionText") {
                            payload.append("description", val);
                        }
                        else {
                            payload.append(control, val);
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.log("updating...");
        this.spinner.show();
        this.requestUpdating = true;
        payload.forEach(function (field) { return _this.log("field: ", field); });
        this.teacherService.addClass(payload);
        // addClass
        this.store.dispatch(new _src_app_store_modules_spinner_spinner_actions__WEBPACK_IMPORTED_MODULE_7__["SetAddClassTextAction"]());
        Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["resetForm"])(this.stepOneForm);
        this.successAdd = true;
    };
    TeacherAddClassFormComponent.prototype.onAddMediaUploaded = function ($event, control) {
        this.stepOneForm.get(control).setValue($event);
    };
    TeacherAddClassFormComponent.prototype.setDurationValue = function (duaration) {
        this.stepOneForm.get("end_timestamp").setValue(duaration);
    };
    TeacherAddClassFormComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).logall.apply(_a, __spread([text, this.constructor.name], args));
    };
    TeacherAddClassFormComponent.prototype.onProfileImageUploaded = function ($event) {
        this.stepOneForm.get("image").setValue($event);
    };
    TeacherAddClassFormComponent.prototype.switchTypes = function (type) {
        var _this = this;
        this.viewTypes.forEach(function (item) {
            if (item.value === type) {
                item.active = true;
                _this.isVideo = item.value === "video" ? true : false;
            }
            else {
                item.active = false;
            }
        });
    };
    TeacherAddClassFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_13__["SpinnerOverlayService"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"] },
        { type: _src_app_services_teacher_teacher_service__WEBPACK_IMPORTED_MODULE_16__["TeacherService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeacherAddClassFormComponent.prototype, "errors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherAddClassFormComponent.prototype, "ctaText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherAddClassFormComponent.prototype, "succesText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TeacherAddClassFormComponent.prototype, "continueClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("validatedField"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TeacherAddClassFormComponent.prototype, "formFields", void 0);
    TeacherAddClassFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-teacher-add-class-form",
            template: __webpack_require__(/*! raw-loader!./teacher-add-class-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher-add-class-form/teacher-add-class-form.component.html"),
            styles: [__webpack_require__(/*! ./teacher-add-class-form.component.scss */ "./src/app/components/teacher-add-class-form/teacher-add-class-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_13__["SpinnerOverlayService"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"],
            _src_app_services_teacher_teacher_service__WEBPACK_IMPORTED_MODULE_16__["TeacherService"]])
    ], TeacherAddClassFormComponent);
    return TeacherAddClassFormComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher-add-class-form/teacher-add-class-form.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/teacher-add-class-form/teacher-add-class-form.module.ts ***!
  \************************************************************************************/
/*! exports provided: TeacherAddClassFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAddClassFormModule", function() { return TeacherAddClassFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _teacher_add_class_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-add-class-form.component */ "./src/app/components/teacher-add-class-form/teacher-add-class-form.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _complete_complete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../complete/complete.module */ "./src/app/components/complete/complete.module.ts");
/* harmony import */ var _class_media_uploading_class_media_uploading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../class-media-uploading/class-media-uploading.module */ "./src/app/components/class-media-uploading/class-media-uploading.module.ts");
/* harmony import */ var _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TeacherAddClassFormModule = /** @class */ (function () {
    function TeacherAddClassFormModule() {
    }
    TeacherAddClassFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _complete_complete_module__WEBPACK_IMPORTED_MODULE_7__["CompleteModule"],
                _class_media_uploading_class_media_uploading_module__WEBPACK_IMPORTED_MODULE_8__["ClassMediaUploadingModule"],
                _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_9__["JiFormsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_teacher_add_class_form_component__WEBPACK_IMPORTED_MODULE_5__["TeacherAddClassFormComponent"]],
            exports: [_teacher_add_class_form_component__WEBPACK_IMPORTED_MODULE_5__["TeacherAddClassFormComponent"]]
        })
    ], TeacherAddClassFormModule);
    return TeacherAddClassFormModule;
}());



/***/ }),

/***/ "./src/app/components/teacher-profile-form/teacher-profile-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/teacher-profile-form/teacher-profile-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin: 40px 0; }\n\na.skip-btn {\n  cursor: pointer;\n  margin-top: 30px;\n  display: block;\n  text-align: center; }\n\n.switch-btn-content {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 0;\n  margin-bottom: 1rem; }\n\n.switch-btn-content button {\n    background: beige;\n    cursor: pointer;\n    padding: 16px 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-family: \"Futura Std Medium\", serif;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0.5px;\n    background-color: #fff;\n    color: #322b23;\n    border: none; }\n\n@media screen and (max-width: 500px) {\n      .switch-btn-content button {\n        width: 0; } }\n\n.switch-btn-content button.active-btn {\n      color: #fff;\n      background-color: #322b23; }\n\n.switch-btn-content button:first-child {\n      border-radius: 100px 0 0 100px; }\n\n.switch-btn-content button:last-child {\n      border-radius: 0 100px 100px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci1wcm9maWxlLWZvcm0vdGVhY2hlci1wcm9maWxlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBRVYsbUJBQW1CLEVBQUE7O0FBTHJCO0lBUUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBRVo7TUF4Qko7UUF5Qk0sUUFBUSxFQUFBLEVBZVg7O0FBeENIO01BNkJNLFdBQVc7TUFDWCx5QkFBeUIsRUFBQTs7QUE5Qi9CO01Ba0NNLDhCQUE4QixFQUFBOztBQWxDcEM7TUFzQ00sOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXItcHJvZmlsZS1mb3JtL3RlYWNoZXItcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW46IDQwcHggMDtcbn1cblxuYS5za2lwLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3aXRjaC1idG4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAwO1xuICAvLyBib3JkZXI6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFN0ZCBNZWRpdW1cIiwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMzMjJiMjM7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICYuYWN0aXZlLWJ0biB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjJiMjM7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweCAwIDAgMTAwcHg7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwcHggMTAwcHggMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/teacher-profile-form/teacher-profile-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/teacher-profile-form/teacher-profile-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TeacherProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileFormComponent", function() { return TeacherProfileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.actions */ "./src/app/store/modules/onboarding/onboarding.actions.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.actions */ "./src/app/store/modules/teachers/teachers.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
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















var TeacherProfileFormComponent = /** @class */ (function () {
    function TeacherProfileFormComponent(fb, store, userService, router, spinner, utils) {
        this.fb = fb;
        this.store = store;
        this.userService = userService;
        this.router = router;
        this.spinner = spinner;
        this.utils = utils;
        this.errors = null;
        this.ctaText = "Next";
        this.allowSkip = false;
        this.continueClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return Boolean(status) && status === _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__["RequestStatus"].success; }));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserActive"]));
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTeachersObject"]));
        this.formData$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_14__["selectOnboardingTeacherFormData"]));
        this.status = null;
        this.user = null;
        this.teacher = null;
        this.viewCurrences = [
            { name: "EUR", value: "eur", active: true },
            { name: "USD", value: "usd", active: false },
            { name: "AUD", value: "aud", active: false },
            { name: "GBP", value: "gbp", active: false },
        ];
        this.stepOneForm = this.fb.group({
            profile_title: null,
            image: null,
            // vimeo_url: ['', [Validators.pattern(urlValidator)]],
            description: null,
            city: null,
            style: null,
            links: this.fb.array([]),
            news_events: null,
            qualifications: null,
            currency: null,
        });
        this.stepOneFormSubmitted = false;
        this.formArrays = ["links"];
        this.linksGroup = this.stepOneForm.get("links");
        this.isLinksValid = true;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_10__["RequestStatus"];
        this.requestUpdating = false;
    }
    TeacherProfileFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // return stored form data when leave page
        this.subscriptions.push(this.formData$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (item) { return !!item; }))
            .subscribe(function (formData) {
            _this.onProfileImageUploaded(formData.image);
            _this.fillForm(formData);
        }));
        // showoverlay
        this.subscriptions.push(this.teacher$.subscribe(function (obj) {
            var state;
            if (_this.hasProfileChanged(_this.teacher, obj.loggedinTeacher)) {
                state = {
                    data: { message: "Your profile has been successfully updated" },
                };
            }
            if (_this.requestUpdating) {
                _this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].profile], {
                    state: state,
                });
            }
            _this.teacher = obj.loggedinTeacher || null;
        }), this.user$.subscribe(function (user) {
            if (!_this.user && user && user.creator) {
                _this.fillForm(user.creator);
                _this.setCurrency();
            }
            if (!_this.user) {
                _this.user = user;
                _this.spinner.hide();
            }
        }));
    };
    Object.defineProperty(TeacherProfileFormComponent.prototype, "selectedImage", {
        get: function () {
            if (typeof this.stepOneForm.get("image").value === "object") {
                return this.stepOneForm.get("image").value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TeacherProfileFormComponent.prototype.ngAfterViewInit = function () { };
    TeacherProfileFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.user = null;
    };
    TeacherProfileFormComponent.prototype.debugAutofill = function () {
        this.stepOneForm.controls["profile_title"].setValue("Profile value");
        this.stepOneForm.controls["qualifications"].setValue("Yoga");
        this.stepOneForm.controls["description"].setValue("About me");
        this.stepOneForm.controls["city"].setValue("Talladiland");
        this.stepOneForm.controls["style"].setValue("Yoga");
        this.stepOneForm.controls["news_events"].setValue("Something cool just happened!!");
        this.stepOneForm.controls["currrency"].setValue("Euro");
    };
    TeacherProfileFormComponent.prototype.fillForm = function (creator) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.keys(this.stepOneForm.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                var formEl = this.stepOneForm.controls[control];
                if (creator[control]) {
                    if (this.formArrays.includes(control)) {
                        this.fillFormArray(control, creator[control]);
                    }
                    else {
                        formEl.setValue(creator[control]);
                    }
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
    };
    /**
     * Handle click add another external url button
     */
    TeacherProfileFormComponent.prototype.handleAddAnotherExternalUrlClick = function () {
        var _this = this;
        this.isLinksValid = true;
        this.linksGroup.value.map(function (link) {
            if (!link.url || !link.label) {
                _this.isLinksValid = false;
            }
        });
        if (this.isLinksValid) {
            this.linksGroup.push(this.createExternalUrlField());
        }
    };
    /**
     * Create external url field
     */
    TeacherProfileFormComponent.prototype.createExternalUrlField = function () {
        return this.fb.group({
            id: "",
            label: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(_helpers__WEBPACK_IMPORTED_MODULE_11__["urlValidator"])]],
        });
    };
    TeacherProfileFormComponent.prototype.fillFormArray = function (formArrayName, arrayValues) {
        var _this = this;
        var controlArray = this.stepOneForm.controls[formArrayName];
        arrayValues.map(function (item) {
            controlArray.push(_this.fb.group(item));
        });
    };
    /**
     * Handle click next button
     */
    TeacherProfileFormComponent.prototype.handleNextClick = function (skipClicked) {
        var _this = this;
        var e_2, _a;
        if (skipClicked) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["resetForm"])(this.stepOneForm);
        }
        else {
            this.continueClicked.emit(true);
        }
        this.stepOneFormSubmitted = true;
        this.stepOneForm.markAllAsTouched();
        if (this.stepOneForm.invalid) {
            this.log("TEACHER PROFILE FORM is invalid!!");
            Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["formValidationScrollFocus"])(this.stepOneForm, this.formFields);
            return;
        }
        // build formdata
        var payload = new FormData();
        try {
            for (var _b = __values(Object.keys(this.stepOneForm.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                var val = this.stepOneForm.get(control).value;
                if (val !== null) {
                    if (control === "image") {
                        if (typeof val !== "string") {
                            payload.append(control, val);
                        }
                    }
                    else if (["links"].includes(control)) {
                        if (val.length > 0) {
                            var arrayVals = val.map(function (v) {
                                return {
                                    url: v.url,
                                    label: v.label,
                                    id: v.id ? v.id : null,
                                };
                            });
                            payload.append(control, JSON.stringify(arrayVals));
                        }
                    }
                    else {
                        payload.append(control, val);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.user.creator.user) {
            this.log("updating...");
            this.spinner.show();
            this.requestUpdating = true;
            payload.forEach(function (field) { return _this.log("field: ", field); });
            // If the user exists just update
            this.store.dispatch(new _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateTeacherRequestAction"](payload));
        }
        else {
            this.log("creating...");
            payload.forEach(function (field) { return _this.log("field: ", field); });
            // Store first step
            this.store.dispatch(new _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_6__["OnboardingTeacherStepOneClearFormAction"]());
            this.store.dispatch(new _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_6__["OnboardingTeacherStepOneRequestAction"](payload));
        }
    };
    TeacherProfileFormComponent.prototype.removeAddress = function (index) {
        this.linksGroup.removeAt(index);
    };
    TeacherProfileFormComponent.prototype.onProfileImageUploaded = function ($event) {
        this.stepOneForm.get("image").setValue($event);
    };
    TeacherProfileFormComponent.prototype.setCurrency = function (currency) {
        if (currency === void 0) { currency = this.stepOneForm.get("currency").value; }
        this.viewCurrences.forEach(function (item) {
            if (item.value === currency) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
    };
    TeacherProfileFormComponent.prototype.hasProfileChanged = function (oldTeacher, newTeacher) {
        var hasChanged = false;
        if (oldTeacher && newTeacher) {
            this.log(oldTeacher, newTeacher);
            Object.keys(oldTeacher).map(function (key) {
                if (Array.isArray(oldTeacher[key])) {
                    if (oldTeacher[key].length !== oldTeacher[key].length) {
                        hasChanged = true;
                    }
                    else {
                        oldTeacher[key].map(function (item, i) {
                            if (newTeacher[key] && item !== newTeacher[key][i]) {
                                hasChanged = true;
                            }
                        });
                    }
                }
                else {
                    if (oldTeacher[key] !== newTeacher[key]) {
                        hasChanged = true;
                    }
                }
            });
        }
        return hasChanged;
    };
    TeacherProfileFormComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).logall.apply(_a, __spread([text, this.constructor.name], args));
    };
    TeacherProfileFormComponent.prototype.teachersLinkChange = function () {
        // store form data before leave page
        this.store.dispatch(new _src_app_store_modules_onboarding_onboarding_actions__WEBPACK_IMPORTED_MODULE_6__["OnboardingTeacherStepOneStoreFormAction"](this.stepOneForm.value));
        this.router.navigate(["/", _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].teachers]);
    };
    TeacherProfileFormComponent.prototype.switchUserCurrency = function (currency) {
        this.viewCurrences.map(function (item) {
            if (item.value === currency) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
        return this.stepOneForm.controls["currency"].setValue(currency);
    };
    TeacherProfileFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_12__["SpinnerOverlayService"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeacherProfileFormComponent.prototype, "errors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherProfileFormComponent.prototype, "ctaText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherProfileFormComponent.prototype, "allowSkip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TeacherProfileFormComponent.prototype, "continueClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("validatedField"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TeacherProfileFormComponent.prototype, "formFields", void 0);
    TeacherProfileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-teacher-profile-form",
            template: __webpack_require__(/*! raw-loader!./teacher-profile-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher-profile-form/teacher-profile-form.component.html"),
            styles: [__webpack_require__(/*! ./teacher-profile-form.component.scss */ "./src/app/components/teacher-profile-form/teacher-profile-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_12__["SpinnerOverlayService"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"]])
    ], TeacherProfileFormComponent);
    return TeacherProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher-profile-form/teacher-profile-form.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/teacher-profile-form/teacher-profile-form.module.ts ***!
  \********************************************************************************/
/*! exports provided: TeacherProfileFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileFormModule", function() { return TeacherProfileFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _teacher_profile_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-profile-form.component */ "./src/app/components/teacher-profile-form/teacher-profile-form.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _complete_complete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../complete/complete.module */ "./src/app/components/complete/complete.module.ts");
/* harmony import */ var _profile_image_edit_profile_image_edit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-image-edit/profile-image-edit.module */ "./src/app/components/profile-image-edit/profile-image-edit.module.ts");
/* harmony import */ var _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TeacherProfileFormModule = /** @class */ (function () {
    function TeacherProfileFormModule() {
    }
    TeacherProfileFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _complete_complete_module__WEBPACK_IMPORTED_MODULE_7__["CompleteModule"],
                _profile_image_edit_profile_image_edit_module__WEBPACK_IMPORTED_MODULE_8__["ProfileImageEditModule"],
                _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_9__["JiFormsModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_teacher_profile_form_component__WEBPACK_IMPORTED_MODULE_5__["TeacherProfileFormComponent"]],
            exports: [_teacher_profile_form_component__WEBPACK_IMPORTED_MODULE_5__["TeacherProfileFormComponent"]]
        })
    ], TeacherProfileFormModule);
    return TeacherProfileFormModule;
}());



/***/ }),

/***/ "./src/app/components/teacher-stripe-form/teacher-stripe-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/teacher-stripe-form/teacher-stripe-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 40px; }\n\nbutton,\na {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci1zdHJpcGUtZm9ybS90ZWFjaGVyLXN0cmlwZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCOztFQUVJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyLXN0cmlwZS1mb3JtL3RlYWNoZXItc3RyaXBlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG59XG5cbmJ1dHRvbixcbmEge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/teacher-stripe-form/teacher-stripe-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/teacher-stripe-form/teacher-stripe-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TeacherStripeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherStripeFormComponent", function() { return TeacherStripeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherStripeFormComponent = /** @class */ (function () {
    function TeacherStripeFormComponent(fb, store, spinner) {
        this.fb = fb;
        this.store = store;
        this.spinner = spinner;
        this.showForm = true;
        this.introText = '';
        // public creator_type = new FormControl('', [Validators.required]);
        // public stripePlanForm: FormGroup = this.fb.group({
        //     creator_type: this.creator_type,
        //     subscription_cost: ['', [Validators.required]],
        //     subscription_frequency: ['', [Validators.required]],
        //     subscription_free_trial_days: ['', [Validators.required]]
        // });
        // public submitted = false;
        // // Creator type options
        // public creator_typeOptions: FormOptionInterface[] = [
        //     {
        //         id: 1,
        //         value: 'individual',
        //         label: 'Individual'
        //     },
        //     {
        //         id: 2,
        //         value: 'company',
        //         label: 'Business'
        //     }
        // ];
        // // Subscription frequency options
        // public subscription_frequencyOptions: FormOptionInterface[] = [
        //     {
        //         id: 1,
        //         value: 'weekly',
        //         label: 'Weekly'
        //     },
        //     {
        //         id: 2,
        //         value: 'monthly',
        //         label: 'Monthly'
        //     }
        // ];
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (user) { return Boolean(user); }));
        this.teacherStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_3__["selectTeachersStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (status) { return Boolean(status); }));
        this.user = null;
    }
    TeacherStripeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.user$.subscribe(function (user) {
            window.scrollTo(0, 0);
            _this.user = user;
        }), this.teacherStatus$.subscribe(function (status) {
            if (status !== _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_5__["RequestStatus"].pending) {
                // hideoverlay
            }
            else {
                // showoverlay
            }
        }));
    };
    // handleSubmit() {
    //     this.submitted = true;
    //     this.stripePlanForm.markAllAsTouched();
    //     if (this.stripePlanForm.invalid) {
    //         formValidationScrollFocus(this.stripePlanForm, this.formFields);
    //         return;
    //     }
    //     // build formdata
    //     const payload = new FormData();
    //     for (const control of Object.keys(this.stripePlanForm.controls)) {
    //         const val = this.stripePlanForm.get(control).value;
    //         payload.append(control, val);
    //     }
    //     payload.forEach(field => console.log(field));
    //     this.store.dispatch(new UpdateTeacherRequestAction(payload));
    // }
    TeacherStripeFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TeacherStripeFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('validatedField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TeacherStripeFormComponent.prototype, "formFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherStripeFormComponent.prototype, "showForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeacherStripeFormComponent.prototype, "introText", void 0);
    TeacherStripeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-stripe-form',
            template: __webpack_require__(/*! raw-loader!./teacher-stripe-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher-stripe-form/teacher-stripe-form.component.html"),
            styles: [__webpack_require__(/*! ./teacher-stripe-form.component.scss */ "./src/app/components/teacher-stripe-form/teacher-stripe-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"]])
    ], TeacherStripeFormComponent);
    return TeacherStripeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher-stripe-form/teacher-stripe-form.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/teacher-stripe-form/teacher-stripe-form.module.ts ***!
  \******************************************************************************/
/*! exports provided: TeacherStripeFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherStripeFormModule", function() { return TeacherStripeFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _teacher_stripe_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-stripe-form.component */ "./src/app/components/teacher-stripe-form/teacher-stripe-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/components/icon/icon.module */ "./src/app/components/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TeacherStripeFormModule = /** @class */ (function () {
    function TeacherStripeFormModule() {
    }
    TeacherStripeFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_3__["JiFormsModule"],
                _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_6__["IconModule"]
            ],
            exports: [
                _teacher_stripe_form_component__WEBPACK_IMPORTED_MODULE_1__["TeacherStripeFormComponent"]
            ],
            declarations: [
                _teacher_stripe_form_component__WEBPACK_IMPORTED_MODULE_1__["TeacherStripeFormComponent"]
            ],
            providers: [],
        })
    ], TeacherStripeFormModule);
    return TeacherStripeFormModule;
}());



/***/ }),

/***/ "./src/app/services/teacher/upload.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/teacher/upload.service.ts ***!
  \****************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tus_js_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tus-js-client */ "./node_modules/tus-js-client/lib.esm/browser/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UploadService = /** @class */ (function () {
    function UploadService() {
        this.uploadStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.uploadProgress = this.uploadStatus.asObservable();
        this.fileStatusArr = [];
    }
    UploadService.prototype.uploadFile = function (file, filename) {
        var _this = this;
        console.log(file, filename);
        var fileStatus = {
            filename: filename,
            progress: 0,
            hash: "",
            uuid: ""
        };
        this.fileStatusArr.push(fileStatus);
        this.uploadStatus.next(this.fileStatusArr);
        var upload = new tus_js_client__WEBPACK_IMPORTED_MODULE_2__["Upload"](file, {
            endpoint: "https://stage-api.journeyinto.com/v1/recordings/chunked-upload/",
            retryDelays: [0, 3000, 6000, 12000, 24000],
            chunkSize: 4000000,
            metadata: {
                filename: filename,
                filetype: file.type
            },
            onError: function (error) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(error);
                    return [2 /*return*/, false];
                });
            }); },
            onChunkComplete: function (chunkSize, bytesAccepted, bytesTotal) {
                _this.fileStatusArr.forEach(function (value) {
                    if (value.filename === filename) {
                        value.progress = Math.floor((bytesAccepted / bytesTotal) * 100);
                        value.uuid = upload.url.split("/").slice(-1)[0];
                    }
                });
                _this.uploadStatus.next(_this.fileStatusArr);
            },
            onSuccess: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.fileStatusArr.forEach(function (value) {
                        if (value.filename === filename) {
                            value.progress = 100;
                        }
                    });
                    this.uploadStatus.next(this.fileStatusArr);
                    return [2 /*return*/, true];
                });
            }); }
        });
        upload.start();
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/store/modules/onboarding/onboarding.selectors.ts":
/*!******************************************************************!*\
  !*** ./src/app/store/modules/onboarding/onboarding.selectors.ts ***!
  \******************************************************************/
/*! exports provided: selectOnboardingState, selectOnboardingStatus, selectOnboardingEntity, selectOnboardingMessage, selectOnboardingIscompleted, selectOnboardingErrors, selectOnboardingTeacherFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingState", function() { return selectOnboardingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingStatus", function() { return selectOnboardingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingEntity", function() { return selectOnboardingEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingMessage", function() { return selectOnboardingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingIscompleted", function() { return selectOnboardingIscompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingErrors", function() { return selectOnboardingErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnboardingTeacherFormData", function() { return selectOnboardingTeacherFormData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/adapters */ "./src/app/store/helpers/adapters.ts");


var selectOnboardingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('onboarding');
var selectOnboardingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getStatus"]);
var selectOnboardingEntity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getEntity"]);
var selectOnboardingMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingState, function (state) {
    return state.message;
});
var selectOnboardingIscompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingEntity, function (entity) {
    return entity.isCompleted;
});
var selectOnboardingErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getErrors"]);
var selectOnboardingTeacherFormData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOnboardingState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getFormData"]);


/***/ })

}]);
//# sourceMappingURL=default~pages-onboarding-onboarding-module~pages-teacher-teacher-module.220b9897aa8e0e0bca92.js.map