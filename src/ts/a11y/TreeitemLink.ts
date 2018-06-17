import { FacetConfigStore } from "./../config/FacetConfigStore";
import { TreeLink } from "./TreeLinks";

export class TreeitemLink {
    private tree: TreeLink;
    private groupTreeitem: any;
    private domNode: HTMLElement;
    private label: string;
    private stopDefaultClick: boolean;
    private isExpandable: boolean;
    private isVisible: boolean;
    private inGroup: boolean;
    private keyCode: any;
    private id: string;
    private value: string;
    private isShowMoreLink: boolean;
    private isShowLessLink: boolean;
    private isLabel: boolean;

    constructor(node: HTMLElement, tree: TreeLink, group: any) {
        node.tabIndex = -1;
        this.tree = tree;
        this.groupTreeitem = group;
        this.domNode = node;
        this.label = node
            .textContent
            .trim();
        this.stopDefaultClick = false;
        if (node.getAttribute("aria-label")) {
            this.label = node
                .getAttribute("aria-label")
                .trim();
        }
        this.id = node.getAttribute("data-attr-id");
        this.value = node.getAttribute("data-attr-value");
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
        this.keyCode = Object.freeze({
            RETURN: 13,
            SPACE: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
        });
    }

    public init = () => {
        this.domNode.tabIndex = -1;
        if (!this.domNode.getAttribute("role")) {
            this
                .domNode
                .setAttribute("role", "treeitem");
        }
        this
            .domNode
            .addEventListener("keydown", this.handleKeydown.bind(this));
        this
            .domNode
            .addEventListener("click", this.handleClick.bind(this));
        this
            .domNode
            .addEventListener("focus", this.handleFocus.bind(this));
        this
            .domNode
            .addEventListener("blur", this.handleBlur.bind(this));

        if (this.isExpandable) {
            this
                .domNode
                .firstElementChild
                .addEventListener("mouseover", this.handleMouseOver.bind(this));
            this
                .domNode
                .firstElementChild
                .addEventListener("mouseout", this.handleMouseOut.bind(this));
        } else {
            this
                .domNode
                .addEventListener("mouseover", this.handleMouseOver.bind(this));
            this
                .domNode
                .addEventListener("mouseout", this.handleMouseOut.bind(this));
        }
    }

    public destroy = () => {
        const newNode = this.domNode.cloneNode(true);
        this.domNode.parentNode.replaceChild(newNode, this.domNode);
        this.domNode = null;
    }

    public isExpanded = () => {
        if (this.isExpandable) {
            return this
                .domNode
                .getAttribute("aria-expanded") === "true";
        }
        return false;
    }

    public handleKeydown = (event: any) => {
        const tgt = event.currentTarget;
        let flag = false;
        const char = event.key;

        function isPrintableCharacter(str) {
            return str.length === 1 && str.match(/\S/);
        }
        function printableCharacter(item) {
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

        if (event.shift) {
            if (event.keyCode === this.keyCode.SPACE || event.keyCode === this.keyCode.RETURN) {
                event.stopPropagation();
                this.stopDefaultClick = true;
            } else {
                if (isPrintableCharacter(char)) {
                    printableCharacter(this);
                }
            }
        } else {
            switch (event.keyCode) {
                case this.keyCode.SPACE:
                case this.keyCode.RETURN:
                    if (this.isExpandable) {
                        if (this.isExpanded()) {
                            this
                                .tree
                                .collapseTreeitem(this);
                        } else {
                            this
                                .tree
                                .expandTreeitem(this);
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
                    flag = true;
                    break;

                case this.keyCode.UP:
                    this
                        .tree
                        .setFocusToPreviousItem(this);
                    flag = true;
                    break;

                case this.keyCode.DOWN:
                    this
                        .tree
                        .setFocusToNextItem(this);
                    flag = true;
                    break;

                case this.keyCode.RIGHT:
                    if (this.isExpandable) {
                        if (this.isExpanded()) {
                            this
                                .tree
                                .setFocusToNextItem(this);
                        } else {
                            this
                                .tree
                                .expandTreeitem(this);
                        }
                    }
                    flag = true;
                    break;

                case this.keyCode.LEFT:
                    if (this.isExpandable && this.isExpanded()) {
                        this
                            .tree
                            .collapseTreeitem(this);
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

                case this.keyCode.HOME:
                    this
                        .tree
                        .setFocusToFirstItem();
                    flag = true;
                    break;

                case this.keyCode.END:
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

    public handleClick = (event) => {

        // only process click events that directly happened on this treeitem
        // if (event.target !== this.domNode && event.target !== this.domNode.firstElementChild) {
        //     return;
        // }

        if (this.isExpandable) {
            if (this.isExpanded()) {
                this
                    .tree
                    .collapseTreeitem(this);
            } else {
                this
                    .tree
                    .expandTreeitem(this);
            }
            event.stopPropagation();
        }
    }

    public handleFocus = (event) => {
        let node: Element = this.domNode;
        if (this.isExpandable) {
            node = node.firstElementChild;
        }
        node
            .classList
            .add("focus");
    }

    public handleBlur = function(event) {
        let node = this.domNode;
        if (this.isExpandable) {
            node = node.firstElementChild;
        }
        node
            .classList
            .remove("focus");
    };

    public handleMouseOver = (event) => {
        event
            .currentTarget
            .classList
            .add("hover");
    }

    public handleMouseOut = (event) => {
        event
            .currentTarget
            .classList
            .remove("hover");
    }
}
