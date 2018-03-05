import { FacetConfigStore } from "../config/FacetConfigStore";
import { IEventHandler } from "./IEventHandler";

export class HideFacetSectionHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler = (): void => {
        this.element.on("click", ".hide-facet", (event): void => {
            $(".facet-body").hide();
            $(".facet-collapsed-body").fadeIn(200);
            this.configStore.Options.collapsed = true;
            event.stopPropagation();
        });
        this.element.on("click", ".show-facet", (event): void => {
            $(".facet-collapsed-body").hide();
            $(".facet-body").fadeIn(200);
            this.configStore.Options.collapsed = false;
            event.stopPropagation();
        });
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
}
