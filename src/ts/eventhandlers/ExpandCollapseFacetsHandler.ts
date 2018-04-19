import { FacetConfigStore } from "./../config/FacetConfigStore";
import { IFacetTemplateService } from "./../services/IFacetTemplateService";
import { ExpandCollapseManager } from "./ExpandCollapseManager";
import { IEventHandler } from "./IEventHandler";
import { ShowHide } from "./ShowHide";

export class ExpandCollapseFacetsHandler implements IEventHandler {
    constructor(private element: JQuery,
                private configStore: FacetConfigStore,
                private templateService: IFacetTemplateService) {}

    public RegisterDomHandler(): void {
        this.element.on("click", ".expand-all", (event) => {
            this.handleVisibilityOfAll(event, ShowHide.Show);
        });
        this.element.on("keyup", ".expand-all", (event) => {
            this.handleVisibilityOfAll(event, ShowHide.Show);
        });
        this.element.on("click", ".collapse-all", (event) => {
            this.handleVisibilityOfAll(event, ShowHide.Hide);
        });
        this.element.on("keyup", ".collapse-all", (event) => {
            this.handleVisibilityOfAll(event, ShowHide.Hide);
        });
        this.element.on("click", ".facet-item-header .expansion-icon", this.handleVisibilityOfOne);
        this.element.on("keyup", ".facet-item-header .expansion-icon", this.handleVisibilityOfOne);
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }
    private handleVisibilityOfAll = (event, hideShow: ShowHide) => {
        const code = event.keyCode || event.which;
        if ( event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32) ) {
            return;
        }
        const value = hideShow === ShowHide.Show ? true : false;
        this.element.find(".facet-item-header").each((index, element) => {
            if ( value ) {
                jQuery(element).parents(".facet-item").addClass("collapsed");
            } else {
                jQuery(element).parents(".facet-item").removeClass("collapsed");
            }
            ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), hideShow);
        });
        const data = this.configStore.Options.facetConfig;
        const publish: Array<{key: string, collapsed: boolean}> = [];
        for (const facet of data) {
            facet.collapsed = value;
            publish.push({key: facet.id, collapsed: facet.collapsed});
        }
        this.configStore.Options.onCollapseToggle(publish);
        event.stopPropagation();
    }
    private handleVisibilityOfOne = (event) => {
        const code = event.keyCode || event.which;
        if ( event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32) ) {
            return;
        }
        const target = jQuery(event.target);
        const headerElement = target.parents(".facet-item-header");
        const parent = headerElement.parents(".facet-item");
        const bool = target.hasClass("gui-icon-chevron-up");
        if ( !bool ) {
            parent.addClass("collapsed");
        } else {
            parent.removeClass("collapsed");
        }
        const id = parent.attr("data-attr-id");
        const data = this.configStore.Options.facetConfig;
        const publish: Array<{key: string, collapsed: boolean}> = [];
        for (const facet of data) {
            if (facet.id === id ) {
                facet.collapsed = !bool;
                publish.push({key: facet.id, collapsed: facet.collapsed});
                break;
            }
        }
        this.configStore.Options.onCollapseToggle(publish);
        ExpandCollapseManager.ControlVisibilityOfFilter(headerElement, ShowHide.Toggle);
        event.stopPropagation();
    }
}
