import * as Handlebars from "handlebars";
import { ExpandCollapseHandler } from "../eventhandlers/ExpandCollapseHandler";
import { FilterActionHandler } from "../eventhandlers/FilterActionHandler";
import { IEventHandler } from "../eventhandlers/IEventHandler";
import { IFacet } from "../models/IFacet";
import { IFacetMeta } from "../models/IFacetMeta";
import { IFacetValue } from "../models/IFacetValue";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { ConfigStore } from "./../config/ConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";

export class Facet {
    private configStore: ConfigStore;
    private templateService: IFacetTemplateService;
    private handlerChain: IEventHandler[] = [];
    constructor(options: IFacetOptions) {
        this.configStore =  new ConfigStore(options);
        this.templateService = new FacetTemplateService();
        this.handlerChain.push(new ExpandCollapseHandler(
            jQuery(this.configStore.Options.containerElement), this.configStore));
        this.handlerChain.push(new FilterActionHandler(
            jQuery(this.configStore.Options.containerElement), this.configStore));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public BindData =  (): void => {
        let facets: IFacet[] = [];
        const facetValue: IFacetValue[] = [];
        for (let i = 0; i < 10; i ++) {
            facetValue.push( {
                count: 10 + i,
                label: "Label" + i,
                selected: i === 2,
            });
        }
        facets = this.configStore.Options.facets.map((facetMeta: IFacetMeta): IFacet => {
            return {
                facetMeta,
                facetRange: {
                    max: "",
                    min: "",
                },
                facetValues: facetValue,
            };
        });
        // tslint:disable-next-line:no-console
        console.log(facets);
        this.configStore.Options.containerElement.innerHTML = this.templateService.BindData(facets);
    }
}
