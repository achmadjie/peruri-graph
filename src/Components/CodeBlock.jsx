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
        marginBottom: "30px",
        height: "fit-content",
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
            fontSize: "16px",
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
              <Typography>Copied!</Typography>
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
                  fontSize: "20px",
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
        customStyle={{ backgroundColor: "transparent", fontSize: "13px" }}
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
