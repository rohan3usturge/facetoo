(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "moment"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("handlebars/runtime"), require("moment"));
	else
		root["Facetoo"] = factory(root["Handlebars"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_37__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 2 */
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
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-pinned.hbs */ 20),depth0,{"name":"facet-pinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-unpinned.hbs */ 21),depth0,{"name":"facet-unpinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </section>\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 23));
__export(__webpack_require__(/*! ./FacetActionHandler */ 24));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 25));
__export(__webpack_require__(/*! ./FilterActionHandler */ 28));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 29));
__export(__webpack_require__(/*! ./PinUnpinEventHandler */ 30));
__export(__webpack_require__(/*! ./ShowMoreLessHandler */ 31));


/***/ }),
/* 12 */
/*!*******************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseManager.ts ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 1);
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
__export(__webpack_require__(/*! ./Facet */ 16));
__export(__webpack_require__(/*! ./Filter */ 32));


/***/ }),
/* 16 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFacetHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFacetHandler */ 17);
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 18);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 22);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 11);
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
        this.hide = function () {
            _this.facetElement.find(".facet-body").fadeOut(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = true;
        };
        this.show = function () {
            _this.facetElement.find(".facet-body").fadeIn(_this.configStore.Options.animationTime);
            _this.configStore.Options.collapsed = false;
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
/* 17 */
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
/* 18 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 19);
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
/* 19 */
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
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 2),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 2),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui fluid-h \">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 20 */
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 3)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + " border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\" \r\n            data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n        <div class=\"content\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span   class=\"gui primary gui-subheading-1 caps m-0 expansion-icon cursor-pointer\"\r\n                        title=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-label=\"Press enter or space to toggle expansion of filter values for "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 4)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n                        aria-controls=\"facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\"\r\n                        tabindex=\"0\">\r\n                    "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 5)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i  data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                        class=\"gui gui-icon selectable gui-icon-unpin m-t-5 m-r-10 unpin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to unpin filter "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"description gui facet-item-description m-t-10 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 6)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\"\r\n                id=\"pinned-facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\">\r\n                <div class=\"gui facet-label-container fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 7)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 8)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 9)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + "\r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 10)).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                                    value=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" \r\n                                    type=\"checkbox\" />\r\n                            "
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                            <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                        </label>\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.favorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 21 */
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 3)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\" \r\n        data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n        data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n        <div class=\"content\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span   class=\"gui primary gui-subheading-1 caps m-0 expansion-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to toggle filter values for "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 4)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n                        aria-controls=\"facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\"\r\n                        tabindex=\"0\">\r\n                    "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 5)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"gui gui-icon selectable gui-icon-pin m-t-5 m-r-10 pin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to pin filter "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"description gui facet-item-description m-t-10 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 6)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\"\r\n                id=\"unpinned-facet-values-"
    + alias2(alias3((data && data.index), depth0))
    + "\">\r\n                <div class=\"gui facet-label-container fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 7)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 8)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 9)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " \r\n                                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 10)).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                                    value=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> \r\n                            "
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                            <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                        </label>\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.nonFavorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 22 */
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
/* 23 */
/*!*************************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseFacetsHandler.ts ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 12);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 1);
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
/* 24 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetActionHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 13);
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
            var value = valStr.split(":");
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
/* 25 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ 26);
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 12);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 1);
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
/* 26 */
/*!*************************************************!*\
  !*** ./node_modules/throttle-debounce/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! ./throttle */ 14);
var debounce = __webpack_require__(/*! ./debounce */ 27);

module.exports = {
	throttle: throttle,
	debounce: debounce
};


