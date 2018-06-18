import { FacetConfigStore } from "./../config/FacetConfigStore";
import { DomUtils } from "./DomUtils";
import { FacetTree } from "./FacetTree";
import { KeyCodes } from "./KeyCodes";

export class FacetTreeItem {
    public tree: FacetTree;
    public groupTreeitem: FacetTreeItem;
    public pinUnPinDomNode: HTMLElement;
    public treeItemDomNode: HTMLElement;
    public label: string;
    public stopDefaultClick: boolean;
    public isExpandable: boolean;
    public isVisible: boolean;
    public inGroup: boolean;
    public id: string;
    // public value: string;
    public dataType: string;
    public isRange: boolean;
    public isShowMoreLink: boolean;
    public isShowLessLink: boolean;
    public isLabel: boolean;
    public ignoreForSearch: boolean;

    constructor(node: HTMLElement, tree: FacetTree, group: FacetTreeItem) {
        node.tabIndex = -1;
        this.tree = tree;
        this.groupTreeitem = group;
        this.treeItemDomNode = node;
        // this.label = node
        //     .textContent
        //     .trim();
        this.stopDefaultClick = false;
        // if (node.getAttribute("aria-label")) {
        //     this.label = node
        //         .getAttribute("aria-label")
        //         .trim();
        // }
        this.pinUnPinDomNode = this.treeItemDomNode.firstElementChild.querySelector(".pin-unpin-selector");
        this.id = node.getAttribute("data-attr-id");
        this.label = node.getAttribute("data-attr-value");
        this.dataType = node.getAttribute("data-attr-type");
        this.isRange = node.getAttribute("data-attr-isRange") === "true";
        this.ignoreForSearch = node.getAttribute("data-attr-ignoreForSearch") === "true";
        this.isShowMoreLink = node.classList.contains("show-more-link");
        this.isShowLessLink = node.classList.contains("show-less-link");
        this.isLabel = node.tagName.toLowerCase() === "label";
        this.isExpandable = false;
        this.isVisible = false;
        this.inGroup = false;
        if (group) {
            this.inGroup = true;
        }
        let elem = node.firstElementChild;
        while (elem) {
            if (elem.tagName.toLowerCase() === "ul") {
                elem.setAttribute("role", "group");
                this.isExpandable = true;
                break;
            }
            elem = elem.nextElementSibling;
        }
    }

    public init = () => {
        this.treeItemDomNode.tabIndex = -1;
        if (!this.treeItemDomNode.getAttribute("role")) {
            this
                .treeItemDomNode
                .setAttribute("role", "treeitem");
        }
        this
            .treeItemDomNode
            .addEventListener("keydown", this.handleKeydown.bind(this));
        this
            .treeItemDomNode
            .addEventListener("click", this.handleClick.bind(this));
        this
            .treeItemDomNode
            .addEventListener("focus", this.handleFocus.bind(this));
        this
            .treeItemDomNode
            .addEventListener("blur", this.handleBlur.bind(this));

        if (this.isExpandable) {
            this
                .treeItemDomNode
                .firstElementChild
                .addEventListener("mouseover", this.handleMouseOver.bind(this));
            this
                .treeItemDomNode
                .firstElementChild
                .addEventListener("mouseout", this.handleMouseOut.bind(this));
        } else {
            this
                .treeItemDomNode
                .addEventListener("mouseover", this.handleMouseOver.bind(this));
            this
                .treeItemDomNode
                .addEventListener("mouseout", this.handleMouseOut.bind(this));
        }
        if (this.pinUnPinDomNode) {
            this.pinUnPinDomNode.addEventListener("click", this.handleUnPinClick);
            this.pinUnPinDomNode.addEventListener("keydown", this.handleUnPinKeyup);
        }
    }

    public destroy = () => {
        const newNode = this.treeItemDomNode.cloneNode(true);
        this.treeItemDomNode.parentNode.replaceChild(newNode, this.treeItemDomNode);
        this.treeItemDomNode = null;
    }

