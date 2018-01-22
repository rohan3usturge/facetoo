import { ExpandCollapseHandler } from "../eventhandlers/ExpandCollapseHandler";
import { FilterActionHandler } from "../eventhandlers/FilterActionHandler";
import { FilterSearchHandler } from "../eventhandlers/FilterSearchHandler";
import { IEventHandler } from "../eventhandlers/IEventHandler";
import { IFacet } from "../models/IFacet";
import { IFacetValue } from "../models/IFacetValue";
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
        this.configStore =  new ConfigStore(options);
        this.parentElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService();
        this.handlerChain.push(new FilterSearchHandler(this.parentElement));
        this.handlerChain.push(new ExpandCollapseHandler(this.parentElement, this.configStore));
        this.handlerChain.push(new FilterActionHandler(this.parentElement, this.configStore));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public showLoader = (): void => {
        jQuery(this.configStore.Options.containerElement).find(".facet-loader").addClass("active");
    }
    public hideLoader = (): void => {
        jQuery(this.configStore.Options.containerElement).find(".facet-loader").remove("active");
    }
    public BindOnlyFacets =  (facets: IFacet[]): void => {
        if (!this.bindFinished) {
            const fullFacet = this.templateService.Bind(facets, []);
        } else {
            const facetSubHeader = this.templateService.BindOnlyFacets(facets);
            this.parentElement.find(".facet-body").html(facetSubHeader);
        }    }
    public BindOnlyAppliedFilters =  (filters: IFacet[]): void => {
        if (!this.bindFinished) {
            const fullFacet = this.templateService.Bind([], filters);
        } else {
            const facetSubHeader = this.templateService.BindOnlyAppliedFilters(filters);
            this.parentElement.find(".facet-subheader").html(facetSubHeader);
        }
    }
    public Bind =  (facets: IFacet[], filters: IFacet[]): void => {
        this.parentElement.html(this.templateService.Bind(facets, filters));
        this.bindFinished = true;
    }
}
