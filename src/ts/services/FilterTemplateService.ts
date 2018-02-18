import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetSubHeader from "./../../hbs/facet-applied-filters.hbs";
import { IFilterTemplateService } from "./IFilterTemplateService";

export class FilterTemplateService implements IFilterTemplateService {
    private tempateFunctionForFacetMain: any;
    private tempateFunctionForFacetHeader: any;
    private tempateFunctionForFacetSubHeader: any;
    private tempateFunctionForFacetBody: any;
    constructor() {
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
    }
    public bind(filters: IFacet[]): string {
        return this.tempateFunctionForFacetSubHeader({filters});
    }
}
