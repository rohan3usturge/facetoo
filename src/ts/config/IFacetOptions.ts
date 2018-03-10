import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
import { IFacetMeta } from "./../models/IFacetMeta";

export interface IFacetOptions {
    // facets: IFacetMeta[];
    animationTime?: number;
    collapsed: boolean;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
}
