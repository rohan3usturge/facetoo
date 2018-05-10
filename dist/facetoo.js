(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "moment"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("handlebars/runtime"), require("moment"));
	else
		root["Facetoo"] = factory(root["Handlebars"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************************************************!*\
  !*** external {"root":"Handlebars","amd":"handlebars.runtime","commonjs2":"handlebars/runtime","commonjs":"handlebars/runtime"} ***!
  \**********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** ./src/hbs/helpers/FormatLabelByType.ts ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 12);
var formatLabelByType = function (type, value) {
    if (moment && type === "Edm.DateTimeOffset") {
        return moment.utc(value).format("DD-MMM-YYYY hh:mm a");
    }
    else {
        return value;
    }
};
exports.default = formatLabelByType;


/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./src/ts/eventhandlers/ShowHide.ts ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowHide;
(function (ShowHide) {
    ShowHide[ShowHide["Show"] = 0] = "Show";
    ShowHide[ShowHide["Hide"] = 1] = "Hide";
    ShowHide[ShowHide["Toggle"] = 2] = "Toggle";
})(ShowHide = exports.ShowHide || (exports.ShowHide = {}));


/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/hbs/facet-body.hbs ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui of-hidden min-w-50 w-auto fluid-h flex column container\">\n    <section class=\"gui h-auto gui-subheading-1 m-0 border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <button class=\"gui cursor-pointer expand-all\" \n                aria-label=\"Expand All Filters\">\n            <i  class=\"gui-icon special rotate-left gui-icon-chevdouble\"></i>\n            Expand All\n        </button>\n        <button class=\"gui cursor-pointer collapse-all\" \n                aria-label=\"Collapse All Filters\">\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\n            Collapse All\n        </button>\n    </section>\n    <section class=\"gui border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <div class=\"gui gui-icon input fluid-w h-30\">\n            <input class=\"gui input fluid-w gui-subheading-2 filter-search-input\" \n              placeholder=\"Search Filters. Shortcut Alt + F \" />\n            <i class=\"gui gui-icon gui-icon-search gui-hidden\"></i>\n        </div>\n    </section>\n    <section class=\"gui fluid-h facet-list of-auto ofx-hidden\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-pinned.hbs */ 22),depth0,{"name":"facet-pinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-unpinned.hbs */ 23),depth0,{"name":"facet-unpinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </section>\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./src/hbs/helpers/Collapsed.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collapsed = function (value) {
    if (value) {
        return " collapsed ";
    }
    return "";
};
exports.default = collapsed;


/***/ }),
/* 5 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Boolean.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BooleanValue = function (bool) {
    return bool ? "true" : "false";
};
exports.default = BooleanValue;


/***/ }),
/* 6 */
/*!*************************************************!*\
  !*** ./src/hbs/helpers/SelectedFiltersCount.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var selectedFiltersCount = function (facetValues) {
    var index = 0;
    if (facetValues !== undefined
        && facetValues !== null
        && facetValues.length > 0) {
        for (var _i = 0, facetValues_1 = facetValues; _i < facetValues_1.length; _i++) {
            var facetValue = facetValues_1[_i];
            if (facetValue.selected) {
                index++;
            }
        }
    }
    return index === 0 ? "" : "<span class=\"gui-body-2\">(" + index + ")</span>";
};
exports.default = selectedFiltersCount;


/***/ }),
/* 7 */
/*!***********************************!*\
  !*** ./src/hbs/helpers/Hidden.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hidden = function (value, invert) {
    var hide;
    if (invert) {
        if (!value) {
            hide = true;
        }
        else {
            hide = false;
        }
    }
    else {
        if (value) {
            hide = true;
        }
        else {
            hide = false;
        }
    }
    return hide ? " gui-hidden " : " ";
};
exports.default = hidden;


/***/ }),
/* 8 */
/*!*********************************************!*\
  !*** ./src/hbs/helpers/ShowMoreLessLink.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowMoreLessLink = function (index, v2, options) {
    if (index.length > v2) {
        return "<div class=\"gui m-b-5 m-t-5\">"
            + "<a tabindex=\"0\" aria-label=\"Press enter to show " + (index.length - v2) + " more values\" "
            + "class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\">"
            + (index.length - v2)
            + " More </a>"
            + "<a tabindex=\"0\" aria-label=\"Press enter to show less values\" "
            + "class=\"gui caps gui-body-2 simple show-less-link cursor-pointer gui-hidden p-0 m-t-3\">"
            + "Show Less</a></div>";
    }
    else {
        return "";
    }
};
exports.default = ShowMoreLessLink;


/***/ }),
/* 9 */
/*!****************************************!*\
  !*** ./src/hbs/helpers/CheckLength.ts ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkLength = function (index, v2) {
    if (index !== undefined && index + 1 > v2) {
        return "gui-hidden extra-filter";
    }
    return "";
};
exports.default = checkLength;


/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Checked.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checked = function (bool) {
    return bool ? "checked" : "";
};
exports.default = checked;


/***/ }),
/* 11 */
/*!*************************************!*\
  !*** ./src/hbs/helpers/Disabled.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var disabled = function (bool) {
    return bool ? "disabled" : "";
};
exports.default = disabled;


/***/ }),
/* 12 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/*!***************************************!*\
  !*** ./src/ts/eventhandlers/index.ts ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 25));
__export(__webpack_require__(/*! ./FacetActionHandler */ 26));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 27));
__export(__webpack_require__(/*! ./FilterActionHandler */ 30));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 31));
__export(__webpack_require__(/*! ./PinUnpinEventHandler */ 32));
__export(__webpack_require__(/*! ./ShowMoreLessHandler */ 33));


/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseManager.ts ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 2);
var ExpandCollapseManager = /** @class */ (function () {
    function ExpandCollapseManager() {
    }
    ExpandCollapseManager.ControlVisibilityOfFilter = function (headerElement, showHide, name) {
        var iconElement = headerElement.children("span").children(".expansion-icon");
        var currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
        if (ShowHide_1.ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide_1.ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide_1.ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            headerElement.parents(".facet-item").find(".facet-item-description").slideDown(200);
            iconElement.removeClass("gui-icon-chevron-down");
            iconElement.addClass("gui-icon-chevron-up");
            headerElement.find(".expansion-icon")
                .attr("aria-expanded", "true")
                .attr("aria-label", "Press enter or space to collapse filter values for " + name);
        }
        else {
            headerElement.parents(".facet-item").find(".facet-item-description").slideUp(200);
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
            headerElement.find(".expansion-icon")
                .attr("aria-expanded", "false")
                .attr("aria-label", "Press enter or space to expand filter values for " + name);
        }
    };
    return ExpandCollapseManager;
}());
exports.ExpandCollapseManager = ExpandCollapseManager;


/***/ }),
/* 15 */
/*!*******************************************!*\
  !*** ./src/ts/models/FilterActionType.ts ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType;
(function (FilterActionType) {
    FilterActionType["Add"] = "Add";
    FilterActionType["Minus"] = "Minus";
})(FilterActionType = exports.FilterActionType || (exports.FilterActionType = {}));


/***/ }),
/* 16 */
/*!****************************************************!*\
  !*** ./node_modules/throttle-debounce/throttle.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function ( delay, noTrailing, callback, debounceMode ) {

	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec();

		} else if ( noTrailing !== true ) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

};


/***/ }),
/* 17 */
/*!******************************!*\
  !*** ./src/ts/main/Entry.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Facet */ 18));
__export(__webpack_require__(/*! ./Filter */ 34));


