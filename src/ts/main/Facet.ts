import { IFacet } from "../models/IFacet";
import { IFacetValue } from "../models/IFacetValue";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";
import { ExpandCollapseFacetsHandler , FacetActionHandler, FacetSearchHandler,
         HideFacetSectionHandler, IEventHandler } from "./../eventhandlers";

export class Facet {
    private configStore: FacetConfigStore;
    private templateService: IFacetTemplateService;
    private facetElement: JQuery;
    private handlerChain: IEventHandler[] = [];
    constructor(options: IFacetOptions) {
        this.configStore =  new FacetConfigStore(options);
        this.facetElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService();
        this.handlerChain.push(new ExpandCollapseFacetsHandler(this.facetElement));
        this.handlerChain.push(new FacetActionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new FacetSearchHandler(this.facetElement));
        this.handlerChain.push(new HideFacetSectionHandler(this.facetElement));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public bind =  (facets: IFacet[]): void => {
        const fullFacet = this.templateService.bind(facets);
        this.facetElement.html(fullFacet);
    }
}
