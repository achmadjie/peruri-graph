import { theme } from "@/app/theme";
import { SvgIcon } from "@mui/material";
import React from "react";

export default function HomeBanner() {
  return (
    <SvgIcon
      sx={(theme) => ({
        position: "absolute",
        pointerEvents: "none",
        width: "650px",
        height: "535px",
        left: 0,
        [theme.breakpoints.down("md")]: {
          width: "100%",
          // inset: "0",
          left: "unset",
          height: "auto",
        },
      })}
    >
      <svg
        width="670"
        height="550"
        viewBox="0 0 670 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <path
            d="M167.5 -74H335L502.5 93.5V261L335 93.5L167.5 -74Z"
            fill="#D9E7F4"
          />
          <path
            d="M167.5 93.5H335L167.5 261L0 428.5V261L167.5 93.5Z"
            fill="#D9E7F4"
          />
          <path
            d="M167.5 428.5V261L335 428.5L502.5 596H335L167.5 428.5Z"
            fill="#D9E7F4"
          />
          <path
            d="M502.5 428.5H335L502.5 261L670 93.5V261L502.5 428.5Z"
            fill="#D9E7F4"
          />
          <path d="M502.5 428.5V596H670V428.5H502.5Z" fill="#D9E7F4" />
          <path d="M167.5 428.5H0V596H167.5V428.5Z" fill="#D9E7F4" />
          <path d="M167.5 93.5H0V-74H167.5V93.5Z" fill="#D9E7F4" />
          <path d="M670 93.5H502.5V-74H670V93.5Z" fill="#D9E7F4" />
        </g>
      </svg>
    </SvgIcon>
  );
}
