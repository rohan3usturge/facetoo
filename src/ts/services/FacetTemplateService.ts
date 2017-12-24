import * as HandleBars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetMain from "./../../html/facet-main.html";
import { IFacetTemplateService } from "./IFacetTemplateService";

export class FacetTemplateService implements IFacetTemplateService {
    private data: IFacet[];
    private tempateFunctionForFacet: any;
    constructor() {
        this.tempateFunctionForFacet = Handlebars.compile(FacetMain);
    }
    public BindData(data: IFacet[]): string {
        this.data = data;
        return this.tempateFunctionForFacet(data);
    }
}
