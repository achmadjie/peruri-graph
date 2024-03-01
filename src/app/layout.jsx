import { Inter } from "next/font/google";
import "./globals.css";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { ThemeProvider } from "@mui/material";
import Navbar from "@/Components/navbar/Navbar";
import { theme } from "./theme";
import Footer from "@/Components/footer/Footer";
import ScrollToTop from "@/Components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          <ScrollToTop />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
