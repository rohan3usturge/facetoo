import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetSubHeader from "./../../hbs/facet-applied-filters.hbs";
import * as FacetBody from "./../../hbs/facet-body.hbs";
import * as FacetMain from "./../../hbs/facet-main.hbs";
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
