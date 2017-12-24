export interface IEventHandler {
    RegisterDomHandler(): void;
    onResize(): void;
    onDocumentClick(event): void;
}
