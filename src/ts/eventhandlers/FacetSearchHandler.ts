import { IEventHandler } from "./IEventHandler";

export class FacetSearchHandler implements IEventHandler {
    constructor(private element: JQuery) {}

    public RegisterDomHandler(): void {
        this.element.on("keyup", ".filter-search-input", (event): void => {
            const element = jQuery(event.target);
            const val = element.val().toString().toLowerCase();
            this.element.find(".facet-list .facet-item").each((i: number, e) => {
                if (jQuery(e).attr("data-attr-name").toLowerCase().indexOf(val) === -1 ) {
                    jQuery(e).fadeOut(300);
                } else {
                    jQuery(e).fadeIn(300);
                }
            });
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
