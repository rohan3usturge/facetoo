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
    var stack1;

  return "<div class=\"gui of-hidden min-w-50 w-auto fluid-h flex column container\" id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-facet-container\">\n    <section class=\"gui h-auto gui-subheading-1 m-0 border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <button class=\"gui cursor-pointer expand-all\" \n                aria-label=\"Expand All Filters\">\n            <i  class=\"gui-icon special rotate-left gui-icon-chevdouble\"></i>\n            Expand All\n        </button>\n        <button class=\"gui cursor-pointer collapse-all\" \n                aria-label=\"Collapse All Filters\">\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\n            Collapse All\n        </button>\n    </section>\n    <section class=\"gui border-bottom light p-r-10 p-t-5 p-b-5 p-l-10\">\n        <div class=\"gui gui-icon input fluid-w h-30\">\n            <input class=\"gui input fluid-w gui-subheading-2 filter-search-input\"\n                   placeholder=\"Search Filters. Shortcut Alt + F \" />\n            <i class=\"gui gui-icon gui-icon-search gui-hidden\"></i>\n        </div>\n    </section>\n    <ul class=\"gui fluid-h facet-list of-auto ofx-hidden m-0 p-0\" \n        role=\"tree\"\n        aria-live=\"polite\">\n"
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 19)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
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
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 24)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
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

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"Pinned Filters\"\r\n    data-attr-value=\"Pinned Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    role=\"treeitem\"\r\n    id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-facets-container\">\r\n    <h6 class=\"gui gui-subheading-2 caps bold-500 flex m-b-10 jc-sb\">\r\n        PINNED FILTERS\r\n        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n    </h6>\r\n    <ul aria-labelledby=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-pinned-facets-container\" class=\"gui m-0 p-0\" role=\"group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.favorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <li aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n            class=\"gui item facet-item border-bottom light p-r-10 p-t-5 p-b-5 p-l-5 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\"\r\n            role=\"treeitem\"\r\n            aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n            data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\" id=\"facet-item-header-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\r\n                <span class=\"gui primary gui-subheading-1 caps m-0 cursor-pointer\" title=\""
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
            + "aria-label=\"Press enter to show " + (index.length - v2) + " more values\" "
            + "class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\">"
            + (index.length - v2)
            + " More </a></li>"
            + "<li class=\"gui m-b-5 m-t-5 gui-hidden\">"
            + "<a tabindex=\"0\" role=\"treeitem\" "
            + "aria-label=\"Press enter to show less values\" "
            + "class=\"gui caps gui-body-2 simple show-less-link cursor-pointer p-0 m-t-3\">"
            + "Show Less</a></li>";
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

  return "<li class=\"gui m-0 p-r-10 p-t-5 p-b-5 p-l-10\" \r\n    aria-label=\"All Filters\"\r\n    data-attr-value=\"All Filters\"\r\n    data-attr-ignoreForSearch=\"true\"\r\n    aria-expanded=\"true\"\r\n    role=\"treeitem\"\r\n    id=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-facets-container\">\r\n    <h6 class=\"gui gui-subheading-2 caps bold-500 m-b-10 flex jc-sb\">\r\n        All FILTERS\r\n        <i class=\"gui gui-icon selectable gui-icon-chevron-up expansion-icon m-t-5 m-r-10 cursor-pointer\"></i>\r\n    </h6>\r\n    <ul aria-labelledby=\""
    + alias2(alias1((depth0 != null ? depth0.idPrefix : depth0), depth0))
    + "-unpinned-facets-container\" class=\"gui m-0 p-0\" role=\"group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.nonFavorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <li aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n            class=\"gui item facet-item border-bottom light p-r-10 p-t-5 p-b-5 p-l-5 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 4)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\"\r\n            role=\"treeitem\"\r\n            aria-expanded=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Boolean.ts */ 5)).call(alias3,(depth0 != null ? depth0.collapsed : depth0),{"name":"Boolean","hash":{},"data":data}))
    + "\"\r\n            data-attr-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n            data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n            <div class=\"facet-item-header fluid gui item flex jc-sb\" id=\"facet-item-header-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\r\n                <span class=\"gui primary gui-subheading-1 caps m-0 cursor-pointer\" title=\""
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
                        if (ti.isShowLessLink || ti.isShowMoreLink) {
                            ti.isVisible = false;
                            DomUtils_1.DomUtils.hide(ti.treeItemDomNode.parentElement);
                        }
                        else {
                            ti.isVisible = true;
                            DomUtils_1.DomUtils.show(ti.treeItemDomNode.parentElement);
                        }
                    }
                    else {
                        // If group not matched check if child matches
                        // Skipp Show more or less links
                        if (ti.isShowMoreLink || ti.isShowLessLink) {
                            continue;
                        }
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
        this.pinUnPinDomNode = this.treeItemDomNode.firstElementChild.querySelector(".pin-unpin-selector");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZWQxZjQ1YzIyZTU2NzQzNWViYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2xsYXBzZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbGFiZWwuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Gb3JtYXRMYWJlbEJ5VHlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYTExeS9Eb21VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZhY2V0Q29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGhyb3R0bGUtZGVib3VuY2UvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1waW5uZWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9DaGVja0xlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQXBwbHlSZW1vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9IaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC11bnBpbm5lZC5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2ExMXkvRmFjZXRUcmVlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9hMTF5L0ZhY2V0VHJlZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2ExMXkvS2V5Q29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmlsdGVyc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWFwcGxpZWQtZmlsdGVycy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1JhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldFNlYXJjaEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1BpblVucGluRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL1Nob3dNb3JlTGVzc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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UUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hGLEVBQUUsQ0FBQyxDQUFFLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUF6Q3FDLENBQUM7SUFFaEMsMkRBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ00saURBQVEsR0FBZjtRQUNJLDhDQUE4QztJQUNsRCxDQUFDO0lBQ00sd0RBQWUsR0FBdEIsVUFBdUIsS0FBVTtRQUM3Qiw4Q0FBOEM7SUFDbEQsQ0FBQztJQWdDTCxxQ0FBQztBQUFELENBQUM7QUE1Q1ksd0VBQThCIiwiZmlsZSI6ImZhY2V0b28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCIsIFwibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wibW9tZW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJlZDFmNDVjMjJlNTY3NDM1ZWJjIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcbiAgICBBZGQgPSBcIkFkZFwiLFxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCBlbnVtIFNob3dIaWRlIHtcclxuICAgIFNob3csXHJcbiAgICBIaWRlLFxyXG4gICAgVG9nZ2xlLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG9mLWhpZGRlbiBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItZmFjZXQtY29udGFpbmVyXFxcIj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBoLWF1dG8gZ3VpLXN1YmhlYWRpbmctMSBtLTAgYm9yZGVyLWJvdHRvbSBsaWdodCBwLXItMTAgcC10LTUgcC1iLTUgcC1sLTEwXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBleHBhbmQtYWxsXFxcIiBcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiRXhwYW5kIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSAgY2xhc3M9XFxcImd1aS1pY29uIHNwZWNpYWwgcm90YXRlLWxlZnQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIEV4cGFuZCBBbGxcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGNvbGxhcHNlLWFsbFxcXCIgXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkNvbGxhcHNlIEFsbCBGaWx0ZXJzXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gc3BlY2lhbCByb3RhdGUtcmlnaHQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIENvbGxhcHNlIEFsbFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImd1aSBib3JkZXItYm90dG9tIGxpZ2h0IHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGlucHV0IGZsdWlkLXcgaC0zMFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgaW5wdXQgZmx1aWQtdyBndWktc3ViaGVhZGluZy0yIGZpbHRlci1zZWFyY2gtaW5wdXRcXFwiXFxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggRmlsdGVycy4gU2hvcnRjdXQgQWx0ICsgRiBcXFwiIC8+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1zZWFyY2ggZ3VpLWhpZGRlblxcXCI+PC9pPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHVsIGNsYXNzPVxcXCJndWkgZmx1aWQtaCBmYWNldC1saXN0IG9mLWF1dG8gb2Z4LWhpZGRlbiBtLTAgcC0wXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcInRyZWVcXFwiXFxuICAgICAgICBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LXBpbm5lZC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LXBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC11bnBpbm5lZC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LXVucGlubmVkXCIsXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgICAgICBcIixcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvdWw+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1ib2R5Lmhic1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGNvbGxhcHNlZCA9ICh2YWx1ZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gXCIgY29sbGFwc2VkIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xsYXBzZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sbGFwc2VkLnRzIiwiY29uc3QgQm9vbGVhblZhbHVlID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5WYWx1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Cb29sZWFuLnRzIiwiaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IHNlbGVjdGVkRmlsdGVyc0NvdW50ID0gKGZhY2V0VmFsdWVzOiBJRmFjZXRWYWx1ZVtdKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBpZiAoZmFjZXRWYWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzICE9PSBudWxsXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0VmFsdWUgb2YgZmFjZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFZhbHVlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gXCJcIiA6IFwiPHNwYW4gY2xhc3M9XFxcImd1aS1ib2R5LTJcXFwiPihcIiArIGluZGV4ICsgXCIpPC9zcGFuPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRGaWx0ZXJzQ291bnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIiAgICA8bGkgY2xhc3M9XFxcImd1aSBpdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrTGVuZ3RoLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBkYXRhLmluZGV4KSwoZGVwdGhzWzJdICE9IG51bGwgPyBkZXB0aHNbMl0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzJdKSx7XCJuYW1lXCI6XCJDaGVja0xlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgYXJpYS1sYWJlbD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCAgZGF0YS1hdHRyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLWF0dHItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1hdHRyLXR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcm9sZT1cXFwidHJlZWl0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIoXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgZm9yPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCItY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkZpbHRlciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgaW4gXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLm5hbWUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCIgaGFzIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiByZWNvcmRzLiBQcmVzcyBzcGFjZWJhciB0byBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBcHBseVJlbW92ZS50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJBcHBseVJlbW92ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIHRoaXMgZmlsdGVyLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBndWktc3ViaGVhZGluZy0xIG5vLXdyYXAgdGV4dC1zaG9ydGVuIG0tMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgZmFjZXQtdmFsdWUtY2hlY2tib3ggY3Vyc29yLXBvaW50ZXIgbS1sLTBcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZFByZWZpeCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIi1jaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxGb3JtYXRMYWJlbEJ5VHlwZS50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCkse1wibmFtZVwiOlwiRm9ybWF0TGFiZWxCeVR5cGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBtLTBcXFwiPihcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpPC9zcGFuPlxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgPC9saT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbiBndWkgZmFjZXQtaXRlbS1kZXNjcmlwdGlvbiBtLXQtMTAgcC1sLTUgcC0wIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcSGlkZGVuLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx0cnVlLHtcIm5hbWVcIjpcIkhpZGRlblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgcm9sZT1cXFwiZ3JvdXBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTaG93TW9yZUxlc3NMaW5rLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5ub09mRmFjZXRUb1Nob3cgOiBkZXB0aHNbMV0pLHtcIm5hbWVcIjpcIlNob3dNb3JlTGVzc0xpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG48L3VsPlwiO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1sYWJlbC5oYnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBmb3JtYXRMYWJlbEJ5VHlwZSA9ICh0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChtb21lbnQgJiYgdHlwZSA9PT0gXCJFZG0uRGF0ZVRpbWVPZmZzZXRcIikge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKHZhbHVlKS5mb3JtYXQoXCJERC1NTU0tWVlZWSBoaDptbSBhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIHZhbHVlID09PSBcIkFzc2lnbmVkXCIgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNvbW1pdHRlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHZhbHVlID09PSBcIkNvbXBsZXRlXCIgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFzc2lnbmVkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExhYmVsQnlUeXBlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Zvcm1hdExhYmVsQnlUeXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbVV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNEZXNjZW5kYW50ID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzU2VsZk9yRGVzY2VuZGFudCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwYXJlbnQgPT09IGNoaWxkICkge3JldHVybiB0cnVlOyB9XHJcbiAgICAgICAgcmV0dXJuIERvbVV0aWxzLmlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNIaWRkZW4gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgPT09IG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXJpYUhpZGRlbiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEFyaWFIaWRkZW4gPSAobm9kZTogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgdGhyb3cgRXJyb3IoXCJEb21VdGlscy5zZXRBcmlhSGlkZGVuIC0gTm9kZSBjYW5ub3QgYmUgb2YgbnVsbCBvciB1bmRlZmluZWRcIik7IH1cclxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBcmlhRXhwYW5kZWQgPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEFyaWFFeHBhbmRlZCA9IChub2RlOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghbm9kZSkgeyB0aHJvdyBFcnJvcihcIkRvbVV0aWxzLnNldEFyaWFFeHBhbmRlZCAtIE5vZGUgY2Fubm90IGJlIG9mIG51bGwgb3IgdW5kZWZpbmVkXCIpOyB9XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvdyA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbm9kZSkgeyB0aHJvdyBFcnJvcihcIkRvbVV0aWxzLnNob3cgLSBOb2RlIGNhbm5vdCBiZSBvZiBudWxsIG9yIHVuZGVmaW5lZFwiKTsgfVxyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImd1aS1oaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhpZGUgPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIW5vZGUpIHsgdGhyb3cgRXJyb3IoXCJEb21VdGlscy5oaWRlIC0gTm9kZSBjYW5ub3QgYmUgb2YgbnVsbCBvciB1bmRlZmluZWRcIik7IH1cclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJndWktaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyB0b2dnbGVMYWJlbCA9IChub2RlOiBIVE1MTGFiZWxFbGVtZW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7IHRocm93IEVycm9yKFwiRG9tVXRpbHMudG9nZ2xlTGFiZWwgLSBOb2RlIGNhbm5vdCBiZSBvZiBudWxsIG9yIHVuZGVmaW5lZFwiKTsgfVxyXG4gICAgICAgIGNvbnN0IGZvcklkID0gbm9kZS5odG1sRm9yO1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcklkKSB8fCBub2RlLmZpcnN0RWxlbWVudENoaWxkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSAhaW5wdXQuY2hlY2tlZDtcclxuICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgb2ZmID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9hMTF5L0RvbVV0aWxzLnRzIiwiZXhwb3J0IGNsYXNzIEZhY2V0Q29uc3RhbnRzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgVXBLZXlDb2RlOiBudW1iZXIgPSAzODtcclxuICAgIHB1YmxpYyBzdGF0aWMgRG93bktleUNvZGU6IG51bWJlciA9IDQwO1xyXG4gICAgcHVibGljIHN0YXRpYyBFbnRlcktleUNvZGU6IG51bWJlciA9IDEzO1xyXG4gICAgcHVibGljIHN0YXRpYyBTcGFjZUtleUNvZGU6IG51bWJlciA9IDI4O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvY29uZmlnL0ZhY2V0Q29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgU2hvd0hpZGUgfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGFuZENvbGxhcHNlTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDb250cm9sVmlzaWJpbGl0eU9mRmlsdGVyID0gKHRhcmdldDogSlF1ZXJ5LCBzaG93SGlkZTogU2hvd0hpZGUsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gdGFyZ2V0LmZpbmQoXCIuZXhwYW5zaW9uLWljb25cIikgO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVZpc2libGUgPSBpY29uRWxlbWVudC5oYXNDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XHJcbiAgICAgICAgaWYgKFNob3dIaWRlLlRvZ2dsZSAhPT0gc2hvd0hpZGUgJiYgKChjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5TaG93KSB8fFxyXG4gICAgICAgICAgICAoIWN1cnJlbnRseVZpc2libGUgJiYgc2hvd0hpZGUgPT09IFNob3dIaWRlLkhpZGUpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3VycmVudGx5VmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0YXJnZXQuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlRG93bigyMDApO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgICAgICB0YXJnZXRcclxuICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJQcmVzcyBlbnRlciBvciBzcGFjZSB0byBjb2xsYXBzZSBmaWx0ZXIgdmFsdWVzIGZvciBcIiArIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5maW5kKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIikuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50LmFkZENsYXNzKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xyXG4gICAgICAgICAgICB0YXJnZXRcclxuICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gZXhwYW5kIGZpbHRlciB2YWx1ZXMgZm9yIFwiICsgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLnRzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgZGVsYXkgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIG5vVHJhaWxpbmcgICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9UcmFpbGluZyBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIG9ubHkgZXhlY3V0ZSBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcyB3aGlsZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KVxuICogQHBhcmFtICB7RnVuY3Rpb259ICBjYWxsYmFjayAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBkZWJvdW5jZU1vZGUgICBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoIGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlICkge1xuXG5cdC8vIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG5cdC8vIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuXHQvLyBkZWJvdW5jZSBtb2Rlcy5cblx0dmFyIHRpbWVvdXRJRDtcblxuXHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cdHZhciBsYXN0RXhlYyA9IDA7XG5cblx0Ly8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXHRpZiAoIHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicgKSB7XG5cdFx0ZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2sgPSBub1RyYWlsaW5nO1xuXHRcdG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG5cdC8vIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG5cdC8vIGlzIGV4ZWN1dGVkLlxuXHRmdW5jdGlvbiB3cmFwcGVyICgpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgZWxhcHNlZCA9IE51bWJlcihuZXcgRGF0ZSgpKSAtIGxhc3RFeGVjO1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Ly8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXHRcdGZ1bmN0aW9uIGV4ZWMgKCkge1xuXHRcdFx0bGFzdEV4ZWMgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG5cdFx0Ly8gdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cblx0XHRmdW5jdGlvbiBjbGVhciAoKSB7XG5cdFx0XHR0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCApIHtcblx0XHRcdC8vIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuXHRcdFx0Ly8gYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG5cdFx0XHRleGVjKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXQuXG5cdFx0aWYgKCB0aW1lb3V0SUQgKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHR9XG5cblx0XHRpZiAoIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSApIHtcblx0XHRcdC8vIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuXHRcdFx0Ly8gYGNhbGxiYWNrYC5cblx0XHRcdGV4ZWMoKTtcblxuXHRcdH0gZWxzZSBpZiAoIG5vVHJhaWxpbmcgIT09IHRydWUgKSB7XG5cdFx0XHQvLyBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG5cdFx0XHQvLyBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuXHRcdFx0Ly8gcmVjZW50IGV4ZWN1dGlvbi5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuXHRcdFx0Ly8gYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuXHRcdFx0Ly8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0dGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXHRyZXR1cm4gd3JhcHBlcjtcblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCAqIGZyb20gXCIuL0ZhY2V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRW50cnkudHMiLCJpbXBvcnQgeyBIb3RLZXlzRmFjZXRIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZhY2V0SGFuZGxlclwiO1xuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCB7IElGYWNldENvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0Q29uZmlnXCI7XG5pbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0VmFsdWVcIjtcbmltcG9ydCB7IEZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWNldFRyZWUgfSBmcm9tIFwiLi8uLi9hMTF5L0ZhY2V0VHJlZVwiO1xuaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRmFjZXRPcHRpb25zIH0gZnJvbSBcIi4vLi4vY29uZmlnL0lGYWNldE9wdGlvbnNcIjtcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciAsIEZhY2V0QWN0aW9uSGFuZGxlcixcbiAgICBGYWNldEtleUJvYXJkTmF2aWdhdGlvbkhhbmRsZXIsIEZhY2V0U2VhcmNoSGFuZGxlcixcbiAgICBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciwgSUV2ZW50SGFuZGxlciwgUGluVW5waW5FdmVudEhhbmRsZXIsIFNob3dNb3JlTGVzc0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XG5leHBvcnQgY2xhc3MgRmFjZXQge1xuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmU7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZTtcbiAgICBwcml2YXRlIGZhY2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgZmFjZXRUcmVlOiBGYWNldFRyZWU7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZhY2V0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gIG5ldyBGYWNldENvbmZpZ1N0b3JlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmZhY2V0RWxlbWVudCA9IG9wdGlvbnMuY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmFjZXRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCxcbiAgICAgICAgLy8gICAgIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0QWN0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldFNlYXJjaEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSG90S2V5c0ZhY2V0SGFuZGxlcigpKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgUGluVW5waW5FdmVudEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIC8vIC8vIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IFNob3dNb3JlTGVzc0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgLy8gLy8gdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50KSk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlckNoYWluLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgLy8gICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgYmluZCA9ICAoZmFjZXRzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnRlbXBsYXRlU2VydmljZS5zZXREYXRhKGZhY2V0cyk7XG4gICAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICB9XG4gICAgcHVibGljIHJlUmVuZGVyID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXREYXRhKCk7XG4gICAgICAgICAgICBjb25zdCBmdWxsRmFjZXQgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuaW5uZXJIVE1MID0gZnVsbEZhY2V0O1xuICAgICAgICAgICAgY29uc3QgdHJlZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRyZWVcIl0nKTtcbiAgICAgICAgICAgIHRoaXMuZmFjZXRUcmVlID0gbmV3IEZhY2V0VHJlZSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCwgdGhpcywgdGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgICAgICB0aGlzLmZhY2V0VHJlZS5pbml0KCk7XG4gICAgICAgIH0sIDEgKTtcbiAgICB9XG4gICAgcHVibGljIHNldEZhY2V0Q29uZmlnID0gKGZhY2V0Q29uZmlnOiBJRmFjZXRDb25maWdbXSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWcgPSBmYWNldENvbmZpZztcbiAgICB9XG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmZhY2V0VHJlZS5kZXN0cm95KCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0ZhY2V0LnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHtJRmFjZXR9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgKiBhcyBGYWNldE1haW4gZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LW1haW4uaGJzXCI7XG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQge0lGYWNldFRlbXBsYXRlU2VydmljZX0gZnJvbSBcIi4vSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNldFRlbXBsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTogSUZhY2V0W107XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7XG4gICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4gPSBGYWNldE1haW47XG4gIH1cbiAgcHVibGljIGJpbmQoZmFjZXRzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZDtcbiAgICBjb25zdCBtZXJnZWRGYWNldHMgPSB0aGlzLm1lcmdlV2l0aEZhY2V0Q29uZmlnKGZhY2V0cyk7XG4gICAgY29uc3QgZmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgIT09IHVuZGVmaW5lZCAmJiBmLnBpbm5lZCk7XG4gICAgY29uc3Qgbm9uRmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgPT09IHVuZGVmaW5lZCB8fCAhZi5waW5uZWQpO1xuICAgIGZhdm9yaXRlcy5zb3J0KHRoaXMuY29tcGFyZUZuKTtcbiAgICBub25GYXZvcml0ZXMuc29ydCh0aGlzLmNvbXBhcmVGbik7XG4gICAgY29uc3Qgbm9PZkZhY2V0VG9TaG93ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm5vT2ZGYWNldFRvU2hvdztcbiAgICBjb25zdCBpZFByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5pZFByZWZpeDtcbiAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4oe2lkUHJlZml4LCBmYXZvcml0ZXMsIG5vbkZhdm9yaXRlcywgbm9PZkZhY2V0VG9TaG93fSk7XG4gIH1cbiAgcHVibGljIHNldERhdGEgPSAoZmFjZXRzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZGF0YSA9IGZhY2V0cztcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSA9ICgpOiBJRmFjZXRbXSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBwcml2YXRlIGNvbXBhcmVGbiA9IChwcmV2OiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgIGlmIChwcmV2Lm9yZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG5leHQub3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBwcmV2Lm9yZGVyIC0gbmV4dC5vcmRlcjtcbiAgfVxuICBwcml2YXRlIG1lcmdlV2l0aEZhY2V0Q29uZmlnID0gKGZhY2V0czogSUZhY2V0W10pID0+IHtcbiAgICBjb25zdCBtZXJnZWRBcnJheTogYW55W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGZhY2V0cykge1xuICAgICAgZm9yIChjb25zdCBmYWNldENvbmZpZyBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWcpIHtcbiAgICAgICAgaWYgKGZhY2V0Q29uZmlnLmlkID09PSBmYWNldC5pZCkge1xuICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goe1xuICAgICAgICAgICAgY29sbGFwc2VkOiBmYWNldENvbmZpZy5jb2xsYXBzZWQsXG4gICAgICAgICAgICBmYWNldFJhbmdlczogZmFjZXQuZmFjZXRSYW5nZXMsXG4gICAgICAgICAgICBmYWNldFZhbHVlczogZmFjZXQuZmFjZXRWYWx1ZXMsXG4gICAgICAgICAgICBpZDogZmFjZXRDb25maWcuaWQsXG4gICAgICAgICAgICBuYW1lOiBmYWNldENvbmZpZy5uYW1lLFxuICAgICAgICAgICAgb3JkZXI6IGZhY2V0Q29uZmlnLm9yZGVyLFxuICAgICAgICAgICAgcGlubmVkOiBmYWNldENvbmZpZy5waW5uZWQsXG4gICAgICAgICAgICB0eXBlOiBmYWNldENvbmZpZy50eXBlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWRBcnJheTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuIGd1aS1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LW1haW4uaGJzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPGxpIGNsYXNzPVxcXCJndWkgbS0wIHAtci0xMCBwLXQtNSBwLWItNSBwLWwtMTBcXFwiIFxcclxcbiAgICBhcmlhLWxhYmVsPVxcXCJQaW5uZWQgRmlsdGVyc1xcXCJcXHJcXG4gICAgZGF0YS1hdHRyLXZhbHVlPVxcXCJQaW5uZWQgRmlsdGVyc1xcXCJcXHJcXG4gICAgZGF0YS1hdHRyLWlnbm9yZUZvclNlYXJjaD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgcm9sZT1cXFwidHJlZWl0ZW1cXFwiXFxyXFxuICAgIGlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItcGlubmVkLWZhY2V0cy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aDYgY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yIGNhcHMgYm9sZC01MDAgZmxleCBtLWItMTAgamMtc2JcXFwiPlxcclxcbiAgICAgICAgUElOTkVEIEZJTFRFUlNcXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcbiAgICA8L2g2PlxcclxcbiAgICA8dWwgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWRQcmVmaXggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItcGlubmVkLWZhY2V0cy1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJndWkgbS0wIHAtMFxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhdm9yaXRlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC91bD5cXHJcXG48L2xpPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPGxpIGFyaWEtbGFiZWw9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgaXRlbSBmYWNldC1pdGVtIGJvcmRlci1ib3R0b20gbGlnaHQgcC1yLTEwIHAtdC01IHAtYi01IHAtbC01IFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbGxhcHNlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ29sbGFwc2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgcm9sZT1cXFwidHJlZWl0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbGVhbi50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQm9vbGVhblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBndWkgaXRlbSBmbGV4IGpjLXNiXFxcIiBpZD1cXFwiZmFjZXQtaXRlbS1oZWFkZXItXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgcHJpbWFyeSBndWktc3ViaGVhZGluZy0xIGNhcHMgbS0wIGN1cnNvci1wb2ludGVyXFxcIiB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkRmlsdGVyc0NvdW50LnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcIlNlbGVjdGVkRmlsdGVyc0NvdW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSAgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBwaW4tdW5waW4tc2VsZWN0b3IgZ3VpLWljb24tdW5waW4gbS10LTUgbS1yLTEwIHVucGluLWljb24gY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIG9yIHNwYWNlIHRvIHVucGluIGZpbHRlciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1sYWJlbC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWxhYmVsXCIsXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgPC9saT5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiPjwvaT5cXHJcXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYXZvcml0ZXMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1waW5uZWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGNoZWNrTGVuZ3RoID0gKGluZGV4LCB2Mik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCArIDEgPiB2Mikge1xyXG4gICAgICAgIHJldHVybiBcImd1aS1oaWRkZW4gZXh0cmEtZmlsdGVyXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrTGVuZ3RoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0NoZWNrTGVuZ3RoLnRzIiwiY29uc3QgQXBwbHlSZW1vdmUgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiIHJlbW92ZSBcIiA6IFwiIGFwcGx5IFwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbHlSZW1vdmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQXBwbHlSZW1vdmUudHMiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImNoZWNrZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja2VkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwiY29uc3QgaGlkZGVuID0gKHZhbHVlOiBib29sZWFuLCBpbnZlcnQ6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IGhpZGU7XHJcbiAgICBpZiAoaW52ZXJ0KSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaGlkZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoaWRlID8gXCIgZ3VpLWhpZGRlbiBcIiA6IFwiIFwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGlkZGVuO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0hpZGRlbi50cyIsImNvbnN0IFNob3dNb3JlTGVzc0xpbmsgPSAoaW5kZXgsIHYyLCBvcHRpb25zKTogc3RyaW5nID0+IHtcclxuICAgIGlmIChpbmRleC5sZW5ndGggPiB2Mikge1xyXG4gICAgICAgIHJldHVybiBcIjxsaSBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC01XFxcIj5cIlxyXG4gICAgICAgICsgXCI8YSB0YWJpbmRleD1cXFwiMFxcXCIgcm9sZT1cXFwidHJlZWl0ZW1cXFwiIFwiXHJcbiAgICAgICAgKyBcImFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIHNob3cgXCIgKyAoaW5kZXgubGVuZ3RoIC0gdjIpICsgXCIgbW9yZSB2YWx1ZXNcXFwiIFwiXHJcbiAgICAgICAgKyBcImNsYXNzPVxcXCJndWkgY2FwcyBndWktYm9keS0yIHNpbXBsZSBzaG93LW1vcmUtbGluayBjdXJzb3ItcG9pbnRlciBwLTAgbS10LTNcXFwiPlwiXHJcbiAgICAgICAgKyAoaW5kZXgubGVuZ3RoIC0gdjIpXHJcbiAgICAgICAgKyBcIiBNb3JlIDwvYT48L2xpPlwiXHJcbiAgICAgICAgKyBcIjxsaSBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC01IGd1aS1oaWRkZW5cXFwiPlwiXHJcbiAgICAgICAgKyBcIjxhIHRhYmluZGV4PVxcXCIwXFxcIiByb2xlPVxcXCJ0cmVlaXRlbVxcXCIgXCJcclxuICAgICAgICArIFwiYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gc2hvdyBsZXNzIHZhbHVlc1xcXCIgXCJcclxuICAgICAgICArIFwiY2xhc3M9XFxcImd1aSBjYXBzIGd1aS1ib2R5LTIgc2ltcGxlIHNob3ctbGVzcy1saW5rIGN1cnNvci1wb2ludGVyIHAtMCBtLXQtM1xcXCI+XCJcclxuICAgICAgICArIFwiU2hvdyBMZXNzPC9hPjwvbGk+XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmVMZXNzTGluaztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9TaG93TW9yZUxlc3NMaW5rLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8bGkgY2xhc3M9XFxcImd1aSBtLTAgcC1yLTEwIHAtdC01IHAtYi01IHAtbC0xMFxcXCIgXFxyXFxuICAgIGFyaWEtbGFiZWw9XFxcIkFsbCBGaWx0ZXJzXFxcIlxcclxcbiAgICBkYXRhLWF0dHItdmFsdWU9XFxcIkFsbCBGaWx0ZXJzXFxcIlxcclxcbiAgICBkYXRhLWF0dHItaWdub3JlRm9yU2VhcmNoPVxcXCJ0cnVlXFxcIlxcclxcbiAgICBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIlxcclxcbiAgICByb2xlPVxcXCJ0cmVlaXRlbVxcXCJcXHJcXG4gICAgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZFByZWZpeCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi11bnBpbm5lZC1mYWNldHMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGg2IGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBjYXBzIGJvbGQtNTAwIG0tYi0xMCBmbGV4IGpjLXNiXFxcIj5cXHJcXG4gICAgICAgIEFsbCBGSUxURVJTXFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiPjwvaT5cXHJcXG4gICAgPC9oNj5cXHJcXG4gICAgPHVsIGFyaWEtbGFiZWxsZWRieT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkUHJlZml4IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLXVucGlubmVkLWZhY2V0cy1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJndWkgbS0wIHAtMFxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5vbkZhdm9yaXRlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC91bD5cXHJcXG48L2xpPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPGxpIGFyaWEtbGFiZWw9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgaXRlbSBmYWNldC1pdGVtIGJvcmRlci1ib3R0b20gbGlnaHQgcC1yLTEwIHAtdC01IHAtYi01IHAtbC01IFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbGxhcHNlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ29sbGFwc2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgcm9sZT1cXFwidHJlZWl0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbGVhbi50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQm9vbGVhblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBndWkgaXRlbSBmbGV4IGpjLXNiXFxcIiBpZD1cXFwiZmFjZXQtaXRlbS1oZWFkZXItXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgcHJpbWFyeSBndWktc3ViaGVhZGluZy0xIGNhcHMgbS0wIGN1cnNvci1wb2ludGVyXFxcIiB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkRmlsdGVyc0NvdW50LnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcIlNlbGVjdGVkRmlsdGVyc0NvdW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSAgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBwaW4tdW5waW4tc2VsZWN0b3IgZ3VpLWljb24tcGluIG0tdC01IG0tci0xMCBwaW4taWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgb3Igc3BhY2UgdG8gcGluIGZpbHRlciBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1sYWJlbC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWxhYmVsXCIsXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgPC9saT5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiPjwvaT5cXHJcXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCI+PC9pPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ub25GYXZvcml0ZXMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC11bnBpbm5lZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGYWNldCB9IGZyb20gXCIuLi9tYWluL0ZhY2V0XCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBEb21VdGlscyB9IGZyb20gXCIuL0RvbVV0aWxzXCI7XHJcbmltcG9ydCB7IEZhY2V0VHJlZUl0ZW0gfSBmcm9tIFwiLi9GYWNldFRyZWVJdGVtXCI7XHJcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4vS2V5Q29kZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFRyZWUge1xyXG4gICAgLy8gRmFjZXQgT2JqZWN0XHJcbiAgICBwcml2YXRlIGZhY2V0OiBGYWNldDtcclxuICAgIC8vIERvbSBOb2Rlc1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJlZURvbU5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hCb3hOb2RlOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZXhwYW5kQWxsTm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbGxhcHNlQWxsTm9kZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gRGF0YSBTdHJ1Y3R1cmVzIGZvciBlYXN5IGFjY2Vzc1xyXG4gICAgcHJpdmF0ZSB0cmVlaXRlbXM6IEZhY2V0VHJlZUl0ZW1bXTtcclxuICAgIHByaXZhdGUgZmlyc3RDaGFyczogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGZpcnN0VHJlZWl0ZW06IEZhY2V0VHJlZUl0ZW07XHJcbiAgICBwcml2YXRlIGxhc3RUcmVlaXRlbTogRmFjZXRUcmVlSXRlbTtcclxuXHJcbiAgICAvLyBDb25maWcgU3RvcmVzXHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlO1xyXG5cclxuICAgIC8vIExvY2FsXHJcbiAgICBwcml2YXRlIGxhc3RJbnB1dFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50LCBmYWNldDogRmFjZXQsIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5mYWNldCA9IGZhY2V0O1xyXG4gICAgICAgIHRoaXMudHJlZURvbU5vZGUgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltyb2xlPXRyZWVdXCIpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGxOb2RlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sbGFwc2UtYWxsXCIpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZXhwYW5kQWxsTm9kZSA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGFuZC1hbGxcIilbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hOb2RlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyLXNlYXJjaC1pbnB1dFwiKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyZWVpdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlyc3RUcmVlaXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0VHJlZWl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kVHJlZWl0ZW1zID0gKG5vZGUsIHRyZWUsIGdyb3VwKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW06IGFueSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgbGV0IHRpID0gZ3JvdXA7XHJcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9sZSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwicm9sZVwiKTtcclxuICAgICAgICAgICAgaWYgKHJvbGUgJiYgcm9sZS50b0xvd2VyQ2FzZSgpID09PSBcInRyZWVpdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgIHRpID0gbmV3IEZhY2V0VHJlZUl0ZW0oZWxlbSwgdHJlZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgdGkuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgdHJlZVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmVlaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAucHVzaCh0aSk7XHJcbiAgICAgICAgICAgICAgICB0cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0Q2hhcnNcclxuICAgICAgICAgICAgICAgICAgICAucHVzaCh0aS5sYWJlbC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluZFRyZWVpdGVtcyhlbGVtLCB0cmVlLCB0aSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbSA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAvLyBpbml0aWFsaXplIHBvcCB1cCBtZW51c1xyXG4gICAgICAgIGlmICghdGhpcy50cmVlRG9tTm9kZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgIC50cmVlRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0cmVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQb3B1bGF0ZSBhbGwgVHJlZSBJdGVtc1xyXG4gICAgICAgIHRoaXMuZmluZFRyZWVpdGVtcyh0aGlzLnRyZWVEb21Ob2RlLCB0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWaXNpYmxlIFRyZWUgSXRlbXNcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRhYiBJbmRleCBvZiBmaXJzdCB0cmVlIGl0ZW0uXHJcbiAgICAgICAgdGhpcy5maXJzdFRyZWVpdGVtLnRyZWVJdGVtRG9tTm9kZS50YWJJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY29sbGFwc2VBbGxJdGVtcyk7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmV4cGFuZEFsbEl0ZW1zKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJveE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlU2VhcmNoRm9yRmlsdGVycyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5zZXRGb2N1c1RvU2VhcmNoQm94KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIERvbVV0aWxzLm9mZih0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuc2V0Rm9jdXNUb1NlYXJjaEJveCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb1NlYXJjaEJveCA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImtleWRvd25cIl0pID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5ICAmJiAgZXZlbnQua2V5ID09PSBcImZcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJveE5vZGUuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb0l0ZW0gPSAodHJlZWl0ZW06IEZhY2V0VHJlZUl0ZW0sIGRvbnRTZXRmb2N1cz86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aSA9PT0gdHJlZWl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRpLnRyZWVJdGVtRG9tTm9kZS50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRTZXRmb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGkudHJlZUl0ZW1Eb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb0ZpcnN0VmlzaWJsZSA9IChkb250U2V0Zm9jdXM/OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodGkuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKHRpLCBkb250U2V0Zm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb05leHRJdGVtID0gKGN1cnJlbnRJdGVtOiBGYWNldFRyZWVJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRJdGVtO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAodGhpcy50cmVlaXRlbXMubGVuZ3RoIC0gMSk7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpID0gdGhpcy50cmVlaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0aSA9PT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aS5pc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gdGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5leHRJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0obmV4dEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmV2SXRlbTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aSA9PT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aS5pc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHByZXZJdGVtID0gdGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZXZJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0ocHJldkl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb1BhcmVudEl0ZW0gPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZ3JvdXBUcmVlaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKGN1cnJlbnRJdGVtLmdyb3VwVHJlZWl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNUb0ZpcnN0SXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMuZmlyc3RUcmVlaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEZvY3VzVG9MYXN0SXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMubGFzdFRyZWVpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhwYW5kVHJlZWl0ZW0gPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0sIG5vdGlmeT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiBUcmVlIEl0ZW0gaXMgZXhwYW5kYWJsZVxyXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKGN1cnJlbnRJdGVtLnRyZWVJdGVtRG9tTm9kZSwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuc2lvbkljb24oY3VycmVudEl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMobm90aWZ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBhbmRBbGxTaWJsaW5nSXRlbXMgPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICgodGkuZ3JvdXBUcmVlaXRlbSA9PT0gY3VycmVudEl0ZW0uZ3JvdXBUcmVlaXRlbSkgJiYgdGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFRyZWVpdGVtKHRpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vdGlmeUNvbGxhcHNlQW5kRXhwYW5zaW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhwYW5kQWxsSXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFRyZWVpdGVtKHRpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGxOb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlDb2xsYXBzZUFuZEV4cGFuc2lvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbGxhcHNlQWxsSXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVHJlZWl0ZW0odGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXhwYW5kQWxsTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlDb2xsYXBzZUFuZEV4cGFuc2lvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbGxhcHNlQWxsU2libGluZ0l0ZW1zID0gKGN1cnJlbnRJdGVtOiBGYWNldFRyZWVJdGVtKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoKHRpLmdyb3VwVHJlZWl0ZW0gPT09IGN1cnJlbnRJdGVtLmdyb3VwVHJlZWl0ZW0pICYmIHRpLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVRyZWVpdGVtKHRpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vdGlmeUNvbGxhcHNlQW5kRXhwYW5zaW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29sbGFwc2VUcmVlaXRlbSA9IChjdXJyZW50SXRlbTogRmFjZXRUcmVlSXRlbSwgbm90aWZ5PzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGxldCBncm91cFRyZWVpdGVtOiBGYWNldFRyZWVJdGVtO1xyXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5pc0V4cGFuZGVkKCkpIHtcclxuICAgICAgICAgICAgZ3JvdXBUcmVlaXRlbSA9IGN1cnJlbnRJdGVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyb3VwVHJlZWl0ZW0gPSBjdXJyZW50SXRlbS5ncm91cFRyZWVpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdyb3VwVHJlZWl0ZW0pIHtcclxuICAgICAgICAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKGdyb3VwVHJlZWl0ZW0udHJlZUl0ZW1Eb21Ob2RlLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuc2lvbkljb24oZ3JvdXBUcmVlaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMobm90aWZ5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvSXRlbShncm91cFRyZWVpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZUV4cGFuc2lvbkljb24gPSAoZ3JvdXBUcmVlaXRlbTogRmFjZXRUcmVlSXRlbSwgY3VycmVudEV4cGFuZGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWNvbk5vZGVMaXN0ID0gZ3JvdXBUcmVlaXRlbS50cmVlSXRlbURvbU5vZGUucXVlcnlTZWxlY3RvckFsbChcIi5leHBhbnNpb24taWNvblwiKTtcclxuICAgICAgICBsZXQgaWNvbk5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICggaWNvbk5vZGVMaXN0ICYmIGljb25Ob2RlTGlzdC5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIGljb25Ob2RlID0gaWNvbk5vZGVMaXN0WzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWN1cnJlbnRFeHBhbmRlZCkge1xyXG4gICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcclxuICAgICAgICAgICAgaWNvbk5vZGUuY2xhc3NMaXN0LmFkZChcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xyXG4gICAgICAgICAgICBpY29uTm9kZS5jbGFzc0xpc3QuYWRkKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlVmlzaWJsZVRyZWVpdGVtcyA9IChub3RpZnk/OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maXJzdFRyZWVpdGVtID0gdGhpcy50cmVlaXRlbXNbMF07XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICggdGkudHJlZUl0ZW1Eb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucyhcImd1aS1oaWRkZW5cIilcclxuICAgICAgICAgICAgICAgIHx8IHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmIChwYXJlbnQgIT09IHRoaXMudHJlZURvbU5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpLmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VHJlZWl0ZW0gPSB0aTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIG5vdGlmeSApIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlDb2xsYXBzZUFuZEV4cGFuc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyID0gKGN1cnJlbnRJdGVtLCBjaGFyKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0O1xyXG4gICAgICAgIGxldCBpbmRleDtcclxuICAgICAgICBjaGFyID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAvLyBHZXQgc3RhcnQgaW5kZXggZm9yIHNlYXJjaCBiYXNlZCBvbiBwb3NpdGlvbiBvZiBjdXJyZW50SXRlbVxyXG4gICAgICAgIHN0YXJ0ID0gdGhpc1xyXG4gICAgICAgICAgICAudHJlZWl0ZW1zXHJcbiAgICAgICAgICAgIC5pbmRleE9mKGN1cnJlbnRJdGVtKSArIDE7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID09PSB0aGlzLnRyZWVpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgcmVtYWluaW5nIHNsb3RzIGluIHRoZSBtZW51XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycyhzdGFydCwgY2hhcik7XHJcblxyXG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCBpbiByZW1haW5pbmcgc2xvdHMsIGNoZWNrIGZyb20gYmVnaW5uaW5nXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKDAsIGNoYXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgbWF0Y2ggd2FzIGZvdW5kLi4uXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvSXRlbSh0aGlzLnRyZWVpdGVtc1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kZXhGaXJzdENoYXJzID0gKHN0YXJ0SW5kZXg6IG51bWJlciwgY2hhcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmZpcnN0Q2hhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHJlZWl0ZW1zW2ldLmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IHRoaXMuZmlyc3RDaGFyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93TW9yZVZhbHVlcyA9IChncm91cEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIHRpLmdyb3VwVHJlZWl0ZW0gPT09IGdyb3VwSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJndWktaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aS5pc1Nob3dMZXNzTGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aS50cmVlSXRlbURvbU5vZGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aS5pc1Nob3dNb3JlTGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiZ3VpLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93TGVzc1ZhbHVlcyA9IChncm91cEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIHRpLmdyb3VwVHJlZWl0ZW0gPT09IGdyb3VwSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHRyYS1maWx0ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImd1aS1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGkuaXNTaG93TGVzc0xpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImd1aS1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGkuaXNTaG93TW9yZUxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImd1aS1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkudHJlZUl0ZW1Eb21Ob2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlVHJlZWl0ZW1zKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFuZGxlTGFiZWxDaGFuZ2UgPSAoY3VycmVudEl0ZW06IEZhY2V0VHJlZUl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja2VkID0gRG9tVXRpbHMudG9nZ2xlTGFiZWwoY3VycmVudEl0ZW0udHJlZUl0ZW1Eb21Ob2RlIGFzICBIVE1MTGFiZWxFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBjaGVja2VkID8gRmlsdGVyQWN0aW9uVHlwZS5BZGQgOiBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzO1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLnRyZWVJdGVtRG9tTm9kZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGNoZWNrZWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKGN1cnJlbnRJdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5kYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaXNSYW5nZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbm90aWZ5Q29sbGFwc2VBbmRFeHBhbnNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcclxuICAgICAgICBjb25zdCBwdWJsaXNoOiBBcnJheTx7a2V5OiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbn0+ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoIHRpLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmYWNldC5pZCA9PT0gdGkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXQuY29sbGFwc2VkID0gIXRpLmlzRXhwYW5kZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaC5wdXNoKHtrZXk6IGZhY2V0LmlkLCBjb2xsYXBzZWQ6IGZhY2V0LmNvbGxhcHNlZH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ29sbGFwc2VUb2dnbGUocHVibGlzaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFuZGxlUGluVW5waW4gPSAoZXZlbnQ6IGFueSwgcGluOiBib29sZWFuLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcclxuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCBmYWNldC5pZCA9PT0gaWQgKSB7XHJcbiAgICAgICAgICAgICAgICBmYWNldC5waW5uZWQgPSBwaW47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2V0LnJlUmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uUGluVW5waW4oaWQsIHBpbik7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFuZGxlU2VhcmNoRm9yRmlsdGVycyA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImtleXVwXCJdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCB2YWwgPT09IHRoaXMubGFzdElucHV0VmFsdWUgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHZhbDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZUJsYW5rID0gZmFsc2U7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlQmxhbmsgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCAhaW5wdXRWYWx1ZUJsYW5rICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOb3RCbGFua0lucHV0U2VhcmNoKHZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsYW5rSW5wdXRTZWFyY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVUcmVlaXRlbXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvRmlyc3RWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgLy8gY29uc3QgbWF0Y2hlZEdyb3VwSXRlbTogRmFjZXRUcmVlSXRlbVtdID0gW107XHJcbiAgICAgICAgLy8gY29uc3Qgbm90TWF0Y2hlZEdyb3VwSXRlbTogRmFjZXRUcmVlSXRlbVtdID0gW107XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB0aSBvZiB0aGlzLnRyZWVpdGVtcykge1xyXG4gICAgICAgIC8vICAgICBpZiAodGkuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGkubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPiAtMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hdGNoZWRHcm91cEl0ZW0ucHVzaCh0aSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5vdE1hdGNoZWRHcm91cEl0ZW0ucHVzaCh0aSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKHRpLmlzU2hvd0xlc3NMaW5rIHx8IHRpLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGkuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aS5pc1Nob3dMZXNzTGluayB8fCB0aS5pc1Nob3dNb3JlTGluaykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKCBtYXRjaGVkR3JvdXBJdGVtLmluZGV4T2YodGkpID4gLTEgfHwgbWF0Y2hlZEdyb3VwSXRlbS5pbmRleE9mKHRpLmdyb3VwVHJlZWl0ZW0pID4gLTEgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgRG9tVXRpbHMuc2hvdyh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXRpLmlzRXhwYW5kYWJsZSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGkudmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPiAtMSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRHcm91cEl0ZW0uaW5kZXhPZih0aS5ncm91cFRyZWVpdGVtKSA8PSAtMSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRHcm91cEl0ZW0ucHVzaCh0aS5ncm91cFRyZWVpdGVtKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBub3RNYXRjaGVkSW5kZXggPSBub3RNYXRjaGVkR3JvdXBJdGVtLmluZGV4T2YodGkuZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChub3RNYXRjaGVkSW5kZXggPiAtMSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5vdE1hdGNoZWRHcm91cEl0ZW0uc2xpY2Uobm90TWF0Y2hlZEluZGV4LCBub3RNYXRjaGVkSW5kZXggKyAxKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgRG9tVXRpbHMuaGlkZSh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvciAoY29uc3QgbWcgb2YgbWF0Y2hlZEdyb3VwSXRlbSkge1xyXG4gICAgICAgIC8vICAgICBtZy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBEb21VdGlscy5zZXRBcmlhRXhwYW5kZWQobWcudHJlZUl0ZW1Eb21Ob2RlLCBcInRydWVcIik7XHJcbiAgICAgICAgLy8gICAgIERvbVV0aWxzLnNob3cobWcudHJlZUl0ZW1Eb21Ob2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBubWcgb2Ygbm90TWF0Y2hlZEdyb3VwSXRlbSkge1xyXG4gICAgICAgIC8vICAgICBubWcuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZChubWcudHJlZUl0ZW1Eb21Ob2RlLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIC8vICAgICBEb21VdGlscy5oaWRlKG5tZy50cmVlSXRlbURvbU5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlQmxhbmtJbnB1dFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgYmxhbmsgU2VhcmNoIGhlcmVcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aS5pZ25vcmVGb3JTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4cGFuZGFibGVcclxuICAgICAgICAgICAgaWYgKHRpLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLnNob3codGkudHJlZUl0ZW1Eb21Ob2RlKTtcclxuICAgICAgICAgICAgICAgIGlmICggdGkudHJlZUl0ZW1Eb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlZFwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5zZXRBcmlhRXhwYW5kZWQodGkudHJlZUl0ZW1Eb21Ob2RlLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZCh0aS50cmVlSXRlbURvbU5vZGUsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEgdGkuaXNFeHBhbmRhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGkuaXNTaG93TW9yZUxpbmsgJiYgIXRpLmlzU2hvd0xlc3NMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRXh0cmFGaWx0ZXIgPSBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXh0cmEtZmlsdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0V4dHJhRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5zaG93KHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRpLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuc2hvdyh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRpLmlzU2hvd0xlc3NMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIERvbVV0aWxzLmhpZGUodGkudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVOb3RCbGFua0lucHV0U2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IGdyb3VwSXRlbTogRmFjZXRUcmVlSXRlbTtcclxuICAgICAgICBsZXQgZ3JvdXBJdGVtTWF0Y2hlZDogYm9vbGVhbjtcclxuICAgICAgICBsZXQgY2hpbGRJdGVtTWF0Y2hlZDogYm9vbGVhbjtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpIG9mIHRoaXMudHJlZWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aS5pZ25vcmVGb3JTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4cGFuZGFibGVcclxuICAgICAgICAgICAgaWYgKHRpLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGdyb3VwIGxldmVsIFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJdGVtID0gdGk7XHJcbiAgICAgICAgICAgICAgICBncm91cEl0ZW1NYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjaGlsZEl0ZW1NYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLnNldEFyaWFFeHBhbmRlZCh0aS50cmVlSXRlbURvbU5vZGUsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZ3JvdXAgaXMgbWF0Y2hpbmdcclxuICAgICAgICAgICAgICAgIGlmICh0aS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJdGVtTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgZ3JvdXAgaXMgbWF0Y2hpbmcgZXhwYW5kIHRoZSBncm91cFxyXG4gICAgICAgICAgICBpZiAoIGdyb3VwSXRlbU1hdGNoZWQgfHwgY2hpbGRJdGVtTWF0Y2hlZCApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwSXRlbS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgRG9tVXRpbHMuc2V0QXJpYUV4cGFuZGVkKGdyb3VwSXRlbS50cmVlSXRlbURvbU5vZGUsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIERvbVV0aWxzLnNob3coZ3JvdXBJdGVtLnRyZWVJdGVtRG9tTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRm9yIENoaWxkIExpbmtzXHJcbiAgICAgICAgICAgIGlmICggIXRpLmlzRXhwYW5kYWJsZSAmJiB0aS5ncm91cFRyZWVpdGVtID09PSBncm91cEl0ZW0gKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBncm91cCBtYXRjaGVzIHNldCB0aGUgdmlzaWJsaXR5IHRvIHRydWUgZXhjZXB0IHNob3cgbW9yZSBvciBsZXNzIGxpbmtzXHJcbiAgICAgICAgICAgICAgICBpZiAoIGdyb3VwSXRlbU1hdGNoZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpLmlzU2hvd0xlc3NMaW5rIHx8IHRpLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aS5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuaGlkZSh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuc2hvdyh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBncm91cCBub3QgbWF0Y2hlZCBjaGVjayBpZiBjaGlsZCBtYXRjaGVzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXBwIFNob3cgbW9yZSBvciBsZXNzIGxpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpLmlzU2hvd01vcmVMaW5rIHx8IHRpLmlzU2hvd0xlc3NMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGkubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGkuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tVXRpbHMuc2hvdyh0aS50cmVlSXRlbURvbU5vZGUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSXRlbU1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21VdGlscy5oaWRlKHRpLnRyZWVJdGVtRG9tTm9kZS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9hMTF5L0ZhY2V0VHJlZS50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBEb21VdGlscyB9IGZyb20gXCIuL0RvbVV0aWxzXCI7XHJcbmltcG9ydCB7IEZhY2V0VHJlZSB9IGZyb20gXCIuL0ZhY2V0VHJlZVwiO1xyXG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuL0tleUNvZGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRUcmVlSXRlbSB7XHJcbiAgICBwdWJsaWMgdHJlZTogRmFjZXRUcmVlO1xyXG4gICAgcHVibGljIGdyb3VwVHJlZWl0ZW06IEZhY2V0VHJlZUl0ZW07XHJcbiAgICBwdWJsaWMgcGluVW5QaW5Eb21Ob2RlOiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyB0cmVlSXRlbURvbU5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RvcERlZmF1bHRDbGljazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0V4cGFuZGFibGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGluR3JvdXA6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIC8vIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRhdGFUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNSYW5nZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc1Nob3dNb3JlTGluazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc1Nob3dMZXNzTGluazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0xhYmVsOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlnbm9yZUZvclNlYXJjaDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCwgdHJlZTogRmFjZXRUcmVlLCBncm91cDogRmFjZXRUcmVlSXRlbSkge1xyXG4gICAgICAgIG5vZGUudGFiSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnRyZWUgPSB0cmVlO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBUcmVlaXRlbSA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMudHJlZUl0ZW1Eb21Ob2RlID0gbm9kZTtcclxuICAgICAgICAvLyB0aGlzLmxhYmVsID0gbm9kZVxyXG4gICAgICAgIC8vICAgICAudGV4dENvbnRlbnRcclxuICAgICAgICAvLyAgICAgLnRyaW0oKTtcclxuICAgICAgICB0aGlzLnN0b3BEZWZhdWx0Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFiZWwgPSBub2RlXHJcbiAgICAgICAgLy8gICAgICAgICAuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKVxyXG4gICAgICAgIC8vICAgICAgICAgLnRyaW0oKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5waW5VblBpbkRvbU5vZGUgPSB0aGlzLnRyZWVJdGVtRG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZC5xdWVyeVNlbGVjdG9yKFwiLnBpbi11bnBpbi1zZWxlY3RvclwiKTtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF0dHItaWRcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyLXZhbHVlXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0YVR5cGUgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYXR0ci10eXBlXCIpO1xyXG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyLWlzUmFuZ2VcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHRoaXMuaWdub3JlRm9yU2VhcmNoID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF0dHItaWdub3JlRm9yU2VhcmNoXCIpID09PSBcInRydWVcIjtcclxuICAgICAgICB0aGlzLmlzU2hvd01vcmVMaW5rID0gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LW1vcmUtbGlua1wiKTtcclxuICAgICAgICB0aGlzLmlzU2hvd0xlc3NMaW5rID0gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LWxlc3MtbGlua1wiKTtcclxuICAgICAgICB0aGlzLmlzTGFiZWwgPSBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsYWJlbFwiO1xyXG4gICAgICAgIHRoaXMuaXNFeHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluR3JvdXAgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgdGhpcy5pbkdyb3VwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsZW0gPSBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHdoaWxlIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ1bFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmVlSXRlbURvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuICAgICAgICBpZiAoIXRoaXMudHJlZUl0ZW1Eb21Ob2RlLmdldEF0dHJpYnV0ZShcInJvbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0cmVlaXRlbVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAudHJlZUl0ZW1Eb21Ob2RlXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC50cmVlSXRlbURvbU5vZGVcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZU1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnRyZWVJdGVtRG9tTm9kZVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5oYW5kbGVNb3VzZU92ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgIC50cmVlSXRlbURvbU5vZGVcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGluVW5QaW5Eb21Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGluVW5QaW5Eb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVVuUGluQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnBpblVuUGluRG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVVuUGluS2V5dXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdOb2RlID0gdGhpcy50cmVlSXRlbURvbU5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHRoaXMudHJlZUl0ZW1Eb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIHRoaXMudHJlZUl0ZW1Eb21Ob2RlKTtcclxuICAgICAgICB0aGlzLnRyZWVJdGVtRG9tTm9kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRXhwYW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEb21VdGlscy5pc0FyaWFFeHBhbmRlZCh0aGlzLnRyZWVJdGVtRG9tTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVVblBpbkNsaWNrID0gKGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1wiY2xpY2tcIl0pID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bnBpbi1pY29uXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZS5oYW5kbGVQaW5VbnBpbihldmVudCwgZmFsc2UsIHRoaXMuaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZS5oYW5kbGVQaW5VbnBpbihldmVudCwgdHJ1ZSwgdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGhhbmRsZVVuUGluS2V5dXAgPSAoZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbXCJrZXlkb3duXCJdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEtleUNvZGVzLlNQQUNFOlxyXG4gICAgICAgICAgICBjYXNlIEtleUNvZGVzLlJFVFVSTjpcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5waW4taWNvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZS5oYW5kbGVQaW5VbnBpbihldmVudCwgZmFsc2UsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZWUuaGFuZGxlUGluVW5waW4oZXZlbnQsIHRydWUsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFuZGxlS2V5ZG93biA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImtleWRvd25cIl0pID0+IHtcclxuICAgICAgICBjb25zdCB0Z3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaXNQcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvXFxTLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHByaW50YWJsZUNoYXJhY3RlcihpdGVtOiBGYWNldFRyZWVJdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyID09PSBcIipcIikge1xyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZEFsbFNpYmxpbmdJdGVtcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyKGl0ZW0sIGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3BEZWZhdWx0Q2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5SRVRVUk4pIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRGVmYXVsdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ByaW50YWJsZUNoYXJhY3RlcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW50YWJsZUNoYXJhY3Rlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5TUEFDRTpcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuUkVUVVJOOlxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsYXBzZVRyZWVpdGVtKHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGFuZFRyZWVpdGVtKHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3dNb3JlVmFsdWVzKHRoaXMuZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzU2hvd0xlc3NMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3dMZXNzVmFsdWVzKHRoaXMuZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzTGFiZWwgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFuZGxlTGFiZWxDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5VUDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuRE9XTjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGFuZFRyZWVpdGVtKHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuTEVGVDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUgJiYgdGhpcy5pc0V4cGFuZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsYXBzZVRyZWVpdGVtKHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0Rm9jdXNUb1BhcmVudEl0ZW0odGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLkhPTUU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuRU5EOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50YWJsZUNoYXJhY3Rlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVDbGljayA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImNsaWNrXCJdKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIG9ubHkgcHJvY2VzcyBjbGljayBldmVudHMgdGhhdCBkaXJlY3RseSBoYXBwZW5lZCBvbiB0aGlzIHRyZWVpdGVtXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy50cmVlSXRlbURvbU5vZGVcclxuICAgICAgICAgICAgJiYgISBEb21VdGlscy5pc1NlbGZPckRlc2NlbmRhbnQodGhpcy50cmVlSXRlbURvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQsIGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxhcHNlVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuZXhwYW5kVHJlZWl0ZW0odGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU2hvd01vcmVMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3dNb3JlVmFsdWVzKHRoaXMuZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU2hvd0xlc3NMaW5rICkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIC50cmVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3dMZXNzVmFsdWVzKHRoaXMuZ3JvdXBUcmVlaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzTGFiZWwgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyZWVcclxuICAgICAgICAgICAgICAgICAgICAuaGFuZGxlTGFiZWxDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVGb2N1cyA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImZvY3VzXCJdKSA9PiB7XHJcbiAgICAgICAgbGV0IG5vZGU6IEVsZW1lbnQgPSB0aGlzLnRyZWVJdGVtRG9tTm9kZTtcclxuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGVcclxuICAgICAgICAgICAgLmNsYXNzTGlzdFxyXG4gICAgICAgICAgICAuYWRkKFwiZm9jdXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUJsdXIgPSBmdW5jdGlvbihldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcImJsdXJcIl0pIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMudHJlZUl0ZW1Eb21Ob2RlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0XHJcbiAgICAgICAgICAgIC5yZW1vdmUoXCJmb2N1c1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGhhbmRsZU1vdXNlT3ZlciA9IChldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtcIm1vdXNlb3ZlclwiXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlTW91c2VPdXQgPSAoZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbXCJtb3VzZW91dFwiXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2ExMXkvRmFjZXRUcmVlSXRlbS50cyIsImV4cG9ydCBjb25zdCBLZXlDb2RlcyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgUkVUVVJOOiAxMyxcclxuICAgIFNQQUNFOiAzMixcclxuICAgIFBBR0VVUDogMzMsXHJcbiAgICBQQUdFRE9XTjogMzQsXHJcbiAgICBFTkQ6IDM1LFxyXG4gICAgSE9NRTogMzYsXHJcbiAgICBMRUZUOiAzNyxcclxuICAgIFVQOiAzOCxcclxuICAgIFJJR0hUOiAzOSxcclxuICAgIERPV046IDQwLFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9hMTF5L0tleUNvZGVzLnRzIiwiaW1wb3J0IHtGaWx0ZXJBY3Rpb25UeXBlfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7SUZhY2V0T3B0aW9uc30gZnJvbSBcIi4vSUZhY2V0T3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRDb25maWdTdG9yZSB7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJRmFjZXRPcHRpb25zO1xuICAgIHByaXZhdGUgZGVmYXVsdEZhY2V0T3B0aW9uczogSUZhY2V0T3B0aW9ucyA9IHtcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxuICAgICAgICBmYWNldENvbmZpZzogW10sXG4gICAgICAgIGlkUHJlZml4OiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDApLnRvU3RyaW5nKCksXG4gICAgICAgIG5vT2ZGYWNldFRvU2hvdzogNSxcbiAgICAgICAgLy8gZmFjZXRzOiBbXSxcbiAgICAgICAgb25Db2xsYXBzZVRvZ2dsZTogKGNvbGxhcHNlQ29uZmlnOiBbe2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59XSkgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGluVW5waW46IChrZXk6IHN0cmluZywgcGluOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZhY2V0T3B0aW9ucyB7cmV0dXJuIHRoaXMub3B0aW9uczsgfVxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGYWNldE9wdGlvbnMpOiBJRmFjZXRPcHRpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEZhY2V0T3B0aW9ucywgaW5wdXRPcHRpb25zKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlnL0lGaWx0ZXJPcHRpb25zXCI7XHJcbmltcG9ydCB7IEhvdEtleXNGaWx0ZXJzSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGaWx0ZXJzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25IYW5kbGVyLCBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJDaGFpbjogSUV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IEZpbHRlckNvbmZpZ1N0b3JlKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9IGpRdWVyeShvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZpbHRlclRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGaWx0ZXJBY3Rpb25IYW5kbGVyKHRoaXMuZmlsdGVyRWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhvdEtleXNGaWx0ZXJzSGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZCA9ICAoZmlsdGVyczogSUZhY2V0W10pOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmFjZXRTdWJIZWFkZXIgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKGZpbHRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQuaHRtbChmYWNldFN1YkhlYWRlcik7XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICggdGhpcy5maWx0ZXJFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGhhbmRsZXIuZGVyZWdpc3RlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlcmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5jbGFzcyBIb3RLZXlzRmlsdGVyc0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlUmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c09uU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAgJiYgIGV2ZW50LmtleSA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmZhY2V0LXN1YmhlYWRlciAucmVtb3ZlLWFsbFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtIb3RLZXlzRmlsdGVyc0hhbmRsZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgKiBhcyBGYWNldFN1YkhlYWRlciBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW46IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIgPSBGYWNldFN1YkhlYWRlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBiaW5kKGZpbHRlcnM6IElGYWNldFtdKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBtZXJnZWRGaWx0ZXJzID0gdGhpcy5tZXJnZVdpdGhGYWNldENvbmZpZyhmaWx0ZXJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcih7ZmlsdGVyczogbWVyZ2VkRmlsdGVyc30pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtZXJnZVdpdGhGYWNldENvbmZpZyA9IChmaWx0ZXJzOiBJRmFjZXRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmYWNldENvbmZpZyBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChmYWNldENvbmZpZy5pZCA9PT0gZmFjZXQuaWQpIHtcclxuICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFjZXRDb25maWcuY29sbGFwc2VkLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRSYW5nZXM6IGZhY2V0LmZhY2V0UmFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRWYWx1ZXM6IGZhY2V0LmZhY2V0VmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGZhY2V0Q29uZmlnLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmFjZXRDb25maWcubmFtZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBmYWNldENvbmZpZy5vcmRlcixcclxuICAgICAgICAgICAgICAgIHBpbm5lZDogZmFjZXRDb25maWcucGlubmVkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmFjZXRDb25maWcudHlwZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XHJcbiAgICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50IGZhY2V0LXN1YmhlYWRlciBndWkgZmx1aWQtdyBiYXNpYyBjdXJ2ZWQgcC01XFxcIiBhcmlhLWxhYmVsPVxcXCJBcHBsaWVkIEZpbHRlcnNcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgY2Fwc1xcXCI+QXBwbGllZCBGaWx0ZXJzPC9zcGFuPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS1sLTUgcmVtb3ZlLWFsbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xlYXIgQWxsIEZpbHRlcnNcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4+Q2xlYXIgQWxsPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc3Bhbj5cXG48L3NlY3Rpb24+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBsYXJnZSBsYWJlbHMgZmFjZXQtbGFiZWxzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRSYW5nZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9zcGFuPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbGVhciBmaWx0ZXIgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIG9mIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgbS0wIG0tdC0yIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRm9ybWF0TGFiZWxCeVR5cGUudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJGb3JtYXRMYWJlbEJ5VHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbGVhciBSYW5nZSBmb3IgZmlsdGVyIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgbS0wIG0tdC0yIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOjo6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6Ojp0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFJhbmdlLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1pbiA6IGRlcHRoMCksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1heCA6IGRlcHRoMCksKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLHtcIm5hbWVcIjpcIlJhbmdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmNvbnN0IHJhbmdlID0gKG1pbiwgbWF4LCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgIGxldCBtaW5TdHIgPSBtaW47XHJcbiAgICBsZXQgbWF4U3RyID0gbWF4O1xyXG4gICAgaWYgKHR5cGUgPT09IFwiRWRtLkRhdGVUaW1lT2Zmc2V0XCIpIHtcclxuICAgICAgICBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgbWluICE9PSBudWxsICYmIG1pbiAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBtb21lbnQobWluKS5mb3JtYXQoXCJERC1NTU0tWVlZWVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gbnVsbCAmJiBtYXggIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbWF4U3RyID0gbW9tZW50KG1heCkuZm9ybWF0KFwiREQtTU1NLVlZWVlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1pblN0ciAhPT0gdW5kZWZpbmVkICYmIG1pblN0ciAhPT0gbnVsbCAmJiBtaW5TdHIgIT09IFwiXCIpIHtcclxuICAgICAgICBzdHIgKz0gXCIgZnJvbTogXCIgKyBtaW5TdHI7XHJcbiAgICB9XHJcbiAgICBpZiAobWF4U3RyICE9PSB1bmRlZmluZWQgJiYgbWF4U3RyICE9PSBudWxsICYmIG1heFN0ciAhPT0gXCJcIikge1xyXG4gICAgICAgIHN0ciArPSBcIiB0bzogXCIgKyBtYXhTdHI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvUmFuZ2UudHMiLCJpbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJPcHRpb25zIH0gZnJvbSBcIi4vSUZpbHRlck9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb25maWdTdG9yZSB7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0ZmlsdGVyT3B0aW9uczogSUZpbHRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgZmlsdGVyQ29uZmlnOiBbXSxcclxuICAgICAgICBvbkFsbEZpbHRlclJlbW92ZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgYWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0IGZvciBmaWx0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJRmlsdGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKTogSUZpbHRlck9wdGlvbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0ZmlsdGVyT3B0aW9ucywgaW5wdXRPcHRpb25zKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmUudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZhY2V0QWN0aW9uSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRTZWFyY2hIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GaWx0ZXJBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9IaWRlRmFjZXRTZWN0aW9uSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BpblVucGluRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3dNb3JlTGVzc0hhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvRmFjZXRLZXlCb2FyZE5hdmlnYXRpb25IYW5kbGVyXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9pbmRleC50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgRmFjZXRDb25zdGFudHMgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25zdGFudHNcIjtcbmltcG9ydCB7IElGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyIH0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VNYW5hZ2VyXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgU2hvd0hpZGUgfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xuXG5leHBvcnQgY2xhc3MgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5TaG93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmV4cGFuZC1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZkFsbChldmVudCwgU2hvd0hpZGUuU2hvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2xsYXBzZS1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZkFsbChldmVudCwgU2hvd0hpZGUuSGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5jb2xsYXBzZS1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZkFsbChldmVudCwgU2hvd0hpZGUuSGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIltyb2xlPXRyZWVpdGVtXVwiLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleWRvd25cIiwgXCJbcm9sZT10cmVlaXRlbV1cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiZm9jdXNpblwiLCBcIltyb2xlPXRyZWVpdGVtXVwiLCB0aGlzLm9uRm9jdXNJbk9mVHJlZUl0ZW0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJmb2N1c291dFwiLCBcIltyb2xlPXRyZWVpdGVtXVwiLCB0aGlzLm9uRm9jdXNPdXRPZlRyZWVJdGVtKTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uRm9jdXNJbk9mVHJlZUl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb1QgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gb1QuaXMoXCJbcm9sZT10cmVlaXRlbV1cIikgPyBvVCA6IG9ULnBhcmVudHMoXCJbcm9sZT10cmVlaXRlbV1cIikuZmlyc3QoKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGpRdWVyeShcIiNcIiArIHRhcmdldC5hdHRyKFwiYXJpYS1sYWJlbGxlZEJ5XCIpKTtcbiAgICAgICAgaWYgKCBsYWJlbElkICYmIGxhYmVsSWQubGVuZ3RoICkge1xuICAgICAgICAgICAgbGFiZWxJZC5hZGRDbGFzcyhcImZvY3VzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKFwiZm9jdXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uRm9jdXNPdXRPZlRyZWVJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9UID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG9ULmlzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpID8gb1QgOiBvVC5wYXJlbnRzKFwiW3JvbGU9dHJlZWl0ZW1dXCIpLmZpcnN0KCk7XG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSBqUXVlcnkoXCIjXCIgKyB0YXJnZXQuYXR0cihcImFyaWEtbGFiZWxsZWRCeVwiKSk7XG4gICAgICAgIGlmICggbGFiZWxJZCAmJiBsYWJlbElkLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGxhYmVsSWQucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImZvY3VzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyBLZXkgRG93blwiKTtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG4gICAgICAgIGlmICggW0ZhY2V0Q29uc3RhbnRzLkVudGVyS2V5Q29kZSwgRmFjZXRDb25zdGFudHMuU3BhY2VLZXlDb2RlLFxuICAgICAgICAgICAgICAgIEZhY2V0Q29uc3RhbnRzLlVwS2V5Q29kZSwgRmFjZXRDb25zdGFudHMuRG93bktleUNvZGUgXS5pbmRleE9mKGNvZGUpIDw9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFtGYWNldENvbnN0YW50cy5FbnRlcktleUNvZGUsIEZhY2V0Q29uc3RhbnRzLlNwYWNlS2V5Q29kZV0uaW5kZXhPZihjb2RlKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZShldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFtGYWNldENvbnN0YW50cy5VcEtleUNvZGUsIEZhY2V0Q29uc3RhbnRzLkRvd25LZXlDb2RlXS5pbmRleE9mKGNvZGUpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVXBBbmREb3duT2ZUcmVlSXRlbShldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVVcEFuZERvd25PZlRyZWVJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBpZiAoW0ZhY2V0Q29uc3RhbnRzLlVwS2V5Q29kZSwgRmFjZXRDb25zdGFudHMuRG93bktleUNvZGVdLmluZGV4T2YoY29kZSkgPD0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIFVwIGFuZCBEb3duXCIpO1xuICAgICAgICBjb25zdCBvVCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBvVC5pcyhcIltyb2xlPXRyZWVpdGVtXVwiKSA/IG9UIDogb1QucGFyZW50cyhcIltyb2xlPXRyZWVpdGVtXVwiKS5maXJzdCgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIEZhY2V0Q29uc3RhbnRzLlVwS2V5Q29kZSA9PT0gY29kZSApIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IExldmVsXG4gICAgICAgICAgICBjb25zdCBwcmV2U2libGluZyA9IHRhcmdldC5wcmV2QWxsKFwiOnZpc2libGVcIikuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICggcHJldlNpYmxpbmcubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJldkRlZXBTaWJsaW5nID0gdGFyZ2V0LnBhcmVudCgpLnByZXZBbGwoXCI6dmlzaWJsZVwiKS5maXJzdCgpLmZpbmQoXCJbcm9sZT10cmVlaXRlbV1cIik7XG4gICAgICAgICAgICBpZiAoIHByZXZEZWVwU2libGluZy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgcHJldkRlZXBTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudHMoXCJbcm9sZT10cmVlaXRlbV1cIikuZWFjaCgoaW5kZXg6IG51bWJlciwgcGFyZW50R3JvdXA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0galF1ZXJ5KHBhcmVudEdyb3VwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDaGlsZCA9IGdyb3VwLnByZXZBbGwoXCI6dmlzaWJsZVwiKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIGlmICggcGFyZW50Q2hpbGQubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBGYWNldENvbnN0YW50cy5Eb3duS2V5Q29kZSA9PT0gY29kZSApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0YXJnZXQuZmluZChcIltyb2xlPXRyZWVpdGVtXTp2aXNpYmxlXCIpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoIGZpcnN0Q2hpbGQubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBMZXZlbFxuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEFsbChcIjp2aXNpYmxlXCIpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoIG5leHRTaWJsaW5nLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlY29uZCBMZXZlbFxuICAgICAgICAgICAgY29uc3QgbmV4dERlZXBTaWJsaW5nID0gdGFyZ2V0LnBhcmVudCgpLm5leHRBbGwoXCI6dmlzaWJsZVwiKS5maXJzdCgpLmZpbmQoXCJbcm9sZT10cmVlaXRlbV1cIik7XG4gICAgICAgICAgICBpZiAoIG5leHREZWVwU2libGluZy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgbmV4dERlZXBTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudHMoXCJbcm9sZT10cmVlaXRlbV1cIikuZWFjaCgoaW5kZXg6IG51bWJlciwgcGFyZW50R3JvdXA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0galF1ZXJ5KHBhcmVudEdyb3VwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDaGlsZCA9IGdyb3VwLm5leHRBbGwoXCI6dmlzaWJsZVwiKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIGlmICggcGFyZW50Q2hpbGQubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5T2ZBbGwgPSAoZXZlbnQsIGhpZGVTaG93OiBTaG93SGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSBGYWNldENvbnN0YW50cy5FbnRlcktleUNvZGVcbiAgICAgICAgICAgICAmJiBjb2RlICE9PSBGYWNldENvbnN0YW50cy5TcGFjZUtleUNvZGUpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZVNob3cgPT09IFNob3dIaWRlLlNob3cgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhcmVudC5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIik7XG4gICAgICAgICAgICBpZiAoIHZhbHVlICkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoalF1ZXJ5KGVsZW1lbnQpLCBoaWRlU2hvdywgbmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmZhY2V0Q29uZmlnO1xuICAgICAgICBjb25zdCBwdWJsaXNoOiBBcnJheTx7a2V5OiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbn0+ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZGF0YSkge1xuICAgICAgICAgICAgZmFjZXQuY29sbGFwc2VkID0gdmFsdWU7XG4gICAgICAgICAgICBwdWJsaXNoLnB1c2goe2tleTogZmFjZXQuaWQsIGNvbGxhcHNlZDogZmFjZXQuY29sbGFwc2VkfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ29sbGFwc2VUb2dnbGUocHVibGlzaCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZVZpc2liaWxpdHlPZk9uZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBvVCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBvVC5pcyhcIltyb2xlPXRyZWVpdGVtXVwiKSA/IG9UIDogb1QucGFyZW50cyhcIltyb2xlPXRyZWVpdGVtXVwiKS5maXJzdCgpO1xuICAgICAgICBjb25zdCBpc0NvbGxhcHNpYmxlTm9kZSA9IHRhcmdldC5oYXNDbGFzcyhcImNvbGxhcHNpYmxlXCIpICYmIG9ULnBhcmVudHMoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikubGVuZ3RoO1xuICAgICAgICBpZiAoICFpc0NvbGxhcHNpYmxlTm9kZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0LmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKTtcbiAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuYXR0cihcImRhdGEtYXR0ci1pZFwiKTtcbiAgICAgICAgY29uc3QgaXNDb2xsYXBzZWQgPSB0YXJnZXQuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIGlmICggIWlzQ29sbGFwc2VkICkge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XG4gICAgICAgIGNvbnN0IHB1Ymxpc2g6IEFycmF5PHtrZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufT4gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZmFjZXQuaWQgPT09IGlkICkge1xuICAgICAgICAgICAgICAgIGZhY2V0LmNvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZDtcbiAgICAgICAgICAgICAgICBwdWJsaXNoLnB1c2goe2tleTogZmFjZXQuaWQsIGNvbGxhcHNlZDogZmFjZXQuY29sbGFwc2VkfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ29sbGFwc2VUb2dnbGUocHVibGlzaCk7XG4gICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKHRhcmdldCwgU2hvd0hpZGUuVG9nZ2xlLCBuYW1lKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldEFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLmZhY2V0LWJvZHkgLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gLmZhY2V0LXZhbHVlLWNoZWNrYm94XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6OjpcIik7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hlY2tlZCA/IEZpbHRlckFjdGlvblR5cGUuQWRkIDogRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIGFjdGlvbiwgdmFsdWVbMl0sIGZhbHNlKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJ0aHJvdHRsZS1kZWJvdW5jZVwiO1xyXG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZU1hbmFnZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaG93SGlkZX0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFNlYXJjaEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJrZXl1cFwiLCBcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIsIGRlYm91bmNlKDI1MCwgdGhpcy5oYW5kbGVTZWFyY2gpKTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlU2VhcmNoID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIGVsZW1lbnQubmV4dCgpLnNob3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5mYWNldC1saXN0IC5mYWNldC1pdGVtXCIpXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZXRJdGVtID0galF1ZXJ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmYWNldEl0ZW0uYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWNldE5hbWVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dFZhbHVlQmxhbmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlQmxhbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHZhbHVlIHdpdGggZmFjZXQgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWx1ZUJsYW5rICYmIGZhY2V0SXRlbS5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0TmFtZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaHdNb3JlRWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2h3TW9yZUVsZW0pLmhhc0NsYXNzKFwiZ3VpLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1sZXNzLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKChpbmRleDogbnVtYmVyLCBzaG93TGVzc0xpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHNob3dMZXNzTGluaykuaGFzQ2xhc3MoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaG93TGVzc0xpbmspLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2hvd0xlc3NMaW5rKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2hvdy1tb3JlLWxpbmtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB2YWx1ZXMgYWdhaW5zdCBjaGlsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFjZXRDaGlsZE1hdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goKGo6IG51bWJlciwgbGFiZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGpRdWVyeShsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0TmFtZU1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRWxlbS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxWYWx1ZSA9IGxhYmVsRWxlbS5hdHRyKFwiZGF0YS1hdHRyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRDaGlsZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgaGlkZSBGYWNldCBJdGVtIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsbWVudCA9IGZhY2V0SXRlbS5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGZhY2V0SXRlbS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZCBDb2xsYXBzZSBGYWNldFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsYXBzZWQgfHwgZmFjZXROYW1lTWF0Y2ggfHwgZmFjZXRDaGlsZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsbWVudCwgU2hvd0hpZGUuU2hvdywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxtZW50LCBTaG93SGlkZS5IaWRlLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubmV4dCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAxKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwidmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dGhyb3R0bGU6IHRocm90dGxlLFxuXHRkZWJvdW5jZTogZGVib3VuY2Vcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cblxudmFyIHRocm90dGxlID0gcmVxdWlyZSgnLi90aHJvdHRsZScpO1xuXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBhdEJlZ2luICAgICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICggZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrICkge1xuXHRyZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlckVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmlsdGVyQ29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLmZhY2V0LWxhYmVscyAubGFiZWxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pcyhcIi5sYWJlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50cyhcIi5sYWJlbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWZpbHRlci1lbnRyeVwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjo6OlwiKTtcclxuICAgICAgICAgICAgbGV0IGlzUmFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNCApIHtcclxuICAgICAgICAgICAgICAgIGlzUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIEZpbHRlckFjdGlvblR5cGUuTWludXMsIHZhbHVlWzJdLCBpc1JhbmdlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5yZW1vdmUtYWxsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25BbGxGaWx0ZXJSZW1vdmUoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuaGlkZS1mYWNldFwiLCB0aGlzLmhpZGVGYWNldCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1mYWNldFwiLCB0aGlzLnNob3dGYWNldCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuaGlkZS1mYWNldFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oaWRlRmFjZXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnNob3ctZmFjZXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZhY2V0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIGhpZGVGYWNldCA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5mYWNldC1jb2xsYXBzZWQtYm9keVwiKS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dGYWNldCA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICQoXCIuZmFjZXQtY29sbGFwc2VkLWJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciB9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgU2hvd0hpZGUgfSBmcm9tIFwiLi9TaG93SGlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBpblVucGluRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5waW4taWNvblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudW5waW4taWNvblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5VbnBpbihldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnBpbi1pY29uXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi51bnBpbi1pY29uXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlUGluVW5waW4oZXZlbnQ6IGFueSwgcGluOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1hdHRyLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmFjZXRDb25maWc7XHJcbiAgICAgICAgZm9yIChjb25zdCBmYWNldCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICggZmFjZXQuaWQgPT09IGlkICkge1xyXG4gICAgICAgICAgICAgICAgZmFjZXQucGlubmVkID0gcGluO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5odG1sKHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJpbmQodGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0RGF0YSgpKSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uUGluVW5waW4oaWQsIHBpbik7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL1BpblVucGluRXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHtGYWNldENvbmZpZ1N0b3JlfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQge0lGYWNldFRlbXBsYXRlU2VydmljZX0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXJcIjtcclxuaW1wb3J0IHtFeHBhbmRDb2xsYXBzZU1hbmFnZXJ9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaG93SGlkZX0gZnJvbSBcIi4vU2hvd0hpZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93TW9yZUxlc3NIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1tb3JlLWxpbmtcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnNob3ctbGVzcy1saW5rXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwia2V5dXBcIiwgXCIuc2hvdy1tb3JlLWxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwia2V5dXBcIiwgXCIuc2hvdy1sZXNzLWxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50OiBhbnksIHNob3dNb3JlOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmIChzaG93TW9yZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50cyhcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5leHRyYS1maWx0ZXJcIilcclxuICAgICAgICAgICAgICAgIC5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLm5leHQoKS5zaG93KCkuZmluZChcImFcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIilcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVPdXQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnByZXYoKS5zaG93KCkuZmluZChcImFcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd01vcmVMZXNzSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uc3RhbnRzIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0S2V5Qm9hcmROYXZpZ2F0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5KSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5ZG93blwiLCBcIi5hcnJvd2tleXMtYXdhcmVcIiwgdGhpcy5oYW5kbGVBcnJvd0tleXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVSZWdpc3RlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub2ZmKFwia2V5ZG93blwiLCBcIi5hcnJvd2tleXMtYXdhcmVcIiwgdGhpcy5oYW5kbGVBcnJvd0tleXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVBcnJvd0tleXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKCBjb2RlICE9PSBGYWNldENvbnN0YW50cy5VcEtleUNvZGUgJiYgY29kZSAhPT0gRmFjZXRDb25zdGFudHMuRG93bktleUNvZGUgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpZiAoICFlbGVtZW50LmlzKFwiLmFycm93a2V5cy1hd2FyZVwiKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZvY3VzYWJsZTtcclxuICAgICAgICBjb25zdCBkaXYgPSBlbGVtZW50LnBhcmVudCgpO1xyXG4gICAgICAgIGlmICggY29kZSA9PT0gRmFjZXRDb25zdGFudHMuVXBLZXlDb2RlICkge1xyXG4gICAgICAgICAgICBmb2N1c2FibGUgPSBkaXYucHJldigpLmZpbmQoXCIuYXJyb3drZXlzLWF3YXJlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGNvZGUgPT09IEZhY2V0Q29uc3RhbnRzLkRvd25LZXlDb2RlICkge1xyXG4gICAgICAgICAgICBmb2N1c2FibGUgPSBkaXYubmV4dCgpLmZpbmQoXCIuYXJyb3drZXlzLWF3YXJlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGZvY3VzYWJsZSAmJiBmb2N1c2FibGUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBldmVudC52aWV3LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBmb2N1c2FibGUuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzaG93TW9yZSA9IGRpdi5uZXh0KCkuZmluZChcInNob3ctbW9yZS1saW5rXCIpIHx8IGRpdi5uZXh0KCkuZmluZChcInNob3ctbGVzcy1saW5rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIHNob3dNb3JlICYmIHNob3dNb3JlLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHNob3dNb3JlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0S2V5Qm9hcmROYXZpZ2F0aW9uSGFuZGxlci50cyJdLCJzb3VyY2VSb290IjoiIn0=