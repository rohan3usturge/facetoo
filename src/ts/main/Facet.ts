import { IFacet } from "../models/IFacet";
import { IFacetMeta } from "../models/IFacetMeta";
import { FacetTemplateService } from "../services/FacetTemplateService";
import { IFacetTemplateService } from "../services/IFacetTemplateService";
import { ConfigStore } from "./../config/ConfigStore";
import { IFacetOptions } from "./../config/IFacetOptions";

export class Facet {
    private configStore: ConfigStore;
    private templateService: IFacetTemplateService;
    constructor(options: IFacetOptions) {
        this.configStore =  new ConfigStore(options);
        this.templateService = new FacetTemplateService();
    }
    public BindData =  (): void => {
        const facets: IFacet[] = [];
        // for()
        // this.configStore.Options.facets.map((facetMeta: IFacetMeta) => {
        //     facets.push({
        //         facetMeta,
        //         facetValues:
        //     });
        // });
    }
}
