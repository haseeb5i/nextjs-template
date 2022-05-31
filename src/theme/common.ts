import type * as Stitches from "@stitches/react";

const defaultTokens = {
  fonts: {
    sans: "FreeSans, Arimo, 'Droid Sans', 'Segoe UI', Helvetica, Arial, sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Courier New', monospace;",
  },
  fontSizes: {
    1: "13px",
    2: "15px",
    3: "17px",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  space: {
    0: "0rem",
    xs: "0.5rem",
    sm: "0.75rem", // used in container gap unit
    md: "1rem",
    lg: "1.375rem", // used in row gap unit
    xl: "2.25rem",
    px: "1px",
    1: "0.125rem",
    2: "0.25rem",
    3: "0.375rem",
    4: "0.5rem",
    5: "0.625rem",
    12: "2rem",
  },
  sizes: {
    12: "2rem",
    14: "2.5rem",
  },
  breakpoints: {
    xs: "650px",
    sm: "960px",
    md: "1280px",
    lg: "1400px",
    xl: "1920px",
  },
  radii: {
    xs: "7px",
    sm: "9px",
    md: "12px",
    base: "14px",
    lg: "14px",
    xl: "18px",
    squared: "33%",
    rounded: "50%",
    pill: "9999px",
  },
};

const defaultColors = {
  // generic colors
  white: "#ffffff",
  black: "#000000",

  // brand colors

  primaryBase: "$blue1",
  primaryBgSubtle: "$blue2",
  primaryBg: "$blue3",
  primaryBgHover: "$blue4",
  primaryBgActive: "$blue5",
  primaryLine: "$blue6",
  primaryBorder: "$blue7",
  primaryBorderHover: "$blue8",
  primarySolid: "$blue9",
  primary: "$blue9",
  primarySolidHover: "$blue10",
  primaryText: "$blue11",
  primaryTextContrast: "$blue12",

  secondary: "$purple9",

  success: "$green9",

  warning: "$yellow9",

  error: "$red9",

  gradient:
    "linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)",

  // misc
  border: "$gray7",
  text: "$slate12",
  bgColor: "$slate1",
  codeLight: "$cyan5",
  code: "$cyan6",
  selection: "$pink8",
};

const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  motion: "(prefers-reduced-motion: reduce)",
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
};

const defaultUtils = {
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  bgColor: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),
  
  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),

  linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  textGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    "&::selection": {
      WebkitTextFillColor: "$colors$text",
    },
  }),
};

// const  defaultThemeMap = {};

const commonTheme = {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {},
  },
  media: defaultMedia,
  utils: defaultUtils,
  // themeMap: defaultThemeMap,
};

export default commonTheme;
