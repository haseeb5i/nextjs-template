import { styled } from "@/theme/stitches.config";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
    },
    gapX: {
      1: {
        columnGap: "$1",
      },
      2: {
        columnGap: "$2",
      },
      3: {
        columnGap: "$3",
      },
    },
    gapY: {
      1: {
        rowGap: "$1",
      },
      2: {
        rowGap: "$2",
      },
      3: {
        rowGap: "$3",
      },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});
