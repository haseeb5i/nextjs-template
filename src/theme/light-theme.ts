import {
  blue,
  purple,
  green,
  yellow,
  red,
  slate,
} from "@radix-ui/colors";

const lightTheme = {
  colors: {
    // background colors
    background: "$white",
    foreground: "$black",
    backgroundContrast: "$white",
    //semantic colors
    ...blue,
    ...purple,
    ...green,
    ...yellow,
    ...red,
    ...slate,
    // misc
    link: "$blue8",
  },
  shadows: {
    xs: "-4px 0 4px rgb(0 0 0 / 5%);",
    sm: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
    md: "0 8px 30px rgba(0, 0, 0, 0.15)",
    lg: "0 30px 60px rgba(0, 0, 0, 0.15)",
    xl: "0 40px 80px rgba(0, 0, 0, 0.25)",
  },
};

export default lightTheme;
