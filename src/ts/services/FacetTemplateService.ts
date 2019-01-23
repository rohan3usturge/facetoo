import * as Handlebars from "handlebars";
import {IFacet} from "../models/IFacet";
import * as FacetMain from "./../../hbs/facet-main.hbs";
import {FacetConfigStore} from "./../config/FacetConfigStore";
import {IFacetTemplateService} from "./IFacetTemplateService";

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
    const mergedFacets = this.mergeWithFacetConfig(facets);
    const favorites = mergedFacets.filter((f) => f.pinned !== undefined && f.pinned);
    const nonFavorites = mergedFacets.filter((f) => f.pinned === undefined || !f.pinned);
    favorites.sort(this.compareFn);
    nonFavorites.sort(this.compareFn);
    const noOfFacetToShow = this.configStore.Options.noOfFacetToShow;
    const idPrefix = this.configStore.Options.idPrefix;
    const showCount = this.configStore.Options.showCount;
    return this.tempateFunctionForFacetMain({idPrefix, favorites, nonFavorites, noOfFacetToShow, showCount});
  }
  public setData = (facets: IFacet[]): void => {
    this.data = facets;
  }
  public getData = (): IFacet[] => {
    return this.data;
  }
  private compareFn = (prev: any, next: any) => {
    if (prev.order === undefined) {
      return -1;
    }
    if (next.order === undefined) {
      return 1;
    }
    return prev.order - next.order;
  }
  private mergeWithFacetConfig = (facets: IFacet[]) => {
    const mergedArray: any[] = [];
    for (const facet of facets) {
      for (const facetConfig of this.configStore.Options.facetConfig) {
        if (facetConfig.id === facet.id) {
          mergedArray.push({
            collapsed: facetConfig.collapsed,
            facetRanges: facet.facetRanges,
            facetValues: facet.facetValues,
            id: facetConfig.id,
            name: facetConfig.name,
            order: facetConfig.order,
            pinned: facetConfig.pinned,
            type: facetConfig.type,
          });
          break;
        }
      }
    }
    return mergedArray;
  }
}
