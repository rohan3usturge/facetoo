import { IFacet } from "../models/IFacet";

export interface IFacetTemplateService {
    BindData(data: IFacet[]): string;
}
