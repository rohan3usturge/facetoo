import { IEventHandler } from "./IEventHandler";

export class HideFacetSectionHandler implements IEventHandler {
    constructor(private element: JQuery) {}

    public RegisterDomHandler = (): void => {
        this.element.on("click", ".hide-facet", (event): void => {
            $(".facet-body").hide();
            $(".facet-collapsed-body").show();
            event.stopPropagation();
        });
        this.element.on("click", ".show-facet", (event): void => {
            $(".facet-collapsed-body").hide();
            $(".facet-body").show();
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