/***/ }),
/* 18 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFacetHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFacetHandler */ 19);
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 20);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 24);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 13);
var Facet = /** @class */ (function () {
    function Facet(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (facets) {
            setTimeout(function () {
                _this.templateService.setData(facets);
                var fullFacet = _this.templateService.bind(facets);
                _this.facetElement.html(fullFacet);
            }, 1);
        };
        this.reRender = function () {
            setTimeout(function () {
                var data = _this.templateService.getData();
                var fullFacet = _this.templateService.bind(data);
                _this.facetElement.html(fullFacet);
            }, 1);
        };
        this.hide = function () {
            _this.facetElement.find(".facet-body").fadeOut(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = true;
        };
        this.show = function () {
            _this.facetElement.find(".facet-body").fadeIn(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = false;
        };
        this.setFacetConfig = function (facetConfig) {
            _this.configStore.Options.facetConfig = facetConfig;
        };
        this.destroy = function () {
            if (_this.facetElement !== undefined) {
                _this.facetElement.off();
            }
            _this.handlerChain.forEach(function (handler) {
                if (handler !== undefined && handler.deregister !== undefined) {
                    handler.deregister();
                }
            });
        };
        this.configStore = new FacetConfigStore_1.FacetConfigStore(options);
        this.facetElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService_1.FacetTemplateService(this.configStore);
        this.handlerChain.push(new eventhandlers_1.ExpandCollapseFacetsHandler(this.facetElement, this.configStore, this.templateService));
        this.handlerChain.push(new eventhandlers_1.FacetActionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new eventhandlers_1.FacetSearchHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new eventhandlers_1.HideFacetSectionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new HotKeysFacetHandler_1.HotKeysFacetHandler());
        this.handlerChain.push(new eventhandlers_1.PinUnpinEventHandler(this.facetElement, this.configStore, this.templateService));
        this.handlerChain.push(new eventhandlers_1.ShowMoreLessHandler(this.facetElement, this.configStore));
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Facet;
}());
exports.Facet = Facet;


/***/ }),
/* 19 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/HotKeysFacetHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFacetHandler = /** @class */ (function () {
    function HotKeysFacetHandler() {
        var _this = this;
        this.RegisterDomHandler = function () {
            jQuery(document).on("keydown", _this.focusOnSearch);
        };
        this.onResize = function () {
            throw new Error("Method not implemented.");
        };
        this.onDocumentClick = function (event) {
            // Do nothing
        };
        this.deRegister = function () {
            jQuery(document).off("keydown", _this.focusOnSearch);
        };
        this.focusOnSearch = function (event) {
            if (event.altKey && event.key === "f") {
                event.preventDefault();
                jQuery(".filter-search-input").focus();
            }
        };
    }
    return HotKeysFacetHandler;
}());
exports.HotKeysFacetHandler = HotKeysFacetHandler;


/***/ }),
/* 20 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 21);
var FacetTemplateService = /** @class */ (function () {
    function FacetTemplateService(configStore) {
        var _this = this;
        this.configStore = configStore;
        this.setData = function (facets) {
            _this.data = facets;
        };
        this.getData = function () {
            return _this.data;
        };
        this.compareFn = function (prev, next) {
            if (prev.order === undefined) {
                return -1;
            }
            if (next.order === undefined) {
                return 1;
            }
            return prev.order - next.order;
        };
        this.mergeWithFacetConfig = function (facets) {
            var mergedArray = [];
            for (var _i = 0, facets_1 = facets; _i < facets_1.length; _i++) {
                var facet = facets_1[_i];
                for (var _a = 0, _b = _this.configStore.Options.facetConfig; _a < _b.length; _a++) {
                    var facetConfig = _b[_a];
                    if (facetConfig.id === facet.id) {
                        mergedArray.push({
                            collapsed: facetConfig.collapsed,
                            facetRanges: facet.facetRanges,
                            facetValues: facet.facetValues,
                            id: facetConfig.id,
                            name: facetConfig.name,
                            order: facetConfig.order,
                            pinned: facetConfig.pinned,
                            type: facetConfig.type,
                        });
                        break;
                    }
                }
            }
            return mergedArray;
        };
        this.tempateFunctionForFacetMain = FacetMain;
    }
    FacetTemplateService.prototype.bind = function (facets) {
        var collapsed = this.configStore.Options.collapsed;
        var mergedFacets = this.mergeWithFacetConfig(facets);
        var favorites = mergedFacets.filter(function (f) { return f.pinned !== undefined && f.pinned; });
        var nonFavorites = mergedFacets.filter(function (f) { return f.pinned === undefined || !f.pinned; });
        favorites.sort(this.compareFn);
        nonFavorites.sort(this.compareFn);
        var noOfFacetToShow = this.configStore.Options.noOfFacetToShow;
        return this.tempateFunctionForFacetMain({ favorites: favorites, nonFavorites: nonFavorites, noOfFacetToShow: noOfFacetToShow });
    };
    return FacetTemplateService;
}());
exports.FacetTemplateService = FacetTemplateService;


/***/ }),
/* 21 */
/*!********************************!*\
  !*** ./src/hbs/facet-main.hbs ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-body gui fluid-h of-hidden gui-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 3),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 3),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui fluid-h \">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 22 */
/*!**********************************!*\
  !*** ./src/hbs/facet-pinned.hbs ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section>\r\n    <div class=\"gui p-l-10 p-r-10 p-b-10 p-t-10\">\r\n        <span class=\"gui gui-subheading-2 caps bold-500\">\r\n            PINNED FILTERS\r\n        </span>\r\n    </div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.favorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "    <div    class=\"gui item facet-item "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + " border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\" \r\n            data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n        <div class=\"content\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span   class=\"gui primary gui-subheading-1 caps m-0 expansion-icon cursor-pointer\"\r\n                        title=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-label=\"Press enter or space to toggle expansion of filter values for "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n                        aria-controls=\"facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\"\r\n                        tabindex=\"0\">\r\n                    "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i  data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                        class=\"gui gui-icon selectable gui-icon-unpin m-t-5 m-r-10 unpin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to unpin filter "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"description gui facet-item-description m-t-10 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 7)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\"\r\n                id=\"pinned-facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\">\r\n                <div class=\"gui facet-label-container fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 8)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <i  class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"\r\n                            aria-label=\"Press enter or space to collapse filter values for "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            aria-expanded=\"true\"\r\n                            aria-controls=\"facet-values-"
    + alias2(alias1((data && data.index), depth0))
    + "\"\r\n                            tabindex=\"0\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <i  class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\" \r\n                            aria-label=\"Press enter or space to expand filter values for "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            aria-expanded=\"false\"\r\n                            aria-controls=\"facet-values-"
    + alias2(alias1((data && data.index), depth0))
    + "\"\r\n                            tabindex=\"0\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "                    <div class=\"gui item "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 9)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
    + "\">\r\n                        <label  data-attr-value=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\" \r\n                                title=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")\" \r\n                                aria-label=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + " in "
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + " has "
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + " records\"\r\n                                class=\"gui cursor-pointer gui-subheading-1 no-wrap text-shorten m-0\">\r\n                            <input  class=\"gui facet-value-checkbox cursor-pointer m-l-0\" \r\n                                    id=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias3((data && data.index), depth0))
    + "\"\r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 10)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + "\r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 11)).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                                    value=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" \r\n                                    type=\"checkbox\" />\r\n                            "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 1)).call(alias1,(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\r\n                            <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                        </label>\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.favorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 23 */
/*!************************************!*\
  !*** ./src/hbs/facet-unpinned.hbs ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section>\r\n    <div class=\"gui p-10\">\r\n        <span class=\"gui gui-subheading-2 caps bold-500\">\r\n            ALL FILTERS\r\n        </span>\r\n    </div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.nonFavorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "    <div class=\"gui item facet-item border-bottom light p-r-10 p-t-5 p-b-5 p-l-10 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\" \r\n        data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n        data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n        <div class=\"content\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span   class=\"gui primary gui-subheading-1 caps m-0 expansion-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to toggle filter values for "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n                        aria-controls=\"facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\"\r\n                        tabindex=\"0\">\r\n                    "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"gui gui-icon selectable gui-icon-pin m-t-5 m-r-10 pin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to pin filter "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"description gui facet-item-description m-t-10 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 7)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\"\r\n                id=\"unpinned-facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\">\r\n                <div class=\"gui facet-label-container fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 8)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <i  class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\" \r\n                            aria-label=\"Press enter or space to expand filter values for "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            aria-expanded=\"false\"\r\n                            aria-controls=\"facet-values-"
    + alias2(alias1((data && data.index), depth0))
    + "\"\r\n                            tabindex=\"0\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <i  class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\" \r\n                            aria-label=\"Press enter or space to collapse filter values for "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            aria-expanded=\"true\"\r\n                            aria-controls=\"facet-values-"
    + alias2(alias1((data && data.index), depth0))
    + "\"\r\n                            tabindex=\"0\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "                    <div class=\"gui item "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 9)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
    + "\">\r\n                        <label  data-attr-value=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\" \r\n                                title=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")\"\r\n                                aria-label=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + " in "
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + " has "
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + " records\"\r\n                                class=\"gui gui-subheading-1 cursor-pointer no-wrap text-shorten m-0\">\r\n                            <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" \r\n                                    id=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 10)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " \r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 11)).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                                    value=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> \r\n                            "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 1)).call(alias1,(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\r\n                            <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                        </label>\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.nonFavorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 24 */
/*!*******************************************!*\
  !*** ./src/ts/config/FacetConfigStore.ts ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetConfigStore = /** @class */ (function () {
    function FacetConfigStore(options) {
        var _this = this;
        this.defaultFacetOptions = {
            animationTime: 200,
            collapsed: false,
            containerElement: null,
            facetConfig: [],
            noOfFacetToShow: 5,
            // facets: [],
            onCollapseToggle: function (collapseConfig) {
                // Ignore
            },
            onFilterChange: function (key, value, action) {
                // Ignore
            },
            onPinUnpin: function (key, pin) {
                // Ignore
            },
        };
        this.extendOptions = function (inputOptions) {
            return _this.options = jQuery.extend({}, _this.defaultFacetOptions, inputOptions);
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
    }
    Object.defineProperty(FacetConfigStore.prototype, "Options", {
        get: function () { return this.options; },
        enumerable: true,
        configurable: true
    });
    return FacetConfigStore;
}());
exports.FacetConfigStore = FacetConfigStore;


/***/ }),
/* 25 */
/*!*************************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseFacetsHandler.ts ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 14);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 2);
var ExpandCollapseFacetsHandler = /** @class */ (function () {
    function ExpandCollapseFacetsHandler(element, configStore, templateService) {
        var _this = this;
        this.element = element;
        this.configStore = configStore;
        this.templateService = templateService;
        this.handleVisibilityOfAll = function (event, hideShow) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
            var value = hideShow === ShowHide_1.ShowHide.Show ? true : false;
            _this.element.find(".facet-item-header").each(function (index, element) {
                var parent = jQuery(element).parents(".facet-item");
                var name = parent.attr("data-attr-name");
                if (value) {
                    parent.addClass("collapsed");
                }
                else {
                    parent.removeClass("collapsed");
                }
                ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), hideShow, name);
            });
            var data = _this.configStore.Options.facetConfig;
            var publish = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var facet = data_1[_i];
                facet.collapsed = value;
                publish.push({ key: facet.id, collapsed: facet.collapsed });
            }
            _this.configStore.Options.onCollapseToggle(publish);
            event.stopPropagation();
        };
        this.handleVisibilityOfOne = function (event) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
            var target = jQuery(event.target);
            var headerElement = target.parents(".facet-item-header");
            var parent = headerElement.parents(".facet-item");
            var name = parent.attr("data-attr-name");
            var bool = target.hasClass("gui-icon-chevron-up");
            if (!bool) {
                parent.addClass("collapsed");
            }
            else {
                parent.removeClass("collapsed");
            }
            var id = parent.attr("data-attr-id");
            var data = _this.configStore.Options.facetConfig;
            var publish = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var facet = data_2[_i];
                if (facet.id === id) {
                    facet.collapsed = !bool;
                    publish.push({ key: facet.id, collapsed: facet.collapsed });
                    break;
                }
            }
            _this.configStore.Options.onCollapseToggle(publish);
            ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElement, ShowHide_1.ShowHide.Toggle, name);
            event.stopPropagation();
        };
    }
    ExpandCollapseFacetsHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("click", ".expand-all", function (event) {
            _this.handleVisibilityOfAll(event, ShowHide_1.ShowHide.Show);
        });
        this.element.on("keyup", ".expand-all", function (event) {
            _this.handleVisibilityOfAll(event, ShowHide_1.ShowHide.Show);
        });
        this.element.on("click", ".collapse-all", function (event) {
            _this.handleVisibilityOfAll(event, ShowHide_1.ShowHide.Hide);
        });
        this.element.on("keyup", ".collapse-all", function (event) {
            _this.handleVisibilityOfAll(event, ShowHide_1.ShowHide.Hide);
        });
        this.element.on("click", ".facet-item-header .expansion-icon", this.handleVisibilityOfOne);
        this.element.on("keyup", ".facet-item-header .expansion-icon", this.handleVisibilityOfOne);
    };
    ExpandCollapseFacetsHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    ExpandCollapseFacetsHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    return ExpandCollapseFacetsHandler;
}());
exports.ExpandCollapseFacetsHandler = ExpandCollapseFacetsHandler;


