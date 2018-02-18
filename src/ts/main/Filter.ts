import { IFilterOptions } from "../config/IFilterOptions";
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
        this.templateService = new FilterTemplateService();
        this.handlerChain.push(new FilterActionHandler(this.filterElement, this.configStore));
        this.handlerChain.forEach((handler) => {
            handler.RegisterDomHandler();
        });
    }
    public bind =  (filters: IFacet[]): void => {
        const facetSubHeader = this.templateService.bind(filters);
        this.filterElement.html(facetSubHeader);
    }
}
