import { FacetConstants } from "./../config/FacetConstants";
import { IEventHandler } from "./index";

export class FacetKeyBoardNavigationHandler implements IEventHandler {

    constructor(private element: JQuery) {}

    public RegisterDomHandler(): void {
        this.element.on("keydown", ".arrowkeys-aware", this.handleArrowKeys);
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }
    public deRegister = (): void => {
        this.element.off("keydown", ".arrowkeys-aware", this.handleArrowKeys);
    }
    private handleArrowKeys = (event) => {
        const code = event.which;
        if ( code !== FacetConstants.UpKeyCode && code !== FacetConstants.DownKeyCode ) {
            return;
        }
        let element = jQuery(event.target);
        if ( !element.is(".arrowkeys-aware")) {
            element = element.parent();
        }
        let focusable;
        const div = element.parent();
        if ( code === FacetConstants.UpKeyCode ) {
            focusable = div.prev().find(".arrowkeys-aware");
        }
        if ( code === FacetConstants.DownKeyCode ) {
            focusable = div.next().find(".arrowkeys-aware");
        }
        if ( focusable && focusable.length ) {
            event.view.event.preventDefault();
            event.stopPropagation();
            focusable.focus();
        } else {
            const showMore = div.next().find("show-more-link") || div.next().find("show-less-link");
            if ( showMore && showMore.length ) {
                showMore.focus();
            }
        }
    }
}
