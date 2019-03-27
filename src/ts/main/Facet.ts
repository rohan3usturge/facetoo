import { IFacet } from "../models/IFacet";
import { IFacetConfig } from "../models/IFacetConfig";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { FacetTree } from "./../a11y/FacetTree";
import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";
export class Facet {
    private configStore: FacetConfigStore;
    private templateService: IFacetTemplateService;
    private facetElement: HTMLElement;
    private facetTree: FacetTree;
    private focusableElement: HTMLElement;
    constructor(options: IFacetOptions) {
        this.configStore =  new FacetConfigStore(options);
        this.facetElement = options.containerElement;
        this.templateService = new FacetTemplateService(this.configStore);
    }
    public bind =  (facets: IFacet[]): void => {
        this.templateService.setData(facets);
        this.reRender();
    }
    public reRender = (): void => {
        setTimeout(() => {
            const data = this.templateService.getData();
            const fullFacet = this.templateService.bind(data);
            this.facetElement.innerHTML = fullFacet;
            this.facetTree = new FacetTree(this.configStore.Options.containerElement, this, this.configStore);
            this.facetTree.init();
            this.setFocusToLastElement();
        }, 1 );
    }
    public setFacetConfig = (facetConfig: IFacetConfig[]): void => {
        this.configStore.Options.facetConfig = facetConfig;
    }
    public setFocusableElement = (element: HTMLElement): void => {
        if ( !element ) {
            return;
        }
        this.focusableElement = element;
    }
    public destroy =  (): void => {
        this.facetTree.destroy();
    }
    public setFocusToLastElement = (): void => {
        let newFocusable;
        if ( this.focusableElement ) {
            if ( this.focusableElement.classList.contains("pin-unpin-selector")) {
                const id = $(this.focusableElement).attr("data-attr-id");
                const tree = $("[role=tree]");
                const pinSelectors = tree.find(".pin-unpin-selector");
                pinSelectors.each((index: number, element: HTMLElement) => {
                    const eachI = $(element);
                    const eachIattr = eachI.attr("data-attr-id");
                    if ( eachIattr === id ) {
                        newFocusable = eachI;
                        return false;
                    }
                });
                newFocusable.focus();
            } else {
                const id = $(this.focusableElement).attr("data-attr-id");
                const value = $(this.focusableElement).attr("data-attr-value");
                $(".filter-label").each((index: number, element: HTMLElement) => {
                    const eachLabel = $(element);
                    const eachLabelId = eachLabel.attr("data-attr-id");
                    const eachLabelValue = eachLabel.attr("data-attr-value");
                    if ( eachLabelId === id && eachLabelValue === value ) {
                        newFocusable = eachLabel;
                        return false;
                    }
                });
                this.facetTree.setFocusToNodeItem(newFocusable[0]);
            }
        }
        this.focusableElement = null;
    }
}
