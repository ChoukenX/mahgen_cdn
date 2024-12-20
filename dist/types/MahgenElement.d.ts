declare class MahgenElement extends HTMLElement {
    private readonly img;
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(): void;
    private genImage;
}
export default MahgenElement;
