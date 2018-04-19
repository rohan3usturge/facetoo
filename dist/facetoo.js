(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "moment"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("handlebars/runtime"), require("moment"));
	else
		root["Facetoo"] = factory(root["Handlebars"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_33__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 2 */
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
/* 3 */
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
/* 4 */
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

  return "<div class=\"gui of-hidden min-w-50 w-auto fluid-h flex column container\">\n    <div class=\"gui h-auto flex m-t-12\">\n        <button class=\"gui cursor-pointer gui-subheading-1 m-0 expand-all\">\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\n            Expand All\n        </button>\n        <div class=\"gui m-r-5 m-l-5\"></div>\n        <button class=\"gui cursor-pointer gui-subheading-1 m-0 collapse-all\">\n            <i class=\"gui-icon special rotate-right gui-icon-chevdouble\"></i>\n            Collapse All\n        </button>\n    </div>\n    <div class=\"gui input fluid-w p-t-5 p-r-5 p-b-5 p-l-1 m-t-10\">\n        <input class=\"gui input p-5 h-30 fluid-w gui-subheading-2 filter-search-input\" placeholder=\"Search Filters\" />\n        <i class=\"gui-icon gui-icon-search gui-hidden\"></i>\n    </div>\n    <div class=\"gui fluid-h facet-list of-auto ofx-hidden m-t-10\">\n        "
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-pinned.hbs */ 18),depth0,{"name":"facet-pinned","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-unpinned.hbs */ 19),depth0,{"name":"facet-unpinned","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 5 */
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
        return "<a tabindex=\"0\" class=\"gui simple show-more-link cursor-pointer p-0 m-t-3\">Show "
            + (index.length - v2)
            + " More </a>"
            + "<a tabindex=\"0\" class=\"gui simple show-less-link cursor-pointer gui-hidden p-0 m-t-3\">"
            + "Show Less</a>";
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
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 21));
__export(__webpack_require__(/*! ./FacetActionHandler */ 22));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 23));
__export(__webpack_require__(/*! ./FilterActionHandler */ 24));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 25));
__export(__webpack_require__(/*! ./PinUnpinEventHandler */ 26));
__export(__webpack_require__(/*! ./ShowMoreLessHandler */ 27));


/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseManager.ts ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 3);
var ExpandCollapseManager = /** @class */ (function () {
    function ExpandCollapseManager() {
    }
    ExpandCollapseManager.ControlVisibilityOfFilter = function (headerElement, showHide) {
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
        }
        else {
            headerElement.parents(".facet-item").find(".facet-item-description").slideUp(200);
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
        }
    };
    return ExpandCollapseManager;
}());
exports.ExpandCollapseManager = ExpandCollapseManager;


/***/ }),
/* 12 */
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
/* 13 */
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
__export(__webpack_require__(/*! ./Facet */ 14));
__export(__webpack_require__(/*! ./Filter */ 28));


/***/ }),
/* 14 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFacetHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFacetHandler */ 15);
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 16);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 20);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 10);
var Facet = /** @class */ (function () {
    function Facet(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (facets) {
            _this.templateService.setData(facets);
            var fullFacet = _this.templateService.bind(facets);
            _this.facetElement.html(fullFacet);
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
/* 15 */
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
        return this.tempateFunctionForFacetMain({ favorites: favorites, nonFavorites: nonFavorites, noOfFacetToShow: noOfFacetToShow });
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
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 4),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 4),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
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
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.favorites : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "\r\n<div class=\"item facet-item "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 5)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + " gui m-t-6\" data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n    <div class=\"content\">\r\n        <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n            <span class=\"gui gui-subheading-1 primary m-0 expansion-icon cursor-pointer\" tabindex=\"0\">\r\n                "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </span>\r\n            <span>\r\n                <i data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"gui gui-icon selectable primary gui-icon-unpin m-t-5 m-r-10 unpin-icon cursor-pointer\" tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </span>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"description gui facet-item-description m-t-2 m-l-5 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 7)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + "\">\r\n            <div class=\"gui fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 8)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <i class=\"gui gui-icon selectable gui-icon-chevron-up primary expansion-icon m-t-5 m-r-10 cursor-pointer\" tabindex=\"0\"></i>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <i class=\"gui gui-icon selectable gui-icon-chevron-down primary expansion-icon m-t-5 m-r-10 cursor-pointer\" tabindex=\"0\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"gui item "
    + container.escapeExpression(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 9)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </div>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <label data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\" class=\"gui cursor-pointer no-wrap primary text-shorten m-0\">\r\n                        <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 1)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 2)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                            value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                        <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                    </label>\r\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <label data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\" class=\"gui cursor-pointer no-wrap text-shorten m-0\">\r\n                        <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 1)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 2)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                            value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                        <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                    </label>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gui m-t-10\">\r\n    \r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"gui m-b-5 m-t-5\">\r\n    <span class=\"gui gui-subheading-1\">\r\n        PINNED FILTERS\r\n    </span>\r\n</div>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.favorites : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 19 */
