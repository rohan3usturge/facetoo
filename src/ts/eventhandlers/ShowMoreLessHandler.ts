import {FacetConfigStore} from "./../config/FacetConfigStore";
import {IEventHandler} from "./IEventHandler";

export class ShowMoreLessHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler(): void {
        this
            .element
            .on("click", ".show-more-link", (event): void => {
                this.showMoreLessFilters(event, true);
            });
        this
            .element
            .on("click", ".show-less-link", (event): void => {
                this.showMoreLessFilters(event, false);
            });
        this
            .element
            .on("keyup", ".show-more-link", (event) => {
                const code = event.keyCode || event.which;
                if (code !== 13 && code !== 32) {
                    return;
                }
                this.showMoreLessFilters(event, true);
            });
        this
            .element
            .on("keyup", ".show-less-link", (event) => {
                const code = event.keyCode || event.which;
                if (code !== 13 && code !== 32) {
                    return;
                }
                this.showMoreLessFilters(event, false);
            });
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
    private showMoreLessFilters(event: any, showMore: boolean) {
        const element = jQuery(event.target);
        if (showMore) {
            element
                .parents(".facet-item-description")
                .find(".extra-filter")
                .fadeIn(this.configStore.Options.animationTime, () => {
                    element.parent().hide();
                    element.parent().next().show().find("a").focus();
                });
        } else {
            element
                .parents(".facet-item-description")
                .find(".extra-filter")
                .fadeOut(this.configStore.Options.animationTime, () => {
                    element.parent().prev().show().find("a").focus();
                    element.parent().hide();
                });
        }
        event.stopPropagation();
    }
}
