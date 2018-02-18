import {FilterActionType} from "../models/FilterActionType";
import {IFacetOptions} from "./IFacetOptions";

export class FacetConfigStore {
    private options: IFacetOptions;
    private defaultFacetOptions: IFacetOptions = {
        containerElement: null,
        // facets: [],
        onFilterChange: (key: string, value: string, action: FilterActionType): void => {
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
