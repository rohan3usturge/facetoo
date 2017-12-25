import { IFacet } from "../models/IFacet";

export interface IFacetTemplateService {
    BindOnlyFacets(facets: IFacet[]): string;
    BindOnlyAppliedFilters(filters: IFacet[]): string;
    Bind(facets: IFacet[], filters: IFacet[]): string;

}