/*!************************************!*\
  !*** ./src/hbs/facet-unpinned.hbs ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"item facet-item gui m-t-6 "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Collapsed.ts */ 5)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"Collapsed","hash":{},"data":data}))
    + "\" data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-attr-name=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n    <div class=\"content\">\r\n        <div class=\"facet-item-header fluid gui item flex jc-sb\">\r\n            <span class=\"gui gui-subheading-1 primary m-0 expansion-icon cursor-pointer\" tabindex=\"0\">\r\n                "
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 6)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </span>\r\n            <span>\r\n                <i data-attr-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"gui gui-icon selectable primary gui-icon-pin m-t-5 pin-icon m-r-10 cursor-pointer\" tabindex=\"0\"></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </span>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"description gui "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Hidden.ts */ 7)).call(alias1,(depth0 != null ? depth0.collapsed : depth0),true,{"name":"Hidden","hash":{},"data":data}))
    + " facet-item-description m-t-2 m-l-5\">\r\n            <div class=\"gui fluid-w m-0 p-0\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/ShowMoreLessLink.ts */ 8)).call(alias1,(depth0 != null ? depth0.facetValues : depth0),(depths[1] != null ? depths[1].noOfFacetToShow : depths[1]),{"name":"ShowMoreLessLink","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <i class=\"gui gui-icon selectable gui-icon-chevron-up primary expansion-icon m-t-5 m-r-10 cursor-pointer\" tabindex=\"0\"></i>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <i class=\"gui gui-icon selectable gui-icon-chevron-down primary expansion-icon m-t-5 m-r-10 cursor-pointer\" tabindex=\"0\"></i>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"gui item "
    + container.escapeExpression(__default(__webpack_require__(/*! ./src/hbs/helpers/CheckLength.ts */ 9)).call(alias1,(data && data.index),(depths[2] != null ? depths[2].noOfFacetToShow : depths[2]),{"name":"CheckLength","hash":{},"data":data}))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <label data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\" class=\"gui cursor-pointer no-wrap primary text-shorten m-0\">\r\n                        <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 1)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 2)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                            value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                        <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                    </label>\r\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <label data-attr-value=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\" class=\"gui cursor-pointer no-wrap text-shorten m-0\">\r\n                        <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 1)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 2)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                            value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n                        <span class=\"gui gui-subheading-1 m-0\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\r\n                    </label>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"gui m-b-5 m-t-10 \">\r\n    <span class=\"gui gui-subheading-1\">\r\n        ALL FILTERS\r\n    </span>\r\n</div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.nonFavorites : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 20 */
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
/* 21 */
/*!*************************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseFacetsHandler.ts ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 11);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 3);
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
            _this.element.find(".facet-item-header").each(function (index, element) {
                ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), hideShow);
            });
            var value = hideShow === ShowHide_1.ShowHide.Show ? true : false;
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
            var bool = target.hasClass("gui-icon-chevron-up");
            var id = parent.attr("data-attr-id");
            var data = _this.configStore.Options.facetConfig;
            var publish = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var facet = data_2[_i];
                if (facet.id === id) {
                    facet.collapsed = bool;
                    publish.push({ key: facet.id, collapsed: facet.collapsed });
                    break;
                }
            }
            _this.configStore.Options.onCollapseToggle(publish);
            ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElement, ShowHide_1.ShowHide.Toggle);
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
/* 22 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetActionHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 12);
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
/* 23 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseManager_1 = __webpack_require__(/*! ./ExpandCollapseManager */ 11);
var ShowHide_1 = __webpack_require__(/*! ./ShowHide */ 3);
var FacetSearchHandler = /** @class */ (function () {
    function FacetSearchHandler(element, configStore) {
        var _this = this;
        this.element = element;
        this.configStore = configStore;
        this.handleSearch = function (event) {
            var element = jQuery(event.target);
            element.parent().addClass("loading");
            element.next().show();
            var val = element
                .val()
                .toString()
                .toLowerCase();
            _this
                .element
                .find(".facet-list .facet-item")
                .each(function (i, e) {
                var facetItem = jQuery(e);
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
                    ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide_1.ShowHide.Show);
                }
                else {
                    ExpandCollapseManager_1.ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide_1.ShowHide.Hide);
                }
            });
            element.parent().removeClass("loading");
            element.next().hide();
            event.stopPropagation();
        };
    }
    FacetSearchHandler.prototype.RegisterDomHandler = function () {
        this
            .element
            .on("keyup", ".filter-search-input", this.handleSearch);
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
/* 24 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 12);
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
/* 25 */
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
/* 26 */
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
        this.element.html(this.templateService.bind(this.templateService.getData()));
        this.configStore.Options.onPinUnpin(id, pin);
        event.stopPropagation();
    };
    return PinUnpinEventHandler;
}());
exports.PinUnpinEventHandler = PinUnpinEventHandler;


/***/ }),
/* 27 */
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
                .parent()
                .find(".extra-filter")
                .fadeIn(this.configStore.Options.animationTime, function () {
                element.hide();
                element
                    .siblings("a")
                    .show();
            });
        }
        else {
            element
                .parent()
                .find(".extra-filter")
                .fadeOut(this.configStore.Options.animationTime, function () {
                element
                    .siblings("a")
                    .show();
                element.hide();
            });
        }
        event.stopPropagation();
    };
    return ShowMoreLessHandler;
}());
exports.ShowMoreLessHandler = ShowMoreLessHandler;


