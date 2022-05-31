import { styled } from "@/theme/stitches.config";

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  userSelect: "none",

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$sm",
  fontFamily: "$sans",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",

  "&:disabled": {
    backgroundColor: "$slate2",
    boxShadow: "inset 0 0 0 1px $colors$slate7",
    color: "$slate8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      sm: {
        borderRadius: "$sm",
        height: "$10",
        px: "$sm",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      md: {
        borderRadius: "$sm",
        height: "$12",
        px: "$lg",
        fontSize: "$2",
        lineHeight: "$sizes$6",
      },
    },
    color: {
      blue: {
        backgroundColor: "$blue2",
        boxShadow: "inset 0 0 0 1px $colors$blue7",
        color: "$blue11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$blue8",
          },
        },
        "&:active": {
          backgroundColor: "$blue3",
          boxShadow: "inset 0 0 0 1px $colors$blue8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8",
        },
      },
    },
    state: {
      active: {
        backgroundColor: "$slate4",
        boxShadow: "inset 0 0 0 1px $colors$slate8",
        color: "$slate11",
        "@hover": {
          "&:hover": {
            backgroundColor: "$slate5",
            boxShadow: "inset 0 0 0 1px $colors$slate8",
          },
        },
        "&:active": {
          backgroundColor: "$slate5",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  compoundVariants: [
    {
      color: "blue",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$blueA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$blueA4",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$blueA8, 0 0 0 1px $colors$blueA8",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});
