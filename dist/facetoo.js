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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/SelectedFiltersCount.ts */ 9)).call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"SelectedFiltersCount","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                    </span>\n                    <i class=\"gui gui-icon gui-icon-chevron-down right m-r-10\"></i>\n                </div>\n                <div class=\"clear\"></div>\n                <div class=\"description gui gui-hidden facet-item-description m-t-5\">\n                    <div class=\"gui fluid-w fluid-h m-0 p-0\">\n                        "
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return " \n                        <div class=\"item\">\n                            <input class=\"gui facet-value-checkbox cursor-pointer m-l-0\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 10)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 11)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + "\n                                value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":"
    + alias2(alias1((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\" type=\"checkbox\" /> "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n                            <label class=\"gui cursor-pointer primary\" for=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-body-2\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <label class=\"gui cursor-pointer\" for=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\">\n                                "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                                <span class=\"gui-body-2\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n                            </label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"gui fluid-h of-hidden\">\n    <div class=\"gui m-5\">\n        <div class=\"gui left\">\n            <span class=\"gui bold gui-subheading-2\">\n                    Refine By\n            </span>\n        </div>\n        <div class=\"gui right\">\n            <a class=\"gui cursor-pointer hide-facet\">\n                <i class=\"gui-icon gui-icon-chevron-left\"></i>\n            </a>\n        </div>\n    </div>\n    <div class=\"gui clear\"></div>\n    <div class=\"gui m-t-5\"></div>\n    <div class=\"gui left\">\n        <a class=\"gui cursor-pointer expand-all\">\n            <i class=\"gui-icon gui-icon-add\"></i>\n            Expand All\n        </a>\n        <a class=\"gui cursor-pointer m-l-10 collapse-all\">\n            <i class=\"gui-icon  gui-icon-minus\"></i>\n            Collapse All\n        </a>\n    </div>\n    <div class=\"gui clear\"></div>\n    <div class=\"gui m-t-5\"></div>\n    <div class=\"gui input fluid-w p-t-5 p-r-5 p-b-5 p-l-1\">\n        <input class=\"gui input p-5 fluid-w gui-subheading-2 filter-search-input\" placeholder=\"Search Filters\" />\n    </div>\n    <div class=\"gui fluid-h facet-list of-auto\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
__export(__webpack_require__(/*! ./Facet */ 6));
__export(__webpack_require__(/*! ./Filter */ 18));


/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./src/ts/main/Facet.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetTemplateService_1 = __webpack_require__(/*! ../services/FacetTemplateService */ 7);
var FacetConfigStore_1 = __webpack_require__(/*! ./../config/FacetConfigStore */ 12);
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 3);
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
/* 7 */
/*!*************************************************!*\
  !*** ./src/ts/services/FacetTemplateService.ts ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetMain = __webpack_require__(/*! ./../../hbs/facet-main.hbs */ 8);
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
/* 8 */
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
    return index === 0 ? "" : "<span class=\"gui-body-2\">(" + index + ")</span>";
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
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 4);
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
var FilterActionType_1 = __webpack_require__(/*! ../models/FilterActionType */ 4);
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
var eventhandlers_1 = __webpack_require__(/*! ./../eventhandlers */ 3);
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

  return "<div class=\"content facet-subheader gui fluid-w basic curved p-5\">\n    <span class=\"gui bold gui-subheading-2\">Applied Filters</span>\n    <a class=\"gui m-l-5 remove-all\" >\n        <i class=\"gui-icon gui-icon-cancel\"></i>\n        <span>Clear All</span>\n    </a>\n    <span class=\"gui m-l-10\">\n"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzNWUwYjRkODNlMjIwZjEyOWI0OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtY29sbGFwc2VkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9FbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi9GYWNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1tYWluLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmFjZXRBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0U2VhcmNoSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uZmlnL0ZpbHRlckNvbmZpZ1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7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RjtBQUM1UyxDQUFDLGlDQUFpQyxFOzs7Ozs7Ozs7Ozs7OztBQzdCbEM7SUFXSSwyQkFBWSxPQUF1QjtRQUFuQyxpQkFLQztRQWRPLHlCQUFvQixHQUFtQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFO2dCQUNuQixTQUFTO1lBQ1QsQ0FBQztZQUNELGNBQWMsRUFBRSxVQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBd0I7Z0JBQ3JFLFNBQVM7WUFDVCxDQUFDO1NBQ0osQ0FBQztRQVVNLGtCQUFhLEdBQUcsVUFBQyxZQUE0QjtZQUNqRCxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFWRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUNuRixDQUFDO0lBQ0wsQ0FBQztJQUNELHNCQUFXLHNDQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJTCx3QkFBQztBQUFELENBQUM7QUF2QlksOENBQWlCIiwiZmlsZSI6ImZhY2V0b28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhY2V0b29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNWUwYjRkODNlMjIwZjEyOWI0OCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwic2hvdy1mYWNldCBndWkgZmx1aWQtaCBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcclxcbiAgICA8YnI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tZmlsdGVyIHByaW1hcnlcXFwiPjwvaT5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1jb2xsYXBzZWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSBmYWNldC1pdGVtXFxcIiBkYXRhLWF0dHItbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1pdGVtLWhlYWRlciBmbHVpZCBjdXJzb3ItcG9pbnRlciBndWkgc2VsZWN0YWJsZSBpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWRGaWx0ZXJzQ291bnQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiU2VsZWN0ZWRGaWx0ZXJzQ291bnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1kb3duIHJpZ2h0IG0tci0xMFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvbiBndWkgZ3VpLWhpZGRlbiBmYWNldC1pdGVtLWRlc2NyaXB0aW9uIG0tdC01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC13IGZsdWlkLWggbS0wIHAtMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldFZhbHVlcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGZhY2V0LXZhbHVlLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIG0tbC0wXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGlzYWJsZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZWxlY3RlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIHByaW1hcnlcXFwiIGZvcj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpLWJvZHktMlxcXCI+KFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3VudCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIik8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyXFxcIiBmb3I9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aS1ib2R5LTJcXFwiPihcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBmbHVpZC1oIG9mLWhpZGRlblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLTVcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGxlZnRcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgYm9sZCBndWktc3ViaGVhZGluZy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFJlZmluZSBCeVxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIHJpZ2h0XFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGhpZGUtZmFjZXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbGVmdFxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIGV4cGFuZC1hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1hZGRcXFwiPjwvaT5cXG4gICAgICAgICAgICBFeHBhbmQgQWxsXFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyIG0tbC0xMCBjb2xsYXBzZS1hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiAgZ3VpLWljb24tbWludXNcXFwiPjwvaT5cXG4gICAgICAgICAgICBDb2xsYXBzZSBBbGxcXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXQtNVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBpbnB1dCBmbHVpZC13IHAtdC01IHAtci01IHAtYi01IHAtbC0xXFxcIj5cXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIGlucHV0IHAtNSBmbHVpZC13IGd1aS1zdWJoZWFkaW5nLTIgZmlsdGVyLXNlYXJjaC1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBGaWx0ZXJzXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGZsdWlkLWggZmFjZXQtbGlzdCBvZi1hdXRvXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mYWNldHMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1ib2R5Lmhic1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZENvbGxhcHNlRmFjZXRzSGFuZGxlclwiO1xyXG5leHBvcnQgKiBmcm9tICBcIi4vRmFjZXRBY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gIFwiLi9GYWNldFNlYXJjaEhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0ZpbHRlckFjdGlvbkhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSAgXCIuL0hpZGVGYWNldFNlY3Rpb25IYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL2luZGV4LnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XG4gICAgQWRkID0gXCJBZGRcIixcbiAgICBNaW51cyA9IFwiTWludXNcIixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9GYWNldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0VudHJ5LnRzIiwiaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCB7IElGYWNldFZhbHVlIH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRWYWx1ZVwiO1xuaW1wb3J0IHsgRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IElGYWNldFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JRmFjZXRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0T3B0aW9ucyB9IGZyb20gXCIuLy4uL2NvbmZpZy9JRmFjZXRPcHRpb25zXCI7XG5pbXBvcnQgeyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgLCBGYWNldEFjdGlvbkhhbmRsZXIsIEZhY2V0U2VhcmNoSGFuZGxlcixcbiAgICAgICAgIEhpZGVGYWNldFNlY3Rpb25IYW5kbGVyLCBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXQge1xuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmU7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZTtcbiAgICBwcml2YXRlIGZhY2V0RWxlbWVudDogSlF1ZXJ5O1xuICAgIHByaXZhdGUgaGFuZGxlckNoYWluOiBJRXZlbnRIYW5kbGVyW10gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmFjZXRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IEZhY2V0Q29uZmlnU3RvcmUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZmFjZXRFbGVtZW50ID0galF1ZXJ5KG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZhY2V0VGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIodGhpcy5mYWNldEVsZW1lbnQpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmFjZXRBY3Rpb25IYW5kbGVyKHRoaXMuZmFjZXRFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZhY2V0U2VhcmNoSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5wdXNoKG5ldyBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlcih0aGlzLmZhY2V0RWxlbWVudCwgdGhpcy5jb25maWdTdG9yZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDaGFpbi5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGJpbmQgPSAgKGZhY2V0czogSUZhY2V0W10pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgZnVsbEZhY2V0ID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYmluZChmYWNldHMpO1xuICAgICAgICB0aGlzLmZhY2V0RWxlbWVudC5odG1sKGZ1bGxGYWNldCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0ZhY2V0LnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHsgSUZhY2V0IH0gZnJvbSBcIi4uL21vZGVscy9JRmFjZXRcIjtcbmltcG9ydCAqIGFzIEZhY2V0TWFpbiBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtbWFpbi5oYnNcIjtcbmltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvRmFjZXRDb25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNldFRlbXBsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTogSUZhY2V0W107XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluOiBhbnk7XG4gIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcbiAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcjogYW55O1xuICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBGYWNldENvbmZpZ1N0b3JlKSB7XG4gICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4gPSBGYWNldE1haW47XG4gIH1cbiAgcHVibGljIGJpbmQoZmFjZXRzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZDtcbiAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4oeyBjb2xsYXBzZWQsIGZhY2V0cyB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9zZXJ2aWNlcy9GYWNldFRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWNvbGxhcHNlZC1ib2R5IGd1aSBmbHVpZC1oIHctYXV0b1xcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWNvbGxhcHNlZC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWNvbGxhcHNlZFwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1ib2R5IGd1aSBmbHVpZC1oIG9mLWhpZGRlbiBndWktaGlkZGVuXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1jb2xsYXBzZWQtYm9keSBndWkgZmx1aWQtaCB3LWF1dG8gZ3VpLWhpZGRlblxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWNvbGxhcHNlZC5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWNvbGxhcHNlZFwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1ib2R5IGd1aSBmbHVpZC1oIG9mLWhpZGRlblxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxzcmNcXFxcaGJzXFxcXGZhY2V0LWJvZHkuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1ib2R5XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQtaCBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbGxhcHNlZCA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1tYWluLmhic1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IElGYWNldFZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XHJcblxyXG5jb25zdCBzZWxlY3RlZEZpbHRlcnNDb3VudCA9IChmYWNldFZhbHVlczogSUZhY2V0VmFsdWVbXSk6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgaWYgKGZhY2V0VmFsdWVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAmJiBmYWNldFZhbHVlcyAhPT0gbnVsbFxyXG4gICAgICAgICYmIGZhY2V0VmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmYWNldFZhbHVlIG9mIGZhY2V0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmFjZXRWYWx1ZS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleCA9PT0gMCA/IFwiXCIgOiBcIjxzcGFuIGNsYXNzPVxcXCJndWktYm9keS0yXFxcIj4oXCIgKyBpbmRleCArIFwiKTwvc3Bhbj5cIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkRmlsdGVyc0NvdW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkRmlsdGVyc0NvdW50LnRzIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwiY29uc3QgZGlzYWJsZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiZGlzYWJsZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsImltcG9ydCB7RmlsdGVyQWN0aW9uVHlwZX0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQge0lGYWNldE9wdGlvbnN9IGZyb20gXCIuL0lGYWNldE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q29uZmlnU3RvcmUge1xuICAgIHByaXZhdGUgb3B0aW9uczogSUZhY2V0T3B0aW9ucztcbiAgICBwcml2YXRlIGRlZmF1bHRGYWNldE9wdGlvbnM6IElGYWNldE9wdGlvbnMgPSB7XG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIC8vIGZhY2V0czogW10sXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmFjZXRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElGYWNldE9wdGlvbnMge3JldHVybiB0aGlzLm9wdGlvbnM7IH1cbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJRmFjZXRPcHRpb25zKTogSUZhY2V0T3B0aW9ucyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRGYWNldE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmFjZXRDb25maWdTdG9yZS50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmVudW0gU2hvd0hpZGUge1xuICAgIFNob3csXG4gICAgSGlkZSxcbiAgICBUb2dnbGUsXG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSkge31cblxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmV4cGFuZC1hbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1pdGVtLWhlYWRlclwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihqUXVlcnkoZWxlbWVudCksIFNob3dIaWRlLlNob3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgU2hvd0hpZGUuSGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtaXRlbS1oZWFkZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSB0YXJnZXQuaXMoXCIuZmFjZXQtaXRlbS1oZWFkZXJcIikgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50KFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtaGVhZGVyIC5idXR0b25cIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGhlYWRlckVsZW1lbnQsIFNob3dIaWRlLlRvZ2dsZSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBDb250cm9sVmlzaWJpbGl0eU9mRmlsdGVyID0gKGVsZW1lbnQ6IEpRdWVyeSwgc2hvd0hpZGU6IFNob3dIaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZWxlbWVudC5jaGlsZHJlbihcImlcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVZpc2libGUgPSBpY29uRWxlbWVudC5oYXNDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XG4gICAgICAgIGlmIChTaG93SGlkZS5Ub2dnbGUgIT09IHNob3dIaWRlICYmICgoY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuU2hvdykgfHxcbiAgICAgICAgICAgICghY3VycmVudGx5VmlzaWJsZSAmJiBzaG93SGlkZSA9PT0gU2hvd0hpZGUuSGlkZSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50bHlWaXNpYmxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKS5maW5kKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIikuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LmFkZENsYXNzKFwiZ3VpLWljb24tY2hldnJvbi11cFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5mYWNldC1pdGVtXCIpLmZpbmQoXCIuZmFjZXQtaXRlbS1kZXNjcmlwdGlvblwiKS5zbGlkZVVwKDIwMCk7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5yZW1vdmVDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tdXBcIik7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImd1aS1pY29uLWNoZXZyb24tZG93blwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUZhY2V0c0hhbmRsZXIudHMiLCJpbXBvcnQgeyBGYWNldENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GYWNldENvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogRmFjZXRDb25maWdTdG9yZSkge31cblxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5mYWNldC1ib2R5IC5mYWNldC1pdGVtLWRlc2NyaXB0aW9uIC5mYWNldC12YWx1ZS1jaGVja2JveFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsU3RyLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBjaGVja2VkID8gRmlsdGVyQWN0aW9uVHlwZS5BZGQgOiBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzO1xuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgYWN0aW9uLCB2YWx1ZVsyXSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GYWNldEFjdGlvbkhhbmRsZXIudHMiLCJpbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0U2VhcmNoSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnkpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5maWx0ZXItc2VhcmNoLWlucHV0XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1saXN0IC5mYWNldC1pdGVtXCIpLmVhY2goKGk6IG51bWJlciwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeShlKS5hdHRyKFwiZGF0YS1hdHRyLW5hbWVcIikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPT09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZhY2V0U2VhcmNoSGFuZGxlci50cyIsImltcG9ydCB7IEZpbHRlckNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsdGVyRWxlbWVudDogSlF1ZXJ5LCBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZSkge31cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LXN1YmhlYWRlciAuZmFjZXQtbGFiZWxzIC5sYWJlbFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmlzKFwiLmxhYmVsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRzKFwiLmxhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGVsZW1lbnQuYXR0cihcImRhdGEtZmlsdGVyLWVudHJ5XCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsU3RyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uRmlsdGVyQ2hhbmdlKHZhbHVlWzBdLCB2YWx1ZVsxXSwgRmlsdGVyQWN0aW9uVHlwZS5NaW51cywgdmFsdWVbMl0pO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5mYWNldC1zdWJoZWFkZXIgLnJlbW92ZS1hbGxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkFsbEZpbHRlclJlbW92ZSgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL2V2ZW50aGFuZGxlcnMvRmlsdGVyQWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IEZhY2V0Q29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0ZhY2V0Q29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWRlRmFjZXRTZWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IEZhY2V0Q29uZmlnU3RvcmUpIHt9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5oaWRlLWZhY2V0XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAkKFwiLmZhY2V0LWJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmZhY2V0LWNvbGxhcHNlZC1ib2R5XCIpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1mYWNldFwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgJChcIi5mYWNldC1jb2xsYXBzZWQtYm9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuZmFjZXQtYm9keVwiKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9IaWRlRmFjZXRTZWN0aW9uSGFuZGxlci50cyIsImltcG9ydCB7IElGaWx0ZXJPcHRpb25zIH0gZnJvbSBcIi4uL2NvbmZpZy9JRmlsdGVyT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsdGVyVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9GaWx0ZXJDb25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25IYW5kbGVyLCBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRoYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBGaWx0ZXJDb25maWdTdG9yZTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJDaGFpbjogSUV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSAgbmV3IEZpbHRlckNvbmZpZ1N0b3JlKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9IGpRdWVyeShvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZpbHRlclRlbXBsYXRlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEZpbHRlckFjdGlvbkhhbmRsZXIodGhpcy5maWx0ZXJFbGVtZW50LCB0aGlzLmNvbmZpZ1N0b3JlKSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJpbmQgPSAgKGZpbHRlcnM6IElGYWNldFtdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmFjZXRTdWJIZWFkZXIgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5iaW5kKGZpbHRlcnMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC5odG1sKGZhY2V0U3ViSGVhZGVyKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL21haW4vRmlsdGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgeyBJRmFjZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lGYWNldFwiO1xyXG5pbXBvcnQgKiBhcyBGYWNldFN1YkhlYWRlciBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiO1xyXG5pbXBvcnQgeyBJRmlsdGVyVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZpbHRlclRlbXBsYXRlU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGaWx0ZXJUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW46IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRCb2R5OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyID0gRmFjZXRTdWJIZWFkZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZChmaWx0ZXJzOiBJRmFjZXRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIoe2ZpbHRlcnN9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL3RzL3NlcnZpY2VzL0ZpbHRlclRlbXBsYXRlU2VydmljZS50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQgZmFjZXQtc3ViaGVhZGVyIGd1aSBmbHVpZC13IGJhc2ljIGN1cnZlZCBwLTVcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIGJvbGQgZ3VpLXN1YmhlYWRpbmctMlxcXCI+QXBwbGllZCBGaWx0ZXJzPC9zcGFuPlxcbiAgICA8YSBjbGFzcz1cXFwiZ3VpIG0tbC01IHJlbW92ZS1hbGxcXFwiID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgIDxzcGFuPkNsZWFyIEFsbDwvc3Bhbj5cXG4gICAgPC9hPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tbC0xMFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVycyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9zcGFuPlxcbjwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBsYXJnZSBsYWJlbHMgZmFjZXQtbGFiZWxzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0yXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvc3Bhbj5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLTAgbS1yLTIgcC00IGxhYmVsIGN1cnNvci1wb2ludGVyIHN0cmlrZXRocm91Z2gtaG92ZXJcXFwiIGRhdGEtZmlsdGVyLWVudHJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiOlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS50eXBlIDogZGVwdGhzWzFdKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5sYWJlbCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJsYWJlbFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jYW5jZWxcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVycyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJPcHRpb25zIH0gZnJvbSBcIi4vSUZpbHRlck9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb25maWdTdG9yZSB7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IElGaWx0ZXJPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0ZmlsdGVyT3B0aW9uczogSUZpbHRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICBvbkFsbEZpbHRlclJlbW92ZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgYWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRmlsdGVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0IGZvciBmaWx0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJRmlsdGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElGaWx0ZXJPcHRpb25zKTogSUZpbHRlck9wdGlvbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0ZmlsdGVyT3B0aW9ucywgaW5wdXRPcHRpb25zKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvRmlsdGVyQ29uZmlnU3RvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9