import { FacetConfigStore } from "./../config/FacetConfigStore";
import { ExpandCollapseManager } from "./ExpandCollapseManager";
import { IEventHandler } from "./IEventHandler";
import { ShowHide } from "./ShowHide";

export class ExpandCollapseFacetsHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler(): void {
        this.element.on("click", ".expand-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), ShowHide.Show);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".collapse-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".facet-item-header", (event) => {
            const target = jQuery(event.target);
            const headerElement = target.is(".facet-item-header") ? target : target.parent(".facet-item-header");
            this.element.find(".facet-header .button").removeAttr("disabled");
            ExpandCollapseManager.ControlVisibilityOfFilter(headerElement, ShowHide.Toggle);
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
