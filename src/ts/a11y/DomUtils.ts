import { error } from "util";

export class DomUtils {
    public static isDescendant = (parent, child) => {
        let node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    public static isSelfOrDescendant = (parent, child) => {
        if ( parent === child ) {return true; }
        return DomUtils.isDescendant(parent, child);
    }
    public static isHidden = (node: HTMLElement) => {
        if (!node) { return true; }
        return node.offsetParent === null;
    }
    public static isAriaHidden = (node: HTMLElement) => {
        if (!node) { return false; }
        return node.getAttribute("aria-hidden") === "true";
    }
    public static setAriaHidden = (node: HTMLElement, value: string) => {
        if (!node) { throw Error("DomUtils.setAriaHidden - Node cannot be of null or undefined"); }
        node.setAttribute("aria-hidden", value);
    }
    public static isAriaExpanded = (node: HTMLElement) => {
        if (!node) { return false; }
        return node.getAttribute("aria-expanded") === "true";
    }
    public static setAriaExpanded = (node: HTMLElement, value: string) => {
        if (!node) { throw Error("DomUtils.setAriaExpanded - Node cannot be of null or undefined"); }
        node.setAttribute("aria-expanded", value);
    }
    public static show = (node: HTMLElement) => {
        if (!node) { throw Error("DomUtils.show - Node cannot be of null or undefined"); }
        node.classList.remove("gui-hidden");
    }
    public static hide = (node: HTMLElement) => {
        if (!node) { throw Error("DomUtils.hide - Node cannot be of null or undefined"); }
        node.classList.add("gui-hidden");
    }
    public static toggleLabel = (node: HTMLLabelElement): boolean => {
        if (!node) { throw Error("DomUtils.toggleLabel - Node cannot be of null or undefined"); }
        const forId = node.htmlFor;
        const input: HTMLInputElement = (document.getElementById(forId) || node.firstElementChild) as HTMLInputElement;
        input.checked = !input.checked;
        return input.checked;
    }
    public static off = (node: HTMLElement) => {
        const newNode = node.cloneNode(true);
        node.parentNode.replaceChild(newNode, node);
    }
}
