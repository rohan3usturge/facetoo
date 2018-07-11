import { FacetConfigStore } from "../config/FacetConfigStore";
import { Facet } from "../main/Facet";
import { FilterActionType } from "./../models/FilterActionType";
import { DomUtils } from "./DomUtils";
import { FacetTreeItem } from "./FacetTreeItem";
import { KeyCodes } from "./KeyCodes";

export class FacetTree {
    // Facet Object
    private facet: Facet;
    // Dom Nodes
    private parentElement: HTMLElement;
    private treeDomNode: HTMLElement;
    private searchBoxNode: HTMLElement;
    private expandAllNode: HTMLElement;
    private collapseAllNode: HTMLElement;

    // Data Structures for easy access
    private treeitems: FacetTreeItem[];
    private firstChars: string[];
    private firstTreeitem: FacetTreeItem;
    private lastTreeitem: FacetTreeItem;

    // Config Stores
    private configStore: FacetConfigStore;

    // Local
    private lastInputValue: string = "";

    constructor(node: HTMLElement, facet: Facet, configStore: FacetConfigStore) {
        this.configStore = configStore;
        this.parentElement = node;
        this.facet = facet;
        this.treeDomNode = this.parentElement.querySelectorAll("[role=tree]")[0] as HTMLElement;
        this.collapseAllNode = this.parentElement.querySelectorAll(".collapse-all")[0] as HTMLElement;
        this.expandAllNode = this.parentElement.querySelectorAll(".expand-all")[0] as HTMLElement;
        this.searchBoxNode = this.parentElement.querySelectorAll(".filter-search-input")[0] as HTMLElement;
        this.treeitems = [];
        this.firstChars = [];
        this.firstTreeitem = null;
        this.lastTreeitem = null;
    }

    public findTreeitems = (node, tree, group) => {
        let elem: any = node.firstElementChild;
        let ti = group;
        while (elem) {
            const role = elem.getAttribute("role");
            if (role && role.toLowerCase() === "treeitem") {
                ti = new FacetTreeItem(elem, tree, group);
                ti.init();
                tree
                    .treeitems
                    .push(ti);
                tree
                    .firstChars
                    .push(ti.label.substring(0, 1).toLowerCase());
            }
            if (elem.firstElementChild) {
                this.findTreeitems(elem, tree, ti);
            }
            elem = elem.nextElementSibling;
        }
    }

    public init = () => {
        // initialize pop up menus
        if (!this.treeDomNode.getAttribute("role")) {
            this
                .treeDomNode
                .setAttribute("role", "tree");
        }
        // Populate all Tree Items
        this.findTreeitems(this.treeDomNode, this, false);

        // Update Visible Tree Items
        this.updateVisibleTreeitems();

        // Set tab Index of first tree item.
        this.firstTreeitem.treeItemDomNode.tabIndex = 0;

        // Event Handlers
        this.collapseAllNode.addEventListener("click", this.collapseAllItems);
        this.expandAllNode.addEventListener("click", this.expandAllItems);
        this.searchBoxNode.addEventListener("keyup", this.handleSearchForFilters);
        document.addEventListener("keydown", this.setFocusToSearchBox);
    }
    public destroy = () => {
        DomUtils.off(this.parentElement);
        document.removeEventListener("keydown", this.setFocusToSearchBox);
    }
    public setFocusToSearchBox = (event: HTMLElementEventMap["keydown"]) => {
        if (event.altKey  &&  event.key === "f") {
            event.preventDefault();
            this.searchBoxNode.focus();
        }
    }
    public setFocusToItem = (treeitem: FacetTreeItem, dontSetfocus?: boolean) => {
        for (const ti of this.treeitems) {
            if (ti === treeitem) {
                ti.treeItemDomNode.tabIndex = 0;
                if (!dontSetfocus) {
                    ti
                    .treeItemDomNode
                    .focus();
                }
            } else {
                ti.treeItemDomNode.tabIndex = -1;
            }
        }
    }
    public setFocusToFirstVisible = (dontSetfocus?: boolean) => {
        for (const ti of this.treeitems) {
            if (ti.isVisible) {
                this.setFocusToItem(ti, dontSetfocus);
                break;
            }
        }
    }
    public setFocusToNextItem = (currentItem: FacetTreeItem) => {
        let nextItem;
        for (let i = (this.treeitems.length - 1); i >= 0; i--) {
            const ti = this.treeitems[i];
            if (ti === currentItem) {
                break;
            }
            if (ti.isVisible) {
                nextItem = ti;
            }
        }
        if (nextItem) {
            this.setFocusToItem(nextItem);
        }
    }

