(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("C:\\Users\\rousturg\\source\\repos\\SearchMaster\\Facetoo\\node_modules\\handlebars\\runtime.js"));
	else if(typeof define === 'function' && define.amd)
		define(["C:\\Users\\rousturg\\source\\repos\\SearchMaster\\Facetoo\\node_modules\\handlebars\\runtime.js"], factory);
	else if(typeof exports === 'object')
		exports["Facetoo"] = factory(require("C:\\Users\\rousturg\\source\\repos\\SearchMaster\\Facetoo\\node_modules\\handlebars\\runtime.js"));
	else
		root["Facetoo"] = factory(root["C:\\Users\\rousturg\\source\\repos\\SearchMaster\\Facetoo\\node_modules\\handlebars\\runtime.js"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"content\">\n    <h5 class=\"gui sub blue floated left header\">Applied Filters</h5>\n    <div class=\"gui mini right floated buttons\">\n        <button class=\"gui mini icon button remove-all\">\n            <i class=\"icon icon-close\"></i>\n        </button>\n    </div>\n    <div class=\"gui tiny hidden clearing divider\"></div>\n    <table class=\"gui very compact small collapsing border-less table\" style=\"border: none;;clear:both;\">\n        <tbod>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbod>\n    </table>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <tr class=\"top aligned\">\n                <td>"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>\n                    <span class=\"gui mini blue labels facet-labels\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </span>\n                </td>\n            </tr>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <span class=\"gui label remove-label\" data-filter-entry=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\">\n                            "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                            <i class=\"icon icon-close\"></i>\n                        </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.filters : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        <div class=\"item facet-item\">\n            <div class=\"content\">\n                <div class=\"facet-item-header cursor-pointer\">\n                    <i class=\"right triangle icon\"></i>\n                    <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n                </div>\n                <div class=\"description facet-item-description\" style=\"display:none;\">\n                    <div class=\"gui small list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facetValues : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <div class=\"item\">\n                            <input style=\"height:0.85em;\" id=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(8)).call(alias3,(depth0 != null ? depth0.selected : depth0),{"name":"Checked","hash":{},"data":data}))
    + " "
    + alias2(__default(__webpack_require__(9)).call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"Disabled","hash":{},"data":data}))
    + " class=\"facet-value-checkbox cursor-pointer\" value=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + ":"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" type=\"checkbox\"/>\n                            <label style=\"font-size:0.85em;\" class=\"cursor-pointer\" for=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "-"
    + alias2(alias1((data && data.index), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + " ("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</label>\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"content\" style=\"height: 100%;overflow:hidden;\">\n    <h5 class=\"gui sub blue left floated header\">Select Filters</h5>\n    <div class=\"gui mini right floated buttons\">\n        <button class=\"gui mini icon button expand-all\">\n            <i class=\"icon icon-plus\"></i>\n        </button>\n        <button class=\"gui mini icon button collapse-all\">\n            <i class=\"icon icon-minus\"></i>\n        </button>\n    </div>\n    <div class=\"gui tiny hidden clearing divider\"></div>\n    <div class=\"gui medium list facet-list\" style=\"height: 100%;overflow: auto;clear:both;\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpandCollapseHandler_1 = __webpack_require__(4);
var FilterActionHandler_1 = __webpack_require__(5);
var FacetTemplateService_1 = __webpack_require__(7);
var ConfigStore_1 = __webpack_require__(12);
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
            if (!_this.bindFinished) {
                var fullFacet = _this.templateService.Bind(facets, []);
            }
            else {
                var facetSubHeader = _this.templateService.BindOnlyFacets(facets);
                _this.parentElement.find(".facet-body").html(facetSubHeader);
            }
        };
        this.BindOnlyAppliedFilters = function (filters) {
            if (!_this.bindFinished) {
                var fullFacet = _this.templateService.Bind([], filters);
            }
            else {
                var facetSubHeader = _this.templateService.BindOnlyAppliedFilters(filters);
                _this.parentElement.find(".facet-subheader").html(facetSubHeader);
            }
        };
        this.Bind = function (facets, filters) {
            _this.parentElement.html(_this.templateService.Bind(facets, filters));
            _this.bindFinished = true;
        };
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.parentElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService_1.FacetTemplateService();
        this.handlerChain.push(new ExpandCollapseHandler_1.ExpandCollapseHandler(this.parentElement, this.configStore));
        this.handlerChain.push(new FilterActionHandler_1.FilterActionHandler(this.parentElement, this.configStore));
        this.handlerChain.forEach(function (handler) {
            handler.RegisterDomHandler();
        });
    }
    return Facet;
}());
exports.Facet = Facet;


