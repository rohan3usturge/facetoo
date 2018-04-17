import { FilterActionType } from "../models/FilterActionType";
import { IFilterOptions } from "./IFilterOptions";

export class FilterConfigStore {
    private options: IFilterOptions;
    private defaultfilterOptions: IFilterOptions = {
        animationTime: 200,
        containerElement: null,
        filterConfig: [],
        onAllFilterRemove: () => {
        // Ignore
        },
        onFilterChange: (key: string, value: string, action: FilterActionType): void => {
        // Ignore
        },
    };
    constructor(options: IFilterOptions) {
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object for filters");
        }
    }
    public get Options(): IFilterOptions {
        return this.options;
    }
    private extendOptions = (inputOptions: IFilterOptions): IFilterOptions => {
        return (this.options = jQuery.extend({}, this.defaultfilterOptions, inputOptions));
    }
}
