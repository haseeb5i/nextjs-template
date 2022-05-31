import { styled } from "@/theme/stitches.config";

export const Container = styled("div", {
  flexShrink: 0,
  ml: "auto",
  mr: "auto",
  px: "$5",

  variants: {
    size: {
      xs: {
        maxWidth: "$breakpoints$xs",
      },
      sm: {
        maxWidth: "$breakpoints$sm",
      },
      md: {
        maxWidth: "$breakpoints$md",
      },
      lg: {
        maxWidth: "$breakpoints$lg",
      },
      xl: {
        maxWidth: "$breakpoints$xl",
      },
      fluid: {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "fluid",
  },
});
