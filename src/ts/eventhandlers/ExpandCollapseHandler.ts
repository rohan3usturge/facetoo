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
            // jQuery(event.target).parents("button")
            // .attr("disabled", "true")
            // .siblings("button")
            // .removeAttr("disabled");
            event.stopPropagation();
        });
        this.element.on("click", ".facet-body .collapse-all", (event) => {
            this.element.find(".facet-item-header").each((index, element) => {
                this.ControlVisibilityOfFilter(jQuery(element), ShowHide.Hide);
            });
            // jQuery(event.target)
            // .parents("button")
            // .attr("disabled", "true")
            // .siblings("button")
            // .removeAttr("disabled");
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
        const currentlyVisible = iconElement.hasClass("down");
        if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            element.parents(".facet-item").find(".facet-item-description").show();
            iconElement.removeClass("right");
            iconElement.addClass("down");
        } else {
            element.parents(".facet-item").find(".facet-item-description").hide();
            iconElement.removeClass("down");
            iconElement.addClass("right");
        }
    }
}