/***/ }),
/* 4 */
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
            var currentlyVisible = iconElement.hasClass("down");
            if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
                (!currentlyVisible && showHide === ShowHide.Hide))) {
                return;
            }
            if (!currentlyVisible) {
                element.parents(".facet-item").find(".facet-item-description").show();
                iconElement.removeClass("right");
                iconElement.addClass("down");
            }
            else {
                element.parents(".facet-item").find(".facet-item-description").hide();
                iconElement.removeClass("down");
                iconElement.addClass("right");
            }
        };
    }
    ExpandCollapseHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.element.on("click", ".facet-body .expand-all", function (event) {
            _this.element.find(".facet-item-header").each(function (index, element) {
                _this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Show);
            });
            // jQuery(event.target).parents("button")
            // .attr("disabled", "true")
            // .siblings("button")
            // .removeAttr("disabled");
            event.stopPropagation();
        });
        this.element.on("click", ".facet-body .collapse-all", function (event) {
            _this.element.find(".facet-item-header").each(function (index, element) {
                _this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            // jQuery(event.target)
            // .parents("button")
            // .attr("disabled", "true")
            // .siblings("button")
            // .removeAttr("disabled");
            event.stopPropagation();
        });
        this.element.on("click", ".facet-body .facet-item .facet-item-header", function (event) {
            var headerElement = jQuery(event.target).parents(".facet-item-header");
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType_1 = __webpack_require__(6);
var FilterActionHandler = /** @class */ (function () {
    function FilterActionHandler(element, configStore) {
        this.element = element;
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
            // if (!checked) {
            //     this.element.find(".facet-subheader .facet-labels .label").each((index, label) => {
            //         const val = jQuery(label).attr("data-filter-entry");
            //         if (val === valStr) {
            //             jQuery(label).remove();
            //         }
            //     });
            // }
        });
        this.element.on("click", ".facet-subheader .facet-labels .label", function (event) {
            var element = jQuery(event.target);
            if (!element.is(".label")) {
                element = element.parents(".label");
            }
            var valStr = element.attr("data-filter-entry").toString();
            var value = valStr.split(":");
            _this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType_1.FilterActionType.Minus);
            // element.remove();
            // this.element.find(".facet-body .facet-item-description .facet-value-checkbox")
            // .each((index, checkbox) => {
            //     if (!jQuery(checkbox).is(":checked")) {
            //         return;
            //     }
            //     const val = jQuery(checkbox).val().toString();
            //     if (val === valStr) {
            //         jQuery(checkbox).prop("checked", false);
            //     }
            // });
        });
        this.element.on("click", ".facet-subheader .remove-all", function (event) {
            _this.element.find(".facet-subheader").hide();
            _this.configStore.Options.onAllFilterRemove();
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
/* 6 */
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FacetSubHeader = __webpack_require__(1);
var FacetBody = __webpack_require__(2);
var FacetMain = __webpack_require__(10);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checked = function (bool) {
    return bool ? "checked" : "";
};
exports.default = checked;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var disabled = function (bool) {
    return bool ? "disabled" : "";
};
exports.default = disabled;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\n    .remove-label:hover{\n        text-decoration: line-through;\n        cursor: pointer;\n    }\n    .border-less tr td { border-top: 0px !important; }\n    .cursor-pointer{\n        cursor: pointer;\n    }\n</style>\n\n<div class=\"gui fluid card\" style=\"padding-top : 0px;height:100%;overflow:hidden;\">\n    <div class=\"facet-header\">"
    + ((stack1 = container.invokePartial(__webpack_require__(11),depth0,{"name":"facet-header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n    <div class=\"facet-subheader\">"
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"facet-applied-filters","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n    <div class=\"facet-body\" style=\"height:100%;overflow:hidden;\">"
    + ((stack1 = container.invokePartial(__webpack_require__(2),depth0,{"name":"facet-body","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content facet-header\">\n    <h5 class=\"gui sub blue floated left header\">Filters Section</h5>\n    <div class=\"gui mini right floated buttons\">\n        <button class=\"gui mini icon button remove-all\">\n            <i class=\"close icon\"></i>\n        </button>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigStore = /** @class */ (function () {
    function ConfigStore(options) {
        this.options = options;
    }
    Object.defineProperty(ConfigStore.prototype, "Options", {
        get: function () {
            return this.options;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYTU3N2ExYTAxOWMxMTZlY2E1YiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxzb3VyY2VcXFxccmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL0ZhY2V0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ldmVudGhhbmRsZXJzL0V4cGFuZENvbGxhcHNlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9GaWx0ZXJBY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZmFjZXQtbWFpbi5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9mYWNldC1oZWFkZXIuaGJzIiwid2VicGFjazovLy8uL3NyYy90cy9jb25maWcvQ29uZmlnU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNE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Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7O0FDRmpCO0lBRUkscUJBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNELHNCQUFXLGdDQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDTCxrQkFBQztBQUFELENBQUM7QUFSWSxrQ0FBVyIsImZpbGUiOiJmYWNldG9vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmFjZXRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXHNvdXJjZVxcXFxyZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGYWNldG9vXCJdID0gZmFjdG9yeShyb290W1wiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhNTc3YTFhMDE5YzExNmVjYTViIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXHNvdXJjZVxcXFxyZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxzb3VyY2VcXFxccmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxoNSBjbGFzcz1cXFwiZ3VpIHN1YiBibHVlIGZsb2F0ZWQgbGVmdCBoZWFkZXJcXFwiPkFwcGxpZWQgRmlsdGVyczwvaDU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIHJpZ2h0IGZsb2F0ZWQgYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBpY29uIGJ1dHRvbiByZW1vdmUtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBpY29uLWNsb3NlXFxcIj48L2k+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSB0aW55IGhpZGRlbiBjbGVhcmluZyBkaXZpZGVyXFxcIj48L2Rpdj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgdmVyeSBjb21wYWN0IHNtYWxsIGNvbGxhcHNpbmcgYm9yZGVyLWxlc3MgdGFibGVcXFwiIHN0eWxlPVxcXCJib3JkZXI6IG5vbmU7O2NsZWFyOmJvdGg7XFxcIj5cXG4gICAgICAgIDx0Ym9kPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8L3Rib2Q+XFxuICAgIDwvdGFibGU+XFxuPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJ0b3AgYWxpZ25lZFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZD5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbWluaSBibHVlIGxhYmVscyBmYWNldC1sYWJlbHNcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmFjZXRWYWx1ZXMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBsYWJlbCByZW1vdmUtbGFiZWxcXFwiIGRhdGEtZmlsdGVyLWVudHJ5PVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0uaWQgOiBkZXB0aHNbMV0pLCBkZXB0aDApKVxuICAgICsgXCI6XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGljb24tY2xvc2VcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJzIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sZW5ndGggOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9mYWNldC1hcHBsaWVkLWZpbHRlcnMuaGJzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSBmYWNldC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtaXRlbS1oZWFkZXIgY3Vyc29yLXBvaW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcInJpZ2h0IHRyaWFuZ2xlIGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb24gZmFjZXQtaXRlbS1kZXNjcmlwdGlvblxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIHNtYWxsIGxpc3RcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0VmFsdWVzIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPVxcXCJoZWlnaHQ6MC44NWVtO1xcXCIgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sYWJlbCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIi1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRpc2FibGVkIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiIGNsYXNzPVxcXCJmYWNldC12YWx1ZS1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5pZCA6IGRlcHRoc1sxXSksIGRlcHRoMCkpXG4gICAgKyBcIjpcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwiZm9udC1zaXplOjAuODVlbTtcXFwiIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlclxcXCIgZm9yPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFiZWwgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCItXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiIChcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY291bnQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIpPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiAxMDAlO292ZXJmbG93OmhpZGRlbjtcXFwiPlxcbiAgICA8aDUgY2xhc3M9XFxcImd1aSBzdWIgYmx1ZSBsZWZ0IGZsb2F0ZWQgaGVhZGVyXFxcIj5TZWxlY3QgRmlsdGVyczwvaDU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIHJpZ2h0IGZsb2F0ZWQgYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBpY29uIGJ1dHRvbiBleHBhbmQtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBpY29uLXBsdXNcXFwiPjwvaT5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgaWNvbiBidXR0b24gY29sbGFwc2UtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBpY29uLW1pbnVzXFxcIj48L2k+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSB0aW55IGhpZGRlbiBjbGVhcmluZyBkaXZpZGVyXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG1lZGl1bSBsaXN0IGZhY2V0LWxpc3RcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6IDEwMCU7b3ZlcmZsb3c6IGF1dG87Y2xlYXI6Ym90aDtcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZhY2V0cyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWJvZHkuaGJzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgRXhwYW5kQ29sbGFwc2VIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvRXhwYW5kQ29sbGFwc2VIYW5kbGVyXCI7XG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50aGFuZGxlcnMvRmlsdGVyQWN0aW9uSGFuZGxlclwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudGhhbmRsZXJzL0lFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgeyBJRmFjZXRWYWx1ZSB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0VmFsdWVcIjtcbmltcG9ydCB7IEZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJRmFjZXRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xuaW1wb3J0IHsgSUZhY2V0T3B0aW9ucyB9IGZyb20gXCIuLy4uL2NvbmZpZy9JRmFjZXRPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldCB7XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IElGYWNldFRlbXBsYXRlU2VydmljZTtcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcbiAgICBwcml2YXRlIGJpbmRGaW5pc2hlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGhhbmRsZXJDaGFpbjogSUV2ZW50SGFuZGxlcltdID0gW107XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZhY2V0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gIG5ldyBDb25maWdTdG9yZShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0galF1ZXJ5KG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gbmV3IEZhY2V0VGVtcGxhdGVTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNoYWluLnB1c2gobmV3IEV4cGFuZENvbGxhcHNlSGFuZGxlcih0aGlzLnBhcmVudEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4ucHVzaChuZXcgRmlsdGVyQWN0aW9uSGFuZGxlcih0aGlzLnBhcmVudEVsZW1lbnQsIHRoaXMuY29uZmlnU3RvcmUpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhaW4uZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93TG9hZGVyID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpLmZpbmQoXCIuZmFjZXQtbG9hZGVyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgaGlkZUxvYWRlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KS5maW5kKFwiLmZhY2V0LWxvYWRlclwiKS5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHB1YmxpYyBCaW5kT25seUZhY2V0cyA9ICAoZmFjZXRzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYmluZEZpbmlzaGVkKSB7XG4gICAgICAgICAgICBjb25zdCBmdWxsRmFjZXQgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5CaW5kKGZhY2V0cywgW10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmFjZXRTdWJIZWFkZXIgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5CaW5kT25seUZhY2V0cyhmYWNldHMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuZmFjZXQtYm9keVwiKS5odG1sKGZhY2V0U3ViSGVhZGVyKTtcbiAgICAgICAgfSAgICB9XG4gICAgcHVibGljIEJpbmRPbmx5QXBwbGllZEZpbHRlcnMgPSAgKGZpbHRlcnM6IElGYWNldFtdKTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5iaW5kRmluaXNoZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxGYWNldCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLkJpbmQoW10sIGZpbHRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmFjZXRTdWJIZWFkZXIgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5CaW5kT25seUFwcGxpZWRGaWx0ZXJzKGZpbHRlcnMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuZmFjZXQtc3ViaGVhZGVyXCIpLmh0bWwoZmFjZXRTdWJIZWFkZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBCaW5kID0gIChmYWNldHM6IElGYWNldFtdLCBmaWx0ZXJzOiBJRmFjZXRbXSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuaHRtbCh0aGlzLnRlbXBsYXRlU2VydmljZS5CaW5kKGZhY2V0cywgZmlsdGVycykpO1xuICAgICAgICB0aGlzLmJpbmRGaW5pc2hlZCA9IHRydWU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tYWluL0ZhY2V0LnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xuXG5lbnVtIFNob3dIaWRlIHtcbiAgICBTaG93LFxuICAgIEhpZGUsXG4gICAgVG9nZ2xlLFxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5kQ29sbGFwc2VIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBKUXVlcnksIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlKSB7fVxuXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtYm9keSAuZXhwYW5kLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgU2hvd0hpZGUuU2hvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGpRdWVyeShldmVudC50YXJnZXQpLnBhcmVudHMoXCJidXR0b25cIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpXG4gICAgICAgICAgICAvLyAuc2libGluZ3MoXCJidXR0b25cIilcbiAgICAgICAgICAgIC8vIC5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LWJvZHkgLmNvbGxhcHNlLWFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWl0ZW0taGVhZGVyXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sVmlzaWJpbGl0eU9mRmlsdGVyKGpRdWVyeShlbGVtZW50KSwgU2hvd0hpZGUuSGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGpRdWVyeShldmVudC50YXJnZXQpXG4gICAgICAgICAgICAvLyAucGFyZW50cyhcImJ1dHRvblwiKVxuICAgICAgICAgICAgLy8gLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcbiAgICAgICAgICAgIC8vIC5zaWJsaW5ncyhcImJ1dHRvblwiKVxuICAgICAgICAgICAgLy8gLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtYm9keSAuZmFjZXQtaXRlbSAuZmFjZXQtaXRlbS1oZWFkZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCkucGFyZW50cyhcIi5mYWNldC1pdGVtLWhlYWRlclwiKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWhlYWRlciAuYnV0dG9uXCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlcihoZWFkZXJFbGVtZW50LCBTaG93SGlkZS5Ub2dnbGUpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByaXZhdGUgQ29udHJvbFZpc2liaWxpdHlPZkZpbHRlciA9IChlbGVtZW50OiBKUXVlcnksIHNob3dIaWRlOiBTaG93SGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uRWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW4oXCJpXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50bHlWaXNpYmxlID0gaWNvbkVsZW1lbnQuaGFzQ2xhc3MoXCJkb3duXCIpO1xuICAgICAgICBpZiAoU2hvd0hpZGUuVG9nZ2xlICE9PSBzaG93SGlkZSAmJiAoKGN1cnJlbnRseVZpc2libGUgJiYgc2hvd0hpZGUgPT09IFNob3dIaWRlLlNob3cpIHx8XG4gICAgICAgICAgICAoIWN1cnJlbnRseVZpc2libGUgJiYgc2hvd0hpZGUgPT09IFNob3dIaWRlLkhpZGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudGx5VmlzaWJsZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLmZhY2V0LWl0ZW1cIikuZmluZChcIi5mYWNldC1pdGVtLWRlc2NyaXB0aW9uXCIpLnNob3coKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LnJlbW92ZUNsYXNzKFwicmlnaHRcIik7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5hZGRDbGFzcyhcImRvd25cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIuZmFjZXQtaXRlbVwiKS5maW5kKFwiLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb25cIikuaGlkZSgpO1xuICAgICAgICAgICAgaWNvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJkb3duXCIpO1xuICAgICAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoXCJyaWdodFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvZXZlbnRoYW5kbGVycy9FeHBhbmRDb2xsYXBzZUhhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJBY3Rpb25IYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEpRdWVyeSwgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmUpIHt9XG5cbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIuZmFjZXQtYm9keSAuZmFjZXQtaXRlbS1kZXNjcmlwdGlvbiAuZmFjZXQtdmFsdWUtY2hlY2tib3hcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbFN0ci5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hlY2tlZCA/IEZpbHRlckFjdGlvblR5cGUuQWRkIDogRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIGFjdGlvbik7XG4gICAgICAgICAgICAvLyBpZiAoIWNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmVsZW1lbnQuZmluZChcIi5mYWNldC1zdWJoZWFkZXIgLmZhY2V0LWxhYmVscyAubGFiZWxcIikuZWFjaCgoaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHZhbCA9IGpRdWVyeShsYWJlbCkuYXR0cihcImRhdGEtZmlsdGVyLWVudHJ5XCIpO1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodmFsID09PSB2YWxTdHIpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGpRdWVyeShsYWJlbCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmZhY2V0LXN1YmhlYWRlciAuZmFjZXQtbGFiZWxzIC5sYWJlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXMoXCIubGFiZWxcIikpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRzKFwiLmxhYmVsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gZWxlbWVudC5hdHRyKFwiZGF0YS1maWx0ZXItZW50cnlcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsU3RyLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkZpbHRlckNoYW5nZSh2YWx1ZVswXSwgdmFsdWVbMV0sIEZpbHRlckFjdGlvblR5cGUuTWludXMpO1xuICAgICAgICAgICAgLy8gZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5maW5kKFwiLmZhY2V0LWJvZHkgLmZhY2V0LWl0ZW0tZGVzY3JpcHRpb24gLmZhY2V0LXZhbHVlLWNoZWNrYm94XCIpXG4gICAgICAgICAgICAvLyAuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKCFqUXVlcnkoY2hlY2tib3gpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBjb25zdCB2YWwgPSBqUXVlcnkoY2hlY2tib3gpLnZhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHZhbCA9PT0gdmFsU3RyKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGpRdWVyeShjaGVja2JveCkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuZmFjZXQtc3ViaGVhZGVyIC5yZW1vdmUtYWxsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXCIuZmFjZXQtc3ViaGVhZGVyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkFsbEZpbHRlclJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9ldmVudGhhbmRsZXJzL0ZpbHRlckFjdGlvbkhhbmRsZXIudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcbiAgICBBZGQgPSBcIkFkZFwiLFxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcbmltcG9ydCB7IElGYWNldCB9IGZyb20gXCIuLi9tb2RlbHMvSUZhY2V0XCI7XG5pbXBvcnQgKiBhcyBGYWNldFN1YkhlYWRlciBmcm9tIFwiLi8uLi8uLi9oYnMvZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiO1xuaW1wb3J0ICogYXMgRmFjZXRCb2R5IGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1ib2R5Lmhic1wiO1xuaW1wb3J0ICogYXMgRmFjZXRNYWluIGZyb20gXCIuLy4uLy4uL2hicy9mYWNldC1tYWluLmhic1wiO1xuaW1wb3J0IHsgSUZhY2V0VGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vSUZhY2V0VGVtcGxhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNldFRlbXBsYXRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBkYXRhOiBJRmFjZXRbXTtcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0TWFpbjogYW55O1xuICAgIHByaXZhdGUgdGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRIZWFkZXI6IGFueTtcbiAgICBwcml2YXRlIHRlbXBhdGVGdW5jdGlvbkZvckZhY2V0U3ViSGVhZGVyOiBhbnk7XG4gICAgcHJpdmF0ZSB0ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHk6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldE1haW4gPSBGYWNldE1haW47XG4gICAgICAgIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRTdWJIZWFkZXIgPSBGYWNldFN1YkhlYWRlcjtcbiAgICAgICAgdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldEJvZHkgPSBGYWNldEJvZHk7XG4gICAgfVxuICAgIHB1YmxpYyBCaW5kKGZhY2V0czogSUZhY2V0W10sIGZpbHRlcnM6IElGYWNldFtdKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGF0ZUZ1bmN0aW9uRm9yRmFjZXRNYWluKHtmYWNldHMsIGZpbHRlcnN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQmluZE9ubHlGYWNldHMoZmFjZXRzOiBJRmFjZXRbXSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBhdGVGdW5jdGlvbkZvckZhY2V0Qm9keSh7ZmFjZXRzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIEJpbmRPbmx5QXBwbGllZEZpbHRlcnMoZmlsdGVyczogSUZhY2V0W10pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wYXRlRnVuY3Rpb25Gb3JGYWNldFN1YkhlYWRlcih7ZmlsdGVyc30pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvdHMvc2VydmljZXMvRmFjZXRUZW1wbGF0ZVNlcnZpY2UudHMiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImNoZWNrZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja2VkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHN0eWxlPlxcbiAgICAucmVtb3ZlLWxhYmVsOmhvdmVye1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmJvcmRlci1sZXNzIHRyIHRkIHsgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7IH1cXG4gICAgLmN1cnNvci1wb2ludGVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQgY2FyZFxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wIDogMHB4O2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmYWNldC1oZWFkZXJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxzb3VyY2VcXFxccmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEZhY2V0b29cXFxcc3JjXFxcXGhic1xcXFxmYWNldC1oZWFkZXIuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJmYWNldC1oZWFkZXJcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmFjZXQtc3ViaGVhZGVyXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYXBwbGllZC1maWx0ZXJzLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZmFjZXQtYXBwbGllZC1maWx0ZXJzXCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZhY2V0LWJvZHlcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47XFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcc291cmNlXFxcXHJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxGYWNldG9vXFxcXHNyY1xcXFxoYnNcXFxcZmFjZXQtYm9keS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImZhY2V0LWJvZHlcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LW1haW4uaGJzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXHNvdXJjZVxcXFxyZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcRmFjZXRvb1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50IGZhY2V0LWhlYWRlclxcXCI+XFxuICAgIDxoNSBjbGFzcz1cXFwiZ3VpIHN1YiBibHVlIGZsb2F0ZWQgbGVmdCBoZWFkZXJcXFwiPkZpbHRlcnMgU2VjdGlvbjwvaDU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIHJpZ2h0IGZsb2F0ZWQgYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBpY29uIGJ1dHRvbiByZW1vdmUtYWxsXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiY2xvc2UgaWNvblxcXCI+PC9pPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2ZhY2V0LWhlYWRlci5oYnNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgSUZhY2V0T3B0aW9ucyB9IGZyb20gXCIuL0lGYWNldE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlIHtcbiAgICBwcml2YXRlIG9wdGlvbnM6IElGYWNldE9wdGlvbnM7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUZhY2V0T3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUZhY2V0T3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy90cy9jb25maWcvQ29uZmlnU3RvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9