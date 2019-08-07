(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Untrusive = factory());
}(this, function () { 'use strict';

    var styleClasses = {
        wrapper: "untrusive-wrapper",
        wrapper_active: "untrusive-active",
        bar: "untrusive-bar",
    };

    var generateCss = function (wrapperId, _a) {
        var bgColor = _a.bgColor, barColor = _a.barColor, height = _a.height;
        return ("\n  #" + wrapperId + " {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: " + (height || 4) + "px;\n    width: 100%;\n    background-color: " + (bgColor || "gray") + ";\n    margin: 0 0 0 0;\n    overflow: hidden;\n    z-index: 2000;\n  }\n  #" + wrapperId + "  ." + styleClasses.bar + " {\n    background-color:  " + (barColor || "black") + ";\n  }\n  #" + wrapperId + "  ." + styleClasses.bar + ":before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left:0;\n    bottom: 0;\n    will-change: left, right;\n    animation: indeterminate 2.1s cubic-bezier(0.650, 0.815, 0.735, 0.395) infinite;\n  }\n  #" + wrapperId + "  ." + styleClasses.bar + ":after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left:0;\n    bottom: 0;\n    will-change: left, right;\n    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;\n    animation-delay: 1.15s;\n  }\n  #" + wrapperId + "." + styleClasses.wrapper_active + " {\n    display: block;\n  }\n  @keyframes indeterminate {\n    0% {\n      left: -35%;\n      right:100%;\n    }\n    60% {\n      left: 100%;\n      right: -90%;\n    }\n    100% {\n      left: 100%;\n      right: -90%;\n    }\n  }\n  @keyframes indeterminate-short {\n    0% {\n      left: -200%;\n      right: 100%;\n    }\n    60% {\n      left: 107%;\n      right: -8%;\n    }\n    100% {\n      left: 107%;\n      right: -8%;\n    }\n  }\n").trim();
    };

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

    return Untrusive;

}));
//# sourceMappingURL=untrusive.js.map
