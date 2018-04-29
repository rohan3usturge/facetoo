import { ShowHide } from "./ShowHide";

export class ExpandCollapseManager {

    public static ControlVisibilityOfFilter = (headerElement: JQuery, showHide: ShowHide, name: string) => {
        const iconElement = headerElement.children("span").children(".expansion-icon") ;
        const currentlyVisible = iconElement.hasClass("gui-icon-chevron-up");
        if (ShowHide.Toggle !== showHide && ((currentlyVisible && showHide === ShowHide.Show) ||
            (!currentlyVisible && showHide === ShowHide.Hide))) {
            return;
        }
        if (!currentlyVisible) {
            headerElement.parents(".facet-item").find(".facet-item-description").slideDown(200);
            iconElement.removeClass("gui-icon-chevron-down");
            iconElement.addClass("gui-icon-chevron-up");
            headerElement.find(".expansion-icon")
            .attr("aria-expanded", "true")
            .attr("aria-label", "Press enter or space to collapse filter values for " + name);
        } else {
            headerElement.parents(".facet-item").find(".facet-item-description").slideUp(200);
            iconElement.removeClass("gui-icon-chevron-up");
            iconElement.addClass("gui-icon-chevron-down");
            headerElement.find(".expansion-icon")
            .attr("aria-expanded", "false")
            .attr("aria-label", "Press enter or space to expand filter values for " + name);
        }
    }

}
