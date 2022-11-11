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

export const {
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText,
  theme,
  config,
} = stitches;

export const darkTheme = createTheme("dark-theme", darkThemeOpts);

export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T extends { [key: symbol | string]: any }> =
  Stitches.VariantProps<T>;
export type StitchesTheme = typeof theme;
