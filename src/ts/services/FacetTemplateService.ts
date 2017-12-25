import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import { IFilter } from "../models/IFilter";
import * as FacetSubHeader from "./../../html/facet-applied-filters.html";
import * as FacetBody from "./../../html/facet-body.html";
import * as FacetHeader from "./../../html/facet-header.html";
import * as FacetMain from "./../../html/facet-main.html";
import { IFacetTemplateService } from "./IFacetTemplateService";

export class FacetTemplateService implements IFacetTemplateService {
    private data: IFacet[];
    private tempateFunctionForFacetMain: any;
    private tempateFunctionForFacetHeader: any;
    private tempateFunctionForFacetSubHeader: any;
    private tempateFunctionForFacetBody: any;
    constructor() {
        this.tempateFunctionForFacetMain = Handlebars.compile(FacetMain);
        this.tempateFunctionForFacetHeader = Handlebars.compile(FacetHeader);
        this.tempateFunctionForFacetSubHeader = Handlebars.compile(FacetSubHeader);
        this.tempateFunctionForFacetBody = Handlebars.compile(FacetBody);
    }
    public Bind(facets: IFacet[], filters: IFilter[]): string {
        const headerContent =  this.tempateFunctionForFacetHeader();
        const subHeaderContent = this.tempateFunctionForFacetSubHeader(filters);
        const bodyContent = this.tempateFunctionForFacetBody(facets);
        return this.tempateFunctionForFacetMain({headerContent, subHeaderContent, bodyContent});
    }

    public BindOnlyFacets(facets: IFacet[]): string {
        return this.tempateFunctionForFacetBody(facets);
    }

    public BindOnlyAppliedFilters(filters: IFilter[]): string {
        return this.tempateFunctionForFacetSubHeader(filters);
    }
}
