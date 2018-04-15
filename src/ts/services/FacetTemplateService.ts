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
    const favorites = facets.filter( (f) => f.pinned !== undefined && f.pinned);
    const nonFavorites = facets.filter( (f) => f.pinned === undefined || !f.pinned);
    favorites.sort(this.compareFn);
    nonFavorites.sort(this.compareFn);
    const noOfFacetToShow = this.configStore.Options.noOfFacetToShow;
    return this.tempateFunctionForFacetMain({ favorites, nonFavorites, noOfFacetToShow });
  }
  public setData = (facets: IFacet[]): void => {
    this.data = facets;
  }
  public getData = (): IFacet[] => {
    return this.data;
  }
  private compareFn = (prev: IFacet, next: IFacet) => {
    if ( prev.order === undefined ) {
      return -1;
    }
    if ( next.order === undefined ) {
      return 1;
    }
    return prev.order - next.order;
  }
}
