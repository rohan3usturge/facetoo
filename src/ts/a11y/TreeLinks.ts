import { FacetConfigStore } from "../config/FacetConfigStore";
import { TreeitemLink } from "./TreeitemLink";

export class TreeLink {
    private domNode: Element;
    private treeitems: any[];
    private firstChars: any[];
    private firstTreeitem: any;
    private lastTreeitem: any;
    private configStore: FacetConfigStore;

    constructor(node: Element) {
        this.domNode = node;
        this.treeitems = [];
        this.firstChars = [];
        this.firstTreeitem = null;
        this.lastTreeitem = null;
    }

    public init = () => {

        function findTreeitems(node, tree, group) {
            let elem: any = node.firstElementChild;
            let ti = group;
            while (elem) {
                const role = elem.getAttribute("role");
                if (role && role.toLowerCase() === "treeitem") {
                    ti = new TreeitemLink(elem, tree, group);
                    ti.init();
                    tree
                        .treeitems
                        .push(ti);
                    tree
                        .firstChars
                        .push(ti.label.substring(0, 1).toLowerCase());
                }
                if (elem.firstElementChild) {
                    findTreeitems(elem, tree, ti);
                }
                elem = elem.nextElementSibling;
            }
        }
        // initialize pop up menus
        if (!this.domNode.getAttribute("role")) {
            this
                .domNode
                .setAttribute("role", "tree");
        }

        findTreeitems(this.domNode, this, false);

        this.updateVisibleTreeitems();

        this.firstTreeitem.domNode.tabIndex = 0;

    }

    public setFocusToItem = (treeitem) => {
        for (const ti of this.treeitems) {
            if (ti === treeitem) {
                ti.domNode.tabIndex = 0;
                ti
                    .domNode
                    .focus();
            } else {
                ti.domNode.tabIndex = -1;
            }
        }
    }

    public setFocusToNextItem = (currentItem) => {
        let nextItem = false;
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

    public setFocusToPreviousItem = (currentItem) => {
        let prevItem = false;
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

    public setFocusToParentItem = (currentItem) => {
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

    public expandTreeitem = (currentItem) => {

        if (currentItem.isExpandable) {
            currentItem
                .domNode
                .setAttribute("aria-expanded", true);
            this.updateVisibleTreeitems();
        }

    }

    public expandAllSiblingItems = (currentItem) => {
        for (const ti of this.treeitems) {
            if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
                this.expandTreeitem(ti);
            }
        }
    }

    public collapseTreeitem = (currentItem) => {
        let groupTreeitem;
        if (currentItem.isExpanded()) {
            groupTreeitem = currentItem;
        } else {
            groupTreeitem = currentItem.groupTreeitem;
        }

        if (groupTreeitem) {
            groupTreeitem
                .domNode
                .setAttribute("aria-expanded", false);
            this.updateVisibleTreeitems();
            this.setFocusToItem(groupTreeitem);
        }

    }

    public updateVisibleTreeitems = () => {

        this.firstTreeitem = this.treeitems[0];

        for (const ti of this.treeitems) {

            let parent = ti.domNode.parentNode;

            ti.isVisible = true;
            if ( parent.classList.contains("gui-hidden")) {
                ti.isVisible = false;
            }

            while (parent && (parent !== this.domNode)) {

                if (parent.getAttribute("aria-expanded") === "false") {
                    ti.isVisible = false;
                }
                parent = parent.parentNode;
            }

            if (ti.isVisible) {
                this.lastTreeitem = ti;
            }
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

    public getIndexFirstChars = (startIndex, char) => {
        for (let i = startIndex; i < this.firstChars.length; i++) {
            if (this.treeitems[i].isVisible) {
                if (char === this.firstChars[i]) {
                    return i;
                }
            }
        }
        return -1;
    }
    public showMoreValues = (groupItem) => {
        for (const ti of this.treeitems) {
            if ( ti.groupTreeitem === groupItem) {
                ti.domNode.parentNode.classList.remove("gui-hidden");
                ti.isVisible = true;
                if (ti.isShowLessLink) {
                    ti.domNode.parentNode.classList.remove("gui-hidden");
                    ti.domNode.focus();
                }
                if (ti.isShowMoreLink) {
                    ti.domNode.parentNode.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
            }
        }
        this.updateVisibleTreeitems();
    }
    public showLessValues = (groupItem) => {
        for (const ti of this.treeitems) {
            if ( ti.groupTreeitem === groupItem) {
                if (ti.domNode.parentNode.classList.contains("extra-filter")) {
                    ti.domNode.parentNode.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
                if (ti.isShowLessLink) {
                    ti.domNode.parentNode.classList.add("gui-hidden");
                    ti.isVisible = false;
                }
                if (ti.isShowMoreLink) {
                    ti.domNode.parentNode.classList.remove("gui-hidden");
                    ti.domNode.focus();
                }
            }
        }
        this.updateVisibleTreeitems();
    }
    public handleLabelChange = (currentItem) => {
        const value = currentItem.domNode.control.checked;
        // tslint:disable-next-line:no-console
        console.log({value, id: currentItem.id, name: currentItem.name});
    }
}
