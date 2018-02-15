import { IFacetValue } from "../../../index";

const selectedFiltersCount = (facetValues: IFacetValue[]): string => {
    let index = 0;
    if (facetValues !== undefined
        && facetValues !== null
        && facetValues.length > 0) {
            for (const facetValue of facetValues) {
                if (facetValue.selected) {
                    index++;
                }
            }
    }
    return index === 0 ? "" : "<span class=\"gui-body-2\">(" + index + ")</span>";
};

export default selectedFiltersCount;
