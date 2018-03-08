import { FacetConfigStore } from "../config/FacetConfigStore";
import { FilterActionType } from "../models/FilterActionType";
import { IEventHandler } from "./IEventHandler";

export class FacetActionHandler implements IEventHandler {

    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler(): void {
        this.element.on("change", ".facet-body .facet-item-description .facet-value-checkbox", (event) => {
            const element = jQuery(event.target);
            const valStr = element.val().toString();
            const value = valStr.split(":");
            const checked = element.is(":checked");
            const action = checked ? FilterActionType.Add : FilterActionType.Minus;
            this.configStore.Options.onFilterChange(value[0], value[1], action, value[2]);
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
