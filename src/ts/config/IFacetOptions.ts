import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
import { IFacetMeta } from "../models/IFacetMeta";

export interface IFacetOptions {
    facets: IFacetMeta[];
    containerElement: Element;
    onFilterChange: IFilterActionDelegate;
    onAllFilterRemove: IAllFilterRemoveDelegate;
}
