import { IFacet } from "../models/IFacet";

export interface IFacetTemplateService {
    bind(facets: IFacet[]): string;
}
