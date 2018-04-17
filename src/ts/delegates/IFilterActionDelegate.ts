import { FilterActionType } from "../models/FilterActionType";

export type IFilterActionDelegate = (key: string, value: string,
                                     action: FilterActionType,
                                     type: string, isRange: boolean) => void;
