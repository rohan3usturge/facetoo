import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
import { IFacetMeta } from "./../models/IFacetMeta";

export interface IFilterOptions {
    animationTime?: number;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onAllFilterRemove: IAllFilterRemoveDelegate;
}
