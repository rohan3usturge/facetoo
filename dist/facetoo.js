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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/*!*************************************!*\
  !*** ./src/hbs/facet-collapsed.hbs ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"show-facet gui fluid-h cursor-pointer\">\r\n    <i class=\"gui gui-icon gui-icon-chevron-right\"></i>\r\n    <br>\r\n    <i class=\"gui gui-icon gui-icon-filter primary\"></i>\r\n</div>";
},"useData":true});

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
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"item facet-item\" data-attr-name=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n            <div class=\"content\">\n                <div class=\"facet-item-header fluid cursor-pointer gui selectable item\">\n                    <span class=\"gui gui-subheading-2 primary\">\n                        "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 11)).call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                    </span>\n                    <i class=\"gui gui-icon gui-icon-chevron-down right m-r-10\"></i>\n                </div>\n                <div class=\"clear\"></div>\n                <div class=\"description gui gui-hidden facet-item-description m-t-5\">\n                    <div class=\"gui fluid-w fluid-h m-0 p-0\">\n                        "
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return " \n                        <div class=\"item\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                            <label title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" class=\"gui cursor-pointer no-wrap primary\">\n                                <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 3)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 4)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + " value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" />\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-body-2\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                            <label title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" class=\"gui cursor-pointer no-wrap\">\n                                <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 3)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 4)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + " value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" />\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-body-2\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"gui fluid-h of-hidden\">\n    <div class=\"gui m-5\">\n        <div class=\"gui left\">\n            <span class=\"gui caps bold gui-subheading-2\">\n                    Filter By\n            </span>\n        </div>\n        <div class=\"gui right\">\n            <a class=\"gui cursor-pointer hide-facet\">\n                <i class=\"gui-icon gui-icon-chevron-left\"></i>\n            </a>\n        </div>\n    </div>\n    <div class=\"gui clear\"></div>\n    <div class=\"gui m-t-5\"></div>\n    <div class=\"gui left\">\n        <a class=\"gui cursor-pointer expand-all\">\n            <i class=\"gui-icon gui-icon-add\"></i>\n            Expand All\n        </a>\n        <a class=\"gui cursor-pointer m-l-10 collapse-all\">\n            <i class=\"gui-icon  gui-icon-minus\"></i>\n            Collapse All\n        </a>\n    </div>\n    <div class=\"gui clear\"></div>\n    <div class=\"gui m-t-5\"></div>\n    <div class=\"gui input fluid-w p-t-5 p-r-5 p-b-5 p-l-1\">\n        <input class=\"gui input p-5 fluid-w gui-subheading-2 filter-search-input\" placeholder=\"Search Filters\" />\n    </div>\n    <div class=\"gui fluid-h facet-list of-auto\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
__export(__webpack_require__(/*! ./ExpandCollapseFacetsHandler */ 13));
__export(__webpack_require__(/*! ./FacetActionHandler */ 14));
__export(__webpack_require__(/*! ./FacetSearchHandler */ 15));
__export(__webpack_require__(/*! ./FilterActionHandler */ 16));
__export(__webpack_require__(/*! ./HideFacetSectionHandler */ 17));


/***/ }),
/* 6 */
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
/* 7 */
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
__export(__webpack_require__(/*! ./Facet */ 8));
__export(__webpack_require__(/*! ./Filter */ 18));


/***/ }),
/* 8 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 9);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 12);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 5);
var Facet = /** @class */ (function () {
    function Facet(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (facets) {
            var fullFacet = _this.templateService.bind(facets);
            _this.facetElement.html(fullFacet);
        };
        this.configStore = new FacetConfigStore_1.FacetConfigStore(options);
        this.facetElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService_1.FacetTemplateService(this.configStore);
        this.handlerChain.push(new eventhandlers_1.ExpandCollapseFacetsHandler(this.facetElement));
        this.handlerChain.push(new eventhandlers_1.FacetActionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new eventhandlers_1.FacetSearchHandler(this.facetElement));
        this.handlerChain.push(new eventhandlers_1.HideFacetSectionHandler(this.facetElement, this.configStore));
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Facet;
}());
exports.Facet = Facet;


/***/ }),
/* 9 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 10);
var FacetTemplateService = /** @class */ (function () {
    function FacetTemplateService(configStore) {
        this.configStore = configStore;
        this.tempateFunctionForFacetMain = FacetMain;
    }
    FacetTemplateService.prototype.bind = function (facets) {
        var collapsed = this.configStore.Options.collapsed;
        return this.tempateFunctionForFacetMain({ collapsed: collapsed, facets: facets });
    };
    return FacetTemplateService;
}());
exports.FacetTemplateService = FacetTemplateService;


