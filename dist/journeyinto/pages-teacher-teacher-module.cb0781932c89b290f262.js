(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teacher-teacher-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop === 'transform' || prop === 'all'; }));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    function (part) { return part.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                /** @type {?} */
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run((/**
                         * @return {?}
                         */
                        function () { return _this._startDragSequence(event); }));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._endDragSequence(event);
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return toggleNativeDragInteractions(handle, false); }));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        var _this = this;
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (_this))._containInsideBoundaryOnResize(); }));
        }
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    DragRef.prototype.getFreeDragPosition = /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    DragRef.prototype.setFreeDragPosition = /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    DragRef.prototype._sortFromLastPointerPosition = /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
        }
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    DragRef.prototype._endDragSequence = /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._scrollPosition = _this._viewportRuler.getViewportScrollPosition();
        }));
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
            _this._dropContainer = _this._initialContainer;
        }));
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
                _this.entered.next({
                    item: _this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(_this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            }));
        }));
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    DragRef.prototype._applyRootElementTransform = /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    DragRef.prototype._getDragDistance = /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    function (currentPosition) {
        /** @type {?} */
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    DragRef.prototype._cleanupCachedDimensions = /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    function () {
        this._boundaryRect = this._previewRect = undefined;
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    DragRef.prototype._containInsideBoundaryOnResize = /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        var rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        var topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    var descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    var rootNode = viewRef.rootNodes[0];
    if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');
        wrapper.appendChild(rootNode);
        return wrapper;
    }
    return (/** @type {?} */ (rootNode));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */
        this._scrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the scroll position of the viewport.
         */
        this._viewportScrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */
        this._handleScroll = (/**
         * @return {?}
         */
        function () {
            if (!_this.isDragging()) {
                return;
            }
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this.element);
            _this._updateAfterScroll(_this._scrollPosition, element.scrollTop, element.scrollLeft);
        });
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        function () {
            _this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        /** @type {?} */
        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;
        _dragDropRegistry.registerDropContainer(this);
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._removeListeners();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._startReceiving(_this); }));
        this._removeListeners();
        // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
        if (this._ngZone) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return element.addEventListener('scroll', _this._handleScroll); }));
        }
        else {
            element.addEventListener('scroll', this._handleScroll);
        }
        // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
        if (this._viewportRuler) {
            this._listenToScrollEvents();
        }
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        var activeDraggables = this._activeDraggables;
        /** @type {?} */
        var currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        /** @type {?} */
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @breaking-change 9.0.0 `distance` parameter to become required.
     */
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
        if (distance === void 0) { distance = { x: 0, y: 0 }; }
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._withDropContainer((/** @type {?} */ (_this))); }));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    DropListRef.prototype._startScrollingIfNecessary = /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a;
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        var scrollNode;
        /** @type {?} */
        var verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling the container.
        if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            _a = getElementScrollDirections(element, this._clientRect, pointerX, pointerY), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
            if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode = element;
            }
        }
        // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
        // Otherwise check if we can start scrolling the viewport.
        if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _b = this._viewportRuler.getViewportSize(), width = _b.width, height = _b.height;
            /** @type {?} */
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                if (this._ngZone) {
                    this._ngZone.runOutsideAngular(this._startScrollInterval);
                }
                else {
                    this._startScrollInterval();
                }
            }
            else {
                this._stopScrolling();
            }
        }
    };
    /** Stops any currently-running auto-scroll sequences. */
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    DropListRef.prototype._stopScrolling = /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    function () {
        this._stopScrollTimers.next();
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this._clientRect = getMutableClientRect(element);
        this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getRootElement().style.transform = ''; }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._stopReceiving(_this); }));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._removeListeners();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    };
    /** Caches the current items in the list and their positions. */
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItems = /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    };
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @param scrollPosition Object that is keeping track of the scroll position.
     * @param newTop New top scroll position.
     * @param newLeft New left scroll position.
     * @param extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     */
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    DropListRef.prototype._updateAfterScroll = /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    function (scrollPosition, newTop, newLeft, extraClientRect) {
        var _this = this;
        /** @type {?} */
        var topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        var leftDifference = scrollPosition.left - newLeft;
        if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
        }
        // Since we know the amount that the user has scrolled we can shift all of the client rectangles
        // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
        // behavior where we might be measuring the element before its position has changed.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var clientRect = _a.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
        }));
        // We need two loops for this, because we want all of the cached
        // positions to be up-to-date before we re-sort the item.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var drag = _a.drag;
            if (_this._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
    };
    /** Removes the event listeners associated with this drop list. */
    /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._removeListeners = /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    function () {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._canReceive(item, x, y); }));
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = (/** @type {?} */ (this._shadowRoot.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._listenToScrollEvents = /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.isDragging()) {
                /** @type {?} */
                var newPosition = (/** @type {?} */ (_this._viewportRuler)).getViewportScrollPosition();
                _this._updateAfterScroll(_this._viewportScrollPosition, newPosition.top, newPosition.left, _this._clientRect);
            }
            else if (_this.isReceiving()) {
                _this._cacheOwnPosition();
            }
        }));
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    /** @type {?} */
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    /** @type {?} */
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    var verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;
        if (rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); }),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); }),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.scroll.next(e); }),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return instance.id === id; }));
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDragItem(instance); }));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDropContainer(instance); }));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); }))).subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
        /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * @breaking-change 9.0.0
         */
        get: /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * \@breaking-change 9.0.0
         * @return {?}
         */
        function () {
            return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            this.boundaryElement = selector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    CdkDrag.prototype.getFreeDragPosition = /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return this._dragRef.getFreeDragPosition();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle._parentDrag === _this; }))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle.element; }));
                _this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._stateChanges; })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe((/**
         * @return {?}
         */
        function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        function () {
            _this.released.emit({ source: _this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        }));
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */
        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
        /** Whether sorting within this drop list is disabled. */
        get: /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */
        function () { return this._sortingDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            function (drag) { return drag._dragRef; })));
        }));
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ref.withDirection(value); }));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) { return list.id === drop; })))) : drop;
            }));
            if (_this._group) {
                _this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = _this.sortingDisabled;
            ref.autoScrollDisabled = _this.autoScrollDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) { return drop && drop !== _this; })).map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list._dropListRef; })))
                .withOrientation(_this.orientation);
        }));
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return CdkDrag; })), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/booking-card/booking-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/booking-card/booking-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <app-icon [width]=\"16\" [icon]=\"'star'\"></app-icon>\n    <div class=\"content\">\n        <p class=\"text-display-5\">{{booking.title}}</p>\n        <p class=\"text-display-6\">{{booking.date}}</p>\n    </div>\n    <div class=\"cta\">\n        <a class=\"btn btn-bordered btn-small\">View</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modals/notification-dialog/notification-dialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modals/notification-dialog/notification-dialog.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p class=\"title-display-3 text-center m-b-6\">{{ message }}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\" class=\"confirm-buttons-container\">\n  <div class=\"width-100 m-t-7\" fxLayout=\"row\">\n    <button mat-ripple class=\"btn btn-large btn-rounded bg-20 width-100 m-r-15\" (click)=\"onConfirmClick()\" tabindex=\"1\">\n      {{ confirmButtonText }}\n    </button>\n  </div>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/student-card/student-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/student-card/student-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"card\">\n    <app-round-photo></app-round-photo>\n    <h1 class=\"text-display-5\">{{student.student.user.first_name}}</h1>\n    <div class=\"cta\">\n        <!-- <button *ngIf=\"ctaText\"\n            (click)=\"handleClick($event)\"\n            class=\"btn btn-bordered btn-small\">{{ctaText}}</button> -->\n        <a class=\"btn btn-bordered btn-small\"\n            [routerLink]=\"[student.user]\">View</a>\n    </div>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/account/account.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/account/account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container \n  *ngIf=\"user && user.view_status === viewStatuses.TEACHER\">\n  <app-message [message]=\"message\"></app-message>\n  <div class=\"wrapper\">\n    <!-- Contact details form -->\n    <section>\n      <h1 class=\"text-display-2\">Contact details</h1>\n      <hr>\n      <form [formGroup]=\"contactDetailsForm\" class=\"form-one\">\n        <ng-container *ngIf=\"contactDetailsForm.get('email'); let email\">\n          <app-ji-input \n              [type]=\"'email'\"\n              [parentForm]=\"contactDetailsForm\"\n              [input]=\"'email'\"\n              [title]=\"'Email'\"\n              [errors]=\"email.errors\"\n              [hasError]=\"email.invalid && (email.dirty || email.touched)\"></app-ji-input>\n        </ng-container>\n        <ng-container *ngIf=\"contactDetailsForm.get('telephone'); let phone\">\n          <app-ji-input \n              [parentForm]=\"contactDetailsForm\"\n              [input]=\"'telephone'\"\n              [title]=\"'Mobile telephone'\"\n              [errors]=\"phone.errors\"\n              [hasError]=\"phone.invalid && (phone.dirty || phone.touched)\"></app-ji-input>\n        </ng-container>\n        <button\n          mat-ripple\n          type=\"button\"\n          class=\"btn btn-large btn-rounded bg-20 width-100\"\n          [disabled]=\"contactDetailsForm.invalid\"\n          (click)=\"saveContactDetails()\">Save changes</button>\n      </form>\n    </section>\n  \n    <!-- Password form -->\n    <section>\n      <form [formGroup]=\"passwordForm\" class=\"form-one\">\n        <app-password-match-input \n          formControlName=\"password\"\n          (passwordFormValid)=\"enableSaveButton($event)\"></app-password-match-input>\n        <button \n          mat-ripple \n          type=\"button\" \n          class=\"btn btn-large btn-rounded bg-20 width-100\" \n          [disabled]=\"status === requestStatus.pending || pwBtnDisabledState\"\n          (click)=\"savePassword()\">Save changes</button>\n      </form>\n    </section>\n  \n    <!-- Personal details form -->\n    <section>\n      <form [formGroup]=\"personalDetailsForm\" class=\"form-one\">\n        <h1 class=\"text-display-2\">Personal details</h1>\n        <hr>\n        <ng-container *ngIf=\"personalDetailsForm.get('first_name'); let firstName\">\n          <app-ji-input \n              [parentForm]=\"personalDetailsForm\"\n              [input]=\"'first_name'\"\n              [title]=\"'First name'\"\n              [errors]=\"firstName.errors\"\n              [hasError]=\"firstName.invalid && (firstName.dirty || firstName.touched)\"></app-ji-input>\n        </ng-container>\n        <ng-container *ngIf=\"personalDetailsForm.get('last_name'); let lastName\">\n          <app-ji-input \n              [parentForm]=\"personalDetailsForm\"\n              [input]=\"'last_name'\"\n              [title]=\"'Last name'\"\n              [errors]=\"lastName.errors\"\n              [hasError]=\"lastName.invalid && (lastName.dirty || lastName.touched)\"></app-ji-input>\n        </ng-container>\n        <button\n          mat-ripple\n          type=\"button\"\n          class=\"btn btn-large btn-rounded bg-20 width-100\"\n          [disabled]=\"personalDetailsForm.invalid\"\n          (click)=\"savePersonalDetails()\">Save changes</button>\n      </form>\n    </section>\n  \n    <!-- Payment account details form -->\n    <section class=\"payments\">\n      <h1 class=\"text-display-2\">Your Payment Account</h1>\n      <hr>\n      <p class=\"text-display-6\">We use a third party platform called Stripe to manage subscriptions payments between you and your students.</p>\n      <button class=\"btn btn-bordered\"\n        *ngIf=\"user?.creator?.stripe_user_id; else completeRegister\"\n        (click)=\"goToStripeDashboard()\">Visit your payment information account</button>\n      \n      <ng-template #completeRegister>\n        <app-teacher-stripe-form\n          [introText]=\"'To enable students to subscribe to you, please set up or link with your existing Stripe account.'\"\n          [showForm]=\"false\"></app-teacher-stripe-form>\n      </ng-template>\n    </section>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/add-classes/add-classes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/add-classes/add-classes.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n  <app-message [message]=\"usefulMessage\"></app-message>\n  <app-teacher-add-class-form\n    [errors]=\"errors\"\n    [ctaText]=\"'Save'\"></app-teacher-add-class-form> \n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/bookings/bookings.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/bookings/bookings.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/dashboard/dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/dashboard/dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <ng-container *ngIf=\"!spinner.isShowing.value\">\n    <ng-container *ngIf=\"!showSignupCompletedMsg; else signupCompletedMsg\">\n      <section>\n        <app-round-photo [image]=\"user?.creator?.image\"></app-round-photo>\n        <h1 class=\"title-display-4 user-title\">{{ user?.first_name }}</h1>\n      </section>\n      \n      <ng-container *ngIf=\"user?.creator?.stripe_user_id; else completeRegister\">\n        <!-- subscribers -->\n        <section>\n          <h1 class=\"text-display-2\">My Activity</h1>\n          <hr>\n          <ng-container *ngIf=\"subscribed.length; else elseNoSubscribed\">\n            <p class=\"text-display-5\">{{ subscribed.length }} <span \n              class=\"text-display-6\">{{ subscribed.length > 1 ? ' students' : ' student' }}</span>\n            </p>\n            <p class=\"text-display-5\">5<span class=\"text-display-6\"> classes</span></p>\n            <p class=\"text-display-5\">26/07/19<span class=\"text-display-6\"> date of last upload</span></p>\n            <hr>\n          </ng-container>\n        </section>\n        <ng-template #elseNoSubscribed>\n          <p class=\"text-display-3\">Build your subscription business by publishing a weekly audio class for your students.</p>\n          <a class=\"btn\" \n            [routerLink]=\"['/', routeNames.teacher, routeNames.recordings, routeNames.new]\">Record a class</a>\n        </ng-template>\n      </ng-container>\n    \n      <ng-template #completeRegister>\n        <section>\n          <app-teacher-stripe-form \n            [showForm]=\"false\"\n            [introText]=\"'To start recording classes and allow students to subscribe to them, please complete your payments account.'\"></app-teacher-stripe-form>\n        </section>\n      </ng-template>\n    \n      <!-- bookings -->\n      <section>\n        <h1 class=\"text-display-2\">My bookings</h1>\n        <hr>\n        <ul *ngIf=\"bookings && bookings.length > 0; else elseNoBooking\" class=\"bookings-list\">\n          <li *ngFor=\"let booking of bookings\">\n            <app-booking-card [booking]=\"booking\"></app-booking-card>\n          </li>\n        </ul>\n      </section>\n      <ng-template #elseNoBooking>\n        <p class=\"text-display-3\">Create a slot so your students can book</p>\n        <button mat-ripple type=\"button\" class=\"btn\">Create booking slots</button>\n      </ng-template>\n      \n      <!-- Notifications -->\n      <section>\n        <h1 class=\"text-display-2\">Notifications</h1>\n        <hr>\n        <ng-container *ngIf=\"notifications && notifications.length; else elseNoNotification\">\n          <ul class=\"notifications-list\">\n            <li *ngFor=\"let notification of notifications\">\n              <app-notification-card [notification]=\"notification\"></app-notification-card>\n            </li>\n          </ul>\n          <a [routerLink]=\"['/', routeNames.notifications]\" \n            mat-ripple \n            class=\"btn\">View all notifications</a>\n        </ng-container>\n        <ng-template #elseNoNotification>\n          <p class=\"text-display-3\">You don’t currently have any notifications.</p>\n        </ng-template>\n      </section>\n      \n      <section class=\"url\" *ngIf=\"user?.creator?.slug\">\n        <h1 class=\"text-display-2\">Your personal link</h1>\n        <hr>\n        <p class=\"text-displaty-3\">Share with your students so they can find you instantly</p>\n        <div class=\"copy-area\">\n          <input type=\"text\"\n            value=\"{{appUrl}}/{{routeNames.teachers}}/{{user?.creator?.slug}}\"\n            #profileUrl />\n          <p class=\"text-display-6\">{{appUrl}}/{{routeNames.teachers}}/{{user?.creator?.slug}}</p>\n          <span *ngIf=\"copied\">Copied!</span>\n        </div>\n        <button mat-ripple\n          type=\"button\"\n          (click)=\"copyProfileUrl(profileUrl)\"\n          class=\"btn btn-bordered\">Copy url</button>\n        <a \n          class=\"btn public-profile-link\"\n          [routerLink]=\"['/', routeNames.teachers, user?.creator?.slug]\">View your public profile</a>\n      </section>\n    </ng-container>\n  \n    <ng-template #signupCompletedMsg>\n      <section class=\"signup-completed\">\n        <div class=\"content\">\n          <app-icon [icon]=\"'thumbs_up_icon'\"\n            [width]=\"50\"></app-icon>\n          <h1 class=\"title-display-2\">Thanks for registering</h1>\n          <p>Vivamus congue orci velit, id imperdiet dolor fringilla at.</p>\n        </div>\n        <button \n          class=\"btn\"\n          (click)=\"showSignupCompletedMsg = !showSignupCompletedMsg\">Go to home</button>\n      </section>\n    </ng-template>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/profile-edit/profile-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/profile-edit/profile-edit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n  <app-message [message]=\"usefulMessage\"></app-message>\n  <app-teacher-profile-form \n    [errors]=\"errors\"\n    [ctaText]=\"'Save'\"></app-teacher-profile-form>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/profile/profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/profile/profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-teachers-profile></app-teachers-profile>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <div class=\"timerWrapper\" *ngIf=\"recording?.file_item; else noAudioFile\">\n    <p>Length: {{audioDuration}}</p>\n    <p *ngIf=\"!isAudioLoaded\">Loading...</p>\n    <div fxFlex.xs=\"100\" *ngIf=\"isAudioLoaded\">\n      <div fxLayout=\"row\" class=\"m-t-20\" style=\"position: relative;\" *ngIf=\"!isAddingPose\">\n        <div class=\"overlayed-timeline-top\" [ngStyle]=\"{ 'height.px': overlayedTopAreaHeight }\"></div>\n        <div fxFlex=\"14\">\n          <div fxFlex=\"50\" class=\"timeline-time\" [ngStyle]=\"{ 'height.px': timelineHeight }\">\n            <div class=\"time-tick\" *ngFor=\"let tick of timelineTicks\" [ngStyle]=\"{ 'top.px': tick.tickPosition }\">\n              <div class=\"text-display-8\">{{ tick.tickTime }}</div>\n            </div>\n          </div>\n          <div fxFlex=\"50\" class=\"timeline\" [ngStyle]=\"{ 'height.px': timelineHeight }\">\n            <div class=\"middle-timeline\"></div>\n            <div class=\"line-tick\" *ngFor=\"let tick of timelineTicks\" [ngStyle]=\"{ 'top.px': tick.tickPosition }\"></div>\n            <div class=\"line-tick\" [ngStyle]=\"{ 'bottom.px': pointerControlHeight / 2 }\"></div>\n            <div class=\"cursor-top pointer\" cdkDragLockAxis=\"y\" (cdkDragEnded)=\"onMovedCursorTop($event)\"\n              cdkDragBoundary=\".timeline\" cdkDrag></div>\n            <div class=\"cursor-bottom pointer\" cdkDragLockAxis=\"y\" (cdkDragEnded)=\"onMovedCursorBottom($event)\"\n              cdkDragBoundary=\".timeline\" cdkDrag></div>\n          </div>\n        </div>\n        <div fxFlex=\"86\" class=\"pointer-control-container\" [ngStyle]=\"{ 'height.px': timelineHeight }\"\n          style=\"position: relative\">\n          <div class=\"pointer-control\" cdkDragLockAxis=\"y\" cdkDragBoundary=\".pointer-control-container\"\n            (cdkDragEnded)=\"onSetAudioCurrentTime($event)\" [cdkDragFreeDragPosition]=\"positionPointerControl\" cdkDrag>\n            <div cdkDragHandle>\n              <div class=\"custom-tringle\"></div>\n              <div class=\"custom-tringle-2\"></div>\n              <div class=\"time-picker text-display-8\">\n                {{ currentPosition * factor | minuteSeconds }}\n              </div>\n            </div>\n            <div class=\"pose-pointer\" (click)=\"onAddPose()\">\n              <button class=\"btn add-btn\"></button> Add pose\n            </div>\n            <button class=\"btn play-record\" (click)=\"onPlayPauseRecord()\">\n              <svg width=\"14\" height=\"20\" *ngIf=\"audio.paused\">\n                <image xlink:href=\"/assets/img/play-2_icon.svg\" width=\"14\" height=\"20\" />\n              </svg>\n              <svg width=\"20\" height=\"20\" *ngIf=\"!audio.paused\">\n                <image xlink:href=\"/assets/img/pause-2_icon.svg\" width=\"20\" height=\"20\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"pose-container\" *ngFor=\"let pose of timelinePoses\" [ngStyle]=\"{ 'top.px': pose.timestamp }\">\n            <div class=\"pose-container-2\">\n              <div class=\"middle-pose-line\"></div>\n              <div class=\"pose-image text-center\">\n                <img [src]=\"pose.pose.thumbnail\" height=\"46px\" alt=\"\" />\n              </div>\n              <button class=\"btn pose-close bg-white btn-bordered\" fxLayoutAlign=\"center center\"\n                (click)=\"onDeletePose(pose)\">\n                <svg width=\"24\" height=\"24\" *ngIf=\"audio.paused\">\n                  <image xlink:href=\"/assets/img/close_icon.svg\" width=\"24\" height=\"24\" />\n                </svg>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"overlayed-timeline-bottom\" [ngStyle]=\"{ 'height.px': overlayedBottomAreaHeight }\"></div>\n      </div>\n      <div class=\"width-100 m-t-40\" fxLayout=\"row\" *ngIf=\"!isAddingPose\">\n        <button mat-ripple class=\"btn btn-bordered m-r-18\" (click)=\"onCancelEditRecording()\">Cancel</button>\n        <button mat-ripple class=\"btn\" (click)=\"onSaveEditRecording()\">Save</button>\n      </div>\n      <div fxLayout=\"column\" class=\"m-t-30\" *ngIf=\"isAddingPose\">\n        <div class=\"m-t-20\">\n          <div fxLayout=\"row\">\n            <div class=\"text-display-4\">{{ currentPosition | minuteSeconds }}</div>\n          </div>\n          <div fxLayout=\"row\">\n            <select class=\"input-search-select-bordered m-t-7 width-100\" [ngModel]=\"selectedPose\"\n              (ngModelChange)=\"onChangeSelectedPose($event)\">\n              <option value=\"\" disabled selected hidden>Search</option>\n              <option [ngValue]=\"pose\" *ngFor=\"let pose of poses\">\n                {{ pose.title }}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"m-t-60\">\n          <div fxLayout=\"column\">\n            <div class=\"m-t-36\" fxLayoutAlign=\"center center\">\n              <button mat-ripple type=\"button\" class=\"btn btn-large btn-rounded bg-20 width-100\" [disabled]=\"!currentPose\"\n                (click)=\"onSavePose()\">\n                Save pose\n              </button>\n            </div>\n            <div fxLayoutAlign=\"center center\" class=\"m-t-20\">\n              <button mat-ripple type=\"button\" class=\"btn btn-large btn-rounded bg-20 width-100\"\n                (click)=\"onCancelAddPose()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #noAudioFile>\n  <div class=\"wrapper no-recording-file\">\n    <p \n      *ngIf=\"recording?.status !== recordingStatus.FAILED\">The file you are trying to edit is still uploading, please try again later.</p>\n    <p \n      *ngIf=\"recording?.status === recordingStatus.FAILED\">The file you are trying to edit has failed uploading, please delete this one are try recording a new class.</p>\n\n    <a *ngIf=\"recording?.slug && recording?.status !== recordingStatus.FAILED\"\n      class=\"btn\"\n      [routerLink]=\"[ '/', routeNames.teacher, routeNames.recordings, recording?.slug, routeNames.editRecording ]\">Edit class details</a>\n    <a *ngIf=\"recording?.slug\"\n      class=\"btn btn-bordered\"\n      [routerLink]=\"[ '/', routeNames.teacher, routeNames.recordings, recording?.slug ]\">Cancel edit</a>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <app-message [message]=\"message\"></app-message>\n  <section class=\"audio-element\">\n    <audio *ngIf=\"blobUrl\" controls controlsList=\"nodownload\">\n      <source [src]=\"blobUrl\" type=\"audio/webm\" />\n      <source [src]=\"blobUrl\" type=\"audio/mpeg\" />\n    </audio>\n  </section>\n  <section>\n    <form [formGroup]=\"recordClassForm\"\n      class=\"form-one\">\n      <ng-container *ngIf=\"recordClassForm.get('title'); let title\">\n        <app-ji-input \n            [parentForm]=\"recordClassForm\" \n            [input]=\"'title'\" \n            [title]=\"'Title'\"\n            [errors]=\"title.errors\"\n            [hasError]=\"title.invalid && (title.dirty || title.touched)\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"recordClassForm.get('description'); let description\">\n        <app-ji-input \n            [parentForm]=\"recordClassForm\" \n            [input]=\"'description'\" \n            [title]=\"'Description'\"\n            [errors]=\"description.errors\"\n            [hasError]=\"description.invalid && (description.dirty || description.touched)\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"recordClassForm.get('difficulty'); let difficulty\">\n        <app-ji-input \n            [parentForm]=\"recordClassForm\" \n            [input]=\"'difficulty'\" \n            [title]=\"'Level'\"\n            [errors]=\"difficulty.errors\"\n            [hasError]=\"difficulty.invalid && (difficulty.dirty || difficulty.touched)\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"recordClassForm.get('props'); let props\">\n        <app-ji-input \n            [parentForm]=\"recordClassForm\"\n            [type]=\"'textarea'\"\n            [input]=\"'props'\" \n            [title]=\"'Props'\"\n            [errors]=\"props.errors\"\n            [hasError]=\"props.invalid && (props.dirty || props.touched)\"></app-ji-input>\n      </ng-container>\n      <ng-container *ngIf=\"recordClassForm.get('is_fixed'); let is_fixed\">\n        <app-ji-checkbox \n          [parentForm]=\"recordClassForm\"\n          [name]=\"'is_fixed'\">\n          Is sample class\n        </app-ji-checkbox>\n      </ng-container>\n\n      <div class=\"cta\">\n        <button\n            mat-ripple\n            type=\"button\"\n            class=\"btn\"\n            (click)=\"handleSubmitClick()\"\n            [disabled]=\"recordClassForm.invalid || submitDisabled\">Save to Library</button>\n        <div class=\"two-col-btns\">\n          <button\n            mat-ripple\n            class=\"btn btn-bordered\"\n            (click)=\"openDeleteRecordingDialog()\">Delete</button>\n          <button\n            mat-ripple\n            class=\"btn btn-bordered\"\n            [disabled]=\"!recordingId || !recording?.file_item\"\n            (click)=\"onEditAudioBtnClick()\">\n              Edit Recording\n              <span *ngIf=\"!recording?.file_item\">*</span>\n            </button>\n        </div>\n        <p class=\"no-edit-message text-display-6\" \n          *ngIf=\"!recording?.file_item\">*You cannot edit the recording file at the moment as it has not finished uploading.</p>\n      </div>\n    </form>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-view/record-view.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/recordings/record/record-view/record-view.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-class-recording\n    *ngIf=\"recording\"\n    [recording]=\"recording\"\n    [canEdit]=\"true\"></app-class-recording>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/recordings/record/record.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <section class=\"record\">\n    <p>is online: {{audioRecordingService.isOnline}}</p>\n    <p>blobs uploaded (total to date): {{audioRecordingService.blobsUploaded.length}}</p>\n    <p>blobs uploaded (currently on db): {{audioRecordingService.dbBlobsCount}}</p>\n    <h1 class=\"title-display-3\" *ngIf=\"audioRecordingService.recorder\">Recording</h1>\n    <h1 class=\"title-display-3\" *ngIf=\"!audioRecordingService.recorder\">Press to start recording</h1>\n\n    <button class=\"btn record-stop-btn\" type=\"button\" (click)=\"startStopRecording()\">\n      <span *ngIf=\"audioRecordingService.recorder\"></span>\n    </button>\n    <p class=\"title-display-3\" *ngIf=\"audioRecordingService.recorder\">{{ recordedTime }}</p>\n    <button *ngIf=\"audioRecordingService.recorder\"\n      class=\"btn btn-medium cancel-btn\"\n      (click)=\"openCancelRecordingDialog()\">Cancel recording</button>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/recordings.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/recordings/recordings.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <section\n    class=\"complete-register\"\n    *ngIf=\"teacher.stripe_link && !teacher.stripe_user_id\"\n  >\n    <app-teacher-stripe-form [showForm]=\"true\"></app-teacher-stripe-form>\n    <hr />\n  </section>\n\n  <ng-container *ngIf=\"recordings?.length > 0; else noRecordings\">\n    <section class=\"recording-stats\" *ngIf=\"newRecordingStatuses\">\n      <!-- <button \n          class=\"btn delete-all\"\n          (click)=\"deleteAll()\">(temp for dev reasons) DELETE ALL</button> -->\n      <h1 class=\"text-display-2\">New recording status</h1>\n      <hr />\n\n      <ul class=\"stats text-display-6\">\n        <li *ngIf=\"latestPublished\">\n          <span>{{ latestPublished.title }} has been published.</span>\n        </li>\n        <li *ngFor=\"let recordingStatus of statRecordingStatuses\">\n          <ng-container *ngIf=\"groupedRecordings[recordingStatus.status]\">\n            <ul>\n              <li\n                *ngFor=\"\n                  let recording of groupedRecordings[recordingStatus.status]\n                \"\n              >\n                <span>{{ recording.title }} {{ recordingStatus.text }}.</span>\n              </li>\n            </ul>\n          </ng-container>\n        </li>\n      </ul>\n\n      <hr />\n\n      <!-- <a class=\"btn btn-large btn-rounded bg-20 width-100\"\n          [routerLink]=\"[routeNames.new]\">Record new class</a> -->\n    </section>\n\n    <section class=\"latest-classes\">\n      <h1 class=\"text-display-2\">Your classes</h1>\n      <ul class=\"recordings-list\">\n        <li *ngFor=\"let recording of recordings; let i = index\">\n         \n          <div class=\"dropdown_option\">\n            <input\n              #profileImageFile\n              name=\"_image\"\n              type=\"file\"\n              (change)=\"setFileInfo($event, recording.id)\"\n              class=\"display-none\"\n              id=\"fileUp\"\n            />\n            <input type=\"hidden\" name=\"image\" />\n            <button\n              mat-ripple\n              type=\"button\"\n              class=\"btn btn-bordered btn-small change-thumb\"\n              (click)=\"profileImageFile.click()\"\n            >\n              Change thumbnail\n            </button>\n\n            <button\n              [ngClass]=\"{'active-btn': recording.status === 'published'}\"\n              class=\"btn btn-bordered btn-small patreon-teaser__button\"\n              data-toggle=\"dropdown\"\n              tabindex=\"0\"\n              (click)=\"changeClassStatus(recording.id, recording.status, i)\"\n            >\n              {{ recording.status === \"published\" ? \"Unpublish\" : \"Publish\" }}\n            </button>\n            <!-- <div\n              *ngIf=\"showDropdownMenu[i]\"\n              class=\"dropdown-menu__wrapper\"\n              (click)=\"openDropdownMenu(i)\"\n            ></div> -->\n            <!-- <ul class=\"dropdown-menu\" *ngIf=\"showDropdownMenu[i]\">\n              <li\n                (click)=\"changeClassStatus(recording.id, recording.status, i)\"\n              >\n                <a class=\"link\" tabindex=\"0\">{{\n                  recording.status === \"published\" ? \"Unpublish\" : \"Publish\"\n                }}</a>\n              </li>\n            </ul> -->\n          </div>\n          <app-class-card\n            [singleClass]=\"recording\"\n            [canEdit]=\"true\"\n          ></app-class-card>\n        </li>\n      </ul>\n    </section>\n  </ng-container>\n\n  <ng-template #noRecordings>\n    <section class=\"no-recordings\" *ngIf=\"teacher.stripe_user_id\">\n      <h1 class=\"text-display-2\">You have no recorded classes</h1>\n      <!-- <a class=\"btn\" \n        [routerLink]=\"['/', routeNames.teacher, routeNames.recordings, routeNames.new]\">Record now</a> -->\n    </section>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/students/item/students-item.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/students/item/students-item.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"student && studentDeets && !spinner.isShowing.value\">\n    <div class=\"wrapper\">\n        <section>\n            <!-- <h1 class=\"text-display-2\">{{student.status | titlecase}}</h1>\n            <hr> -->\n            <p class=\"text-display-6 student-details\">\n                <span>{{studentDeets.first_name}} {{studentDeets.last_name}}</span>\n                <span>Email: <a href=\"mailto:{{studentDeets.email}}\">{{studentDeets.email}}</a></span>\n                <span *ngIf=\"studentDeets.telephone\">Tel: <a href=\"tel:{{studentDeets.telephone}}\">{{studentDeets.telephone}}</a></span>\n            </p>\n            <hr>\n        </section>\n        <!-- <section class=\"student-bookings\">\n            <h1 class=\"text-display-2\">Upcoming bookings</h1>\n            <p>This student has not made a booking yet.</p>\n        </section> -->\n        <section class=\"subscription-status\">\n            <h1 class=\"text-display-2\">Active subscription - <span>{{student.is_subscribed.length ? 'Yes' : 'No'}}</span></h1>\n            <!-- <hr> -->\n            <!-- <p class=\"text-display-5\">Total student value to date <span class=\"text-display-6\">TBC</span></p> -->\n            <!-- <hr> -->\n        </section>\n        <!-- <section class=\"cta\">\n            <button class=\"btn btn-large btn-rounded bg-20 width-100\"\n                (click)=\"handleApproveDeclineClick()\">{{student.status === 'approved' ? 'Decline' : 'Approve'}}</button>\n        </section> -->\n    </div>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/students/list/students-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/students/list/students-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!spinner.isShowing.value\">\n  <section *ngIf=\"approved.length > 0\">\n    <h1 class=\"text-display-2\">Approved</h1>\n    <ul>\n      <li *ngFor=\"let student of declined\">\n        <app-student-card \n          [student]=\"student\" \n          [ctaText]=\"'Decline'\"\n          (studentCtaClicked)=\"onStudentCtaClicked(student)\"></app-student-card>\n      </li>\n    </ul>\n  </section>\n  <section *ngIf=\"declined.length > 0\">\n    <ul>\n      <li *ngFor=\"let student of declined\">\n        <app-student-card \n          [student]=\"student\"\n          [ctaText]=\"'Approve'\"\n          (studentCtaClicked)=\"onStudentCtaClicked(student)\"></app-student-card>\n      </li>\n    </ul>\n  </section>\n  \n  <p *ngIf=\"!approved.length && !declined.length\">Invite your students to connect or subscribe to you by sharing your personal link at the bottom of your Journey Into profile page. For guides on how to do this, go to <a href=\"https://www.journeyinto.com/space\" target=\"_blank\">https://www.journeyinto.com/space</a></p>\n</div>  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/teacher.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/teacher/teacher.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booking-card/booking-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/booking-card/booking-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .card app-icon {\n    margin-right: 20px; }\n  .card .content {\n    width: 100%; }\n  .card .content p {\n      margin-bottom: 10px; }\n  .card .content p:last-child {\n      margin-bottom: 0; }\n  .card .cta {\n    min-width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYm9va2luZy1jYXJkL2Jvb2tpbmctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFFYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBO0VBTGxDO0lBUVEsa0JBQWtCLEVBQUE7RUFSMUI7SUFZUSxXQUFXLEVBQUE7RUFabkI7TUFlWSxtQkFBbUIsRUFBQTtFQWYvQjtNQW1CWSxnQkFBZ0IsRUFBQTtFQW5CNUI7SUF3QlEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2tpbmctY2FyZC9ib29raW5nLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdGEge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/booking-card/booking-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/booking-card/booking-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCardComponent", function() { return BookingCardComponent; });
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

