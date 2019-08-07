import {UntrusiveOptions} from "./types";
import {styleClasses} from "./styleClasses";

export const generateCss = (wrapperId: string, { bgColor, barColor, height }: UntrusiveOptions) => `
  #${wrapperId} {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${height || 4}px;
    width: 100%;
    background-color: ${bgColor || "gray"};
    margin: 0 0 0 0;
    overflow: hidden;
    z-index: 2000;
  }
  #${wrapperId}  .${styleClasses.bar} {
    background-color:  ${barColor || "black"};
  }
  #${wrapperId}  .${styleClasses.bar}:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left:0;
    bottom: 0;
    will-change: left, right;
    animation: indeterminate 2.1s cubic-bezier(0.650, 0.815, 0.735, 0.395) infinite;
  }
  #${wrapperId}  .${styleClasses.bar}:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left:0;
    bottom: 0;
    will-change: left, right;
    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;
    animation-delay: 1.15s;
  }
  #${wrapperId}.${styleClasses.wrapper_active} {
    display: block;
  }
  @keyframes indeterminate {
    0% {
      left: -35%;
      right:100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }
  @keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }
`.trim();
