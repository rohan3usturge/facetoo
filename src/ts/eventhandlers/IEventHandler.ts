export interface IEventHandler {
    deregister?: () => void;
    RegisterDomHandler(): void;
    onResize(): void;
    onDocumentClick(event): void;
}
