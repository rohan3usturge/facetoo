import { IFilterOptions } from "../config/IFilterOptions";
import { HotKeysFiltersHandler } from "../eventhandlers/HotKeysFiltersHandler";
import { IFacet } from "../models/IFacet";
import { FilterTemplateService } from "../services/FilterTemplateService";
import { IFilterTemplateService } from "../services/IFilterTemplateService";
import { FilterConfigStore } from "./../config/FilterConfigStore";
import { FilterActionHandler, IEventHandler } from "./../eventhandlers";

export class Filter {
    private configStore: FilterConfigStore;
    private templateService: IFilterTemplateService;
    private filterElement: JQuery;
    private handlerChain: IEventHandler[] = [];
    constructor(options: IFilterOptions) {
        this.configStore =  new FilterConfigStore(options);
        this.filterElement = jQuery(options.containerElement);
        this.templateService = new FilterTemplateService(this.configStore);
        this.handlerChain.push(new FilterActionHandler(this.filterElement, this.configStore));
        this.handlerChain.push(new HotKeysFiltersHandler());
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public bind =  (filters: IFacet[]): void => {
        setTimeout(() => {
            const facetSubHeader = this.templateService.bind(filters);
            this.filterElement.html(facetSubHeader);
        }, 1 );
    }
    public destroy =  (): void => {
        if ( this.filterElement !== undefined ) {
            this.filterElement.off();
        }
        this.handlerChain.forEach((handler) => {
            if (handler !== undefined && handler.deregister !== undefined) {
                handler.deregister();
            }
        });
    }
}
