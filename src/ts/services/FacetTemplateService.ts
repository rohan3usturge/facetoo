import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetMain from "./../../hbs/facet-main.hbs";
import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetTemplateService } from "./IFacetTemplateService";

export class FacetTemplateService implements IFacetTemplateService {
  private data: IFacet[];
  private tempateFunctionForFacetMain: any;
  private tempateFunctionForFacetHeader: any;
  private tempateFunctionForFacetSubHeader: any;
  private tempateFunctionForFacetBody: any;
  constructor(private configStore: FacetConfigStore) {
    this.tempateFunctionForFacetMain = FacetMain;
  }
  public bind(facets: IFacet[]): string {
    const collapsed: boolean = this.configStore.Options.collapsed;
    return this.tempateFunctionForFacetMain({ collapsed, facets });
  }
}
