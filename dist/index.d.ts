declare module Facetoo
{
	import { IFacet } from "../models/IFacet";
	import { IFilter } from "../models/IFilter";
	import { IFacetOptions } from "./../config/IFacetOptions";
	export class Facet {
	    private configStore;
	    private templateService;
	    private parentElement;
	    private bindFinished;
	    private handlerChain;
	    constructor(options: IFacetOptions);
	    BindOnlyFacets: (facets: IFacet[]) => void;
	    BindOnlyAppliedFilters: (filters: IFilter[]) => void;
	    Bind: (facets: IFacet[], filters: IFilter[]) => void;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	import { IEventHandler } from "./IEventHandler";
	export class ExpandCollapseHandler implements IEventHandler {
	    private element;
	    private configStore;
	    constructor(element: JQuery, configStore: ConfigStore);
	    RegisterDomHandler(): void;
	    onResize(): void;
	    onDocumentClick(event: any): void;
	    private ControlVisibilityOfFilter;
	}

	/// <reference types="jquery" />
	import { ConfigStore } from "../config/ConfigStore";
	import { IEventHandler } from "./IEventHandler";
	export class FilterActionHandler implements IEventHandler {
	    private element;
	    private configStore;
	    constructor(element: JQuery, configStore: ConfigStore);
	    RegisterDomHandler(): void;
	    onResize(): void;
	    onDocumentClick(event: any): void;
	}

	import { IFacet } from "../models/IFacet";
	import { IFilter } from "../models/IFilter";
	import { IFacetTemplateService } from "./IFacetTemplateService";
	export class FacetTemplateService implements IFacetTemplateService {
	    private data;
	    private tempateFunctionForFacetMain;
	    private tempateFunctionForFacetHeader;
	    private tempateFunctionForFacetSubHeader;
	    private tempateFunctionForFacetBody;
	    constructor();
	    Bind(facets: IFacet[], filters: IFilter[]): string;
	    BindOnlyFacets(facets: IFacet[]): string;
	    BindOnlyAppliedFilters(filters: IFilter[]): string;
	}

	import { IFacetOptions } from "./IFacetOptions";
	export class ConfigStore {
	    private options;
	    constructor(options: IFacetOptions);
	    readonly Options: IFacetOptions;
	}

	export enum FilterActionType {
	    Add = "Add",
	    Minus = "Minus",
	}

	import { FilterActionType } from "../models/FilterActionType";
	export type IFilterActionDelegate = (key: string, value: string, action: FilterActionType) => void;

	import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
	import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
	import { IFacetMeta } from "../models/IFacetMeta";
	export interface IFacetOptions {
	    facets: IFacetMeta[];
	    containerElement: Element;
	    onFilterChange: IFilterActionDelegate;
	    onAllFilterRemove: IAllFilterRemoveDelegate;
	}

}