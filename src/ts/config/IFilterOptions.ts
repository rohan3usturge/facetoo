import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
import { IFacetConfig } from "../models/IFacetConfig";

export interface IFilterOptions {
    filterConfig: IFacetConfig[];
    animationTime?: number;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onAllFilterRemove: IAllFilterRemoveDelegate;
}
