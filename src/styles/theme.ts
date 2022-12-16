import { Theme } from "styled-components";

const breakpoint = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1260px",
};

const theme: Theme = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray100: "#DDDDDD",
    gray200: "#CBCBCB",
    gray300: "#BEBEBE",
    gray400: "#A8A8A8",
    gray500: "#9B9B9B",
    purple: "#6200F0",
  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px",
  },
  breakpoint,
  mediaQuery: {
    mobile: `screen and (min-width: ${breakpoint.mobile})`,
    tablet: `screen and (min-width: ${breakpoint.tablet})`,
    desktop: `screen and (min-width: ${breakpoint.desktop})`,
  },
};

export default theme;
