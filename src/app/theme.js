"use client";

import { createTheme } from "@mui/material";

import { Poppins, Montserrat, Open_Sans } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({ weight: ["500"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["500"], subsets: ["latin"] });

const colors = {
  primary: {
    main: "#F2F2F2",
  },
  navbarFontColor: "#4F4F4F",
  bluePrimary: "#034EA1",
  grey: { main: "#E0E0E0" },
  grey1: "#828282",
};

export const theme = createTheme({
  components: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    MuiLink: {
      defaultProps: {
        fontFamily: poppins.style.fontFamily,
      },
      styleOverrides: {
        textDecoration: "unset",
      }
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: [
          poppins.style.fontFamily,
          openSans.style.fontFamily,
          "sans-serif",
        ].join(","),
        variantMapping: {
          title: "h1",
          subTitle: "p",
          sectionTitle: "h1",
          sectionSubTitle: "p",
          cardTitle: "h1",
          cardSubTitle: "p",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        fontFamily: [
          montserrat.style.fontFamily,
          openSans.style.fontFamily,
        ].join(","),
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: [
            montserrat.style.fontFamily,
            openSans.style.fontFamily,
          ].join(","),
          fontSize: "15px",
          // color: "red",
          textTransform: "unset",
          padding: 0,
          minHeight: "20px",
          // marginRight: "55px",
          "&.MuiButton-text": {
            color: colors.navbarFontColor,
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
    },
  },
  palette: {
    ...colors,
  },
  typography: {
    navbarFont: {
      fontSize: "17px",
      color: colors.navbarFontColor,
    },
    title: {
      fontSize: "clamp(1.83rem, 1.92vw + 1.32rem, 3.16rem)",
      fontWeight: "800",
      lineHeight: "55px",
      letterSpacing: "1.2px",
      color: "white",
    },
    subTitle: {
      color: colors.grey.main,
      textAlign: "justify",
      fontSize: "clamp(0.75rem, 0.18vw + 0.7rem, 0.88rem)",
      fontWeight: 500,
      lineHeight: "33px",
      letterSpacing: "0.56px",
    },
    sectionTitle: {
      color: colors.bluePrimary,
      fontSize: "clamp(1.83rem, 1.92vw + 1.32rem, 3.16rem)",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    sectionSubTitle: {
      color: colors.grey1,
      textAlign: "center",
      fontSize: "clamp(0.75rem, 0.36vw + 0.65rem, 1rem)",
      fontWeight: 500,
      lineHeight: "25px",
    },
    cardTitle: {
      color: "white",
      fontSize: "17px",
      fontWeight: 600,
      textTransform: "Uppercase",
      letterSpacing: "1px",
    },
    cardSubTitle: {
      color: "white",
      textAlign: "justify",
      fontSize: "12px",
      fontWeight: 400,
      opacity: 0.9,
    },
  },
});

// --font-size-xs: clamp(0.75rem, 0.36vw + 0.65rem, 1rem);
// --font-size-sm: clamp(0.94rem, 0.57vw + 0.78rem, 1.33rem);
// --font-size-md: clamp(1.17rem, 0.88vw + 0.94rem, 1.78rem);
// --font-size-lg: clamp(1.46rem, 1.31vw + 1.11rem, 2.37rem);
// --font-size-xl: clamp(1.83rem, 1.92vw + 1.32rem, 3.16rem);

// --font-size-xs: clamp(0.75rem, 0.18vw + 0.7rem, 0.88rem);
// --font-size-sm: clamp(0.94rem, 0.33vw + 0.85rem, 1.17rem);
// --font-size-md: clamp(1.17rem, 0.55vw + 1.02rem, 1.55rem);
// --font-size-lg: clamp(1.46rem, 0.88vw + 1.23rem, 2.07rem);
// --font-size-xl: clamp(1.83rem, 1.35vw + 1.47rem, 2.76rem);
