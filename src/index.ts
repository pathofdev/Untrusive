import { UntrusiveOptions } from "./types";
import { styleClasses } from "./styleClasses";
import { generateCss } from "./generateCss";

const isServer = typeof window === "undefined";

export default class Untrusive {

  id = Math.random().toString(36).substr(2, 9);
  wrapperId = `untrusive-${this.id}`;
  cssId = `untrusive-css-${this.id}`;

  constructor(opts: UntrusiveOptions) {
    this.init(opts);
  }

  init = (opts: UntrusiveOptions) => {

    if (isServer) {
      return;
    }

    // CREATE REQUIRED TAGS
    const css = document.createElement("style");
    const wrapper = document.createElement("div");
    const bar = document.createElement("div");

    // PATCH CSS
    css.id = this.cssId;
    css.innerHTML = generateCss(this.wrapperId, opts);
    const existingCss = document.getElementById(this.cssId);
    if (existingCss) {
      existingCss.remove();
    }
    document.head.appendChild(css);

    // PATCH ELEMENT
    wrapper.id = this.wrapperId;
    wrapper.className = styleClasses.wrapper;
    bar.className = styleClasses.bar;

    const existing = document.getElementById(this.wrapperId);
    if (existing) {
      existing.remove();
    }

    wrapper.appendChild(bar);
    document.body.appendChild(wrapper);

  }

  toggle = () => {

    if (isServer) {
      return;
    }

    const wrapper = document.getElementById(this.wrapperId);
    if (!wrapper) {
      return;
    }

    const active = wrapper.classList.contains(styleClasses.wrapper_active);
    if (active) {
      wrapper.classList.remove(styleClasses.wrapper_active);
    }
    else {
      wrapper.classList.add(styleClasses.wrapper_active);
    }

  }

  start = () => {

    if (isServer) {
      return;
    }

    const wrapper = document.getElementById(this.wrapperId);
    if (!wrapper) {
      return;
    }

    const active = wrapper.classList.contains(styleClasses.wrapper_active);
    if (!active) {
      wrapper.classList.add(styleClasses.wrapper_active);
    }

  }

  stop = () => {

    if (isServer) {
      return;
    }

    const wrapper = document.getElementById(this.wrapperId);
    if (!wrapper) {
      return;
    }

    const active = wrapper.classList.contains(styleClasses.wrapper_active);
    if (active) {
      wrapper.classList.remove(styleClasses.wrapper_active);
    }

  }

}

export { UntrusiveOptions };
