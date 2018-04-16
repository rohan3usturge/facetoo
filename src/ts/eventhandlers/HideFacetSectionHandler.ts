import { FacetConfigStore } from "../config/FacetConfigStore";
import { IEventHandler } from "./IEventHandler";

export class HideFacetSectionHandler implements IEventHandler {
    constructor(private element: JQuery, private configStore: FacetConfigStore) {}

    public RegisterDomHandler = (): void => {
        this.element.on("click", ".hide-facet", this.hideFacet);
        this.element.on("click", ".show-facet", this.showFacet);
        this.element.on("keyup", ".hide-facet", (event) => {
            const code = event.keyCode || event.which;
            if ( code !== 13 && code !== 32 ) {
                return;
            }
            this.hideFacet(event);
        });
        this.element.on("keyup", ".show-facet", (event) => {
            const code = event.keyCode || event.which;
            if ( code !== 13 && code !== 32 ) {
                return;
            }
            this.showFacet(event);
        });
    }
    public onResize(): void {
        // Ignore
    }
    public onDocumentClick(event: any): void {
        // Ignore
    }
    public hideFacet = (event): void => {
        $(".facet-body").hide();
        $(".facet-collapsed-body").fadeIn(this.configStore.Options.animationTime);
        this.configStore.Options.collapsed = true;
        event.stopPropagation();
    }
    public showFacet = (event): void => {
        $(".facet-collapsed-body").hide();
        $(".facet-body").fadeIn(this.configStore.Options.animationTime);
        this.configStore.Options.collapsed = false;
        event.stopPropagation();
    }
}