    public setFocusToPreviousItem = (currentItem: FacetTreeItem) => {
        let prevItem;
        for (const ti of this.treeitems) {
            if (ti === currentItem) {
                break;
            }
            if (ti.isVisible) {
                prevItem = ti;
            }
        }
        if (prevItem) {
            this.setFocusToItem(prevItem);
        }
    }

    public setFocusToParentItem = (currentItem: FacetTreeItem) => {
        if (currentItem.groupTreeitem) {
            this.setFocusToItem(currentItem.groupTreeitem);
        }
    }

    public setFocusToFirstItem = () => {
        this.setFocusToItem(this.firstTreeitem);
    }

    public setFocusToLastItem = () => {
        this.setFocusToItem(this.lastTreeitem);
    }

    public expandTreeitem = (currentItem: FacetTreeItem, notify?: boolean) => {
        // Check if Tree Item is expandable
        if (currentItem.isExpandable) {
            DomUtils.setAriaExpanded(currentItem.treeItemDomNode, "true");
            this.toggleExpansionIcon(currentItem, true);
            this.updateVisibleTreeitems(notify);
        }
        this.collapseAllNode.removeAttribute("disabled");
        this.expandAllNode.removeAttribute("disabled");
    }

    public expandAllSiblingItems = (currentItem: FacetTreeItem) => {
        for (const ti of this.treeitems) {
            if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
                this.expandTreeitem(ti);
            }
        }
        this.notifyCollapseAndExpansion();
    }
    public expandAllItems = () => {
        for (const ti of this.treeitems) {
            if (ti.isExpandable) {
                this.expandTreeitem(ti);
            }
        }
        this.collapseAllNode.removeAttribute("disabled");
        this.expandAllNode.setAttribute("disabled", "true");
        this.collapseAllNode.focus();
        this.notifyCollapseAndExpansion();
    }
    public collapseAllItems = () => {
        for (const ti of this.treeitems) {
            if (ti.isExpandable) {
                this.collapseTreeitem(ti);
            }
        }
        this.expandAllNode.removeAttribute("disabled");
        this.collapseAllNode.setAttribute("disabled", "true");
        this.expandAllNode.focus();
        this.notifyCollapseAndExpansion();
    }
    public collapseAllSiblingItems = (currentItem: FacetTreeItem) => {
        for (const ti of this.treeitems) {
            if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
                this.collapseTreeitem(ti);
            }
        }
        this.notifyCollapseAndExpansion();
    }
    public collapseTreeitem = (currentItem: FacetTreeItem, notify?: boolean) => {
        let groupTreeitem: FacetTreeItem;
        if (currentItem.isExpanded()) {
            groupTreeitem = currentItem;
        } else {
            groupTreeitem = currentItem.groupTreeitem;
        }

        if (groupTreeitem) {
            DomUtils.setAriaExpanded(groupTreeitem.treeItemDomNode, "false");
            this.toggleExpansionIcon(groupTreeitem, false);
            this.updateVisibleTreeitems(notify);
            this.setFocusToItem(groupTreeitem);
        }
        this.collapseAllNode.removeAttribute("disabled");
        this.expandAllNode.removeAttribute("disabled");
    }
    public toggleExpansionIcon = (groupTreeitem: FacetTreeItem, currentExpanded: boolean) => {
        const iconNodeList = groupTreeitem.treeItemDomNode.querySelectorAll(".expansion-icon");
        let iconNode: HTMLElement;
        if ( iconNodeList && iconNodeList.length ) {
            iconNode = iconNodeList[0] as HTMLElement;
        }
        if (!currentExpanded) {
            iconNode.classList.remove("gui-icon-chevron-up");
            iconNode.classList.add("gui-icon-chevron-down");
        } else {
            iconNode.classList.remove("gui-icon-chevron-down");
            iconNode.classList.add("gui-icon-chevron-up");
        }
    }
    public updateVisibleTreeitems = (notify?: boolean) => {
        this.firstTreeitem = this.treeitems[0];
        for (const ti of this.treeitems) {
            let parent = ti.treeItemDomNode.parentElement;
            ti.isVisible = true;
            if ( ti.treeItemDomNode.classList.contains("gui-hidden")
                || parent.classList.contains("gui-hidden")) {
                ti.isVisible = false;
            }
            while (parent && (parent !== this.treeDomNode)) {
                if (parent.getAttribute("aria-expanded") === "false") {
                    ti.isVisible = false;
                }
                parent = parent.parentElement;
            }
            if (ti.isVisible) {
                this.lastTreeitem = ti;
            }
        }
        if ( notify ) {
            this.notifyCollapseAndExpansion();
        }
    }

    public setFocusByFirstCharacter = (currentItem, char) => {
        let start;
        let index;
        char = char.toLowerCase();

        // Get start index for search based on position of currentItem
        start = this
            .treeitems
            .indexOf(currentItem) + 1;
        if (start === this.treeitems.length) {
            start = 0;
        }

        // Check remaining slots in the menu
        index = this.getIndexFirstChars(start, char);

        // If not found in remaining slots, check from beginning
        if (index === -1) {
            index = this.getIndexFirstChars(0, char);
        }

        // If match was found...
        if (index > -1) {
            this.setFocusToItem(this.treeitems[index]);
        }
    }

    public getIndexFirstChars = (startIndex: number, char: string) => {
        for (let i = startIndex; i < this.firstChars.length; i++) {
            if (this.treeitems[i].isVisible) {
                if (char === this.firstChars[i]) {
                    return i;
                }
            }
        }
        return -1;
    }
    public showMoreValues = (groupItem: FacetTreeItem) => {
        for (const ti of this.treeitems) {
            const parent = ti.treeItemDomNode.parentElement;
            if ( ti.groupTreeitem === groupItem) {
                parent.classList.remove("gui-hidden");
                ti.isVisible = true;
                if (ti.isShowLessLink) {
                    parent.classList.remove("gui-hidden");
                    ti.treeItemDomNode.focus();
                }
                if (ti.isShowMoreLink) {
                    parent.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
            }
        }
        this.updateVisibleTreeitems();
    }
    public showLessValues = (groupItem: FacetTreeItem) => {
        for (const ti of this.treeitems) {
            const parent = ti.treeItemDomNode.parentElement;
            if ( ti.groupTreeitem === groupItem) {
                if (parent.classList.contains("extra-filter")) {
                    parent.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
                if (ti.isShowLessLink) {
                    parent.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
                if (ti.isShowMoreLink) {
                    parent.classList.remove("gui-hidden");
                    ti.treeItemDomNode.focus();
                }
            }
        }
        this.updateVisibleTreeitems();
    }
    public handleLabelChange = (currentItem: FacetTreeItem, event: any) => {
        const node = currentItem.treeItemDomNode as  HTMLLabelElement;
        const forId = node.htmlFor;
        const input: HTMLInputElement = (document.getElementById(forId) || node.firstElementChild) as HTMLInputElement;
        const checked = input.checked;
        const action = checked ? FilterActionType.Add : FilterActionType.Minus;
        currentItem.treeItemDomNode.setAttribute("aria-selected", checked.toString());
        this.configStore.Options.onFilterChange(currentItem.id,
                                                currentItem.label,
                                                action,
                                                currentItem.dataType,
                                                currentItem.isRange);
        event.stopPropagation();
    }
    public notifyCollapseAndExpansion = () => {
        const data = this.configStore.Options.facetConfig;
        const publish: Array<{key: string, collapsed: boolean}> = [];
        for (const ti of this.treeitems) {
            if ( ti.isExpandable) {
                for (const facet of data) {
                    if ( facet.id === ti.id) {
                        facet.collapsed = !ti.isExpanded();
                        publish.push({key: facet.id, collapsed: facet.collapsed});
                        break;
                    }
                }
            }
        }
        this.configStore.Options.onCollapseToggle(publish);
    }
    public handlePinUnpin = (event: any, pin: boolean, id: string) => {
        const data = this.configStore.Options.facetConfig;
        for (const facet of data) {
            if ( facet.id === id ) {
                facet.pinned = pin;
                break;
            }
        }
        this.facet.reRender();
        this.configStore.Options.onPinUnpin(id, pin);
        event.stopPropagation();
    }
    public handleSearchForFilters = (event: HTMLElementEventMap["keyup"]) => {
        const input = event.target as HTMLInputElement;
        const parent = input.parentElement;
        const val = input.value.toLowerCase();
        if ( val === this.lastInputValue ) {
            return;
        }
        this.lastInputValue = val;
        let inputValueBlank = false;
        parent.classList.add("loading");
        if (val === undefined || val === null || val.trim() === "") {
            inputValueBlank = true;
        }
        setTimeout(() => {
            if ( !inputValueBlank ) {
                this.handleNotBlankInputSearch(val);
            } else {
                this.handleBlankInputSearch();
            }
            this.updateVisibleTreeitems();
            this.setFocusToFirstVisible(true);
            parent.classList.remove("loading");
        }, 1);
        // const matchedGroupItem: FacetTreeItem[] = [];
        // const notMatchedGroupItem: FacetTreeItem[] = [];
        // for (const ti of this.treeitems) {
        //     if (ti.isExpandable) {
        //         if (ti.label.toLowerCase().indexOf(val) > -1) {
        //             matchedGroupItem.push(ti);
        //         } else {
        //             notMatchedGroupItem.push(ti);
        //         }
        //     }
        //     if (ti.isShowLessLink || ti.isShowMoreLink ) {
        //         ti.isVisible = false;
        //         DomUtils.hide(ti.treeItemDomNode.parentElement);
        //     }
        // }
        // for (const ti of this.treeitems) {
        //     if (ti.isShowLessLink || ti.isShowMoreLink) {
        //         continue;
        //     }
        //     if ( matchedGroupItem.indexOf(ti) > -1 || matchedGroupItem.indexOf(ti.groupTreeitem) > -1 ) {
        //         ti.isVisible = true;
        //         DomUtils.show(ti.treeItemDomNode.parentElement);
        //     } else {
        //         if (!ti.isExpandable ) {
        //             if (ti.value.toLowerCase().indexOf(val) > -1 ) {
        //                 if (matchedGroupItem.indexOf(ti.groupTreeitem) <= -1 ) {
        //                     matchedGroupItem.push(ti.groupTreeitem);
        //                 }
        //                 const notMatchedIndex = notMatchedGroupItem.indexOf(ti.groupTreeitem);
        //                 if (notMatchedIndex > -1 ) {
        //                     notMatchedGroupItem.slice(notMatchedIndex, notMatchedIndex + 1);
        //                 }
        //                 ti.isVisible = true;
        //                 DomUtils.show(ti.treeItemDomNode.parentElement);
        //             } else {
        //                 ti.isVisible = false;
        //                 DomUtils.hide(ti.treeItemDomNode.parentElement);
        //             }
        //         }
        //     }
        // }
        // for (const mg of matchedGroupItem) {
        //     mg.isVisible = true;
        //     DomUtils.setAriaExpanded(mg.treeItemDomNode, "true");
        //     DomUtils.show(mg.treeItemDomNode);
        // }
        // for (const nmg of notMatchedGroupItem) {
        //     nmg.isVisible = false;
        //     DomUtils.setAriaExpanded(nmg.treeItemDomNode, "false");
        //     DomUtils.hide(nmg.treeItemDomNode);
        // }
    }
    private handleBlankInputSearch = () => {
        // Handle blank Search here
        for (const ti of this.treeitems) {
            if (ti.ignoreForSearch) {
                continue;
            }
            // Check if expandable
            if (ti.isExpandable) {
                ti.isVisible = true;
                DomUtils.show(ti.treeItemDomNode);
                if ( ti.treeItemDomNode.classList.contains("collapsed") ) {
                    DomUtils.setAriaExpanded(ti.treeItemDomNode, "true");
                } else {
                    DomUtils.setAriaExpanded(ti.treeItemDomNode, "false");
                }
            }
            if (! ti.isExpandable ) {
                if ( !ti.isShowMoreLink && !ti.isShowLessLink ) {
                    const parent = ti.treeItemDomNode.parentElement;
                    const isExtraFilter = parent.classList.contains("extra-filter");
                    if (isExtraFilter) {
                        ti.isVisible = false;
                        DomUtils.hide(ti.treeItemDomNode.parentElement);
                    } else {
                        ti.isVisible = true;
                        DomUtils.show(ti.treeItemDomNode.parentElement);
                    }
                    continue;
                }
                if ( ti.isShowMoreLink ) {
                    ti.isVisible = true;
                    DomUtils.show(ti.treeItemDomNode.parentElement);
                    continue;
                }
                if ( ti.isShowLessLink ) {
                    ti.isVisible = false;
                    DomUtils.hide(ti.treeItemDomNode.parentElement);
                    continue;
                }
            }
        }
    }
    private handleNotBlankInputSearch = (val: string) => {
        let groupItem: FacetTreeItem;
        let groupItemMatched: boolean;
        let childItemMatched: boolean;
        for (const ti of this.treeitems) {
            if (ti.ignoreForSearch) {
                continue;
            }
            if (ti.isShowLessLink || ti.isShowMoreLink ) {
                ti.isVisible = false;
                DomUtils.hide(ti.treeItemDomNode.parentElement);
                continue;
            }
            // Check if expandable
            if (ti.isExpandable) {
                // Reset the group level Values
                groupItem = ti;
                groupItemMatched = false;
                childItemMatched = false;
                ti.isVisible = false;
                DomUtils.setAriaExpanded(ti.treeItemDomNode, "false");
                DomUtils.hide(ti.treeItemDomNode);

                // Check if group is matching
                if (ti.label.toLowerCase().indexOf(val) > -1) {
                    groupItemMatched = true;
                }
            }
            // If group is matching expand the group
            if ( groupItemMatched || childItemMatched ) {
                groupItem.isVisible = true;
                DomUtils.setAriaExpanded(groupItem.treeItemDomNode, "true");
                DomUtils.show(groupItem.treeItemDomNode);
            }
            // For Child Links
            if ( !ti.isExpandable && ti.groupTreeitem === groupItem ) {
                // check if group matches set the visiblity to true except show more or less links
                if ( groupItemMatched ) {
                    ti.isVisible = true;
                    DomUtils.show(ti.treeItemDomNode.parentElement);
                } else {
                    // If group not matched check if child matches
                    if (ti.label.toLowerCase().indexOf(val) > -1 ) {
                        ti.isVisible = true;
                        DomUtils.show(ti.treeItemDomNode.parentElement);
                        childItemMatched = true;
                    } else {
                        ti.isVisible = false;
                        DomUtils.hide(ti.treeItemDomNode.parentElement);
                    }
                }
            }
        }
    }
}
