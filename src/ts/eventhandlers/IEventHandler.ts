export interface IEventHandler {
    deregister?: () => void;
    onBind?: () => void;
    RegisterDomHandler(): void;
    onResize(): void;
    onDocumentClick(event): void;
}