var BookingCardComponent = /** @class */ (function () {
    function BookingCardComponent() {
    }
    BookingCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookingCardComponent.prototype, "booking", void 0);
    BookingCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-card',
            template: __webpack_require__(/*! raw-loader!./booking-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/booking-card/booking-card.component.html"),
            styles: [__webpack_require__(/*! ./booking-card.component.scss */ "./src/app/components/booking-card/booking-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingCardComponent);
    return BookingCardComponent;
}());



/***/ }),

/***/ "./src/app/components/booking-card/booking-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/booking-card/booking-card.module.ts ***!
  \****************************************************************/
/*! exports provided: BookingCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCardModule", function() { return BookingCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _booking_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-card.component */ "./src/app/components/booking-card/booking-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/components/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookingCardModule = /** @class */ (function () {
    function BookingCardModule() {
    }
    BookingCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["IconModule"]
            ],
            exports: [_booking_card_component__WEBPACK_IMPORTED_MODULE_1__["BookingCardComponent"]],
            declarations: [_booking_card_component__WEBPACK_IMPORTED_MODULE_1__["BookingCardComponent"]],
            providers: [],
        })
    ], BookingCardModule);
    return BookingCardModule;
}());



/***/ }),

/***/ "./src/app/components/modals/notification-dialog/notification-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/notification-dialog/notification-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-dialog-container {\n  border-radius: 9px; }\n\n.mat-dialog-content {\n  text-align: center;\n  padding: 0;\n  margin: 0; }\n\n@media all and (max-width: 680px) {\n    .mat-dialog-content {\n      width: 100%;\n      margin: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25vdGlmaWNhdGlvbi1kaWFsb2cvbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUVUO0lBTEY7TUFNSSxXQUFXO01BQ1gsWUFBWSxFQUFBLEVBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9ub3RpZmljYXRpb24tZGlhbG9nL25vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWVkaXVtOiA2ODBweDtcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/modals/notification-dialog/notification-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/notification-dialog/notification-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotificationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialogComponent", function() { return NotificationDialogComponent; });
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


