"use client";

import { Box, Container, Divider, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Images = styled(Image)({});
const Links = styled(Link)({});

export default function Footer() {
  return (
    <Container
      component={"section"}
      position="realtive"
      sx={(theme) => ({
        backgroundColor: "bluePrimary",
        color: "black",
        marginTop: "100px",
        height: "100%",
        "&.MuiContainer-root": {
          maxWidth: "100%",
          padding: "60px 350px",
        },
        [theme.breakpoints.down("md")]: {
          "&.MuiContainer-root": {
            maxWidth: "100%",
            padding: "35px 40px",
          },
        },
      })}
    >
      <Box
        component="footer"
        sx={(theme) => ({
          backgroundColor: "bluePrimary",
          color: "black",
          // marginTop: "100px",
          height: "100%",
          textAlign: "center",
        })}
      >
        <Box
          position={"relative"}
          sx={(theme) => ({
            width: "100%",
            height: "60px",
            marginBottom: "20px",
            [theme.breakpoints.down("md")]: {
              height: "30px",
              marginBottom: "15px",
            },
          })}
        >
          <Images
            src={"/peruri-logo.png"}
            // position="relative"
            fill
            alt="peruri-logo"
            sx={(theme) => ({
              objectFit: "contain",
            })}
          />
        </Box>
        <Divider
          sx={(theme) => ({
            backgroundColor: "white",
            borderBottomWidth: ".5px",
            borderRadius: "30px",
            marginBottom: "20px",
            [theme.breakpoints.down("md")]: {
              marginBottom: "15px",
            },
          })}
        />
        <Typography
          sx={(theme) => ({
            fontSize: "1rem",
            fontWeight: "500",
            color: "grey.main",
            [theme.breakpoints.down("md")]: {
              fontSize: "0.6rem",
            },
          })}
        >
          Copyright © Perum Peruri. All rights reserved |{" "}
          <Links
            href={"#"}
            sx={(theme) => ({
              fontWeight: 500,
              textDecoration: "unset",
              color: "grey.main",
              fontSize: "1rem",
              "&:hover": {
                textDecoration: "underline",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: ".6rem",
              },
            })}
          >
            Privacy Policy
          </Links>
        </Typography>
      </Box>
    </Container>
  );
}
