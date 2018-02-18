import { IFacet } from "../models/IFacet";

export interface IFilterTemplateService {
    bind(filters: IFacet[]): string;
}
