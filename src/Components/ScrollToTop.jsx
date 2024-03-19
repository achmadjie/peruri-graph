"use client";

import { Box, Button, Fade, useScrollTrigger } from "@mui/material";

export default function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  // console.log({ trigger });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: "15" }}
      >
        <Button
          variant="contained"
          sx={(theme) => ({
            padding: "7px 15px",
            borderRadius: "20px",
            fontSize: "clamp(0.56rem, 0.18vw + 0.51rem, 0.69rem);",
            "&:hover": {
              backgroundColor: "primary.main",
            },
            [theme.breakpoints.down("md")]: {
              padding: "7px 10px",
            },
          })}
        >
          Back to Top
        </Button>
      </Box>
    </Fade>
  );
}
