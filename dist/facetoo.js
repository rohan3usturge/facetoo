(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("handlebars/runtime"));
	else
		root["Facetoo"] = factory(root["Handlebars"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/*!********************************!*\
  !*** ./src/hbs/facet-body.hbs ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"item facet-item\" data-attr-name=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n            <div class=\"content\">\n                <div class=\"facet-item-header fluid cursor-pointer\">\n                    <span class=\"gui gui-subheading-2 bold primary\">\n                        "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 9)).call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                    </span>\n                    <i class=\"gui gui-icon gui-icon-chevron-down right m-r-10\"></i>\n                </div>\n                <div class=\"clear\"></div>\n                <div class=\"description gui gui-hidden facet-item-description m-t-5\">\n                    <div class=\"gui fluid-w fluid-h m-0 p-0\">\n                        "
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return " \n                        <div class=\"item gui-body-2\">\n                            <input class=\"gui facet-value-checkbox gui-body-2 cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 10)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 11)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + " value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" type=\"checkbox\" /> "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n                            <label class=\"gui gui-body-2 cursor-pointer primary\" for=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-caption\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <label class=\"gui gui-body-2 cursor-pointer\" for=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-caption\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"gui fluid-h of-hidden\">\n    <div class=\"gui right m-5 gui-body-2\">\n        <a class=\"gui cursor-pointer expand-all\">\n            <i class=\"gui-icon gui-icon-add\"></i>\n            Expand All\n        </a>\n        <a class=\"gui cursor-pointer m-l-10 collapse-all\">\n            <i class=\"gui-icon  gui-icon-minus\"></i>\n            Collapse All\n        </a>\n    </div>\n    <div class=\"gui clear\"></div>\n    <div class=\"gui input fluid-w p-t-5 p-r-5 p-b-5 p-l-1\">\n        <input class=\"gui input p-5 fluid-w gui-subheading-2 filter-search-input\" placeholder=\"Search Filters\" />\n    </div>\n    <div class=\"gui fluid-h facet-list of-auto\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseHandler_1 = __webpack_require__(/*! ../eventhandlers/ExpandCollapseHandler */ 3);
var FilterActionHandler_1 = __webpack_require__(/*! ../eventhandlers/FilterActionHandler */ 4);
var FilterSearchHandler_1 = __webpack_require__(/*! ../eventhandlers/FilterSearchHandler */ 6);
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 7);
var ConfigStore_1 = __webpack_require__(/*! ./../config/ConfigStore */ 13);
var Facet = /** @class */ (function () {
    function Facet(options) {
        var _this = this;
        this.handlerChain = [];
        this.showLoader = function () {
            jQuery(_this.configStore.Options.containerElement).find(".facet-loader").addClass("active");
        };
        this.hideLoader = function () {
            jQuery(_this.configStore.Options.containerElement).find(".facet-loader").remove("active");
        };
        this.BindOnlyFacets = function (facets) {
            var fullFacet = _this.templateService.Bind(facets, []);
            _this.parentElement.html(fullFacet);
        };
        this.BindOnlyAppliedFilters = function (filters) {
            var facetSubHeader = _this.templateService.BindOnlyAppliedFilters(filters);
            _this.filterElement.html(facetSubHeader);
        };
        this.Bind = function (facets, filters) {
            _this.BindOnlyFacets(facets);
            _this.BindOnlyAppliedFilters(filters);
            // this.parentElement.html(this.templateService.Bind(facets, filters));
        };
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.parentElement = jQuery(options.containerElement);
        this.filterElement = jQuery(options.filterElement);
        this.templateService = new FacetTemplateService_1.FacetTemplateService();
        this.handlerChain.push(new FilterSearchHandler_1.FilterSearchHandler(this.parentElement));
        this.handlerChain.push(new ExpandCollapseHandler_1.ExpandCollapseHandler(this.parentElement, this.configStore));
        this.handlerChain.push(new FilterActionHandler_1.FilterActionHandler(this.parentElement, this.filterElement, this.configStore));
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Facet;
}());
exports.Facet = Facet;


/***/ }),
/* 3 */
/*!*******************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseHandler.ts ***!
  \*******************************************************/
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
})(ShowHide || (ShowHide = {}));
var ExpandCollapseHandler = /** @class */ (function () {
    function ExpandCollapseHandler(element, configStore) {
        this.element = element;
        this.configStore = configStore;
        this.ControlVisibilityOfFilter = function (element, showHide) {
            var iconElement = element.children("i");
            var currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
            if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
                (!currentlyVisible && showHide === ShowHide.Hide))) {
                return;
            }
            if (!currentlyVisible) {
                element.parents(".facet-item").find(".facet-item-description").slideDown();
                iconElement.removeClass("gui-icon-chevron-down");
                iconElement.addClass("gui-icon-chevron-up");
            }
            else {
                element.parents(".facet-item").find(".facet-item-description").slideUp();
                iconElement.removeClass("gui-icon-chevron-up");
                iconElement.addClass("gui-icon-chevron-down");
            }
        };
    }
    ExpandCollapseHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("click", ".expand-all", function (event) {
            _this.element.find(".facet-item-header").each(function (index, element) {
                _this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Show);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".collapse-all", function (event) {
            _this.element.find(".facet-item-header").each(function (index, element) {
                _this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".facet-item-header", function (event) {
            var target = jQuery(event.target);
            var headerElement = target.is(".facet-item-header") ? target : target.parent(".facet-item-header");
            _this.element.find(".facet-header .button").removeAttr("disabled");
            _this.ControlVisibilityOfFilter(headerElement, ShowHide.Toggle);
            event.stopPropagation();
        });
    };
    ExpandCollapseHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    ExpandCollapseHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    return ExpandCollapseHandler;
}());
exports.ExpandCollapseHandler = ExpandCollapseHandler;


/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 5);
var FilterActionHandler = /** @class */ (function () {
    function FilterActionHandler(element, filterElement, configStore) {
        this.element = element;
        this.filterElement = filterElement;
        this.configStore = configStore;
    }
    FilterActionHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("change", ".facet-body .facet-item-description .facet-value-checkbox", function (event) {
            var element = jQuery(event.target);
            var valStr = element.val().toString();
            var value = valStr.split(":");
            var checked = element.is(":checked");
            var action = checked ? FilterActionType_1.FilterActionType.Add : FilterActionType_1.FilterActionType.Minus;
            _this.configStore.Options.onFilterChange(value[0], value[1], action);
            event.stopPropagation();
        });
        this.filterElement.on("click", ".facet-subheader .facet-labels .label", function (event) {
            var element = jQuery(event.target);
            if (!element.is(".label")) {
                element = element.parents(".label");
            }
            var valStr = element.attr("data-filter-entry").toString();
            var value = valStr.split(":");
            _this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType_1.FilterActionType.Minus);
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
/* 5 */
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
/* 6 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterSearchHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterSearchHandler = /** @class */ (function () {
    function FilterSearchHandler(element) {
        this.element = element;
    }
    FilterSearchHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("keyup", ".filter-search-input", function (event) {
            var element = jQuery(event.target);
            var val = element.val().toString().toLowerCase();
            _this.element.find(".facet-list .facet-item").each(function (i, e) {
                if (jQuery(e).attr("data-attr-name").toLowerCase().indexOf(val) === -1) {
                    jQuery(e).fadeOut(300);
                }
                else {
                    jQuery(e).fadeIn(300);
                }
            });
            event.stopPropagation();
        });
    };
    FilterSearchHandler.prototype.onResize = function () {
        // Ignore
    };
    FilterSearchHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    return FilterSearchHandler;
}());
exports.FilterSearchHandler = FilterSearchHandler;


/***/ }),
/* 7 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 8);
var FacetBody = __webpack_require__(/*! ./../../hbs/facet-body.hbs */ 1);
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 12);
var FacetTemplateService = /** @class */ (function () {
    function FacetTemplateService() {
        this.tempateFunctionForFacetMain = FacetMain;
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
        this.tempateFunctionForFacetBody = FacetBody;
    }
    FacetTemplateService.prototype.Bind = function (facets, filters) {
        return this.tempateFunctionForFacetMain({ facets: facets, filters: filters });
    };
    FacetTemplateService.prototype.BindOnlyFacets = function (facets) {
        return this.tempateFunctionForFacetBody({ facets: facets });
    };
    FacetTemplateService.prototype.BindOnlyAppliedFilters = function (filters) {
        return this.tempateFunctionForFacetSubHeader({ filters: filters });
    };
    return FacetTemplateService;
}());
exports.FacetTemplateService = FacetTemplateService;


