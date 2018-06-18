import {FilterActionType} from "../models/FilterActionType";
import {IFacetOptions} from "./IFacetOptions";

export class FacetConfigStore {
    private options: IFacetOptions;
    private defaultFacetOptions: IFacetOptions = {
        animationTime: 200,
        collapsed: false,
        containerElement: null,
        facetConfig: [],
        idPrefix: Math.floor((1 + Math.random()) * 0x1000000).toString(),
        noOfFacetToShow: 5,
        // facets: [],
        onCollapseToggle: (collapseConfig: [{key: string, collapsed: boolean}]) => {
            // Ignore
        },
        onFilterChange: (key: string, value: string, action: FilterActionType): void => {
            // Ignore
        },
        onPinUnpin: (key: string, pin: boolean): void => {
            // Ignore
        },
    };
    constructor(options: IFacetOptions) {
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
    }
    public get Options(): IFacetOptions {return this.options; }
    private extendOptions = (inputOptions: IFacetOptions): IFacetOptions => {
        return this.options = jQuery.extend({}, this.defaultFacetOptions, inputOptions);
    }
}
