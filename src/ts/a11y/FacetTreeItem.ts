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
        node.tabIndex = 0;
        this.tree = tree;
        this.groupTreeitem = group;
        this.treeItemDomNode = node;
        this.stopDefaultClick = false;
        const firstEm = this.treeItemDomNode.firstElementChild;
        if ( firstEm ) {
            this.pinUnPinDomNode = firstEm.querySelector(".pin-unpin-selector");
        }
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
                elem.setAttribute("role", "tree");
                this.isExpandable = true;
                break;
            }
            elem = elem.nextElementSibling;
        }
    }

    public init = () => {
        this.treeItemDomNode.tabIndex = 0;
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
        if ( this.isLabel ) {
            const checkBox = this
                .treeItemDomNode
                .firstElementChild as HTMLInputElement;
            checkBox.onchange = this.handleLabelChange.bind(this);
        }
        if (this.pinUnPinDomNode) {
            this.pinUnPinDomNode.addEventListener("click", this.handleUnPinClick);
            this.pinUnPinDomNode.addEventListener("keydown", this.handleUnPinKeyup);
        }
    }
    public handleLabelChange = (event: any) => {
        this
        .tree
        .handleLabelChange(this, event);
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
    public isPrintableCharacter = (str: string) => {
        return str.length === 1 && str.match(/\S/);
    }
    public printableCharacter = (item: FacetTreeItem, char: string) => {
        if (char === "*") {
            item
                .tree
                .expandAllSiblingItems(item);
        } else {
            if (this.isPrintableCharacter(char)) {
                item
                    .tree
                    .setFocusByFirstCharacter(item, char);
            }
        }
    }
    public handleKeydown = (event: HTMLElementEventMap["keydown"]) => {
        if ( !this.isKeyCodeValid(event.keyCode) ) {
            return;
        }
        const tgt = event.currentTarget;
        const flag = true;
        const char = event.key;
        this.stopDefaultClick = false;
        if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }
        if (event.shiftKey) {
            if (event.keyCode === KeyCodes.SPACE || event.keyCode === KeyCodes.RETURN) {
                event.stopPropagation();
                this.stopDefaultClick = true;
            } else {
                if (this.isPrintableCharacter(char)) {
                    this.printableCharacter(this, char);
                }
            }
        } else {
            switch (event.keyCode) {
                case KeyCodes.SPACE:
                case KeyCodes.RETURN:
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
                    }
                    if (this.isLabel) {
                        const checkBox = this
                                        .treeItemDomNode
                                        .firstElementChild as HTMLInputElement;
                        checkBox.click();
                    }
                    break;

                case KeyCodes.UP:
                    this
                        .tree
                        .setFocusToPreviousItem(this);
                    break;

                case KeyCodes.DOWN:
                    this
                        .tree
                        .setFocusToNextItem(this);
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
                    break;

                case KeyCodes.LEFT:
                    if (this.isExpandable && this.isExpanded()) {
                        this
                            .tree
                            .collapseTreeitem(this, true);
                    } else {
                        if (this.inGroup) {
                            this
                                .tree
                                .setFocusToParentItem(this);
                        }
                    }
                    break;

                case KeyCodes.HOME:
                    this
                        .tree
                        .setFocusToFirstItem();
                    break;

                case KeyCodes.END:
                    this
                        .tree
                        .setFocusToLastItem();
                    break;

                default:
                    if (this.isPrintableCharacter(char)) {
                        this.printableCharacter(this, char);
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
        let flag = true;
        if ( this.isLabel ) {
            flag = false;
        }
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
        }
        if (flag) {
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

    private isKeyCodeValid = (code: number) => {
        let valid = false;
        for (const prop in KeyCodes) {
            if (KeyCodes.hasOwnProperty(prop) && KeyCodes[prop] === code) {
                valid = true;
                break;
            }
        }
        return valid;
    }
}
