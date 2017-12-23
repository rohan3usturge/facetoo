import { IFacetOptions } from "./config/IFacetOptions";
import { ConfigStore } from "./config/ConfigStore";

export class Facet {
    private configStore: ConfigStore;
    constructor(options: IFacetOptions){
        this.configStore =  new ConfigStore(options);
    }
}
