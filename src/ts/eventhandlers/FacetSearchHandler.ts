import { FacetConfigStore } from "./../config/FacetConfigStore";
import { ExpandCollapseFacetsHandler } from "./ExpandCollapseFacetsHandler";
import { ExpandCollapseManager } from "./ExpandCollapseManager";
import { IEventHandler } from "./IEventHandler";
import { ShowHide } from "./ShowHide";

export class FacetSearchHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler(): void {
        this.element.on("keyup", ".filter-search-input", (event): void => {
            const element = jQuery(event.target);
            const val = element.val().toString().toLowerCase();
            this.element.find(".facet-list .facet-item").each((i: number, e) => {
                const facetItem = jQuery(e);
                let showFullFacets = false;
                let inputValueBlank = false;
                if ( val === undefined || val === null || val.trim() === "") {
                    inputValueBlank = true;
                }
                if ( !inputValueBlank && facetItem.attr("data-attr-name").toLowerCase().indexOf(val) !== -1 ) {
                    showFullFacets = true;
                }
                let hasMatchingChild: boolean = false;
                if ( !showFullFacets ) {
                    facetItem.find("label").each((j: number, label) => {
                        const labelElem = jQuery(label);
                        const labelValue = labelElem.attr("data-attr-value");
                        if (!inputValueBlank && labelValue.toLowerCase().indexOf(val) === -1 ) {
                            labelElem.hide();
                        } else {
                            hasMatchingChild = true;
                            labelElem.show();
                        }
                    });
                }
                const headerElment = facetItem.find(".facet-item-header");
                if ( !showFullFacets && !hasMatchingChild ) {
                    facetItem.fadeOut(this.configStore.Options.animationTime);
                    ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide.Hide);
                } else {
                    facetItem.fadeIn(this.configStore.Options.animationTime);
                    if ( inputValueBlank ) {
                        ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide.Hide);
                    } else {
                        ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide.Show);
                    }
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