/***/ }),
/* 26 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetActionHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 15);
var FacetActionHandler = /** @class */ (function () {
    function FacetActionHandler(element, configStore) {
        this.element = element;
        this.configStore = configStore;
    }
    FacetActionHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("change", ".facet-body .facet-item-description .facet-value-checkbox", function (event) {
            var element = jQuery(event.target);
            var valStr = element.val().toString();
            var value = valStr.split(":::");
            var checked = element.is(":checked");
            var action = checked ? FilterActionType_1.FilterActionType.Add : FilterActionType_1.FilterActionType.Minus;
            _this.configStore.Options.onFilterChange(value[0], value[1], action, value[2], false);
            event.stopPropagation();
        });
    };
    FacetActionHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    FacetActionHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    return FacetActionHandler;
}());
exports.FacetActionHandler = FacetActionHandler;


/***/ }),
/* 27 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ 28);
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 14);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 2);
var FacetSearchHandler = /** @class */ (function () {
    function FacetSearchHandler(element, configStore) {
        var _this = this;
        this.element = element;
        this.configStore = configStore;
        this.handleSearch = function (event) {
            var element = jQuery(event.target);
            element.parent().addClass("loading");
            element.next().show();
            setTimeout(function () {
                var val = element
                    .val()
                    .toString()
                    .toLowerCase();
                _this
                    .element
                    .find(".facet-list .facet-item")
                    .each(function (i, e) {
                    var facetItem = jQuery(e);
                    var name = facetItem.attr("data-attr-name");
                    var facetNameMatch = false;
                    var inputValueBlank = false;
                    // Check if value is empty
                    if (val === undefined || val === null || val.trim() === "") {
                        inputValueBlank = true;
                    }
                    // Compare value with facet name
                    if (!inputValueBlank && facetItem.attr("data-attr-name").toLowerCase().indexOf(val) !== -1) {
                        facetNameMatch = true;
                    }
                    if (inputValueBlank) {
                        _this
                            .element
                            .find(".show-more-link")
                            .each(function (index, shwMoreElem) {
                            if (jQuery(shwMoreElem).hasClass("gui-hidden")) {
                                jQuery(shwMoreElem).hide();
                            }
                            else {
                                jQuery(shwMoreElem).show();
                            }
                        });
                        _this
                            .element
                            .find(".show-less-link")
                            .each(function (index, showLessLink) {
                            if (jQuery(showLessLink).hasClass("gui-hidden")) {
                                jQuery(showLessLink).hide();
                            }
                            else {
                                jQuery(showLessLink).show();
                            }
                        });
                    }
                    else {
                        _this
                            .element
                            .find(".show-more-link")
                            .hide();
                        _this
                            .element
                            .find(".show-less-link")
                            .hide();
                    }
                    // Compare values against child values
                    var facetChildMatch = false;
                    facetItem
                        .find("label")
                        .each(function (j, label) {
                        var labelElem = jQuery(label);
                        if (inputValueBlank) {
                            labelElem
                                .parent(".extra-filter")
                                .hide();
                        }
                        else {
                            labelElem
                                .parent(".extra-filter")
                                .show();
                        }
                        if (facetNameMatch || inputValueBlank) {
                            labelElem.show();
                            return;
                        }
                        var labelValue = labelElem.attr("data-attr-value");
                        if (labelValue.toLowerCase().indexOf(val) === -1) {
                            labelElem.hide();
                        }
                        else {
                            facetChildMatch = true;
                            labelElem.show();
                        }
                    });
                    // Show hide Facet Item itself
                    var headerElment = facetItem.find(".facet-item-header");
                    var collapsed = facetItem.hasClass("collapsed");
                    if (facetNameMatch || facetChildMatch || inputValueBlank) {
                        facetItem.fadeIn(_this.configStore.Options.animationTime);
                    }
                    else {
                        facetItem.fadeOut(_this.configStore.Options.animationTime);
                    }
                    // Expand Collapse Facet
                    if (collapsed || facetNameMatch || facetChildMatch) {
                        ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide_1.ShowHide.Show, name);
                    }
                    else {
                        ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide_1.ShowHide.Hide, name);
                    }
                });
                element.parent().removeClass("loading");
                element.next().hide();
            }, 1);
            event.stopPropagation();
        };
    }
    FacetSearchHandler.prototype.RegisterDomHandler = function () {
        this
            .element
            .on("keyup", ".filter-search-input", throttle_debounce_1.debounce(250, this.handleSearch));
    };
    FacetSearchHandler.prototype.onResize = function () {
        // Ignore
    };
    FacetSearchHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    return FacetSearchHandler;
}());
exports.FacetSearchHandler = FacetSearchHandler;


/***/ }),
/* 28 */
/*!*************************************************!*\
  !*** ./node_modules/throttle-debounce/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! ./throttle */ 16);
var debounce = __webpack_require__(/*! ./debounce */ 29);

module.exports = {
	throttle: throttle,
	debounce: debounce
};


/***/ }),
/* 29 */
/*!****************************************************!*\
  !*** ./node_modules/throttle-debounce/debounce.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__(/*! ./throttle */ 16);

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
module.exports = function ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};


/***/ }),
/* 30 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 15);
var FilterActionHandler = /** @class */ (function () {
    function FilterActionHandler(filterElement, configStore) {
        this.filterElement = filterElement;
        this.configStore = configStore;
    }
    FilterActionHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.filterElement.on("click", ".facet-subheader .facet-labels .label", function (event) {
            var element = jQuery(event.target);
            if (!element.is(".label")) {
                element = element.parents(".label");
            }
            var valStr = element.attr("data-filter-entry").toString();
            var value = valStr.split(":::");
            var isRange = false;
            if (value.length === 4) {
                isRange = true;
            }
            _this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType_1.FilterActionType.Minus, value[2], isRange);
            event.stopPropagation();
        });
        this.filterElement.on("click", ".facet-subheader .remove-all", function (event) {
            _this.configStore.Options.onAllFilterRemove();
            event.stopPropagation();
        });
    };
    FilterActionHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    FilterActionHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    return FilterActionHandler;
}());
exports.FilterActionHandler = FilterActionHandler;