var NotificationDialogComponent = /** @class */ (function () {
    function NotificationDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
        this.confirmButtonText = 'Ok';
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            }
        }
    }
    NotificationDialogComponent.prototype.onConfirmClick = function () {
        this.dialogRef.close(true);
    };
    NotificationDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    NotificationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-dialog',
            template: __webpack_require__(/*! raw-loader!./notification-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modals/notification-dialog/notification-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notification-dialog.component.scss */ "./src/app/components/modals/notification-dialog/notification-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NotificationDialogComponent);
    return NotificationDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/notification-dialog/notification-dialog.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/modals/notification-dialog/notification-dialog.module.ts ***!
  \*************************************************************************************/
/*! exports provided: NotificationDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialogModule", function() { return NotificationDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-dialog.component */ "./src/app/components/modals/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationDialogModule = /** @class */ (function () {
    function NotificationDialogModule() {
    }
    NotificationDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NotificationDialogComponent"]],
            entryComponents: [_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NotificationDialogComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]
            ],
        })
    ], NotificationDialogModule);
    return NotificationDialogModule;
}());



/***/ }),

/***/ "./src/app/components/student-card/student-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/student-card/student-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 20px;\n  display: flex;\n  align-items: center; }\n  @media all and (max-width: 500px) {\n    .card {\n      flex-wrap: wrap; } }\n  .card ::ng-deep app-round-photo {\n    width: 60px; }\n  .card h1 {\n    flex: 1; }\n  .card .cta {\n    display: flex; }\n  @media all and (max-width: 500px) {\n      .card .cta {\n        width: 100%;\n        margin-top: 20px; } }\n  .card .cta .btn {\n      align-self: center;\n      width: 85px; }\n  @media all and (max-width: 500px) {\n        .card .cta .btn {\n          width: 100%; } }\n  .card .cta button {\n      margin: 0 20px; }\n  @media all and (max-width: 500px) {\n        .card .cta button {\n          margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC1jYXJkL3N0dWRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQWE7RUFFYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFFbkI7SUFOSjtNQU9RLGVBQWUsRUFBQSxFQTBDdEI7RUFqREQ7SUFXUSxXQUFXLEVBQUE7RUFYbkI7SUFlUSxPQUFPLEVBQUE7RUFmZjtJQW1CUSxhQUFhLEVBQUE7RUFFYjtNQXJCUjtRQXNCWSxXQUFXO1FBQ1gsZ0JBQWdCLEVBQUEsRUFxQnZCO0VBNUNMO01BMkJZLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7RUFFWDtRQTlCWjtVQStCZ0IsV0FBVyxFQUFBLEVBRWxCO0VBakNUO01Bb0NZLGNBQWMsRUFBQTtFQUVkO1FBdENaO1VBdUNnQixjQUFjLEVBQUEsRUFFckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dWRlbnQtY2FyZC9zdHVkZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc21hbGwtd2lkdGg6IDUwMHB4O1xuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICRzbWFsbC13aWR0aCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIFxuICAgIDo6bmctZGVlcCBhcHAtcm91bmQtcGhvdG8ge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmN0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsLXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtd2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcblxuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHNtYWxsLXdpZHRoKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cblxuICAgIFxuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/student-card/student-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/student-card/student-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: StudentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCardComponent", function() { return StudentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentCardComponent = /** @class */ (function () {
    function StudentCardComponent() {
        this.student = '';
        this.ctaText = '';
        this.studentCtaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_1__["RouteNames"];
    }
    StudentCardComponent.prototype.ngOnInit = function () { };
    StudentCardComponent.prototype.handleClick = function () {
        this.studentCtaClicked.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentCardComponent.prototype, "student", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentCardComponent.prototype, "ctaText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StudentCardComponent.prototype, "studentCtaClicked", void 0);
    StudentCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-card',
            template: __webpack_require__(/*! raw-loader!./student-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/student-card/student-card.component.html"),
            styles: [__webpack_require__(/*! ./student-card.component.scss */ "./src/app/components/student-card/student-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentCardComponent);
    return StudentCardComponent;
}());



/***/ }),

/***/ "./src/app/components/student-card/student-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/student-card/student-card.module.ts ***!
  \****************************************************************/
/*! exports provided: StudentCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCardModule", function() { return StudentCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-card.component */ "./src/app/components/student-card/student-card.component.ts");
/* harmony import */ var _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-photo/round-photo.module */ "./src/app/components/round-photo/round-photo.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StudentCardModule = /** @class */ (function () {
    function StudentCardModule() {
    }
    StudentCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_3__["RoundPhotoModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            providers: [],
            bootstrap: [],
            declarations: [_student_card_component__WEBPACK_IMPORTED_MODULE_2__["StudentCardComponent"]],
            exports: [_student_card_component__WEBPACK_IMPORTED_MODULE_2__["StudentCardComponent"]]
        })
    ], StudentCardModule);
    return StudentCardModule;
}());



/***/ }),

/***/ "./src/app/pages/teacher/account/account.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/teacher/account/account.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section.payments button {\n    margin-top: 30px; }\n  hr {\n  margin-top: 15px;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXIvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFLWSxnQkFBZ0IsRUFBQTtFQUs1QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICYucGF5bWVudHMge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/teacher/account/account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/teacher/account/account.component.ts ***!
  \************************************************************/
/*! exports provided: TeachersAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersAccountComponent", function() { return TeachersAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/user/user.actions */ "./src/app/store/modules/user/user.actions.ts");
/* harmony import */ var _src_app_store_modules_stripe_stripe_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/stripe/stripe.actions */ "./src/app/store/modules/stripe/stripe.actions.ts");
/* harmony import */ var _src_app_store_modules_stripe_stripe_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/stripe/stripe.selectors */ "./src/app/store/modules/stripe/stripe.selectors.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers */ "./src/app/helpers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TeachersAccountComponent = /** @class */ (function () {
    function TeachersAccountComponent(store, activatedRoute, fb, spinner) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.spinner = spinner;
        // Request statuses
        this.requestStatus = _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"];
        this.status = null;
        // Forms
        this.contactDetailsForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            telephone: ['']
        });
        this.personalDetailsForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.passwordForm = this.fb.group({
            password: ''
        });
        this.pwBtnDisabledState = true;
        // Store
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (user) { return Boolean(user); }));
        this.user = null;
        this.message$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserMessages"]));
        this.message = '';
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_6__["ViewStatuses"];
        this.stripeStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_stripe_stripe_selectors__WEBPACK_IMPORTED_MODULE_11__["selectStripeStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (status) { return Boolean(status); }));
    }
    TeachersAccountComponent.prototype.ngOnInit = function () {
        // showoverlay
        var _this = this;
        this.subscriptions.push(this.user$.subscribe(function (user) {
            if (user) {
                // hideoverlay
                _this.user = user;
                _this.contactDetailsForm.setValue({
                    email: _this.user.email,
                    telephone: _this.user.telephone || ''
                });
                _this.personalDetailsForm.setValue({
                    first_name: _this.user.first_name,
                    last_name: _this.user.last_name
                });
                _this.spinner.hide();
            }
        }), this.message$.subscribe(function (message) {
            if (message) {
                // hideoverlay
                _this.message = message.message || message;
                // console.log('GetCurrentUserRequestAction');
                _this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_9__["GetCurrentUserRequestAction"]());
                Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["resetForm"])(_this.passwordForm);
                window.scrollTo(0, 0);
            }
        }), this.stripeStatus$.subscribe(function (status) {
            switch (status) {
                case _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].pending:
                    // showoverlay
                    break;
                case _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].success:
                case _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].failure:
                // hideoverlay
                default:
                    break;
            }
        }));
    };
    TeachersAccountComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TeachersAccountComponent.prototype.saveContactDetails = function () {
        if (this.contactDetailsForm.valid) {
            var payload = {
                email: this.contactDetailsForm.get('email').value,
                telephone: this.contactDetailsForm.get('telephone').value,
            };
            this.updateUser(payload);
        }
    };
    TeachersAccountComponent.prototype.savePassword = function () {
        if (this.passwordForm.valid) {
            var payload = {
                password: this.passwordForm.get('password').value
            };
            this.updateUser(payload);
        }
    };
    TeachersAccountComponent.prototype.savePersonalDetails = function () {
        if (this.personalDetailsForm.valid) {
            var payload = {
                email: this.contactDetailsForm.get('email').value,
                first_name: this.personalDetailsForm.get('first_name').value,
                last_name: this.personalDetailsForm.get('last_name').value,
            };
            this.updateUser(payload);
        }
    };
    TeachersAccountComponent.prototype.updateUser = function (payload) {
        // showoverlay
        this.store.dispatch(new _src_app_store_modules_user_user_actions__WEBPACK_IMPORTED_MODULE_9__["UpdateCurrentUserRequestAction"](payload));
    };
    TeachersAccountComponent.prototype.goToStripeDashboard = function () {
        this.store.dispatch(new _src_app_store_modules_stripe_stripe_actions__WEBPACK_IMPORTED_MODULE_10__["GetStripeDashboardLinkRequestAction"]());
    };
    TeachersAccountComponent.prototype.enableSaveButton = function ($event) {
        this.pwBtnDisabledState = !$event;
    };
    TeachersAccountComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["SpinnerOverlayService"] }
    ]; };
    TeachersAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-account-component',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/teacher/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_8__["SpinnerOverlayService"]])
    ], TeachersAccountComponent);
    return TeachersAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/add-classes/add-classes.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/teacher/add-classes/add-classes.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvYWRkLWNsYXNzZXMvYWRkLWNsYXNzZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/add-classes/add-classes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/teacher/add-classes/add-classes.component.ts ***!
  \********************************************************************/
