import { globalCss, CSS } from "./stitches.config";

export const globalStyles = globalCss({
  "*, *::after, *::before": {
    boxSizing: "border-box",
  },
  html: {
    "-moz-tab-size": 4,
    tabSize: 4,
    lineHeight: 1.15,
    "-webkit-text-size-adjust": "100%",
  },
  body: {
    fontFamily: "$sans",
    backgroundColor: "$bgColor",
    color: "$text",
    margin: 0,
  },
  hr: {
    height: 0,
    color: "inherit",
  },
  "code, kbd, samp, pre": {
    fontFamily: "$sans",
    fontSize: "1em",
  },
  small: {
    fontSize: "80%",
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: {
    bottom: "-0.25em",
  },
  sup: {
    top: "-0.5em",
  },
  table: {
    textIndent: 0,
    borderColor: "inherit",
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: 1.15,
    margin: 0,
  },
  "button, select": {
    textTransform: "none",
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    "-webkit-appearance": "button",
  },
  "::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0,
  },
  ":-moz-focusring": {
    outline: "1px dotted ButtonText",
  },
  ":-moz-ui-invalid": {
    boxShadow: "none",
  },
  legend: {
    padding: 0,
  },
  progress: {
    verticalAlign: "baseline",
  },
  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },
  '[type="search"]': {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px",
  },
  "::-webkit-search-decoration": {
    "-webkit-appearance": "none",
  },
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button",
    font: "inherit",
  },
  summary: {
    display: "list-item",
  },
});
