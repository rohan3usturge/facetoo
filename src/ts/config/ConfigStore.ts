import { IFacetOptions } from "./IFacetOptions";

export class ConfigStore {
    private options: IFacetOptions;
    constructor(options: IFacetOptions) {
        this.options = options;
    }
    public get Options(): IFacetOptions {
        return this.options;
    }
}
