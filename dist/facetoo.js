(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "moment"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("handlebars/runtime"), require("moment"));
	else
		root["Facetoo"] = factory(root["Handlebars"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"gui of-hidden min-w-50 w-auto fluid-h flex column container\" id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-facet-container\">\n    <section class=\"gui h-auto gui-subheading-1 m-0 border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <button class=\"gui cursor-pointer expand-all\" \n                aria-label=\"Expand All Filters\">\n            <i  class=\"gui-icon special rotate-left gui-icon-chevdouble\"></i>\n            Expand All\n        </button>\n        <button class=\"gui cursor-pointer collapse-all\" \n                aria-label=\"Collapse All Filters\">\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\n            Collapse All\n        </button>\n    </section>\n    <section class=\"gui border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <div class=\"gui gui-icon input fluid-w h-30\">\n            <input class=\"gui input fluid-w gui-subheading-2 filter-search-input\"\n                   role=\"search\"\n                   aria-controls=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-filter-tree "
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-filter-tree "
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-filter-tree\"\n                   placeholder=\"Search Filters. Shortcut Alt + F \" />\n            <i class=\"gui gui-icon gui-icon-search gui-hidden\"></i>\n        </div>\n    </section>\n    <ul class=\"gui fluid-h facet-list of-auto ofx-hidden m-0 p-0\" \n        role=\"tree\"\n        id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-filter-tree\"\n        aria-relevant=\"all\"\n        aria-live=\"assertive\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-pinned.hbs */ 18),depth0,{"name":"facet-pinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-unpinned.hbs */ 25),depth0,{"name":"facet-unpinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </ul>\n</div>";
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
var BooleanValue = function (bool, negate) {
    if (negate) {
        bool = !bool;
    }
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
/*!*********************************!*\
  !*** ./src/hbs/facet-label.hbs ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "    <li class=\"gui item "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 19)).call(alias1,(data && data.index),5,{"name":"CheckLength","hash":{},"data":data}))
    + "\"\r\n        aria-label=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\">\r\n        <label  data-attr-value=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\" \r\n                data-attr-id=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\"\r\n                data-attr-type=\""
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\"\r\n                tabindex=\"0\"\r\n                role=\"treeitem\"\r\n                title=\""
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")\"\r\n                for=\""
    + alias2(alias3((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-"
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "-"
    + alias2(alias3((data && data.index), depth0))
    + "-checkbox\"\r\n                aria-label=\"Filter "
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + " in "
    + alias2(alias3((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + " has "
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + " records. Press spacebar to "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/ApplyRemove.ts */ 20)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"ApplyRemove","hash":{},"data":data}))
    + " this filter.\"\r\n                class=\"gui cursor-pointer gui-subheading-1 no-wrap text-shorten m-0\">\r\n            <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" \r\n                    id=\""
    + alias2(alias3((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-"
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "-"
    + alias2(alias3((data && data.index), depth0))
    + "-checkbox\"\r\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 21)).call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + "\r\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 22)).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                    tabindex=\"-1\"\r\n                    value=\""
    + alias2(alias3((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias3((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" \r\n                    type=\"checkbox\" />\r\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 8)).call(alias1,(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\r\n            <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias3((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n        </label>\r\n    </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul class=\"description gui facet-item-description m-t-10 p-l-5 p-0 "
    + container.escapeExpression(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 23)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\" \r\n    role=\"group\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 24)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),5,{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n</ul>";
},"useData":true,"useDepths":true});

/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./src/hbs/helpers/FormatLabelByType.ts ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 9);
var formatLabelByType = function (type, value) {
    if (moment && type === "Edm.DateTimeOffset") {
        return moment.utc(value).format("DD-MMM-YYYY hh:mm a");
    }
    else {
        if (value === "Assigned") {
            return "Committed";
        }
        if (value === "Complete") {
            return "Assigned";
        }
        return value;
    }
};
exports.default = formatLabelByType;


/***/ }),
/* 9 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/*!*********************************!*\
  !*** ./src/ts/a11y/DomUtils.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    DomUtils.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    DomUtils.isSelfOrDescendant = function (parent, child) {
        if (parent === child) {
            return true;
        }
        return DomUtils.isDescendant(parent, child);
    };
    DomUtils.isHidden = function (node) {
        if (!node) {
            return true;
        }
        return node.offsetParent === null;
    };
    DomUtils.isAriaHidden = function (node) {
        if (!node) {
            return false;
        }
        return node.getAttribute("aria-hidden") === "true";
    };
    DomUtils.setAriaHidden = function (node, value) {
        if (!node) {
            throw Error("DomUtils.setAriaHidden - Node cannot be of null or undefined");
        }
        node.setAttribute("aria-hidden", value);
    };
    DomUtils.isAriaExpanded = function (node) {
        if (!node) {
            return false;
        }
        return node.getAttribute("aria-expanded") === "true";
    };
    DomUtils.setAriaExpanded = function (node, value) {
        if (!node) {
            throw Error("DomUtils.setAriaExpanded - Node cannot be of null or undefined");
        }
        node.setAttribute("aria-expanded", value);
    };
    DomUtils.show = function (node) {
        if (!node) {
            throw Error("DomUtils.show - Node cannot be of null or undefined");
        }
        node.classList.remove("gui-hidden");
    };
    DomUtils.hide = function (node) {
        if (!node) {
            throw Error("DomUtils.hide - Node cannot be of null or undefined");
        }
        node.classList.add("gui-hidden");
    };
    DomUtils.toggleLabel = function (node) {
        if (!node) {
            throw Error("DomUtils.toggleLabel - Node cannot be of null or undefined");
        }
        var forId = node.htmlFor;
        var input = (document.getElementById(forId) || node.firstElementChild);
        input.checked = !input.checked;
        return input.checked;
    };
    DomUtils.off = function (node) {
        var newNode = node.cloneNode(true);
        node.parentNode.replaceChild(newNode, node);
    };
    return DomUtils;
}());
exports.DomUtils = DomUtils;


/***/ }),
/* 11 */
/*!*****************************************!*\
  !*** ./src/ts/config/FacetConstants.ts ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetConstants = /** @class */ (function () {
    function FacetConstants() {
    }
    FacetConstants.UpKeyCode = 38;
    FacetConstants.DownKeyCode = 40;
    FacetConstants.EnterKeyCode = 13;
    FacetConstants.SpaceKeyCode = 28;
    return FacetConstants;
}());
exports.FacetConstants = FacetConstants;


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
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 2);
var ExpandCollapseManager = /** @class */ (function () {
    function ExpandCollapseManager() {
    }
    ExpandCollapseManager.ControlVisibilityOfFilter = function (target, showHide, name) {
        var iconElement = target.find(".expansion-icon");
        var currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
        if (ShowHide_1.ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide_1.ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide_1.ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            target.find(".facet-item-description").slideDown(200);
            iconElement.removeClass("gui-icon-chevron-down");
            iconElement.addClass("gui-icon-chevron-up");
            target
                .attr("aria-expanded", "true")
                .attr("aria-label", "Press enter or space to collapse filter values for " + name);
        }
        else {
            target.find(".facet-item-description").slideUp(200);
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
            target
                .attr("aria-expanded", "false")
                .attr("aria-label", "Press enter or space to expand filter values for " + name);
        }
    };
    return ExpandCollapseManager;
}());
exports.ExpandCollapseManager = ExpandCollapseManager;


/***/ }),
/* 13 */
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
/* 14 */
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
__export(__webpack_require__(/*! ./Facet */ 15));
__export(__webpack_require__(/*! ./Filter */ 30));


/***/ }),
/* 15 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 16);
var FacetTree_1 = __webpack_require__(/*! ./../a11y/FacetTree */ 26);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 29);
var Facet = /** @class */ (function () {
    function Facet(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (facets) {
            _this.templateService.setData(facets);
            _this.reRender();
        };
        this.reRender = function () {
            setTimeout(function () {
                var data = _this.templateService.getData();
                var fullFacet = _this.templateService.bind(data);
                _this.facetElement.innerHTML = fullFacet;
                var trees = document.querySelectorAll('[role="tree"]');
                _this.facetTree = new FacetTree_1.FacetTree(_this.configStore.Options.containerElement, _this, _this.configStore);
                _this.facetTree.init();
            }, 1);
        };
        this.setFacetConfig = function (facetConfig) {
            _this.configStore.Options.facetConfig = facetConfig;
        };
        this.destroy = function () {
            _this.facetTree.destroy();
        };
        this.configStore = new FacetConfigStore_1.FacetConfigStore(options);
        this.facetElement = options.containerElement;
        this.templateService = new FacetTemplateService_1.FacetTemplateService(this.configStore);
        // this.handlerChain.push(new ExpandCollapseFacetsHandler(this.facetElement,
        //     this.configStore, this.templateService));
        // this.handlerChain.push(new FacetActionHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new FacetSearchHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new HideFacetSectionHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new HotKeysFacetHandler());
        // this.handlerChain.push(new PinUnpinEventHandler(this.facetElement, this.configStore, this.templateService));
        // // this.handlerChain.push(new ShowMoreLessHandler(this.facetElement, this.configStore));
        // // this.handlerChain.push(new FacetKeyBoardNavigationHandler(this.facetElement));
        // this.handlerChain.forEach((handler) => {
        //     handler.RegisterDomHandler();
        // });
    }
    return Facet;
}());
exports.Facet = Facet;


/***/ }),
/* 16 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 17);
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
        var idPrefix = this.configStore.Options.idPrefix;
        return this.tempateFunctionForFacetMain({ idPrefix: idPrefix, favorites: favorites, nonFavorites: nonFavorites, noOfFacetToShow: noOfFacetToShow });
    };
    return FacetTemplateService;
}());
exports.FacetTemplateService = FacetTemplateService;


/***/ }),
/* 17 */
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
/* 18 */
/*!**********************************!*\
  !*** ./src/hbs/facet-pinned.hbs ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"Pinned Filters\"\r\n    data-attr-value=\"Pinned Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    aria-live=\"polite\"\r\n    aria-atomic=\"true\"\r\n    aria-relevant=\"all\"\r\n    role=\"treeitem\"\r\n    id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-filter-tree\">\r\n    <h6 class=\"gui gui-subheading-2 caps bold-500 flex m-b-10 jc-sb\">\r\n        PINNED FILTERS\r\n        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n    </h6>\r\n    <ul aria-labelledby=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-filter-tree\" class=\"gui m-0 p-0\" role=\"group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.favorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <li aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n            class=\"gui item facet-item border-bottom light p-r-10 p-t-5 p-b-5 p-l-5 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\"\r\n            role=\"treeitem\"\r\n            aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n            data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span class=\"gui primary gui-subheading-1 caps m-0 cursor-pointer\" title=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n                    "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i  data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                        class=\"gui gui-icon selectable pin-unpin-selector gui-icon-unpin m-t-5 m-r-10 unpin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to unpin filter "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-label.hbs */ 7),depth0,{"name":"facet-label","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.favorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 19 */
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
/* 20 */
/*!****************************************!*\
  !*** ./src/hbs/helpers/ApplyRemove.ts ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApplyRemove = function (bool) {
    return bool ? " remove " : " apply ";
};
exports.default = ApplyRemove;


/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
        return "<li class=\"gui m-b-5 m-t-5\">"
            + "<a tabindex=\"0\" role=\"treeitem\" "
            + "data-attr-id=\"{{id}}\" "
            + "data-attr-value=\"Show More\" "
            + "aria-label=\"Press enter to show " + (index.length - v2) + " more values\" "
            + "class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\">"
            + (index.length - v2) + " More"
            + "</a>"
            + "</li>"
            + "<li class=\"gui m-b-5 m-t-5 gui-hidden\">"
            + "<a tabindex=\"0\" role=\"treeitem\" "
            + "data-attr-value=\"Show Less\" "
            + "aria-label=\"Press enter to show less values\" "
            + "class=\"gui caps gui-body-2 simple show-less-link cursor-pointer p-0 m-t-3\">"
            + "Show Less" +
            "</a>"
            + "</li>";
    }
    else {
        return "";
    }
};
exports.default = ShowMoreLessLink;


/***/ }),
/* 25 */
/*!************************************!*\
  !*** ./src/hbs/facet-unpinned.hbs ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"All Filters\"\r\n    data-attr-value=\"All Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    aria-live=\"polite\"\r\n    aria-relevant=\"all\"\r\n    aria-atomic=\"true\"\r\n    role=\"treeitem\"\r\n    id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-filter-tree\">\r\n    <h6 class=\"gui gui-subheading-2 caps bold-500 m-b-10 flex jc-sb\">\r\n        All FILTERS\r\n        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n    </h6>\r\n    <ul aria-labelledby=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-filter-tree\" class=\"gui m-0 p-0\" role=\"group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.nonFavorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <li aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n            class=\"gui item facet-item border-bottom light p-r-10 p-t-5 p-b-5 p-l-5 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\"\r\n            role=\"treeitem\"\r\n            aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n            data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n                <span class=\"gui primary gui-subheading-1 caps m-0 cursor-pointer\" title=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n                    "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                </span>\r\n                <span>\r\n                    <i  data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                        class=\"gui gui-icon selectable pin-unpin-selector gui-icon-pin m-t-5 m-r-10 pin-icon cursor-pointer\" \r\n                        aria-label=\"Press enter or space to pin filter "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-label.hbs */ 7),depth0,{"name":"facet-label","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.nonFavorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 26 */
/*!**********************************!*\
  !*** ./src/ts/a11y/FacetTree.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ./../models/FilterActionType */ 1);
