import { DataType } from "./DataType";
import { IFacetRange } from "./IFacetRange";
import { IFacetValue } from "./IFacetValue";

export interface IFacet {
    id: string;
    facetValues?: IFacetValue[];
    facetRange?: IFacetRange;
}
