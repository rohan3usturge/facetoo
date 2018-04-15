import {FacetConfigStore} from "./../config/FacetConfigStore";
import {IFacetTemplateService} from "./../services/IFacetTemplateService";
import {ExpandCollapseFacetsHandler} from "./ExpandCollapseFacetsHandler";
import {ExpandCollapseManager} from "./ExpandCollapseManager";
import {IEventHandler} from "./IEventHandler";
import {ShowHide} from "./ShowHide";

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
                .parent()
                .find(".extra-filter")
                .fadeIn(this.configStore.Options.animationTime, () => {
                    element.hide();
                    element
                        .siblings("a")
                        .show();
                });
        } else {
            element
                .parent()
                .find(".extra-filter")
                .fadeOut(this.configStore.Options.animationTime, () => {
                    element
                        .siblings("a")
                        .show();
                    element.hide();
                });
        }
        event.stopPropagation();
    }
}
