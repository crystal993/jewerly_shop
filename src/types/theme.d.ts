import theme from "styled-components";

declare module "styled-components" {
  export interface Theme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
    breakpoint: typeof theme.breakpoint;
    mediaQuery: typeof theme.mediaQuery;
  }
}