/***/ }),
/* 8 */
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

  return "<div class=\"content facet-subheader\">\n    <span class=\"gui gui-subheading-2\">Filters</span>\n    <a class=\"gui m-l-5 remove-all\" href=\"#\">\n        <i class=\"gui-icon gui-icon-cancel\"></i>\n        <span>Clear All</span>\n    </a>\n    <span class=\"gui m-l-10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <span class=\"gui m-r-5\">\n            <span class=\"gui large labels facet-labels\">\n                <span class=\"gui gui-subheading-2\">"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n        </span>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <span class=\"gui m-0 m-r-2 p-4 label cursor-pointer strikethrough-hover\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\">\n                    "
    + alias2(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 9 */
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
    return index === 0 ? "" : "<span class=\"gui-caption\">(" + index + ")</span>";
};
exports.default = selectedFiltersCount;


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
/*!********************************!*\
  !*** ./src/hbs/facet-main.hbs ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui fluid-h of-hidden\">\n    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 1),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 13 */
/*!**************************************!*\
  !*** ./src/ts/config/ConfigStore.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigStore = /** @class */ (function () {
    function ConfigStore(options) {
        var _this = this;
        this.defaultGridOptions = {
            containerElement: null,
            facets: [],
            filterElement: null,
            onAllFilterRemove: function () {
                // Ignore
            },
            onFilterChange: function (key, value, action) {
                // Ignore
            },
        };
        this.extendOptions = function (inputOptions) {
            return _this.options = jQuery.extend({}, _this.defaultGridOptions, inputOptions);
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
    }
    Object.defineProperty(ConfigStore.prototype, "Options", {
        get: function () { return this.options; },
        enumerable: true,
        configurable: true
    });
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NDc4NTgxN2RjMDYzZjIyMmIwOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYm9keS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlclNlYXJjaEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZy9Db25maWdTdG9yZS50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a0JBQWUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQSx5QkFBeUIsdURBQXVEO0FBQ2hGLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLHdHQUFnSix3R0FBd0c7QUFDeFA7QUFDQSxDQUFDLGtDQUFrQyxFOzs7Ozs7Ozs7Ozs7OztBQ0xuQztJQWFJLHFCQUFZLE9BQXNCO1FBQWxDLGlCQUtDO1FBaEJPLHVCQUFrQixHQUFrQjtZQUN4QyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsaUJBQWlCLEVBQUU7Z0JBQ2YsU0FBUztZQUNiLENBQUM7WUFDRCxjQUFjLEVBQUUsVUFBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQXdCO2dCQUNqRSxTQUFTO1lBQ2IsQ0FBQztTQUNKLENBQUM7UUFRTSxrQkFBYSxHQUFHLFVBQUMsWUFBMkI7WUFDaEQsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFSRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0wsQ0FBQztJQUNELHNCQUFXLGdDQUFPO2FBQWxCLGNBQXFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJL0Qsa0JBQUM7QUFBRCxDQUFDO0FBdkJZLGtDQUFXIiwiZmlsZSI6ImZhY2V0b28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NDc4NTgxN2RjMDYzZjIyMmIwOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSBmYWNldC1pdGVtXFxcIiBkYXRhLWF0dHItbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBjdXJzb3ItcG9pbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgYm9sZCBwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1kb3duIHJpZ2h0IG0tci0xMFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbiBndWkgZ3VpLWhpZGRlbiBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC13IGZsdWlkLWggbS0wIHAtMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSBndWktYm9keS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgZmFjZXQtdmFsdWUtY2hlY2tib3ggZ3VpLWJvZHktMiBjdXJzb3ItcG9pbnRlciBtLWwtMFxcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ3VpIGd1aS1ib2R5LTIgY3Vyc29yLXBvaW50ZXIgcHJpbWFyeVxcXCIgZm9yPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWktY2FwdGlvblxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ3VpIGd1aS1ib2R5LTIgY3Vyc29yLXBvaW50ZXJcXFwiIGZvcj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpLWNhcHRpb25cXFwiPihcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIG9mLWhpZGRlblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSByaWdodCBtLTUgZ3VpLWJvZHktMlxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGV4cGFuZC1hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1hZGRcXFwiPjwvaT5cXG4gICAgICAgICAgICBFeHBhbmQgQWxsXFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIG0tbC0xMCBjb2xsYXBzZS1hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiAgZ3VpLWljb24tbWludXNcXFwiPjwvaT5cXG4gICAgICAgICAgICBDb2xsYXBzZSBBbGxcXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpbnB1dCBmbHVpZC13IHAtdC01IHAtci01IHAtYi01IHAtbC0xXFxcIj5cXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGlucHV0IHAtNSBmbHVpZC13IGd1aS1zdWJoZWFkaW5nLTIgZmlsdGVyLXNlYXJjaC1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBGaWx0ZXJzXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggZmFjZXQtbGlzdCBvZi1hdXRvXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldHMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1ib2R5Lmhic1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEV4cGFuZENvbGxhcHNlSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlSGFuZGxlclwiO1xuaW1wb3J0IHsgRmlsdGVyQWN0aW9uSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXJcIjtcbmltcG9ydCB7IEZpbHRlclNlYXJjaEhhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRoYW5kbGVycy9GaWx0ZXJTZWFyY2hIYW5kbGVyXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvSUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCB7IElGYWNldFZhbHVlIH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRWYWx1ZVwiO1xuaW1wb3J0IHsgRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IElGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRmFjZXRPcHRpb25zIH0gZnJvbSBcIi4vLi4vY29uZmlnL0lGYWNldE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0IHtcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xuICAgIHByaXZhdGUgZmlsdGVyRWxlbWVudDogSlF1ZXJ5O1xuICAgIHByaXZhdGUgYmluZEZpbmlzaGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaGFuZGxlckNoYWluOiBJRXZlbnRIYW5kbGVyW10gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmFjZXRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IENvbmZpZ1N0b3JlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50ID0galF1ZXJ5KG9wdGlvbnMuZmlsdGVyRWxlbWVudCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZhY2V0VGVtcGxhdGVTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZpbHRlclNlYXJjaEhhbmRsZXIodGhpcy5wYXJlbnRFbGVtZW50KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlSGFuZGxlcih0aGlzLnBhcmVudEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmlsdGVyQWN0aW9uSGFuZGxlcih0aGlzLnBhcmVudEVsZW1lbnQsIHRoaXMuZmlsdGVyRWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIHNob3dMb2FkZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCkuZmluZChcIi5mYWNldC1sb2FkZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHB1YmxpYyBoaWRlTG9hZGVyID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpLmZpbmQoXCIuZmFjZXQtbG9hZGVyXCIpLnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgcHVibGljIEJpbmRPbmx5RmFjZXRzID0gIChmYWNldHM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bGxGYWNldCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLkJpbmQoZmFjZXRzLCBbXSk7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5odG1sKGZ1bGxGYWNldCk7XG4gICAgfVxuICAgIHB1YmxpYyBCaW5kT25seUFwcGxpZWRGaWx0ZXJzID0gIChmaWx0ZXJzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBmYWNldFN1YkhlYWRlciA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLkJpbmRPbmx5QXBwbGllZEZpbHRlcnMoZmlsdGVycyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5odG1sKGZhY2V0U3ViSGVhZGVyKTtcbiAgICB9XG4gICAgcHVibGljIEJpbmQgPSAgKGZhY2V0czogSUZhY2V0W10sIGZpbHRlcnM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuQmluZE9ubHlGYWNldHMoZmFjZXRzKTtcbiAgICAgICAgdGhpcy5CaW5kT25seUFwcGxpZWRGaWx0ZXJzKGZpbHRlcnMpO1xuICAgICAgICAvLyB0aGlzLnBhcmVudEVsZW1lbnQuaHRtbCh0aGlzLnRlbXBsYXRlU2VydmljZS5CaW5kKGZhY2V0cywgZmlsdGVycykpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcblxuZW51bSBTaG93SGlkZSB7XG4gICAgU2hvdyxcbiAgICBIaWRlLFxuICAgIFRvZ2dsZSxcbn1cblxuZXhwb3J0IGNsYXNzIEV4cGFuZENvbGxhcHNlSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZSkge31cblxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmV4cGFuZC1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1pdGVtLWhlYWRlclwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihqUXVlcnkoZWxlbWVudCksIFNob3dIaWRlLlNob3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgU2hvd0hpZGUuSGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtaXRlbS1oZWFkZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSB0YXJnZXQuaXMoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50KFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaGVhZGVyIC5idXR0b25cIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsZW1lbnQsIFNob3dIaWRlLlRvZ2dsZSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBDb250cm9sVmlzaWJpbGl0eU9mRmlsdGVyID0gKGVsZW1lbnQ6IEpRdWVyeSwgc2hvd0hpZGU6IFNob3dIaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZWxlbWVudC5jaGlsZHJlbihcImlcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVZpc2libGUgPSBpY29uRWxlbWVudC5oYXNDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XG4gICAgICAgIGlmIChTaG93SGlkZS5Ub2dnbGUgIT09IHNob3dIaWRlICYmICgoY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuU2hvdykgfHxcbiAgICAgICAgICAgICghY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuSGlkZSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50bHlWaXNpYmxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKS5maW5kKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIikuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LmFkZENsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpLmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUhhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLmZhY2V0LWJvZHkgLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gLmZhY2V0LXZhbHVlLWNoZWNrYm94XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGNoZWNrZWQgPyBGaWx0ZXJBY3Rpb25UeXBlLkFkZCA6IEZpbHRlckFjdGlvblR5cGUuTWludXM7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UodmFsdWVbMF0sIHZhbHVlWzFdLCBhY3Rpb24pO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLmZhY2V0LWxhYmVscyAubGFiZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmlzKFwiLmxhYmVsXCIpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50cyhcIi5sYWJlbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGVsZW1lbnQuYXR0cihcImRhdGEtZmlsdGVyLWVudHJ5XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UodmFsdWVbMF0sIHZhbHVlWzFdLCBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5yZW1vdmUtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQWxsRmlsdGVyUmVtb3ZlKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XG4gICAgQWRkID0gXCJBZGRcIixcbiAgICBNaW51cyA9IFwiTWludXNcIixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclNlYXJjaEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5KSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuZmlsdGVyLXNlYXJjaC1pbnB1dFwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtbGlzdCAuZmFjZXQtaXRlbVwiKS5lYWNoKChpOiBudW1iZXIsIGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoZSkuYXR0cihcImRhdGEtYXR0ci1uYW1lXCIpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID09PSAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZSkuZmFkZU91dCgzMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZSkuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJTZWFyY2hIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCAqIGFzIEZhY2V0U3ViSGVhZGVyIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXCI7XG5pbXBvcnQgKiBhcyBGYWNldEJvZHkgZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LWJvZHkuaGJzXCI7XG5pbXBvcnQgKiBhcyBGYWNldE1haW4gZnJvbSBcIi4vLi4vLi4vaGJzL2ZhY2V0LW1haW4uaGJzXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0VGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRhdGE6IElGYWNldFtdO1xuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEhlYWRlcjogYW55O1xuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbiA9IEZhY2V0TWFpbjtcbiAgICAgICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlciA9IEZhY2V0U3ViSGVhZGVyO1xuICAgICAgICB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keSA9IEZhY2V0Qm9keTtcbiAgICB9XG4gICAgcHVibGljIEJpbmQoZmFjZXRzOiBJRmFjZXRbXSwgZmlsdGVyczogSUZhY2V0W10pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4oe2ZhY2V0cywgZmlsdGVyc30pO1xuICAgIH1cblxuICAgIHB1YmxpYyBCaW5kT25seUZhY2V0cyhmYWNldHM6IElGYWNldFtdKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5KHtmYWNldHN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQmluZE9ubHlBcHBsaWVkRmlsdGVycyhmaWx0ZXJzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyKHtmaWx0ZXJzfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQgZmFjZXQtc3ViaGVhZGVyXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yXFxcIj5GaWx0ZXJzPC9zcGFuPlxcbiAgICA8YSBjbGFzcz1cXFwiZ3VpIG0tbC01IHJlbW92ZS1hbGxcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4+Q2xlYXIgQWxsPC9zcGFuPlxcbiAgICA8L2E+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1sLTEwXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NwYW4+XFxuPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGxhcmdlIGxhYmVscyBmYWNldC1sYWJlbHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTJcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9zcGFuPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tMCBtLXItMiBwLTQgbGFiZWwgY3Vyc29yLXBvaW50ZXIgc3RyaWtldGhyb3VnaC1ob3ZlclxcXCIgZGF0YS1maWx0ZXItZW50cnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmxhYmVsIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImxhYmVsXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNhbmNlbFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IHNlbGVjdGVkRmlsdGVyc0NvdW50ID0gKGZhY2V0VmFsdWVzOiBJRmFjZXRWYWx1ZVtdKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBpZiAoZmFjZXRWYWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzICE9PSBudWxsXHJcbiAgICAgICAgJiYgZmFjZXRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2V0VmFsdWUgb2YgZmFjZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFZhbHVlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gXCJcIiA6IFwiPHNwYW4gY2xhc3M9XFxcImd1aS1jYXB0aW9uXFxcIj4oXCIgKyBpbmRleCArIFwiKTwvc3Bhbj5cIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkRmlsdGVyc0NvdW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwiY29uc3QgZGlzYWJsZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiZGlzYWJsZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggb2YtaGlkZGVuXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtYm9keSBndWkgZmx1aWQtaCBvZi1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHtGaWx0ZXJBY3Rpb25UeXBlfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7SUZhY2V0T3B0aW9uc30gZnJvbSBcIi4vSUZhY2V0T3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmUge1xuICAgIHByaXZhdGUgb3B0aW9uczogSUZhY2V0T3B0aW9ucztcbiAgICBwcml2YXRlIGRlZmF1bHRHcmlkT3B0aW9uczogSUZhY2V0T3B0aW9ucyA9IHtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgZmFjZXRzOiBbXSxcbiAgICAgICAgZmlsdGVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgb25BbGxGaWx0ZXJSZW1vdmU6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgICAgICBvbkZpbHRlckNoYW5nZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBhY3Rpb246IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZhY2V0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJRmFjZXRPcHRpb25zIHtyZXR1cm4gdGhpcy5vcHRpb25zOyB9XG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUZhY2V0T3B0aW9ucyk6IElGYWNldE9wdGlvbnMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0R3JpZE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvQ29uZmlnU3RvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9