/***/ }),
/* 31 */
/*!*********************************************************!*\
  !*** ./src/ts/eventhandlers/HideFacetSectionHandler.ts ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HideFacetSectionHandler = /** @class */ (function () {
    function HideFacetSectionHandler(element, configStore) {
        var _this = this;
        this.element = element;
        this.configStore = configStore;
        this.RegisterDomHandler = function () {
            _this.element.on("click", ".hide-facet", _this.hideFacet);
            _this.element.on("click", ".show-facet", _this.showFacet);
            _this.element.on("keyup", ".hide-facet", function (event) {
                var code = event.keyCode || event.which;
                if (code !== 13 && code !== 32) {
                    return;
                }
                _this.hideFacet(event);
            });
            _this.element.on("keyup", ".show-facet", function (event) {
                var code = event.keyCode || event.which;
                if (code !== 13 && code !== 32) {
                    return;
                }
                _this.showFacet(event);
            });
        };
        this.hideFacet = function (event) {
            $(".facet-body").hide();
            $(".facet-collapsed-body").fadeIn(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = true;
            event.stopPropagation();
        };
        this.showFacet = function (event) {
            $(".facet-collapsed-body").hide();
            $(".facet-body").fadeIn(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = false;
            event.stopPropagation();
        };
    }
    HideFacetSectionHandler.prototype.onResize = function () {
        // Ignore
    };
    HideFacetSectionHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    return HideFacetSectionHandler;
}());
exports.HideFacetSectionHandler = HideFacetSectionHandler;


/***/ }),
/* 32 */
/*!******************************************************!*\
  !*** ./src/ts/eventhandlers/PinUnpinEventHandler.ts ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PinUnpinEventHandler = /** @class */ (function () {
    function PinUnpinEventHandler(element, configStore, templateService) {
        this.element = element;
        this.configStore = configStore;
        this.templateService = templateService;
    }
    PinUnpinEventHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("click", ".pin-icon", function (event) {
            _this.handlePinUnpin(event, true);
        });
        this.element.on("click", ".unpin-icon", function (event) {
            _this.handlePinUnpin(event, false);
        });
        this.element.on("keyup", ".pin-icon", function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.handlePinUnpin(event, true);
        });
        this.element.on("keyup", ".unpin-icon", function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.handlePinUnpin(event, false);
        });
    };
    PinUnpinEventHandler.prototype.onResize = function () {
        // Ignore
    };
    PinUnpinEventHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    PinUnpinEventHandler.prototype.handlePinUnpin = function (event, pin) {
        var _this = this;
        var element = jQuery(event.target);
        var id = element.attr("data-attr-id");
        var data = this.configStore.Options.facetConfig;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var facet = data_1[_i];
            if (facet.id === id) {
                facet.pinned = pin;
                break;
            }
        }
        setTimeout(function () {
            _this.element.html(_this.templateService.bind(_this.templateService.getData()));
        }, 1);
        this.configStore.Options.onPinUnpin(id, pin);
        event.stopPropagation();
    };
    return PinUnpinEventHandler;
}());
exports.PinUnpinEventHandler = PinUnpinEventHandler;


/***/ }),
/* 33 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/ShowMoreLessHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowMoreLessHandler = /** @class */ (function () {
    function ShowMoreLessHandler(element, configStore) {
        this.element = element;
        this.configStore = configStore;
    }
    ShowMoreLessHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this
            .element
            .on("click", ".show-more-link", function (event) {
            _this.showMoreLessFilters(event, true);
        });
        this
            .element
            .on("click", ".show-less-link", function (event) {
            _this.showMoreLessFilters(event, false);
        });
        this
            .element
            .on("keyup", ".show-more-link", function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.showMoreLessFilters(event, true);
        });
        this
            .element
            .on("keyup", ".show-less-link", function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.showMoreLessFilters(event, false);
        });
    };
    ShowMoreLessHandler.prototype.onResize = function () {
        // Ignore
    };
    ShowMoreLessHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    ShowMoreLessHandler.prototype.showMoreLessFilters = function (event, showMore) {
        var element = jQuery(event.target);
        if (showMore) {
            element
                .parents(".facet-label-container")
                .find(".extra-filter")
                .fadeIn(this.configStore.Options.animationTime, function () {
                element.hide();
                element
                    .siblings("a")
                    .show().focus();
            });
        }
        else {
            element
                .parents(".facet-label-container")
                .find(".extra-filter")
                .fadeOut(this.configStore.Options.animationTime, function () {
                element
                    .siblings("a")
                    .show().focus();
                element.hide();
            });
        }
        event.stopPropagation();
    };
    return ShowMoreLessHandler;
}());
exports.ShowMoreLessHandler = ShowMoreLessHandler;


/***/ }),
/* 34 */
/*!*******************************!*\
  !*** ./src/ts/main/Filter.ts ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFiltersHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFiltersHandler */ 35);
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 36);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 39);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 13);
var Filter = /** @class */ (function () {
    function Filter(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (filters) {
            setTimeout(function () {
                var facetSubHeader = _this.templateService.bind(filters);
                _this.filterElement.html(facetSubHeader);
            }, 1);
        };
        this.destroy = function () {
            if (_this.filterElement !== undefined) {
                _this.filterElement.off();
            }
            _this.handlerChain.forEach(function (handler) {
                if (handler !== undefined && handler.deregister !== undefined) {
                    handler.deregister();
                }
            });
        };
        this.configStore = new FilterConfigStore_1.FilterConfigStore(options);
        this.filterElement = jQuery(options.containerElement);
        this.templateService = new FilterTemplateService_1.FilterTemplateService(this.configStore);
        this.handlerChain.push(new eventhandlers_1.FilterActionHandler(this.filterElement, this.configStore));
        this.handlerChain.push(new HotKeysFiltersHandler_1.HotKeysFiltersHandler());
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Filter;
}());
exports.Filter = Filter;


/***/ }),
/* 35 */
/*!*******************************************************!*\
  !*** ./src/ts/eventhandlers/HotKeysFiltersHandler.ts ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFiltersHandler = /** @class */ (function () {
    function HotKeysFiltersHandler() {
        var _this = this;
        this.RegisterDomHandler = function () {
            jQuery(document).on("keydown", _this.focusOnSearch);
        };
        this.onResize = function () {
            throw new Error("Method not implemented.");
        };
        this.onDocumentClick = function (event) {
            // Do nothing
        };
        this.deRegister = function () {
            jQuery(document).off("keydown", _this.focusOnSearch);
        };
        this.focusOnSearch = function (event) {
            if (event.altKey && event.key === "r") {
                event.preventDefault();
                jQuery(".facet-subheader .remove-all").focus();
            }
        };
    }
    return HotKeysFiltersHandler;
}());
exports.HotKeysFiltersHandler = HotKeysFiltersHandler;


/***/ }),
/* 36 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 37);
var FilterTemplateService = /** @class */ (function () {
    function FilterTemplateService(configStore) {
        var _this = this;
        this.configStore = configStore;
        this.mergeWithFacetConfig = function (filters) {
            var mergedArray = [];
            for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
                var facet = filters_1[_i];
                for (var _a = 0, _b = _this.configStore.Options.filterConfig; _a < _b.length; _a++) {
                    var facetConfig = _b[_a];
                    if (facetConfig.id === facet.id) {
                        mergedArray.push({
                            collapsed: facetConfig.collapsed,
                            facetRanges: facet.facetRanges,
                            facetValues: facet.facetValues,
                            id: facetConfig.id,
                            name: facetConfig.name,
                            order: facetConfig.order,
                            pinned: facetConfig.pinned,
                            type: facetConfig.type,
                        });
                        break;
                    }
                }
            }
            return mergedArray;
        };
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
    }
    FilterTemplateService.prototype.bind = function (filters) {
        var mergedFilters = this.mergeWithFacetConfig(filters);
        return this.tempateFunctionForFacetSubHeader({ filters: mergedFilters });
    };
    return FilterTemplateService;
}());
exports.FilterTemplateService = FilterTemplateService;


