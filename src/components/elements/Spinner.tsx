import { styled, keyframes } from "@/theme/stitches.config";
import React from "react";
import { CSS } from "@/theme/stitches.config";

type SpinnerProps = React.HTMLAttributes<unknown> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements;
};

export const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({
  children,
  ...props
}) => {
  const ariaLabel = children ? "" : "Spinner";
  return (
    <StyledSpinnerContainer {...props}>
      <>
        <StyledSpinner className="spinner" aria-label={ariaLabel}>
          <i className="_1" />
          <i className="_2" />
          <i className="_3" />
        </StyledSpinner>
        {children && (
          <StyledSpinnerLabel className="spinner-label">
            {children}
          </StyledSpinnerLabel>
        )}
      </>
    </StyledSpinnerContainer>
  );
};

const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const StyledSpinnerContainer = styled("div", {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  $$loadingColor: "$colors$primary",
  $$loadingTextColor: "$colors$text",
});

const StyledSpinner = styled("span", {
  position: "relative",
  inset: "0px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  userSelect: "none",
  display: "flex",
  borderRadius: "$rounded",
  $$loadingSize: "$space$12",
  $$loadingBorder: "calc($space$1 * 1.5)",
  size: "$$loadingSize",
  i: {
    top: "0px",
    size: "100%",
    position: "absolute",
    borderRadius: "inherit",
  },
  "._1": {
    border: "$$loadingBorder solid $$loadingColor",
    borderTop: "$$loadingBorder solid transparent",
    borderLeft: "$$loadingBorder solid transparent",
    borderRight: "$$loadingBorder solid transparent",
    animation: `${rotate} 0.8s ease infinite`,
  },
  "._2": {
    border: "$$loadingBorder dotted $$loadingColor",
    borderTop: "$$loadingBorder solid transparent",
    borderLeft: "$$loadingBorder solid transparent",
    borderRight: "$$loadingBorder solid transparent",
    animation: `${rotate} 0.8s linear infinite`,
    opacity: 0.5,
  },
  "._3": {
    display: "none",
  },
});

const StyledSpinnerLabel = styled("label", {
  marginTop: "$1",
  color: "$$loadingTextColor",
  fontSize: "$space$12",
  "*": {
    margin: 0,
  },
});
