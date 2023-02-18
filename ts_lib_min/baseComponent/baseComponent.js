import EventEmiter from "../event/eventEmiter";
const BASE_LINK = "../views";
class BaseComponent extends EventEmiter {
    mvc;
    view;
    controller;
    constructor(model, data) { super(); this.mvc = { _: this.#create, viewName: this.getName(), $: this.#selector, $All: this.#selectorAll }; const { _, viewName, $, $All } = this.mvc; this.view = _("div", viewName, _('h1', 'title', 'By Sublymus')); this.controller = { ['title']: (title) => { title?.addEventListener('click', () => { title.textContent = ''; setTimeout(() => { title.textContent = 'By Sublymus'; }, 100); }); } }; for (const key in model) {
        if (Object.hasOwnProperty.call(model, key)) {
            Object.defineProperties(this, { [key]: { get: function () { return model[key]; }, set: function (value) { model[key] = value; this.emit(key, value); } } });
        }
    } if (data) {
        for (const key in model) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (data[key] != undefined) {
                    this[key] = data[key];
                }
            }
        }
    } function isMounted(node) { if (node === document.body)
        return true; if (node.parentNode == undefined)
        return false; return isMounted(node.parentNode); } new Promise((resolve, reject) => { const id = setInterval(() => { if (isMounted(this.view)) {
        resolve(this.view);
        clearInterval(id);
    } }); }).then(() => { this.#callControllers(model, this.controller); }); }
    #callControllers(model, controller) { for (const selector in controller) {
        if (Object.hasOwnProperty.call(controller, selector)) {
            controller[selector](this.#selector(selector), this.#selectorAll(selector));
        }
    } for (const key in model) {
        if (Object.hasOwnProperty.call(model, key)) {
            this.emit(key, model[key]);
        }
    } }
    #selector = (selector) => { let elem = selector == this.getName() ? this.view : this.view.querySelector(selector); return elem; };
    #selectorAll = (selector) => { let elem = selector == this.getName() ? this.view : this.view.querySelectorAll(selector); return elem; };
    #create = (type, className, ...childrens) => { const elem = document.createElement(type); elem.className = className; elem.append(...childrens); return elem; };
    getName() { let name = this.constructor.name; return name.split("").map((l, i) => { const lower = l.toLocaleLowerCase(); return lower > l && i != 0 ? "-" + lower : lower; }).join(""); }
}
export default BaseComponent;
//# sourceMappingURL=baseComponent.js.map