/*! exports provided: TeacherAddClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAddClassesComponent", function() { return TeacherAddClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
/* harmony import */ var _store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherAddClassesComponent = /** @class */ (function () {
    function TeacherAddClassesComponent(store) {
        this.store = store;
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__["selectOnboardingStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__["selectOnboardingErrors"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (user) { return Boolean(user); }));
        this.teacher = null;
        // User view statuses - student or teacher
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__["ViewStatuses"];
        this.status = null;
        this.errors = null;
        this.usefulMessage = null;
        this.user = null;
    }
    TeacherAddClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_7__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].profile]));
        this.subscriptions.push(this.status$.subscribe(function (status) {
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }), this.user$.subscribe(function (user) {
            if (user && !_this.user) {
                _this.user = user;
            }
        }));
    };
    TeacherAddClassesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    TeacherAddClassesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    TeacherAddClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-classes',
            template: __webpack_require__(/*! raw-loader!./add-classes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/add-classes/add-classes.component.html"),
            styles: [__webpack_require__(/*! ./add-classes.component.scss */ "./src/app/pages/teacher/add-classes/add-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TeacherAddClassesComponent);
    return TeacherAddClassesComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/bookings/bookings.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/teacher/bookings/bookings.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/bookings/bookings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/teacher/bookings/bookings.component.ts ***!
  \**************************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
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

var BookingsComponent = /** @class */ (function () {
    function BookingsComponent() {
    }
    BookingsComponent.prototype.ngOnInit = function () {
    };
    BookingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! raw-loader!./bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/pages/teacher/bookings/bookings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/teacher/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.user-title {\n  margin-top: 20px; }\nsection {\n  margin-top: 40px; }\nsection.url button {\n    margin-top: 20px; }\nsection hr {\n    margin: 20px 0 30px 0; }\n.bookings-list li:not(:last-child) {\n  margin-bottom: 20px; }\n.copy-area {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap; }\n.copy-area p {\n    margin-bottom: 0; }\n.copy-area input {\n    margin: 10px 0;\n    position: absolute;\n    color: transparent;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    border: none; }\n.copy-area span {\n    margin: 10px 0;\n    margin-left: 10px;\n    color: #009e79; }\n.public-profile-link {\n  margin-top: 10px; }\n.signup-completed {\n  text-align: center; }\n.signup-completed .content {\n    margin-bottom: 60px; }\n.signup-completed h1 {\n    margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy90ZWFjaGVyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esc0VBQVk7QUNGWjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFLWSxnQkFBZ0IsRUFBQTtBQUw1QjtJQVVRLHFCQUFxQixFQUFBO0FBSTdCO0VBR1ksbUJBQW1CLEVBQUE7QUFLL0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7QUFKbkI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVdRLGNBQWM7SUFFZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUVYLFlBQVksRUFBQTtBQW5CcEI7SUF1QlEsY0FBYztJQUNkLGlCQUFpQjtJQUVqQixjRDVCTSxFQUFBO0FDZ0NkO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxrQkFBa0IsRUFBQTtBQUR0QjtJQUlRLG1CQUFtQixFQUFBO0FBSjNCO0lBUVEsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhY2hlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MnO1xuLnVzZXItdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAmLnVybCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XG4gICAgfVxufVxuXG4uYm9va2luZ3MtbGlzdCB7XG4gICAgbGkge1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvcHktYXJlYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAxNDApO1xuICAgIH1cbn1cblxuLnB1YmxpYy1wcm9maWxlLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWdudXAtY29tcGxldGVkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/teacher/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/teacher/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: TeachersDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersDashboardComponent", function() { return TeachersDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_components_modals_takethetour_dialog_takethetour_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/takethetour-dialog.component */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.component.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TeachersDashboardComponent = /** @class */ (function () {
    function TeachersDashboardComponent(store, router, dialog, spinner) {
        this.store = store;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.routeNames = _route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_2__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(Boolean));
        this.user = null;
        this.subscribed = [];
        this.notifications = [];
        this.navigationData = {};
        this.appUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverUrl;
        // User view statuses - student or teacher
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_3__["ViewStatuses"];
        this.subscriptions = [];
        this.bookings = [
            {
                title: 'Private session',
                date: '02/07/19'
            },
            {
                title: 'Private session',
                date: '02/07/19'
            }
        ];
        this.copied = false;
        this.showSignupCompletedMsg = false;
        var currentNav = this.router.getCurrentNavigation();
        var navigationData = currentNav ? currentNav.extras.state : {};
        this.navigationData = navigationData;
    }
    TeachersDashboardComponent.prototype.ngOnInit = function () {
        // hideoverlay
        var _this = this;
        this.showSignupCompletedMsg = history.state.data && history.state.data.profileCompleted;
        this.subscriptions.push(this.user$.subscribe(function (user) {
            // hideoverlay
            _this.showSignupCompletedMsg = history.state.data && history.state.data.profileCompleted;
            var notifications = user.notifications, teachers = user.teachers;
            _this.notifications = notifications;
            if (teachers && teachers.subscribed.length) {
                _this.subscribed = teachers.subscribed;
            }
            _this.user = user;
            // hideoverlay
            // console.log('hide spinner');
            _this.spinner.hide();
        }));
    };
    TeachersDashboardComponent.prototype.ngAfterViewInit = function () {
        this.checkOpenTakethetourModal();
    };
    TeachersDashboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TeachersDashboardComponent.prototype.copyProfileUrl = function (inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        inputElement.blur();
        this.copied = true;
    };
    TeachersDashboardComponent.prototype.checkOpenTakethetourModal = function () {
        if (this.navigationData && this.navigationData.openTakethetourModal) {
            var dialogRef = this.dialog.open(_src_app_components_modals_takethetour_dialog_takethetour_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TakethetourDialogComponent"], {
                panelClass: 'takethetour-modal'
            });
        }
    };
    TeachersDashboardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"] }
    ]; };
    TeachersDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/teacher/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"]])
    ], TeachersDashboardComponent);
    return TeachersDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/profile-edit/profile-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/teacher/profile-edit/profile-edit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/teacher/profile-edit/profile-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/teacher/profile-edit/profile-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: TeacherProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileEditComponent", function() { return TeacherProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modules/onboarding/onboarding.selectors */ "./src/app/store/modules/onboarding/onboarding.selectors.ts");
