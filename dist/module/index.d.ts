import { UntrusiveOptions } from "./types";
export default class Untrusive {
    id: string;
    wrapperId: string;
    cssId: string;
    constructor(opts: UntrusiveOptions);
    init: (opts: UntrusiveOptions) => void;
    toggle: () => void;
    start: () => void;
    stop: () => void;
}
export { UntrusiveOptions };
