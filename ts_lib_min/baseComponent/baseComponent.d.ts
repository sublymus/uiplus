import EventEmiter from "../event/eventEmiter";
type ModelSchema = {
    [key: string]: any;
};
type ControllerSchema = {
    [key: string]: (element: Element | null, elements?: NodeListOf<Element> | HTMLElement) => void;
};
type MVCSchema = {
    _: (TagName: string, className: string, ...childrens: any[]) => HTMLElement;
    viewName: string;
    $: (selector: string) => Element | null;
    $All: (selector: string) => NodeListOf<Element> | HTMLElement;
};
declare class BaseComponent extends EventEmiter {
    #private;
    mvc: MVCSchema;
    view: HTMLElement;
    protected controller: ControllerSchema;
    constructor(model: ModelSchema, data: ModelSchema);
    getName(): string;
}
export default BaseComponent;