/* harmony import */ var _store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherProfileEditComponent = /** @class */ (function () {
    function TeacherProfileEditComponent(store) {
        this.store = store;
        // Store
        this.subscriptions = [];
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__["selectOnboardingStatus"]));
        this.errors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_onboarding_onboarding_selectors__WEBPACK_IMPORTED_MODULE_2__["selectOnboardingErrors"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (user) { return Boolean(user); }));
        this.teacher = null;
        // User view statuses - student or teacher
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__["ViewStatuses"];
        this.status = null;
        this.errors = null;
        this.usefulMessage = null;
        this.user = null;
    }
    TeacherProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_7__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].profile]));
        this.subscriptions.push(this.status$.subscribe(function (status) {
            _this.status = status;
        }), this.errors$.subscribe(function (errors) {
            _this.errors = errors;
        }), this.user$.subscribe(function (user) {
            if (user && !_this.user) {
                _this.user = user;
            }
        }));
    };
    TeacherProfileEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    TeacherProfileEditComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    TeacherProfileEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-profile-edit',
            template: __webpack_require__(/*! raw-loader!./profile-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.scss */ "./src/app/pages/teacher/profile-edit/profile-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TeacherProfileEditComponent);
    return TeacherProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/teacher/profile/profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\nsection {\n  margin-top: 40px; }\nsection hr {\n    margin-top: 20px;\n    margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy90ZWFjaGVyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxzRUFBWTtBQ0RaO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFJUSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFjaGVyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdGhlIGNvbW1vbiBzdHlsZXMgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwuIFdlIGluY2x1ZGUgdGhpcyBoZXJlIHNvIHRoYXQgeW91IG9ubHlcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cbi8vICoqQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhKipcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcblxuLy8gQXBwIHBhbGV0dGVcbiRwYWxldHRlOiAoXG4gIHdoaXRlOiAjZmZmLFxuICBlcnJvcjogI2Y0NDMzNixcbiAgY2hhcmNvYWw6ICMzMjJCMjMsXG4gIGJsYWNrOiAjMzIyQjIzLFxuICBzZW1pVHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gIDEwOiAjMTAwZTBiLFxuICAyMDogIzMyMmIyNSxcbiAgMzA6ICNjZmMyYjksXG4gIDQwOiAjYWM5YThjLFxuICA1MDogIzhlNDkxZCxcbiAgNjA6ICNlZGUzZDQsXG4gIDcwOiAjZWRlZGViLFxuICA4MDogI2Y0ZWVlNSxcbiAgOTA6ICNmZmZjZmEsXG4gIDEwMDogI2U4ZThlOCxcbiAgMTEwOiAjYTdhN2E3LFxuICAxMjA6ICM3ODc4NzgsXG4gIDEzMDogIzcxMTYwOSxcbiAgMTQwOiAjMDA5ZTc5LFxuICAxNTA6ICMyZjJmMmZcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb21tb24vc3R5bGVzLmNvbW1vbi5zY3NzJztcblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIGhyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/teacher/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/teacher/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: TeacherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileComponent", function() { return TeacherProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modules/teachers/teachers.actions */ "./src/app/store/modules/teachers/teachers.actions.ts");
/* harmony import */ var _store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
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







var TeacherProfileComponent = /** @class */ (function () {
    function TeacherProfileComponent(store, utils) {
        this.store = store;
        this.utils = utils;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_4__["RouteNames"];
        this.subscriptions = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserActive"]));
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_6__["selectTeachersObject"]));
        this.isValidVimeoUrl = false;
    }
    TeacherProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.user$
            .subscribe(function (user) {
            if (!_this.user && user && user.creator && user.creator.slug) {
                _this.user = user;
                _this.store.dispatch(new _store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_2__["GetTeacherBySlugRequestAction"]({
                    slug: user.creator.slug,
                    isLoggedin: true
                }));
            }
        }));
    };
    TeacherProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TeacherProfileComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).logall.apply(_a, __spread([text, this.constructor.name], args));
    };
    TeacherProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
    ]; };
    TeacherProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/teacher/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]])
    ], TeacherProfileComponent);
    return TeacherProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.no-recording-file p {\n  margin: 40px 0 20px;\n  text-align: center; }\n.no-recording-file a:not(:last-child) {\n  margin-bottom: 10px; }\n.timerWrapper {\n  margin-top: 40px;\n  padding: 0 5px;\n  display: block !important; }\n.timeline {\n  position: relative; }\n.middle-timeline:after {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  border-left: 1px solid #322B23;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%); }\n.line-tick {\n  position: absolute;\n  left: 52%;\n  width: 7px;\n  border-top: 1px solid #322B23; }\n.timeline-time {\n  position: relative; }\n.time-tick {\n  position: absolute; }\n.cursor-top {\n  position: absolute;\n  top: 0px;\n  left: calc(50% - 13px);\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-top: 13px solid #322B23;\n  z-index: 100; }\n.cursor-bottom {\n  position: absolute;\n  bottom: 0px;\n  left: calc(50% - 13px);\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 13px solid #322B23;\n  z-index: 100; }\n.cdk-drag-handle {\n  flex: 1; }\n.pointer-control {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  background-color: #fff;\n  outline: none;\n  cursor: pointer;\n  z-index: 100;\n  display: flex;\n  align-items: stretch; }\n.custom-tringle {\n  position: absolute;\n  left: -12px;\n  border-right: solid 36px #322B23;\n  border-bottom: solid 24px transparent;\n  border-top: solid 24px transparent; }\n.custom-tringle-2 {\n  position: absolute;\n  left: -10px;\n  border-right: solid 36px #fff;\n  border-bottom: solid 24px transparent;\n  border-top: solid 24px transparent;\n  z-index: 0; }\n.time-picker {\n  border-top: solid 1px;\n  border-bottom: solid 1px;\n  height: 48px;\n  width: 100%;\n  margin-left: 24px;\n  display: flex;\n  position: relative;\n  z-index: 1;\n  align-items: center; }\n.pose-pointer {\n  height: 48px;\n  width: 133px;\n  border-top: solid 1px;\n  border-bottom: solid 1px;\n  border-left: solid 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.play-record {\n  min-width: 48px;\n  height: 48px;\n  width: 48px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding: 16px 8px; }\n.pose-container {\n  position: absolute;\n  left: -13px;\n  width: 152px;\n  height: 48px;\n  outline: none; }\n.pose-container-2 {\n  position: relative;\n  height: 48px; }\n.middle-pose-line:after {\n  content: '';\n  position: absolute;\n  width: 32px;\n  top: 50%;\n  left: 0;\n  border-top: 1px solid #322B23;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n.pose-image {\n  position: absolute;\n  right: 48px;\n  width: 72px;\n  height: 46px;\n  border-left: 1px solid #322B23;\n  border-top: 1px solid #322B23;\n  border-bottom: 1px solid #322B23; }\n.pose-image-rounded {\n  border-top: #322B23;\n  border-radius: 6px 6px 0 0; }\n.pose-close {\n  position: absolute;\n  right: 0;\n  width: 48px;\n  height: 48px; }\n.overlayed-timeline-top {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  opacity: 0.7;\n  background: #fff;\n  z-index: 100; }\n.overlayed-timeline-bottom {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  opacity: 0.7;\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy90ZWFjaGVyL3JlY29yZGluZ3MvcmVjb3JkL3JlY29yZC1lZGl0LWF1ZGlvL3JlY29yZC1lZGl0LWF1ZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLHNFQUFZO0FDRFo7RUFFSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFIdEI7RUFPSSxtQkFBbUIsRUFBQTtBQUl2QjtFQUNFLGdCQUFnQjtFQUVoQixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULDhCRHJCYztFQ3NCZCxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViw2QkQ3QmMsRUFBQTtBQ2dDaEI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyw4QkQ5Q2M7RUMrQ2QsWUFBWSxFQUFBO0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLGlDRHhEYztFQ3lEZCxZQUFZLEVBQUE7QUFHZDtFQUNFLE9BQU8sRUFBQTtBQU9UO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JEM0VXO0VDNEVYLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0NEbkZjO0VDb0ZkLHFDQUFxQztFQUNyQyxrQ0FBa0MsRUFBQTtBQUdwQztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNkJEOUZXO0VDK0ZYLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsVUFBVSxFQUFBO0FBR1o7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFFWixhQUFhLEVBQUE7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixPQUFPO0VBQ1AsNkJEckpjO0VDc0pkLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkQ5SmM7RUMrSmQsNkJEL0pjO0VDZ0tkLGdDRGhLYyxFQUFBO0FDa0toQjtFQUNFLG1CRG5LYztFQ29LZCwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCRHRMVztFQ3VMWCxZQUFZLEVBQUE7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkQvTFcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmQvcmVjb3JkLWVkaXQtYXVkaW8vcmVjb3JkLWVkaXQtYXVkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbmNsdWRlIHRoZSBjb21tb24gc3R5bGVzIGZvciBBbmd1bGFyIE1hdGVyaWFsLiBXZSBpbmNsdWRlIHRoaXMgaGVyZSBzbyB0aGF0IHlvdSBvbmx5XG4vLyBoYXZlIHRvIGxvYWQgYSBzaW5nbGUgY3NzIGZpbGUgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwgaW4geW91ciBhcHAuXG4vLyAqKkJlIHN1cmUgdGhhdCB5b3Ugb25seSBldmVyIGluY2x1ZGUgdGhpcyBtaXhpbiBvbmNlISoqXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XG5cbi8vIEFwcCBwYWxldHRlXG4kcGFsZXR0ZTogKFxuICB3aGl0ZTogI2ZmZixcbiAgZXJyb3I6ICNmNDQzMzYsXG4gIGNoYXJjb2FsOiAjMzIyQjIzLFxuICBibGFjazogIzMyMkIyMyxcbiAgc2VtaVRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDAuMDQpLFxuICAxMDogIzEwMGUwYixcbiAgMjA6ICMzMjJiMjUsXG4gIDMwOiAjY2ZjMmI5LFxuICA0MDogI2FjOWE4YyxcbiAgNTA6ICM4ZTQ5MWQsXG4gIDYwOiAjZWRlM2Q0LFxuICA3MDogI2VkZWRlYixcbiAgODA6ICNmNGVlZTUsXG4gIDkwOiAjZmZmY2ZhLFxuICAxMDA6ICNlOGU4ZTgsXG4gIDExMDogI2E3YTdhNyxcbiAgMTIwOiAjNzg3ODc4LFxuICAxMzA6ICM3MTE2MDksXG4gIDE0MDogIzAwOWU3OSxcbiAgMTUwOiAjMmYyZjJmXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vdGhlbWUvY29tbW9uL3N0eWxlcy5jb21tb24uc2Nzcyc7XG5cbi5uby1yZWNvcmRpbmctZmlsZSB7XG4gIHAge1xuICAgIG1hcmdpbjogNDBweCAwIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi50aW1lcldyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBcbiAgcGFkZGluZzogMCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1pZGRsZS10aW1lbGluZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG5cbi5saW5lLXRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUyJTtcbiAgd2lkdGg6IDdweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbn1cblxuLnRpbWVsaW5lLXRpbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aW1lLXRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jdXJzb3ItdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAxM3B4KTtcbiAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCBtYXAtZ2V0KCRwYWxldHRlLCBibGFjayk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmN1cnNvci1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEzcHgpO1xuICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY2RrLWRyYWctaGFuZGxlIHtcbiAgZmxleDogMTtcbn1cblxuICAvLyBmb3IgZHJhZ2dpbmcgcG9zaW50ZXIgY29udHJvbCBpbiBlZGl0IHJlY29yZGluZyBwYWdlXG4ucG9pbnRlci1jb250cm9sLWNvbnRhaW5lciB7XG59XG5cbi5wb2ludGVyLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIHdoaXRlKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uY3VzdG9tLXRyaW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMnB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDM2cHggbWFwLWdldCgkcGFsZXR0ZSwgYmxhY2spO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAyNHB4IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiBzb2xpZCAyNHB4IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLXRyaW5nbGUtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMzZweCBtYXAtZ2V0KCRwYWxldHRlLCB3aGl0ZSk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDI0cHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IHNvbGlkIDI0cHggdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDA7XG59XG5cbi50aW1lLXBpY2tlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBtYXAtZ2V0KCRwYWxldHRlLCBncmVlbik7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBtYXAtZ2V0KCRwYWxldHRlLCBncmVlbik7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3NlLXBvaW50ZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzNweDtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IG1hcC1nZXQoJHBhbGV0dGUsIHJlZCk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBtYXAtZ2V0KCRwYWxldHRlLCByZWQpO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IG1hcC1nZXQoJHBhbGV0dGUsIHJlZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheS1yZWNvcmQge1xuICBtaW4td2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE2cHggOHB4O1xufVxuXG4ucG9zZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xM3B4O1xuICB3aWR0aDogMTUycHg7XG4gIGhlaWdodDogNDhweDtcblxuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucG9zZS1jb250YWluZXItMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ubWlkZGxlLXBvc2UtbGluZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMnB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucG9zZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbWFwLWdldCgkcGFsZXR0ZSwgYmxhY2spO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbWFwLWdldCgkcGFsZXR0ZSwgYmxhY2spO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbWFwLWdldCgkcGFsZXR0ZSwgYmxhY2spO1xufVxuLnBvc2UtaW1hZ2Utcm91bmRlZCB7XG4gIGJvcmRlci10b3A6IG1hcC1nZXQoJHBhbGV0dGUsIGJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG59XG5cbi5wb3NlLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLm92ZXJsYXllZC10aW1lbGluZS10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNztcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkcGFsZXR0ZSwgd2hpdGUpO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5ZWQtdGltZWxpbmUtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJHBhbGV0dGUsIHdoaXRlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RecordEditAudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordEditAudioComponent", function() { return RecordEditAudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var _src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/poses/poses.selectors */ "./src/app/store/modules/poses/poses.selectors.ts");
/* harmony import */ var _src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.selectors */ "./src/app/store/modules/recording/recording.selectors.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/services/api.service.interface */ "./src/app/services/api.service.interface.ts");
/* harmony import */ var _recording_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../recording-status */ "./src/app/pages/teacher/recordings/recording-status.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
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















var RecordEditAudioComponent = /** @class */ (function () {
    function RecordEditAudioComponent(router, store, activatedRoute, location, utils, spinner) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.utils = utils;
        this.spinner = spinner;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"];
        this.recordingStatus = _recording_status__WEBPACK_IMPORTED_MODULE_13__["RecordingStatus"];
        this.isAudioLoaded = false;
        this.pointerControlHeight = 48;
        this.timelineHeight = 0;
        this.timelineTicks = [];
        this.timelineTicksCount = 10;
        this.factor = 1;
        this.timelinePoses = [];
        this.pointerControlTopOffset = { x: 0, y: 0 };
        this.currentPosition = 0;
        this.cursorTopOffset = { x: 0, y: 0 };
        this.cursorBottomOffset = { x: 0, y: 0 };
        this.cursorTopPosition = 0;
        this.cursorBottomPosition = 0;
        this.poses$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_poses_poses_selectors__WEBPACK_IMPORTED_MODULE_5__["selectPoses"]));
        this.poses = [];
        this.subscriptions = [];
        this.isAddingPose = false;
        this.recordings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_6__["selectRecordingEntities"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (recordings) {
            var isArray = Array.isArray(recordings);
            if (!isArray && _this.status !== _src_app_services_api_service_interface__WEBPACK_IMPORTED_MODULE_12__["RequestStatus"].pending) {
                _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["GetRecordingsListRequestAction"]());
            }
            return isArray;
        }));
        this.creatorSlug = this.activatedRoute.snapshot.paramMap.get('creatorslug');
        this.recordingSlug = this.activatedRoute.snapshot.paramMap.get('slug');
        this.editRecordingUrl = ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].recordings, _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].editRecording];
    }
    RecordEditAudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log('init audio edit');
        this.load();
        this.audio = new Audio();
        this.log('AUDIO: ', this.audio);
        this.subscriptions.push(this.recordings$.subscribe(function (recordings) {
            _this.recording = recordings.find(function (recording) { return recording.slug === _this.recordingSlug; });
            _this.log('subscribe to recordings/', _this.recording);
            if (!_this.recording) {
                _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].notFound]);
            }
            _this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_11__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_7__["RouteNames"].recordings, _this.recording.slug]));
            _this.recordingId = _this.recording.id;
            if (_this.recording.file_item) {
                _this.audio.src = _this.recording.file_item;
                _this.audio.currentTime = 0;
                _this.log('audio src', _this.audio.src, _this.audio.currentTime);
            }
            if (_this.recording.start_timestamp) {
                _this.audio.currentTime = _this.recording.start_timestamp * _this.factor;
                _this.log('reupdate current time: ', _this.audio.currentTime);
            }
            _this.audio.addEventListener('timeupdate', function () {
                _this.onAudioTimeUpdate();
            });
            // THIS WON'T WORK ON IOS!!
            _this.audio.addEventListener('loadeddata', function () {
                _this.log('loadeddata EVENT');
                // this.audioLoaded();
            });
            _this.audio.addEventListener('canplaythrough', function () {
                // this keeps firing on non ios browsers
                _this.log('audio loaded already');
                if (!_this.isAudioLoaded) {
                    _this.log('load this mofo');
                    _this.audioLoaded();
                }
            });
            _this.audio.addEventListener('ended', function () {
                _this.audioEnded();
            });
            _this.audio.load();
            _this.pause();
            _this.spinner.hide();
        }), this.poses$.subscribe(function (poses) {
            _this.poses = poses;
        }));
    };
    RecordEditAudioComponent.prototype.audioLoaded = function () {
        this.isAudioLoaded = true;
        this.audioDuration = this.audio.duration;
        this.log('Audio duration: ', this.audioDuration);
        this.buildTimeline();
    };
    RecordEditAudioComponent.prototype.onPlayPauseRecord = function () {
        if (this.isAudioLoaded) {
            if (!this.audio.paused) {
                this.pause();
            }
            else {
                this.audio.play();
            }
        }
    };
    RecordEditAudioComponent.prototype.pause = function () {
        if (this.audio) {
            this.audio.pause();
            this.log('paused? ', this.audio.paused);
        }
    };
    RecordEditAudioComponent.prototype.audioEnded = function () {
        this.audio.pause();
        this.audio.currentTime = 0;
    };
    RecordEditAudioComponent.prototype.onAudioTimeUpdate = function () {
        this.log('onAudioTimeUpdate');
        this.currentPosition = this.audio.currentTime * this.factor;
        this.log('onAudioTimeUpdate1', this.currentPosition, this.audio.currentTime);
        this.positionPointerControl = { x: 0, y: this.currentPosition };
        this.log('onAudioTimeUpdate3 positionPointerControl', this.positionPointerControl);
        if (this.currentPosition >= this.cursorBottomPosition - 36) {
            this.log('onAudioTimeUpdate2', this.currentPosition);
            this.currentPosition = this.cursorBottomPosition - 36;
            this.audio.pause();
            this.audio.currentTime = this.currentPosition;
        }
    };
    RecordEditAudioComponent.prototype.onSetAudioCurrentTime = function (event) {
        this.pointerControlTopOffset = __assign({}, event.source._dragRef._passiveTransform);
        this.currentPosition = Math.abs(Math.trunc(this.pointerControlTopOffset.y));
        this.log('onSetAudioCurrentTime', this.currentPosition);
        if (this.currentPosition <= this.cursorTopPosition) {
            this.log('onSetAudioCurrentTime1', this.currentPosition);
            this.currentPosition = this.cursorTopPosition * this.factor - 12;
            this.audio.pause();
            this.audio.currentTime = this.currentPosition;
        }
        if (this.currentPosition >= this.cursorBottomPosition) {
            this.log('onSetAudioCurrentTime2', this.currentPosition);
            this.currentPosition = this.cursorBottomPosition - 36;
            this.audio.pause();
            this.audio.currentTime = this.currentPosition;
        }
        if (this.currentPosition <= this.audioDuration * this.factor) {
            this.log('onSetAudioCurrentTime3', this.currentPosition, this.audioDuration);
            this.audio.currentTime = this.currentPosition / this.factor;
        }
        else {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.currentPosition = 0;
        }
    };
    RecordEditAudioComponent.prototype.onMovedCursorTop = function (event) {
        this.cursorTopOffset = __assign({}, event.source._dragRef._passiveTransform);
        this.cursorTopPosition = Math.abs(Math.trunc(this.cursorTopOffset.y)) / this.factor;
        this.overlayedTopAreaHeight = Math.abs(Math.trunc(this.cursorTopOffset.y));
        if (this.currentPosition <= this.cursorTopPosition) {
            this.currentPosition = this.cursorTopPosition - 12;
            this.audio.currentTime = this.currentPosition;
            this.positionPointerControl = { x: 0, y: this.currentPosition };
        }
    };
    RecordEditAudioComponent.prototype.onMovedCursorBottom = function (event) {
        this.cursorBottomOffset = __assign({}, event.source._dragRef._passiveTransform);
        this.cursorBottomPosition = this.timelineHeight - Math.abs(Math.trunc(this.cursorBottomOffset.y));
        this.overlayedBottomAreaHeight = Math.abs(Math.trunc(this.cursorBottomOffset.y));
        if (this.currentPosition >= this.cursorBottomPosition) {
            this.currentPosition = this.cursorBottomPosition - 36;
            this.audio.currentTime = this.currentPosition;
            this.audio.pause();
            this.positionPointerControl = { x: 0, y: this.currentPosition };
        }
    };
    RecordEditAudioComponent.prototype.onAddPose = function () {
        this.isAddingPose = true;
    };
    RecordEditAudioComponent.prototype.onDeletePose = function (pose) {
        var index = this.timelinePoses.indexOf(pose);
        if (index > -1) {
            this.timelinePoses.splice(index, 1);
        }
    };
    RecordEditAudioComponent.prototype.onSavePose = function () {
        if (this.currentPose) {
            this.timelinePoses.push({ timestamp: this.currentPosition, pose: this.currentPose });
        }
        this.currentPose = null;
        this.isAddingPose = false;
    };
    RecordEditAudioComponent.prototype.onChangeSelectedPose = function (pose) {
        this.currentPose = pose;
    };
    RecordEditAudioComponent.prototype.onCancelAddPose = function () {
        this.isAddingPose = false;
    };
    RecordEditAudioComponent.prototype.onCancelEditRecording = function () {
        this.audioEnded();
        this.location.back();
    };
    RecordEditAudioComponent.prototype.onSaveEditRecording = function () {
        var start_timestamp = this.cursorTopPosition;
        if (this.cursorTopPosition >= 12) {
            start_timestamp = this.cursorTopPosition - 12;
        }
        var end_timestamp = this.cursorBottomPosition - 36;
        var body = {
            start_timestamp: start_timestamp,
            end_timestamp: end_timestamp
        };
        var poses = [];
        this.timelinePoses.forEach(function (pose) {
            poses.push({ timestamp: pose.timestamp, pose: pose.pose.id });
        });
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateRecordingRequestAction"]({
            id: this.recordingId,
            body: body
        }));
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateRecordingPosesRequestAction"]({
            id: this.recordingId,
            poses: { poses: poses }
        }));
        this.router.navigate(this.editRecordingUrl, {
            queryParams: { creatorslug: this.creatorSlug, recordingSlug: this.recordingSlug }
        });
    };
    RecordEditAudioComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    RecordEditAudioComponent.prototype.load = function () {
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["GetRecordingsListRequestAction"]());
    };
    RecordEditAudioComponent.prototype.buildTimeline = function () {
        this.timelineHeight = Math.trunc(this.audioDuration) + this.pointerControlHeight;
        // make sure that our timeline has the correct height for small recordings too! stretch to a min height
        if (this.timelineHeight < 500) {
            // TODO: uncomment and figure out factor thing
            // this.factor = 3;
            this.timelineHeight = this.timelineHeight * this.factor;
        }
        this.log('timelineHeight', this.timelineHeight);
        this.log('pointerControlHeight', this.pointerControlHeight);
        this.cursorBottomPosition = this.timelineHeight - this.pointerControlHeight / 4;
        // timelineTicks
        var ticks = new Array(this.timelineTicksCount);
        this.timelineTicks = new Array(this.timelineTicksCount);
        this.log('Ticks 1:', ticks, this.timelineTicks);
        var timelineTickHeight = (this.timelineHeight - this.pointerControlHeight) / this.timelineTicks.length;
        this.log('timelineTickHeight:', timelineTickHeight, this.audioDuration);
        for (var i = 0; i < this.timelineTicks.length; i++) {
            if (i === 0) {
                var lineItem = this.pointerControlHeight / 2;
                this.timelineTicks[i] = { tickTime: '00:00:00', tickPosition: lineItem };
                i++;
            }
            var tickItem = Math.trunc(i > 0 ? timelineTickHeight + this.timelineTicks[i - 1].tickPosition : timelineTickHeight);
            var tickTime = moment__WEBPACK_IMPORTED_MODULE_1__()
                .set({ hour: 0, minute: 0, second: (tickItem - this.pointerControlHeight / 2) / this.factor, millisecond: 0 })
                .format('HH:mm:ss');
            this.log('TICKS? ', tickItem, tickTime);
            this.timelineTicks[i] = {
                tickTime: tickTime,
                tickPosition: tickItem
            };
        }
        this.log('Ticks 2:', ticks, this.timelineTicks);
    };
    RecordEditAudioComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).log.apply(_a, __spread([text, this.constructor.name], args));
    };
    RecordEditAudioComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_14__["SpinnerOverlayService"] }
    ]; };
    RecordEditAudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-edit-audio',
            template: __webpack_require__(/*! raw-loader!./record-edit-audio.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.html"),
            styles: [__webpack_require__(/*! ./record-edit-audio.component.scss */ "./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_14__["SpinnerOverlayService"]])
    ], RecordEditAudioComponent);
    return RecordEditAudioComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section.audio-element {\n    margin-top: 24px;\n    text-align: center; }\n  audio {\n  outline: none; }\n  .cta {\n  margin-top: 30px; }\n  .cta .two-col-btns {\n    margin-top: 30px; }\n  .no-edit-message {\n  margin-top: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmQvcmVjb3JkLWVkaXQtcmVjb3JkaW5nL3JlY29yZC1lZGl0LXJlY29yZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBSVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFJUSxnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmQvcmVjb3JkLWVkaXQtcmVjb3JkaW5nL3JlY29yZC1lZGl0LXJlY29yZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAmLmF1ZGlvLWVsZW1lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5hdWRpbyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmN0YSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBcbiAgICAudHdvLWNvbC1idG5zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59XG5cbi5uby1lZGl0LW1lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RecordEditRecordingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordEditRecordingComponent", function() { return RecordEditRecordingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/components/modals/confirmation-dialog/confirmation-dialog.component */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/services/audio/audio-recording.service */ "./src/app/services/audio/audio-recording.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.selectors */ "./src/app/store/modules/recording/recording.selectors.ts");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
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
















