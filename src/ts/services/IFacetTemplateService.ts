import { IFacet } from "../models/IFacet";

export interface IFacetTemplateService {
    bind(facets: IFacet[]): string;
    setData(facets: IFacet[]): void;
    getData(): IFacet[];
}
