import styled from "@emotion/styled";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Images = styled(Image)({});
const Links = styled(Link)({});

export default function Footer() {
  return (
    <Container
      sx={(theme) => ({
        backgroundColor: "bluePrimary",
        color: "black",
        marginTop: "100px",
        height: "100dvh",
        mx: "0 auto",
      })}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: "bluePrimary",
          color: "black",
          marginTop: "100px",
          height: "100%",
          mx: "0 auto",
        })}
      >
        <Images
          src={"/peruri-logo.png"}
          width={70}
          height={30}
          alt="peruri-logo"
        />
        <Divider
          sx={(theme) => ({
            maxWidth: "450px",
            backgroundColor: "white",
            borderBottomWidth: ".5px",
            borderRadius: "30px",
          })}
        />
        <Typography
          sx={(theme) => ({
            fontSize: "0.813rem",
            fontWeight: "500",
            color: "grey.main",
          })}
        >
          Copyright © Perum Peruri. All rights reserved |{" "}
          <Links
            href={"#"}
            sx={(theme) => ({
              color: "grey1",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "unset",
              mx: "auto",
              "&:hover": {
                textDecoration: "underline",
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