var RecordEditRecordingComponent = /** @class */ (function () {
    function RecordEditRecordingComponent(dialog, fb, audioRecordingService, store, router, activatedRoute, utils, spinner) {
        this.dialog = dialog;
        this.fb = fb;
        this.audioRecordingService = audioRecordingService;
        this.store = store;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.utils = utils;
        this.spinner = spinner;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"];
        this.recordClassForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', []],
            difficulty: ['', []],
            props: ['', []],
            is_fixed: [false]
        });
        this.formFilled = false;
        this.message = '';
        this.subscriptions = [];
        this.recording$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_9__["selectRecordings"]));
        this.savingRecording = false;
        this.initialValues = {};
        this.submitDisabled = false;
    }
    RecordEditRecordingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.recordClassForm.valueChanges.subscribe(function (change) {
            _this.submitDisabled = !_this.isFormEdited();
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this.activatedRoute.paramMap, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_12__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (user) { return Boolean(user); })), function (params, user) { return ({ params: params, user: user }); }).subscribe(function (_a) {
            var params = _a.params, user = _a.user;
            var curTeacher = user.creator;
            _this.log('which recording?', params, curTeacher);
            if (params.params.slug && curTeacher && curTeacher.slug) {
                _this.recordingSlug = params.params.slug;
                _this.log('RECORDINGSLUG: ', _this.recordingSlug);
                _this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_14__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].recordings]));
                _this.log('dispatch get recording by slug request action');
                _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_7__["GetRecordingBySlugRequestAction"]({
                    creatorslug: curTeacher.slug,
                    slug: _this.recordingSlug
                }));
            }
        }), this.recording$.subscribe(function (_a) {
            var currentRecording = _a.currentRecording;
            if (currentRecording != null) {
                _this.log('I got the recording: ', currentRecording);
                _this.recording = currentRecording;
                _this.recordingId = _this.recording.id;
                _this.log('setting recording id', _this.recordingId);
                if (!_this.formFilled) {
                    _this.fillForm(currentRecording);
                }
                _this.spinner.hide();
            }
            else {
                if (_this.savingRecording) {
                    _this.savingRecording = false;
                    // this.message = 'The recording has been updated.';
                    // this.spinner.hide();
                    _this.log('going to libraryyy!');
                    _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].recordings]);
                }
            }
        }));
    };
    RecordEditRecordingComponent.prototype.fillForm = function (recording) {
        var _this = this;
        this.formFilled = true;
        var formVals = Object.keys(this.recordClassForm.value);
        formVals.map(function (val) {
            if (recording[val]) {
                _this.recordClassForm.controls[val].setValue(recording[val]);
            }
            _this.initialValues[val] = _this.recordClassForm.controls[val].value;
        });
    };
    RecordEditRecordingComponent.prototype.openDeleteRecordingDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                message: 'Are you sure you want to delete this recording?',
                buttonText: {
                    ok: 'Yes',
                    cancel: 'No'
                }
            }
        });
        this.subscriptions.push(dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.abortRecording();
                _this.recordClassForm.reset();
                _this.prepareRequest('deleted');
                _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteRecordingRequestAction"](_this.recording.id));
            }
        }));
    };
    RecordEditRecordingComponent.prototype.onEditAudioBtnClick = function () {
        var _this = this;
        var audioEditRoute = ['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].recordings, this.recordingSlug, _src_app_route_names__WEBPACK_IMPORTED_MODULE_10__["RouteNames"].editAudio];
        this.log('AUDIO EDIT ROUTE ==>', audioEditRoute);
        if (!this.isFormEdited()) {
            this.router.navigate(audioEditRoute);
        }
        else {
            var dialogRef = this.dialog.open(_src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
                data: {
                    message: 'Are you sure you want to leave this page?',
                    subtext: 'Your changes will not be saved',
                    buttonText: {
                        ok: 'Yes',
                        cancel: 'No'
                    }
                }
            });
            this.subscriptions.push(dialogRef.afterClosed().subscribe(function (confirmed) {
                if (confirmed) {
                    _this.router.navigate(audioEditRoute);
                }
            }));
        }
    };
    RecordEditRecordingComponent.prototype.handleSubmitClick = function () {
        this.recordClassForm.markAllAsTouched();
        if (this.recordClassForm.invalid) {
            return;
        }
        var isEdited = this.isFormEdited();
        this.log('Is edited..?', isEdited, this.initialValues, this.recordClassForm.value);
        // if (isEdited) {
        this.prepareRequest('edited');
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateRecordingRequestAction"]({
            id: this.recordingId,
            body: this.recordClassForm.value
        }));
        // } else {
        //   this.log('no editing needed');
        //   this.router.navigate(['/', RouteNames.teacher, RouteNames.recordings]);
        // }
    };
    RecordEditRecordingComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.recordClassForm.reset();
    };
    RecordEditRecordingComponent.prototype.prepareRequest = function (actionType) {
        this.spinner.show();
        this.savingRecording = actionType;
    };
    RecordEditRecordingComponent.prototype.abortRecording = function () {
        this.audioRecordingService.abortRecording();
    };
    RecordEditRecordingComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).log.apply(_a, __spread([text, this.constructor.name], args));
    };
    RecordEditRecordingComponent.prototype.isFormEdited = function () {
        var _this = this;
        var hasChanged = false;
        var vals = Object.keys(this.initialValues);
        vals.map(function (val) {
            if (_this.initialValues[val] !== _this.recordClassForm.value[val]) {
                hasChanged = true;
            }
        });
        return hasChanged;
    };
    RecordEditRecordingComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_4__["AudioRecordingService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_15__["SpinnerOverlayService"] }
    ]; };
    RecordEditRecordingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-edit-recording',
            template: __webpack_require__(/*! raw-loader!./record-edit-recording.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.html"),
            styles: [__webpack_require__(/*! ./record-edit-recording.component.scss */ "./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_4__["AudioRecordingService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"],
            _services__WEBPACK_IMPORTED_MODULE_15__["SpinnerOverlayService"]])
    ], RecordEditRecordingComponent);
    return RecordEditRecordingComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-view/record-view.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-view/record-view.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmQvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record-view/record-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record-view/record-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RecordViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordViewComponent", function() { return RecordViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.selectors */ "./src/app/store/modules/recording/recording.selectors.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
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












var RecordViewComponent = /** @class */ (function () {
    function RecordViewComponent(store, spinnerOverlayService, activeRoute, router, utils) {
        this.store = store;
        this.spinnerOverlayService = spinnerOverlayService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.utils = utils;
        this.subscriptions = [];
        this.recordings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_2__["selectRecordingEntities"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean));
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_2__["selectRecordingStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean));
    }
    RecordViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.activeRoute.paramMap, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_9__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (user) { return Boolean(user); })), function (params, user) { return ({ params: params, user: user }); }).subscribe(function (pair) {
            var params = pair.params;
            var user = pair.user;
            _this.log('from recording view compoennt:', { user: user, params: params });
            if (user.view_status === _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_10__["ViewStatuses"].STUDENT) {
                _this.router.navigate(['/']);
            }
            if (params.params.slug && user.creator && user.creator.slug) {
                _this.log('new GetRecordingBySlugRequestAction: ', {
                    body: { creatorslug: user.creator.slug, slug: params.params.slug }
                });
                _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_5__["GetRecordingBySlugRequestAction"]({
                    creatorslug: user.creator.slug,
                    slug: params.params.slug
                }));
            }
        }), this.recordings$.subscribe(function (recordings) {
            var recordingSlug = _this.activeRoute.snapshot.paramMap.get('slug');
            _this.log('recordings: ', recordings);
            if (Array.isArray(recordings)) {
                _this.recording = recordings.find(function (recording) {
                    return recording.slug === recordingSlug;
                });
            }
            else {
                if (recordingSlug === recordings.slug) {
                    _this.recording = recordings;
                }
                else {
                    _this.recording = false;
                }
            }
            _this.log('GOT RECORDING: ', _this.recording);
            if (!_this.recording) {
                _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].notFound]);
            }
        }), this.status$.subscribe(function (status) {
            _this.status = status;
            if (status === 'pending') {
                // showoverlay
            }
            else {
                // hideoverlay
            }
        }));
    };
    RecordViewComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    RecordViewComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).log.apply(_a, __spread([text, this.constructor.name], args));
    };
    RecordViewComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] }
    ]; };
    RecordViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-view',
            template: __webpack_require__(/*! raw-loader!./record-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record-view/record-view.component.html"),
            styles: [__webpack_require__(/*! ./record-view.component.scss */ "./src/app/pages/teacher/recordings/record/record-view/record-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]])
    ], RecordViewComponent);
    return RecordViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\nsection {\n  margin-top: 24px; }\nsection.record {\n    margin-top: 60px;\n    text-align: center; }\nsection .complete-register-title {\n    margin-bottom: 20px; }\n.record-stop-btn {\n  margin: 30px auto; }\n.record-stop-btn span {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    background-color: #322B23;\n    transition: background-color 0.3s linear; }\n.record-stop-btn span:hover {\n      background-color: #009e79; }\n.cancel-btn {\n  width: auto;\n  margin: 30px auto 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MiLCIvVXNlcnMva2hyZWJ0b3YvUHJvamVjdHMvam91cm5leWludG8tZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy90ZWFjaGVyL3JlY29yZGluZ3MvcmVjb3JkL3JlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxzRUFBWTtBQ0RaO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFJUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUFMMUI7SUFTUSxtQkFBbUIsRUFBQTtBQUkzQjtFQUNJLGlCQUFpQixFQUFBO0FBRHJCO0lBSVEscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBRVoseUJEYlE7SUNlUix3Q0FBd0MsRUFBQTtBQVZoRDtNQWFZLHlCREhFLEVBQUE7QUNRZDtFQUNJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmQvcmVjb3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuXG4vLyBBcHAgcGFsZXR0ZVxuJHBhbGV0dGU6IChcbiAgd2hpdGU6ICNmZmYsXG4gIGVycm9yOiAjZjQ0MzM2LFxuICBjaGFyY29hbDogIzMyMkIyMyxcbiAgYmxhY2s6ICMzMjJCMjMsXG4gIHNlbWlUcmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgMTA6ICMxMDBlMGIsXG4gIDIwOiAjMzIyYjI1LFxuICAzMDogI2NmYzJiOSxcbiAgNDA6ICNhYzlhOGMsXG4gIDUwOiAjOGU0OTFkLFxuICA2MDogI2VkZTNkNCxcbiAgNzA6ICNlZGVkZWIsXG4gIDgwOiAjZjRlZWU1LFxuICA5MDogI2ZmZmNmYSxcbiAgMTAwOiAjZThlOGU4LFxuICAxMTA6ICNhN2E3YTcsXG4gIDEyMDogIzc4Nzg3OCxcbiAgMTMwOiAjNzExNjA5LFxuICAxNDA6ICMwMDllNzksXG4gIDE1MDogIzJmMmYyZlxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL2NvbW1vbi9zdHlsZXMuY29tbW9uLnNjc3MnO1xuXG5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgJi5yZWNvcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlLXJlZ2lzdGVyLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5yZWNvcmQtc3RvcC1idG4ge1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCBibGFjayk7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGxpbmVhcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsIDE0MCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordComponent", function() { return RecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services/audio/audio-recording.service */ "./src/app/services/audio/audio-recording.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_audio_recording_audio_recording_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/audio-recording/audio-recording.actions */ "./src/app/store/modules/audio-recording/audio-recording.actions.ts");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/components/modals/confirmation-dialog/confirmation-dialog.component */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _src_app_services_local_db_dexie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/services/local-db/dexie.service */ "./src/app/services/local-db/dexie.service.ts");
/* harmony import */ var _src_app_store_modules_audio_recording_audio_recording_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/store/modules/audio-recording/audio-recording.selectors */ "./src/app/store/modules/audio-recording/audio-recording.selectors.ts");
/* harmony import */ var _src_app_components_modals_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/modals/notification-dialog/notification-dialog.component */ "./src/app/components/modals/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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

















