import { ConfigStore } from "../config/ConfigStore";
import { FilterActionType } from "../models/FilterActionType";
import { IEventHandler } from "./IEventHandler";

export class FilterActionHandler implements IEventHandler {

    constructor(private element: JQuery, private configStore: ConfigStore) {}

    public RegisterDomHandler(): void {
        this.element.on("change", ".facet-body .facet-item-description .facet-value-checkbox", (event) => {
            const element = jQuery(event.target);
            const valStr = element.val().toString();
            const value = valStr.split(":");
            const checked = element.is(":checked");
            const action = checked ? FilterActionType.Add : FilterActionType.Minus;
            this.configStore.Options.onFilterChange(value[0], value[1], action);
            // if (!checked) {
            //     this.element.find(".facet-subheader .facet-labels .label").each((index, label) => {
            //         const val = jQuery(label).attr("data-filter-entry");
            //         if (val === valStr) {
            //             jQuery(label).remove();
            //         }
            //     });
            // }
        });
        this.element.on("click", ".facet-subheader .facet-labels .label", (event) => {
            let element = jQuery(event.target);
            if (!element.is(".label")) {
                element = element.parents(".label");
            }
            const valStr = element.attr("data-filter-entry").toString();
            const value = valStr.split(":");
            this.configStore.Options.onFilterChange(value[0], value[1], FilterActionType.Minus);
            // element.remove();
            // this.element.find(".facet-body .facet-item-description .facet-value-checkbox")
            // .each((index, checkbox) => {
            //     if (!jQuery(checkbox).is(":checked")) {
            //         return;
            //     }
            //     const val = jQuery(checkbox).val().toString();
            //     if (val === valStr) {
            //         jQuery(checkbox).prop("checked", false);
            //     }
            // });
        });
        this.element.on("click", ".facet-subheader .remove-all", (event) => {
            this.element.find(".facet-subheader").hide();
            this.configStore.Options.onAllFilterRemove();
        });
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }

}
