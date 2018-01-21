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
        this.element.on("click", ".facet-body .expand-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Show);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".facet-body .collapse-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            event.stopPropagation();
        });
        this.element.on("click", ".facet-body .facet-item .facet-item-header", (event) => {
            const headerElement = jQuery(event.target).parents(".facet-item-header");
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
        const currentlyVisible = iconElement.hasClass("icon-accordion-expand");
        if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            element.parents(".facet-item").find(".facet-item-description").slideDown();
            iconElement.removeClass("icon-accordion-expand");
            iconElement.addClass("icon-accordion-collapse");
        } else {
            element.parents(".facet-item").find(".facet-item-description").slideUp();
            iconElement.removeClass("icon-accordion-collapse");
            iconElement.addClass("icon-accordion-expand");
        }
    }
}
