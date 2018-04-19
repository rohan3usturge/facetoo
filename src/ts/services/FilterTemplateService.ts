import * as Handlebars from "handlebars";
import { IFacet } from "../models/IFacet";
import * as FacetSubHeader from "./../../hbs/facet-applied-filters.hbs";
import { FilterConfigStore } from "./../config/FilterConfigStore";
import { IFilterTemplateService } from "./IFilterTemplateService";

export class FilterTemplateService implements IFilterTemplateService {
    private tempateFunctionForFacetMain: any;
    private tempateFunctionForFacetHeader: any;
    private tempateFunctionForFacetSubHeader: any;
    private tempateFunctionForFacetBody: any;
    constructor(private configStore: FilterConfigStore) {
        this.tempateFunctionForFacetSubHeader = FacetSubHeader;
    }
    public bind(filters: IFacet[]): string {
        const mergedFilters = this.mergeWithFacetConfig(filters);
        return this.tempateFunctionForFacetSubHeader({filters: mergedFilters});
    }
    private mergeWithFacetConfig = (filters: IFacet[]) => {
        const mergedArray: any[] = [];
        for (const facet of filters) {
          for (const facetConfig of this.configStore.Options.filterConfig) {
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
