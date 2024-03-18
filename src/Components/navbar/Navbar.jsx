"use client";

import { cloneElement, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Slide, styled, useScrollTrigger } from "@mui/material";
import { theme } from "@/app/theme";
// import HideScroll from "../footer/Footer";
import PropTypes from "prop-types";

const pages = [
  { title: "Home", menuLink: "/" },
  { title: "Feature", menuLink: "#" },
  { title: "Use Case", menuLink: "#" },
  { title: "Contact", menuLink: "#" },
  { title: "Try it Now!", menuLink: "#" },
];

const Images = styled(Image)({});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar
        // position="sticky"
        sx={(theme) => ({
          backgroundColor: "primary.main",
          marginBottom: "64px",

          [theme.breakpoints.down("md")]: {
            marginBottom: 0,
          },
        })}
        position="static"
      >
        <Container
          id="back-to-top-anchor"
          component="nav"
          maxWidth="xl"
          sx={{
            justifyContent: "end",
            "&.MuiContainer-root": {
              padding: 0,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={(theme) => ({
              padding: "10px 75px",
              [theme.breakpoints.down("md")]: { padding: "10px 30px" },
            })}
          >
            <Images
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              src="/logo.png"
              alt="peruri-graph-logo"
              width={80}
              height={80}
              priority={true}
            />
            <Images
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              src="/logo.png"
              alt="peruri-graph-logo"
              width={40}
              height={40}
              priority={true}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ fontSize: "25px", color: "bluePrimary" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, idx) => (
                  <MenuItem
                    key={idx}
                    href={page.menuLink}
                    onClick={handleCloseNavMenu}
                    sx={{
                      minHeight: "20px",
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={(theme) => ({
                        fontSize: "12px",
                      })}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "50px",
              }}
            >
              {pages.map((page, idx) => (
                <Button
                  key={idx}
                  href={page.menuLink}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
