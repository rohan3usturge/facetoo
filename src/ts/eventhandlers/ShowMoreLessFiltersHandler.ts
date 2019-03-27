import {IEventHandler} from "./IEventHandler";

export class ShowMoreLessFiltersHandler implements IEventHandler {
    private showLessLinkClass: string  = ".show-less-filters-link";
    private showMoreLinkClass: string  = ".show-more-filters-link";
    private facetContainerClass: string = ".facet-applied-filters";
    private maxHeightForContainer: number = 37;
    constructor(private element: JQuery) {}

    public RegisterDomHandler(): void {
        this
            .element
            .on("click", this.showMoreLinkClass, (event): void => {
                this.showMoreLessFilters(event, true);
            });
        this
            .element
            .on("click", this.showLessLinkClass, (event): void => {
                this.showMoreLessFilters(event, false);
            });
        this
            .element
            .on("keyup", this.showMoreLinkClass, (event) => {
                const code = event.keyCode || event.which;
                if (code !== 13 && code !== 32) {
                    return;
                }
                this.showMoreLessFilters(event, true);
            });
        this
            .element
            .on("keyup", this.showLessLinkClass, (event) => {
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
    public onBind(): void {
        const facetContainer = this.element.find(this.facetContainerClass);
        const showLessLink = this.element.find(this.showLessLinkClass);
        const showMoreLink = this.element.find(this.showMoreLinkClass);
        const currentHeight = facetContainer.height();
        if ( currentHeight > this.maxHeightForContainer) {
            facetContainer.css("max-height", `${this.maxHeightForContainer}px`);
            showLessLink.addClass("gui-hidden");
            showMoreLink.removeClass("gui-hidden");
        } else {
            facetContainer.css("max-height", "");
            showLessLink.addClass("gui-hidden");
            showMoreLink.addClass("gui-hidden");
        }
    }
    private showMoreLessFilters(event: any, showMore: boolean) {
        this.toggleFacetSection(showMore);
        event.stopPropagation();
    }

    private toggleFacetSection = (show: boolean) => {
        const showLessLink = this.element.find(this.showLessLinkClass);
        const showMoreLink = this.element.find(this.showMoreLinkClass);
        const facetContainer = this.element.find(this.facetContainerClass);
        if (show) {
            facetContainer.css("max-height", "");
            showLessLink.removeClass("gui-hidden");
            showMoreLink.addClass("gui-hidden");
        } else {
            facetContainer.css("max-height", `${this.maxHeightForContainer}px`);
            showLessLink.addClass("gui-hidden");
            showMoreLink.removeClass("gui-hidden");
        }
    }
}