var DomUtils_1 = __webpack_require__(/*! ./DomUtils */ 10);
var FacetTreeItem_1 = __webpack_require__(/*! ./FacetTreeItem */ 27);
var FacetTree = /** @class */ (function () {
    function FacetTree(node, facet, configStore) {
        var _this = this;
        // Local
        this.lastInputValue = "";
        this.findTreeitems = function (node, tree, group) {
            var elem = node.firstElementChild;
            var ti = group;
            while (elem) {
                var role = elem.getAttribute("role");
                if (role && role.toLowerCase() === "treeitem") {
                    ti = new FacetTreeItem_1.FacetTreeItem(elem, tree, group);
                    ti.init();
                    tree
                        .treeitems
                        .push(ti);
                    tree
                        .firstChars
                        .push(ti.label.substring(0, 1).toLowerCase());
                }
                if (elem.firstElementChild) {
                    _this.findTreeitems(elem, tree, ti);
                }
                elem = elem.nextElementSibling;
            }
        };
        this.init = function () {
            // initialize pop up menus
            if (!_this.treeDomNode.getAttribute("role")) {
                _this
                    .treeDomNode
                    .setAttribute("role", "tree");
            }
            // Populate all Tree Items
            _this.findTreeitems(_this.treeDomNode, _this, false);
            // Update Visible Tree Items
            _this.updateVisibleTreeitems();
            // Set tab Index of first tree item.
            _this.firstTreeitem.treeItemDomNode.tabIndex = 0;
            // Event Handlers
            _this.collapseAllNode.addEventListener("click", _this.collapseAllItems);
            _this.expandAllNode.addEventListener("click", _this.expandAllItems);
            _this.searchBoxNode.addEventListener("keyup", _this.handleSearchForFilters);
            document.addEventListener("keydown", _this.setFocusToSearchBox);
        };
        this.destroy = function () {
            DomUtils_1.DomUtils.off(_this.parentElement);
            document.removeEventListener("keydown", _this.setFocusToSearchBox);
        };
        this.setFocusToSearchBox = function (event) {
            if (event.altKey && event.key === "f") {
                event.preventDefault();
                _this.searchBoxNode.focus();
            }
        };
        this.setFocusToItem = function (treeitem, dontSetfocus) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti === treeitem) {
                    ti.treeItemDomNode.tabIndex = 0;
                    if (!dontSetfocus) {
                        ti
                            .treeItemDomNode
                            .focus();
                    }
                }
                else {
                    ti.treeItemDomNode.tabIndex = -1;
                }
            }
        };
        this.setFocusToFirstVisible = function (dontSetfocus) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.isVisible) {
                    _this.setFocusToItem(ti, dontSetfocus);
                    break;
                }
            }
        };
        this.setFocusToNextItem = function (currentItem) {
            var nextItem;
            for (var i = (_this.treeitems.length - 1); i >= 0; i--) {
                var ti = _this.treeitems[i];
                if (ti === currentItem) {
                    break;
                }
                if (ti.isVisible) {
                    nextItem = ti;
                }
            }
            if (nextItem) {
                _this.setFocusToItem(nextItem);
            }
        };
        this.setFocusToPreviousItem = function (currentItem) {
            var prevItem;
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti === currentItem) {
                    break;
                }
                if (ti.isVisible) {
                    prevItem = ti;
                }
            }
            if (prevItem) {
                _this.setFocusToItem(prevItem);
            }
        };
        this.setFocusToParentItem = function (currentItem) {
            if (currentItem.groupTreeitem) {
                _this.setFocusToItem(currentItem.groupTreeitem);
            }
        };
        this.setFocusToFirstItem = function () {
            _this.setFocusToItem(_this.firstTreeitem);
        };
        this.setFocusToLastItem = function () {
            _this.setFocusToItem(_this.lastTreeitem);
        };
        this.expandTreeitem = function (currentItem, notify) {
            // Check if Tree Item is expandable
            if (currentItem.isExpandable) {
                DomUtils_1.DomUtils.setAriaExpanded(currentItem.treeItemDomNode, "true");
                _this.toggleExpansionIcon(currentItem, true);
                _this.updateVisibleTreeitems(notify);
            }
            _this.collapseAllNode.removeAttribute("disabled");
            _this.expandAllNode.removeAttribute("disabled");
        };
        this.expandAllSiblingItems = function (currentItem) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
                    _this.expandTreeitem(ti);
                }
            }
            _this.notifyCollapseAndExpansion();
        };
        this.expandAllItems = function () {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.isExpandable) {
                    _this.expandTreeitem(ti);
                }
            }
            _this.collapseAllNode.removeAttribute("disabled");
            _this.expandAllNode.setAttribute("disabled", "true");
            _this.collapseAllNode.focus();
            _this.notifyCollapseAndExpansion();
        };
        this.collapseAllItems = function () {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.isExpandable) {
                    _this.collapseTreeitem(ti);
                }
            }
            _this.expandAllNode.removeAttribute("disabled");
            _this.collapseAllNode.setAttribute("disabled", "true");
            _this.expandAllNode.focus();
            _this.notifyCollapseAndExpansion();
        };
        this.collapseAllSiblingItems = function (currentItem) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
                    _this.collapseTreeitem(ti);
                }
            }
            _this.notifyCollapseAndExpansion();
        };
        this.collapseTreeitem = function (currentItem, notify) {
            var groupTreeitem;
            if (currentItem.isExpanded()) {
                groupTreeitem = currentItem;
            }
            else {
                groupTreeitem = currentItem.groupTreeitem;
            }
            if (groupTreeitem) {
                DomUtils_1.DomUtils.setAriaExpanded(groupTreeitem.treeItemDomNode, "false");
                _this.toggleExpansionIcon(groupTreeitem, false);
                _this.updateVisibleTreeitems(notify);
                _this.setFocusToItem(groupTreeitem);
            }
            _this.collapseAllNode.removeAttribute("disabled");
            _this.expandAllNode.removeAttribute("disabled");
        };
        this.toggleExpansionIcon = function (groupTreeitem, currentExpanded) {
            var iconNodeList = groupTreeitem.treeItemDomNode.querySelectorAll(".expansion-icon");
            var iconNode;
            if (iconNodeList && iconNodeList.length) {
                iconNode = iconNodeList[0];
            }
            if (!currentExpanded) {
                iconNode.classList.remove("gui-icon-chevron-up");
                iconNode.classList.add("gui-icon-chevron-down");
            }
            else {
                iconNode.classList.remove("gui-icon-chevron-down");
                iconNode.classList.add("gui-icon-chevron-up");
            }
        };
        this.updateVisibleTreeitems = function (notify) {
            _this.firstTreeitem = _this.treeitems[0];
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                var parent_1 = ti.treeItemDomNode.parentElement;
                ti.isVisible = true;
                if (ti.treeItemDomNode.classList.contains("gui-hidden")
                    || parent_1.classList.contains("gui-hidden")) {
                    ti.isVisible = false;
                }
                while (parent_1 && (parent_1 !== _this.treeDomNode)) {
                    if (parent_1.getAttribute("aria-expanded") === "false") {
                        ti.isVisible = false;
                    }
                    parent_1 = parent_1.parentElement;
                }
                if (ti.isVisible) {
                    _this.lastTreeitem = ti;
                }
            }
            if (notify) {
                _this.notifyCollapseAndExpansion();
            }
        };
        this.setFocusByFirstCharacter = function (currentItem, char) {
            var start;
            var index;
            char = char.toLowerCase();
            // Get start index for search based on position of currentItem
            start = _this
                .treeitems
                .indexOf(currentItem) + 1;
            if (start === _this.treeitems.length) {
                start = 0;
            }
            // Check remaining slots in the menu
            index = _this.getIndexFirstChars(start, char);
            // If not found in remaining slots, check from beginning
            if (index === -1) {
                index = _this.getIndexFirstChars(0, char);
            }
            // If match was found...
            if (index > -1) {
                _this.setFocusToItem(_this.treeitems[index]);
            }
        };
        this.getIndexFirstChars = function (startIndex, char) {
            for (var i = startIndex; i < _this.firstChars.length; i++) {
                if (_this.treeitems[i].isVisible) {
                    if (char === _this.firstChars[i]) {
                        return i;
                    }
                }
            }
            return -1;
        };
        this.showMoreValues = function (groupItem) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                var parent_2 = ti.treeItemDomNode.parentElement;
                if (ti.groupTreeitem === groupItem) {
                    parent_2.classList.remove("gui-hidden");
                    ti.isVisible = true;
                    if (ti.isShowLessLink) {
                        parent_2.classList.remove("gui-hidden");
                        ti.treeItemDomNode.focus();
                    }
                    if (ti.isShowMoreLink) {
                        parent_2.classList.add("gui-hidden");
                        ti.isVisible = false;
                    }
                }
            }
            _this.updateVisibleTreeitems();
        };
        this.showLessValues = function (groupItem) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                var parent_3 = ti.treeItemDomNode.parentElement;
                if (ti.groupTreeitem === groupItem) {
                    if (parent_3.classList.contains("extra-filter")) {
                        parent_3.classList.add("gui-hidden");
                        ti.isVisible = false;
                    }
                    if (ti.isShowLessLink) {
                        parent_3.classList.add("gui-hidden");
                        ti.isVisible = false;
                    }
                    if (ti.isShowMoreLink) {
                        parent_3.classList.remove("gui-hidden");
                        ti.treeItemDomNode.focus();
                    }
                }
            }
            _this.updateVisibleTreeitems();
        };
        this.handleLabelChange = function (currentItem) {
            var checked = DomUtils_1.DomUtils.toggleLabel(currentItem.treeItemDomNode);
            var action = checked ? FilterActionType_1.FilterActionType.Add : FilterActionType_1.FilterActionType.Minus;
            currentItem.treeItemDomNode.setAttribute("aria-selected", checked.toString());
            _this.configStore.Options.onFilterChange(currentItem.id, currentItem.label, action, currentItem.dataType, currentItem.isRange);
        };
        this.notifyCollapseAndExpansion = function () {
            var data = _this.configStore.Options.facetConfig;
            var publish = [];
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.isExpandable) {
                    for (var _b = 0, data_1 = data; _b < data_1.length; _b++) {
                        var facet = data_1[_b];
                        if (facet.id === ti.id) {
                            facet.collapsed = !ti.isExpanded();
                            publish.push({ key: facet.id, collapsed: facet.collapsed });
                            break;
                        }
                    }
                }
            }
            _this.configStore.Options.onCollapseToggle(publish);
        };
        this.handlePinUnpin = function (event, pin, id) {
            var data = _this.configStore.Options.facetConfig;
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var facet = data_2[_i];
                if (facet.id === id) {
                    facet.pinned = pin;
                    break;
                }
            }
            _this.facet.reRender();
            _this.configStore.Options.onPinUnpin(id, pin);
            event.stopPropagation();
        };
        this.handleSearchForFilters = function (event) {
            var input = event.target;
            var parent = input.parentElement;
            var val = input.value.toLowerCase();
            if (val === _this.lastInputValue) {
                return;
            }
            _this.lastInputValue = val;
            var inputValueBlank = false;
            parent.classList.add("loading");
            if (val === undefined || val === null || val.trim() === "") {
                inputValueBlank = true;
            }
            setTimeout(function () {
                if (!inputValueBlank) {
                    _this.handleNotBlankInputSearch(val);
                }
                else {
                    _this.handleBlankInputSearch();
                }
                _this.updateVisibleTreeitems();
                _this.setFocusToFirstVisible(true);
                parent.classList.remove("loading");
            }, 1);
            // const matchedGroupItem: FacetTreeItem[] = [];
            // const notMatchedGroupItem: FacetTreeItem[] = [];
            // for (const ti of this.treeitems) {
            //     if (ti.isExpandable) {
            //         if (ti.label.toLowerCase().indexOf(val) > -1) {
            //             matchedGroupItem.push(ti);
            //         } else {
            //             notMatchedGroupItem.push(ti);
            //         }
            //     }
            //     if (ti.isShowLessLink || ti.isShowMoreLink ) {
            //         ti.isVisible = false;
            //         DomUtils.hide(ti.treeItemDomNode.parentElement);
            //     }
            // }
            // for (const ti of this.treeitems) {
            //     if (ti.isShowLessLink || ti.isShowMoreLink) {
            //         continue;
            //     }
            //     if ( matchedGroupItem.indexOf(ti) > -1 || matchedGroupItem.indexOf(ti.groupTreeitem) > -1 ) {
            //         ti.isVisible = true;
            //         DomUtils.show(ti.treeItemDomNode.parentElement);
            //     } else {
            //         if (!ti.isExpandable ) {
            //             if (ti.value.toLowerCase().indexOf(val) > -1 ) {
            //                 if (matchedGroupItem.indexOf(ti.groupTreeitem) <= -1 ) {
            //                     matchedGroupItem.push(ti.groupTreeitem);
            //                 }
            //                 const notMatchedIndex = notMatchedGroupItem.indexOf(ti.groupTreeitem);
            //                 if (notMatchedIndex > -1 ) {
            //                     notMatchedGroupItem.slice(notMatchedIndex, notMatchedIndex + 1);
            //                 }
            //                 ti.isVisible = true;
            //                 DomUtils.show(ti.treeItemDomNode.parentElement);
            //             } else {
            //                 ti.isVisible = false;
            //                 DomUtils.hide(ti.treeItemDomNode.parentElement);
            //             }
            //         }
            //     }
            // }
            // for (const mg of matchedGroupItem) {
            //     mg.isVisible = true;
            //     DomUtils.setAriaExpanded(mg.treeItemDomNode, "true");
            //     DomUtils.show(mg.treeItemDomNode);
            // }
            // for (const nmg of notMatchedGroupItem) {
            //     nmg.isVisible = false;
            //     DomUtils.setAriaExpanded(nmg.treeItemDomNode, "false");
            //     DomUtils.hide(nmg.treeItemDomNode);
            // }
        };
        this.handleBlankInputSearch = function () {
            // Handle blank Search here
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.ignoreForSearch) {
                    continue;
                }
                // Check if expandable
                if (ti.isExpandable) {
                    ti.isVisible = true;
                    DomUtils_1.DomUtils.show(ti.treeItemDomNode);
                    if (ti.treeItemDomNode.classList.contains("collapsed")) {
                        DomUtils_1.DomUtils.setAriaExpanded(ti.treeItemDomNode, "true");
                    }
                    else {
                        DomUtils_1.DomUtils.setAriaExpanded(ti.treeItemDomNode, "false");
                    }
                }
                if (!ti.isExpandable) {
                    if (!ti.isShowMoreLink && !ti.isShowLessLink) {
                        var parent_4 = ti.treeItemDomNode.parentElement;
                        var isExtraFilter = parent_4.classList.contains("extra-filter");
                        if (isExtraFilter) {
                            ti.isVisible = false;
                            DomUtils_1.DomUtils.hide(ti.treeItemDomNode.parentElement);
                        }
                        else {
                            ti.isVisible = true;
                            DomUtils_1.DomUtils.show(ti.treeItemDomNode.parentElement);
                        }
                        continue;
                    }
                    if (ti.isShowMoreLink) {
                        ti.isVisible = true;
                        DomUtils_1.DomUtils.show(ti.treeItemDomNode.parentElement);
                        continue;
                    }
                    if (ti.isShowLessLink) {
                        ti.isVisible = false;
                        DomUtils_1.DomUtils.hide(ti.treeItemDomNode.parentElement);
                        continue;
                    }
                }
            }
        };
        this.handleNotBlankInputSearch = function (val) {
            var groupItem;
            var groupItemMatched;
            var childItemMatched;
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.ignoreForSearch) {
                    continue;
                }
                if (ti.isShowLessLink || ti.isShowMoreLink) {
                    ti.isVisible = false;
                    DomUtils_1.DomUtils.hide(ti.treeItemDomNode.parentElement);
                    continue;
                }
                // Check if expandable
                if (ti.isExpandable) {
                    // Reset the group level Values
                    groupItem = ti;
                    groupItemMatched = false;
                    childItemMatched = false;
                    ti.isVisible = false;
                    DomUtils_1.DomUtils.setAriaExpanded(ti.treeItemDomNode, "false");
                    DomUtils_1.DomUtils.hide(ti.treeItemDomNode);
                    // Check if group is matching
                    if (ti.label.toLowerCase().indexOf(val) > -1) {
                        groupItemMatched = true;
                    }
                }
                // If group is matching expand the group
                if (groupItemMatched || childItemMatched) {
                    groupItem.isVisible = true;
                    DomUtils_1.DomUtils.setAriaExpanded(groupItem.treeItemDomNode, "true");
                    DomUtils_1.DomUtils.show(groupItem.treeItemDomNode);
                }
                // For Child Links
                if (!ti.isExpandable && ti.groupTreeitem === groupItem) {
                    // check if group matches set the visiblity to true except show more or less links
                    if (groupItemMatched) {
                        ti.isVisible = true;
                        DomUtils_1.DomUtils.show(ti.treeItemDomNode.parentElement);
                    }
                    else {
                        // If group not matched check if child matches
                        if (ti.label.toLowerCase().indexOf(val) > -1) {
                            ti.isVisible = true;
                            DomUtils_1.DomUtils.show(ti.treeItemDomNode.parentElement);
                            childItemMatched = true;
                        }
                        else {
                            ti.isVisible = false;
                            DomUtils_1.DomUtils.hide(ti.treeItemDomNode.parentElement);
                        }
                    }
                }
            }
        };
        this.configStore = configStore;
        this.parentElement = node;
        this.facet = facet;
        this.treeDomNode = this.parentElement.querySelectorAll("[role=tree]")[0];
        this.collapseAllNode = this.parentElement.querySelectorAll(".collapse-all")[0];
        this.expandAllNode = this.parentElement.querySelectorAll(".expand-all")[0];
        this.searchBoxNode = this.parentElement.querySelectorAll(".filter-search-input")[0];
        this.treeitems = [];
        this.firstChars = [];
        this.firstTreeitem = null;
        this.lastTreeitem = null;
    }
    return FacetTree;
}());
exports.FacetTree = FacetTree;


/***/ }),
/* 27 */
/*!**************************************!*\
  !*** ./src/ts/a11y/FacetTreeItem.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomUtils_1 = __webpack_require__(/*! ./DomUtils */ 10);
