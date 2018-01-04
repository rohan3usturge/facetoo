import { DataType } from "./DataType";
import { IFacetRange } from "./IFacetRange";
import { IFacetValue } from "./IFacetValue";

export interface IFacet {
    id: string;
    name: string;
    type: DataType;
    facetValues: IFacetValue[];
    facetRange: IFacetRange;
}
