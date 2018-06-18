import { IAllFilterRemoveDelegate } from "../delegates/IAllFilterRemoveDelegate";
import { IExpandCollapseDelegate } from "../delegates/IExpandCollapseDelegate";
import { IFilterActionDelegate } from "../delegates/IFilterActionDelegate";
import { IPinUnpinFilterDelegate } from "../delegates/IPinUnpinFilterDelegate";
import { IFacetConfig } from "../models/IFacetConfig";

export interface IFacetOptions {
    facetConfig: IFacetConfig[];
    animationTime?: number;
    collapsed: boolean;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onPinUnpin: IPinUnpinFilterDelegate;
    onCollapseToggle: IExpandCollapseDelegate;
    noOfFacetToShow?: number;
    idPrefix?: string;
}
