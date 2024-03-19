import { ContentCopy } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import cypher from "highlightjs-cypher";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { sql } from "react-syntax-highlighter/dist/esm/languages/hljs";

SyntaxHighlighter.registerLanguage("cypher", cypher);
SyntaxHighlighter.registerLanguage("sql", sql);

const CopyToClipboardStyled = styled(CopyToClipboard)({});

export default function CodeBlock({ code, language }) {
  // console.log({ language });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    console.log("Copied!");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box
      position="relative"
      sx={(theme) => ({
        backgroundColor: "grey.main",
        padding: "20px 30px",
        borderRadius: "7px",
        marginBottom: "10px",
        height: "fit-content",
        [theme.breakpoints.down("md")]: {
          marginBottom: "7px",
          padding: "15px 20px",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          // position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          top: 0,
          right: 0,
          // padding: "16px",
        })}
      >
        <Typography
          sx={(theme) => ({
            margin: "8px",
            // flexBasis: "3/4",
            fontSize: "clamp(0.75rem, 0.36vw + 0.65rem, 1rem)",
            color: "bluePrimary",
            fontWeight: 600,
            textTransform: "capitalize",
          })}
        >
          {language}
        </Typography>
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <CopyToClipboardStyled text={code} onCopy={copy}>
            {copied ? (
              <Typography
                sx={(theme) => ({
                  fontSize: "clamp(0.75rem, 0.36vw + 0.65rem, 1rem);",
                  [theme.breakpoints.down("md")]: {},
                })}
              >
                Copied!
              </Typography>
            ) : (
              // <CheckCircle
              //   sx={(theme) => ({
              //     fontSize: "20px",
              //     color: "bluePrimary",
              //     fontWeight: 500,
              //     margin: "8px",
              //     // basis: "1/4",
              //   })}
              // />
              <ContentCopy
                sx={(theme) => ({
                  fontSize: "clamp(0.94rem, 0.45vw + 0.82rem, 1.25rem);",
                  margin: "8px",
                  // basis: "1/4",
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.7,
                  },
                })}
              />
            )}
          </CopyToClipboardStyled>
        </Box>
      </Box>
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "transparent",
          fontSize: "clamp(0.63rem, 0.27vw + 0.55rem, 0.81rem);",
        }}
        language={language}
        style={atomOneLight}
        wrapLines={true}
        wrapLongLines={false}
        showLineNumbers={true}
        showInlineLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
