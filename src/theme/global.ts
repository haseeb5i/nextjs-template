import { globalCss, CSS } from "./stitches.config";

export const globalStyles = globalCss({
  "*, *::after, *::before": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "$sans",
    backgroundColor: "$bgColor",
    color: "$text",
  },
});
