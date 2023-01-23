(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-onboarding-onboarding-module~pages-poses-poses-module~pages-r~5bd65dcf"],{

/***/ "./src/app/pipes/excerpt.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/excerpt.pipe.ts ***!
  \***************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit, preserveTags, wordBreak, suffix, moreLink) {
        if (limit === void 0) { limit = 140; }
        if (preserveTags === void 0) { preserveTags = true; }
        if (wordBreak === void 0) { wordBreak = false; }
        if (suffix === void 0) { suffix = '...'; }
        if (moreLink === void 0) { moreLink = ''; }
        var arr = text.replace(/</g, '\n<')
            .replace(/>/g, '>\n')
            .replace(/\n\n/g, '\n')
            .replace(/^\n/g, '')
            .replace(/\n$/g, '')
            .split('\n');
        var sum = 0;
        var row;
        var rowCut;
        var cut;
        var add;
        var tagMatch;
        var tagName;
        var more = false;
        var tagStack = [];
        for (var i = 0; i < arr.length; i++) {
            row = arr[i];
            // count multiple spaces as one character
            rowCut = row.replace(/[ ]+/g, ' ');
            if (!row.length) {
                continue;
            }
            if (row[0] !== '<') {
                if (sum >= limit) {
                    row = '';
                }
                else if ((sum + rowCut.length) >= limit) {
                    cut = limit - sum;
                    if (row[cut - 1] === ' ') {
                        while (cut) {
                            cut -= 1;
                            if (row[cut - 1] !== ' ') {
                                break;
                            }
                        }
                    }
                    else {
                        add = row.substring(cut).split('').indexOf(' ');
                        // break on halh of word
                        if (!wordBreak) {
                            if (add !== -1) {
                                cut += add;
                            }
                            else {
                                cut = row.length;
                            }
                        }
                    }
                    row = row.substring(0, cut) + suffix;
                    if (moreLink) {
                        row += '<a href="' + moreLink + '" style="display:inline">»</a>';
                    }
                    sum = limit;
                    more = true;
                }
                else {
                    sum += rowCut.length;
                }
            }
            else if (!preserveTags) {
                row = '';
            }
            else if (sum >= limit) {
                tagMatch = row.match(/[a-zA-Z]+/);
                tagName = tagMatch ? tagMatch[0] : '';
                if (tagName) {
                    if (row.substring(0, 2) !== '</') {
                        tagStack.push(tagName);
                        row = '';
                    }
                    else {
                        while (tagStack[tagStack.length - 1] !== tagName && tagStack.length) {
                            tagStack.pop();
                        }
                        if (tagStack.length) {
                            row = '';
                        }
                        tagStack.pop();
                    }
                }
                else {
                    row = '';
                }
            }
            arr[i] = row;
        }
        return arr.join('\n').replace(/\n/g, '');
    };
    ExcerptPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'excerpt'
        })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "./src/app/pipes/getParsedTextWithHref.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/getParsedTextWithHref.pipe.ts ***!
  \*****************************************************/
/*! exports provided: GetParsedTextWithHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetParsedTextWithHref", function() { return GetParsedTextWithHref; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetParsedTextWithHref = /** @class */ (function () {
    function GetParsedTextWithHref() {
    }
    GetParsedTextWithHref.prototype.transform = function (value) {
        if (!value) {
            console.error("can not parse", value);
            return "";
        }
        var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,3}(:[0-9]{1,5})?(\/.*)?$/gm;
        pattern.lastIndex = 0;
        var regExpForSplit = /\s/gm;
        var brTagRegExp = /<br>*/gm;
        var parsedText = value
            .replace(brTagRegExp, " <br> ")
            .split(regExpForSplit)
            .map(function (word) {
            if (pattern.test(word)) {
                return word.match("http")
                    ? "<a target=\"blank\" href=\"" + word + "\">" + word + "</a>"
                    : "<a target=\"blank\" href=\"http://" + word + "\">" + word + "</a>";
            }
            return word;
        })
            .join(" ");
        return parsedText;
        // return value.replace(/(\r\n|\n|\r)/gm, "<br>");
    };
    GetParsedTextWithHref = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "getParsedTextWithHref" })
    ], GetParsedTextWithHref);
    return GetParsedTextWithHref;
}());



/***/ }),

/***/ "./src/app/pipes/minutes-seconds.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/minutes-seconds.pipe.ts ***!
  \***********************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MinuteSecondsPipe = /** @class */ (function () {
    function MinuteSecondsPipe() {
    }
    MinuteSecondsPipe.prototype.transform = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_1__()
            .set({ hour: 0, minute: 0, second: time, millisecond: 0 })
            .format('HH:mm:ss');
    };
    MinuteSecondsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'minuteSeconds'
        })
    ], MinuteSecondsPipe);
    return MinuteSecondsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minutes-seconds.pipe */ "./src/app/pipes/minutes-seconds.pipe.ts");
/* harmony import */ var _safe_video_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe-video.pipe */ "./src/app/pipes/safe-video.pipe.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excerpt.pipe */ "./src/app/pipes/excerpt.pipe.ts");
/* harmony import */ var _replaceLineBreaks_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./replaceLineBreaks.pipe */ "./src/app/pipes/replaceLineBreaks.pipe.ts");
/* harmony import */ var _getParsedTextWithHref_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getParsedTextWithHref.pipe */ "./src/app/pipes/getParsedTextWithHref.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__["MinuteSecondsPipe"],
                _safe_video_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeVideoPipe"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHTMLPipe"],
                _excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__["ExcerptPipe"],
                _replaceLineBreaks_pipe__WEBPACK_IMPORTED_MODULE_6__["ReplaceLineBreaks"],
                _getParsedTextWithHref_pipe__WEBPACK_IMPORTED_MODULE_7__["GetParsedTextWithHref"],
            ],
            exports: [
                _minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__["MinuteSecondsPipe"],
                _safe_video_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeVideoPipe"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHTMLPipe"],
                _excerpt_pipe__WEBPACK_IMPORTED_MODULE_5__["ExcerptPipe"],
                _replaceLineBreaks_pipe__WEBPACK_IMPORTED_MODULE_6__["ReplaceLineBreaks"],
                _getParsedTextWithHref_pipe__WEBPACK_IMPORTED_MODULE_7__["GetParsedTextWithHref"]
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/replaceLineBreaks.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/replaceLineBreaks.pipe.ts ***!
  \*************************************************/
/*! exports provided: ReplaceLineBreaks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceLineBreaks", function() { return ReplaceLineBreaks; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplaceLineBreaks = /** @class */ (function () {
    function ReplaceLineBreaks() {
    }
    ReplaceLineBreaks.prototype.transform = function (value) {
        return value.replace(/(\r\n|\n|\r)/gm, "<br>");
    };
    ReplaceLineBreaks = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "replaceLineBreaks" })
    ], ReplaceLineBreaks);
    return ReplaceLineBreaks;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (string) {
        return this.sanitizer.bypassSecurityTrustHtml(string);
    };
    SafeHTMLPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHTML' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe-video.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/safe-video.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeVideoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeVideoPipe", function() { return SafeVideoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeVideoPipe = /** @class */ (function () {
    function SafeVideoPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeVideoPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeVideoPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    SafeVideoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeVideo' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeVideoPipe);
    return SafeVideoPipe;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-onboarding-onboarding-module~pages-poses-poses-module~pages-r~5bd65dcf.c8bfc0997cedd2c07ab1.js.map