import theme from '@/styles/theme';

declare module '@types/styled-components' {
  export interface Theme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
    lineHeight: typeof theme.lineHeight;
    breakpoint: typeof theme.breakpoint;
  }
}
