import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  // colors
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    grey: "#535353"
  },
  // typography
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  fonts: {
    heading: "Steelfish, sans-serif",
    body: '"font-family: proxima_nova,"Helvetica Neue",Helvetica,Arial,sans-serif;'
  },
  breakpoints: [200, 640, 768, 1024, 1440]
};

// alias for breakpoints
theme.breakpoints.xs = `${theme.breakpoints[0]}px`;
theme.breakpoints.sm = `${theme.breakpoints[1]}px`;
theme.breakpoints.md = `${theme.breakpoints[2]}px`;
theme.breakpoints.lg = `${theme.breakpoints[3]}px`;
theme.breakpoints.xl = `${theme.breakpoints[4]}px`;

export default theme;
