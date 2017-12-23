import * as HandleBars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetMain from "./../../html/facet-main.html";
import { IFacetTemplateService } from "./IFacetTemplateService";

export class FacetTemplateService implements IFacetTemplateService {
    private data: IFacet[];
    private tempateFunctionForFacet: any;
    public BindData(data: IFacet[]): string {
        this.data = data;
        this.tempateFunctionForFacet = Handlebars.compile(FacetMain);
        return this.tempateFunctionForFacet();
    }
}
