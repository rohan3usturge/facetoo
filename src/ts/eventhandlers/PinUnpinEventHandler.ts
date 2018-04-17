import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetTemplateService } from "./../services/IFacetTemplateService";
import { ExpandCollapseFacetsHandler } from "./ExpandCollapseFacetsHandler";
import { ExpandCollapseManager } from "./ExpandCollapseManager";
import { IEventHandler } from "./IEventHandler";
import { ShowHide } from "./ShowHide";

export class PinUnpinEventHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore,
                private templateService: IFacetTemplateService) {}

    public RegisterDomHandler(): void {
        this.element.on("click", ".pin-icon", (event): void => {
            this.handlePinUnpin(event, true);
        });
        this.element.on("click", ".unpin-icon", (event): void => {
            this.handlePinUnpin(event, false);
        });
        this.element.on("keyup", ".pin-icon", (event) => {
            const code = event.keyCode || event.which;
            if ( code !== 13 && code !== 32 ) {
                return;
            }
            this.handlePinUnpin(event, true);
        });
        this.element.on("keyup", ".unpin-icon", (event) => {
            const code = event.keyCode || event.which;
            if ( code !== 13 && code !== 32 ) {
                return;
            }
            this.handlePinUnpin(event, false);
        });
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
    private handlePinUnpin(event: any, pin: boolean) {
        const element = jQuery(event.target);
        const id = element.attr("data-attr-id");
        const data = this.configStore.Options.facetConfig;
        for (const facet of data) {
            if ( facet.id === id ) {
                facet.pinned = pin;
                break;
            }
        }
        this.element.html(this.templateService.bind(this.templateService.getData()));
        this.configStore.Options.onPinUnpin(id, pin);
        event.stopPropagation();
    }
}
