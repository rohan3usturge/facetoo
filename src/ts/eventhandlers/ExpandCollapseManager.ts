import { ShowHide } from "./ShowHide";

export class ExpandCollapseManager {

    public static ControlVisibilityOfFilter = (target: JQuery, showHide: ShowHide, name: string) => {
        const iconElement = target.find(".expansion-icon") ;
        const currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
        if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            target.find(".facet-item-description").slideDown(200);
            iconElement.removeClass("gui-icon-chevron-down");
            iconElement.addClass("gui-icon-chevron-up");
            target
            .attr("aria-expanded", "true")
            .attr("aria-label", "Press enter or space to collapse filter values for " + name);
        } else {
            target.find(".facet-item-description").slideUp(200);
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
            target
            .attr("aria-expanded", "false")
            .attr("aria-label", "Press enter or space to expand filter values for " + name);
        }
    }

}
