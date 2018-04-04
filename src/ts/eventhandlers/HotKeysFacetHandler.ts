import { IEventHandler } from "./IEventHandler";
class HotKeysFacetHandler implements IEventHandler {

    public RegisterDomHandler = (): void => {
        jQuery(document).on("keydown", this.focusOnSearch);
    }
    public onResize = (): void => {
        throw new Error("Method not implemented.");
    }
    public onDocumentClick = (event: any): void => {
        // Do nothing
    }

    public deRegister = (): void => {
        jQuery(document).off("keydown", this.focusOnSearch);
    }

    private focusOnSearch = (event) => {
        if (event.ctrlKey  &&  event.key === "f") {
            event.preventDefault();
            jQuery(".filter-search-input").focus();
        }
    }
}

export {HotKeysFacetHandler};