var RecordComponent = /** @class */ (function () {
    function RecordComponent(audioRecordingService, sanitizer, store, dialog, router, utilsService, dexieService, spinner) {
        this.audioRecordingService = audioRecordingService;
        this.sanitizer = sanitizer;
        this.store = store;
        this.dialog = dialog;
        this.router = router;
        this.utilsService = utilsService;
        this.dexieService = dexieService;
        this.spinner = spinner;
        this.isCanceled = false;
        this.subscriptions = [];
        this.recording$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_audio_recording_audio_recording_selectors__WEBPACK_IMPORTED_MODULE_14__["selectAudioRecording"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (recording) { return Boolean(recording); }));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_11__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(Boolean));
        this.spinner.hide();
        // check if we can use persistent storage
        // TODO: uncomment
        this.initStoragePersistence();
        // start the time update display
        this.initTimeDisplay();
        // this.audioRecordingService.recordingFailed().subscribe(() => {
        //   console.log('recording failed')
        //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        //     data: {
        //       message: 'Sorry your recording failed',
        //       buttonText: {
        //         ok: 'Close',
        //       }
        //     }
        //   });
        //   this.isRecording = false;
        // });
    }
    RecordComponent.prototype.initTimeDisplay = function () {
        var _this = this;
        this.subscriptions.push(this.audioRecordingService.getRecordedTime()
            .subscribe(function (time) {
            if (time) {
                _this.log('recordedtime', time);
            }
            _this.recordedTime = time;
        }));
    };
    RecordComponent.prototype.initStoragePersistence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, persist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.dexieService.tryPersistWithoutPromtingUser()];
                    case 1:
                        persist = _a.sent();
                        this.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX initStoragePersistence', persist);
                        switch (persist) {
                            case 'never':
                                this.log('never persist!!');
                                if (navigator.storage && navigator.storage.persist) {
                                    navigator.storage.persist().then(function (persistent) {
                                        if (persistent) {
                                            self.log('Storage will not be cleared except by explicit user action');
                                        }
                                        else {
                                            self.log('Storage may be cleared by the UA under storage pressure.');
                                        }
                                    });
                                }
                                else {
                                    this.log('There is not storage in navigator object at alll.....!');
                                }
                                break;
                            case 'persisted':
                                this.log('Successfully persisted storage silently');
                                break;
                            case 'prompt':
                                navigator.storage.persist()
                                    .then(function (persistent) {
                                    if (persistent) {
                                        self.log('Storage will not be cleared except by explicit user action');
                                    }
                                    else {
                                        self.log('Storage may be cleared by the UA under storage pressure.');
                                    }
                                });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log('init record component');
        this.subscriptions.push(this.recording$.subscribe(function (recording) {
            _this.log('recording subscription', recording);
            _this.recording = recording;
            // this.recordingStateService.RecordingId = this.recording.id;
            // this.creatorSlug = this.recording.creatorslug;
            // this.recordingSlug = this.recording.slug;
            // this.audioRecordingService.startRecording(this.recording.id);
        }), this.user$.subscribe(function (user) {
            _this.user = user;
        }));
    };
    // click the recording button - either starts or stops the recording depending on action
    RecordComponent.prototype.startStopRecording = function () {
        if (!this.audioRecordingService.recorder) {
            this.log('start Recording and get an id');
            this.recordingUniqueKey = this.utilsService.getUuid();
            this.log(this.recordingUniqueKey);
            this.isCanceled = false;
            // Store recording started and sets status 'recording'
            this.store.dispatch(new _src_app_store_modules_audio_recording_audio_recording_actions__WEBPACK_IMPORTED_MODULE_4__["StartRecordingRequestAction"](this.recordingUniqueKey));
        }
        else {
            // finish the recording via dispatches
            this.log('recording has stopped....', this.recording);
            this.audioRecordingService.stopRecording(this.recordingUniqueKey);
            if (this.audioRecordingService.isOnline) {
                this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].recordings, this.recording.slug, _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].editRecording]);
            }
            else {
                this.openOfflineDialog();
            }
        }
    };
    RecordComponent.prototype.openOfflineDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_src_app_components_modals_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_15__["NotificationDialogComponent"], {
            data: {
                message: 'You are currently offline. Your recording will be saved in your browser until you are online again.',
            }
        });
        this.subscriptions.push(dialogRef.afterClosed().subscribe(function (confirmed) {
            _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_9__["RouteNames"].teacher]);
        }));
    };
    RecordComponent.prototype.openCancelRecordingDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_src_app_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                message: 'Do you really want to cancel and discard this recording?',
                buttonText: {
                    ok: 'Yes',
                    cancel: 'No'
                }
            }
        });
        this.subscriptions.push(dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.isCanceled = true;
                _this.audioRecordingService.abortRecording();
                // the teacher does not want to save the recording!
                if (_this.recording && _this.recording.id) {
                    _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRecordingRequestAction"](_this.recording.id));
                }
            }
        }));
    };
    RecordComponent.prototype.ngOnDestroy = function () {
        this.audioRecordingService.abortRecording();
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    RecordComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utilsService).log.apply(_a, __spread([text, this.constructor.name], args));
    };
    RecordComponent.ctorParameters = function () { return [
        { type: _src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_2__["AudioRecordingService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilsService"] },
        { type: _src_app_services_local_db_dexie_service__WEBPACK_IMPORTED_MODULE_13__["DexieService"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_16__["SpinnerOverlayService"] }
    ]; };
    RecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record',
            template: __webpack_require__(/*! raw-loader!./record.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/record/record.component.html"),
            styles: [__webpack_require__(/*! ./record.component.scss */ "./src/app/pages/teacher/recordings/record/record.component.scss")]
        }),
        __metadata("design:paramtypes", [_src_app_services_audio_audio_recording_service__WEBPACK_IMPORTED_MODULE_2__["AudioRecordingService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilsService"],
            _src_app_services_local_db_dexie_service__WEBPACK_IMPORTED_MODULE_13__["DexieService"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_16__["SpinnerOverlayService"]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/record/record.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/record/record.module.ts ***!
  \******************************************************************/
/*! exports provided: RecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordModule", function() { return RecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_components_modals_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/components/modals/confirmation-dialog/confirmation-dialog.module */ "./src/app/components/modals/confirmation-dialog/confirmation-dialog.module.ts");
/* harmony import */ var _src_app_components_modals_notification_dialog_notification_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/components/modals/notification-dialog/notification-dialog.module */ "./src/app/components/modals/notification-dialog/notification-dialog.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record.component */ "./src/app/pages/teacher/recordings/record/record.component.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_recordings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/recordings.component */ "./src/app/pages/teacher/recordings/recordings.component.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_edit_audio_record_edit_audio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component */ "./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_edit_recording_record_edit_recording_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component */ "./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _record_view_record_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./record-view/record-view.component */ "./src/app/pages/teacher/recordings/record/record-view/record-view.component.ts");
/* harmony import */ var _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/components/class-recording/class-recording.module */ "./src/app/components/class-recording/class-recording.module.ts");
/* harmony import */ var _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/components/class-card/class-card.module */ "./src/app/components/class-card/class-card.module.ts");
/* harmony import */ var _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/components/teacher-stripe-form/teacher-stripe-form.module */ "./src/app/components/teacher-stripe-form/teacher-stripe-form.module.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
/* harmony import */ var _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/app/components/message/message.module */ "./src/app/components/message/message.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var RecordModule = /** @class */ (function () {
    function RecordModule() {
    }
    RecordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _src_app_components_modals_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogModule"],
                _src_app_components_modals_notification_dialog_notification_dialog_module__WEBPACK_IMPORTED_MODULE_5__["NotificationDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
                // RecordingCardModule,
                _src_app_components_class_recording_class_recording_module__WEBPACK_IMPORTED_MODULE_15__["ClassRecordingModule"],
                _src_app_components_class_card_class_card_module__WEBPACK_IMPORTED_MODULE_16__["ClassCardModule"],
                _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_17__["TeacherStripeFormModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_18__["JiFormsModule"],
                _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]
            ],
            declarations: [
                _src_app_pages_teacher_recordings_record_record_component__WEBPACK_IMPORTED_MODULE_9__["RecordComponent"],
                _src_app_pages_teacher_recordings_recordings_component__WEBPACK_IMPORTED_MODULE_10__["RecordingsComponent"],
                _src_app_pages_teacher_recordings_record_record_edit_audio_record_edit_audio_component__WEBPACK_IMPORTED_MODULE_11__["RecordEditAudioComponent"],
                _src_app_pages_teacher_recordings_record_record_edit_recording_record_edit_recording_component__WEBPACK_IMPORTED_MODULE_12__["RecordEditRecordingComponent"],
                _record_view_record_view_component__WEBPACK_IMPORTED_MODULE_14__["RecordViewComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], RecordModule);
    return RecordModule;
}());



/***/ }),

/***/ "./src/app/pages/teacher/recordings/recordings.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/recordings.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section:first-child {\n    margin-top: 24px; }\n  section.recording-stats .stats {\n    margin: 20px 0; }\n  section.recording-stats .stats span {\n      display: block; }\n  section.recording-stats a {\n    margin-top: 15px; }\n  section.no-recordings {\n    text-align: center; }\n  section.no-recordings a {\n      margin-top: 30px; }\n  .recordings-list li {\n  margin-bottom: 20px;\n  position: relative; }\n  .recordings-list li.unpublish {\n    content: \"\\A\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 6px; }\n  .recordings-list li .dropdown_option {\n    right: 0;\n    bottom: 0;\n    padding: 10px 20px;\n    position: absolute;\n    width: 100%; }\n  .recordings-list li .dropdown_option .change-thumb {\n      position: absolute;\n      top: -100px;\n      width: 150px;\n      margin: 0 20px;\n      right: 0;\n      background: #fff;\n      color: #000; }\n  .recordings-list li .dropdown_option .patreon-teaser__button {\n      padding: 10px 20px;\n      background: #3ac47d;\n      color: #fff; }\n  .recordings-list li .dropdown_option .active-btn {\n      background: #c13229; }\n  .complete-register {\n  text-align: center; }\n  .complete-register hr {\n    margin: 20px 0 30px; }\n  .delete-all {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXIvcmVjb3JkaW5ncy9yZWNvcmRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxnQkFBZ0IsRUFBQTtFQUpwQjtJQVNNLGNBQWMsRUFBQTtFQVRwQjtNQVlRLGNBQWMsRUFBQTtFQVp0QjtJQWlCTSxnQkFBZ0IsRUFBQTtFQWpCdEI7SUFzQkksa0JBQWtCLEVBQUE7RUF0QnRCO01BeUJNLGdCQUFnQixFQUFBO0VBS3RCO0VBRUksbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0VBSHRCO0lBTU0sYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLGtCQUFrQixFQUFBO0VBYnhCO0lBaUJNLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFyQmpCO01Bd0JRLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLGNBQWM7TUFDZCxRQUFRO01BQ1IsZ0JBQWdCO01BQ2hCLFdBQVcsRUFBQTtFQTlCbkI7TUFrQ1Esa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixXQUNGLEVBQUE7RUFyQ047TUF3Q1EsbUJBQW1CLEVBQUE7RUFNM0I7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFjaGVyL3JlY29yZGluZ3MvcmVjb3JkaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gIH1cblxuICAmLnJlY29yZGluZy1zdGF0cyB7XG4gICAgLnN0YXRzIHtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gICYubm8tcmVjb3JkaW5ncyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucmVjb3JkaW5ncy1saXN0IHtcbiAgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi51bnB1Ymxpc2gge1xuICAgICAgY29udGVudDogXCJcXEFcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd25fb3B0aW9uIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5jaGFuZ2UtdGh1bWIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIC5wYXRyZW9uLXRlYXNlcl9fYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM2FjNDdkO1xuICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgfVxuXG4gICAgICAuYWN0aXZlLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjMTMyMjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb21wbGV0ZS1yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBociB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbiAgfVxufVxuXG4uZGVsZXRlLWFsbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/teacher/recordings/recordings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/teacher/recordings/recordings.component.ts ***!
  \******************************************************************/
/*! exports provided: RecordingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingsComponent", function() { return RecordingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recording_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording-status */ "./src/app/pages/teacher/recordings/recording-status.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.selectors */ "./src/app/store/modules/recording/recording.selectors.ts");
/* harmony import */ var _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/recording/recording.actions */ "./src/app/store/modules/recording/recording.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/store/modules/user/user.selectors */ "./src/app/store/modules/user/user.selectors.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.selectors */ "./src/app/store/modules/teachers/teachers.selectors.ts");
/* harmony import */ var _src_app_store_modules_spinner_spinner_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/store/modules/spinner/spinner.actions */ "./src/app/store/modules/spinner/spinner.actions.ts");
/* harmony import */ var _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/services/utils.service */ "./src/app/services/utils.service.ts");
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














