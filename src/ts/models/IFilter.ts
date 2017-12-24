import { DataType } from "./DataType";
import { IRange } from "./IRange";

export interface IFilter {
    filterKey: string;
    filterName: string;
    type: DataType;
    filterValues: string[];
    range: IRange;
}
