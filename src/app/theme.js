"use client";

import { createTheme } from "@mui/material";

import { Poppins, Montserrat, Open_Sans } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({ weight: ["500"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["500"], subsets: ["latin"] });

export const sticky = {
  position: "fixed",
  top: 0,
  width: "100%",
};

const colors = {
  primary: {
    main: "#F2F2F2",
  },
  navbarFontColor: "#4F4F4F",
  bluePrimary: "#034EA1",
  blueTeritary: "#D9E7F4",
  grey: { main: "#E0E0E0" },
  grey1: "#828282",
  grey2: "#BDBDBD",
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
        compareTab: 1300,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        fontFamily: poppins.style.fontFamily,
      },
    },
    MuiLink: {
      defaultProps: {
        fontFamily: poppins.style.fontFamily,
      },
      styleOverrides: {
        textDecoration: "unset",
      },
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
          links: "span",
          tabTitle: "h1",
          tabSubtitle: "p",
          tabContentTitle: "h1",
          tabContentSubtitle: "p",
          summaryTitle: "h1",
          summarySubTitle: "p",
          summaryDesc: "p",
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
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: colors.blueTeritary,
          // mx: "0 auto",
          // margin : "8px",
          color: colors.bluePrimary,
          // width: "100%",
          fontFamily: poppins.style.fontFamily,
          padding: "10px 15px",
          textTransform: "capitalize",
          "&.Mui-selected": {
            backgroundColor: colors.bluePrimary,
            color: colors.blueTeritary,
            borderRadius: "8px",
          },
          // "& .MuiTabs-indicator": {
          //   display: "none",
          // },
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
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
      fontSize: "clamp(0.75rem, 2.53vw + 0.07rem, 2.5rem)",
      fontWeight: "800",
      lineHeight: "55px",
      letterSpacing: "1.2px",
      color: "white",
    },
    subTitle: {
      color: colors.grey.main,
      textAlign: "justify",
      fontSize: "clamp(0.44rem, 0.63vw + 0.27rem, 0.88rem)",
      fontWeight: 500,
      lineHeight: "33px",
      letterSpacing: "0.56px",
    },
    sectionTitle: {
      color: colors.bluePrimary,
      fontSize: "clamp(1.06rem, 2.08vw + 0.5rem, 2.5rem)",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    sectionSubTitle: {
      color: colors.grey1,
      textAlign: "center",
      fontSize: "clamp(0.5rem, 0.45vw + 0.38rem, 0.81rem)",
      fontWeight: 500,
      lineHeight: "25px",
    },
    cardTitle: {
      color: "white",
      fontSize: "clamp(0.75rem, 0.45vw + 0.63rem, 1.06rem)",
      fontWeight: 600,
      textTransform: "Uppercase",
      letterSpacing: "1px",
    },
    cardSubTitle: {
      color: "white",
      textAlign: "justify",
      fontSize: "clamp(0.5rem, 0.36vw + 0.4rem, 0.75rem)",
      fontWeight: 400,
      opacity: 0.9,
    },
    tabTitle: {
      fontSize: "clamp(0.88rem, 1.63vw + 0.44rem, 2rem)",
      fontWeight: 700,
      color: colors.bluePrimary,
    },
    tabContentTitle: {
      fontSize: "clamp(0.75rem, 0.72vw + 0.56rem, 1.25rem)",
      color: colors.bluePrimary,
      fontWeight: 700,
    },
    tabContentSubtitle: {
      fontSize: "clamp(0.63rem, 0.18vw + 0.58rem, 0.75rem)",
      color: colors.navbarFontColor,
      textAlign: "justify",
      fontWeight: 400,
    },
    summaryTitle: {
      fontSize: "clamp(0.81rem, 0.99vw + 0.55rem, 1.5rem)",
      fontWeight: 700,
      color: colors.bluePrimary,
    },
    summarySubTitle: {
      fontSize: "clamp(0.75rem, 0.54vw + 0.6rem, 1.13rem)",
      fontWeight: 700,
      color: colors.bluePrimary,
    },
    summaryDesc: {
      fontSize: "clamp(0.63rem, 0.27vw + 0.55rem, 0.81rem)",
      textAlign: "justify",
      fontWeight: 500,
      color: colors.navbarFontColor,
    },
  },
});

// --font-size-xs: clamp(0.2rem, 0.16vw + 0.16rem, 0.32rem);
// --font-size-sm: clamp(0.26rem, 0.24vw + 0.19rem, 0.42rem);
// --font-size-md: clamp(0.32rem, 0.35vw + 0.23rem, 0.56rem);
// --font-size-lg: clamp(0.4rem, 0.51vw + 0.26rem, 0.75rem);
// --font-size-xl: clamp(0.5rem, 0.72vw + 0.31rem, 1rem);