/***/ }),
/* 28 */
/*!*******************************!*\
  !*** ./src/ts/main/Filter.ts ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HotKeysFiltersHandler_1 = __webpack_require__(/*! ../eventhandlers/HotKeysFiltersHandler */ 29);
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 30);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 34);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 10);
var Filter = /** @class */ (function () {
    function Filter(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (filters) {
            var facetSubHeader = _this.templateService.bind(filters);
            _this.filterElement.html(facetSubHeader);
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
/* 29 */
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
/* 30 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 31);
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
/* 31 */
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
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Range.ts */ 32)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.min : depth0),(depth0 != null ? depth0.max : depth0),(depths[1] != null ? depths[1].type : depths[1]),{"name":"Range","hash":{},"data":data}))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 32 */
/*!**********************************!*\
  !*** ./src/hbs/helpers/Range.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment */ 33);
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
/* 33 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwOTUyYzMzMzg2NGUyNWMxNzcxYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2xsYXBzZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9IaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrTGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZhY2V0SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1tYWluLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LXBpbm5lZC5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC11bnBpbm5lZC5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldEFjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvUGluVW5waW5FdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvU2hvd01vcmVMZXNzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zZXJ2aWNlcy9GaWx0ZXJUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9SYW5nZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQWE7SUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKdkIsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFhO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVGLGtCQUFlLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSnhCLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJ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Ozs7Ozs7O0FDdEJyQixnRDs7Ozs7Ozs7Ozs7Ozs7QUNHQTtJQWFJLDJCQUFZLE9BQXVCO1FBQW5DLGlCQUtDO1FBaEJPLHlCQUFvQixHQUFtQjtZQUMzQyxhQUFhLEVBQUUsR0FBRztZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFO2dCQUNuQixTQUFTO1lBQ1QsQ0FBQztZQUNELGNBQWMsRUFBRSxVQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBd0I7Z0JBQ3JFLFNBQVM7WUFDVCxDQUFDO1NBQ0osQ0FBQztRQVVNLGtCQUFhLEdBQUcsVUFBQyxZQUE0QjtZQUNqRCxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFWRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUNuRixDQUFDO0lBQ0wsQ0FBQztJQUNELHNCQUFXLHNDQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJTCx3QkFBQztBQUFELENBQUM7QUF6QlksOENBQWlCIiwiZmlsZSI6ImZhY2V0b28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCIsIFwibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wibW9tZW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwOTUyYzMzMzg2NGUyNWMxNzcxYyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwiY29uc3QgZGlzYWJsZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiZGlzYWJsZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsImV4cG9ydCBlbnVtIFNob3dIaWRlIHtcclxuICAgIFNob3csXHJcbiAgICBIaWRlLFxyXG4gICAgVG9nZ2xlLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93SGlkZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG9mLWhpZGRlbiBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgaC1hdXRvIGZsZXggbS10LTEyXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBndWktc3ViaGVhZGluZy0xIG0tMCBleHBhbmQtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gc3BlY2lhbCByb3RhdGUtcmlnaHQgZ3VpLWljb24tY2hldmRvdWJsZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIEV4cGFuZCBBbGxcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci01IG0tbC01XFxcIj48L2Rpdj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBndWktc3ViaGVhZGluZy0xIG0tMCBjb2xsYXBzZS1hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBzcGVjaWFsIHJvdGF0ZS1yaWdodCBndWktaWNvbi1jaGV2ZG91YmxlXFxcIj48L2k+XFxuICAgICAgICAgICAgQ29sbGFwc2UgQWxsXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpbnB1dCBmbHVpZC13IHAtdC01IHAtci01IHAtYi01IHAtbC0xIG0tdC0xMFxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBpbnB1dCBwLTUgaC0zMCBmbHVpZC13IGd1aS1zdWJoZWFkaW5nLTIgZmlsdGVyLXNlYXJjaC1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBGaWx0ZXJzXFxcIiAvPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLXNlYXJjaCBndWktaGlkZGVuXFxcIj48L2k+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQtaCBmYWNldC1saXN0IG9mLWF1dG8gb2Z4LWhpZGRlbiBtLXQtMTBcXFwiPlxcbiAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LXBpbm5lZC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LXBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtdW5waW5uZWQuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC11bnBpbm5lZFwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY29sbGFwc2VkID0gKHZhbHVlOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBcIiBjb2xsYXBzZWQgXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbGxhcHNlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Db2xsYXBzZWQudHMiLCJpbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiO1xyXG5cclxuY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzQ291bnQgPSAoZmFjZXRWYWx1ZXM6IElGYWNldFZhbHVlW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGlmIChmYWNldFZhbHVlcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMgIT09IG51bGxcclxuICAgICAgICAmJiBmYWNldFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmFjZXRWYWx1ZSBvZiBmYWNldFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY2V0VmFsdWUuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXggPT09IDAgPyBcIlwiIDogXCI8c3BhbiBjbGFzcz1cXFwiZ3VpLWJvZHktMlxcXCI+KFwiICsgaW5kZXggKyBcIik8L3NwYW4+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RlZEZpbHRlcnNDb3VudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9TZWxlY3RlZEZpbHRlcnNDb3VudC50cyIsImNvbnN0IGhpZGRlbiA9ICh2YWx1ZTogYm9vbGVhbiwgaW52ZXJ0OiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBoaWRlO1xyXG4gICAgaWYgKGludmVydCkge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgaGlkZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGlkZSA/IFwiIGd1aS1oaWRkZW4gXCIgOiBcIiBcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhpZGRlbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9IaWRkZW4udHMiLCJjb25zdCBTaG93TW9yZUxlc3NMaW5rID0gKGluZGV4LCB2Miwgb3B0aW9ucyk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoaW5kZXgubGVuZ3RoID4gdjIpIHtcclxuICAgICAgICByZXR1cm4gXCI8YSB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcImd1aSBzaW1wbGUgc2hvdy1tb3JlLWxpbmsgY3Vyc29yLXBvaW50ZXIgcC0wIG0tdC0zXFxcIj5TaG93IFwiXHJcbiAgICAgICAgICAgICAgKyAoaW5kZXgubGVuZ3RoIC0gdjIpXHJcbiAgICAgICAgICAgICAgKyBcIiBNb3JlIDwvYT5cIlxyXG4gICAgICAgICAgICAgICsgXCI8YSB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcImd1aSBzaW1wbGUgc2hvdy1sZXNzLWxpbmsgY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlbiBwLTAgbS10LTNcXFwiPlwiXHJcbiAgICAgICAgICAgICAgKyBcIlNob3cgTGVzczwvYT5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZUxlc3NMaW5rO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1Nob3dNb3JlTGVzc0xpbmsudHMiLCJjb25zdCBjaGVja0xlbmd0aCA9IChpbmRleCwgdjIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggKyAxID4gdjIpIHtcclxuICAgICAgICByZXR1cm4gXCJndWktaGlkZGVuIGV4dHJhLWZpbHRlclwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja0xlbmd0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja0xlbmd0aC50cyIsImV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GYWNldFNlYXJjaEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZpbHRlckFjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUGluVW5waW5FdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vU2hvd01vcmVMZXNzSGFuZGxlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvaW5kZXgudHMiLCJpbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwYW5kQ29sbGFwc2VNYW5hZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIgPSAoaGVhZGVyRWxlbWVudDogSlF1ZXJ5LCBzaG93SGlkZTogU2hvd0hpZGUpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uRWxlbWVudCA9IGhlYWRlckVsZW1lbnQuY2hpbGRyZW4oXCJzcGFuXCIpLmNoaWxkcmVuKFwiLmV4cGFuc2lvbi1pY29uXCIpIDtcclxuICAgICAgICBjb25zdCBjdXJyZW50bHlWaXNpYmxlID0gaWNvbkVsZW1lbnQuaGFzQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgIGlmIChTaG93SGlkZS5Ub2dnbGUgIT09IHNob3dIaWRlICYmICgoY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuU2hvdykgfHxcclxuICAgICAgICAgICAgKCFjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5IaWRlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWN1cnJlbnRseVZpc2libGUpIHtcclxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIikuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlRG93bigyMDApO1xyXG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpLmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcclxuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLWRvd25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VNYW5hZ2VyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XG4gICAgQWRkID0gXCJBZGRcIixcbiAgICBNaW51cyA9IFwiTWludXNcIixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9GYWNldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0VudHJ5LnRzIiwiaW1wb3J0IHsgSG90S2V5c0ZhY2V0SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGYWNldEhhbmRsZXJcIjtcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0VmFsdWVcIjtcbmltcG9ydCB7IEZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IElGYWNldE9wdGlvbnMgfSBmcm9tIFwiLi8uLi9jb25maWcvSUZhY2V0T3B0aW9uc1wiO1xuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyICwgRmFjZXRBY3Rpb25IYW5kbGVyLCBGYWNldFNlYXJjaEhhbmRsZXIsXG4gICAgICAgICBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciwgSUV2ZW50SGFuZGxlciwgUGluVW5waW5FdmVudEhhbmRsZXIsIFNob3dNb3JlTGVzc0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldCB7XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmFjZXRFbGVtZW50OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmFjZXRDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmFjZXRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0QWN0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldFNlYXJjaEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgSG90S2V5c0ZhY2V0SGFuZGxlcigpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgUGluVW5waW5FdmVudEhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUsIHRoaXMudGVtcGxhdGVTZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IFNob3dNb3JlTGVzc0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBiaW5kID0gIChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlLnNldERhdGEoZmFjZXRzKTtcbiAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChmYWNldHMpO1xuICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5odG1sKGZ1bGxGYWNldCk7XG4gICAgfVxuICAgIHB1YmxpYyBoaWRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5maW5kKFwiLmZhY2V0LWJvZHlcIikuZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvdyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQuZmluZChcIi5mYWNldC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIHRoaXMuZmFjZXRFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5vZmYoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGhhbmRsZXIuZGVyZWdpc3RlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5kZXJlZ2lzdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmNsYXNzIEhvdEtleXNGYWNldEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlUmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c09uU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAgJiYgIGV2ZW50LmtleSA9PT0gXCJmXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmZpbHRlci1zZWFyY2gtaW5wdXRcIikuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SG90S2V5c0ZhY2V0SGFuZGxlcn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9Ib3RLZXlzRmFjZXRIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHtJRmFjZXR9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgKiBhcyBGYWNldE1haW4gZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LW1haW4uaGJzXCI7XG5pbXBvcnQge0ZhY2V0Q29uZmlnU3RvcmV9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQge0lGYWNldFRlbXBsYXRlU2VydmljZX0gZnJvbSBcIi4vSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNldFRlbXBsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTogSUZhY2V0W107XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7XG4gICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4gPSBGYWNldE1haW47XG4gIH1cbiAgcHVibGljIGJpbmQoZmFjZXRzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZDtcbiAgICBjb25zdCBtZXJnZWRGYWNldHMgPSB0aGlzLm1lcmdlV2l0aEZhY2V0Q29uZmlnKGZhY2V0cyk7XG4gICAgY29uc3QgZmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgIT09IHVuZGVmaW5lZCAmJiBmLnBpbm5lZCk7XG4gICAgY29uc3Qgbm9uRmF2b3JpdGVzID0gbWVyZ2VkRmFjZXRzLmZpbHRlcigoZikgPT4gZi5waW5uZWQgPT09IHVuZGVmaW5lZCB8fCAhZi5waW5uZWQpO1xuICAgIGZhdm9yaXRlcy5zb3J0KHRoaXMuY29tcGFyZUZuKTtcbiAgICBub25GYXZvcml0ZXMuc29ydCh0aGlzLmNvbXBhcmVGbik7XG4gICAgY29uc3Qgbm9PZkZhY2V0VG9TaG93ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm5vT2ZGYWNldFRvU2hvdztcbiAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4oe2Zhdm9yaXRlcywgbm9uRmF2b3JpdGVzLCBub09mRmFjZXRUb1Nob3d9KTtcbiAgfVxuICBwdWJsaWMgc2V0RGF0YSA9IChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5kYXRhID0gZmFjZXRzO1xuICB9XG4gIHB1YmxpYyBnZXREYXRhID0gKCk6IElGYWNldFtdID0+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHByaXZhdGUgY29tcGFyZUZuID0gKHByZXY6IGFueSwgbmV4dDogYW55KSA9PiB7XG4gICAgaWYgKHByZXYub3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmV4dC5vcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXYub3JkZXIgLSBuZXh0Lm9yZGVyO1xuICB9XG4gIHByaXZhdGUgbWVyZ2VXaXRoRmFjZXRDb25maWcgPSAoZmFjZXRzOiBJRmFjZXRbXSkgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEFycmF5OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZmFjZXRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGZhY2V0Q29uZmlnIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZykge1xuICAgICAgICBpZiAoZmFjZXRDb25maWcuaWQgPT09IGZhY2V0LmlkKSB7XG4gICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhY2V0Q29uZmlnLmNvbGxhcHNlZCxcbiAgICAgICAgICAgIGZhY2V0UmFuZ2VzOiBmYWNldC5mYWNldFJhbmdlcyxcbiAgICAgICAgICAgIGZhY2V0VmFsdWVzOiBmYWNldC5mYWNldFZhbHVlcyxcbiAgICAgICAgICAgIGlkOiBmYWNldENvbmZpZy5pZCxcbiAgICAgICAgICAgIG5hbWU6IGZhY2V0Q29uZmlnLm5hbWUsXG4gICAgICAgICAgICBvcmRlcjogZmFjZXRDb25maWcub3JkZXIsXG4gICAgICAgICAgICBwaW5uZWQ6IGZhY2V0Q29uZmlnLnBpbm5lZCxcbiAgICAgICAgICAgIHR5cGU6IGZhY2V0Q29uZmlnLnR5cGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZEFycmF5O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtYm9keSBndWkgZmx1aWQtaCBvZi1oaWRkZW4gZ3VpLWhpZGRlblxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWJvZHkuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1ib2R5XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtYm9keSBndWkgZmx1aWQtaCBvZi1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlwiO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhdm9yaXRlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwiaXRlbSBmYWNldC1pdGVtIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbGxhcHNlZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ29sbGFwc2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCIgZ3VpIG0tdC02XFxcIiBkYXRhLWF0dHItbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWl0ZW0taGVhZGVyIGZsdWlkIGd1aSBpdGVtIGZsZXggamMtc2JcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBwcmltYXJ5IG0tMCBleHBhbnNpb24taWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxpIGRhdGEtYXR0ci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgcHJpbWFyeSBndWktaWNvbi11bnBpbiBtLXQtNSBtLXItMTAgdW5waW4taWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbiBndWkgZmFjZXQtaXRlbS1kZXNjcmlwdGlvbiBtLXQtMiBtLWwtNSBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHRydWUse1wibmFtZVwiOlwiSGlkZGVuXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC13IG0tMCBwLTBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTaG93TW9yZUxlc3NMaW5rLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5ub09mRmFjZXRUb1Nob3cgOiBkZXB0aHNbMV0pLHtcIm5hbWVcIjpcIlNob3dNb3JlTGVzc0xpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLXVwIHByaW1hcnkgZXhwYW5zaW9uLWljb24gbS10LTUgbS1yLTEwIGN1cnNvci1wb2ludGVyXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9pPlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBzZWxlY3RhYmxlIGd1aS1pY29uLWNoZXZyb24tZG93biBwcmltYXJ5IGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIjtcbn0sXCI3XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpdGVtIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tMZW5ndGgudHNcIikpLmNhbGwoYWxpYXMxLChkYXRhICYmIGRhdGEuaW5kZXgpLChkZXB0aHNbMl0gIT0gbnVsbCA/IGRlcHRoc1syXS5ub09mRmFjZXRUb1Nob3cgOiBkZXB0aHNbMl0pLHtcIm5hbWVcIjpcIkNoZWNrTGVuZ3RoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDEwLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiOFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIihcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpXFxcIiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIG5vLXdyYXAgcHJpbWFyeSB0ZXh0LXNob3J0ZW4gbS0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcblwiO1xufSxcIjEwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtYXR0ci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIilcXFwiIGNsYXNzPVxcXCJndWkgY3Vyc29yLXBvaW50ZXIgbm8td3JhcCB0ZXh0LXNob3J0ZW4gbS0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcblwiO1xufSxcIjEyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTEwXFxcIj5cXHJcXG4gICAgXFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC01XFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xXFxcIj5cXHJcXG4gICAgICAgIFBJTk5FRCBGSUxURVJTXFxyXFxuICAgIDwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhdm9yaXRlcyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgxMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LXBpbm5lZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIml0ZW0gZmFjZXQtaXRlbSBndWkgbS10LTYgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ29sbGFwc2VkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDb2xsYXBzZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGRhdGEtYXR0ci1uYW1lPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtaXRlbS1oZWFkZXIgZmx1aWQgZ3VpIGl0ZW0gZmxleCBqYy1zYlxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIHByaW1hcnkgbS0wIGV4cGFuc2lvbi1pY29uIGN1cnNvci1wb2ludGVyXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZEZpbHRlcnNDb3VudC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJTZWxlY3RlZEZpbHRlcnNDb3VudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGkgZGF0YS1hdHRyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBwcmltYXJ5IGd1aS1pY29uLXBpbiBtLXQtNSBwaW4taWNvbiBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2xsYXBzZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDQsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24gZ3VpIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEhpZGRlbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCksdHJ1ZSx7XCJuYW1lXCI6XCJIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC0yIG0tbC01XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQtdyBtLTAgcC0wXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2hvd01vcmVMZXNzTGluay50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSwoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzFdKSx7XCJuYW1lXCI6XCJTaG93TW9yZUxlc3NMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIHNlbGVjdGFibGUgZ3VpLWljb24tY2hldnJvbi11cCBwcmltYXJ5IGV4cGFuc2lvbi1pY29uIG0tdC01IG0tci0xMCBjdXJzb3ItcG9pbnRlclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvaT5cXHJcXG5cIjtcbn0sXCI0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gc2VsZWN0YWJsZSBndWktaWNvbi1jaGV2cm9uLWRvd24gcHJpbWFyeSBleHBhbnNpb24taWNvbiBtLXQtNSBtLXItMTAgY3Vyc29yLXBvaW50ZXJcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L2k+XFxyXFxuXCI7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgaXRlbSBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrTGVuZ3RoLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBkYXRhLmluZGV4KSwoZGVwdGhzWzJdICE9IG51bGwgPyBkZXB0aHNbMl0ubm9PZkZhY2V0VG9TaG93IDogZGVwdGhzWzJdKSx7XCJuYW1lXCI6XCJDaGVja0xlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg3LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg5LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWF0dHItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIihcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpXFxcIiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIG5vLXdyYXAgcHJpbWFyeSB0ZXh0LXNob3J0ZW4gbS0wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIG0tMFxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcblwiO1xufSxcIjlcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1hdHRyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIoXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKVxcXCIgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBuby13cmFwIHRleHQtc2hvcnRlbiBtLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGZhY2V0LXZhbHVlLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIG0tbC0wXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTEgbS0wXFxcIj4oXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIG0tYi01IG0tdC0xMCBcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTFcXFwiPlxcclxcbiAgICAgICAgQUxMIEZJTFRFUlNcXHJcXG4gICAgPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5vbkZhdm9yaXRlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtdW5waW5uZWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7RmlsdGVyQWN0aW9uVHlwZX0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQge0lGYWNldE9wdGlvbnN9IGZyb20gXCIuL0lGYWNldE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q29uZmlnU3RvcmUge1xuICAgIHByaXZhdGUgb3B0aW9uczogSUZhY2V0T3B0aW9ucztcbiAgICBwcml2YXRlIGRlZmF1bHRGYWNldE9wdGlvbnM6IElGYWNldE9wdGlvbnMgPSB7XG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDIwMCxcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgZmFjZXRDb25maWc6IFtdLFxuICAgICAgICBub09mRmFjZXRUb1Nob3c6IDUsXG4gICAgICAgIC8vIGZhY2V0czogW10sXG4gICAgICAgIG9uQ29sbGFwc2VUb2dnbGU6IChjb2xsYXBzZUNvbmZpZzogW3trZXk6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFufV0pID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgICAgICBvbkZpbHRlckNoYW5nZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBhY3Rpb246IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgICAgICBvblBpblVucGluOiAoa2V5OiBzdHJpbmcsIHBpbjogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmFjZXRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElGYWNldE9wdGlvbnMge3JldHVybiB0aGlzLm9wdGlvbnM7IH1cbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJRmFjZXRPcHRpb25zKTogSUZhY2V0T3B0aW9ucyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRGYWNldE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZU1hbmFnZXIgfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5leHBhbmQtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5T2ZBbGwoZXZlbnQsIFNob3dIaWRlLlNob3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5TaG93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eU9mQWxsKGV2ZW50LCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LWl0ZW0taGVhZGVyIC5leHBhbnNpb24taWNvblwiLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmZhY2V0LWl0ZW0taGVhZGVyIC5leHBhbnNpb24taWNvblwiLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlPZk9uZSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5T2ZBbGwgPSAoZXZlbnQsIGhpZGVTaG93OiBTaG93SGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgaGlkZVNob3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoaWRlU2hvdyA9PT0gU2hvd0hpZGUuU2hvdyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcbiAgICAgICAgY29uc3QgcHVibGlzaDogQXJyYXk8e2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGZhY2V0LmNvbGxhcHNlZCA9IHZhbHVlO1xuICAgICAgICAgICAgcHVibGlzaC5wdXNoKHtrZXk6IGZhY2V0LmlkLCBjb2xsYXBzZWQ6IGZhY2V0LmNvbGxhcHNlZH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNvbGxhcHNlVG9nZ2xlKHB1Ymxpc2gpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5T2ZPbmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gdGFyZ2V0LnBhcmVudHMoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGhlYWRlckVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpO1xuICAgICAgICBjb25zdCBib29sID0gdGFyZ2V0Lmhhc0NsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuYXR0cihcImRhdGEtYXR0ci1pZFwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcbiAgICAgICAgY29uc3QgcHVibGlzaDogQXJyYXk8e2tleTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW59PiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmYWNldC5pZCA9PT0gaWQgKSB7XG4gICAgICAgICAgICAgICAgZmFjZXQuY29sbGFwc2VkID0gYm9vbDtcbiAgICAgICAgICAgICAgICBwdWJsaXNoLnB1c2goe2tleTogZmFjZXQuaWQsIGNvbGxhcHNlZDogZmFjZXQuY29sbGFwc2VkfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ29sbGFwc2VUb2dnbGUocHVibGlzaCk7XG4gICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsZW1lbnQsIFNob3dIaWRlLlRvZ2dsZSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cblxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5mYWNldC1ib2R5IC5mYWNldC1pdGVtLWRlc2NyaXB0aW9uIC5mYWNldC12YWx1ZS1jaGVja2JveFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsU3RyLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBjaGVja2VkID8gRmlsdGVyQWN0aW9uVHlwZS5BZGQgOiBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzO1xuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgYWN0aW9uLCB2YWx1ZVsyXSwgZmFsc2UpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRBY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHtGYWNldENvbmZpZ1N0b3JlfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQge0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcn0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VNYW5hZ2VyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7U2hvd0hpZGV9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRTZWFyY2hIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwia2V5dXBcIiwgXCIuZmlsdGVyLXNlYXJjaC1pbnB1dFwiLCB0aGlzLmhhbmRsZVNlYXJjaCk7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZVNlYXJjaCA9IChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKFwibG9hZGluZ1wiKTtcclxuICAgICAgICBlbGVtZW50Lm5leHQoKS5zaG93KCk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudFxyXG4gICAgICAgICAgICAudmFsKClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAuZmluZChcIi5mYWNldC1saXN0IC5mYWNldC1pdGVtXCIpXHJcbiAgICAgICAgICAgIC5lYWNoKChpOiBudW1iZXIsIGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2V0SXRlbSA9IGpRdWVyeShlKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYWNldE5hbWVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsdWVCbGFuayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaXMgZW1wdHlcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWVCbGFuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHZhbHVlIHdpdGggZmFjZXQgbmFtZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dFZhbHVlQmxhbmsgJiYgZmFjZXRJdGVtLmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWNldE5hbWVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LW1vcmUtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFjaCgoaW5kZXg6IG51bWJlciwgc2h3TW9yZUVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2h3TW9yZUVsZW0pLmhhc0NsYXNzKFwiZ3VpLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShzaHdNb3JlRWxlbSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2h3TW9yZUVsZW0pLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFjaCgoaW5kZXg6IG51bWJlciwgc2hvd0xlc3NMaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHNob3dMZXNzTGluaykuaGFzQ2xhc3MoXCJndWktaGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHNob3dMZXNzTGluaykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2hvd0xlc3NMaW5rKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNob3ctbW9yZS1saW5rXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zaG93LWxlc3MtbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB2YWx1ZXMgYWdhaW5zdCBjaGlsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBmYWNldENoaWxkTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZhY2V0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwibGFiZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAuZWFjaCgoajogbnVtYmVyLCBsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBqUXVlcnkobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZUJsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KFwiLmV4dHJhLWZpbHRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0TmFtZU1hdGNoIHx8IGlucHV0VmFsdWVCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFZhbHVlID0gbGFiZWxFbGVtLmF0dHIoXCJkYXRhLWF0dHItdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbFZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0Q2hpbGRNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEVsZW0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGhpZGUgRmFjZXQgSXRlbSBpdHNlbGZcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsbWVudCA9IGZhY2V0SXRlbS5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZmFjZXRJdGVtLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY2V0TmFtZU1hdGNoIHx8IGZhY2V0Q2hpbGRNYXRjaCB8fCBpbnB1dFZhbHVlQmxhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWNldEl0ZW0uZmFkZUluKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRJdGVtLmZhZGVPdXQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRXhwYW5kIENvbGxhcHNlIEZhY2V0XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sbGFwc2VkIHx8IGZhY2V0TmFtZU1hdGNoIHx8IGZhY2V0Q2hpbGRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsbWVudCwgU2hvd0hpZGUuU2hvdyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4cGFuZENvbGxhcHNlTWFuYWdlci5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsbWVudCwgU2hvd0hpZGUuSGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIGVsZW1lbnQubmV4dCgpLmhpZGUoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmlsdGVyQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZpbHRlckNvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5mYWNldC1sYWJlbHMgLmxhYmVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXMoXCIubGFiZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudHMoXCIubGFiZWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC5hdHRyKFwiZGF0YS1maWx0ZXItZW50cnlcIikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICBsZXQgaXNSYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA0ICkge1xyXG4gICAgICAgICAgICAgICAgaXNSYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgRmlsdGVyQWN0aW9uVHlwZS5NaW51cywgdmFsdWVbMl0sIGlzUmFuZ2UpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLnJlbW92ZS1hbGxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkFsbEZpbHRlclJlbW92ZSgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmlsdGVyQWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5oaWRlLWZhY2V0XCIsIHRoaXMuaGlkZUZhY2V0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5zaG93LWZhY2V0XCIsIHRoaXMuc2hvd0ZhY2V0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5oaWRlLWZhY2V0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICAgICAgaWYgKCBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMiApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGVGYWNldChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuc2hvdy1mYWNldFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgIGlmICggY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93RmFjZXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGlkZUZhY2V0ID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgJChcIi5mYWNldC1ib2R5XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmZhY2V0LWNvbGxhcHNlZC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd0ZhY2V0ID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgJChcIi5mYWNldC1jb2xsYXBzZWQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5mYWNldC1ib2R5XCIpLmZhZGVJbih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9IaWRlRmFjZXRTZWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyIH0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlTWFuYWdlciB9IGZyb20gXCIuL0V4cGFuZENvbGxhcHNlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBTaG93SGlkZSB9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGluVW5waW5FdmVudEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnBpbi1pY29uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi51bnBpbi1pY29uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpblVucGluKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIucGluLWljb25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLnVucGluLWljb25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluVW5waW4oZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVQaW5VbnBpbihldmVudDogYW55LCBwaW46IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWF0dHItaWRcIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5mYWNldENvbmZpZztcclxuICAgICAgICBmb3IgKGNvbnN0IGZhY2V0IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCBmYWNldC5pZCA9PT0gaWQgKSB7XHJcbiAgICAgICAgICAgICAgICBmYWNldC5waW5uZWQgPSBwaW47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaHRtbCh0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldERhdGEoKSkpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblBpblVucGluKGlkLCBwaW4pO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9QaW5VbnBpbkV2ZW50SGFuZGxlci50cyIsImltcG9ydCB7RmFjZXRDb25maWdTdG9yZX0gZnJvbSBcIi4vLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHtJRmFjZXRUZW1wbGF0ZVNlcnZpY2V9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQge0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcn0gZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmltcG9ydCB7RXhwYW5kQ29sbGFwc2VNYW5hZ2VyfSBmcm9tIFwiLi9FeHBhbmRDb2xsYXBzZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7U2hvd0hpZGV9IGZyb20gXCIuL1Nob3dIaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd01vcmVMZXNzSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnNob3ctbW9yZS1saW5rXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUxlc3NGaWx0ZXJzKGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuZWxlbWVudFxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBcIi5zaG93LWxlc3MtbGlua1wiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVMZXNzRmlsdGVycyhldmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImtleXVwXCIsIFwiLnNob3ctbW9yZS1saW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5lbGVtZW50XHJcbiAgICAgICAgICAgIC5vbihcImtleXVwXCIsIFwiLnNob3ctbGVzcy1saW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlTGVzc0ZpbHRlcnMoZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd01vcmVMZXNzRmlsdGVycyhldmVudDogYW55LCBzaG93TW9yZTogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpZiAoc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5leHRyYS1maWx0ZXJcIilcclxuICAgICAgICAgICAgICAgIC5mYWRlSW4odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcImFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZXh0cmEtZmlsdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAuZmFkZU91dCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9TaG93TW9yZUxlc3NIYW5kbGVyLnRzIiwiaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlnL0lGaWx0ZXJPcHRpb25zXCI7XHJcbmltcG9ydCB7IEhvdEtleXNGaWx0ZXJzSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0hvdEtleXNGaWx0ZXJzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25IYW5kbGVyLCBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJDaGFpbjogSUV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IEZpbHRlckNvbmZpZ1N0b3JlKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9IGpRdWVyeShvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZpbHRlclRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGaWx0ZXJBY3Rpb25IYW5kbGVyKHRoaXMuZmlsdGVyRWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhvdEtleXNGaWx0ZXJzSGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZCA9ICAoZmlsdGVyczogSUZhY2V0W10pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBmYWNldFN1YkhlYWRlciA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJpbmQoZmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lmh0bWwoZmFjZXRTdWJIZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3kgPSAgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICggdGhpcy5maWx0ZXJFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGhhbmRsZXIuZGVyZWdpc3RlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlcmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5jbGFzcyBIb3RLZXlzRmlsdGVyc0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrID0gKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlUmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuZm9jdXNPblNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c09uU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAgJiYgIGV2ZW50LmtleSA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmZhY2V0LXN1YmhlYWRlciAucmVtb3ZlLWFsbFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtIb3RLZXlzRmlsdGVyc0hhbmRsZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvSG90S2V5c0ZpbHRlcnNIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgKiBhcyBGYWNldFN1YkhlYWRlciBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW46IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZSkge1xyXG4gICAgICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIgPSBGYWNldFN1YkhlYWRlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBiaW5kKGZpbHRlcnM6IElGYWNldFtdKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBtZXJnZWRGaWx0ZXJzID0gdGhpcy5tZXJnZVdpdGhGYWNldENvbmZpZyhmaWx0ZXJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcih7ZmlsdGVyczogbWVyZ2VkRmlsdGVyc30pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtZXJnZVdpdGhGYWNldENvbmZpZyA9IChmaWx0ZXJzOiBJRmFjZXRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmFjZXQgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmYWNldENvbmZpZyBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChmYWNldENvbmZpZy5pZCA9PT0gZmFjZXQuaWQpIHtcclxuICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFjZXRDb25maWcuY29sbGFwc2VkLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRSYW5nZXM6IGZhY2V0LmZhY2V0UmFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgZmFjZXRWYWx1ZXM6IGZhY2V0LmZhY2V0VmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGZhY2V0Q29uZmlnLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmFjZXRDb25maWcubmFtZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBmYWNldENvbmZpZy5vcmRlcixcclxuICAgICAgICAgICAgICAgIHBpbm5lZDogZmFjZXRDb25maWcucGlubmVkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmFjZXRDb25maWcudHlwZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XHJcbiAgICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQgZmFjZXQtc3ViaGVhZGVyIGd1aSBmbHVpZC13IGJhc2ljIGN1cnZlZCBwLTVcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgY2Fwc1xcXCI+QXBwbGllZCBGaWx0ZXJzPC9zcGFuPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS1sLTUgcmVtb3ZlLWFsbFxcXCIgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4+Q2xlYXIgQWxsPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGxhcmdlIGxhYmVscyBmYWNldC1sYWJlbHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTFcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFJhbmdlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS0wIG0tdC0yIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbS0wIG0tdC0yIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjp0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFJhbmdlLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1pbiA6IGRlcHRoMCksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1heCA6IGRlcHRoMCksKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLHtcIm5hbWVcIjpcIlJhbmdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmNvbnN0IHJhbmdlID0gKG1pbiwgbWF4LCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgIGxldCBtaW5TdHIgPSBtaW47XHJcbiAgICBsZXQgbWF4U3RyID0gbWF4O1xyXG4gICAgaWYgKHR5cGUgPT09IFwiRWRtLkRhdGVUaW1lT2Zmc2V0XCIpIHtcclxuICAgICAgICBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgbWluICE9PSBudWxsICYmIG1pbiAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBtb21lbnQobWluKS5mb3JtYXQoXCJsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gbnVsbCAmJiBtYXggIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbWF4U3RyID0gbW9tZW50KG1heCkuZm9ybWF0KFwibGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1pblN0ciAhPT0gdW5kZWZpbmVkICYmIG1pblN0ciAhPT0gbnVsbCAmJiBtaW5TdHIgIT09IFwiXCIpIHtcclxuICAgICAgICBzdHIgKz0gXCIgZnJvbTogXCIgKyBtaW5TdHI7XHJcbiAgICB9XHJcbiAgICBpZiAobWF4U3RyICE9PSB1bmRlZmluZWQgJiYgbWF4U3RyICE9PSBudWxsICYmIG1heFN0ciAhPT0gXCJcIikge1xyXG4gICAgICAgIHN0ciArPSBcIiB0bzogXCIgKyBtYXhTdHI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvUmFuZ2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi9JRmlsdGVyT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbmZpZ1N0b3JlIHtcclxuICAgIHByaXZhdGUgb3B0aW9uczogSUZpbHRlck9wdGlvbnM7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRmaWx0ZXJPcHRpb25zOiBJRmlsdGVyT3B0aW9ucyA9IHtcclxuICAgICAgICBhbmltYXRpb25UaW1lOiAyMDAsXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICBmaWx0ZXJDb25maWc6IFtdLFxyXG4gICAgICAgIG9uQWxsRmlsdGVyUmVtb3ZlOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZpbHRlckNoYW5nZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBhY3Rpb246IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3QgZm9yIGZpbHRlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElGaWx0ZXJPcHRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUZpbHRlck9wdGlvbnMpOiBJRmlsdGVyT3B0aW9ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRmaWx0ZXJPcHRpb25zLCBpbnB1dE9wdGlvbnMpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZS50cyJdLCJzb3VyY2VSb290IjoiIn0=