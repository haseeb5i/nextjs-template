import {
  blueDark,
  slateDark,
  greenDark,
  yellowDark,
  purpleDark,
  redDark,
} from "@radix-ui/colors";

const darkTheme = {
  colors: {
    // background
    background: "$black",
    foreground: "$white",
    backgroundContrast: "$accents0",
    //semantic colors
    ...blueDark,
    ...purpleDark,
    ...greenDark,
    ...yellowDark,
    ...redDark,
    ...slateDark,
    // brand colors
    primaryLight: "$blue50",
    primaryLightHover: "$blue1",
    primaryLightActive: "$blue200",
    primaryLightContrast: "$blue600",
    // misc
    link: "$blue7",
  },
  shadows: {
    xs: "-4px 0 15px rgb(0 0 0 / 50%)",
    sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
    md: "0 8px 30px rgba(20, 20, 20, 0.15)",
    lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
    xl: "0 40px 80px rgba(20, 20, 20, 0.25)",
  },
};

export default darkTheme;