/***/ }),
/* 10 */
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

  return "    <div class=\"facet-collapsed-body gui fluid-h w-auto\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-collapsed.hbs */ 1),depth0,{"name":"facet-collapsed","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n    <div class=\"facet-body gui fluid-h of-hidden gui-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 2),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"facet-collapsed-body gui fluid-h w-auto gui-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-collapsed.hbs */ 1),depth0,{"name":"facet-collapsed","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n    <div class=\"facet-body gui fluid-h of-hidden\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/facet-body.hbs */ 2),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui fluid-h \">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 11 */
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
/* 12 */
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
            collapsed: false,
            containerElement: null,
            // facets: [],
            onFilterChange: function (key, value, action) {
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
/* 13 */
/*!*************************************************************!*\
  !*** ./src/ts/eventhandlers/ExpandCollapseFacetsHandler.ts ***!
  \*************************************************************/
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
var ExpandCollapseFacetsHandler = /** @class */ (function () {
    function ExpandCollapseFacetsHandler(element) {
        this.element = element;
        this.ControlVisibilityOfFilter = function (element, showHide) {
            var iconElement = element.children("i");
            var currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
            if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
                (!currentlyVisible && showHide === ShowHide.Hide))) {
                return;
            }
            if (!currentlyVisible) {
                element.parents(".facet-item").find(".facet-item-description").slideDown(200);
                iconElement.removeClass("gui-icon-chevron-down");
                iconElement.addClass("gui-icon-chevron-up");
            }
            else {
                element.parents(".facet-item").find(".facet-item-description").slideUp(200);
                iconElement.removeClass("gui-icon-chevron-up");
                iconElement.addClass("gui-icon-chevron-down");
            }
        };
    }
    ExpandCollapseFacetsHandler.prototype.RegisterDomHandler = function () {
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
/* 14 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetActionHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 6);
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
            _this.configStore.Options.onFilterChange(value[0], value[1], action, value[2]);
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
/* 15 */
/*!****************************************************!*\
  !*** ./src/ts/eventhandlers/FacetSearchHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSearchHandler = /** @class */ (function () {
    function FacetSearchHandler(element) {
        this.element = element;
    }
    FacetSearchHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("keyup", ".filter-search-input", function (event) {
            var element = jQuery(event.target);
            var val = element.val().toString().toLowerCase();
            _this.element.find(".facet-list .facet-item").each(function (i, e) {
                if (jQuery(e).attr("data-attr-name").toLowerCase().indexOf(val) === -1) {
                    jQuery(e).fadeOut(200);
                }
                else {
                    jQuery(e).fadeIn(200);
                }
            });
            event.stopPropagation();
        });
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
/* 16 */
/*!*****************************************************!*\
  !*** ./src/ts/eventhandlers/FilterActionHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 6);
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
            _this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType_1.FilterActionType.Minus, value[2]);
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
/* 17 */
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
            _this.element.on("click", ".hide-facet", function (event) {
                $(".facet-body").hide();
                $(".facet-collapsed-body").fadeIn(200);
                _this.configStore.Options.collapsed = true;
                event.stopPropagation();
            });
            _this.element.on("click", ".show-facet", function (event) {
                $(".facet-collapsed-body").hide();
                $(".facet-body").fadeIn(200);
                _this.configStore.Options.collapsed = false;
                event.stopPropagation();
            });
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
/* 18 */
/*!*******************************!*\
  !*** ./src/ts/main/Filter.ts ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterTemplateService_1 = __webpack_require__(/*! ../services/FilterTemplateService */ 19);
var FilterConfigStore_1 = __webpack_require__(/*! ./../config/FilterConfigStore */ 21);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 5);
var Filter = /** @class */ (function () {
    function Filter(options) {
        var _this = this;
        this.handlerChain = [];
        this.bind = function (filters) {
            var facetSubHeader = _this.templateService.bind(filters);
            _this.filterElement.html(facetSubHeader);
        };
        this.configStore = new FilterConfigStore_1.FilterConfigStore(options);
        this.filterElement = jQuery(options.containerElement);
        this.templateService = new FilterTemplateService_1.FilterTemplateService();
        this.handlerChain.push(new eventhandlers_1.FilterActionHandler(this.filterElement, this.configStore));
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Filter;
}());
exports.Filter = Filter;


/***/ }),
/* 19 */
/*!**************************************************!*\
  !*** ./src/ts/services/FilterTemplateService.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(/*! ./../../hbs/facet-applied-filters.hbs */ 20);
var FilterTemplateService = /** @class */ (function () {
    function FilterTemplateService() {
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
    }
    FilterTemplateService.prototype.bind = function (filters) {
        return this.tempateFunctionForFacetSubHeader({ filters: filters });
    };
    return FilterTemplateService;
}());
exports.FilterTemplateService = FilterTemplateService;


/***/ }),
/* 20 */
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

  return "<div class=\"content facet-subheader gui fluid-w basic curved p-5\">\n    <span class=\"gui bold gui-subheading-2 caps\">Applied Filters</span>\n    <a class=\"gui m-l-5 remove-all\" >\n        <i class=\"gui-icon gui-icon-cancel\"></i>\n        <span>Clear All</span>\n    </a>\n    <span class=\"gui m-l-10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <span class=\"gui m-r-5\">\n            <span class=\"gui large labels facet-labels\">\n                <span class=\"gui gui-subheading-2\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n        </span>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <span class=\"gui m-0 m-r-2 p-4 label cursor-pointer strikethrough-hover\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\n                    "
    + alias2(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "\n                    <i class=\"gui-icon gui-icon-cancel\"></i>\n                </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 21 */
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
            containerElement: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzM2VkMDZiYTc5ZTJlMjhmODE4YSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtY29sbGFwc2VkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0U2VhcmNoSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseU9BQXlPLEdBQUcsd0JBQXdCLGFBQWE7QUFDalI7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNkZBQTZGLDRGQUE0RixxQkFBcUIsOEZBQThGO0FBQzVTLENBQUMsaUNBQWlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDN0JsQztJQVdJLDJCQUFZLE9BQXVCO1FBQW5DLGlCQUtDO1FBZE8seUJBQW9CLEdBQW1CO1lBQzNDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsaUJBQWlCLEVBQUU7Z0JBQ25CLFNBQVM7WUFDVCxDQUFDO1lBQ0QsY0FBYyxFQUFFLFVBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUF3QjtnQkFDckUsU0FBUztZQUNULENBQUM7U0FDSixDQUFDO1FBVU0sa0JBQWEsR0FBRyxVQUFDLFlBQTRCO1lBQ2pELE1BQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQVZHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1FBQ25GLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0JBQVcsc0NBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUlMLHdCQUFDO0FBQUQsQ0FBQztBQXZCWSw4Q0FBaUIiLCJmaWxlIjoiZmFjZXRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmFjZXRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFjZXRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMzZWQwNmJhNzllMmUyOGY4MThhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzaG93LWZhY2V0IGd1aSBmbHVpZC1oIGN1cnNvci1wb2ludGVyXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+XFxyXFxuICAgIDxicj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1maWx0ZXIgcHJpbWFyeVxcXCI+PC9pPlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWNvbGxhcHNlZC5oYnNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtIGZhY2V0LWl0ZW1cXFwiIGRhdGEtYXR0ci1uYW1lPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWl0ZW0taGVhZGVyIGZsdWlkIGN1cnNvci1wb2ludGVyIGd1aSBzZWxlY3RhYmxlIGl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yIHByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZEZpbHRlcnNDb3VudC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJTZWxlY3RlZEZpbHRlcnNDb3VudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLWRvd24gcmlnaHQgbS1yLTEwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uIGd1aSBndWktaGlkZGVuIGZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gbS10LTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLXcgZmx1aWQtaCBtLTAgcC0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBuby13cmFwIHByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJndWkgZmFjZXQtdmFsdWUtY2hlY2tib3ggY3Vyc29yLXBvaW50ZXIgbS1sLTBcXFwiIGlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlbGVjdGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kaXNhYmxlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWktYm9keS0yXFxcIj4oXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvdW50IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiKTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBuby13cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGZhY2V0LXZhbHVlLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIG0tbC0wXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnR5cGUgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpLWJvZHktMlxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggb2YtaGlkZGVuXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tNVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbGVmdFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBjYXBzIGJvbGQgZ3VpLXN1YmhlYWRpbmctMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQnlcXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSByaWdodFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBoaWRlLWZhY2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGNsZWFyXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tdC01XFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGxlZnRcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBleHBhbmQtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tYWRkXFxcIj48L2k+XFxuICAgICAgICAgICAgRXhwYW5kIEFsbFxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlciBtLWwtMTAgY29sbGFwc2UtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gIGd1aS1pY29uLW1pbnVzXFxcIj48L2k+XFxuICAgICAgICAgICAgQ29sbGFwc2UgQWxsXFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgaW5wdXQgZmx1aWQtdyBwLXQtNSBwLXItNSBwLWItNSBwLWwtMVxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBpbnB1dCBwLTUgZmx1aWQtdyBndWktc3ViaGVhZGluZy0yIGZpbHRlci1zZWFyY2gtaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggRmlsdGVyc1xcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIGZhY2V0LWxpc3Qgb2YtYXV0b1xcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtYm9keS5oYnNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImNoZWNrZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja2VkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vRXhwYW5kQ29sbGFwc2VGYWNldHNIYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GYWNldEFjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZhY2V0U2VhcmNoSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmlsdGVyQWN0aW9uSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvaW5kZXgudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcbiAgICBBZGQgPSBcIkFkZFwiLFxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCAqIGZyb20gXCIuL0ZhY2V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRW50cnkudHMiLCJpbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xuaW1wb3J0IHsgSUZhY2V0VmFsdWUgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFZhbHVlXCI7XG5pbXBvcnQgeyBGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0lGYWNldFRlbXBsYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRmFjZXRPcHRpb25zIH0gZnJvbSBcIi4vLi4vY29uZmlnL0lGYWNldE9wdGlvbnNcIjtcbmltcG9ydCB7IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciAsIEZhY2V0QWN0aW9uSGFuZGxlciwgRmFjZXRTZWFyY2hIYW5kbGVyLFxuICAgICAgICAgSGlkZUZhY2V0U2VjdGlvbkhhbmRsZXIsIElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldCB7XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogSUZhY2V0VGVtcGxhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmFjZXRFbGVtZW50OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBoYW5kbGVyQ2hhaW46IElFdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmFjZXRDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5mYWNldEVsZW1lbnQgPSBqUXVlcnkob3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmFjZXRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBGYWNldEFjdGlvbkhhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmFjZXRTZWFyY2hIYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEhpZGVGYWNldFNlY3Rpb25IYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgYmluZCA9ICAoZmFjZXRzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBmdWxsRmFjZXQgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKGZhY2V0cyk7XG4gICAgICAgIHRoaXMuZmFjZXRFbGVtZW50Lmh0bWwoZnVsbEZhY2V0KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRmFjZXQudHMiLCJpbXBvcnQgKiBhcyBIYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCI7XG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xuaW1wb3J0ICogYXMgRmFjZXRNYWluIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1tYWluLmhic1wiO1xuaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0VGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkYXRhOiBJRmFjZXRbXTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW46IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEhlYWRlcjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5OiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHtcbiAgICB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbiA9IEZhY2V0TWFpbjtcbiAgfVxuICBwdWJsaWMgYmluZChmYWNldHM6IElGYWNldFtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkO1xuICAgIHJldHVybiB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbih7IGNvbGxhcHNlZCwgZmFjZXRzIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtY29sbGFwc2VkLWJvZHkgZ3VpIGZsdWlkLWggdy1hdXRvXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtY29sbGFwc2VkLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtY29sbGFwc2VkXCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuIGd1aS1oaWRkZW5cXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1ib2R5Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYm9keVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWNvbGxhcHNlZC1ib2R5IGd1aSBmbHVpZC1oIHctYXV0byBndWktaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtY29sbGFwc2VkLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtY29sbGFwc2VkXCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHkgZ3VpIGZsdWlkLWggb2YtaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sbGFwc2VkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LW1haW4uaGJzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IElGYWNldFZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XHJcblxyXG5jb25zdCBzZWxlY3RlZEZpbHRlcnNDb3VudCA9IChmYWNldFZhbHVlczogSUZhY2V0VmFsdWVbXSk6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgaWYgKGZhY2V0VmFsdWVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAmJiBmYWNldFZhbHVlcyAhPT0gbnVsbFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmYWNldFZhbHVlIG9mIGZhY2V0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmFjZXRWYWx1ZS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleCA9PT0gMCA/IFwiXCIgOiBcIjxzcGFuIGNsYXNzPVxcXCJndWktYm9keS0yXFxcIj4oXCIgKyBpbmRleCArIFwiKTwvc3Bhbj5cIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkRmlsdGVyc0NvdW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwiaW1wb3J0IHtGaWx0ZXJBY3Rpb25UeXBlfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7SUZhY2V0T3B0aW9uc30gZnJvbSBcIi4vSUZhY2V0T3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRDb25maWdTdG9yZSB7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJRmFjZXRPcHRpb25zO1xuICAgIHByaXZhdGUgZGVmYXVsdEZhY2V0T3B0aW9uczogSUZhY2V0T3B0aW9ucyA9IHtcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgLy8gZmFjZXRzOiBbXSxcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgYWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGYWNldE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZhY2V0T3B0aW9ucyB7cmV0dXJuIHRoaXMub3B0aW9uczsgfVxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGYWNldE9wdGlvbnMpOiBJRmFjZXRPcHRpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEZhY2V0T3B0aW9ucywgaW5wdXRPcHRpb25zKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcblxuZW51bSBTaG93SGlkZSB7XG4gICAgU2hvdyxcbiAgICBIaWRlLFxuICAgIFRvZ2dsZSxcbn1cblxuZXhwb3J0IGNsYXNzIEV4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5KSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgU2hvd0hpZGUuU2hvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuY29sbGFwc2UtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoalF1ZXJ5KGVsZW1lbnQpLCBTaG93SGlkZS5IaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1pdGVtLWhlYWRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IHRhcmdldC5pcyhcIi5mYWNldC1pdGVtLWhlYWRlclwiKSA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnQoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1oZWFkZXIgLmJ1dHRvblwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIoaGVhZGVyRWxlbWVudCwgU2hvd0hpZGUuVG9nZ2xlKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIENvbnRyb2xWaXNpYmlsaXR5T2ZGaWx0ZXIgPSAoZWxlbWVudDogSlF1ZXJ5LCBzaG93SGlkZTogU2hvd0hpZGUpID0+IHtcbiAgICAgICAgY29uc3QgaWNvbkVsZW1lbnQgPSBlbGVtZW50LmNoaWxkcmVuKFwiaVwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudGx5VmlzaWJsZSA9IGljb25FbGVtZW50Lmhhc0NsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcbiAgICAgICAgaWYgKFNob3dIaWRlLlRvZ2dsZSAhPT0gc2hvd0hpZGUgJiYgKChjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5TaG93KSB8fFxuICAgICAgICAgICAgKCFjdXJyZW50bHlWaXNpYmxlICYmIHNob3dIaWRlID09PSBTaG93SGlkZS5IaWRlKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWN1cnJlbnRseVZpc2libGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpLmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZURvd24oMjAwKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJndWktaWNvbi1jaGV2cm9uLXVwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIikuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNsaWRlVXAoMjAwKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LmFkZENsYXNzKFwiZ3VpLWljb24tY2hldnJvbi1kb3duXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldEFjdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLmZhY2V0LWJvZHkgLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gLmZhY2V0LXZhbHVlLWNoZWNrYm94XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGNoZWNrZWQgPyBGaWx0ZXJBY3Rpb25UeXBlLkFkZCA6IEZpbHRlckFjdGlvblR5cGUuTWludXM7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UodmFsdWVbMF0sIHZhbHVlWzFdLCBhY3Rpb24sIHZhbHVlWzJdKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0QWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRTZWFyY2hIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImtleXVwXCIsIFwiLmZpbHRlci1zZWFyY2gtaW5wdXRcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWxpc3QgLmZhY2V0LWl0ZW1cIikuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KGUpLmF0dHIoXCJkYXRhLWF0dHItbmFtZVwiKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGUpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGUpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRTZWFyY2hIYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmlsdGVyQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZpbHRlckNvbmZpZ1N0b3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5mYWNldC1sYWJlbHMgLmxhYmVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXMoXCIubGFiZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudHMoXCIubGFiZWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC5hdHRyKFwiZGF0YS1maWx0ZXItZW50cnlcIikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxTdHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25GaWx0ZXJDaGFuZ2UodmFsdWVbMF0sIHZhbHVlWzFdLCBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzLCB2YWx1ZVsyXSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LXN1YmhlYWRlciAucmVtb3ZlLWFsbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQWxsRmlsdGVyUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHsgRmFjZXRDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZGVGYWNldFNlY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmhpZGUtZmFjZXRcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuZmFjZXQtY29sbGFwc2VkLWJvZHlcIikuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5zaG93LWZhY2V0XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAkKFwiLmZhY2V0LWNvbGxhcHNlZC1ib2R5XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5mYWNldC1ib2R5XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwiaW1wb3J0IHsgSUZpbHRlck9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlnL0lGaWx0ZXJPcHRpb25zXCI7XHJcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XHJcbmltcG9ydCB7IEZpbHRlclRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9GaWx0ZXJUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUZpbHRlclRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZpbHRlckNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vLi4vY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvbkhhbmRsZXIsIElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudGhhbmRsZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZpbHRlckNvbmZpZ1N0b3JlO1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGZpbHRlckVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgaGFuZGxlckNoYWluOiBJRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9ICBuZXcgRmlsdGVyQ29uZmlnU3RvcmUob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50ID0galF1ZXJ5KG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBuZXcgRmlsdGVyVGVtcGxhdGVTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmlsdGVyQWN0aW9uSGFuZGxlcih0aGlzLmZpbHRlckVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZCA9ICAoZmlsdGVyczogSUZhY2V0W10pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBmYWNldFN1YkhlYWRlciA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJpbmQoZmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50Lmh0bWwoZmFjZXRTdWJIZWFkZXIpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbWFpbi9GaWx0ZXIudHMiLCJpbXBvcnQgKiBhcyBIYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCI7XHJcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XHJcbmltcG9ydCAqIGFzIEZhY2V0U3ViSGVhZGVyIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9JRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgSUZpbHRlclRlbXBsYXRlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEhlYWRlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHk6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIgPSBGYWNldFN1YkhlYWRlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBiaW5kKGZpbHRlcnM6IElGYWNldFtdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcih7ZmlsdGVyc30pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY29udGVudCBmYWNldC1zdWJoZWFkZXIgZ3VpIGZsdWlkLXcgYmFzaWMgY3VydmVkIHAtNVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgYm9sZCBndWktc3ViaGVhZGluZy0yIGNhcHNcXFwiPkFwcGxpZWQgRmlsdGVyczwvc3Bhbj5cXG4gICAgPGEgY2xhc3M9XFxcImd1aSBtLWwtNSByZW1vdmUtYWxsXFxcIiA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICA8c3Bhbj5DbGVhciBBbGw8L3NwYW4+XFxuICAgIDwvYT5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1yLTVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbGFyZ2UgbGFiZWxzIGZhY2V0LWxhYmVsc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMlxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS0wIG0tci0yIHAtNCBsYWJlbCBjdXJzb3ItcG9pbnRlciBzdHJpa2V0aHJvdWdoLWhvdmVyXFxcIiBkYXRhLWZpbHRlci1lbnRyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLmlkIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0udHlwZSA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGFiZWwgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwibGFiZWxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2FuY2VsXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWFwcGxpZWQtZmlsdGVycy5oYnNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyT3B0aW9ucyB9IGZyb20gXCIuL0lGaWx0ZXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29uZmlnU3RvcmUge1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJRmlsdGVyT3B0aW9ucztcclxuICAgIHByaXZhdGUgZGVmYXVsdGZpbHRlck9wdGlvbnM6IElGaWx0ZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgb25BbGxGaWx0ZXJSZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZpbHRlck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdCBmb3IgZmlsdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZpbHRlck9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJRmlsdGVyT3B0aW9ucyk6IElGaWx0ZXJPcHRpb25zID0+IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdGZpbHRlck9wdGlvbnMsIGlucHV0T3B0aW9ucykpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==