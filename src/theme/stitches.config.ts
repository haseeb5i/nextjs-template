import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import commonTheme from "./common";
import lightThemeOpts from "./light-theme";
import darkThemeOpts from "./dark-theme";

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors,
      ...lightThemeOpts.colors,
    },
    shadows: {
      ...lightThemeOpts.shadows,
    },
  },
});

export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const createTheme = stitches.createTheme;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

export const darkTheme = createTheme("dark-theme", darkThemeOpts);

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;