var RecordingsComponent = /** @class */ (function () {
    function RecordingsComponent(store, router, spinner, utils) {
        this.store = store;
        this.router = router;
        this.spinner = spinner;
        this.utils = utils;
        this.routeNames = _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"];
        this.emptyField = "n/a";
        this.showDropdownMenu = [];
        this.subscriptions = [];
        this.recordings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRecordings"]));
        this.recordingsState$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_recording_recording_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRecordingEntities"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_user_user_selectors__WEBPACK_IMPORTED_MODULE_10__["selectUserActive"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (user) { return Boolean(user); }));
        this.teacher$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_src_app_store_modules_teachers_teachers_selectors__WEBPACK_IMPORTED_MODULE_11__["selectTeachersObject"]));
        this.recordings = [];
        this.recordingStates = _recording_status__WEBPACK_IMPORTED_MODULE_1__["RecordingStatus"];
        this.groupedRecordings = {};
        this.statRecordingStatuses = [
            {
                status: _recording_status__WEBPACK_IMPORTED_MODULE_1__["RecordingStatus"].UPLOADED,
                text: "has been successfully uploaded",
            },
            {
                status: _recording_status__WEBPACK_IMPORTED_MODULE_1__["RecordingStatus"].UPLOADING,
                text: "is being uploaded",
            },
            {
                status: _recording_status__WEBPACK_IMPORTED_MODULE_1__["RecordingStatus"].PROCESSING,
                text: "is being processed",
            },
            {
                status: _recording_status__WEBPACK_IMPORTED_MODULE_1__["RecordingStatus"].FAILED,
                text: "has failed to upload",
            },
        ];
        this.isLoading = false;
        this.newStatuses = false;
        this.changeRecordingData = true;
    }
    RecordingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.store.dispatch(new _src_app_store_modules_spinner_spinner_actions__WEBPACK_IMPORTED_MODULE_12__["SetAddClassTextEndAction"]());
        this.subscriptions.push(this.recordings$.subscribe(function (recordingsState) {
            var recordings = recordingsState.recordings;
            _this.log("RECORDINGSSSSSS: ", recordings);
            if (recordings == null) {
                return;
            }
            _this.isLoading = false;
            if (recordingsState.recordings) {
                _this.spinner.hide();
            }
            if (recordingsState.changeClassStatus) {
                _this.spinner.hide();
                _this.load();
            }
            // this.log('Got recordings', recordings);
            _this.showDropdownMenu = Array.from({ length: _this.recordings.length }, function () { return false; });
            _this.recordings = recordings.map(function (recording) {
                return __assign({}, recording, { title: "" + (recording.title || _this.emptyField) });
            });
            _this.groupedRecordings = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.groupBy(_this.recordings, "status");
            var statuses = Object.keys(_this.groupedRecordings);
            if (!statuses.length ||
                (statuses.length === 1 && statuses[0] === "ready")) {
                _this.newStatuses = false;
            }
            else {
                _this.newStatuses = true;
            }
            var publishedArray = _this.groupedRecordings[_this.recordingStates.PUBLISHED] || [];
            var publishedRecordings = publishedArray.length;
            if (publishedRecordings) {
                _this.latestPublished = _this.groupedRecordings[_this.recordingStates.PUBLISHED][publishedRecordings - 1];
            }
            if (recordingsState.changeRecordingData !== _this.changeRecordingData) {
                _this.load();
            }
            _this.changeRecordingData = recordingsState.changeRecordingData;
        }), this.user$.subscribe(function (user) {
            _this.teacher = user.creator;
            if (user.creator) {
                _this.log("**  **  **  HIDE SPINNER  **  **  **");
                _this.spinner.hide();
            }
        }), this.teacher$.subscribe(function (obj) {
            if (obj.addedNewClass === false) {
                _this.load();
                // window.location.reload(true)
            }
        }));
    };
    RecordingsComponent.prototype.onClassView = function (recording) {
        this.router.navigate([
            "/",
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher,
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].recordings,
            recording.creatorslug,
            recording.slug,
        ]);
    };
    RecordingsComponent.prototype.onClassEdit = function (recording) {
        this.log("on class edit");
        this.router.navigate([
            "/",
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].teacher,
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].recordings,
            _src_app_route_names__WEBPACK_IMPORTED_MODULE_6__["RouteNames"].editRecording,
        ]);
    };
    RecordingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    RecordingsComponent.prototype.openDropdownMenu = function (i) {
        this.showDropdownMenu[i] = !this.showDropdownMenu[i];
    };
    RecordingsComponent.prototype.changeClassStatus = function (id, status, index) {
        this.spinner.show();
        this.showDropdownMenu[index] = false;
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["ChangeRecordingStatusRequestAction"]({
            id: id,
            status: status === "published" ? "unpublished" : "published",
        }));
    };
    RecordingsComponent.prototype.load = function () {
        this.log("GETTING ALL THE RECORDINGS AGAIN: ===>", this.recordings);
        this.isLoading = true;
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["GetRecordingsListRequestAction"]());
    };
    RecordingsComponent.prototype.setFileInfo = function (event, recordingId) {
        var body = new FormData();
        this.spinner.show();
        body.append("thumbnail", event.target.files[0]);
        this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateRecordingPosesRequestAction"]({
            id: recordingId,
            poses: body
        }));
    };
    RecordingsComponent.prototype.deleteAll = function () {
        var _this = this;
        var recordings = this.recordings.map(function (rec) { return rec.id; });
        var id = 0;
        var interval = setInterval(function () {
            if (id <= recordings.length - 1) {
                _this.log("DELETING THIS RECORDING: ", recordings[id]);
                _this.store.dispatch(new _src_app_store_modules_recording_recording_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteRecordingRequestAction"](recordings[id]));
                id++;
            }
            else {
                clearInterval(interval);
            }
        }, 1000);
    };
    RecordingsComponent.prototype.log = function (text) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.utils).log.apply(_a, __spread([text, this.constructor.name], args));
    };
    RecordingsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"] },
        { type: _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"] }
    ]; };
    RecordingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recordings",
            template: __webpack_require__(/*! raw-loader!./recordings.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/recordings/recordings.component.html"),
            styles: [__webpack_require__(/*! ./recordings.component.scss */ "./src/app/pages/teacher/recordings/recordings.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_9__["SpinnerOverlayService"],
            _src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"]])
    ], RecordingsComponent);
    return RecordingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/students/item/students-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/teacher/students/item/students-item.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 40px; }\n  section.student-bookings h1 {\n    margin-bottom: 10px; }\n  section.subscription-status hr {\n    margin-bottom: 20px; }\n  .student-details {\n  padding-top: 10px; }\n  .student-details span {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXIvc3R1ZGVudHMvaXRlbS9zdHVkZW50cy1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFLWSxtQkFBbUIsRUFBQTtFQUwvQjtJQVdZLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFJUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFjaGVyL3N0dWRlbnRzL2l0ZW0vc3R1ZGVudHMtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAmLnN0dWRlbnQtYm9va2luZ3Mge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zdWJzY3JpcHRpb24tc3RhdHVzIHtcbiAgICAgICAgaHIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0dWRlbnQtZGV0YWlscyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/teacher/students/item/students-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/teacher/students/item/students-item.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsItemComponent", function() { return StudentsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/shared/shared.actions */ "./src/app/store/modules/shared/shared.actions.ts");
/* harmony import */ var _src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/students/students.selectors */ "./src/app/store/modules/students/students.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.actions */ "./src/app/store/modules/teachers/teachers.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/route-names */ "./src/app/route-names.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StudentsItemComponent = /** @class */ (function () {
    function StudentsItemComponent(store, spinner, route, router) {
        var _this = this;
        this.store = store;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.subscriptions = [];
        this.students$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_3__["selectStudentsEntities"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (students) {
            var isStudentArray = Array.isArray(students);
            if (!isStudentArray
                && _this.studentStatus !== 'pending') {
                _this.store.dispatch(new _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_6__["GetStudentsListByTeacherRequestAction"]());
            }
            return isStudentArray && students.length > 0;
        }));
        this.studentsStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_3__["selectStudentsStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean));
    }
    StudentsItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _src_app_store_modules_shared_shared_actions__WEBPACK_IMPORTED_MODULE_2__["SetBackSharedAction"](['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].teacher, _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].students]));
        this.subscriptions.push(this.students$.subscribe(function (students) {
            _this.student = students.find(function (student) {
                return student.user === +_this.route.snapshot.paramMap.get('id');
            });
            if (!_this.student) {
                _this.router.navigate(['/', _src_app_route_names__WEBPACK_IMPORTED_MODULE_8__["RouteNames"].notFound]);
            }
            else {
                _this.studentDeets = _this.student.student.user;
                // hideoverlay
                // console.log('hide spinner');
                _this.spinner.hide();
            }
        }), this.studentsStatus$.subscribe(function (status) {
            _this.studentStatus = status;
            if (status === 'pending') {
                // showoverlay
            }
            else {
                // hideoverlay
            }
        }));
    };
    StudentsItemComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    StudentsItemComponent.prototype.handleApproveDeclineClick = function () {
        // console.log('clicked!');
    };
    StudentsItemComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _src_app_services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    StudentsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students-item',
            template: __webpack_require__(/*! raw-loader!./students-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/students/item/students-item.component.html"),
            styles: [__webpack_require__(/*! ./students-item.component.scss */ "./src/app/pages/teacher/students/item/students-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _src_app_services__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], StudentsItemComponent);
    return StudentsItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/students/list/students-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/teacher/students/list/students-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,\np {\n  margin: 40px 0 20px; }\n\nli:not(:last-child) {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raHJlYnRvdi9Qcm9qZWN0cy9qb3VybmV5aW50by1mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3RlYWNoZXIvc3R1ZGVudHMvbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhY2hlci9zdHVkZW50cy9saXN0L3N0dWRlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcbnAge1xuICAgIG1hcmdpbjogNDBweCAwIDIwcHg7XG59XG5cbmxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/teacher/students/list/students-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/teacher/students/list/students-list.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/store/modules/teachers/teachers.actions */ "./src/app/store/modules/teachers/teachers.actions.ts");
/* harmony import */ var _src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/store/modules/students/students.selectors */ "./src/app/store/modules/students/students.selectors.ts");
/* harmony import */ var _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/store/modules/user/user.types */ "./src/app/store/modules/user/user.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(store, spinner) {
        this.store = store;
        this.spinner = spinner;
        this.subscriptions = [];
        this.students$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_src_app_store_modules_students_students_selectors__WEBPACK_IMPORTED_MODULE_3__["selectStudentsEntities"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (students) { return Boolean(students) && Array.isArray(students); }));
        this.approved = [];
        this.declined = [];
        // User view statuses - student or teacher
        this.viewStatuses = _src_app_store_modules_user_user_types__WEBPACK_IMPORTED_MODULE_4__["ViewStatuses"];
    }
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load();
        this.subscriptions.push(this.students$.subscribe(function (students) {
            if (students.length) {
                _this.approved = students.filter(function (student) { return student.status === 'approved'; });
                _this.declined = students.filter(function (student) { return student.status === 'declined'; });
            }
            _this.spinner.hide();
        }));
    };
    StudentsListComponent.prototype.load = function () {
        this.store.dispatch(new _src_app_store_modules_teachers_teachers_actions__WEBPACK_IMPORTED_MODULE_2__["GetStudentsListByTeacherRequestAction"]());
    };
    StudentsListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    StudentsListComponent.prototype.onStudentCtaClicked = function (student) {
        // console.log(student);
    };
    StudentsListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"] }
    ]; };
    StudentsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students-list',
            template: __webpack_require__(/*! raw-loader!./students-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/students/list/students-list.component.html"),
            styles: [__webpack_require__(/*! ./students-list.component.scss */ "./src/app/pages/teacher/students/list/students-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/teacher.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/teacher/teacher.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/teacher/teacher.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/teacher/teacher.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
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

var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.scss */ "./src/app/pages/teacher/teacher.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher/teacher.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/teacher/teacher.module.ts ***!
  \*************************************************/
/*! exports provided: TeacherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModule", function() { return TeacherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _src_app_pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/pages/teacher/teacher.component */ "./src/app/pages/teacher/teacher.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/guards/private-route.guard */ "./src/app/guards/private-route.guard.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_edit_recording_record_edit_recording_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component */ "./src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_edit_audio_record_edit_audio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component */ "./src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component.ts");
/* harmony import */ var _src_app_pages_teacher_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/pages/teacher/bookings/bookings.component */ "./src/app/pages/teacher/bookings/bookings.component.ts");
/* harmony import */ var _src_app_pages_teacher_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/pages/teacher/students/list/students-list.component */ "./src/app/pages/teacher/students/list/students-list.component.ts");
/* harmony import */ var _src_app_pages_teacher_students_item_students_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/pages/teacher/students/item/students-item.component */ "./src/app/pages/teacher/students/item/students-item.component.ts");
/* harmony import */ var _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/components/modals/takethetour-dialog/takethetour-dialog.module */ "./src/app/components/modals/takethetour-dialog/takethetour-dialog.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _src_app_pages_teacher_recordings_record_record_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/record/record.module */ "./src/app/pages/teacher/recordings/record/record.module.ts");
/* harmony import */ var _src_app_pages_teacher_recordings_recordings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/pages/teacher/recordings/recordings.component */ "./src/app/pages/teacher/recordings/recordings.component.ts");
/* harmony import */ var _src_app_pages_teacher_account_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/pages/teacher/account/account.component */ "./src/app/pages/teacher/account/account.component.ts");
/* harmony import */ var _src_app_pages_teacher_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/pages/teacher/dashboard/dashboard.component */ "./src/app/pages/teacher/dashboard/dashboard.component.ts");
/* harmony import */ var _src_app_pages_teacher_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/pages/teacher/profile/profile.component */ "./src/app/pages/teacher/profile/profile.component.ts");
/* harmony import */ var _src_app_pages_teacher_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/app/pages/teacher/profile-edit/profile-edit.component */ "./src/app/pages/teacher/profile-edit/profile-edit.component.ts");
/* harmony import */ var _src_app_pages_teacher_add_classes_add_classes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @src/app/pages/teacher/add-classes/add-classes.component */ "./src/app/pages/teacher/add-classes/add-classes.component.ts");
/* harmony import */ var _route_names__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../route-names */ "./src/app/route-names.ts");
/* harmony import */ var _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/app/components/message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @src/app/components/errors/errors.module */ "./src/app/components/errors/errors.module.ts");
/* harmony import */ var _src_app_components_teacher_profile_form_teacher_profile_form_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @src/app/components/teacher-profile-form/teacher-profile-form.module */ "./src/app/components/teacher-profile-form/teacher-profile-form.module.ts");
/* harmony import */ var _src_app_components_teacher_add_class_form_teacher_add_class_form_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @src/app/components/teacher-add-class-form/teacher-add-class-form.module */ "./src/app/components/teacher-add-class-form/teacher-add-class-form.module.ts");
/* harmony import */ var _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @src/app/components/password-match-input/password-match-input.module */ "./src/app/components/password-match-input/password-match-input.module.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.module */ "./src/app/components/coming-soon/coming-soon.module.ts");
/* harmony import */ var _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @src/app/components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");
/* harmony import */ var _src_app_components_teacher_profile_teachers_profile_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @src/app/components/teacher-profile/teachers-profile.module */ "./src/app/components/teacher-profile/teachers-profile.module.ts");
/* harmony import */ var _src_app_components_student_card_student_card_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @src/app/components/student-card/student-card.module */ "./src/app/components/student-card/student-card.module.ts");
/* harmony import */ var _recordings_record_record_view_record_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./recordings/record/record-view/record-view.component */ "./src/app/pages/teacher/recordings/record/record-view/record-view.component.ts");
/* harmony import */ var _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @src/app/components/forms/ji-forms.module */ "./src/app/components/forms/ji-forms.module.ts");
/* harmony import */ var _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @src/app/components/icon/icon.module */ "./src/app/components/icon/icon.module.ts");
/* harmony import */ var _src_app_components_booking_card_booking_card_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @src/app/components/booking-card/booking-card.module */ "./src/app/components/booking-card/booking-card.module.ts");
/* harmony import */ var _src_app_components_notification_card_notification_card_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @src/app/components/notification-card/notification-card.module */ "./src/app/components/notification-card/notification-card.module.ts");
/* harmony import */ var _src_app_components_round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @src/app/components/round-photo/round-photo.module */ "./src/app/components/round-photo/round-photo.module.ts");
/* harmony import */ var _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @src/app/components/teacher-stripe-form/teacher-stripe-form.module */ "./src/app/components/teacher-stripe-form/teacher-stripe-form.module.ts");
/* harmony import */ var _recordings_record_record_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./recordings/record/record.component */ "./src/app/pages/teacher/recordings/record/record.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































// TODO: Remove coming soon pages
var TeacherModule = /** @class */ (function () {
    function TeacherModule() {
    }
    TeacherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _src_app_pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"],
                _src_app_pages_teacher_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["TeacherProfileComponent"],
                _src_app_pages_teacher_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["TeachersDashboardComponent"],
                _src_app_pages_teacher_account_account_component__WEBPACK_IMPORTED_MODULE_16__["TeachersAccountComponent"],
                _src_app_pages_teacher_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_9__["BookingsComponent"],
                _src_app_pages_teacher_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_10__["StudentsListComponent"],
                _src_app_pages_teacher_students_item_students_item_component__WEBPACK_IMPORTED_MODULE_11__["StudentsItemComponent"],
                _src_app_pages_teacher_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__["TeacherProfileEditComponent"],
                _src_app_pages_teacher_add_classes_add_classes_component__WEBPACK_IMPORTED_MODULE_20__["TeacherAddClassesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _src_app_components_modals_takethetour_dialog_takethetour_dialog_module__WEBPACK_IMPORTED_MODULE_12__["TakethetourDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _src_app_pages_teacher_recordings_record_record_module__WEBPACK_IMPORTED_MODULE_14__["RecordModule"],
                _src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__["PipesModule"],
                _src_app_components_message_message_module__WEBPACK_IMPORTED_MODULE_23__["MessageModule"],
                _src_app_components_errors_errors_module__WEBPACK_IMPORTED_MODULE_24__["ErrorsModule"],
                _src_app_components_teacher_profile_teachers_profile_module__WEBPACK_IMPORTED_MODULE_30__["TeachersProfileModule"],
                _src_app_components_teacher_profile_form_teacher_profile_form_module__WEBPACK_IMPORTED_MODULE_25__["TeacherProfileFormModule"],
                _src_app_components_teacher_add_class_form_teacher_add_class_form_module__WEBPACK_IMPORTED_MODULE_26__["TeacherAddClassFormModule"],
                _src_app_components_password_match_input_password_match_input_module__WEBPACK_IMPORTED_MODULE_27__["PasswordMatchInputModule"],
                _src_app_components_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_28__["ComingSoonModule"],
                _src_app_components_student_card_student_card_module__WEBPACK_IMPORTED_MODULE_31__["StudentCardModule"],
                _src_app_components_forms_ji_forms_module__WEBPACK_IMPORTED_MODULE_33__["JiFormsModule"],
                _src_app_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_34__["IconModule"],
                _src_app_components_booking_card_booking_card_module__WEBPACK_IMPORTED_MODULE_35__["BookingCardModule"],
                _src_app_components_notification_card_notification_card_module__WEBPACK_IMPORTED_MODULE_36__["NotificationCardModule"],
                _src_app_components_round_photo_round_photo_module__WEBPACK_IMPORTED_MODULE_37__["RoundPhotoModule"],
                _src_app_components_teacher_stripe_form_teacher_stripe_form_module__WEBPACK_IMPORTED_MODULE_38__["TeacherStripeFormModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _src_app_pages_teacher_recordings_recordings_component__WEBPACK_IMPORTED_MODULE_15__["RecordingsComponent"],
                        data: {
                            title: 'Library',
                            goBack: false
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].profile,
                        component: _src_app_pages_teacher_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["TeacherProfileComponent"],
                        data: {
                            title: 'Your Profile',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].profileEdit,
                        component: _src_app_pages_teacher_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__["TeacherProfileEditComponent"],
                        data: {
                            title: 'Edit your profile',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].account,
                        component: _src_app_pages_teacher_account_account_component__WEBPACK_IMPORTED_MODULE_16__["TeachersAccountComponent"],
                        data: {
                            title: 'Your account',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    // RECORDINGS ROUTES
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].recordings,
                        component: _src_app_pages_teacher_recordings_recordings_component__WEBPACK_IMPORTED_MODULE_15__["RecordingsComponent"],
                        data: {
                            title: 'Library',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].recordings + "/" + _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].new,
                        component: _recordings_record_record_component__WEBPACK_IMPORTED_MODULE_39__["RecordComponent"],
                        data: {
                            title: 'Record a class',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].recordings + "/:slug",
                        component: _recordings_record_record_view_record_view_component__WEBPACK_IMPORTED_MODULE_32__["RecordViewComponent"],
                        data: {
                            title: 'View your class',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].recordings + "/:slug/" + _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].editAudio,
                        component: _src_app_pages_teacher_recordings_record_record_edit_audio_record_edit_audio_component__WEBPACK_IMPORTED_MODULE_8__["RecordEditAudioComponent"],
                        data: {
                            title: 'Edit audio',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].recordings + "/:slug/" + _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].editRecording,
                        component: _src_app_pages_teacher_recordings_record_record_edit_recording_record_edit_recording_component__WEBPACK_IMPORTED_MODULE_7__["RecordEditRecordingComponent"],
                        data: {
                            title: 'Edit recording',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].bookings,
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonComponent"],
                        // component: BookingsComponent,
                        data: {
                            title: 'Bookings',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].bookings + "/" + _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].newSlot,
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonComponent"],
                        // component: BookingsComponent,
                        data: {
                            title: 'Bookings',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].bookings + "/:id",
                        component: _src_app_components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonComponent"],
                        // component: BookingsComponent,
                        data: {
                            title: 'Bookings',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].students,
                        component: _src_app_pages_teacher_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_10__["StudentsListComponent"],
                        data: {
                            title: 'My Students',
                            goBack: true
                        },
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]]
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].students + "/:id",
                        component: _src_app_pages_teacher_students_item_students_item_component__WEBPACK_IMPORTED_MODULE_11__["StudentsItemComponent"],
                        canActivate: [_src_app_guards_private_route_guard__WEBPACK_IMPORTED_MODULE_6__["PrivateRouteGuard"]],
                        data: {
                            title: 'Student Profile',
                            goBack: true
                        }
                    },
                    {
                        path: _route_names__WEBPACK_IMPORTED_MODULE_21__["RouteNames"].addClass,
                        component: _src_app_pages_teacher_add_classes_add_classes_component__WEBPACK_IMPORTED_MODULE_20__["TeacherAddClassesComponent"],
                        data: {
                            title: 'Add a new class',
                            goBack: true
                        }
                    }
                ])
            ]
        })
    ], TeacherModule);
    return TeacherModule;
}());



/***/ }),

/***/ "./src/app/store/modules/stripe/stripe.selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/modules/stripe/stripe.selectors.ts ***!
  \**********************************************************/
/*! exports provided: selectStripeState, selectStripeEntities, selectStripeStatus, selectStripeErrors, selectStripeMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStripeState", function() { return selectStripeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStripeEntities", function() { return selectStripeEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStripeStatus", function() { return selectStripeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStripeErrors", function() { return selectStripeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStripeMessages", function() { return selectStripeMessages; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/adapters */ "./src/app/store/helpers/adapters.ts");


var selectStripeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('stripe');
var selectStripeEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStripeState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getEntities"]);
var selectStripeStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStripeState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getStatus"]);
var selectStripeErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStripeState, _helpers_adapters__WEBPACK_IMPORTED_MODULE_1__["getErrors"]);
var selectStripeMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStripeState, function (state) {
    return state.message;
});


/***/ })

}]);
//# sourceMappingURL=pages-teacher-teacher-module.cb0781932c89b290f262.js.map