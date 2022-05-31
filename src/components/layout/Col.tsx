import { VariantProps, styled, CSS } from "@/theme/stitches.config";
import React from "react";
import { useMemo } from "react";
import { Flex } from "./Flex";

const StyledCol = styled("div", Flex, {
  padding: "$$gapUnitY $$gapUnitX",
  margin: 0,
});

type BreakpointsValue = number | boolean | "auto";

type Props = {
  xs?: BreakpointsValue;
  sm?: BreakpointsValue;
  md?: BreakpointsValue;
  lg?: BreakpointsValue;
  xl?: BreakpointsValue;
  css?: CSS;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

type ColProps = Props & VariantProps<typeof StyledCol> & NativeAttrs;

function getItemLayout(val?: BreakpointsValue): React.CSSProperties {
  if (typeof val === "number") {
    const width = (100 / 12) * val;
    const ratio = width > 100 ? "100%" : width < 0 ? "0" : `${width}%`;
    return {
      display: val === 0 ? "none" : "flex",
      flexGrow: 0,
      maxWidth: ratio,
      flexBasis: ratio,
    };
  }
  if (typeof val === "boolean") {
    return {
      flexGrow: 1,
      maxWidth: "100%",
      flexBasis: "0",
    };
  }

  return {
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: "none",
    width: "auto",
    flexBasis: "auto",
  };
}

export const Col = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ColProps>
>((props, ref) => {
  const { xs, sm, md, lg, xl, css, children, className, ...rest } = props;
  const classes = useMemo(() => {
    const breaks: { [key: string]: unknown } = {
      xs,
      sm,
      md,
      lg,
      xl,
    };
    const classString = Object.keys(breaks).reduce((pre, name) => {
      if (breaks[name] !== undefined && breaks[name] !== false)
        return `${pre} ${name}`;
      return pre;
    }, "");
    return classString.trim();
  }, [xs, sm, md, lg, xl]);

  return (
    <StyledCol
      ref={ref}
      className={classes}
      css={{
        "&.xs": {
          ...getItemLayout(xs),
        },
        "@sm": {
          "&.sm": {
            ...getItemLayout(sm),
          },
        },
        "@md": {
          "&.md": {
            ...getItemLayout(md),
          },
        },
        "@lg": {
          "&.lg": {
            ...getItemLayout(lg),
          },
        },
        "@xl": {
          "&.xl": {
            ...getItemLayout(xl),
          },
        },
        ...(css as any),
      }}
      {...rest}
    >
      {children}
    </StyledCol>
  );
});

Col.displayName = "Col";
Col.toString = () => ".col";
