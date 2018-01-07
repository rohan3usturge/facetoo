import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetSubHeader from "./../../html/facet-applied-filters.handlebars";
import * as FacetBody from "./../../html/facet-body.handlebars";
import * as FacetMain from "./../../html/facet-main.handlebars";
import { IFacetTemplateService } from "./IFacetTemplateService";

export class FacetTemplateService implements IFacetTemplateService {
    private data: IFacet[];
    private tempateFunctionForFacetMain: any;
    private tempateFunctionForFacetHeader: any;
    private tempateFunctionForFacetSubHeader: any;
    private tempateFunctionForFacetBody: any;
    constructor() {
        this.tempateFunctionForFacetMain = FacetMain;
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
        this.tempateFunctionForFacetBody = FacetBody;
    }
    public Bind(facets: IFacet[], filters: IFacet[]): string {
        return this.tempateFunctionForFacetMain({facets, filters});
    }

    public BindOnlyFacets(facets: IFacet[]): string {
        return this.tempateFunctionForFacetBody({facets});
    }

    public BindOnlyAppliedFilters(filters: IFacet[]): string {
        return this.tempateFunctionForFacetSubHeader({filters});
    }
}