    public isExpanded = () => {
        if (this.isExpandable) {
            return DomUtils.isAriaExpanded(this.treeItemDomNode);
        }
        return false;
    }
    public handleUnPinClick = (event: HTMLElementEventMap["click"]) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains("unpin-icon")) {
            this.tree.handlePinUnpin(event, false, this.id);
        } else {
            this.tree.handlePinUnpin(event, true, this.id);
        }
    }
    public handleUnPinKeyup = (event: HTMLElementEventMap["keydown"]) => {
        const target = event.target as HTMLElement;
        switch (event.keyCode) {
            case KeyCodes.SPACE:
            case KeyCodes.RETURN:
                if (target.classList.contains("unpin-icon")) {
                    this.tree.handlePinUnpin(event, false, this.id);
                } else {
                    this.tree.handlePinUnpin(event, true, this.id);
                }
                break;
            default:
                break;
        }
        event.stopPropagation();
    }
    public handleKeydown = (event: HTMLElementEventMap["keydown"]) => {
        const tgt = event.currentTarget;
        let flag = false;
        const char = event.key;

        function isPrintableCharacter(str) {
            return str.length === 1 && str.match(/\S/);
        }
        function printableCharacter(item: FacetTreeItem) {
            if (char === "*") {
                item
                    .tree
                    .expandAllSiblingItems(item);
                flag = true;
            } else {
                if (isPrintableCharacter(char)) {
                    item
                        .tree
                        .setFocusByFirstCharacter(item, char);
                    flag = true;
                }
            }
        }

        this.stopDefaultClick = false;

        if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }

        if (event.shiftKey) {
            if (event.keyCode === KeyCodes.SPACE || event.keyCode === KeyCodes.RETURN) {
                event.stopPropagation();
                this.stopDefaultClick = true;
            } else {
                if (isPrintableCharacter(char)) {
                    printableCharacter(this);
                }
            }
        } else {
            switch (event.keyCode) {
                case KeyCodes.SPACE:
                case KeyCodes.RETURN:
                    flag = true;
                    if (this.isExpandable) {
                        if (this.isExpanded()) {
                            this
                                .tree
                                .collapseTreeitem(this, true);
                        } else {
                            this
                                .tree
                                .expandTreeitem(this, true);
                        }
                    } else {
                        if ( this.isShowMoreLink ) {
                            this
                                .tree
                                .showMoreValues(this.groupTreeitem);
                        }
                        if ( this.isShowLessLink ) {
                            this
                                .tree
                                .showLessValues(this.groupTreeitem);
                        }
                        if ( this.isLabel ) {
                            this
                                .tree
                                .handleLabelChange(this);
                        }
                    }
                    break;

                case KeyCodes.UP:
                    this
                        .tree
                        .setFocusToPreviousItem(this);
                    flag = true;
                    break;

                case KeyCodes.DOWN:
                    this
                        .tree
                        .setFocusToNextItem(this);
                    flag = true;
                    break;

                case KeyCodes.RIGHT:
                    if (this.isExpandable) {
                        if (this.isExpanded()) {
                            this
                                .tree
                                .setFocusToNextItem(this);
                        } else {
                            this
                                .tree
                                .expandTreeitem(this, true);
                        }
                    }
                    flag = true;
                    break;

                case KeyCodes.LEFT:
                    if (this.isExpandable && this.isExpanded()) {
                        this
                            .tree
                            .collapseTreeitem(this, true);
                        flag = true;
                    } else {
                        if (this.inGroup) {
                            this
                                .tree
                                .setFocusToParentItem(this);
                            flag = true;
                        }
                    }
                    break;

                case KeyCodes.HOME:
                    this
                        .tree
                        .setFocusToFirstItem();
                    flag = true;
                    break;

                case KeyCodes.END:
                    this
                        .tree
                        .setFocusToLastItem();
                    flag = true;
                    break;

                default:
                    if (isPrintableCharacter(char)) {
                        printableCharacter(this);
                    }
                    break;
            }
        }
        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    public handleClick = (event: HTMLElementEventMap["click"]) => {

        // only process click events that directly happened on this treeitem
        if (event.target !== this.treeItemDomNode
            && ! DomUtils.isSelfOrDescendant(this.treeItemDomNode.firstElementChild, event.target)) {
            return;
        }

        if (this.isExpandable) {
            if (this.isExpanded()) {
                this
                    .tree
                    .collapseTreeitem(this, true);
            } else {
                this
                    .tree
                    .expandTreeitem(this, true);
            }
            event.stopPropagation();
        } else {
            if ( this.isShowMoreLink ) {
                this
                    .tree
                    .showMoreValues(this.groupTreeitem);
            }
            if ( this.isShowLessLink ) {
                this
                    .tree
                    .showLessValues(this.groupTreeitem);
            }
            if ( this.isLabel ) {
                this
                    .tree
                    .handleLabelChange(this);
            }
            event.stopPropagation();
            event.preventDefault();
        }
    }

    public handleFocus = (event: HTMLElementEventMap["focus"]) => {
        let node: Element = this.treeItemDomNode;
        if (this.isExpandable) {
            node = node.firstElementChild;
        }
        node
            .classList
            .add("focus");
    }

    public handleBlur = function(event: HTMLElementEventMap["blur"]) {
        let node = this.treeItemDomNode;
        if (this.isExpandable) {
            node = node.firstElementChild;
        }
        node
            .classList
            .remove("focus");
    };

    public handleMouseOver = (event: HTMLElementEventMap["mouseover"]) => {
        const target = event.currentTarget as HTMLElement;
        target.classList.add("hover");
    }

    public handleMouseOut = (event: HTMLElementEventMap["mouseout"]) => {
        const target = event.currentTarget as HTMLElement;
        target.classList.remove("hover");
    }
}