var KeyCodes_1 = __webpack_require__(/*! ./KeyCodes */ 28);
var FacetTreeItem = /** @class */ (function () {
    function FacetTreeItem(node, tree, group) {
        var _this = this;
        this.init = function () {
            _this.treeItemDomNode.tabIndex = -1;
            if (!_this.treeItemDomNode.getAttribute("role")) {
                _this
                    .treeItemDomNode
                    .setAttribute("role", "treeitem");
            }
            _this
                .treeItemDomNode
                .addEventListener("keydown", _this.handleKeydown.bind(_this));
            _this
                .treeItemDomNode
                .addEventListener("click", _this.handleClick.bind(_this));
            _this
                .treeItemDomNode
                .addEventListener("focus", _this.handleFocus.bind(_this));
            _this
                .treeItemDomNode
                .addEventListener("blur", _this.handleBlur.bind(_this));
            if (_this.isExpandable) {
                _this
                    .treeItemDomNode
                    .firstElementChild
                    .addEventListener("mouseover", _this.handleMouseOver.bind(_this));
                _this
                    .treeItemDomNode
                    .firstElementChild
                    .addEventListener("mouseout", _this.handleMouseOut.bind(_this));
            }
            else {
                _this
                    .treeItemDomNode
                    .addEventListener("mouseover", _this.handleMouseOver.bind(_this));
                _this
                    .treeItemDomNode
                    .addEventListener("mouseout", _this.handleMouseOut.bind(_this));
            }
            if (_this.pinUnPinDomNode) {
                _this.pinUnPinDomNode.addEventListener("click", _this.handleUnPinClick);
                _this.pinUnPinDomNode.addEventListener("keydown", _this.handleUnPinKeyup);
            }
        };
        this.destroy = function () {
            var newNode = _this.treeItemDomNode.cloneNode(true);
            _this.treeItemDomNode.parentNode.replaceChild(newNode, _this.treeItemDomNode);
            _this.treeItemDomNode = null;
        };
        this.isExpanded = function () {
            if (_this.isExpandable) {
                return DomUtils_1.DomUtils.isAriaExpanded(_this.treeItemDomNode);
            }
            return false;
        };
        this.handleUnPinClick = function (event) {
            var target = event.target;
            if (target.classList.contains("unpin-icon")) {
                _this.tree.handlePinUnpin(event, false, _this.id);
            }
            else {
                _this.tree.handlePinUnpin(event, true, _this.id);
            }
        };
        this.handleUnPinKeyup = function (event) {
            var target = event.target;
            switch (event.keyCode) {
                case KeyCodes_1.KeyCodes.SPACE:
                case KeyCodes_1.KeyCodes.RETURN:
                    if (target.classList.contains("unpin-icon")) {
                        _this.tree.handlePinUnpin(event, false, _this.id);
                    }
                    else {
                        _this.tree.handlePinUnpin(event, true, _this.id);
                    }
                    break;
                default:
                    break;
            }
            event.stopPropagation();
        };
        this.handleKeydown = function (event) {
            var tgt = event.currentTarget;
            var flag = false;
            var char = event.key;
            function isPrintableCharacter(str) {
                return str.length === 1 && str.match(/\S/);
            }
            function printableCharacter(item) {
                if (char === "*") {
                    item
                        .tree
                        .expandAllSiblingItems(item);
                    flag = true;
                }
                else {
                    if (isPrintableCharacter(char)) {
                        item
                            .tree
                            .setFocusByFirstCharacter(item, char);
                        flag = true;
                    }
                }
            }
            _this.stopDefaultClick = false;
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }
            if (event.shiftKey) {
                if (event.keyCode === KeyCodes_1.KeyCodes.SPACE || event.keyCode === KeyCodes_1.KeyCodes.RETURN) {
                    event.stopPropagation();
                    _this.stopDefaultClick = true;
                }
                else {
                    if (isPrintableCharacter(char)) {
                        printableCharacter(_this);
                    }
                }
            }
            else {
                switch (event.keyCode) {
                    case KeyCodes_1.KeyCodes.SPACE:
                    case KeyCodes_1.KeyCodes.RETURN:
                        flag = true;
                        if (_this.isExpandable) {
                            if (_this.isExpanded()) {
                                _this
                                    .tree
                                    .collapseTreeitem(_this, true);
                            }
                            else {
                                _this
                                    .tree
                                    .expandTreeitem(_this, true);
                            }
                        }
                        else {
                            if (_this.isShowMoreLink) {
                                _this
                                    .tree
                                    .showMoreValues(_this.groupTreeitem);
                            }
                            if (_this.isShowLessLink) {
                                _this
                                    .tree
                                    .showLessValues(_this.groupTreeitem);
                            }
                            if (_this.isLabel) {
                                _this
                                    .tree
                                    .handleLabelChange(_this);
                            }
                        }
                        break;
                    case KeyCodes_1.KeyCodes.UP:
                        _this
                            .tree
                            .setFocusToPreviousItem(_this);
                        flag = true;
                        break;
                    case KeyCodes_1.KeyCodes.DOWN:
                        _this
                            .tree
                            .setFocusToNextItem(_this);
                        flag = true;
                        break;
                    case KeyCodes_1.KeyCodes.RIGHT:
                        if (_this.isExpandable) {
                            if (_this.isExpanded()) {
                                _this
                                    .tree
                                    .setFocusToNextItem(_this);
                            }
                            else {
                                _this
                                    .tree
                                    .expandTreeitem(_this, true);
                            }
                        }
                        flag = true;
                        break;
                    case KeyCodes_1.KeyCodes.LEFT:
                        if (_this.isExpandable && _this.isExpanded()) {
                            _this
                                .tree
                                .collapseTreeitem(_this, true);
                            flag = true;
                        }
                        else {
                            if (_this.inGroup) {
                                _this
                                    .tree
                                    .setFocusToParentItem(_this);
                                flag = true;
                            }
                        }
                        break;
                    case KeyCodes_1.KeyCodes.HOME:
                        _this
                            .tree
                            .setFocusToFirstItem();
                        flag = true;
                        break;
                    case KeyCodes_1.KeyCodes.END:
                        _this
                            .tree
                            .setFocusToLastItem();
                        flag = true;
                        break;
                    default:
                        if (isPrintableCharacter(char)) {
                            printableCharacter(_this);
                        }
                        break;
                }
            }
            if (flag) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        this.handleClick = function (event) {
            // only process click events that directly happened on this treeitem
            if (event.target !== _this.treeItemDomNode
                && !DomUtils_1.DomUtils.isSelfOrDescendant(_this.treeItemDomNode.firstElementChild, event.target)) {
                return;
            }
            if (_this.isExpandable) {
                if (_this.isExpanded()) {
                    _this
                        .tree
                        .collapseTreeitem(_this, true);
                }
                else {
                    _this
                        .tree
                        .expandTreeitem(_this, true);
                }
                event.stopPropagation();
            }
            else {
                if (_this.isShowMoreLink) {
                    _this
                        .tree
                        .showMoreValues(_this.groupTreeitem);
                }
                if (_this.isShowLessLink) {
                    _this
                        .tree
                        .showLessValues(_this.groupTreeitem);
                }
                if (_this.isLabel) {
                    _this
                        .tree
                        .handleLabelChange(_this);
                }
                event.stopPropagation();
                event.preventDefault();
            }
        };
        this.handleFocus = function (event) {
            var node = _this.treeItemDomNode;
            if (_this.isExpandable) {
                node = node.firstElementChild;
            }
            node
                .classList
                .add("focus");
        };
        this.handleBlur = function (event) {
            var node = this.treeItemDomNode;
            if (this.isExpandable) {
                node = node.firstElementChild;
            }
            node
                .classList
                .remove("focus");
        };
        this.handleMouseOver = function (event) {
            var target = event.currentTarget;
            target.classList.add("hover");
        };
        this.handleMouseOut = function (event) {
            var target = event.currentTarget;
            target.classList.remove("hover");
        };
        node.tabIndex = -1;
        this.tree = tree;
        this.groupTreeitem = group;
        this.treeItemDomNode = node;
        // this.label = node
        //     .textContent
        //     .trim();
        this.stopDefaultClick = false;
        // if (node.getAttribute("aria-label")) {
        //     this.label = node
        //         .getAttribute("aria-label")
        //         .trim();
        // }
        var firstEm = this.treeItemDomNode.firstElementChild;
        if (firstEm) {
            this.pinUnPinDomNode = firstEm.querySelector(".pin-unpin-selector");
        }
        this.id = node.getAttribute("data-attr-id");
        this.label = node.getAttribute("data-attr-value");
        this.dataType = node.getAttribute("data-attr-type");
        this.isRange = node.getAttribute("data-attr-isRange") === "true";
        this.ignoreForSearch = node.getAttribute("data-attr-ignoreForSearch") === "true";
        this.isShowMoreLink = node.classList.contains("show-more-link");
        this.isShowLessLink = node.classList.contains("show-less-link");
        this.isLabel = node.tagName.toLowerCase() === "label";
        this.isExpandable = false;
        this.isVisible = false;
        this.inGroup = false;
        if (group) {
            this.inGroup = true;
        }
        var elem = node.firstElementChild;
        while (elem) {
            if (elem.tagName.toLowerCase() === "ul") {
                elem.setAttribute("role", "group");
                this.isExpandable = true;
                break;
            }
            elem = elem.nextElementSibling;
        }
    }
    return FacetTreeItem;
}());
exports.FacetTreeItem = FacetTreeItem;


/***/ }),
/* 28 */
/*!*********************************!*\
  !*** ./src/ts/a11y/KeyCodes.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyCodes = Object.freeze({
    RETURN: 13,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
});


/***/ }),
/* 29 */
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
            idPrefix: Math.floor((1 + Math.random()) * 0x1000000).toString(),
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
/* 30 */
/*!*******************************!*\
  !*** ./src/ts/main/Filter.ts ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFiltersHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFiltersHandler */ 31);
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 32);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 35);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 36);
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
/* 31 */
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
/* 32 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 33);
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
/* 33 */
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

  return "<section class=\"content facet-subheader gui fluid-w basic curved p-5\" aria-label=\"Applied Filters\">\n    <span class=\"gui gui-subheading-2 caps\">Applied Filters</span>\n    <button class=\"gui m-l-5 remove-all\" aria-label=\"Clear All Filters\">\n        <i class=\"gui-icon gui-icon-cancel\"></i>\n        <span>Clear All</span>\n    </button>\n    <span class=\"gui m-l-10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n</section>\n";
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

  return "                <button aria-label=\"Clear filter "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + " of "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                        class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" \n                        data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 8)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button aria-label=\"Clear Range for filter "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                        class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" \n                        data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + ":::true\">\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Range.ts */ 34)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.min : depth0),(depth0 != null ? depth0.max : depth0),(depths[1] != null ? depths[1].type : depths[1]),{"name":"Range","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 34 */
/*!**********************************!*\
  !*** ./src/hbs/helpers/Range.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 9);
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
/* 35 */
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


/***/ }),
/* 36 */
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
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 37));
__export(__webpack_require__(/*! ./FacetActionHandler */ 38));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 39));
__export(__webpack_require__(/*! ./FilterActionHandler */ 42));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 43));
__export(__webpack_require__(/*! ./PinUnpinEventHandler */ 44));
__export(__webpack_require__(/*! ./ShowMoreLessHandler */ 45));
__export(__webpack_require__(/*! ../eventhandlers/FacetKeyBoardNavigationHandler */ 46));


/***/ }),
/* 37 */
/*!*************************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseFacetsHandler.ts ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetConstants_1 = __webpack_require__(/*! ./../config/FacetConstants */ 11);
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 12);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 2);
var ExpandCollapseFacetsHandler = /** @class */ (function () {
    function ExpandCollapseFacetsHandler(element, configStore, templateService) {
        var _this = this;
        this.element = element;
        this.configStore = configStore;
        this.templateService = templateService;
        this.onFocusInOfTreeItem = function (event) {
            var oT = jQuery(event.target);
            var target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
            var labelId = jQuery("#" + target.attr("aria-labelledBy"));
            if (labelId && labelId.length) {
                labelId.addClass("focus");
            }
            else {
                target.addClass("focus");
            }
            event.stopImmediatePropagation();
            event.stopPropagation();
        };
        this.onFocusOutOfTreeItem = function (event) {
            var oT = jQuery(event.target);
            var target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
            var labelId = jQuery("#" + target.attr("aria-labelledBy"));
            if (labelId && labelId.length) {
                labelId.removeClass("focus");
            }
            else {
                target.removeClass("focus");
            }
            event.stopPropagation();
        };
        this.handleKeyDown = function (event) {
            // tslint:disable-next-line:no-console
            console.log("Handling Key Down");
            var code = event.keyCode || event.which;
            if ([FacetConstants_1.FacetConstants.EnterKeyCode, FacetConstants_1.FacetConstants.SpaceKeyCode,
                FacetConstants_1.FacetConstants.UpKeyCode, FacetConstants_1.FacetConstants.DownKeyCode].indexOf(code) <= -1) {
                return;
            }
            if ([FacetConstants_1.FacetConstants.EnterKeyCode, FacetConstants_1.FacetConstants.SpaceKeyCode].indexOf(code) > -1) {
                _this.handleVisibilityOfOne(event);
                return;
            }
            if ([FacetConstants_1.FacetConstants.UpKeyCode, FacetConstants_1.FacetConstants.DownKeyCode].indexOf(code) > -1) {
                _this.handleUpAndDownOfTreeItem(event);
                return;
            }
        };
        this.handleUpAndDownOfTreeItem = function (event) {
            var code = event.keyCode || event.which;
            if ([FacetConstants_1.FacetConstants.UpKeyCode, FacetConstants_1.FacetConstants.DownKeyCode].indexOf(code) <= -1) {
                return;
            }
            // tslint:disable-next-line:no-console
            console.log("Handling Up and Down");
            var oT = jQuery(event.target);
            var target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
            event.preventDefault();
            if (FacetConstants_1.FacetConstants.UpKeyCode === code) {
                // First Level
                var prevSibling = target.prevAll(":visible").first();
                if (prevSibling.length) {
                    prevSibling.focus();
                    return;
                }
                var prevDeepSibling = target.parent().prevAll(":visible").first().find("[role=treeitem]");
                if (prevDeepSibling.length) {
                    prevDeepSibling.focus();
                    return;
                }
                target.parents("[role=treeitem]").each(function (index, parentGroup) {
                    var group = jQuery(parentGroup);
                    var parentChild = group.prevAll(":visible").first();
                    if (parentChild.length) {
                        parentChild.focus();
                        return false;
                    }
                });
            }
            if (FacetConstants_1.FacetConstants.DownKeyCode === code) {
                var firstChild = target.find("[role=treeitem]:visible").first();
                if (firstChild.length) {
                    firstChild.focus();
                    return;
                }
                // First Level
                var nextSibling = target.nextAll(":visible").first();
                if (nextSibling.length) {
                    nextSibling.focus();
                    return;
                }
                // Second Level
                var nextDeepSibling = target.parent().nextAll(":visible").first().find("[role=treeitem]");
                if (nextDeepSibling.length) {
                    nextDeepSibling.focus();
                    return;
                }
                target.parents("[role=treeitem]").each(function (index, parentGroup) {
                    var group = jQuery(parentGroup);
                    var parentChild = group.nextAll(":visible").first();
                    if (parentChild.length) {
                        parentChild.focus();
                        return false;
                    }
                });
            }
        };
        this.handleVisibilityOfAll = function (event, hideShow) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== FacetConstants_1.FacetConstants.EnterKeyCode
                && code !== FacetConstants_1.FacetConstants.SpaceKeyCode)) {
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
            var oT = jQuery(event.target);
            var target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
            var isCollapsibleNode = target.hasClass("collapsible") && oT.parents(".facet-item-header").length;
            if (!isCollapsibleNode) {
                return;
            }
            var name = target.attr("data-attr-name");
            var id = target.attr("data-attr-id");
            var isCollapsed = target.hasClass("collapsed");
            if (!isCollapsed) {
                target.addClass("collapsed");
            }
            else {
                target.removeClass("collapsed");
            }
            var data = _this.configStore.Options.facetConfig;
            var publish = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var facet = data_2[_i];
                if (facet.id === id) {
                    facet.collapsed = !isCollapsed;
                    publish.push({ key: facet.id, collapsed: facet.collapsed });
                    break;
                }
            }
            _this.configStore.Options.onCollapseToggle(publish);
            ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(target, ShowHide_1.ShowHide.Toggle, name);
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
        this.element.on("click", "[role=treeitem]", this.handleVisibilityOfOne);
        this.element.on("keydown", "[role=treeitem]", this.handleKeyDown);
        this.element.on("focusin", "[role=treeitem]", this.onFocusInOfTreeItem);
        this.element.on("focusout", "[role=treeitem]", this.onFocusOutOfTreeItem);
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
/* 38 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetActionHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 1);
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
/* 39 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ 40);
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 12);
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
/* 40 */
/*!*************************************************!*\
  !*** ./node_modules/throttle-debounce/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! ./throttle */ 13);
var debounce = __webpack_require__(/*! ./debounce */ 41);

module.exports = {
	throttle: throttle,
	debounce: debounce
};


/***/ }),
/* 41 */
/*!****************************************************!*\
  !*** ./node_modules/throttle-debounce/debounce.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__(/*! ./throttle */ 13);

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
/* 42 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 1);
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
                .parents(".facet-item-description")
                .find(".extra-filter")
                .fadeIn(this.configStore.Options.animationTime, function () {
                element.parent().hide();
                element.parent().next().show().find("a").focus();
            });
        }
        else {
            element
                .parents(".facet-item-description")
                .find(".extra-filter")
                .fadeOut(this.configStore.Options.animationTime, function () {
                element.parent().prev().show().find("a").focus();
                element.parent().hide();
            });
        }
        event.stopPropagation();
    };
    return ShowMoreLessHandler;
}());
exports.ShowMoreLessHandler = ShowMoreLessHandler;


/***/ }),
/* 46 */
/*!****************************************************************!*\
  !*** ./src/ts/eventhandlers/FacetKeyBoardNavigationHandler.ts ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetConstants_1 = __webpack_require__(/*! ./../config/FacetConstants */ 11);
