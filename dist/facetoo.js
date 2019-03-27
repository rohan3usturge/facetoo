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
    + "-facet-container\">\r\n    <section class=\"gui h-auto gui-subheading-1 m-0 border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\r\n        <button class=\"gui cursor-pointer expand-all\" \r\n                aria-label=\"Expand All Filters\">\r\n            <i  class=\"gui-icon special rotate-left gui-icon-chevdouble\"></i>\r\n            Expand All\r\n        </button>\r\n        <button class=\"gui cursor-pointer collapse-all\" \r\n                aria-label=\"Collapse All Filters\">\r\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\r\n            Collapse All\r\n        </button>\r\n    </section>\r\n    <section class=\"gui border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\r\n        <div class=\"gui gui-icon input fluid-w h-30\">\r\n            <input class=\"gui input fluid-w gui-subheading-2 filter-search-input\"\r\n                   role=\"search\"\r\n                   aria-label=\"Search Filters\"\r\n                   aria-controls=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-filter-tree "
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-filter-tree "
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-filter-tree\"\r\n                   placeholder=\"Search Filters. Shortcut Alt + F \" />\r\n            <i class=\"gui gui-icon gui-icon-search gui-hidden\"></i>\r\n        </div>\r\n    </section>\r\n    <ul class=\"gui fluid-h facet-list of-auto ofx-hidden m-0 p-0\" \r\n        role=\"tree\"\r\n        id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-filter-tree\"\r\n        aria-relevant=\"all\"\r\n        aria-live=\"assertive\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-pinned.hbs */ 18),depth0,{"name":"facet-pinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-unpinned.hbs */ 25),depth0,{"name":"facet-unpinned","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
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
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

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
    + " this filter.\"\r\n                class=\"gui cursor-pointer filter-label gui-subheading-1 no-wrap text-shorten m-0\">\r\n            <input  class=\"gui facet-value-checkbox cursor-pointer m-l-0\" \r\n                    id=\""
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
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.root)) && stack1.showCount),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </label>\r\n    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"gui gui-subheading-1 m-0\">("
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n";
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
        this.bind = function (facets) {
            _this.templateService.setData(facets);
            _this.reRender();
        };
        this.reRender = function () {
            setTimeout(function () {
                var data = _this.templateService.getData();
                var fullFacet = _this.templateService.bind(data);
                _this.facetElement.innerHTML = fullFacet;
                _this.facetTree = new FacetTree_1.FacetTree(_this.configStore.Options.containerElement, _this, _this.configStore);
                _this.facetTree.init();
                _this.setFocusToLastElement();
            }, 1);
        };
        this.setFacetConfig = function (facetConfig) {
            _this.configStore.Options.facetConfig = facetConfig;
        };
        this.setFocusableElement = function (element) {
            if (!element) {
                return;
            }
            _this.focusableElement = element;
        };
        this.destroy = function () {
            _this.facetTree.destroy();
        };
        this.setFocusToLastElement = function () {
            var newFocusable;
            if (_this.focusableElement) {
                if (_this.focusableElement.classList.contains("pin-unpin-selector")) {
                    var id_1 = $(_this.focusableElement).attr("data-attr-id");
                    var tree = $("[role=tree]");
                    var pinSelectors = tree.find(".pin-unpin-selector");
                    pinSelectors.each(function (index, element) {
                        var eachI = $(element);
                        var eachIattr = eachI.attr("data-attr-id");
                        if (eachIattr === id_1) {
                            newFocusable = eachI;
                            return false;
                        }
                    });
                    newFocusable.focus();
                }
                else {
                    var id_2 = $(_this.focusableElement).attr("data-attr-id");
                    var value_1 = $(_this.focusableElement).attr("data-attr-value");
                    $(".filter-label").each(function (index, element) {
                        var eachLabel = $(element);
                        var eachLabelId = eachLabel.attr("data-attr-id");
                        var eachLabelValue = eachLabel.attr("data-attr-value");
                        if (eachLabelId === id_2 && eachLabelValue === value_1) {
                            newFocusable = eachLabel;
                            return false;
                        }
                    });
                    _this.facetTree.setFocusToNodeItem(newFocusable[0]);
                }
            }
            _this.focusableElement = null;
        };
        this.configStore = new FacetConfigStore_1.FacetConfigStore(options);
        this.facetElement = options.containerElement;
        this.templateService = new FacetTemplateService_1.FacetTemplateService(this.configStore);
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
        favorites.sort(this.configStore.Options.facetSortingFn);
        nonFavorites.sort(this.configStore.Options.facetSortingFn);
        var noOfFacetToShow = this.configStore.Options.noOfFacetToShow;
        var idPrefix = this.configStore.Options.idPrefix;
        var showCount = this.configStore.Options.showCount;
        return this.tempateFunctionForFacetMain({ idPrefix: idPrefix, favorites: favorites, nonFavorites: nonFavorites, noOfFacetToShow: noOfFacetToShow, showCount: showCount });
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
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 3),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui fluid-h \">\r\n"
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

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"Pinned Filters\"\r\n    data-attr-value=\"Pinned Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    aria-atomic=\"true\"\r\n    aria-relevant=\"all\"\r\n    role=\"treeitem\"\r\n    id=\""
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
    + "\" \r\n                        class=\"gui gui-icon selectable pin-unpin-selector gui-icon-unpin m-t-5 m-r-10 unpin-icon cursor-pointer\" \r\n                        title=\"Unpin filter\"\r\n                        aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " pinned filter. Press enter or space to unpin filter\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-label.hbs */ 7),depth0,{"name":"facet-label","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
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
        return "<li class=\"gui m-b-5 m-t-5\">\n                <a  tabindex=\"0\" role=\"treeitem\"\n                    data-attr-id=\"{{id}}\"\n                    data-attr-value=\"Show More\"\n                    aria-label=\"Press enter to show " + (index.length - v2) + " more values\"\n                    class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\"\n                >\n                    " + (index.length - v2) + " More\n                </a>\n            </li>\n            <li class=\"gui m-b-5 m-t-5 gui-hidden\">\n                <a  tabindex=\"0\"\n                    role=\"treeitem\"\n                    data-attr-value=\"Show Less\"\n                    aria-label=\"Press enter to show less values\"\n                    class=\"gui caps gui-hidden gui-body-2 simple show-less-link cursor-pointer p-0 m-t-3\"\n                >\n                     Show Less\n                </a>\n            </li>";
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

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"All Filters\"\r\n    data-attr-value=\"All Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    aria-relevant=\"all\"\r\n    aria-atomic=\"true\"\r\n    role=\"treeitem\"\r\n    id=\""
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
    + "\" \r\n                        class=\"gui gui-icon selectable pin-unpin-selector gui-icon-pin m-t-5 m-r-10 pin-icon cursor-pointer\" \r\n                        aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " UnPinned filter. Press enter or space to pin filter\"\r\n                        title=\"Pin filter\"\r\n                        tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </span>\r\n            </div>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-label.hbs */ 7),depth0,{"name":"facet-label","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-down expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n";
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
        this.setFocusToNodeItem = function (node) {
            for (var _i = 0, _a = _this.treeitems; _i < _a.length; _i++) {
                var ti = _a[_i];
                if (ti.treeItemDomNode === node) {
                    ti.treeItemDomNode.tabIndex = 0;
                    ti
                        .treeItemDomNode
                        .focus();
                }
                else {
                    ti.treeItemDomNode.tabIndex = -1;
                }
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
        this.handleLabelChange = function (currentItem, event) {
            var node = currentItem.treeItemDomNode;
            var forId = node.htmlFor;
            var input = (document.getElementById(forId) || node.firstElementChild);
            var checked = input.checked;
            var action = checked ? FilterActionType_1.FilterActionType.Add : FilterActionType_1.FilterActionType.Minus;
            currentItem.treeItemDomNode.setAttribute("aria-selected", checked.toString());
            _this.facet.setFocusableElement(currentItem.treeItemDomNode);
            _this.configStore.Options.onFilterChange(currentItem.id, currentItem.label, action, currentItem.dataType, currentItem.isRange);
            event.stopPropagation();
            event.preventDefault();
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
            _this.facet.setFocusableElement(event.target);
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
                // If group is matching expand the group
                if (groupItemMatched || childItemMatched) {
                    groupItem.isVisible = true;
                    DomUtils_1.DomUtils.setAriaExpanded(groupItem.treeItemDomNode, "true");
                    DomUtils_1.DomUtils.show(groupItem.treeItemDomNode);
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
            if (_this.isLabel) {
                var checkBox = _this
                    .treeItemDomNode
                    .firstElementChild;
                checkBox.onchange = _this.handleLabelChange.bind(_this);
            }
            if (_this.pinUnPinDomNode) {
                _this.pinUnPinDomNode.addEventListener("click", _this.handleUnPinClick);
                _this.pinUnPinDomNode.addEventListener("keydown", _this.handleUnPinKeyup);
            }
        };
        this.handleLabelChange = function (event) {
            _this
                .tree
                .handleLabelChange(_this, event);
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
        this.isPrintableCharacter = function (str) {
            return str.length === 1 && str.match(/\S/);
        };
        this.printableCharacter = function (item, char) {
            if (char === "*") {
                item
                    .tree
                    .expandAllSiblingItems(item);
            }
            else {
                if (_this.isPrintableCharacter(char)) {
                    item
                        .tree
                        .setFocusByFirstCharacter(item, char);
                }
            }
        };
        this.handleKeydown = function (event) {
            if (!_this.isKeyCodeValid(event.keyCode)) {
                return;
            }
            var tgt = event.currentTarget;
            var flag = true;
            var char = event.key;
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
                    if (_this.isPrintableCharacter(char)) {
                        _this.printableCharacter(_this, char);
                    }
                }
            }
            else {
                switch (event.keyCode) {
                    case KeyCodes_1.KeyCodes.SPACE:
                    case KeyCodes_1.KeyCodes.RETURN:
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
                        }
                        if (_this.isLabel) {
                            var checkBox = _this
                                .treeItemDomNode
                                .firstElementChild;
                            checkBox.click();
                        }
                        break;
                    case KeyCodes_1.KeyCodes.UP:
                        _this
                            .tree
                            .setFocusToPreviousItem(_this);
                        break;
                    case KeyCodes_1.KeyCodes.DOWN:
                        _this
                            .tree
                            .setFocusToNextItem(_this);
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
                        break;
                    case KeyCodes_1.KeyCodes.LEFT:
                        if (_this.isExpandable && _this.isExpanded()) {
                            _this
                                .tree
                                .collapseTreeitem(_this, true);
                        }
                        else {
                            if (_this.inGroup) {
                                _this
                                    .tree
                                    .setFocusToParentItem(_this);
                            }
                        }
                        break;
                    case KeyCodes_1.KeyCodes.HOME:
                        _this
                            .tree
                            .setFocusToFirstItem();
                        break;
                    case KeyCodes_1.KeyCodes.END:
                        _this
                            .tree
                            .setFocusToLastItem();
                        break;
                    default:
                        if (_this.isPrintableCharacter(char)) {
                            _this.printableCharacter(_this, char);
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
            var flag = true;
            if (_this.isLabel) {
                flag = false;
            }
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
            }
            if (flag) {
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
        this.isKeyCodeValid = function (code) {
            var valid = false;
            for (var prop in KeyCodes_1.KeyCodes) {
                if (KeyCodes_1.KeyCodes.hasOwnProperty(prop) && KeyCodes_1.KeyCodes[prop] === code) {
                    valid = true;
                    break;
                }
            }
            return valid;
        };
        node.tabIndex = -1;
        this.tree = tree;
        this.groupTreeitem = group;
        this.treeItemDomNode = node;
        this.stopDefaultClick = false;
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
    DOWN: 40,
    END: 35,
    HOME: 36,
    LEFT: 37,
    PAGEDOWN: 34,
    PAGEUP: 33,
    RETURN: 13,
    RIGHT: 39,
    SPACE: 32,
    UP: 38,
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
            facetSortingFn: function (prev, next) {
                if (prev.order === undefined) {
                    return -1;
                }
                if (next.order === undefined) {
                    return 1;
                }
                return prev.order - next.order;
            },
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
            showCount: true,
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
var ShowMoreLessFiltersHandler_1 = __webpack_require__(/*! ../eventhandlers/ShowMoreLessFiltersHandler */ 32);
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 33);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 36);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 37);
var Filter = /** @class */ (function () {
    function Filter(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (filters) {
            setTimeout(function () {
                var facetSubHeader = _this.templateService.bind(filters);
                _this.filterElement.html(facetSubHeader);
                _this.handlerChain.forEach(function (handler) {
                    if (handler !== undefined && handler.onBind !== undefined) {
                        handler.onBind();
                    }
                });
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
        this.handlerChain.push(new ShowMoreLessFiltersHandler_1.ShowMoreLessFiltersHandler(this.filterElement));
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
/*!************************************************************!*\
  !*** ./src/ts/eventhandlers/ShowMoreLessFiltersHandler.ts ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowMoreLessFiltersHandler = /** @class */ (function () {
    function ShowMoreLessFiltersHandler(element) {
        var _this = this;
        this.element = element;
        this.showLessLinkClass = ".show-less-filters-link";
        this.showMoreLinkClass = ".show-more-filters-link";
        this.facetContainerClass = ".facet-applied-filters";
        this.maxHeightForContainer = 37;
        this.toggleFacetSection = function (show) {
            var showLessLink = _this.element.find(_this.showLessLinkClass);
            var showMoreLink = _this.element.find(_this.showMoreLinkClass);
            var facetContainer = _this.element.find(_this.facetContainerClass);
            if (show) {
                facetContainer.css("max-height", "");
                showLessLink.removeClass("gui-hidden");
                showMoreLink.addClass("gui-hidden");
            }
            else {
                facetContainer.css("max-height", _this.maxHeightForContainer + "px");
                showLessLink.addClass("gui-hidden");
                showMoreLink.removeClass("gui-hidden");
            }
        };
    }
    ShowMoreLessFiltersHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this
            .element
            .on("click", this.showMoreLinkClass, function (event) {
            _this.showMoreLessFilters(event, true);
        });
        this
            .element
            .on("click", this.showLessLinkClass, function (event) {
            _this.showMoreLessFilters(event, false);
        });
        this
            .element
            .on("keyup", this.showMoreLinkClass, function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.showMoreLessFilters(event, true);
        });
        this
            .element
            .on("keyup", this.showLessLinkClass, function (event) {
            var code = event.keyCode || event.which;
            if (code !== 13 && code !== 32) {
                return;
            }
            _this.showMoreLessFilters(event, false);
        });
    };
    ShowMoreLessFiltersHandler.prototype.onResize = function () {
        // Ignore
    };
    ShowMoreLessFiltersHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    ShowMoreLessFiltersHandler.prototype.onBind = function () {
        var facetContainer = this.element.find(this.facetContainerClass);
        var showLessLink = this.element.find(this.showLessLinkClass);
        var showMoreLink = this.element.find(this.showMoreLinkClass);
        var currentHeight = facetContainer.height();
        if (currentHeight > this.maxHeightForContainer) {
            facetContainer.css("max-height", this.maxHeightForContainer + "px");
            showLessLink.addClass("gui-hidden");
            showMoreLink.removeClass("gui-hidden");
        }
        else {
            facetContainer.css("max-height", "");
            showLessLink.addClass("gui-hidden");
            showMoreLink.addClass("gui-hidden");
        }
    };
    ShowMoreLessFiltersHandler.prototype.showMoreLessFilters = function (event, showMore) {
        this.toggleFacetSection(showMore);
        event.stopPropagation();
    };
    return ShowMoreLessFiltersHandler;
}());
exports.ShowMoreLessFiltersHandler = ShowMoreLessFiltersHandler;


/***/ }),
/* 33 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 34);
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
/* 34 */
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

  return "<section class=\"content facet-subheader facet-applied-filters gui flex fluid-w basic curved p-5\" aria-label=\"Applied Filters\">\r\n    <div class=\"gui m-0 m-l-5 gui-subheading-2 caps no-wrap\">Applied Filters</div>\r\n    <div class=\"gui m-l-5 no-wrap\">\r\n        <button class=\"gui remove-all\" aria-label=\"Clear All Filters\">\r\n            <i class=\"gui-icon gui-icon-cancel\"></i>\r\n            <span>Clear All</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"gui m-l-5 of-hidden\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"gui no-wrap m-l-2\">\r\n        <a\r\n            tabindex=\"0\"\r\n            data-attr-value=\"Show More\"\r\n            aria-label=\"Press enter to show more values\"\r\n            class=\"gui caps gui-body-2 simple show-more-filters-link cursor-pointer p-0 m-t-3\"\r\n        >\r\n            Show More\r\n        </a>\r\n        <a\r\n            tabindex=\"0\"\r\n            data-attr-value=\"Show Less\"\r\n            aria-label=\"Press enter to show less values\"\r\n            class=\"gui caps gui-body-2 simple show-less-filters-link cursor-pointer p-0 m-t-3\"\r\n        >\r\n            Show Less\r\n        </a>\r\n    </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <span class=\"gui m-r-5\">\r\n            <span class=\"gui large labels facet-labels\">\r\n                <span class=\"gui gui-subheading-1\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetRanges : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\r\n        </span>\r\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button aria-label=\"Clear filter "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + " of "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" \r\n                        data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\r\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/FormatLabelByType.ts */ 8)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].type : depths[1]),(depth0 != null ? depth0.label : depth0),{"name":"FormatLabelByType","hash":{},"data":data}))
    + "\r\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\r\n                </button>\r\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button aria-label=\"Clear Range for filter "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                        class=\"gui m-0 m-t-2 m-r-2 p-4 label cursor-pointer strikethrough-hover\" \r\n                        data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":::"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":::"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + ":::true\">\r\n                    "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Range.ts */ 35)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.min : depth0),(depth0 != null ? depth0.max : depth0),(depths[1] != null ? depths[1].type : depths[1]),{"name":"Range","hash":{},"data":data}))
    + "\r\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\r\n                </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
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
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 38));
__export(__webpack_require__(/*! ./FacetActionHandler */ 39));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 40));
__export(__webpack_require__(/*! ./FilterActionHandler */ 43));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 44));
__export(__webpack_require__(/*! ./PinUnpinEventHandler */ 45));
__export(__webpack_require__(/*! ./ShowMoreLessHandler */ 46));
__export(__webpack_require__(/*! ../eventhandlers/FacetKeyBoardNavigationHandler */ 47));


/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ 41);
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
            .on("keyup", ".filter-search-input", throttle_debounce_1.debounce(250, true, this.handleSearch));
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
/* 41 */
/*!*************************************************!*\
  !*** ./node_modules/throttle-debounce/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! ./throttle */ 13);
var debounce = __webpack_require__(/*! ./debounce */ 42);

module.exports = {
	throttle: throttle,
	debounce: debounce
};


/***/ }),
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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