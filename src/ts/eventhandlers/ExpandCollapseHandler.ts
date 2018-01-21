import { ConfigStore } from "../config/ConfigStore";
import { IEventHandler } from "./IEventHandler";

enum ShowHide {
    Show,
    Hide,
    Toggle,
}

export class ExpandCollapseHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: ConfigStore) {}

    public RegisterDomHandler(): void {
        this.element.on("click", ".expand-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Show);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".collapse-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".facet-item-header", (event) => {
            const target = jQuery(event.target);
            const headerElement = target.is(".facet-item-header") ? target : target.parent(".facet-item-header");
            this.element.find(".facet-header .button").removeAttr("disabled");
            this.ControlVisibilityOfFilter(headerElement, ShowHide.Toggle);
            event.stopPropagation();
        });
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }
    private ControlVisibilityOfFilter = (element: JQuery, showHide: ShowHide) => {
        const iconElement = element.children("i");
        const currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
        if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            element.parents(".facet-item").find(".facet-item-description").slideDown();
            iconElement.removeClass("gui-icon-chevron-down");
            iconElement.addClass("gui-icon-chevron-up");
        } else {
            element.parents(".facet-item").find(".facet-item-description").slideUp();
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
        }
    }
}