var FacetKeyBoardNavigationHandler = /** @class */ (function () {
    function FacetKeyBoardNavigationHandler(element) {
        var _this = this;
        this.element = element;
        this.deRegister = function () {
            _this.element.off("keydown", ".arrowkeys-aware", _this.handleArrowKeys);
        };
        this.handleArrowKeys = function (event) {
            var code = event.which;
            if (code !== FacetConstants_1.FacetConstants.UpKeyCode && code !== FacetConstants_1.FacetConstants.DownKeyCode) {
                return;
            }
            var element = jQuery(event.target);
            if (!element.is(".arrowkeys-aware")) {
                element = element.parent();
            }
            var focusable;
            var div = element.parent();
            if (code === FacetConstants_1.FacetConstants.UpKeyCode) {
                focusable = div.prev().find(".arrowkeys-aware");
            }
            if (code === FacetConstants_1.FacetConstants.DownKeyCode) {
                focusable = div.next().find(".arrowkeys-aware");
            }
            if (focusable && focusable.length) {
                event.view.event.preventDefault();
                event.stopPropagation();
                focusable.focus();
            }
            else {
                var showMore = div.next().find("show-more-link") || div.next().find("show-less-link");
                if (showMore && showMore.length) {
                    showMore.focus();
                }
            }
        };
    }
    FacetKeyBoardNavigationHandler.prototype.RegisterDomHandler = function () {
        this.element.on("keydown", ".arrowkeys-aware", this.handleArrowKeys);
    };
    FacetKeyBoardNavigationHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    FacetKeyBoardNavigationHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    return FacetKeyBoardNavigationHandler;
}());
exports.FacetKeyBoardNavigationHandler = FacetKeyBoardNavigationHandler;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ODhjNjEyMzM4YWE2NTNjZjAzYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2xsYXBzZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbGFiZWwuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Gb3JtYXRMYWJlbEJ5VHlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYTExeS9Eb21VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZhY2V0Q29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGhyb3R0bGUtZGVib3VuY2UvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1waW5uZWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9DaGVja0xlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQXBwbHlSZW1vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9IaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC11bnBpbm5lZC5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2ExMXkvRmFjZXRUcmVlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9hMTF5L0ZhY2V0VHJlZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2ExMXkvS2V5Q29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmlsdGVyc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWFwcGxpZWQtZmlsdGVycy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1JhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldFNlYXJjaEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1BpblVucGluRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1Nob3dNb3JlTGVzc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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LENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNsQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEYsRUFBRSxDQUFDLENBQUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQXpDcUMsQ0FBQztJQUVoQywyREFBa0IsR0FBekI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDTSxpREFBUSxHQUFmO1FBQ0ksOENBQThDO0lBQ2xELENBQUM7SUFDTSx3REFBZSxHQUF0QixVQUF1QixLQUFVO1FBQzdCLDhDQUE4QztJQUNsRCxDQUFDO0lBZ0NMLHFDQUFDO0FBQUQsQ0FBQztBQTVDWSx3RUFBOEIiLCJmaWxlIjoiZmFjZXRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmFjZXRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFjZXRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTg4YzYxMjMzOGFhNjUzY2YwM2MiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkhhbmRsZWJhcnNcIixcImFtZFwiOlwiaGFuZGxlYmFycy5ydW50aW1lXCIsXCJjb21tb25qczJcIjpcImhhbmRsZWJhcnMvcnVudGltZVwiLFwiY29tbW9uanNcIjpcImhhbmRsZWJhcnMvcnVudGltZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBlbnVtIEZpbHRlckFjdGlvblR5cGUge1xuICAgIEFkZCA9IFwiQWRkXCIsXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwiZXhwb3J0IGVudW0gU2hvd0hpZGUge1xyXG4gICAgU2hvdyxcclxuICAgIEhpZGUsXHJcbiAgICBUb2dnbGUsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL1Nob3dIaWRlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgb2YtaGlkZGVuIG1pbi13LTUwIHctYXV0byBmbHVpZC1oIGZsZXggY29sdW1uIGNvbnRhaW5lclxcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZFByZWZpeCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1mYWNldC1jb250YWluZXJcXFwiPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZ3VpIGgtYXV0byBndWktc3ViaGVhZGluZy0xIG0tMCBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGV4cGFuZC1hbGxcXFwiIFxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJFeHBhbmQgQWxsIEZpbHRlcnNcXFwiPlxcbiAgICAgICAgICAgIDxpICBjbGFzcz1cXFwiZ3VpLWljb24gc3BlY2lhbCByb3RhdGUtbGVmdCBndWktaWNvbi1jaGV2ZG91YmxlXFxcIj48L2k+XFxuICAgICAgICAgICAgRXhwYW5kIEFsbFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgY3Vyc29yLXBvaW50ZXIgY29sbGFwc2UtYWxsXFxcIiBcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiQ29sbGFwc2UgQWxsIEZpbHRlcnNcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBzcGVjaWFsIHJvdGF0ZS1yaWdodCBndWktaWNvbi1jaGV2ZG91YmxlXFxcIj48L2k+XFxuICAgICAgICAgICAgQ29sbGFwc2UgQWxsXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZ3VpIGJvcmRlci1ib3R0b20gbGlnaHQgcC1yLTEwIHAtdC01IHAtYi01IHAtbC0xMFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgZ3VpLWljb24gaW5wdXQgZmx1aWQtdyBoLTMwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBpbnB1dCBmbHVpZC13IGd1aS1zdWJoZWFkaW5nLTIgZmlsdGVyLXNlYXJjaC1pbnB1dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgcm9sZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItZmlsdGVyLXRyZWUgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLXBpbm5lZC1maWx0ZXItdHJlZSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItdW5waW5uZWQtZmlsdGVyLXRyZWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggRmlsdGVycy4gU2hvcnRjdXQgQWx0ICsgRiBcXFwiIC8+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1zZWFyY2ggZ3VpLWhpZGRlblxcXCI+PC9pPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHVsIGNsYXNzPVxcXCJndWkgZmx1aWQtaCBmYWNldC1saXN0IG9mLWF1dG8gb2Z4LWhpZGRlbiBtLTAgcC0wXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcInRyZWVcXFwiXFxuICAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLWZpbHRlci10cmVlXFxcIlxcbiAgICAgICAgYXJpYS1yZWxldmFudD1cXFwiYWxsXFxcIlxcbiAgICAgICAgYXJpYS1saXZlPVxcXCJhc3NlcnRpdmVcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1waW5uZWRcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtdW5waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC11bnBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3VsPlxcbjwvZGl2PlwiO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtYm9keS5oYnNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjb2xsYXBzZWQgPSAodmFsdWU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiIGNvbGxhcHNlZCBcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sbGFwc2VkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0NvbGxhcHNlZC50cyIsImNvbnN0IEJvb2xlYW5WYWx1ZSA9IChib29sOiBib29sZWFuLCBuZWdhdGU6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKCBuZWdhdGUgKSB7XHJcbiAgICAgICAgYm9vbCA9ICFib29sO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvb2wgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5WYWx1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Cb29sZWFuLnRzIiwiaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IHNlbGVjdGVkRmlsdGVyc0NvdW50ID0gKGZhY2V0VmFsdWVzOiBJRmFjZXRWYWx1ZVtdKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBpZiAoZmFjZXRWYWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzICE9PSBudWxsXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0VmFsdWUgb2YgZmFjZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFZhbHVlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gXCJcIiA6IFwiPHNwYW4gY2xhc3M9XFxcImd1aS1ib2R5LTJcXFwiPihcIiArIGluZGV4ICsgXCIpPC9zcGFuPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRGaWx0ZXJzQ291bnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIiAgICA8bGkgY2xhc3M9XFxcImd1aSBpdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrTGVuZ3RoLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBkYXRhLmluZGV4KSw1LHtcIm5hbWVcIjpcIkNoZWNrTGVuZ3RoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWF0dHItdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICByb2xlPVxcXCJ0cmVlaXRlbVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIihcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBmb3I9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZFByZWZpeCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIi1jaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiRmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBpbiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ubmFtZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIiBoYXMgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIHJlY29yZHMuIFByZXNzIHNwYWNlYmFyIHRvIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFwcGx5UmVtb3ZlLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkFwcGx5UmVtb3ZlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCIgdGhpcyBmaWx0ZXIuXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGd1aS1zdWJoZWFkaW5nLTEgbm8td3JhcCB0ZXh0LXNob3J0ZW4gbS0wXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiLWNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCItMVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEZvcm1hdExhYmVsQnlUeXBlLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJGb3JtYXRMYWJlbEJ5VHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICA8L2xpPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcImRlc2NyaXB0aW9uIGd1aSBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC0xMCBwLWwtNSBwLTAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiSGlkZGVuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICByb2xlPVxcXCJncm91cFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNob3dNb3JlTGVzc0xpbmsudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCksNSx7XCJuYW1lXCI6XCJTaG93TW9yZUxlc3NMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuPC91bD5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtbGFiZWwuaGJzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgZm9ybWF0TGFiZWxCeVR5cGUgPSAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAobW9tZW50ICYmIHR5cGUgPT09IFwiRWRtLkRhdGVUaW1lT2Zmc2V0XCIpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh2YWx1ZSkuZm9ybWF0KFwiREQtTU1NLVlZWVkgaGg6bW0gYVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCB2YWx1ZSA9PT0gXCJBc3NpZ25lZFwiICkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDb21taXR0ZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB2YWx1ZSA9PT0gXCJDb21wbGV0ZVwiICkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJBc3NpZ25lZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMYWJlbEJ5VHlwZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Gb3JtYXRMYWJlbEJ5VHlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IGVycm9yIH0gZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb21VdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRGVzY2VuZGFudCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBpc1NlbGZPckRlc2NlbmRhbnQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xyXG4gICAgICAgIGlmICggcGFyZW50ID09PSBjaGlsZCApIHtyZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIHJldHVybiBEb21VdGlscy5pc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzSGlkZGVuID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ID09PSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBpc0FyaWFIaWRkZW4gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBcmlhSGlkZGVuID0gKG5vZGU6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7IHRocm93IEVycm9yKFwiRG9tVXRpbHMuc2V0QXJpYUhpZGRlbiAtIE5vZGUgY2Fubm90IGJlIG9mIG51bGwgb3IgdW5kZWZpbmVkXCIpOyB9XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXJpYUV4cGFuZGVkID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBcmlhRXhwYW5kZWQgPSAobm9kZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgdGhyb3cgRXJyb3IoXCJEb21VdGlscy5zZXRBcmlhRXhwYW5kZWQgLSBOb2RlIGNhbm5vdCBiZSBvZiBudWxsIG9yIHVuZGVmaW5lZFwiKTsgfVxyXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3cgPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgdGhyb3cgRXJyb3IoXCJEb21VdGlscy5zaG93IC0gTm9kZSBjYW5ub3QgYmUgb2YgbnVsbCBvciB1bmRlZmluZWRcIik7IH1cclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJndWktaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoaWRlID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7IHRocm93IEVycm9yKFwiRG9tVXRpbHMuaGlkZSAtIE5vZGUgY2Fubm90IGJlIG9mIG51bGwgb3IgdW5kZWZpbmVkXCIpOyB9XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9nZ2xlTGFiZWwgPSAobm9kZTogSFRNTExhYmVsRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGlmICghbm9kZSkgeyB0aHJvdyBFcnJvcihcIkRvbVV0aWxzLnRvZ2dsZUxhYmVsIC0gTm9kZSBjYW5ub3QgYmUgb2YgbnVsbCBvciB1bmRlZmluZWRcIik7IH1cclxuICAgICAgICBjb25zdCBmb3JJZCA9IG5vZGUuaHRtbEZvcjtcclxuICAgICAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JJZCkgfHwgbm9kZS5maXJzdEVsZW1lbnRDaGlsZCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpbnB1dC5jaGVja2VkID0gIWlucHV0LmNoZWNrZWQ7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIG9mZiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvYTExeS9Eb21VdGlscy50cyIsImV4cG9ydCBjbGFzcyBGYWNldENvbnN0YW50cyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVwS2V5Q29kZTogbnVtYmVyID0gMzg7XHJcbiAgICBwdWJsaWMgc3RhdGljIERvd25LZXlDb2RlOiBudW1iZXIgPSA0MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgRW50ZXJLZXlDb2RlOiBudW1iZXIgPSAxMztcclxuICAgIHB1YmxpYyBzdGF0aWMgU3BhY2VLZXlDb2RlOiBudW1iZXIgPSAyODtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GYWNldENvbnN0YW50cy50cyIsImltcG9ydCB7IFNob3dIaWRlIH0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlciA9ICh0YXJnZXQ6IEpRdWVyeSwgc2hvd0hpZGU6IFNob3dIaWRlLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uRWxlbWVudCA9IHRhcmdldC5maW5kKFwiLmV4cGFuc2lvbi1pY29uXCIpIDtcclxuICAgICAgICBjb25zdCBjdXJyZW50bHlWaXNpYmxlID0gaWNvbkVsZW1lbnQuaGFzQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgIGlmIChTaG93SGlkZS5Ub2dnbGUgIT09IHNob3dIaWRlICYmICgoY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuU2hvdykgfHxcclxuICAgICAgICAgICAgKCFjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5IaWRlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWN1cnJlbnRseVZpc2libGUpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZURvd24oMjAwKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLWRvd25cIik7XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50LmFkZENsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcclxuICAgICAgICAgICAgdGFyZ2V0XHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gY29sbGFwc2UgZmlsdGVyIHZhbHVlcyBmb3IgXCIgKyBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICAgICAgdGFyZ2V0XHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIGV4cGFuZCBmaWx0ZXIgdmFsdWVzIGZvciBcIiArIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBub1RyYWlsaW5nICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgZGVib3VuY2VNb2RlICAgSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCBkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSApIHtcblxuXHQvLyBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuXHQvLyBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcblx0Ly8gZGVib3VuY2UgbW9kZXMuXG5cdHZhciB0aW1lb3V0SUQ7XG5cblx0Ly8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCB0aW1lIGBjYWxsYmFja2Agd2FzIGV4ZWN1dGVkLlxuXHR2YXIgbGFzdEV4ZWMgPSAwO1xuXG5cdC8vIGBub1RyYWlsaW5nYCBkZWZhdWx0cyB0byBmYWxzeS5cblx0aWYgKCB0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nICkge1xuXHRcdGRlYm91bmNlTW9kZSA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrID0gbm9UcmFpbGluZztcblx0XHRub1RyYWlsaW5nID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuXHQvLyBmdW5jdGlvbmFsaXR5IGFuZCB3aGVuIGV4ZWN1dGVkIHdpbGwgbGltaXQgdGhlIHJhdGUgYXQgd2hpY2ggYGNhbGxiYWNrYFxuXHQvLyBpcyBleGVjdXRlZC5cblx0ZnVuY3Rpb24gd3JhcHBlciAoKSB7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGVsYXBzZWQgPSBOdW1iZXIobmV3IERhdGUoKSkgLSBsYXN0RXhlYztcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblx0XHRmdW5jdGlvbiBleGVjICgpIHtcblx0XHRcdGxhc3RFeGVjID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuXHRcdC8vIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG5cdFx0ZnVuY3Rpb24gY2xlYXIgKCkge1xuXHRcdFx0dGltZW91dElEID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmICggZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQgKSB7XG5cdFx0XHQvLyBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcblx0XHRcdC8vIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuXHRcdFx0ZXhlYygpO1xuXHRcdH1cblxuXHRcdC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0LlxuXHRcdGlmICggdGltZW91dElEICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkgKSB7XG5cdFx0XHQvLyBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcblx0XHRcdC8vIGBjYWxsYmFja2AuXG5cdFx0XHRleGVjKCk7XG5cblx0XHR9IGVsc2UgaWYgKCBub1RyYWlsaW5nICE9PSB0cnVlICkge1xuXHRcdFx0Ly8gSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuXHRcdFx0Ly8gZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3Rcblx0XHRcdC8vIHJlY2VudCBleGVjdXRpb24uXG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcblx0XHRcdC8vIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cblx0XHRcdC8vIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcblx0XHR9XG5cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblx0cmV0dXJuIHdyYXBwZXI7XG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS90aHJvdHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgKiBmcm9tIFwiLi9GYWNldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0VudHJ5LnRzIiwiaW1wb3J0IHsgSG90S2V5c0ZhY2V0SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGYWNldEhhbmRsZXJcIjtcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgeyBJRmFjZXRDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldENvbmZpZ1wiO1xuaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFZhbHVlXCI7XG5pbXBvcnQgeyBGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgRmFjZXRUcmVlIH0gZnJvbSBcIi4vLi4vYTExeS9GYWNldFRyZWVcIjtcbmltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0T3B0aW9ucyB9IGZyb20gXCIuLy4uL2NvbmZpZy9JRmFjZXRPcHRpb25zXCI7XG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgLCBGYWNldEFjdGlvbkhhbmRsZXIsXG4gICAgRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyLCBGYWNldFNlYXJjaEhhbmRsZXIsXG4gICAgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIsIElFdmVudEhhbmRsZXIsIFBpblVucGluRXZlbnRIYW5kbGVyLCBTaG93TW9yZUxlc3NIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xuZXhwb3J0IGNsYXNzIEZhY2V0IHtcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlO1xuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmYWNldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgaGFuZGxlckNoYWluOiBJRXZlbnRIYW5kbGVyW10gPSBbXTtcbiAgICBwcml2YXRlIGZhY2V0VHJlZTogRmFjZXRUcmVlO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmFjZXRDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQgPSBvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZhY2V0VGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsXG4gICAgICAgIC8vICAgICB0aGlzLmNvbmZpZ1N0b3JlLCB0aGlzLnRlbXBsYXRlU2VydmljZSkpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldEFjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmFjZXRTZWFyY2hIYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhpZGVGYWNldFNlY3Rpb25IYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhvdEtleXNGYWNldEhhbmRsZXIoKSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IFBpblVucGluRXZlbnRIYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlLCB0aGlzLnRlbXBsYXRlU2VydmljZSkpO1xuICAgICAgICAvLyAvLyB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBTaG93TW9yZUxlc3NIYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XG4gICAgICAgIC8vIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0S2V5Qm9hcmROYXZpZ2F0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCkpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIC8vICAgICBoYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG4gICAgcHVibGljIGJpbmQgPSAgKGZhY2V0czogSUZhY2V0W10pOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2Uuc2V0RGF0YShmYWNldHMpO1xuICAgICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyByZVJlbmRlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZmFjZXRFbGVtZW50LmlubmVySFRNTCA9IGZ1bGxGYWNldDtcbiAgICAgICAgICAgIGNvbnN0IHRyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0cmVlXCJdJyk7XG4gICAgICAgICAgICB0aGlzLmZhY2V0VHJlZSA9IG5ldyBGYWNldFRyZWUodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQsIHRoaXMsIHRoaXMuY29uZmlnU3RvcmUpO1xuICAgICAgICAgICAgdGhpcy5mYWNldFRyZWUuaW5pdCgpO1xuICAgICAgICB9LCAxICk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRGYWNldENvbmZpZyA9IChmYWNldENvbmZpZzogSUZhY2V0Q29uZmlnW10pOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnID0gZmFjZXRDb25maWc7XG4gICAgfVxuICAgIHB1YmxpYyBkZXN0cm95ID0gICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5mYWNldFRyZWUuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcbmltcG9ydCB7SUZhY2V0fSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xuaW1wb3J0ICogYXMgRmFjZXRNYWluIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1tYWluLmhic1wiO1xuaW1wb3J0IHtGYWNldENvbmZpZ1N0b3JlfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHtJRmFjZXRUZW1wbGF0ZVNlcnZpY2V9IGZyb20gXCIuL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRUZW1wbGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGRhdGE6IElGYWNldFtdO1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0SGVhZGVyOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHk6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge1xuICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluID0gRmFjZXRNYWluO1xuICB9XG4gIHB1YmxpYyBiaW5kKGZhY2V0czogSUZhY2V0W10pOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbGxhcHNlZDogYm9vbGVhbiA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQ7XG4gICAgY29uc3QgbWVyZ2VkRmFjZXRzID0gdGhpcy5tZXJnZVdpdGhGYWNldENvbmZpZyhmYWNldHMpO1xuICAgIGNvbnN0IGZhdm9yaXRlcyA9IG1lcmdlZEZhY2V0cy5maWx0ZXIoKGYpID0+IGYucGlubmVkICE9PSB1bmRlZmluZWQgJiYgZi5waW5uZWQpO1xuICAgIGNvbnN0IG5vbkZhdm9yaXRlcyA9IG1lcmdlZEZhY2V0cy5maWx0ZXIoKGYpID0+IGYucGlubmVkID09PSB1bmRlZmluZWQgfHwgIWYucGlubmVkKTtcbiAgICBmYXZvcml0ZXMuc29ydCh0aGlzLmNvbXBhcmVGbik7XG4gICAgbm9uRmF2b3JpdGVzLnNvcnQodGhpcy5jb21wYXJlRm4pO1xuICAgIGNvbnN0IG5vT2ZGYWNldFRvU2hvdyA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5ub09mRmFjZXRUb1Nob3c7XG4gICAgY29uc3QgaWRQcmVmaXggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuaWRQcmVmaXg7XG4gICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluKHtpZFByZWZpeCwgZmF2b3JpdGVzLCBub25GYXZvcml0ZXMsIG5vT2ZGYWNldFRvU2hvd30pO1xuICB9XG4gIHB1YmxpYyBzZXREYXRhID0gKGZhY2V0czogSUZhY2V0W10pOiB2b2lkID0+IHtcbiAgICB0aGlzLmRhdGEgPSBmYWNldHM7XG4gIH1cbiAgcHVibGljIGdldERhdGEgPSAoKTogSUZhY2V0W10gPT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgcHJpdmF0ZSBjb21wYXJlRm4gPSAocHJldjogYW55LCBuZXh0OiBhbnkpID0+IHtcbiAgICBpZiAocHJldi5vcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChuZXh0Lm9yZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gcHJldi5vcmRlciAtIG5leHQub3JkZXI7XG4gIH1cbiAgcHJpdmF0ZSBtZXJnZVdpdGhGYWNldENvbmZpZyA9IChmYWNldHM6IElGYWNldFtdKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkQXJyYXk6IGFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBmYWNldCBvZiBmYWNldHMpIHtcbiAgICAgIGZvciAoY29uc3QgZmFjZXRDb25maWcgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnKSB7XG4gICAgICAgIGlmIChmYWNldENvbmZpZy5pZCA9PT0gZmFjZXQuaWQpIHtcbiAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogZmFjZXRDb25maWcuY29sbGFwc2VkLFxuICAgICAgICAgICAgZmFjZXRSYW5nZXM6IGZhY2V0LmZhY2V0UmFuZ2VzLFxuICAgICAgICAgICAgZmFjZXRWYWx1ZXM6IGZhY2V0LmZhY2V0VmFsdWVzLFxuICAgICAgICAgICAgaWQ6IGZhY2V0Q29uZmlnLmlkLFxuICAgICAgICAgICAgbmFtZTogZmFjZXRDb25maWcubmFtZSxcbiAgICAgICAgICAgIG9yZGVyOiBmYWNldENvbmZpZy5vcmRlcixcbiAgICAgICAgICAgIHBpbm5lZDogZmFjZXRDb25maWcucGlubmVkLFxuICAgICAgICAgICAgdHlwZTogZmFjZXRDb25maWcudHlwZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1ib2R5IGd1aSBmbHVpZC1oIG9mLWhpZGRlbiBndWktaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1ib2R5IGd1aSBmbHVpZC1oIG9mLWhpZGRlblxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWJvZHkuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1ib2R5XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQtaCBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1tYWluLmhic1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxsaSBjbGFzcz1cXFwiZ3VpIG0tMCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwXFxcIiBcXHJcXG4gICAgYXJpYS1sYWJlbD1cXFwiUGlubmVkIEZpbHRlcnNcXFwiXFxyXFxuICAgIGRhdGEtYXR0ci12YWx1ZT1cXFwiUGlubmVkIEZpbHRlcnNcXFwiXFxyXFxuICAgIGRhdGEtYXR0ci1pZ25vcmVGb3JTZWFyY2g9XFxcInRydWVcXFwiXFxyXFxuICAgIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXFxyXFxuICAgIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIlxcclxcbiAgICBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgYXJpYS1yZWxldmFudD1cXFwiYWxsXFxcIlxcclxcbiAgICByb2xlPVxcXCJ0cmVlaXRlbVxcXCJcXHJcXG4gICAgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZFByZWZpeCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1waW5uZWQtZmlsdGVyLXRyZWVcXFwiPlxcclxcbiAgICA8aDYgY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yIGNhcHMgYm9sZC01MDAgZmxleCBtLWItMTAgamMtc2JcXFwiPlxcclxcbiAgICAgICAgUElOTkVEIEZJTFRFUlNcXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcbiAgICA8L2g2PlxcclxcbiAgICA8dWwgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItcGlubmVkLWZpbHRlci10cmVlXFxcIiBjbGFzcz1cXFwiZ3VpIG0tMCBwLTBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYXZvcml0ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvdWw+XFxyXFxuPC9saT5cXHJcXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgIDxsaSBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGl0ZW0gZmFjZXQtaXRlbSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtNSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2xsYXBzZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNvbGxhcHNlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIHJvbGU9XFxcInRyZWVpdGVtXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xlYW4udHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiQm9vbGVhblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBndWkgaXRlbSBmbGV4IGpjLXNiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBwcmltYXJ5IGd1aS1zdWJoZWFkaW5nLTEgY2FwcyBtLTAgY3Vyc29yLXBvaW50ZXJcXFwiIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIHBpbi11bnBpbi1zZWxlY3RvciBndWktaWNvbi11bnBpbiBtLXQtNSBtLXItMTAgdW5waW4taWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gdW5waW4gZmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWxhYmVsLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtbGFiZWxcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICBcIixcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8L2xpPlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhdm9yaXRlcyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LXBpbm5lZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY2hlY2tMZW5ndGggPSAoaW5kZXgsIHYyKTogc3RyaW5nID0+IHtcclxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICsgMSA+IHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ3VpLWhpZGRlbiBleHRyYS1maWx0ZXJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tMZW5ndGg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tMZW5ndGgudHMiLCJjb25zdCBBcHBseVJlbW92ZSA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCIgcmVtb3ZlIFwiIDogXCIgYXBwbHkgXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBseVJlbW92ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BcHBseVJlbW92ZS50cyIsImNvbnN0IGNoZWNrZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJjb25zdCBoaWRkZW4gPSAodmFsdWU6IGJvb2xlYW4sIGludmVydDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgaGlkZTtcclxuICAgIGlmIChpbnZlcnQpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpZGUgPyBcIiBndWktaGlkZGVuIFwiIDogXCIgXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoaWRkZW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvSGlkZGVuLnRzIiwiY29uc3QgU2hvd01vcmVMZXNzTGluayA9IChpbmRleCwgdjIsIG9wdGlvbnMpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4Lmxlbmd0aCA+IHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGxpIGNsYXNzPVxcXCJndWkgbS1iLTUgbS10LTVcXFwiPlwiXHJcbiAgICAgICAgICAgICAgICArIFwiPGEgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcInRyZWVpdGVtXFxcIiBcIlxyXG4gICAgICAgICAgICAgICAgKyAgICAgICBcImRhdGEtYXR0ci1pZD1cXFwie3tpZH19XFxcIiBcIlxyXG4gICAgICAgICAgICAgICAgKyAgICAgICBcImRhdGEtYXR0ci12YWx1ZT1cXFwiU2hvdyBNb3JlXFxcIiBcIlxyXG4gICAgICAgICAgICAgICAgKyAgICAgICBcImFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIHNob3cgXCIgKyAoaW5kZXgubGVuZ3RoIC0gdjIpICsgXCIgbW9yZSB2YWx1ZXNcXFwiIFwiXHJcbiAgICAgICAgICAgICAgICArICAgICAgIFwiY2xhc3M9XFxcImd1aSBjYXBzIGd1aS1ib2R5LTIgc2ltcGxlIHNob3ctbW9yZS1saW5rIGN1cnNvci1wb2ludGVyIHAtMCBtLXQtM1xcXCI+XCJcclxuICAgICAgICAgICAgICAgICsgICAgICAgKGluZGV4Lmxlbmd0aCAtIHYyKSArIFwiIE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgKyBcIjwvYT5cIlxyXG4gICAgICAgICAgICAgKyBcIjwvbGk+XCJcclxuICAgICAgICAgICAgICsgXCI8bGkgY2xhc3M9XFxcImd1aSBtLWItNSBtLXQtNSBndWktaGlkZGVuXFxcIj5cIlxyXG4gICAgICAgICAgICAgICAgKyBcIjxhIHRhYmluZGV4PVxcXCIwXFxcIiByb2xlPVxcXCJ0cmVlaXRlbVxcXCIgXCJcclxuICAgICAgICAgICAgICAgICsgICAgICAgXCJkYXRhLWF0dHItdmFsdWU9XFxcIlNob3cgTGVzc1xcXCIgXCJcclxuICAgICAgICAgICAgICAgICsgICAgICAgXCJhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciB0byBzaG93IGxlc3MgdmFsdWVzXFxcIiBcIlxyXG4gICAgICAgICAgICAgICAgKyAgICAgICBcImNsYXNzPVxcXCJndWkgY2FwcyBndWktYm9keS0yIHNpbXBsZSBzaG93LWxlc3MtbGluayBjdXJzb3ItcG9pbnRlciBwLTAgbS10LTNcXFwiPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIlNob3cgTGVzc1wiICtcclxuICAgICAgICAgICAgICAgICAgXCI8L2E+XCJcclxuICAgICAgICAgICAgICsgXCI8L2xpPlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlTGVzc0xpbms7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2hvd01vcmVMZXNzTGluay50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPGxpIGNsYXNzPVxcXCJndWkgbS0wIHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiIFxcclxcbiAgICBhcmlhLWxhYmVsPVxcXCJBbGwgRmlsdGVyc1xcXCJcXHJcXG4gICAgZGF0YS1hdHRyLXZhbHVlPVxcXCJBbGwgRmlsdGVyc1xcXCJcXHJcXG4gICAgZGF0YS1hdHRyLWlnbm9yZUZvclNlYXJjaD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgYXJpYS1saXZlPVxcXCJwb2xpdGVcXFwiXFxyXFxuICAgIGFyaWEtcmVsZXZhbnQ9XFxcImFsbFxcXCJcXHJcXG4gICAgYXJpYS1hdG9taWM9XFxcInRydWVcXFwiXFxyXFxuICAgIHJvbGU9XFxcInRyZWVpdGVtXFxcIlxcclxcbiAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLXVucGlubmVkLWZpbHRlci10cmVlXFxcIj5cXHJcXG4gICAgPGg2IGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBjYXBzIGJvbGQtNTAwIG0tYi0xMCBmbGV4IGpjLXNiXFxcIj5cXHJcXG4gICAgICAgIEFsbCBGSUxURVJTXFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiPjwvaT5cXHJcXG4gICAgPC9oNj5cXHJcXG4gICAgPHVsIGFyaWEtbGFiZWxsZWRieT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLXVucGlubmVkLWZpbHRlci10cmVlXFxcIiBjbGFzcz1cXFwiZ3VpIG0tMCBwLTBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ub25GYXZvcml0ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvdWw+XFxyXFxuPC9saT5cXHJcXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgIDxsaSBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGl0ZW0gZmFjZXQtaXRlbSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtNSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2xsYXBzZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNvbGxhcHNlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIHJvbGU9XFxcInRyZWVpdGVtXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xlYW4udHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiQm9vbGVhblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBndWkgaXRlbSBmbGV4IGpjLXNiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBwcmltYXJ5IGd1aS1zdWJoZWFkaW5nLTEgY2FwcyBtLTAgY3Vyc29yLXBvaW50ZXJcXFwiIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIHBpbi11bnBpbi1zZWxlY3RvciBndWktaWNvbi1waW4gbS10LTUgbS1yLTEwIHBpbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBwaW4gZmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWxhYmVsLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtbGFiZWxcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICBcIixcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8L2xpPlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5vbkZhdm9yaXRlcyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LXVucGlubmVkLmhic1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSBcIi4uL21haW4vRmFjZXRcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IERvbVV0aWxzIH0gZnJvbSBcIi4vRG9tVXRpbHNcIjtcclxuaW1wb3J0IHsgRmFjZXRUcmVlSXRlbSB9IGZyb20gXCIuL0ZhY2V0VHJlZUl0ZW1cIjtcclxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi9LZXlDb2Rlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0VHJlZSB7XHJcbiAgICAvLyBGYWNldCBPYmplY3RcclxuICAgIHByaXZhdGUgZmFjZXQ6IEZhY2V0O1xyXG4gICAgLy8gRG9tIE5vZGVzXHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmVlRG9tTm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNlYXJjaEJveE5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBleHBhbmRBbGxOb2RlOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29sbGFwc2VBbGxOb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBEYXRhIFN0cnVjdHVyZXMgZm9yIGVhc3kgYWNjZXNzXHJcbiAgICBwcml2YXRlIHRyZWVpdGVtczogRmFjZXRUcmVlSXRlbVtdO1xyXG4gICAgcHJpdmF0ZSBmaXJzdENoYXJzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgZmlyc3RUcmVlaXRlbTogRmFjZXRUcmVlSXRlbTtcclxuICAgIHByaXZhdGUgbGFzdFRyZWVpdGVtOiBGYWNldFRyZWVJdGVtO1xyXG5cclxuICAgIC8vIENvbmZpZyBTdG9yZXNcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmU7XHJcblxyXG4gICAgLy8gTG9jYWxcclxuICAgIHByaXZhdGUgbGFzdElucHV0VmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQsIGZhY2V0OiBGYWNldCwgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gbm9kZTtcclxuICAgICAgICB0aGlzLmZhY2V0ID0gZmFjZXQ7XHJcbiAgICAgICAgdGhpcy50cmVlRG9tTm9kZSA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9dHJlZV1cIilbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGUgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xsYXBzZS1hbGxcIilbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwYW5kLWFsbFwiKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLnNlYXJjaEJveE5vZGUgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJlZWl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5maXJzdENoYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5maXJzdFRyZWVpdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUcmVlaXRlbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRUcmVlaXRlbXMgPSAobm9kZSwgdHJlZSwgZ3JvdXApID0+IHtcclxuICAgICAgICBsZXQgZWxlbTogYW55ID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBsZXQgdGkgPSBncm91cDtcclxuICAgICAgICB3aGlsZSAoZWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCByb2xlID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICBpZiAocm9sZSAmJiByb2xlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJlZWl0ZW1cIikge1xyXG4gICAgICAgICAgICAgICAgdGkgPSBuZXcgRmFjZXRUcmVlSXRlbShlbGVtLCB0cmVlLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICB0aS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICB0cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKHRpKTtcclxuICAgICAgICAgICAgICAgIHRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuZmlyc3RDaGFyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKHRpLmxhYmVsLnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5kVHJlZWl0ZW1zKGVsZW0sIHRyZWUsIHRpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcG9wIHVwIG1lbnVzXHJcbiAgICAgICAgaWYgKCF0aGlzLnRyZWVEb21Ob2RlLmdldEF0dHJpYnV0ZShcInJvbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVEb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRyZWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBvcHVsYXRlIGFsbCBUcmVlIEl0ZW1zXHJcbiAgICAgICAgdGhpcy5maW5kVHJlZWl0ZW1zKHRoaXMudHJlZURvbU5vZGUsIHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZpc2libGUgVHJlZSBJdGVtc1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVRyZWVpdGVtcygpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGFiIEluZGV4IG9mIGZpcnN0IHRyZWUgaXRlbS5cclxuICAgICAgICB0aGlzLmZpcnN0VHJlZWl0ZW0udHJlZUl0ZW1Eb21Ob2RlLnRhYkluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcclxuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb2xsYXBzZUFsbEl0ZW1zKTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZXhwYW5kQWxsSXRlbXMpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQm94Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVTZWFyY2hGb3JGaWx0ZXJzKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnNldEZvY3VzVG9TZWFyY2hCb3gpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgRG9tVXRpbHMub2ZmKHRoaXMucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5zZXRGb2N1c1RvU2VhcmNoQm94KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvU2VhcmNoQm94ID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wia2V5ZG93blwiXSkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5hbHRLZXkgICYmICBldmVudC5rZXkgPT09IFwiZlwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm94Tm9kZS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvSXRlbSA9ICh0cmVlaXRlbTogRmFjZXRUcmVlSXRlbSwgZG9udFNldGZvY3VzPzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRpID09PSB0cmVlaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGkudHJlZUl0ZW1Eb21Ob2RlLnRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICghZG9udFNldGZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlcclxuICAgICAgICAgICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aS50cmVlSXRlbURvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvRmlyc3RWaXNpYmxlID0gKGRvbnRTZXRmb2N1cz86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aS5pc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGksIGRvbnRTZXRmb2N1cyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvTmV4dEl0ZW0gPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgbmV4dEl0ZW07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9ICh0aGlzLnRyZWVpdGVtcy5sZW5ndGggLSAxKTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGkgPSB0aGlzLnRyZWVpdGVtc1tpXTtcclxuICAgICAgICAgICAgaWYgKHRpID09PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpLmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0gPSB0aTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV4dEl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvSXRlbShuZXh0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvUHJldmlvdXNJdGVtID0gKGN1cnJlbnRJdGVtOiBGYWNldFRyZWVJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXZJdGVtO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRpID09PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpLmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcHJldkl0ZW0gPSB0aTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJldkl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvSXRlbShwcmV2SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvUGFyZW50SXRlbSA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5ncm91cFRyZWVpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0oY3VycmVudEl0ZW0uZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGb2N1c1RvRmlyc3RJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5maXJzdFRyZWVpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb0xhc3RJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5sYXN0VHJlZWl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBhbmRUcmVlaXRlbSA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSwgbm90aWZ5PzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIFRyZWUgSXRlbSBpcyBleHBhbmRhYmxlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICBEb21VdGlscy5zZXRBcmlhRXhwYW5kZWQoY3VycmVudEl0ZW0udHJlZUl0ZW1Eb21Ob2RlLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXhwYW5zaW9uSWNvbihjdXJyZW50SXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVRyZWVpdGVtcyhub3RpZnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4cGFuZEFsbFNpYmxpbmdJdGVtcyA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKCh0aS5ncm91cFRyZWVpdGVtID09PSBjdXJyZW50SXRlbS5ncm91cFRyZWVpdGVtKSAmJiB0aS5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kVHJlZWl0ZW0odGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5Q29sbGFwc2VBbmRFeHBhbnNpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBleHBhbmRBbGxJdGVtcyA9ICgpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aS5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kVHJlZWl0ZW0odGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kQWxsTm9kZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGUuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLm5vdGlmeUNvbGxhcHNlQW5kRXhwYW5zaW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29sbGFwc2VBbGxJdGVtcyA9ICgpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aS5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VUcmVlaXRlbSh0aSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGxOb2RlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGUuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLm5vdGlmeUNvbGxhcHNlQW5kRXhwYW5zaW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29sbGFwc2VBbGxTaWJsaW5nSXRlbXMgPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICgodGkuZ3JvdXBUcmVlaXRlbSA9PT0gY3VycmVudEl0ZW0uZ3JvdXBUcmVlaXRlbSkgJiYgdGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVHJlZWl0ZW0odGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5Q29sbGFwc2VBbmRFeHBhbnNpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb2xsYXBzZVRyZWVpdGVtID0gKGN1cnJlbnRJdGVtOiBGYWNldFRyZWVJdGVtLCBub3RpZnk/OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgbGV0IGdyb3VwVHJlZWl0ZW06IEZhY2V0VHJlZUl0ZW07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmlzRXhwYW5kZWQoKSkge1xyXG4gICAgICAgICAgICBncm91cFRyZWVpdGVtID0gY3VycmVudEl0ZW07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JvdXBUcmVlaXRlbSA9IGN1cnJlbnRJdGVtLmdyb3VwVHJlZWl0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ3JvdXBUcmVlaXRlbSkge1xyXG4gICAgICAgICAgICBEb21VdGlscy5zZXRBcmlhRXhwYW5kZWQoZ3JvdXBUcmVlaXRlbS50cmVlSXRlbURvbU5vZGUsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXhwYW5zaW9uSWNvbihncm91cFRyZWVpdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVRyZWVpdGVtcyhub3RpZnkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKGdyb3VwVHJlZWl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9nZ2xlRXhwYW5zaW9uSWNvbiA9IChncm91cFRyZWVpdGVtOiBGYWNldFRyZWVJdGVtLCBjdXJyZW50RXhwYW5kZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBjb25zdCBpY29uTm9kZUxpc3QgPSBncm91cFRyZWVpdGVtLnRyZWVJdGVtRG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGFuc2lvbi1pY29uXCIpO1xyXG4gICAgICAgIGxldCBpY29uTm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCBpY29uTm9kZUxpc3QgJiYgaWNvbk5vZGVMaXN0Lmxlbmd0aCApIHtcclxuICAgICAgICAgICAgaWNvbk5vZGUgPSBpY29uTm9kZUxpc3RbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3VycmVudEV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QuYWRkKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJndWktaWNvbi1jaGV2cm9uLWRvd25cIik7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVWaXNpYmxlVHJlZWl0ZW1zID0gKG5vdGlmeT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLmZpcnN0VHJlZWl0ZW0gPSB0aGlzLnRyZWVpdGVtc1swXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCB0aS50cmVlSXRlbURvbU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3VpLWhpZGRlblwiKVxyXG4gICAgICAgICAgICAgICAgfHwgcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImd1aS1oaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgKHBhcmVudCAhPT0gdGhpcy50cmVlRG9tTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGkuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUcmVlaXRlbSA9IHRpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggbm90aWZ5ICkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUNvbGxhcHNlQW5kRXhwYW5zaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIgPSAoY3VycmVudEl0ZW0sIGNoYXIpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQ7XHJcbiAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgIGNoYXIgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIEdldCBzdGFydCBpbmRleCBmb3Igc2VhcmNoIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGN1cnJlbnRJdGVtXHJcbiAgICAgICAgc3RhcnQgPSB0aGlzXHJcbiAgICAgICAgICAgIC50cmVlaXRlbXNcclxuICAgICAgICAgICAgLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcclxuICAgICAgICBpZiAoc3RhcnQgPT09IHRoaXMudHJlZWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayByZW1haW5pbmcgc2xvdHMgaW4gdGhlIG1lbnVcclxuICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKHN0YXJ0LCBjaGFyKTtcclxuXHJcbiAgICAgICAgLy8gSWYgbm90IGZvdW5kIGluIHJlbWFpbmluZyBzbG90cywgY2hlY2sgZnJvbSBiZWdpbm5pbmdcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoMCwgY2hhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBtYXRjaCB3YXMgZm91bmQuLi5cclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMudHJlZWl0ZW1zW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRleEZpcnN0Q2hhcnMgPSAoc3RhcnRJbmRleDogbnVtYmVyLCBjaGFyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZmlyc3RDaGFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmVlaXRlbXNbaV0uaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdGhpcy5maXJzdENoYXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dNb3JlVmFsdWVzID0gKGdyb3VwSXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICggdGkuZ3JvdXBUcmVlaXRlbSA9PT0gZ3JvdXBJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImd1aS1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpLmlzU2hvd0xlc3NMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJndWktaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpLnRyZWVJdGVtRG9tTm9kZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRpLmlzU2hvd01vcmVMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJndWktaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVRyZWVpdGVtcygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dMZXNzVmFsdWVzID0gKGdyb3VwSXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICggdGkuZ3JvdXBUcmVlaXRlbSA9PT0gZ3JvdXBJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImV4dHJhLWZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aS5pc1Nob3dMZXNzTGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aS5pc1Nob3dNb3JlTGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aS50cmVlSXRlbURvbU5vZGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVMYWJlbENoYW5nZSA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBEb21VdGlscy50b2dnbGVMYWJlbChjdXJyZW50SXRlbS50cmVlSXRlbURvbU5vZGUgYXMgIEhUTUxMYWJlbEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNoZWNrZWQgPyBGaWx0ZXJBY3Rpb25UeXBlLkFkZCA6IEZpbHRlckFjdGlvblR5cGUuTWludXM7XHJcbiAgICAgICAgY3VycmVudEl0ZW0udHJlZUl0ZW1Eb21Ob2RlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgY2hlY2tlZC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UoY3VycmVudEl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5pc1JhbmdlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBub3RpZnlDb2xsYXBzZUFuZEV4cGFuc2lvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHB1Ymxpc2g6IEFycmF5PHtrZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufT4gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICggdGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZhY2V0LmlkID09PSB0aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldC5jb2xsYXBzZWQgPSAhdGkuaXNFeHBhbmRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoLnB1c2goe2tleTogZmFjZXQuaWQsIGNvbGxhcHNlZDogZmFjZXQuY29sbGFwc2VkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xsYXBzZVRvZ2dsZShwdWJsaXNoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVQaW5VbnBpbiA9IChldmVudDogYW55LCBwaW46IGJvb2xlYW4sIGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIGZhY2V0LmlkID09PSBpZCApIHtcclxuICAgICAgICAgICAgICAgIGZhY2V0LnBpbm5lZCA9IHBpbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmFjZXQucmVSZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25QaW5VbnBpbihpZCwgcGluKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVTZWFyY2hGb3JGaWx0ZXJzID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wia2V5dXBcIl0pID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIHZhbCA9PT0gdGhpcy5sYXN0SW5wdXRWYWx1ZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RJbnB1dFZhbHVlID0gdmFsO1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlQmxhbmsgPSBmYWxzZTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWVCbGFuayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoICFpbnB1dFZhbHVlQmxhbmsgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5vdEJsYW5rSW5wdXRTZWFyY2godmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmxhbmtJbnB1dFNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVRyZWVpdGVtcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICAvLyBjb25zdCBtYXRjaGVkR3JvdXBJdGVtOiBGYWNldFRyZWVJdGVtW10gPSBbXTtcclxuICAgICAgICAvLyBjb25zdCBub3RNYXRjaGVkR3JvdXBJdGVtOiBGYWNldFRyZWVJdGVtW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aS5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA+IC0xKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF0Y2hlZEdyb3VwSXRlbS5wdXNoKHRpKTtcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbm90TWF0Y2hlZEdyb3VwSXRlbS5wdXNoKHRpKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAodGkuaXNTaG93TGVzc0xpbmsgfHwgdGkuaXNTaG93TW9yZUxpbmsgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIERvbVV0aWxzLmhpZGUodGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRpLmlzU2hvd0xlc3NMaW5rIHx8IHRpLmlzU2hvd01vcmVMaW5rKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAoIG1hdGNoZWRHcm91cEl0ZW0uaW5kZXhPZih0aSkgPiAtMSB8fCBtYXRjaGVkR3JvdXBJdGVtLmluZGV4T2YodGkuZ3JvdXBUcmVlaXRlbSkgPiAtMSApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRpLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghdGkuaXNFeHBhbmRhYmxlICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aS52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA+IC0xICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEdyb3VwSXRlbS5pbmRleE9mKHRpLmdyb3VwVHJlZWl0ZW0pIDw9IC0xICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZEdyb3VwSXRlbS5wdXNoKHRpLmdyb3VwVHJlZWl0ZW0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5vdE1hdGNoZWRJbmRleCA9IG5vdE1hdGNoZWRHcm91cEl0ZW0uaW5kZXhPZih0aS5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKG5vdE1hdGNoZWRJbmRleCA+IC0xICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbm90TWF0Y2hlZEdyb3VwSXRlbS5zbGljZShub3RNYXRjaGVkSW5kZXgsIG5vdE1hdGNoZWRJbmRleCArIDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIERvbVV0aWxzLnNob3codGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBtZyBvZiBtYXRjaGVkR3JvdXBJdGVtKSB7XHJcbiAgICAgICAgLy8gICAgIG1nLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZChtZy50cmVlSXRlbURvbU5vZGUsIFwidHJ1ZVwiKTtcclxuICAgICAgICAvLyAgICAgRG9tVXRpbHMuc2hvdyhtZy50cmVlSXRlbURvbU5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IgKGNvbnN0IG5tZyBvZiBub3RNYXRjaGVkR3JvdXBJdGVtKSB7XHJcbiAgICAgICAgLy8gICAgIG5tZy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKG5tZy50cmVlSXRlbURvbU5vZGUsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgLy8gICAgIERvbVV0aWxzLmhpZGUobm1nLnRyZWVJdGVtRG9tTm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVCbGFua0lucHV0U2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBibGFuayBTZWFyY2ggaGVyZVxyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRpLmlnbm9yZUZvclNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZXhwYW5kYWJsZVxyXG4gICAgICAgICAgICBpZiAodGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgRG9tVXRpbHMuc2hvdyh0aS50cmVlSXRlbURvbU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aS50cmVlSXRlbURvbU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VkXCIpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZCh0aS50cmVlSXRlbURvbU5vZGUsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKHRpLnRyZWVJdGVtRG9tTm9kZSwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISB0aS5pc0V4cGFuZGFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICF0aS5pc1Nob3dNb3JlTGluayAmJiAhdGkuaXNTaG93TGVzc0xpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNFeHRyYUZpbHRlciA9IHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHRyYS1maWx0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXh0cmFGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLmhpZGUodGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLnNob3codGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggdGkuaXNTaG93TW9yZUxpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggdGkuaXNTaG93TGVzc0xpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuaGlkZSh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZU5vdEJsYW5rSW5wdXRTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgZ3JvdXBJdGVtOiBGYWNldFRyZWVJdGVtO1xyXG4gICAgICAgIGxldCBncm91cEl0ZW1NYXRjaGVkOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBjaGlsZEl0ZW1NYXRjaGVkOiBib29sZWFuO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGkgb2YgdGhpcy50cmVlaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRpLmlnbm9yZUZvclNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpLmlzU2hvd0xlc3NMaW5rIHx8IHRpLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4cGFuZGFibGVcclxuICAgICAgICAgICAgaWYgKHRpLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGdyb3VwIGxldmVsIFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJdGVtID0gdGk7XHJcbiAgICAgICAgICAgICAgICBncm91cEl0ZW1NYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjaGlsZEl0ZW1NYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZCh0aS50cmVlSXRlbURvbU5vZGUsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZ3JvdXAgaXMgbWF0Y2hpbmdcclxuICAgICAgICAgICAgICAgIGlmICh0aS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJdGVtTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgZ3JvdXAgaXMgbWF0Y2hpbmcgZXhwYW5kIHRoZSBncm91cFxyXG4gICAgICAgICAgICBpZiAoIGdyb3VwSXRlbU1hdGNoZWQgfHwgY2hpbGRJdGVtTWF0Y2hlZCApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwSXRlbS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKGdyb3VwSXRlbS50cmVlSXRlbURvbU5vZGUsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLnNob3coZ3JvdXBJdGVtLnRyZWVJdGVtRG9tTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRm9yIENoaWxkIExpbmtzXHJcbiAgICAgICAgICAgIGlmICggIXRpLmlzRXhwYW5kYWJsZSAmJiB0aS5ncm91cFRyZWVpdGVtID09PSBncm91cEl0ZW0gKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBncm91cCBtYXRjaGVzIHNldCB0aGUgdmlzaWJsaXR5IHRvIHRydWUgZXhjZXB0IHNob3cgbW9yZSBvciBsZXNzIGxpbmtzXHJcbiAgICAgICAgICAgICAgICBpZiAoIGdyb3VwSXRlbU1hdGNoZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZ3JvdXAgbm90IG1hdGNoZWQgY2hlY2sgaWYgY2hpbGQgbWF0Y2hlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA+IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLmhpZGUodGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2ExMXkvRmFjZXRUcmVlLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IERvbVV0aWxzIH0gZnJvbSBcIi4vRG9tVXRpbHNcIjtcclxuaW1wb3J0IHsgRmFjZXRUcmVlIH0gZnJvbSBcIi4vRmFjZXRUcmVlXCI7XHJcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4vS2V5Q29kZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFRyZWVJdGVtIHtcclxuICAgIHB1YmxpYyB0cmVlOiBGYWNldFRyZWU7XHJcbiAgICBwdWJsaWMgZ3JvdXBUcmVlaXRlbTogRmFjZXRUcmVlSXRlbTtcclxuICAgIHB1YmxpYyBwaW5VblBpbkRvbU5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIHRyZWVJdGVtRG9tTm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdG9wRGVmYXVsdENsaWNrOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzRXhwYW5kYWJsZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaW5Hcm91cDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgLy8gcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGF0YVR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc1JhbmdlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzU2hvd01vcmVMaW5rOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzU2hvd0xlc3NMaW5rOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzTGFiZWw6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaWdub3JlRm9yU2VhcmNoOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50LCB0cmVlOiBGYWNldFRyZWUsIGdyb3VwOiBGYWNldFRyZWVJdGVtKSB7XHJcbiAgICAgICAgbm9kZS50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMudHJlZSA9IHRyZWU7XHJcbiAgICAgICAgdGhpcy5ncm91cFRyZWVpdGVtID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy50cmVlSXRlbURvbU5vZGUgPSBub2RlO1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwgPSBub2RlXHJcbiAgICAgICAgLy8gICAgIC50ZXh0Q29udGVudFxyXG4gICAgICAgIC8vICAgICAudHJpbSgpO1xyXG4gICAgICAgIHRoaXMuc3RvcERlZmF1bHRDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChub2RlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5sYWJlbCA9IG5vZGVcclxuICAgICAgICAvLyAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXHJcbiAgICAgICAgLy8gICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCBmaXJzdEVtID0gdGhpcy50cmVlSXRlbURvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgaWYgKCBmaXJzdEVtICkge1xyXG4gICAgICAgICAgICB0aGlzLnBpblVuUGluRG9tTm9kZSA9IGZpcnN0RW0ucXVlcnlTZWxlY3RvcihcIi5waW4tdW5waW4tc2VsZWN0b3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWQgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYXR0ci1pZFwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF0dHItdmFsdWVcIik7XHJcbiAgICAgICAgdGhpcy5kYXRhVHlwZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyLXR5cGVcIik7XHJcbiAgICAgICAgdGhpcy5pc1JhbmdlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF0dHItaXNSYW5nZVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdGhpcy5pZ25vcmVGb3JTZWFyY2ggPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYXR0ci1pZ25vcmVGb3JTZWFyY2hcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHRoaXMuaXNTaG93TW9yZUxpbmsgPSBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbW9yZS1saW5rXCIpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93TGVzc0xpbmsgPSBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbGVzcy1saW5rXCIpO1xyXG4gICAgICAgIHRoaXMuaXNMYWJlbCA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxhYmVsXCI7XHJcbiAgICAgICAgdGhpcy5pc0V4cGFuZGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5Hcm91cCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICB0aGlzLmluR3JvdXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxlbSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbSA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRyZWVJdGVtRG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIGlmICghdGhpcy50cmVlSXRlbURvbU5vZGUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRyZWVpdGVtXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC50cmVlSXRlbURvbU5vZGVcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC50cmVlSXRlbURvbU5vZGVcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTW91c2VPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZU1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5waW5VblBpbkRvbU5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5waW5VblBpbkRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlVW5QaW5DbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMucGluVW5QaW5Eb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlVW5QaW5LZXl1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSB0aGlzLnRyZWVJdGVtRG9tTm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50cmVlSXRlbURvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgdGhpcy50cmVlSXRlbURvbU5vZGUpO1xyXG4gICAgICAgIHRoaXMudHJlZUl0ZW1Eb21Ob2RlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFeHBhbmRlZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERvbVV0aWxzLmlzQXJpYUV4cGFuZGVkKHRoaXMudHJlZUl0ZW1Eb21Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhhbmRsZVVuUGluQ2xpY2sgPSAoZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbXCJjbGlja1wiXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInVucGluLWljb25cIikpIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSwgdGhpcy5pZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlLmhhbmRsZVBpblVucGluKGV2ZW50LCB0cnVlLCB0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFuZGxlVW5QaW5LZXl1cCA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImtleWRvd25cIl0pID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuU1BBQ0U6XHJcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuUkVUVVJOOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bnBpbi1pY29uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSwgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZS5oYW5kbGVQaW5VbnBpbihldmVudCwgdHJ1ZSwgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVLZXlkb3duID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wia2V5ZG93blwiXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRndCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpc1ByaW50YWJsZUNoYXJhY3RlcihzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9cXFMvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcHJpbnRhYmxlQ2hhcmFjdGVyKGl0ZW06IEZhY2V0VHJlZUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuZXhwYW5kQWxsU2libGluZ0l0ZW1zKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmludGFibGVDaGFyYWN0ZXIoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIoaXRlbSwgY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcERlZmF1bHRDbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlJFVFVSTikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BEZWZhdWx0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRhYmxlQ2hhcmFjdGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLlNQQUNFOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5SRVRVUk46XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxhcHNlVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwYW5kVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNTaG93TW9yZUxpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvd01vcmVWYWx1ZXModGhpcy5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNTaG93TGVzc0xpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvd0xlc3NWYWx1ZXModGhpcy5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNMYWJlbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oYW5kbGVMYWJlbENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLlVQOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5ET1dOOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwYW5kVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSAmJiB0aGlzLmlzRXhwYW5kZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxhcHNlVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmluR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c1RvUGFyZW50SXRlbSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuSE9NRTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5FTkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Rm9jdXNUb0xhc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcmludGFibGVDaGFyYWN0ZXIoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRhYmxlQ2hhcmFjdGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUNsaWNrID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wiY2xpY2tcIl0pID0+IHtcclxuXHJcbiAgICAgICAgLy8gb25seSBwcm9jZXNzIGNsaWNrIGV2ZW50cyB0aGF0IGRpcmVjdGx5IGhhcHBlbmVkIG9uIHRoaXMgdHJlZWl0ZW1cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAmJiAhIERvbVV0aWxzLmlzU2VsZk9yRGVzY2VuZGFudCh0aGlzLnRyZWVJdGVtRG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZCwgZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2VUcmVlaXRlbSh0aGlzLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRUcmVlaXRlbSh0aGlzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNTaG93TW9yZUxpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuc2hvd01vcmVWYWx1ZXModGhpcy5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNTaG93TGVzc0xpbmsgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuc2hvd0xlc3NWYWx1ZXModGhpcy5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNMYWJlbCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgIC5oYW5kbGVMYWJlbENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wiZm9jdXNcIl0pID0+IHtcclxuICAgICAgICBsZXQgbm9kZTogRWxlbWVudCA9IHRoaXMudHJlZUl0ZW1Eb21Ob2RlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0XHJcbiAgICAgICAgICAgIC5hZGQoXCJmb2N1c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wiYmx1clwiXSkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy50cmVlSXRlbURvbU5vZGU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3RcclxuICAgICAgICAgICAgLnJlbW92ZShcImZvY3VzXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlTW91c2VPdmVyID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wibW91c2VvdmVyXCJdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVNb3VzZU91dCA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcIm1vdXNlb3V0XCJdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvYTExeS9GYWNldFRyZWVJdGVtLnRzIiwiZXhwb3J0IGNvbnN0IEtleUNvZGVzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBSRVRVUk46IDEzLFxyXG4gICAgU1BBQ0U6IDMyLFxyXG4gICAgUEFHRVVQOiAzMyxcclxuICAgIFBBR0VET1dOOiAzNCxcclxuICAgIEVORDogMzUsXHJcbiAgICBIT01FOiAzNixcclxuICAgIExFRlQ6IDM3LFxyXG4gICAgVVA6IDM4LFxyXG4gICAgUklHSFQ6IDM5LFxyXG4gICAgRE9XTjogNDAsXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2ExMXkvS2V5Q29kZXMudHMiLCJpbXBvcnQge0ZpbHRlckFjdGlvblR5cGV9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xuaW1wb3J0IHtJRmFjZXRPcHRpb25zfSBmcm9tIFwiLi9JRmFjZXRPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldENvbmZpZ1N0b3JlIHtcbiAgICBwcml2YXRlIG9wdGlvbnM6IElGYWNldE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBkZWZhdWx0RmFjZXRPcHRpb25zOiBJRmFjZXRPcHRpb25zID0ge1xuICAgICAgICBhbmltYXRpb25UaW1lOiAyMDAsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIGZhY2V0Q29uZmlnOiBbXSxcbiAgICAgICAgaWRQcmVmaXg6IE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMCkudG9TdHJpbmcoKSxcbiAgICAgICAgbm9PZkZhY2V0VG9TaG93OiA1LFxuICAgICAgICAvLyBmYWNldHM6IFtdLFxuICAgICAgICBvbkNvbGxhcHNlVG9nZ2xlOiAoY29sbGFwc2VDb25maWc6IFt7a2V5OiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbn1dKSA9PiB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfSxcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgYWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfSxcbiAgICAgICAgb25QaW5VbnBpbjogKGtleTogc3RyaW5nLCBwaW46IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZhY2V0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJRmFjZXRPcHRpb25zIHtyZXR1cm4gdGhpcy5vcHRpb25zOyB9XG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUZhY2V0T3B0aW9ucyk6IElGYWNldE9wdGlvbnMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0RmFjZXRPcHRpb25zLCBpbnB1dE9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmUudHMiLCJpbXBvcnQgeyBJRmlsdGVyT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWcvSUZpbHRlck9wdGlvbnNcIjtcclxuaW1wb3J0IHsgSG90S2V5c0ZpbHRlcnNIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyXCI7XHJcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XHJcbmltcG9ydCB7IEZpbHRlclRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9GaWx0ZXJUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUZpbHRlclRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZpbHRlckNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvbkhhbmRsZXIsIElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZpbHRlckNvbmZpZ1N0b3JlO1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGZpbHRlckVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgaGFuZGxlckNoYWluOiBJRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmlsdGVyQ29uZmlnU3RvcmUob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50ID0galF1ZXJ5KG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmlsdGVyVGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZpbHRlckFjdGlvbkhhbmRsZXIodGhpcy5maWx0ZXJFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSG90S2V5c0ZpbHRlcnNIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLmZvckVhY2goKGhhbmRsZXIpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBiaW5kID0gIChmaWx0ZXJzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmYWNldFN1YkhlYWRlciA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJpbmQoZmlsdGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5odG1sKGZhY2V0U3ViSGVhZGVyKTtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVzdHJveSA9ICAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmZpbHRlckVsZW1lbnQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9mZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyICE9PSB1bmRlZmluZWQgJiYgaGFuZGxlci5kZXJlZ2lzdGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVyZWdpc3RlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0ZpbHRlci50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmNsYXNzIEhvdEtleXNGaWx0ZXJzSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgdGhpcy5mb2N1c09uU2VhcmNoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmdcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVSZWdpc3RlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9mZihcImtleWRvd25cIiwgdGhpcy5mb2N1c09uU2VhcmNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzT25TZWFyY2ggPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5ICAmJiAgZXZlbnQua2V5ID09PSBcInJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuZmFjZXQtc3ViaGVhZGVyIC5yZW1vdmUtYWxsXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0hvdEtleXNGaWx0ZXJzSGFuZGxlcn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmlsdGVyc0hhbmRsZXIudHMiLCJpbXBvcnQgKiBhcyBIYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCI7XHJcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XHJcbmltcG9ydCAqIGFzIEZhY2V0U3ViSGVhZGVyIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXCI7XHJcbmltcG9ydCB7IEZpbHRlckNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9JRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgSUZpbHRlclRlbXBsYXRlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEhlYWRlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHk6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IEZpbHRlckNvbmZpZ1N0b3JlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlciA9IEZhY2V0U3ViSGVhZGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJpbmQoZmlsdGVyczogSUZhY2V0W10pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEZpbHRlcnMgPSB0aGlzLm1lcmdlV2l0aEZhY2V0Q29uZmlnKGZpbHRlcnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyKHtmaWx0ZXJzOiBtZXJnZWRGaWx0ZXJzfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG1lcmdlV2l0aEZhY2V0Q29uZmlnID0gKGZpbHRlcnM6IElGYWNldFtdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVyZ2VkQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0Q29uZmlnIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5maWx0ZXJDb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGZhY2V0Q29uZmlnLmlkID09PSBmYWNldC5pZCkge1xyXG4gICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWNldENvbmZpZy5jb2xsYXBzZWQsXHJcbiAgICAgICAgICAgICAgICBmYWNldFJhbmdlczogZmFjZXQuZmFjZXRSYW5nZXMsXHJcbiAgICAgICAgICAgICAgICBmYWNldFZhbHVlczogZmFjZXQuZmFjZXRWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBpZDogZmFjZXRDb25maWcuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBmYWNldENvbmZpZy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IGZhY2V0Q29uZmlnLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgcGlubmVkOiBmYWNldENvbmZpZy5waW5uZWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBmYWNldENvbmZpZy50eXBlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZWRBcnJheTtcclxuICAgICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnQgZmFjZXQtc3ViaGVhZGVyIGd1aSBmbHVpZC13IGJhc2ljIGN1cnZlZCBwLTVcXFwiIGFyaWEtbGFiZWw9XFxcIkFwcGxpZWQgRmlsdGVyc1xcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBjYXBzXFxcIj5BcHBsaWVkIEZpbHRlcnM8L3NwYW4+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBtLWwtNSByZW1vdmUtYWxsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbGVhciBBbGwgRmlsdGVyc1xcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICA8c3Bhbj5DbGVhciBBbGw8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tbC0xMFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVycyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9zcGFuPlxcbjwvc2VjdGlvbj5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGxhcmdlIGxhYmVscyBmYWNldC1sYWJlbHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTFcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFJhbmdlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsZWFyIGZpbHRlciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBtLTAgbS10LTIgbS1yLTIgcC00IGxhYmVsIGN1cnNvci1wb2ludGVyIHN0cmlrZXRocm91Z2gtaG92ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLWVudHJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxGb3JtYXRMYWJlbEJ5VHlwZS50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkZvcm1hdExhYmVsQnlUeXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsZWFyIFJhbmdlIGZvciBmaWx0ZXIgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBtLTAgbS10LTIgbS1yLTIgcC00IGxhYmVsIGN1cnNvci1wb2ludGVyIHN0cmlrZXRocm91Z2gtaG92ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLWVudHJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6OjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjo6OnRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcUmFuZ2UudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWluIDogZGVwdGgwKSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWF4IDogZGVwdGgwKSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSkse1wibmFtZVwiOlwiUmFuZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWFwcGxpZWQtZmlsdGVycy5oYnNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgcmFuZ2UgPSAobWluLCBtYXgsIHR5cGUpID0+IHtcclxuICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgbGV0IG1pblN0ciA9IG1pbjtcclxuICAgIGxldCBtYXhTdHIgPSBtYXg7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJFZG0uRGF0ZVRpbWVPZmZzZXRcIikge1xyXG4gICAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCAmJiBtaW4gIT09IG51bGwgJiYgbWluICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG1pblN0ciA9IG1vbWVudChtaW4pLmZvcm1hdChcIkRELU1NTS1ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4ICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSBudWxsICYmIG1heCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBtYXhTdHIgPSBtb21lbnQobWF4KS5mb3JtYXQoXCJERC1NTU0tWVlZWVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWluU3RyICE9PSB1bmRlZmluZWQgJiYgbWluU3RyICE9PSBudWxsICYmIG1pblN0ciAhPT0gXCJcIikge1xyXG4gICAgICAgIHN0ciArPSBcIiBmcm9tOiBcIiArIG1pblN0cjtcclxuICAgIH1cclxuICAgIGlmIChtYXhTdHIgIT09IHVuZGVmaW5lZCAmJiBtYXhTdHIgIT09IG51bGwgJiYgbWF4U3RyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgc3RyICs9IFwiIHRvOiBcIiArIG1heFN0cjtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5nZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9SYW5nZS50cyIsImltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi9JRmlsdGVyT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbmZpZ1N0b3JlIHtcclxuICAgIHByaXZhdGUgb3B0aW9uczogSUZpbHRlck9wdGlvbnM7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRmaWx0ZXJPcHRpb25zOiBJRmlsdGVyT3B0aW9ucyA9IHtcclxuICAgICAgICBhbmltYXRpb25UaW1lOiAyMDAsXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICBmaWx0ZXJDb25maWc6IFtdLFxyXG4gICAgICAgIG9uQWxsRmlsdGVyUmVtb3ZlOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZpbHRlckNoYW5nZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBhY3Rpb246IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3QgZm9yIGZpbHRlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElGaWx0ZXJPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUZpbHRlck9wdGlvbnMpOiBJRmlsdGVyT3B0aW9ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRmaWx0ZXJPcHRpb25zLCBpbnB1dE9wdGlvbnMpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZS50cyIsImV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GYWNldFNlYXJjaEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZpbHRlckFjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUGluVW5waW5FdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vU2hvd01vcmVMZXNzSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi4vZXZlbnRoYW5kbGVycy9GYWNldEtleUJvYXJkTmF2aWdhdGlvbkhhbmRsZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBGYWNldENvbnN0YW50cyB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbnN0YW50c1wiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5leHBhbmQtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLlNob3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5TaG93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiW3JvbGU9dHJlZWl0ZW1dXCIsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mT25lKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5ZG93blwiLCBcIltyb2xlPXRyZWVpdGVtXVwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJmb2N1c2luXCIsIFwiW3JvbGU9dHJlZWl0ZW1dXCIsIHRoaXMub25Gb2N1c0luT2ZUcmVlSXRlbSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImZvY3Vzb3V0XCIsIFwiW3JvbGU9dHJlZWl0ZW1dXCIsIHRoaXMub25Gb2N1c091dE9mVHJlZUl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByaXZhdGUgb25Gb2N1c0luT2ZUcmVlSXRlbSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBvVCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBvVC5pcyhcIltyb2xlPXRyZWVpdGVtXVwiKSA/IG9UIDogb1QucGFyZW50cyhcIltyb2xlPXRyZWVpdGVtXVwiKS5maXJzdCgpO1xuICAgICAgICBjb25zdCBsYWJlbElkID0galF1ZXJ5KFwiI1wiICsgdGFyZ2V0LmF0dHIoXCJhcmlhLWxhYmVsbGVkQnlcIikpO1xuICAgICAgICBpZiAoIGxhYmVsSWQgJiYgbGFiZWxJZC5sZW5ndGggKSB7XG4gICAgICAgICAgICBsYWJlbElkLmFkZENsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoXCJmb2N1c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Gb2N1c091dE9mVHJlZUl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb1QgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gb1QuaXMoXCJbcm9sZT10cmVlaXRlbV1cIikgPyBvVCA6IG9ULnBhcmVudHMoXCJbcm9sZT10cmVlaXRlbV1cIikuZmlyc3QoKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGpRdWVyeShcIiNcIiArIHRhcmdldC5hdHRyKFwiYXJpYS1sYWJlbGxlZEJ5XCIpKTtcbiAgICAgICAgaWYgKCBsYWJlbElkICYmIGxhYmVsSWQubGVuZ3RoICkge1xuICAgICAgICAgICAgbGFiZWxJZC5yZW1vdmVDbGFzcyhcImZvY3VzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIEtleSBEb3duXCIpO1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgaWYgKCBbRmFjZXRDb25zdGFudHMuRW50ZXJLZXlDb2RlLCBGYWNldENvbnN0YW50cy5TcGFjZUtleUNvZGUsXG4gICAgICAgICAgICAgICAgRmFjZXRDb25zdGFudHMuVXBLZXlDb2RlLCBGYWNldENvbnN0YW50cy5Eb3duS2V5Q29kZSBdLmluZGV4T2YoY29kZSkgPD0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoW0ZhY2V0Q29uc3RhbnRzLkVudGVyS2V5Q29kZSwgRmFjZXRDb25zdGFudHMuU3BhY2VLZXlDb2RlXS5pbmRleE9mKGNvZGUpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mT25lKGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoW0ZhY2V0Q29uc3RhbnRzLlVwS2V5Q29kZSwgRmFjZXRDb25zdGFudHMuRG93bktleUNvZGVdLmluZGV4T2YoY29kZSkgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVVcEFuZERvd25PZlRyZWVJdGVtKGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZVVwQW5kRG93bk9mVHJlZUl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG4gICAgICAgIGlmIChbRmFjZXRDb25zdGFudHMuVXBLZXlDb2RlLCBGYWNldENvbnN0YW50cy5Eb3duS2V5Q29kZV0uaW5kZXhPZihjb2RlKSA8PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgVXAgYW5kIERvd25cIik7XG4gICAgICAgIGNvbnN0IG9UID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG9ULmlzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpID8gb1QgOiBvVC5wYXJlbnRzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpLmZpcnN0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICggRmFjZXRDb25zdGFudHMuVXBLZXlDb2RlID09PSBjb2RlICkge1xuICAgICAgICAgICAgLy8gRmlyc3QgTGV2ZWxcbiAgICAgICAgICAgIGNvbnN0IHByZXZTaWJsaW5nID0gdGFyZ2V0LnByZXZBbGwoXCI6dmlzaWJsZVwiKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKCBwcmV2U2libGluZy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgcHJldlNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2RGVlcFNpYmxpbmcgPSB0YXJnZXQucGFyZW50KCkucHJldkFsbChcIjp2aXNpYmxlXCIpLmZpcnN0KCkuZmluZChcIltyb2xlPXRyZWVpdGVtXVwiKTtcbiAgICAgICAgICAgIGlmICggcHJldkRlZXBTaWJsaW5nLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBwcmV2RGVlcFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50cyhcIltyb2xlPXRyZWVpdGVtXVwiKS5lYWNoKChpbmRleDogbnVtYmVyLCBwYXJlbnRHcm91cDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBqUXVlcnkocGFyZW50R3JvdXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENoaWxkID0gZ3JvdXAucHJldkFsbChcIjp2aXNpYmxlXCIpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCBwYXJlbnRDaGlsZC5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIEZhY2V0Q29uc3RhbnRzLkRvd25LZXlDb2RlID09PSBjb2RlICkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDaGlsZCA9IHRhcmdldC5maW5kKFwiW3JvbGU9dHJlZWl0ZW1dOnZpc2libGVcIikuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICggZmlyc3RDaGlsZC5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IExldmVsXG4gICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0QWxsKFwiOnZpc2libGVcIikuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICggbmV4dFNpYmxpbmcubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kIExldmVsXG4gICAgICAgICAgICBjb25zdCBuZXh0RGVlcFNpYmxpbmcgPSB0YXJnZXQucGFyZW50KCkubmV4dEFsbChcIjp2aXNpYmxlXCIpLmZpcnN0KCkuZmluZChcIltyb2xlPXRyZWVpdGVtXVwiKTtcbiAgICAgICAgICAgIGlmICggbmV4dERlZXBTaWJsaW5nLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBuZXh0RGVlcFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50cyhcIltyb2xlPXRyZWVpdGVtXVwiKS5lYWNoKChpbmRleDogbnVtYmVyLCBwYXJlbnRHcm91cDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBqUXVlcnkocGFyZW50R3JvdXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENoaWxkID0gZ3JvdXAubmV4dEFsbChcIjp2aXNpYmxlXCIpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCBwYXJlbnRDaGlsZC5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZVZpc2liaWxpdHlPZkFsbCA9IChldmVudCwgaGlkZVNob3c6IFNob3dIaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiAmJiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGNvZGUgIT09IEZhY2V0Q29uc3RhbnRzLkVudGVyS2V5Q29kZVxuICAgICAgICAgICAgICYmIGNvZGUgIT09IEZhY2V0Q29uc3RhbnRzLlNwYWNlS2V5Q29kZSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBoaWRlU2hvdyA9PT0gU2hvd0hpZGUuU2hvdyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIik7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGFyZW50LmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKTtcbiAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBFeHBhbmRDb2xsYXBzZU1hbmFnZXIuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihqUXVlcnkoZWxlbWVudCksIGhpZGVTaG93LCBuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XG4gICAgICAgIGNvbnN0IHB1Ymxpc2g6IEFycmF5PHtrZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufT4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmYWNldC5jb2xsYXBzZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHB1Ymxpc2gucHVzaCh7a2V5OiBmYWNldC5pZCwgY29sbGFwc2VkOiBmYWNldC5jb2xsYXBzZWR9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xsYXBzZVRvZ2dsZShwdWJsaXNoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaGFuZGxlVmlzaWJpbGl0eU9mT25lID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9UID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG9ULmlzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpID8gb1QgOiBvVC5wYXJlbnRzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpLmZpcnN0KCk7XG4gICAgICAgIGNvbnN0IGlzQ29sbGFwc2libGVOb2RlID0gdGFyZ2V0Lmhhc0NsYXNzKFwiY29sbGFwc2libGVcIikgJiYgb1QucGFyZW50cyhcIi5mYWNldC1pdGVtLWhlYWRlclwiKS5sZW5ndGg7XG4gICAgICAgIGlmICggIWlzQ29sbGFwc2libGVOb2RlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQuYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpO1xuICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5hdHRyKFwiZGF0YS1hdHRyLWlkXCIpO1xuICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHRhcmdldC5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgICAgICAgaWYgKCAhaXNDb2xsYXBzZWQgKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcbiAgICAgICAgY29uc3QgcHVibGlzaDogQXJyYXk8e2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmYWNldC5pZCA9PT0gaWQgKSB7XG4gICAgICAgICAgICAgICAgZmFjZXQuY29sbGFwc2VkID0gIWlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgICAgIHB1Ymxpc2gucHVzaCh7a2V5OiBmYWNldC5pZCwgY29sbGFwc2VkOiBmYWNldC5jb2xsYXBzZWR9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xsYXBzZVRvZ2dsZShwdWJsaXNoKTtcbiAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIodGFyZ2V0LCBTaG93SGlkZS5Ub2dnbGUsIG5hbWUpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0QWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIuZmFjZXQtYm9keSAuZmFjZXQtaXRlbS1kZXNjcmlwdGlvbiAuZmFjZXQtdmFsdWUtY2hlY2tib3hcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjo6OlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBjaGVja2VkID8gRmlsdGVyQWN0aW9uVHlwZS5BZGQgOiBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzO1xuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgYWN0aW9uLCB2YWx1ZVsyXSwgZmFsc2UpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRBY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcInRocm90dGxlLWRlYm91bmNlXCI7XHJcbmltcG9ydCB7RmFjZXRDb25maWdTdG9yZX0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5pbXBvcnQge0V4cGFuZENvbGxhcHNlTWFuYWdlcn0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge1Nob3dIaWRlfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0U2VhcmNoSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImtleXVwXCIsIFwiLmZpbHRlci1zZWFyY2gtaW5wdXRcIiwgZGVib3VuY2UoMjUwLCB0aGlzLmhhbmRsZVNlYXJjaCkpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgZWxlbWVudC5uZXh0KCkuc2hvdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAudmFsKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmZhY2V0LWxpc3QgLmZhY2V0LWl0ZW1cIilcclxuICAgICAgICAgICAgICAgIC5lYWNoKChpOiBudW1iZXIsIGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNldEl0ZW0gPSBqUXVlcnkoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZhY2V0SXRlbS5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZhY2V0TmFtZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsdWVCbGFuayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGlzIGVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWVCbGFuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdmFsdWUgd2l0aCBmYWNldCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFZhbHVlQmxhbmsgJiYgZmFjZXRJdGVtLmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXROYW1lTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LW1vcmUtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIsIHNod01vcmVFbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShzaHdNb3JlRWxlbSkuaGFzQ2xhc3MoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaHdNb3JlRWxlbSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaHdNb3JlRWxlbSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goKGluZGV4OiBudW1iZXIsIHNob3dMZXNzTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2hvd0xlc3NMaW5rKS5oYXNDbGFzcyhcImd1aS1oaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHNob3dMZXNzTGluaykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaG93TGVzc0xpbmspLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LW1vcmUtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNob3ctbGVzcy1saW5rXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHZhbHVlcyBhZ2FpbnN0IGNoaWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWNldENoaWxkTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFjaCgoajogbnVtYmVyLCBsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxFbGVtID0galF1ZXJ5KGxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlQmxhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcIi5leHRyYS1maWx0ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmFjZXROYW1lTWF0Y2ggfHwgaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFZhbHVlID0gbGFiZWxFbGVtLmF0dHIoXCJkYXRhLWF0dHItdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxWYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNldENoaWxkTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBoaWRlIEZhY2V0IEl0ZW0gaXRzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyRWxtZW50ID0gZmFjZXRJdGVtLmZpbmQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZmFjZXRJdGVtLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWNldE5hbWVNYXRjaCB8fCBmYWNldENoaWxkTWF0Y2ggfHwgaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0SXRlbS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0SXRlbS5mYWRlT3V0KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwYW5kIENvbGxhcHNlIEZhY2V0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxhcHNlZCB8fCBmYWNldE5hbWVNYXRjaCB8fCBmYWNldENoaWxkTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxtZW50LCBTaG93SGlkZS5TaG93LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBhbmRDb2xsYXBzZU1hbmFnZXIuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihoZWFkZXJFbG1lbnQsIFNob3dIaWRlLkhpZGUsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5uZXh0KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIDEpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldFNlYXJjaEhhbmRsZXIudHMiLCJ2YXIgdGhyb3R0bGUgPSByZXF1aXJlKCcuL3Rocm90dGxlJyk7XG52YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR0aHJvdHRsZTogdGhyb3R0bGUsXG5cdGRlYm91bmNlOiBkZWJvdW5jZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuXG52YXIgdGhyb3R0bGUgPSByZXF1aXJlKCcuL3Rocm90dGxlJyk7XG5cbi8qKlxuICogRGVib3VuY2UgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIERlYm91bmNpbmcsIHVubGlrZSB0aHJvdHRsaW5nLFxuICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG4gKiB2ZXJ5IGJlZ2lubmluZyBvZiBhIHNlcmllcyBvZiBjYWxscywgb3IgYXQgdGhlIHZlcnkgZW5kLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICBkZWxheSAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gIGF0QmVnaW4gICAgICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCBkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2sgKSB7XG5cdHJldHVybiBjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhyb3R0bGUoZGVsYXksIGF0QmVnaW4sIGZhbHNlKSA6IHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgYXRCZWdpbiAhPT0gZmFsc2UpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2RlYm91bmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEZpbHRlckNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsdGVyRWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LXN1YmhlYWRlciAuZmFjZXQtbGFiZWxzIC5sYWJlbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmlzKFwiLmxhYmVsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRzKFwiLmxhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGVsZW1lbnQuYXR0cihcImRhdGEtZmlsdGVyLWVudHJ5XCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsU3RyLnNwbGl0KFwiOjo6XCIpO1xyXG4gICAgICAgICAgICBsZXQgaXNSYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA0ICkge1xyXG4gICAgICAgICAgICAgICAgaXNSYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgRmlsdGVyQWN0aW9uVHlwZS5NaW51cywgdmFsdWVbMl0sIGlzUmFuZ2UpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLnJlbW92ZS1hbGxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkFsbEZpbHRlclJlbW92ZSgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmlsdGVyQWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5oaWRlLWZhY2V0XCIsIHRoaXMuaGlkZUZhY2V0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5zaG93LWZhY2V0XCIsIHRoaXMuc2hvd0ZhY2V0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5oaWRlLWZhY2V0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGVGYWNldChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuc2hvdy1mYWNldFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93RmFjZXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGlkZUZhY2V0ID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgJChcIi5mYWNldC1ib2R5XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmZhY2V0LWNvbGxhcHNlZC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd0ZhY2V0ID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgJChcIi5mYWNldC1jb2xsYXBzZWQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5mYWNldC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9IaWRlRmFjZXRTZWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyIH0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlTWFuYWdlciB9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGluVW5waW5FdmVudEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnBpbi1pY29uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi51bnBpbi1pY29uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIucGluLWljb25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnVucGluLWljb25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVQaW5VbnBpbihldmVudDogYW55LCBwaW46IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWF0dHItaWRcIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcclxuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCBmYWNldC5pZCA9PT0gaWQgKSB7XHJcbiAgICAgICAgICAgICAgICBmYWNldC5waW5uZWQgPSBwaW47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmh0bWwodGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZCh0aGlzLnRlbXBsYXRlU2VydmljZS5nZXREYXRhKCkpKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25QaW5VbnBpbihpZCwgcGluKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvUGluVW5waW5FdmVudEhhbmRsZXIudHMiLCJpbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7SUZhY2V0VGVtcGxhdGVTZXJ2aWNlfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5pbXBvcnQge0V4cGFuZENvbGxhcHNlTWFuYWdlcn0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge1Nob3dIaWRlfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNob3dNb3JlTGVzc0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBcIi5zaG93LW1vcmUtbGlua1wiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1sZXNzLWxpbmtcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJrZXl1cFwiLCBcIi5zaG93LW1vcmUtbGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJrZXl1cFwiLCBcIi5zaG93LWxlc3MtbGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQ6IGFueSwgc2hvd01vcmU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKHNob3dNb3JlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkubmV4dCgpLnNob3coKS5maW5kKFwiYVwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudHMoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAuZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkucHJldigpLnNob3coKS5maW5kKFwiYVwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93TW9yZUxlc3NIYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25zdGFudHMgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnkpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXlkb3duXCIsIFwiLmFycm93a2V5cy1hd2FyZVwiLCB0aGlzLmhhbmRsZUFycm93S2V5cyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZVJlZ2lzdGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vZmYoXCJrZXlkb3duXCIsIFwiLmFycm93a2V5cy1hd2FyZVwiLCB0aGlzLmhhbmRsZUFycm93S2V5cyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUFycm93S2V5cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoIGNvZGUgIT09IEZhY2V0Q29uc3RhbnRzLlVwS2V5Q29kZSAmJiBjb2RlICE9PSBGYWNldENvbnN0YW50cy5Eb3duS2V5Q29kZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmICggIWVsZW1lbnQuaXMoXCIuYXJyb3drZXlzLWF3YXJlXCIpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9jdXNhYmxlO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGVsZW1lbnQucGFyZW50KCk7XHJcbiAgICAgICAgaWYgKCBjb2RlID09PSBGYWNldENvbnN0YW50cy5VcEtleUNvZGUgKSB7XHJcbiAgICAgICAgICAgIGZvY3VzYWJsZSA9IGRpdi5wcmV2KCkuZmluZChcIi5hcnJvd2tleXMtYXdhcmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggY29kZSA9PT0gRmFjZXRDb25zdGFudHMuRG93bktleUNvZGUgKSB7XHJcbiAgICAgICAgICAgIGZvY3VzYWJsZSA9IGRpdi5uZXh0KCkuZmluZChcIi5hcnJvd2tleXMtYXdhcmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnZpZXcuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGZvY3VzYWJsZS5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dNb3JlID0gZGl2Lm5leHQoKS5maW5kKFwic2hvdy1tb3JlLWxpbmtcIikgfHwgZGl2Lm5leHQoKS5maW5kKFwic2hvdy1sZXNzLWxpbmtcIik7XHJcbiAgICAgICAgICAgIGlmICggc2hvd01vcmUgJiYgc2hvd01vcmUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01vcmUuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==