/***/ }),
/* 27 */
/*!****************************************************!*\
  !*** ./node_modules/throttle-debounce/debounce.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__(/*! ./throttle */ 14);

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
/* 28 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 13);
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
            var value = valStr.split(":");
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/*!*******************************!*\
  !*** ./src/ts/main/Filter.ts ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFiltersHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFiltersHandler */ 33);
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 34);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 38);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 11);
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
/* 33 */
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
/* 34 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 35);
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
/* 35 */
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
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\n                    "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + ":true\">\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Range.ts */ 36)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.min : depth0),(depth0 != null ? depth0.max : depth0),(depths[1] != null ? depths[1].type : depths[1]),{"name":"Range","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 36 */
/*!**********************************!*\
  !*** ./src/hbs/helpers/Range.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 37);
var range = function (min, max, type) {
    var str = "";
    var minStr = min;
    var maxStr = max;
    if (type === "Edm.DateTimeOffset") {
        if (min !== undefined && min !== null && min !== "") {
            minStr = moment(min).format("ll");
        }
        if (max !== undefined && max !== null && max !== "") {
            maxStr = moment(max).format("ll");
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
/* 37 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMWMwZDEzOTIwMDkwMjIxYmM5MiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1Nob3dIaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYm9keS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NvbGxhcHNlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0hpZGRlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2hvd01vcmVMZXNzTGluay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tMZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0VudHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZhY2V0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hvdEtleXNGYWNldEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1waW5uZWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtdW5waW5uZWQuaGJzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0U2VhcmNoSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGhyb3R0bGUtZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvUGluVW5waW5FdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd01vcmVMZXNzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zZXJ2aWNlcy9GaWx0ZXJUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9SYW5nZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsdUNBQUk7SUFDSix1Q0FBSTtJQUNKLDJDQUFNO0FBQ1YsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5COzs7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TSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1FBQ25GLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0JBQVcsc0NBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUlMLHdCQUFDO0FBQUQsQ0FBQztBQXpCWSw4Q0FBaUIiLCJmaWxlIjoiZmFjZXRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmFjZXRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFjZXRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxYzBkMTM5MjAwOTAyMjFiYzkyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZW51bSBTaG93SGlkZSB7XHJcbiAgICBTaG93LFxyXG4gICAgSGlkZSxcclxuICAgIFRvZ2dsZSxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd0hpZGUudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gbWluLXctNTAgdy1hdXRvIGZsdWlkLWggZmxleCBjb2x1bW4gY29udGFpbmVyXFxcIj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBoLWF1dG8gZ3VpLXN1YmhlYWRpbmctMSBtLTAgYm9yZGVyLWJvdHRvbSBsaWdodCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBleHBhbmQtYWxsXFxcIiBcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiRXhwYW5kIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aS1pY29uIHNwZWNpYWwgcm90YXRlLWxlZnQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIEV4cGFuZCBBbGxcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGNvbGxhcHNlLWFsbFxcXCIgXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkNvbGxhcHNlIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gc3BlY2lhbCByb3RhdGUtcmlnaHQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIENvbGxhcHNlIEFsbFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGlucHV0IGZsdWlkLXcgaC0zMFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgaW5wdXQgZmx1aWQtdyBndWktc3ViaGVhZGluZy0yIGZpbHRlci1zZWFyY2gtaW5wdXRcXFwiIFxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBGaWx0ZXJzLiBTaG9ydGN1dCBBbHQgKyBGIFxcXCIgLz5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLXNlYXJjaCBndWktaGlkZGVuXFxcIj48L2k+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggZmFjZXQtbGlzdCBvZi1hdXRvIG9meC1oaWRkZW5cXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1waW5uZWRcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtdW5waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC11bnBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlY3Rpb24+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1ib2R5Lmhic1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGNvbGxhcHNlZCA9ICh2YWx1ZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gXCIgY29sbGFwc2VkIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xsYXBzZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sbGFwc2VkLnRzIiwiY29uc3QgQm9vbGVhblZhbHVlID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5WYWx1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Cb29sZWFuLnRzIiwiaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IHNlbGVjdGVkRmlsdGVyc0NvdW50ID0gKGZhY2V0VmFsdWVzOiBJRmFjZXRWYWx1ZVtdKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBpZiAoZmFjZXRWYWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzICE9PSBudWxsXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0VmFsdWUgb2YgZmFjZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFZhbHVlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gXCJcIiA6IFwiPHNwYW4gY2xhc3M9XFxcImd1aS1ib2R5LTJcXFwiPihcIiArIGluZGV4ICsgXCIpPC9zcGFuPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRGaWx0ZXJzQ291bnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJjb25zdCBoaWRkZW4gPSAodmFsdWU6IGJvb2xlYW4sIGludmVydDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgaGlkZTtcclxuICAgIGlmIChpbnZlcnQpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpZGUgPyBcIiBndWktaGlkZGVuIFwiIDogXCIgXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoaWRkZW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvSGlkZGVuLnRzIiwiY29uc3QgU2hvd01vcmVMZXNzTGluayA9IChpbmRleCwgdjIsIG9wdGlvbnMpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4Lmxlbmd0aCA+IHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC01XFxcIj5cIlxyXG4gICAgICAgICsgXCI8YSB0YWJpbmRleD1cXFwiMFxcXCIgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gc2hvdyBcIiArIChpbmRleC5sZW5ndGggLSB2MikgKyBcIiBtb3JlIHZhbHVlc1xcXCIgXCJcclxuICAgICAgICArIFwiY2xhc3M9XFxcImd1aSBjYXBzIGd1aS1ib2R5LTIgc2ltcGxlIHNob3ctbW9yZS1saW5rIGN1cnNvci1wb2ludGVyIHAtMCBtLXQtM1xcXCI+XCJcclxuICAgICAgICArIChpbmRleC5sZW5ndGggLSB2MilcclxuICAgICAgICArIFwiIE1vcmUgPC9hPlwiXHJcbiAgICAgICAgKyBcIjxhIHRhYmluZGV4PVxcXCIwXFxcIiBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciB0byBzaG93IGxlc3MgdmFsdWVzXFxcIiBcIlxyXG4gICAgICAgICsgXCJjbGFzcz1cXFwiZ3VpIGNhcHMgZ3VpLWJvZHktMiBzaW1wbGUgc2hvdy1sZXNzLWxpbmsgY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlbiBwLTAgbS10LTNcXFwiPlwiXHJcbiAgICAgICAgKyBcIlNob3cgTGVzczwvYT48L2Rpdj5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZUxlc3NMaW5rO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJjb25zdCBjaGVja0xlbmd0aCA9IChpbmRleCwgdjIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggKyAxID4gdjIpIHtcclxuICAgICAgICByZXR1cm4gXCJndWktaGlkZGVuIGV4dHJhLWZpbHRlclwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja0xlbmd0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja0xlbmd0aC50cyIsImNvbnN0IGNoZWNrZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZhY2V0QWN0aW9uSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRTZWFyY2hIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GaWx0ZXJBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9IaWRlRmFjZXRTZWN0aW9uSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BpblVucGluRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3dNb3JlTGVzc0hhbmRsZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwiaW1wb3J0IHsgU2hvd0hpZGUgfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGFuZENvbGxhcHNlTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDb250cm9sVmlzaWJpbGl0eU9mRmlsdGVyID0gKGhlYWRlckVsZW1lbnQ6IEpRdWVyeSwgc2hvd0hpZGU6IFNob3dIaWRlLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uRWxlbWVudCA9IGhlYWRlckVsZW1lbnQuY2hpbGRyZW4oXCJzcGFuXCIpLmNoaWxkcmVuKFwiLmV4cGFuc2lvbi1pY29uXCIpIDtcclxuICAgICAgICBjb25zdCBjdXJyZW50bHlWaXNpYmxlID0gaWNvbkVsZW1lbnQuaGFzQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgIGlmIChTaG93SGlkZS5Ub2dnbGUgIT09IHNob3dIaWRlICYmICgoY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuU2hvdykgfHxcclxuICAgICAgICAgICAgKCFjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5IaWRlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWN1cnJlbnRseVZpc2libGUpIHtcclxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIikuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlRG93bigyMDApO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50LmZpbmQoXCIuZXhwYW5zaW9uLWljb25cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBjb2xsYXBzZSBmaWx0ZXIgdmFsdWVzIGZvciBcIiArIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpLmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLWRvd25cIik7XHJcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQuZmluZChcIi5leHBhbnNpb24taWNvblwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBleHBhbmQgZmlsdGVyIHZhbHVlcyBmb3IgXCIgKyBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZU1hbmFnZXIudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcbiAgICBBZGQgPSBcIkFkZFwiLFxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBub1RyYWlsaW5nICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgZGVib3VuY2VNb2RlICAgSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCBkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSApIHtcblxuXHQvLyBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuXHQvLyBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcblx0Ly8gZGVib3VuY2UgbW9kZXMuXG5cdHZhciB0aW1lb3V0SUQ7XG5cblx0Ly8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCB0aW1lIGBjYWxsYmFja2Agd2FzIGV4ZWN1dGVkLlxuXHR2YXIgbGFzdEV4ZWMgPSAwO1xuXG5cdC8vIGBub1RyYWlsaW5nYCBkZWZhdWx0cyB0byBmYWxzeS5cblx0aWYgKCB0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nICkge1xuXHRcdGRlYm91bmNlTW9kZSA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrID0gbm9UcmFpbGluZztcblx0XHRub1RyYWlsaW5nID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuXHQvLyBmdW5jdGlvbmFsaXR5IGFuZCB3aGVuIGV4ZWN1dGVkIHdpbGwgbGltaXQgdGhlIHJhdGUgYXQgd2hpY2ggYGNhbGxiYWNrYFxuXHQvLyBpcyBleGVjdXRlZC5cblx0ZnVuY3Rpb24gd3JhcHBlciAoKSB7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGVsYXBzZWQgPSBOdW1iZXIobmV3IERhdGUoKSkgLSBsYXN0RXhlYztcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblx0XHRmdW5jdGlvbiBleGVjICgpIHtcblx0XHRcdGxhc3RFeGVjID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuXHRcdC8vIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG5cdFx0ZnVuY3Rpb24gY2xlYXIgKCkge1xuXHRcdFx0dGltZW91dElEID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmICggZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQgKSB7XG5cdFx0XHQvLyBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcblx0XHRcdC8vIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuXHRcdFx0ZXhlYygpO1xuXHRcdH1cblxuXHRcdC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0LlxuXHRcdGlmICggdGltZW91dElEICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkgKSB7XG5cdFx0XHQvLyBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcblx0XHRcdC8vIGBjYWxsYmFja2AuXG5cdFx0XHRleGVjKCk7XG5cblx0XHR9IGVsc2UgaWYgKCBub1RyYWlsaW5nICE9PSB0cnVlICkge1xuXHRcdFx0Ly8gSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuXHRcdFx0Ly8gZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3Rcblx0XHRcdC8vIHJlY2VudCBleGVjdXRpb24uXG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcblx0XHRcdC8vIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cblx0XHRcdC8vIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcblx0XHR9XG5cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblx0cmV0dXJuIHdyYXBwZXI7XG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS90aHJvdHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgKiBmcm9tIFwiLi9GYWNldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0VudHJ5LnRzIiwiaW1wb3J0IHsgSG90S2V5c0ZhY2V0SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGYWNldEhhbmRsZXJcIjtcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0VmFsdWVcIjtcbmltcG9ydCB7IEZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IElGYWNldE9wdGlvbnMgfSBmcm9tIFwiLi8uLi9jb25maWcvSUZhY2V0T3B0aW9uc1wiO1xuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyICwgRmFjZXRBY3Rpb25IYW5kbGVyLCBGYWNldFNlYXJjaEhhbmRsZXIsXG4gICAgICAgICBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciwgSUV2ZW50SGFuZGxlciwgUGluVW5waW5FdmVudEhhbmRsZXIsIFNob3dNb3JlTGVzc0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldCB7XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmFjZXRFbGVtZW50OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmFjZXRDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmFjZXRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0QWN0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldFNlYXJjaEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSG90S2V5c0ZhY2V0SGFuZGxlcigpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgUGluVW5waW5FdmVudEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IFNob3dNb3JlTGVzc0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBiaW5kID0gIChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2Uuc2V0RGF0YShmYWNldHMpO1xuICAgICAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChmYWNldHMpO1xuICAgICAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuaHRtbChmdWxsRmFjZXQpO1xuICAgICAgICB9LCAxICk7XG4gICAgfVxuICAgIHB1YmxpYyBoaWRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5maW5kKFwiLmZhY2V0LWJvZHlcIikuZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvdyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuZmluZChcIi5mYWNldC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIHRoaXMuZmFjZXRFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5vZmYoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGhhbmRsZXIuZGVyZWdpc3RlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5kZXJlZ2lzdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmNsYXNzIEhvdEtleXNGYWNldEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlUmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c09uU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAgJiYgIGV2ZW50LmtleSA9PT0gXCJmXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmZpbHRlci1zZWFyY2gtaW5wdXRcIikuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SG90S2V5c0ZhY2V0SGFuZGxlcn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmFjZXRIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHtJRmFjZXR9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgKiBhcyBGYWNldE1haW4gZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LW1haW4uaGJzXCI7XG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQge0lGYWNldFRlbXBsYXRlU2VydmljZX0gZnJvbSBcIi4vSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNldFRlbXBsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTogSUZhY2V0W107XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7XG4gICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4gPSBGYWNldE1haW47XG4gIH1cbiAgcHVibGljIGJpbmQoZmFjZXRzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZDtcbiAgICBjb25zdCBtZXJnZWRGYWNldHMgPSB0aGlzLm1lcmdlV2l0aEZhY2V0Q29uZmlnKGZhY2V0cyk7XG4gICAgY29uc3QgZmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgIT09IHVuZGVmaW5lZCAmJiBmLnBpbm5lZCk7XG4gICAgY29uc3Qgbm9uRmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgPT09IHVuZGVmaW5lZCB8fCAhZi5waW5uZWQpO1xuICAgIGZhdm9yaXRlcy5zb3J0KHRoaXMuY29tcGFyZUZuKTtcbiAgICBub25GYXZvcml0ZXMuc29ydCh0aGlzLmNvbXBhcmVGbik7XG4gICAgY29uc3Qgbm9PZkZhY2V0VG9TaG93ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm5vT2ZGYWNldFRvU2hvdztcbiAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4oe2Zhdm9yaXRlcywgbm9uRmF2b3JpdGVzLCBub09mRmFjZXRUb1Nob3d9KTtcbiAgfVxuICBwdWJsaWMgc2V0RGF0YSA9IChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5kYXRhID0gZmFjZXRzO1xuICB9XG4gIHB1YmxpYyBnZXREYXRhID0gKCk6IElGYWNldFtdID0+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHByaXZhdGUgY29tcGFyZUZuID0gKHByZXY6IGFueSwgbmV4dDogYW55KSA9PiB7XG4gICAgaWYgKHByZXYub3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmV4dC5vcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXYub3JkZXIgLSBuZXh0Lm9yZGVyO1xuICB9XG4gIHByaXZhdGUgbWVyZ2VXaXRoRmFjZXRDb25maWcgPSAoZmFjZXRzOiBJRmFjZXRbXSkgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEFycmF5OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZmFjZXRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGZhY2V0Q29uZmlnIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZykge1xuICAgICAgICBpZiAoZmFjZXRDb25maWcuaWQgPT09IGZhY2V0LmlkKSB7XG4gICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhY2V0Q29uZmlnLmNvbGxhcHNlZCxcbiAgICAgICAgICAgIGZhY2V0UmFuZ2VzOiBmYWNldC5mYWNldFJhbmdlcyxcbiAgICAgICAgICAgIGZhY2V0VmFsdWVzOiBmYWNldC5mYWNldFZhbHVlcyxcbiAgICAgICAgICAgIGlkOiBmYWNldENvbmZpZy5pZCxcbiAgICAgICAgICAgIG5hbWU6IGZhY2V0Q29uZmlnLm5hbWUsXG4gICAgICAgICAgICBvcmRlcjogZmFjZXRDb25maWcub3JkZXIsXG4gICAgICAgICAgICBwaW5uZWQ6IGZhY2V0Q29uZmlnLnBpbm5lZCxcbiAgICAgICAgICAgIHR5cGU6IGZhY2V0Q29uZmlnLnR5cGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZEFycmF5O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtYm9keSBndWkgZmx1aWQtaCBvZi1oaWRkZW4gZ3VpLWhpZGRlblxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWJvZHkuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1ib2R5XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtYm9keSBndWkgZmx1aWQtaCBvZi1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlwiO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHNlY3Rpb24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBwLWwtMTAgcC1yLTEwIHAtYi0xMCBwLXQtMTBcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yIGNhcHMgYm9sZC01MDBcXFwiPlxcclxcbiAgICAgICAgICAgIFBJTk5FRCBGSUxURVJTXFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhdm9yaXRlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3NlY3Rpb24+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIiAgICA8ZGl2ICAgIGNsYXNzPVxcXCJndWkgaXRlbSBmYWNldC1pdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbGxhcHNlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ29sbGFwc2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCIgYm9yZGVyLWJvdHRvbSBsaWdodCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwXFxcIiBcXHJcXG4gICAgICAgICAgICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgZGF0YS1hdHRyLW5hbWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWl0ZW0taGVhZGVyIGZsdWlkIGd1aSBpdGVtIGZsZXggamMtc2JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAgIGNsYXNzPVxcXCJndWkgcHJpbWFyeSBndWktc3ViaGVhZGluZy0xIGNhcHMgbS0wIGV4cGFuc2lvbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byB0b2dnbGUgZXhwYW5zaW9uIG9mIGZpbHRlciB2YWx1ZXMgZm9yIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xlYW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkJvb2xlYW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJmYWNldC12YWx1ZXMtXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLXVucGluIG0tdC01IG0tci0xMCB1bnBpbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byB1bnBpbiBmaWx0ZXIgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24gZ3VpIGZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gbS10LTEwIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEhpZGRlbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCksdHJ1ZSx7XCJuYW1lXCI6XCJIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInBpbm5lZC1mYWNldC12YWx1ZXMtXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmYWNldC1sYWJlbC1jb250YWluZXIgZmx1aWQtdyBtLTAgcC0wXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNob3dNb3JlTGVzc0xpbmsudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCksKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLm5vT2ZGYWNldFRvU2hvdyA6IGRlcHRoc1sxXSkse1wibmFtZVwiOlwiU2hvd01vcmVMZXNzTGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLWNoZXZyb24tdXAgZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBjb2xsYXBzZSBmaWx0ZXIgdmFsdWVzIGZvciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGkgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gZXhwYW5kIGZpbHRlciB2YWx1ZXMgZm9yIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrTGVuZ3RoLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBkYXRhLmluZGV4KSwoZGVwdGhzWzJdICE9IG51bGwgPyBkZXB0aHNbMl0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzJdKSx7XCJuYW1lXCI6XCJDaGVja0xlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGRhdGEtYXR0ci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIoXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgaW4gXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiIGhhcyBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgcmVjb3Jkc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgY3Vyc29yLXBvaW50ZXIgZ3VpLXN1YmhlYWRpbmctMSBuby13cmFwIHRleHQtc2hvcnRlbiBtLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJndWkgZmFjZXQtdmFsdWUtY2hlY2tib3ggY3Vyc29yLXBvaW50ZXIgbS1sLTBcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTEgbS0wXFxcIj4oXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYXZvcml0ZXMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LXBpbm5lZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHNlY3Rpb24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBwLTEwXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBjYXBzIGJvbGQtNTAwXFxcIj5cXHJcXG4gICAgICAgICAgICBBTEwgRklMVEVSU1xcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ub25GYXZvcml0ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9zZWN0aW9uPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGl0ZW0gZmFjZXQtaXRlbSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ29sbGFwc2VkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDb2xsYXBzZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICBkYXRhLWF0dHItbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtaXRlbS1oZWFkZXIgZmx1aWQgZ3VpIGl0ZW0gZmxleCBqYy1zYlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuICAgY2xhc3M9XFxcImd1aSBwcmltYXJ5IGd1aS1zdWJoZWFkaW5nLTEgY2FwcyBtLTAgZXhwYW5zaW9uLWljb24gY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIHRvZ2dsZSBmaWx0ZXIgdmFsdWVzIGZvciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxCb29sZWFuLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJCb29sZWFuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkRmlsdGVyc0NvdW50LnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcIlNlbGVjdGVkRmlsdGVyc0NvdW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLXBpbiBtLXQtNSBtLXItMTAgcGluLWljb24gY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIHBpbiBmaWx0ZXIgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24gZ3VpIGZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gbS10LTEwIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEhpZGRlbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCksdHJ1ZSx7XCJuYW1lXCI6XCJIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInVucGlubmVkLWZhY2V0LXZhbHVlcy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGZhY2V0LWxhYmVsLWNvbnRhaW5lciBmbHVpZC13IG0tMCBwLTBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2hvd01vcmVMZXNzTGluay50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzFdKSx7XCJuYW1lXCI6XCJTaG93TW9yZUxlc3NMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBleHBhbmQgZmlsdGVyIHZhbHVlcyBmb3IgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJmYWNldC12YWx1ZXMtXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLWNoZXZyb24tZG93biBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBjb2xsYXBzZSBmaWx0ZXIgdmFsdWVzIGZvciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZmFjZXQtdmFsdWVzLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrTGVuZ3RoLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBkYXRhLmluZGV4KSwoZGVwdGhzWzJdICE9IG51bGwgPyBkZXB0aHNbMl0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzJdKSx7XCJuYW1lXCI6XCJDaGVja0xlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGRhdGEtYXR0ci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIoXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBpbiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCIgaGFzIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiByZWNvcmRzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIGN1cnNvci1wb2ludGVyIG5vLXdyYXAgdGV4dC1zaG9ydGVuIG0tMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGZhY2V0LXZhbHVlLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIG0tbC0wXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+IFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubm9uRmF2b3JpdGVzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC11bnBpbm5lZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtGaWx0ZXJBY3Rpb25UeXBlfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7SUZhY2V0T3B0aW9uc30gZnJvbSBcIi4vSUZhY2V0T3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRDb25maWdTdG9yZSB7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJRmFjZXRPcHRpb25zO1xuICAgIHByaXZhdGUgZGVmYXVsdEZhY2V0T3B0aW9uczogSUZhY2V0T3B0aW9ucyA9IHtcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxuICAgICAgICBmYWNldENvbmZpZzogW10sXG4gICAgICAgIG5vT2ZGYWNldFRvU2hvdzogNSxcbiAgICAgICAgLy8gZmFjZXRzOiBbXSxcbiAgICAgICAgb25Db2xsYXBzZVRvZ2dsZTogKGNvbGxhcHNlQ29uZmlnOiBbe2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59XSkgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGluVW5waW46IChrZXk6IHN0cmluZywgcGluOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZhY2V0T3B0aW9ucyB7cmV0dXJuIHRoaXMub3B0aW9uczsgfVxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGYWNldE9wdGlvbnMpOiBJRmFjZXRPcHRpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEZhY2V0T3B0aW9ucywgaW5wdXRPcHRpb25zKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlTWFuYWdlciB9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNob3dIaWRlIH0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcblxuZXhwb3J0IGNsYXNzIEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmV4cGFuZC1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZkFsbChldmVudCwgU2hvd0hpZGUuU2hvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5leHBhbmQtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLlNob3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuY29sbGFwc2UtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLkhpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuY29sbGFwc2UtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLkhpZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtaXRlbS1oZWFkZXIgLmV4cGFuc2lvbi1pY29uXCIsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mT25lKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuZmFjZXQtaXRlbS1oZWFkZXIgLmV4cGFuc2lvbi1pY29uXCIsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mT25lKTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZVZpc2liaWxpdHlPZkFsbCA9IChldmVudCwgaGlkZVNob3c6IFNob3dIaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiAmJiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhpZGVTaG93ID09PSBTaG93SGlkZS5TaG93ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1pdGVtLWhlYWRlclwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXJlbnQuYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpO1xuICAgICAgICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgaGlkZVNob3csIG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcbiAgICAgICAgY29uc3QgcHVibGlzaDogQXJyYXk8e2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGZhY2V0LmNvbGxhcHNlZCA9IHZhbHVlO1xuICAgICAgICAgICAgcHVibGlzaC5wdXNoKHtrZXk6IGZhY2V0LmlkLCBjb2xsYXBzZWQ6IGZhY2V0LmNvbGxhcHNlZH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNvbGxhcHNlVG9nZ2xlKHB1Ymxpc2gpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5T2ZPbmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gdGFyZ2V0LnBhcmVudHMoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGhlYWRlckVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpO1xuICAgICAgICBjb25zdCBuYW1lID0gcGFyZW50LmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKTtcbiAgICAgICAgY29uc3QgYm9vbCA9IHRhcmdldC5oYXNDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XG4gICAgICAgIGlmICggIWJvb2wgKSB7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuYXR0cihcImRhdGEtYXR0ci1pZFwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcbiAgICAgICAgY29uc3QgcHVibGlzaDogQXJyYXk8e2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmYWNldC5pZCA9PT0gaWQgKSB7XG4gICAgICAgICAgICAgICAgZmFjZXQuY29sbGFwc2VkID0gIWJvb2w7XG4gICAgICAgICAgICAgICAgcHVibGlzaC5wdXNoKHtrZXk6IGZhY2V0LmlkLCBjb2xsYXBzZWQ6IGZhY2V0LmNvbGxhcHNlZH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNvbGxhcHNlVG9nZ2xlKHB1Ymxpc2gpO1xuICAgICAgICBFeHBhbmRDb2xsYXBzZU1hbmFnZXIuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihoZWFkZXJFbGVtZW50LCBTaG93SGlkZS5Ub2dnbGUsIG5hbWUpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0QWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIuZmFjZXQtYm9keSAuZmFjZXQtaXRlbS1kZXNjcmlwdGlvbiAuZmFjZXQtdmFsdWUtY2hlY2tib3hcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hlY2tlZCA/IEZpbHRlckFjdGlvblR5cGUuQWRkIDogRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIGFjdGlvbiwgdmFsdWVbMl0sIGZhbHNlKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJ0aHJvdHRsZS1kZWJvdW5jZVwiO1xyXG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZU1hbmFnZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaG93SGlkZX0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFNlYXJjaEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJrZXl1cFwiLCBcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIsIGRlYm91bmNlKDI1MCwgdGhpcy5oYW5kbGVTZWFyY2gpKTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlU2VhcmNoID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIGVsZW1lbnQubmV4dCgpLnNob3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5mYWNldC1saXN0IC5mYWNldC1pdGVtXCIpXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZXRJdGVtID0galF1ZXJ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmYWNldEl0ZW0uYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWNldE5hbWVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dFZhbHVlQmxhbmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlQmxhbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHZhbHVlIHdpdGggZmFjZXQgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWx1ZUJsYW5rICYmIGZhY2V0SXRlbS5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0TmFtZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaHdNb3JlRWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2h3TW9yZUVsZW0pLmhhc0NsYXNzKFwiZ3VpLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1sZXNzLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaG93TGVzc0xpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHNob3dMZXNzTGluaykuaGFzQ2xhc3MoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaG93TGVzc0xpbmspLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2hvd0xlc3NMaW5rKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB2YWx1ZXMgYWdhaW5zdCBjaGlsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFjZXRDaGlsZE1hdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goKGo6IG51bWJlciwgbGFiZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGpRdWVyeShsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0TmFtZU1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxWYWx1ZSA9IGxhYmVsRWxlbS5hdHRyKFwiZGF0YS1hdHRyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRDaGlsZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgaGlkZSBGYWNldCBJdGVtIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsbWVudCA9IGZhY2V0SXRlbS5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGZhY2V0SXRlbS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZCBDb2xsYXBzZSBGYWNldFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsYXBzZWQgfHwgZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsbWVudCwgU2hvd0hpZGUuU2hvdywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxtZW50LCBTaG93SGlkZS5IaWRlLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubmV4dCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAxKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwidmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dGhyb3R0bGU6IHRocm90dGxlLFxuXHRkZWJvdW5jZTogZGVib3VuY2Vcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cblxudmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xuXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBhdEJlZ2luICAgICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICggZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrICkge1xuXHRyZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlckVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmlsdGVyQ29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLmZhY2V0LWxhYmVscyAubGFiZWxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pcyhcIi5sYWJlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50cyhcIi5sYWJlbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWZpbHRlci1lbnRyeVwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgIGxldCBpc1JhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDQgKSB7XHJcbiAgICAgICAgICAgICAgICBpc1JhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UodmFsdWVbMF0sIHZhbHVlWzFdLCBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzLCB2YWx1ZVsyXSwgaXNSYW5nZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LXN1YmhlYWRlciAucmVtb3ZlLWFsbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQWxsRmlsdGVyUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZGVGYWNldFNlY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmhpZGUtZmFjZXRcIiwgdGhpcy5oaWRlRmFjZXQpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnNob3ctZmFjZXRcIiwgdGhpcy5zaG93RmFjZXQpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmhpZGUtZmFjZXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUZhY2V0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5zaG93LWZhY2V0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3dGYWNldChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBoaWRlRmFjZXQgPSAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAkKFwiLmZhY2V0LWJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuZmFjZXQtY29sbGFwc2VkLWJvZHlcIikuZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93RmFjZXQgPSAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAkKFwiLmZhY2V0LWNvbGxhcHNlZC1ib2R5XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmZhY2V0LWJvZHlcIikuZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyIH0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFNob3dIaWRlIH0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW5VbnBpbkV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIucGluLWljb25cIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnVucGluLWljb25cIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5waW4taWNvblwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIudW5waW4taWNvblwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZVBpblVucGluKGV2ZW50OiBhbnksIHBpbjogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuYXR0cihcImRhdGEtYXR0ci1pZFwiKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIGZhY2V0LmlkID09PSBpZCApIHtcclxuICAgICAgICAgICAgICAgIGZhY2V0LnBpbm5lZCA9IHBpbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaHRtbCh0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldERhdGEoKSkpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblBpblVucGluKGlkLCBwaW4pO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9QaW5VbnBpbkV2ZW50SGFuZGxlci50cyIsImltcG9ydCB7RmFjZXRDb25maWdTdG9yZX0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHtJRmFjZXRUZW1wbGF0ZVNlcnZpY2V9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQge0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcn0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VNYW5hZ2VyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7U2hvd0hpZGV9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd01vcmVMZXNzSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnNob3ctbW9yZS1saW5rXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBcIi5zaG93LWxlc3MtbGlua1wiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImtleXVwXCIsIFwiLnNob3ctbW9yZS1saW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImtleXVwXCIsIFwiLnNob3ctbGVzcy1saW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd01vcmVMZXNzRmlsdGVycyhldmVudDogYW55LCBzaG93TW9yZTogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpZiAoc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudHMoXCIuZmFjZXQtbGFiZWwtY29udGFpbmVyXCIpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5leHRyYS1maWx0ZXJcIilcclxuICAgICAgICAgICAgICAgIC5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcImFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudHMoXCIuZmFjZXQtbGFiZWwtY29udGFpbmVyXCIpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5leHRyYS1maWx0ZXJcIilcclxuICAgICAgICAgICAgICAgIC5mYWRlT3V0KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoXCJhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd01vcmVMZXNzSGFuZGxlci50cyIsImltcG9ydCB7IElGaWx0ZXJPcHRpb25zIH0gZnJvbSBcIi4uL2NvbmZpZy9JRmlsdGVyT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBIb3RLZXlzRmlsdGVyc0hhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmlsdGVyc0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcclxuaW1wb3J0IHsgRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0lGaWx0ZXJUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uSGFuZGxlciwgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50aGFuZGxlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmlsdGVyQ29uZmlnU3RvcmU7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZpbHRlclRlbXBsYXRlU2VydmljZTtcclxuICAgIHByaXZhdGUgZmlsdGVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZpbHRlck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gIG5ldyBGaWx0ZXJDb25maWdTdG9yZShvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlU2VydmljZSA9IG5ldyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmlsdGVyQWN0aW9uSGFuZGxlcih0aGlzLmZpbHRlckVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBIb3RLZXlzRmlsdGVyc0hhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJpbmQgPSAgKGZpbHRlcnM6IElGYWNldFtdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY2V0U3ViSGVhZGVyID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChmaWx0ZXJzKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lmh0bWwoZmFjZXRTdWJIZWFkZXIpO1xyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXN0cm95ID0gICgpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoIHRoaXMuZmlsdGVyRWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub2ZmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLmZvckVhY2goKGhhbmRsZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiBoYW5kbGVyLmRlcmVnaXN0ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5kZXJlZ2lzdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRmlsdGVyLnRzIiwiaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuY2xhc3MgSG90S2V5c0ZpbHRlcnNIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCB0aGlzLmZvY3VzT25TZWFyY2gpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayA9IChldmVudDogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZVJlZ2lzdGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub2ZmKFwia2V5ZG93blwiLCB0aGlzLmZvY3VzT25TZWFyY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9jdXNPblNlYXJjaCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5hbHRLZXkgICYmICBldmVudC5rZXkgPT09IFwiclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5mYWNldC1zdWJoZWFkZXIgLnJlbW92ZS1hbGxcIikuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SG90S2V5c0ZpbHRlcnNIYW5kbGVyfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0hvdEtleXNGaWx0ZXJzSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcclxuaW1wb3J0ICogYXMgRmFjZXRTdWJIZWFkZXIgZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LWFwcGxpZWQtZmlsdGVycy5oYnNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUZpbHRlclRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuL0lGaWx0ZXJUZW1wbGF0ZVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0SGVhZGVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogRmlsdGVyQ29uZmlnU3RvcmUpIHtcclxuICAgICAgICB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyID0gRmFjZXRTdWJIZWFkZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZChmaWx0ZXJzOiBJRmFjZXRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbWVyZ2VkRmlsdGVycyA9IHRoaXMubWVyZ2VXaXRoRmFjZXRDb25maWcoZmlsdGVycyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIoe2ZpbHRlcnM6IG1lcmdlZEZpbHRlcnN9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWVyZ2VXaXRoRmFjZXRDb25maWcgPSAoZmlsdGVyczogSUZhY2V0W10pID0+IHtcclxuICAgICAgICBjb25zdCBtZXJnZWRBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGZpbHRlcnMpIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgZmFjZXRDb25maWcgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZpbHRlckNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoZmFjZXRDb25maWcuaWQgPT09IGZhY2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhY2V0Q29uZmlnLmNvbGxhcHNlZCxcclxuICAgICAgICAgICAgICAgIGZhY2V0UmFuZ2VzOiBmYWNldC5mYWNldFJhbmdlcyxcclxuICAgICAgICAgICAgICAgIGZhY2V0VmFsdWVzOiBmYWNldC5mYWNldFZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGlkOiBmYWNldENvbmZpZy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZhY2V0Q29uZmlnLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogZmFjZXRDb25maWcub3JkZXIsXHJcbiAgICAgICAgICAgICAgICBwaW5uZWQ6IGZhY2V0Q29uZmlnLnBpbm5lZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZhY2V0Q29uZmlnLnR5cGUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlZEFycmF5O1xyXG4gICAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9zZXJ2aWNlcy9GaWx0ZXJUZW1wbGF0ZVNlcnZpY2UudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50IGZhY2V0LXN1YmhlYWRlciBndWkgZmx1aWQtdyBiYXNpYyBjdXJ2ZWQgcC01XFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yIGNhcHNcXFwiPkFwcGxpZWQgRmlsdGVyczwvc3Bhbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG0tbC01IHJlbW92ZS1hbGxcXFwiID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgIDxzcGFuPkNsZWFyIEFsbDwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1sLTEwXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NwYW4+XFxuPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBsYXJnZSBsYWJlbHMgZmFjZXQtbGFiZWxzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRSYW5nZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9zcGFuPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG0tMCBtLXQtMiBtLXItMiBwLTQgbGFiZWwgY3Vyc29yLXBvaW50ZXIgc3RyaWtldGhyb3VnaC1ob3ZlclxcXCIgZGF0YS1maWx0ZXItZW50cnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG0tMCBtLXQtMiBtLXItMiBwLTQgbGFiZWwgY3Vyc29yLXBvaW50ZXIgc3RyaWtldGhyb3VnaC1ob3ZlclxcXCIgZGF0YS1maWx0ZXItZW50cnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6dHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxSYW5nZS50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5taW4gOiBkZXB0aDApLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYXggOiBkZXB0aDApLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSx7XCJuYW1lXCI6XCJSYW5nZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVycyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCByYW5nZSA9IChtaW4sIG1heCwgdHlwZSkgPT4ge1xyXG4gICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICBsZXQgbWluU3RyID0gbWluO1xyXG4gICAgbGV0IG1heFN0ciA9IG1heDtcclxuICAgIGlmICh0eXBlID09PSBcIkVkbS5EYXRlVGltZU9mZnNldFwiKSB7XHJcbiAgICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIG1pbiAhPT0gbnVsbCAmJiBtaW4gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbWluU3RyID0gbW9tZW50KG1pbikuZm9ybWF0KFwibGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXggIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IG51bGwgJiYgbWF4ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG1heFN0ciA9IG1vbWVudChtYXgpLmZvcm1hdChcImxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtaW5TdHIgIT09IHVuZGVmaW5lZCAmJiBtaW5TdHIgIT09IG51bGwgJiYgbWluU3RyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgc3RyICs9IFwiIGZyb206IFwiICsgbWluU3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heFN0ciAhPT0gdW5kZWZpbmVkICYmIG1heFN0ciAhPT0gbnVsbCAmJiBtYXhTdHIgIT09IFwiXCIpIHtcclxuICAgICAgICBzdHIgKz0gXCIgdG86IFwiICsgbWF4U3RyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1JhbmdlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJPcHRpb25zIH0gZnJvbSBcIi4vSUZpbHRlck9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb25maWdTdG9yZSB7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0ZmlsdGVyT3B0aW9uczogSUZpbHRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgZmlsdGVyQ29uZmlnOiBbXSxcclxuICAgICAgICBvbkFsbEZpbHRlclJlbW92ZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgYWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0IGZvciBmaWx0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJRmlsdGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKTogSUZpbHRlck9wdGlvbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0ZmlsdGVyT3B0aW9ucywgaW5wdXRPcHRpb25zKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9