import { FacetConfigStore } from "./../config/FacetConfigStore";
import { FacetConstants } from "./../config/FacetConstants";
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
        this.element.on("click", "[role=treeitem]", this.handleVisibilityOfOne);
        this.element.on("keydown", "[role=treeitem]", this.handleKeyDown);
        this.element.on("focusin", "[role=treeitem]", this.onFocusInOfTreeItem);
        this.element.on("focusout", "[role=treeitem]", this.onFocusOutOfTreeItem);
    }
    public onResize(): void {
        // throw new Error("Method not implemented.");
    }
    public onDocumentClick(event: any): void {
        // throw new Error("Method not implemented.");
    }
    private onFocusInOfTreeItem = (event) => {
        const oT = jQuery(event.target);
        const target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
        const labelId = jQuery("#" + target.attr("aria-labelledBy"));
        if ( labelId && labelId.length ) {
            labelId.addClass("focus");
        } else {
            target.addClass("focus");
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    private onFocusOutOfTreeItem = (event) => {
        const oT = jQuery(event.target);
        const target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
        const labelId = jQuery("#" + target.attr("aria-labelledBy"));
        if ( labelId && labelId.length ) {
            labelId.removeClass("focus");
        } else {
            target.removeClass("focus");
        }
        event.stopPropagation();
    }
    private handleKeyDown = (event) => {
        // tslint:disable-next-line:no-console
        console.log("Handling Key Down");
        const code = event.keyCode || event.which;
        if ( [FacetConstants.EnterKeyCode, FacetConstants.SpaceKeyCode,
                FacetConstants.UpKeyCode, FacetConstants.DownKeyCode ].indexOf(code) <= -1) {
            return;
        }
        if ([FacetConstants.EnterKeyCode, FacetConstants.SpaceKeyCode].indexOf(code) > -1) {
            this.handleVisibilityOfOne(event);
            return;
        }
        if ([FacetConstants.UpKeyCode, FacetConstants.DownKeyCode].indexOf(code) > -1) {
            this.handleUpAndDownOfTreeItem(event);
            return;
        }
    }
    private handleUpAndDownOfTreeItem = (event) => {
        const code = event.keyCode || event.which;
        if ([FacetConstants.UpKeyCode, FacetConstants.DownKeyCode].indexOf(code) <= -1) {
            return;
        }
        // tslint:disable-next-line:no-console
        console.log("Handling Up and Down");
        const oT = jQuery(event.target);
        const target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
        event.preventDefault();
        if ( FacetConstants.UpKeyCode === code ) {
            // First Level
            const prevSibling = target.prevAll(":visible").first();
            if ( prevSibling.length ) {
                prevSibling.focus();
                return;
            }
            const prevDeepSibling = target.parent().prevAll(":visible").first().find("[role=treeitem]");
            if ( prevDeepSibling.length ) {
                prevDeepSibling.focus();
                return;
            }
            target.parents("[role=treeitem]").each((index: number, parentGroup: any) => {
                const group = jQuery(parentGroup);
                const parentChild = group.prevAll(":visible").first();
                if ( parentChild.length ) {
                    parentChild.focus();
                    return false;
                }
            });
        }
        if ( FacetConstants.DownKeyCode === code ) {
            const firstChild = target.find("[role=treeitem]:visible").first();
            if ( firstChild.length ) {
                firstChild.focus();
                return;
            }
            // First Level
            const nextSibling = target.nextAll(":visible").first();
            if ( nextSibling.length ) {
                nextSibling.focus();
                return;
            }
            // Second Level
            const nextDeepSibling = target.parent().nextAll(":visible").first().find("[role=treeitem]");
            if ( nextDeepSibling.length ) {
                nextDeepSibling.focus();
                return;
            }
            target.parents("[role=treeitem]").each((index: number, parentGroup: any) => {
                const group = jQuery(parentGroup);
                const parentChild = group.nextAll(":visible").first();
                if ( parentChild.length ) {
                    parentChild.focus();
                    return false;
                }
            });
        }
    }
    private handleVisibilityOfAll = (event, hideShow: ShowHide) => {
        const code = event.keyCode || event.which;
        if ( event.type !== "click" && (event.type === "keyup" && code !== FacetConstants.EnterKeyCode
             && code !== FacetConstants.SpaceKeyCode) ) {
            return;
        }
        const value = hideShow === ShowHide.Show ? true : false;
        this.element.find(".facet-item-header").each((index, element) => {
            const parent = jQuery(element).parents(".facet-item");
            const name = parent.attr("data-attr-name");
            if ( value ) {
                parent.addClass("collapsed");
            } else {
                parent.removeClass("collapsed");
            }
            ExpandCollapseManager.ControlVisibilityOfFilter(jQuery(element), hideShow, name);
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
        const oT = jQuery(event.target);
        const target = oT.is("[role=treeitem]") ? oT : oT.parents("[role=treeitem]").first();
        const isCollapsibleNode = target.hasClass("collapsible") && oT.parents(".facet-item-header").length;
        if ( !isCollapsibleNode ) {
            return;
        }
        const name = target.attr("data-attr-name");
        const id = target.attr("data-attr-id");
        const isCollapsed = target.hasClass("collapsed");
        if ( !isCollapsed ) {
            target.addClass("collapsed");
        } else {
            target.removeClass("collapsed");
        }
        const data = this.configStore.Options.facetConfig;
        const publish: Array<{key: string, collapsed: boolean}> = [];
        for (const facet of data) {
            if (facet.id === id ) {
                facet.collapsed = !isCollapsed;
                publish.push({key: facet.id, collapsed: facet.collapsed});
                break;
            }
        }
        this.configStore.Options.onCollapseToggle(publish);
        ExpandCollapseManager.ControlVisibilityOfFilter(target, ShowHide.Toggle, name);
        event.stopPropagation();
    }
}
