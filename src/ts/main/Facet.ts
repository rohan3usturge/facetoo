import { HotKeysFacetHandler } from "../eventhandlers/HotKeysFacetHandler";
import { IFacet } from "../models/IFacet";
import { IFacetConfig } from "../models/IFacetConfig";
import { IFacetValue } from "../models/IFacetValue";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { FacetTree } from "./../a11y/FacetTree";
import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";
import { ExpandCollapseFacetsHandler , FacetActionHandler,
    FacetKeyBoardNavigationHandler, FacetSearchHandler,
    HideFacetSectionHandler, IEventHandler, PinUnpinEventHandler, ShowMoreLessHandler } from "./../eventhandlers";
export class Facet {
    private configStore: FacetConfigStore;
    private templateService: IFacetTemplateService;
    private facetElement: HTMLElement;
    private handlerChain: IEventHandler[] = [];
    private facetTree: FacetTree;
    constructor(options: IFacetOptions) {
        this.configStore =  new FacetConfigStore(options);
        this.facetElement = options.containerElement;
        this.templateService = new FacetTemplateService(this.configStore);
        // this.handlerChain.push(new ExpandCollapseFacetsHandler(this.facetElement,
        //     this.configStore, this.templateService));
        // this.handlerChain.push(new FacetActionHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new FacetSearchHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new HideFacetSectionHandler(this.facetElement, this.configStore));
        // this.handlerChain.push(new HotKeysFacetHandler());
        // this.handlerChain.push(new PinUnpinEventHandler(this.facetElement, this.configStore, this.templateService));
        // // this.handlerChain.push(new ShowMoreLessHandler(this.facetElement, this.configStore));
        // // this.handlerChain.push(new FacetKeyBoardNavigationHandler(this.facetElement));
        // this.handlerChain.forEach((handler) => {
        //     handler.RegisterDomHandler();
        // });
    }
    public bind =  (facets: IFacet[]): void => {
        setTimeout(() => {
            this.templateService.setData(facets);
            const fullFacet = this.templateService.bind(facets);
            this.facetElement.innerHTML = fullFacet;
            const trees = document.querySelectorAll('[role="tree"]');
            this.facetTree = new FacetTree(this.configStore.Options.containerElement, this.configStore);
            this.facetTree.init();
        }, 1 );
    }
    public reRender = (): void => {
        setTimeout(() => {
            const data = this.templateService.getData();
            const fullFacet = this.templateService.bind(data);
            this.facetElement.innerHTML = fullFacet;
        }, 1 );
    }
    public setFacetConfig = (facetConfig: IFacetConfig[]): void => {
        this.configStore.Options.facetConfig = facetConfig;
    }
    public destroy =  (): void => {
        this.facetTree.destroy();
    }
}
