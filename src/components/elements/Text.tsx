import { styled } from "@/theme/stitches.config";

export const Text = styled("span", {
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",

  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
    },
    color: {
      purple: {
        color: "$purple11",
      },
      blue: {
        color: "$blue11",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
  },
  defaultVariants: {
    size: "3",
    color: "contrast",
  },
});
