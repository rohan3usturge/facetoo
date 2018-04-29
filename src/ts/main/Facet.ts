import { HotKeysFacetHandler } from "../eventhandlers/HotKeysFacetHandler";
import { IFacet } from "../models/IFacet";
import { IFacetValue } from "../models/IFacetValue";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";
import { ExpandCollapseFacetsHandler , FacetActionHandler, FacetSearchHandler,
         HideFacetSectionHandler, IEventHandler, PinUnpinEventHandler, ShowMoreLessHandler } from "./../eventhandlers";

export class Facet {
    private configStore: FacetConfigStore;
    private templateService: IFacetTemplateService;
    private facetElement: JQuery;
    private handlerChain: IEventHandler[] = [];
    constructor(options: IFacetOptions) {
        this.configStore =  new FacetConfigStore(options);
        this.facetElement = jQuery(options.containerElement);
        this.templateService = new FacetTemplateService(this.configStore);
        this.handlerChain.push(new ExpandCollapseFacetsHandler(this.facetElement,
            this.configStore, this.templateService));
        this.handlerChain.push(new FacetActionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new FacetSearchHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new HideFacetSectionHandler(this.facetElement, this.configStore));
        this.handlerChain.push(new HotKeysFacetHandler());
        this.handlerChain.push(new PinUnpinEventHandler(this.facetElement, this.configStore, this.templateService));
        this.handlerChain.push(new ShowMoreLessHandler(this.facetElement, this.configStore));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public bind =  (facets: IFacet[]): void => {
        setTimeout(() => {
            this.templateService.setData(facets);
            const fullFacet = this.templateService.bind(facets);
            this.facetElement.html(fullFacet);
        }, 1 );
    }
    public hide = (): void => {
        this.facetElement.find(".facet-body").fadeOut(this.configStore.Options.animationTime);
        this.configStore.Options.collapsed = true;
    }
    public show = (): void => {
        this.facetElement.find(".facet-body").fadeIn(this.configStore.Options.animationTime);
        this.configStore.Options.collapsed = false;
    }
    public destroy =  (): void => {
        if ( this.facetElement !== undefined ) {
            this.facetElement.off();
        }
        this.handlerChain.forEach((handler) => {
            if (handler !== undefined && handler.deregister !== undefined) {
                handler.deregister();
            }
        });
    }
}
