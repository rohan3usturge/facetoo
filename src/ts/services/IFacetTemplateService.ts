import { IFacet } from "../models/IFacet";
import { IFilter } from "../models/IFilter";

export interface IFacetTemplateService {
    BindOnlyFacets(facets: IFacet[]): string;
    BindOnlyAppliedFilters(filters: IFilter[]): string;
    Bind(facets: IFacet[], filters: IFilter[]): string;

}