/***/ }),
/* 37 */
/*!*******************************************!*\
  !*** ./src/hbs/facet-applied-filters.hbs ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"content facet-subheader gui fluid-w basic curved p-5\">\n    <span class=\"gui gui-subheading-2 caps\">Applied Filters</span>\n    <button class=\"gui m-l-5 remove-all\" >\n        <i class=\"gui-icon gui-icon-cancel\"></i>\n        <span>Clear All</span>\n    </button>\n    <span class=\"gui m-l-10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <span class=\"gui m-r-5\">\n            <span class=\"gui large labels facet-labels\">\n                <span class=\"gui gui-subheading-1\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetRanges : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n        </span>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 1)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + ":::true\">\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Range.ts */ 38)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.min : depth0),(depth0 != null ? depth0.max : depth0),(depths[1] != null ? depths[1].type : depths[1]),{"name":"Range","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 38 */
/*!**********************************!*\
  !*** ./src/hbs/helpers/Range.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 12);
var range = function (min, max, type) {
    var str = "";
    var minStr = min;
    var maxStr = max;
    if (type === "Edm.DateTimeOffset") {
        if (min !== undefined && min !== null && min !== "") {
            minStr = moment(min).format("DD-MMM-YYYY");
        }
        if (max !== undefined && max !== null && max !== "") {
            maxStr = moment(max).format("DD-MMM-YYYY");
        }
    }
    if (minStr !== undefined && minStr !== null && minStr !== "") {
        str += " from: " + minStr;
    }
    if (maxStr !== undefined && maxStr !== null && maxStr !== "") {
        str += " to: " + maxStr;
    }
    return str;
};
exports.default = range;


/***/ }),
/* 39 */
/*!********************************************!*\
  !*** ./src/ts/config/FilterConfigStore.ts ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterConfigStore = /** @class */ (function () {
    function FilterConfigStore(options) {
        var _this = this;
        this.defaultfilterOptions = {
            animationTime: 200,
            containerElement: null,
            filterConfig: [],
            onAllFilterRemove: function () {
                // Ignore
            },
            onFilterChange: function (key, value, action) {
                // Ignore
            },
        };
        this.extendOptions = function (inputOptions) {
            return (_this.options = jQuery.extend({}, _this.defaultfilterOptions, inputOptions));
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object for filters");
        }
    }
    Object.defineProperty(FilterConfigStore.prototype, "Options", {
        get: function () {
            return this.options;
        },
        enumerable: true,
        configurable: true
    });
    return FilterConfigStore;
}());
exports.FilterConfigStore = FilterConfigStore;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NzRlNmY1MGY4MTlhNDBlMTIxOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Gb3JtYXRMYWJlbEJ5VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2xsYXBzZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9IaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrTGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9FbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmFjZXRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LW1haW4uaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtcGlubmVkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LXVucGlubmVkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldFNlYXJjaEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1BpblVucGluRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1Nob3dNb3JlTGVzc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hvdEtleXNGaWx0ZXJzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REEsK0M7Ozs7Ozs7Ozs7Ozs7O0FDQUEsbURBQWlDO0FBQ2pDLElBQU0saUJBQWlCLEdBQUcsVUFBQyxJQUFZLEVBQUUsS0FBYTtJQUNsRCxF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O09BQUE7SUFJTCx3QkFBQztBQUFELENBQUM7QUF6QlksOENBQWlCIiwiZmlsZSI6ImZhY2V0b28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCIsIFwibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wibW9tZW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NzRlNmY1MGY4MTlhNDBlMTIxOCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgZm9ybWF0TGFiZWxCeVR5cGUgPSAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAobW9tZW50ICYmIHR5cGUgPT09IFwiRWRtLkRhdGVUaW1lT2Zmc2V0XCIpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh2YWx1ZSkuZm9ybWF0KFwiREQtTU1NLVlZWVkgaGg6bW0gYVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TGFiZWxCeVR5cGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRm9ybWF0TGFiZWxCeVR5cGUudHMiLCJleHBvcnQgZW51bSBTaG93SGlkZSB7XHJcbiAgICBTaG93LFxyXG4gICAgSGlkZSxcclxuICAgIFRvZ2dsZSxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd0hpZGUudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gbWluLXctNTAgdy1hdXRvIGZsdWlkLWggZmxleCBjb2x1bW4gY29udGFpbmVyXFxcIj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBoLWF1dG8gZ3VpLXN1YmhlYWRpbmctMSBtLTAgYm9yZGVyLWJvdHRvbSBsaWdodCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBleHBhbmQtYWxsXFxcIiBcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiRXhwYW5kIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aS1pY29uIHNwZWNpYWwgcm90YXRlLWxlZnQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIEV4cGFuZCBBbGxcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGNvbGxhcHNlLWFsbFxcXCIgXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkNvbGxhcHNlIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gc3BlY2lhbCByb3RhdGUtcmlnaHQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIENvbGxhcHNlIEFsbFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGlucHV0IGZsdWlkLXcgaC0zMFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgaW5wdXQgZmx1aWQtdyBndWktc3ViaGVhZGluZy0yIGZpbHRlci1zZWFyY2gtaW5wdXRcXFwiIFxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBGaWx0ZXJzLiBTaG9ydGN1dCBBbHQgKyBGIFxcXCIgLz5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLXNlYXJjaCBndWktaGlkZGVuXFxcIj48L2k+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggZmFjZXQtbGlzdCBvZi1hdXRvIG9meC1oaWRkZW5cXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1waW5uZWRcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtdW5waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC11bnBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlY3Rpb24+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1ib2R5Lmhic1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGNvbGxhcHNlZCA9ICh2YWx1ZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gXCIgY29sbGFwc2VkIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xsYXBzZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sbGFwc2VkLnRzIiwiY29uc3QgQm9vbGVhblZhbHVlID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5WYWx1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Cb29sZWFuLnRzIiwiaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IHNlbGVjdGVkRmlsdGVyc0NvdW50ID0gKGZhY2V0VmFsdWVzOiBJRmFjZXRWYWx1ZVtdKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBpZiAoZmFjZXRWYWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzICE9PSBudWxsXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0VmFsdWUgb2YgZmFjZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFZhbHVlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gXCJcIiA6IFwiPHNwYW4gY2xhc3M9XFxcImd1aS1ib2R5LTJcXFwiPihcIiArIGluZGV4ICsgXCIpPC9zcGFuPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRGaWx0ZXJzQ291bnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJjb25zdCBoaWRkZW4gPSAodmFsdWU6IGJvb2xlYW4sIGludmVydDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgaGlkZTtcclxuICAgIGlmIChpbnZlcnQpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpZGUgPyBcIiBndWktaGlkZGVuIFwiIDogXCIgXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoaWRkZW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvSGlkZGVuLnRzIiwiY29uc3QgU2hvd01vcmVMZXNzTGluayA9IChpbmRleCwgdjIsIG9wdGlvbnMpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4Lmxlbmd0aCA+IHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC01XFxcIj5cIlxyXG4gICAgICAgICsgXCI8YSB0YWJpbmRleD1cXFwiMFxcXCIgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gc2hvdyBcIiArIChpbmRleC5sZW5ndGggLSB2MikgKyBcIiBtb3JlIHZhbHVlc1xcXCIgXCJcclxuICAgICAgICArIFwiY2xhc3M9XFxcImd1aSBjYXBzIGd1aS1ib2R5LTIgc2ltcGxlIHNob3ctbW9yZS1saW5rIGN1cnNvci1wb2ludGVyIHAtMCBtLXQtM1xcXCI+XCJcclxuICAgICAgICArIChpbmRleC5sZW5ndGggLSB2MilcclxuICAgICAgICArIFwiIE1vcmUgPC9hPlwiXHJcbiAgICAgICAgKyBcIjxhIHRhYmluZGV4PVxcXCIwXFxcIiBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciB0byBzaG93IGxlc3MgdmFsdWVzXFxcIiBcIlxyXG4gICAgICAgICsgXCJjbGFzcz1cXFwiZ3VpIGNhcHMgZ3VpLWJvZHktMiBzaW1wbGUgc2hvdy1sZXNzLWxpbmsgY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlbiBwLTAgbS10LTNcXFwiPlwiXHJcbiAgICAgICAgKyBcIlNob3cgTGVzczwvYT48L2Rpdj5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZUxlc3NMaW5rO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJjb25zdCBjaGVja0xlbmd0aCA9IChpbmRleCwgdjIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggKyAxID4gdjIpIHtcclxuICAgICAgICByZXR1cm4gXCJndWktaGlkZGVuIGV4dHJhLWZpbHRlclwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja0xlbmd0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja0xlbmd0aC50cyIsImNvbnN0IGNoZWNrZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GYWNldFNlYXJjaEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZpbHRlckFjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUGluVW5waW5FdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vU2hvd01vcmVMZXNzSGFuZGxlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvaW5kZXgudHMiLCJpbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIgPSAoaGVhZGVyRWxlbWVudDogSlF1ZXJ5LCBzaG93SGlkZTogU2hvd0hpZGUsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gaGVhZGVyRWxlbWVudC5jaGlsZHJlbihcInNwYW5cIikuY2hpbGRyZW4oXCIuZXhwYW5zaW9uLWljb25cIikgO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVZpc2libGUgPSBpY29uRWxlbWVudC5oYXNDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XHJcbiAgICAgICAgaWYgKFNob3dIaWRlLlRvZ2dsZSAhPT0gc2hvd0hpZGUgJiYgKChjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5TaG93KSB8fFxyXG4gICAgICAgICAgICAoIWN1cnJlbnRseVZpc2libGUgJiYgc2hvd0hpZGUgPT09IFNob3dIaWRlLkhpZGUpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3VycmVudGx5VmlzaWJsZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50LnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKS5maW5kKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIikuc2xpZGVEb3duKDIwMCk7XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XHJcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQuZmluZChcIi5leHBhbnNpb24taWNvblwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIGNvbGxhcHNlIGZpbHRlciB2YWx1ZXMgZm9yIFwiICsgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIikuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5maW5kKFwiLmV4cGFuc2lvbi1pY29uXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIGV4cGFuZCBmaWx0ZXIgdmFsdWVzIGZvciBcIiArIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsImV4cG9ydCBlbnVtIEZpbHRlckFjdGlvblR5cGUge1xuICAgIEFkZCA9IFwiQWRkXCIsXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgZGVsYXkgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIG5vVHJhaWxpbmcgICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9UcmFpbGluZyBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIG9ubHkgZXhlY3V0ZSBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcyB3aGlsZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KVxuICogQHBhcmFtICB7RnVuY3Rpb259ICBjYWxsYmFjayAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBkZWJvdW5jZU1vZGUgICBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoIGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlICkge1xuXG5cdC8vIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG5cdC8vIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuXHQvLyBkZWJvdW5jZSBtb2Rlcy5cblx0dmFyIHRpbWVvdXRJRDtcblxuXHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cdHZhciBsYXN0RXhlYyA9IDA7XG5cblx0Ly8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXHRpZiAoIHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicgKSB7XG5cdFx0ZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2sgPSBub1RyYWlsaW5nO1xuXHRcdG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG5cdC8vIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG5cdC8vIGlzIGV4ZWN1dGVkLlxuXHRmdW5jdGlvbiB3cmFwcGVyICgpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgZWxhcHNlZCA9IE51bWJlcihuZXcgRGF0ZSgpKSAtIGxhc3RFeGVjO1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Ly8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXHRcdGZ1bmN0aW9uIGV4ZWMgKCkge1xuXHRcdFx0bGFzdEV4ZWMgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG5cdFx0Ly8gdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cblx0XHRmdW5jdGlvbiBjbGVhciAoKSB7XG5cdFx0XHR0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCApIHtcblx0XHRcdC8vIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuXHRcdFx0Ly8gYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG5cdFx0XHRleGVjKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXQuXG5cdFx0aWYgKCB0aW1lb3V0SUQgKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHR9XG5cblx0XHRpZiAoIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSApIHtcblx0XHRcdC8vIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuXHRcdFx0Ly8gYGNhbGxiYWNrYC5cblx0XHRcdGV4ZWMoKTtcblxuXHRcdH0gZWxzZSBpZiAoIG5vVHJhaWxpbmcgIT09IHRydWUgKSB7XG5cdFx0XHQvLyBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG5cdFx0XHQvLyBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuXHRcdFx0Ly8gcmVjZW50IGV4ZWN1dGlvbi5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuXHRcdFx0Ly8gYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuXHRcdFx0Ly8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0dGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXHRyZXR1cm4gd3JhcHBlcjtcblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCAqIGZyb20gXCIuL0ZhY2V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRW50cnkudHMiLCJpbXBvcnQgeyBIb3RLZXlzRmFjZXRIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZhY2V0SGFuZGxlclwiO1xuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCB7IElGYWNldENvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0Q29uZmlnXCI7XG5pbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0VmFsdWVcIjtcbmltcG9ydCB7IEZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IElGYWNldE9wdGlvbnMgfSBmcm9tIFwiLi8uLi9jb25maWcvSUZhY2V0T3B0aW9uc1wiO1xuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyICwgRmFjZXRBY3Rpb25IYW5kbGVyLCBGYWNldFNlYXJjaEhhbmRsZXIsXG4gICAgICAgICBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciwgSUV2ZW50SGFuZGxlciwgUGluVW5waW5FdmVudEhhbmRsZXIsIFNob3dNb3JlTGVzc0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldCB7XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmFjZXRFbGVtZW50OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmFjZXRDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmFjZXRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0QWN0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldFNlYXJjaEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSG90S2V5c0ZhY2V0SGFuZGxlcigpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgUGluVW5waW5FdmVudEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IFNob3dNb3JlTGVzc0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBiaW5kID0gIChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2Uuc2V0RGF0YShmYWNldHMpO1xuICAgICAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChmYWNldHMpO1xuICAgICAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuaHRtbChmdWxsRmFjZXQpO1xuICAgICAgICB9LCAxICk7XG4gICAgfVxuICAgIHB1YmxpYyByZVJlbmRlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZmFjZXRFbGVtZW50Lmh0bWwoZnVsbEZhY2V0KTtcbiAgICAgICAgfSwgMSApO1xuICAgIH1cbiAgICBwdWJsaWMgaGlkZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuZmluZChcIi5mYWNldC1ib2R5XCIpLmZhZGVPdXQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIHNob3cgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuZmFjZXRFbGVtZW50LmZpbmQoXCIuZmFjZXQtYm9keVwiKS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRGYWNldENvbmZpZyA9IChmYWNldENvbmZpZzogSUZhY2V0Q29uZmlnW10pOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnID0gZmFjZXRDb25maWc7XG4gICAgfVxuICAgIHB1YmxpYyBkZXN0cm95ID0gICgpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCB0aGlzLmZhY2V0RWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQub2ZmKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiBoYW5kbGVyLmRlcmVnaXN0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVyZWdpc3RlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5jbGFzcyBIb3RLZXlzRmFjZXRIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCB0aGlzLmZvY3VzT25TZWFyY2gpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayA9IChldmVudDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZVJlZ2lzdGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub2ZmKFwia2V5ZG93blwiLCB0aGlzLmZvY3VzT25TZWFyY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9jdXNPblNlYXJjaCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5hbHRLZXkgICYmICBldmVudC5rZXkgPT09IFwiZlwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0hvdEtleXNGYWNldEhhbmRsZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZhY2V0SGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcbmltcG9ydCB7SUZhY2V0fSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xuaW1wb3J0ICogYXMgRmFjZXRNYWluIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1tYWluLmhic1wiO1xuaW1wb3J0IHtGYWNldENvbmZpZ1N0b3JlfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHtJRmFjZXRUZW1wbGF0ZVNlcnZpY2V9IGZyb20gXCIuL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRUZW1wbGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGRhdGE6IElGYWNldFtdO1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0SGVhZGVyOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHk6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge1xuICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluID0gRmFjZXRNYWluO1xuICB9XG4gIHB1YmxpYyBiaW5kKGZhY2V0czogSUZhY2V0W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbGxhcHNlZDogYm9vbGVhbiA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQ7XG4gICAgY29uc3QgbWVyZ2VkRmFjZXRzID0gdGhpcy5tZXJnZVdpdGhGYWNldENvbmZpZyhmYWNldHMpO1xuICAgIGNvbnN0IGZhdm9yaXRlcyA9IG1lcmdlZEZhY2V0cy5maWx0ZXIoKGYpID0+IGYucGlubmVkICE9PSB1bmRlZmluZWQgJiYgZi5waW5uZWQpO1xuICAgIGNvbnN0IG5vbkZhdm9yaXRlcyA9IG1lcmdlZEZhY2V0cy5maWx0ZXIoKGYpID0+IGYucGlubmVkID09PSB1bmRlZmluZWQgfHwgIWYucGlubmVkKTtcbiAgICBmYXZvcml0ZXMuc29ydCh0aGlzLmNvbXBhcmVGbik7XG4gICAgbm9uRmF2b3JpdGVzLnNvcnQodGhpcy5jb21wYXJlRm4pO1xuICAgIGNvbnN0IG5vT2ZGYWNldFRvU2hvdyA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5ub09mRmFjZXRUb1Nob3c7XG4gICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluKHtmYXZvcml0ZXMsIG5vbkZhdm9yaXRlcywgbm9PZkZhY2V0VG9TaG93fSk7XG4gIH1cbiAgcHVibGljIHNldERhdGEgPSAoZmFjZXRzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZGF0YSA9IGZhY2V0cztcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSA9ICgpOiBJRmFjZXRbXSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBwcml2YXRlIGNvbXBhcmVGbiA9IChwcmV2OiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgIGlmIChwcmV2Lm9yZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG5leHQub3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBwcmV2Lm9yZGVyIC0gbmV4dC5vcmRlcjtcbiAgfVxuICBwcml2YXRlIG1lcmdlV2l0aEZhY2V0Q29uZmlnID0gKGZhY2V0czogSUZhY2V0W10pID0+IHtcbiAgICBjb25zdCBtZXJnZWRBcnJheTogYW55W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGZhY2V0cykge1xuICAgICAgZm9yIChjb25zdCBmYWNldENvbmZpZyBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWcpIHtcbiAgICAgICAgaWYgKGZhY2V0Q29uZmlnLmlkID09PSBmYWNldC5pZCkge1xuICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goe1xuICAgICAgICAgICAgY29sbGFwc2VkOiBmYWNldENvbmZpZy5jb2xsYXBzZWQsXG4gICAgICAgICAgICBmYWNldFJhbmdlczogZmFjZXQuZmFjZXRSYW5nZXMsXG4gICAgICAgICAgICBmYWNldFZhbHVlczogZmFjZXQuZmFjZXRWYWx1ZXMsXG4gICAgICAgICAgICBpZDogZmFjZXRDb25maWcuaWQsXG4gICAgICAgICAgICBuYW1lOiBmYWNldENvbmZpZy5uYW1lLFxuICAgICAgICAgICAgb3JkZXI6IGZhY2V0Q29uZmlnLm9yZGVyLFxuICAgICAgICAgICAgcGlubmVkOiBmYWNldENvbmZpZy5waW5uZWQsXG4gICAgICAgICAgICB0eXBlOiBmYWNldENvbmZpZy50eXBlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWRBcnJheTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuIGd1aS1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LW1haW4uaGJzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxzZWN0aW9uPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcC1sLTEwIHAtci0xMCBwLWItMTAgcC10LTEwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBjYXBzIGJvbGQtNTAwXFxcIj5cXHJcXG4gICAgICAgICAgICBQSU5ORUQgRklMVEVSU1xcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYXZvcml0ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9zZWN0aW9uPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgPGRpdiAgICBjbGFzcz1cXFwiZ3VpIGl0ZW0gZmFjZXQtaXRlbSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2xsYXBzZWQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNvbGxhcHNlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIGJvcmRlci1ib3R0b20gbGlnaHQgcC1yLTEwIHAtdC01IHAtYi01IHAtbC0xMFxcXCIgXFxyXFxuICAgICAgICAgICAgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgIGRhdGEtYXR0ci1uYW1lPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBndWkgaXRlbSBmbGV4IGpjLXNiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gICBjbGFzcz1cXFwiZ3VpIHByaW1hcnkgZ3VpLXN1YmhlYWRpbmctMSBjYXBzIG0tMCBleHBhbnNpb24taWNvbiBjdXJzb3ItcG9pbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gdG9nZ2xlIGV4cGFuc2lvbiBvZiBmaWx0ZXIgdmFsdWVzIGZvciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxCb29sZWFuLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJCb29sZWFuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkRmlsdGVyc0NvdW50LnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcIlNlbGVjdGVkRmlsdGVyc0NvdW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSAgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi11bnBpbiBtLXQtNSBtLXItMTAgdW5waW4taWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gdW5waW4gZmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uIGd1aSBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC0xMCBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiSGlkZGVuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwaW5uZWQtZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgZmFjZXQtbGFiZWwtY29udGFpbmVyIGZsdWlkLXcgbS0wIHAtMFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg3LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTaG93TW9yZUxlc3NMaW5rLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5ub09mRmFjZXRUb1Nob3cgOiBkZXB0aHNbMV0pLHtcIm5hbWVcIjpcIlNob3dNb3JlTGVzc0xpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGkgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gY29sbGFwc2UgZmlsdGVyIHZhbHVlcyBmb3IgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImZhY2V0LXZhbHVlcy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIGV4cGFuZCBmaWx0ZXIgdmFsdWVzIGZvciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImZhY2V0LXZhbHVlcy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgaXRlbSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja0xlbmd0aC50c1wiKSkuY2FsbChhbGlhczEsKGRhdGEgJiYgZGF0YS5pbmRleCksKGRlcHRoc1syXSAhPSBudWxsID8gZGVwdGhzWzJdLm5vT2ZGYWNldFRvU2hvdyA6IGRlcHRoc1syXSkse1wibmFtZVwiOlwiQ2hlY2tMZW5ndGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIilcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIGluIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIiBoYXMgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIHJlY29yZHNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGd1aS1zdWJoZWFkaW5nLTEgbm8td3JhcCB0ZXh0LXNob3J0ZW4gbS0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZ3VpIGZhY2V0LXZhbHVlLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIG0tbC0wXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRm9ybWF0TGFiZWxCeVR5cGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkZvcm1hdExhYmVsQnlUeXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmF2b3JpdGVzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1waW5uZWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxzZWN0aW9uPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcC0xMFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgY2FwcyBib2xkLTUwMFxcXCI+XFxyXFxuICAgICAgICAgICAgQUxMIEZJTFRFUlNcXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubm9uRmF2b3JpdGVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvc2VjdGlvbj5cXHJcXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpdGVtIGZhY2V0LWl0ZW0gYm9yZGVyLWJvdHRvbSBsaWdodCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbGxhcHNlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ29sbGFwc2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgZGF0YS1hdHRyLW5hbWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWl0ZW0taGVhZGVyIGZsdWlkIGd1aSBpdGVtIGZsZXggamMtc2JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAgIGNsYXNzPVxcXCJndWkgcHJpbWFyeSBndWktc3ViaGVhZGluZy0xIGNhcHMgbS0wIGV4cGFuc2lvbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byB0b2dnbGUgZmlsdGVyIHZhbHVlcyBmb3IgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbGVhbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQm9vbGVhblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImZhY2V0LXZhbHVlcy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZEZpbHRlcnNDb3VudC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJTZWxlY3RlZEZpbHRlcnNDb3VudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1waW4gbS10LTUgbS1yLTEwIHBpbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBwaW4gZmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uIGd1aSBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC0xMCBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiSGlkZGVuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJ1bnBpbm5lZC1mYWNldC12YWx1ZXMtXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmYWNldC1sYWJlbC1jb250YWluZXIgZmx1aWQtdyBtLTAgcC0wXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNob3dNb3JlTGVzc0xpbmsudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCksKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLm5vT2ZGYWNldFRvU2hvdyA6IGRlcHRoc1sxXSkse1wibmFtZVwiOlwiU2hvd01vcmVMZXNzTGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLWNoZXZyb24tdXAgZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gZXhwYW5kIGZpbHRlciB2YWx1ZXMgZm9yIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGkgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gY29sbGFwc2UgZmlsdGVyIHZhbHVlcyBmb3IgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImZhY2V0LXZhbHVlcy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgaXRlbSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja0xlbmd0aC50c1wiKSkuY2FsbChhbGlhczEsKGRhdGEgJiYgZGF0YS5pbmRleCksKGRlcHRoc1syXSAhPSBudWxsID8gZGVwdGhzWzJdLm5vT2ZGYWNldFRvU2hvdyA6IGRlcHRoc1syXSkse1wibmFtZVwiOlwiQ2hlY2tMZW5ndGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgaW4gXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiIGhhcyBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgcmVjb3Jkc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBjdXJzb3ItcG9pbnRlciBuby13cmFwIHRleHQtc2hvcnRlbiBtLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEZvcm1hdExhYmVsQnlUeXBlLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJGb3JtYXRMYWJlbEJ5VHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBtLTBcXFwiPihcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5vbkZhdm9yaXRlcyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtdW5waW5uZWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7RmlsdGVyQWN0aW9uVHlwZX0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQge0lGYWNldE9wdGlvbnN9IGZyb20gXCIuL0lGYWNldE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q29uZmlnU3RvcmUge1xuICAgIHByaXZhdGUgb3B0aW9uczogSUZhY2V0T3B0aW9ucztcbiAgICBwcml2YXRlIGRlZmF1bHRGYWNldE9wdGlvbnM6IElGYWNldE9wdGlvbnMgPSB7XG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDIwMCxcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgZmFjZXRDb25maWc6IFtdLFxuICAgICAgICBub09mRmFjZXRUb1Nob3c6IDUsXG4gICAgICAgIC8vIGZhY2V0czogW10sXG4gICAgICAgIG9uQ29sbGFwc2VUb2dnbGU6IChjb2xsYXBzZUNvbmZpZzogW3trZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufV0pID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgICAgICBvbkZpbHRlckNoYW5nZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBhY3Rpb246IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgICAgICBvblBpblVucGluOiAoa2V5OiBzdHJpbmcsIHBpbjogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmFjZXRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElGYWNldE9wdGlvbnMge3JldHVybiB0aGlzLm9wdGlvbnM7IH1cbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJRmFjZXRPcHRpb25zKTogSUZhY2V0T3B0aW9ucyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRGYWNldE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5leHBhbmQtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLlNob3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5TaG93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LWl0ZW0taGVhZGVyIC5leHBhbnNpb24taWNvblwiLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmZhY2V0LWl0ZW0taGVhZGVyIC5leHBhbnNpb24taWNvblwiLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5T2ZBbGwgPSAoZXZlbnQsIGhpZGVTaG93OiBTaG93SGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBoaWRlU2hvdyA9PT0gU2hvd0hpZGUuU2hvdyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIik7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGFyZW50LmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBFeHBhbmRDb2xsYXBzZU1hbmFnZXIuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihqUXVlcnkoZWxlbWVudCksIGhpZGVTaG93LCBuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XG4gICAgICAgIGNvbnN0IHB1Ymxpc2g6IEFycmF5PHtrZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufT4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmYWNldC5jb2xsYXBzZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHB1Ymxpc2gucHVzaCh7a2V5OiBmYWNldC5pZCwgY29sbGFwc2VkOiBmYWNldC5jb2xsYXBzZWR9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xsYXBzZVRvZ2dsZShwdWJsaXNoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaGFuZGxlVmlzaWJpbGl0eU9mT25lID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiAmJiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IHRhcmdldC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBoZWFkZXJFbGVtZW50LnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHBhcmVudC5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIik7XG4gICAgICAgIGNvbnN0IGJvb2wgPSB0YXJnZXQuaGFzQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xuICAgICAgICBpZiAoICFib29sICkge1xuICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmF0dHIoXCJkYXRhLWF0dHItaWRcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XG4gICAgICAgIGNvbnN0IHB1Ymxpc2g6IEFycmF5PHtrZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufT4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZmFjZXQuaWQgPT09IGlkICkge1xuICAgICAgICAgICAgICAgIGZhY2V0LmNvbGxhcHNlZCA9ICFib29sO1xuICAgICAgICAgICAgICAgIHB1Ymxpc2gucHVzaCh7a2V5OiBmYWNldC5pZCwgY29sbGFwc2VkOiBmYWNldC5jb2xsYXBzZWR9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xsYXBzZVRvZ2dsZShwdWJsaXNoKTtcbiAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxlbWVudCwgU2hvd0hpZGUuVG9nZ2xlLCBuYW1lKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldEFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLmZhY2V0LWJvZHkgLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gLmZhY2V0LXZhbHVlLWNoZWNrYm94XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6OjpcIik7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hlY2tlZCA/IEZpbHRlckFjdGlvblR5cGUuQWRkIDogRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIGFjdGlvbiwgdmFsdWVbMl0sIGZhbHNlKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJ0aHJvdHRsZS1kZWJvdW5jZVwiO1xyXG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZU1hbmFnZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaG93SGlkZX0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFNlYXJjaEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJrZXl1cFwiLCBcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIsIGRlYm91bmNlKDI1MCwgdGhpcy5oYW5kbGVTZWFyY2gpKTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlU2VhcmNoID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIGVsZW1lbnQubmV4dCgpLnNob3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5mYWNldC1saXN0IC5mYWNldC1pdGVtXCIpXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZXRJdGVtID0galF1ZXJ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmYWNldEl0ZW0uYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWNldE5hbWVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dFZhbHVlQmxhbmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlQmxhbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHZhbHVlIHdpdGggZmFjZXQgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWx1ZUJsYW5rICYmIGZhY2V0SXRlbS5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0TmFtZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaHdNb3JlRWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2h3TW9yZUVsZW0pLmhhc0NsYXNzKFwiZ3VpLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1sZXNzLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaG93TGVzc0xpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHNob3dMZXNzTGluaykuaGFzQ2xhc3MoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaG93TGVzc0xpbmspLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2hvd0xlc3NMaW5rKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB2YWx1ZXMgYWdhaW5zdCBjaGlsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFjZXRDaGlsZE1hdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goKGo6IG51bWJlciwgbGFiZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGpRdWVyeShsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0TmFtZU1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxWYWx1ZSA9IGxhYmVsRWxlbS5hdHRyKFwiZGF0YS1hdHRyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRDaGlsZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgaGlkZSBGYWNldCBJdGVtIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsbWVudCA9IGZhY2V0SXRlbS5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGZhY2V0SXRlbS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZCBDb2xsYXBzZSBGYWNldFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsYXBzZWQgfHwgZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsbWVudCwgU2hvd0hpZGUuU2hvdywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxtZW50LCBTaG93SGlkZS5IaWRlLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubmV4dCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAxKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwidmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dGhyb3R0bGU6IHRocm90dGxlLFxuXHRkZWJvdW5jZTogZGVib3VuY2Vcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cblxudmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xuXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBhdEJlZ2luICAgICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICggZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrICkge1xuXHRyZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlckVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmlsdGVyQ29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLmZhY2V0LWxhYmVscyAubGFiZWxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pcyhcIi5sYWJlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50cyhcIi5sYWJlbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWZpbHRlci1lbnRyeVwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjo6OlwiKTtcclxuICAgICAgICAgICAgbGV0IGlzUmFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNCApIHtcclxuICAgICAgICAgICAgICAgIGlzUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIEZpbHRlckFjdGlvblR5cGUuTWludXMsIHZhbHVlWzJdLCBpc1JhbmdlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5yZW1vdmUtYWxsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25BbGxGaWx0ZXJSZW1vdmUoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuaGlkZS1mYWNldFwiLCB0aGlzLmhpZGVGYWNldCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1mYWNldFwiLCB0aGlzLnNob3dGYWNldCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuaGlkZS1mYWNldFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oaWRlRmFjZXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnNob3ctZmFjZXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZhY2V0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIGhpZGVGYWNldCA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5mYWNldC1jb2xsYXBzZWQtYm9keVwiKS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dGYWNldCA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICQoXCIuZmFjZXQtY29sbGFwc2VkLWJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciB9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgU2hvd0hpZGUgfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBpblVucGluRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5waW4taWNvblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudW5waW4taWNvblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnBpbi1pY29uXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi51bnBpbi1pY29uXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlUGluVW5waW4oZXZlbnQ6IGFueSwgcGluOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1hdHRyLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XHJcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICggZmFjZXQuaWQgPT09IGlkICkge1xyXG4gICAgICAgICAgICAgICAgZmFjZXQucGlubmVkID0gcGluO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5odG1sKHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJpbmQodGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0RGF0YSgpKSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uUGluVW5waW4oaWQsIHBpbik7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL1BpblVucGluRXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHtGYWNldENvbmZpZ1N0b3JlfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQge0lGYWNldFRlbXBsYXRlU2VydmljZX0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZU1hbmFnZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaG93SGlkZX0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93TW9yZUxlc3NIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1tb3JlLWxpbmtcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnNob3ctbGVzcy1saW5rXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwia2V5dXBcIiwgXCIuc2hvdy1tb3JlLWxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwia2V5dXBcIiwgXCIuc2hvdy1sZXNzLWxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50OiBhbnksIHNob3dNb3JlOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmIChzaG93TW9yZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50cyhcIi5mYWNldC1sYWJlbC1jb250YWluZXJcIilcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50cyhcIi5mYWNldC1sYWJlbC1jb250YWluZXJcIilcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVPdXQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcImFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93TW9yZUxlc3NIYW5kbGVyLnRzIiwiaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlnL0lGaWx0ZXJPcHRpb25zXCI7XHJcbmltcG9ydCB7IEhvdEtleXNGaWx0ZXJzSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGaWx0ZXJzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25IYW5kbGVyLCBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJDaGFpbjogSUV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IEZpbHRlckNvbmZpZ1N0b3JlKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9IGpRdWVyeShvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZpbHRlclRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGaWx0ZXJBY3Rpb25IYW5kbGVyKHRoaXMuZmlsdGVyRWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhvdEtleXNGaWx0ZXJzSGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZCA9ICAoZmlsdGVyczogSUZhY2V0W10pOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmFjZXRTdWJIZWFkZXIgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKGZpbHRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQuaHRtbChmYWNldFN1YkhlYWRlcik7XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICggdGhpcy5maWx0ZXJFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGhhbmRsZXIuZGVyZWdpc3RlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlcmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5jbGFzcyBIb3RLZXlzRmlsdGVyc0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlUmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c09uU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAgJiYgIGV2ZW50LmtleSA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmZhY2V0LXN1YmhlYWRlciAucmVtb3ZlLWFsbFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtIb3RLZXlzRmlsdGVyc0hhbmRsZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgKiBhcyBGYWNldFN1YkhlYWRlciBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW46IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIgPSBGYWNldFN1YkhlYWRlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBiaW5kKGZpbHRlcnM6IElGYWNldFtdKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBtZXJnZWRGaWx0ZXJzID0gdGhpcy5tZXJnZVdpdGhGYWNldENvbmZpZyhmaWx0ZXJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcih7ZmlsdGVyczogbWVyZ2VkRmlsdGVyc30pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtZXJnZVdpdGhGYWNldENvbmZpZyA9IChmaWx0ZXJzOiBJRmFjZXRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmYWNldENvbmZpZyBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChmYWNldENvbmZpZy5pZCA9PT0gZmFjZXQuaWQpIHtcclxuICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFjZXRDb25maWcuY29sbGFwc2VkLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRSYW5nZXM6IGZhY2V0LmZhY2V0UmFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRWYWx1ZXM6IGZhY2V0LmZhY2V0VmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGZhY2V0Q29uZmlnLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmFjZXRDb25maWcubmFtZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBmYWNldENvbmZpZy5vcmRlcixcclxuICAgICAgICAgICAgICAgIHBpbm5lZDogZmFjZXRDb25maWcucGlubmVkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmFjZXRDb25maWcudHlwZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XHJcbiAgICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQgZmFjZXQtc3ViaGVhZGVyIGd1aSBmbHVpZC13IGJhc2ljIGN1cnZlZCBwLTVcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgY2Fwc1xcXCI+QXBwbGllZCBGaWx0ZXJzPC9zcGFuPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS1sLTUgcmVtb3ZlLWFsbFxcXCIgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4+Q2xlYXIgQWxsPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGxhcmdlIGxhYmVscyBmYWNldC1sYWJlbHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTFcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFJhbmdlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS0wIG0tdC0yIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRm9ybWF0TGFiZWxCeVR5cGUudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJGb3JtYXRMYWJlbEJ5VHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG0tMCBtLXQtMiBtLXItMiBwLTQgbGFiZWwgY3Vyc29yLXBvaW50ZXIgc3RyaWtldGhyb3VnaC1ob3ZlclxcXCIgZGF0YS1maWx0ZXItZW50cnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjo6OlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6dHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxSYW5nZS50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5taW4gOiBkZXB0aDApLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYXggOiBkZXB0aDApLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSx7XCJuYW1lXCI6XCJSYW5nZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVycyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCByYW5nZSA9IChtaW4sIG1heCwgdHlwZSkgPT4ge1xyXG4gICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICBsZXQgbWluU3RyID0gbWluO1xyXG4gICAgbGV0IG1heFN0ciA9IG1heDtcclxuICAgIGlmICh0eXBlID09PSBcIkVkbS5EYXRlVGltZU9mZnNldFwiKSB7XHJcbiAgICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIG1pbiAhPT0gbnVsbCAmJiBtaW4gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbWluU3RyID0gbW9tZW50KG1pbikuZm9ybWF0KFwiREQtTU1NLVlZWVlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXggIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IG51bGwgJiYgbWF4ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG1heFN0ciA9IG1vbWVudChtYXgpLmZvcm1hdChcIkRELU1NTS1ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtaW5TdHIgIT09IHVuZGVmaW5lZCAmJiBtaW5TdHIgIT09IG51bGwgJiYgbWluU3RyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgc3RyICs9IFwiIGZyb206IFwiICsgbWluU3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heFN0ciAhPT0gdW5kZWZpbmVkICYmIG1heFN0ciAhPT0gbnVsbCAmJiBtYXhTdHIgIT09IFwiXCIpIHtcclxuICAgICAgICBzdHIgKz0gXCIgdG86IFwiICsgbWF4U3RyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1JhbmdlLnRzIiwiaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyT3B0aW9ucyB9IGZyb20gXCIuL0lGaWx0ZXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29uZmlnU3RvcmUge1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJRmlsdGVyT3B0aW9ucztcclxuICAgIHByaXZhdGUgZGVmYXVsdGZpbHRlck9wdGlvbnM6IElGaWx0ZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDIwMCxcclxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIGZpbHRlckNvbmZpZzogW10sXHJcbiAgICAgICAgb25BbGxGaWx0ZXJSZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZpbHRlck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdCBmb3IgZmlsdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZpbHRlck9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJRmlsdGVyT3B0aW9ucyk6IElGaWx0ZXJPcHRpb25zID0+IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdGZpbHRlck9wdGlvbnMsIGlucHV0T3B0aW9ucykpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==