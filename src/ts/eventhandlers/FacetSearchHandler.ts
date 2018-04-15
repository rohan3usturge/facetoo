import {FacetConfigStore} from "./../config/FacetConfigStore";
import {ExpandCollapseFacetsHandler} from "./ExpandCollapseFacetsHandler";
import {ExpandCollapseManager} from "./ExpandCollapseManager";
import {IEventHandler} from "./IEventHandler";
import {ShowHide} from "./ShowHide";

export class FacetSearchHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler(): void {
        this
            .element
            .on("keyup", ".filter-search-input", this.handleSearch);

    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
    private handleSearch = (event): void => {
        const element = jQuery(event.target);
        const val = element
            .val()
            .toString()
            .toLowerCase();
        this
            .element
            .find(".facet-list .facet-item")
            .each((i: number, e) => {
                const facetItem = jQuery(e);
                let facetNameMatch = false;
                let inputValueBlank = false;
                // Check if value is empty
                if (val === undefined || val === null || val.trim() === "") {
                    inputValueBlank = true;
                }
                // Compare value with facet name
                if (!inputValueBlank && facetItem.attr("data-attr-name").toLowerCase().indexOf(val) !== -1) {
                    facetNameMatch = true;
                }
                // Compare values against child values
                let facetChildMatch: boolean = false;
                facetItem
                    .find("label")
                    .each((j: number, label) => {
                        const labelElem = jQuery(label);
                        if (facetNameMatch || inputValueBlank) {
                            labelElem.show();
                            return;
                        }
                        const labelValue = labelElem.attr("data-attr-value");
                        if (labelValue.toLowerCase().indexOf(val) === -1) {
                            labelElem.hide();
                        } else {
                            facetChildMatch = true;
                            labelElem.show();
                        }
                    });
                // Show hide Facet Item itself
                const headerElment = facetItem.find(".facet-item-header");
                if (facetNameMatch || facetChildMatch || inputValueBlank) {
                    facetItem.fadeIn(this.configStore.Options.animationTime);
                } else {
                    facetItem.fadeOut(this.configStore.Options.animationTime);
                }
                // Expand Collapse Facet
                if (facetNameMatch || facetChildMatch) {
                    ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide.Show);
                } else {
                    ExpandCollapseManager.ControlVisibilityOfFilter(headerElment, ShowHide.Hide);
                }
            });
        event.stopPropagation();
    }
}
