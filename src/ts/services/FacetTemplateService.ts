import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
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
  }
  public bind(facets: IFacet[]): string {
    return this.tempateFunctionForFacetMain({ facets });
  }
}
