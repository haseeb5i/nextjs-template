import { VariantProps, styled, CSS } from "@/theme/stitches.config";
import React, { useMemo } from "react";
import { Flex } from "./Flex";

const StyledRow = styled("div", Flex, { defaultVariants: { wrap: "wrap" } });

type Props = {
  gap?: number;
  gapX?: number;
  gapY?: number;
  className?: string;
  css?: CSS;
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

type RowProps = Props &
  Omit<VariantProps<typeof StyledRow>, "gap" | "gapX" | "gapY"> &
  NativeAttrs;

export const Row = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<RowProps>
>(({ gap = 0, gapX, gapY, css, children, className, ...rest }, ref) => {
  const [gapUnitX, gapUnitY] = useMemo(() => {
    return [
      `calc(${gapX || gap} * $space$3)`,
      `calc(${gapY || gap} * $space$3)`,
    ];
  }, [gap, gapX, gapY]);

  return (
    <StyledRow
      ref={ref}
      className={className}
      css={{
        $$gapUnitX: gapUnitX,
        $$gapUnitY: gapUnitY,
        margin: "calc(-1 * $$gapUnitY) calc(-1 * $$gapUnitX)",
        width: "calc(100% + $$gapUnit * 2)",
        ...(css as any),
      }}
      {...rest}
    >
      {children}
    </StyledRow>
  );
});

Row.displayName = "Row";
Row.toString = () => ".row";
