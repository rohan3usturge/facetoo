import { FilterConfigStore } from "../config/FilterConfigStore";
import { FilterActionType } from "../models/FilterActionType";
import { IEventHandler } from "./IEventHandler";

export class FilterActionHandler implements IEventHandler {

    constructor(private filterElement: JQuery, private configStore: FilterConfigStore) {}

    public RegisterDomHandler(): void {
        this.filterElement.on("click", ".facet-subheader .facet-labels .label", (event) => {
            let element = jQuery(event.target);
            if (!element.is(".label")) {
                element = element.parents(".label");
            }
            const valStr = element.attr("data-filter-entry").toString();
            const value = valStr.split(":");
            this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType.Minus);
            event.stopPropagation();
        });
        this.filterElement.on("click", ".facet-subheader .remove-all", (event) => {
            this.configStore.Options.onAllFilterRemove();
            event.stopPropagation();
        });
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }

}
