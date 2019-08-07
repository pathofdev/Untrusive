import { styleClasses } from "./styleClasses";
import { generateCss } from "./generateCss";
var isServer = typeof window === "undefined";
var Untrusive = (function () {
    function Untrusive(opts) {
        var _this = this;
        this.id = Math.random().toString(36).substr(2, 9);
        this.wrapperId = "untrusive-" + this.id;
        this.cssId = "untrusive-css-" + this.id;
        this.init = function (opts) {
            if (isServer) {
                return;
            }
            var css = document.createElement("style");
            var wrapper = document.createElement("div");
            var bar = document.createElement("div");
            css.id = _this.cssId;
            css.innerHTML = generateCss(_this.wrapperId, opts);
            var existingCss = document.getElementById(_this.cssId);
            if (existingCss) {
                existingCss.remove();
            }
            document.head.appendChild(css);
            wrapper.id = _this.wrapperId;
            wrapper.className = styleClasses.wrapper;
            bar.className = styleClasses.bar;
            var existing = document.getElementById(_this.wrapperId);
            if (existing) {
                existing.remove();
            }
            wrapper.appendChild(bar);
            document.body.appendChild(wrapper);
        };
        this.toggle = function () {
            if (isServer) {
                return;
            }
            var wrapper = document.getElementById(_this.wrapperId);
            if (!wrapper) {
                return;
            }
            var active = wrapper.classList.contains(styleClasses.wrapper_active);
            if (active) {
                wrapper.classList.remove(styleClasses.wrapper_active);
            }
            else {
                wrapper.classList.add(styleClasses.wrapper_active);
            }
        };
        this.start = function () {
            if (isServer) {
                return;
            }
            var wrapper = document.getElementById(_this.wrapperId);
            if (!wrapper) {
                return;
            }
            var active = wrapper.classList.contains(styleClasses.wrapper_active);
            if (!active) {
                wrapper.classList.add(styleClasses.wrapper_active);
            }
        };
        this.stop = function () {
            if (isServer) {
                return;
            }
            var wrapper = document.getElementById(_this.wrapperId);
            if (!wrapper) {
                return;
            }
            var active = wrapper.classList.contains(styleClasses.wrapper_active);
            if (active) {
                wrapper.classList.remove(styleClasses.wrapper_active);
            }
        };
        this.init(opts);
    }
    return Untrusive;
}());
export default Untrusive;
//# sourceMappingURL=index.js.map