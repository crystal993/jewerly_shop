import { Theme } from "styled-components";

const breakpoint = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1280px",
};

const theme: Theme = {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      lightgray: "#BEBEBE",
      darkgray: "#9B9B9B",
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
  };
  

export default theme;