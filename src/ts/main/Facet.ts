import * as Handlebars from "handlebars";
import { ExpandCollapseHandler } from "../eventhandlers/ExpandCollapseHandler";
import { FilterActionHandler } from "../eventhandlers/FilterActionHandler";
import { IEventHandler } from "../eventhandlers/IEventHandler";
import { IFacet } from "../models/IFacet";
import { IFacetMeta } from "../models/IFacetMeta";
import { IFacetValue } from "../models/IFacetValue";
import { IFilter } from "../models/IFilter";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { ConfigStore } from "./../config/ConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";

export class Facet {
    private configStore: ConfigStore;
    private templateService: IFacetTemplateService;
    private parentElement: JQuery;
    private bindFinished: boolean;
    private handlerChain: IEventHandler[] = [];
    constructor(options: IFacetOptions) {
        Handlebars.registerHelper("isChecked", (bool: boolean): string => {
            return bool ? "checked" : "";
        });
        this.configStore =  new ConfigStore(options);
        this.parentElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService();
        this.handlerChain.push(new ExpandCollapseHandler(this.parentElement, this.configStore));
        this.handlerChain.push(new FilterActionHandler(this.parentElement, this.configStore));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public BindOnlyFacets =  (facets: IFacet[]): void => {
        if (!this.bindFinished) {
            const fullFacet = this.templateService.Bind(facets, []);
        } else {
            const facetSubHeader = this.templateService.BindOnlyFacets(facets);
            this.parentElement.find(".facet-body").html(facetSubHeader);
        }    }
    public BindOnlyAppliedFilters =  (filters: IFilter[]): void => {
        if (!this.bindFinished) {
            const fullFacet = this.templateService.Bind([], filters);
        } else {
            const facetSubHeader = this.templateService.BindOnlyAppliedFilters(filters);
            this.parentElement.find(".facet-subheader").html(facetSubHeader);
        }
    }
    public Bind =  (facets: IFacet[], filters: IFilter[]): void => {
        this.parentElement.html(this.templateService.Bind(facets, filters));
        this.bindFinished = true;
    }
}
