"use client";

import {
  Box,
  Typography,
  styled,
  Divider,
  Paper,
  Button,
  Container,
  Stack,
} from "@mui/material";
import React from "react";
import HomeBanner from "../../../public/abstract/HomeBanner";
import Image from "next/image";
import { CardHomeData, contactData, useCaseData } from "../MappingData";
import { theme } from "../theme";
import { ArrowCircleRightRounded, WhatsApp } from "@mui/icons-material";
import Link from "next/link;
import Footer from "@/Components/footer/Footer";

const Images = styled(Image)({});
const Links = styled(Link)({});

export default function Homepage() {
  return (
    <Box>
      <Container
        component="section"
        sx={(theme) => ({
          padding: "0 74px",
          [theme.breakpoints.down("md")]: { padding: "0" },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            // height: "500px",
            // gap: "30px",
            alignItems: "center",
            backgroundColor: "bluePrimary",
            borderRadius: "30px",
            position: "relative",
            display: "flex",
            padding: "25px 70px",
            [theme.breakpoints.down("md")]: {
              // maxWidth: "450px",
              flexDirection: "column-reverse",
              gap: "30px",
              justifyContent: "center",
              textAlign: "center",
              // height: "200px",
              borderRadius: "0",
              padding: "45px 25px",
              height: "100%",
            },
          })}
        >
          <HomeBanner />
          <Box flex={2}>
            <Typography
              variant="title"
              // position={"absolute"}
              sx={(theme) => ({
                // marginLeft: "70px",
                width: "100%",
                maxWidth: "670px",
                marginBottom: "25px",
                fontSize: "clamp(1.46rem, 1.31vw + 1.11rem, 2.37rem)",
                [theme.breakpoints.down("md")]: {
                  fontSize: "clamp(1.17rem, 0.88vw + 0.94rem, 1.78rem)",
                  lineHeight: "25px",
                  marginBottom: 0,
                  letterSpacing: "0.4px",
                  maxWidth: "100%",
                },
              })}
            >
              Unleash Your Data&apos;s Potential, Node by Node, for a
              Graph-Powered Advantage
            </Typography>
            <Typography
              variant="subTitle"
              // position={"absolute"}
              sx={(theme) => ({
                Width: "100%",
                maxWidth: "700px",
                letterSpacing: "0.56px",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                  fontSize: "9px",
                  // marginLeft: "31px",
                  maxWidth: "100%",
                  lineHeight: "10px",
                  letterSpacing: "0.28px",
                },
              })}
            >
              With Peruri Graph Analytics, we convert your data into a source of
              strength and a competitive edge for your business. Your data
              isn&apos;t just information; it&apos;s the key to your success.
            </Typography>
          </Box>
          <Box
            position={"relative"}
            sx={(theme) => ({
              // width: "100%",
              height: "380px",
              marginLeft: "70px",
              flex: 1,
              [theme.breakpoints.down("md")]: {
                marginLeft: "30px",
                width: "100%",
                height: "150px",
                minWidth: "130px",
                minHeight: "130px",
                flex: "unset",
                // display: "none",
              },
            })}
          >
            <Images
              src="/computer_banner.png"
              // width={500}
              // height={380}
              alt="computer-banner"
              fill
              sx={(theme) => ({
                objectFit: "contain",
                [theme.breakpoints.down("md")]: {
                  // width: "120px",
                  // height: "91px",
                },
              })}
            />
          </Box>
        </Box>
      </Container>
      <Container
        component={"section"}
        width="100%"
        // height="500px"
        sx={(theme) => ({
          padding: "0 200px",
          marginTop: "90px",
          [theme.breakpoints.down("md")]: {
            padding: "0 30px",
            marginTop: "50px",
          },
        })}
      >
        <Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 134px",
              [theme.breakpoints.down("md")]: {
                padding: "0 20px",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "35px",
                [theme.breakpoints.down("md")]: {
                  gap: "5px",
                },
              })}
            >
              <Typography variant="sectionTitle">Our Features</Typography>
              <Divider
                sx={(theme) => ({
                  maxWidth: "80px",
                  backgroundColor: "bluePrimary",
                  borderBottomWidth: "3px",
                  borderRadius: "30px",
                })}
              />
            </Box>
            <Typography
              variant="sectionSubTitle"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  lineHeight: "20px",
                  fontSize: "10px",
                },
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexWrap: "wrap",
              rowGap: "45px",
              columnGap: "30px",
              marginTop: "60px",
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                gap: "20px",
                marginTop: "25px",
              },
            })}
          >
            {CardHomeData.map((item) => {
              return (
                <Paper
                  key={item.id}
                  sx={(theme) => ({
                    backgroundColor: "bluePrimary",
                    width: "100%",
                    maxWidth: "290px",
                    padding: "30px",
                    borderRadius: "20px",
                    [theme.breakpoints.down("md")]: {
                      maxWidth: "270px",
                      padding: "25px",
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      marginBottom: "20px",
                      [theme.breakpoints.down("md")]: {
                        marginBottom: "15px",
                      },
                    })}
                  >
                    <item.icon
                      sx={(theme) => ({
                        "&.MuiSvgIcon-root": {
                          width: "50px",
                          height: "50px",
                          color: "white",
                        },
                      })}
                    />
                    <Typography
                      variant="cardTitle"
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          fontSize: "17px",
                        },
                      })}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="cardSubTitle"
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        fontSize: "12px",
                      },
                    })}
                  >
                    {item.subTitle}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Container>
      <Container
        component="section"
        sx={(theme) => ({
          padding: "0 74px",
          marginTop: "150px",
          [theme.breakpoints.down("md")]: {
            padding: "0",
            marginTop: "50px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            // height: "500px",
            // gap: "30px",
            alignItems: "center",
            backgroundColor: "bluePrimary",
            borderRadius: "30px",
            position: "relative",
            display: "flex",
            padding: "25px 70px",
            [theme.breakpoints.down("md")]: {
              // maxWidth: "450px",
              flexDirection: "column-reverse",
              gap: "15px",
              justifyContent: "center",
              textAlign: "center",
              // height: "200px",
              borderRadius: "0",
              padding: "25px",
              height: "100%",
            },
          })}
        >
          <HomeBanner />
          <Box
            flex={2}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {},
            })}
          >
            <Typography
              variant="title"
              // position={"absolute"}
              sx={(theme) => ({
                // marginLeft: "70px",
                width: "100%",
                maxWidth: "670px",
                marginBottom: "25px",
                fontSize: "clamp(1.46rem, 1.31vw + 1.11rem, 2.37rem)",
                [theme.breakpoints.down("md")]: {
                  fontSize: "clamp(1.17rem, 0.88vw + 0.94rem, 1.78rem)",
                  lineHeight: "25px",
                  marginBottom: "0",
                  letterSpacing: "0.4px",
                  maxWidth: "100%",
                },
              })}
            >
              Experience the difference with our exceptional product.
            </Typography>
            <Typography
              variant="subTitle"
              // position={"absolute"}
              sx={(theme) => ({
                Width: "100%",
                maxWidth: "700px",
                letterSpacing: "0.56px",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                  fontSize: "9px",
                  // marginLeft: "31px",
                  maxWidth: "100%",
                  lineHeight: "10px",
                  letterSpacing: "0.28px",
                },
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button
              variant="contained"
              sx={(theme) => ({
                // width: "fit-content",
                // height: "fit-content",
                marginTop: "20px",
                padding: "5px 12px",
                borderRadius: "25px",
                color: "bluePrimary",
                // position: "absolute",
                // bottom: "13%",
                // marginLeft: "70px",
                fontSize: "12px",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                },
                [theme.breakpoints.down("md")]: {
                  marginTop: "25px",
                  padding: "12px 70px",
                  fontSize: "13px",
                },
              })}
            >
              See Details
            </Button>
          </Box>
          <Box
            position={"relative"}
            sx={(theme) => ({
              // width: "100%",
              height: "380px",
              marginLeft: "70px",
              flex: 1,
              [theme.breakpoints.down("md")]: {
                marginRight: "80px",
                width: "100%",
                height: "150px",
                flex: "unset",
                // display: "none",
              },
            })}
          >
            <Images
              src="/compare_banner.png"
              // width={500}
              // height={380}
              alt="compare-banner"
              fill
              sx={(theme) => ({
                objectFit: "contain",
                [theme.breakpoints.down("md")]: {
                  // width: "120px",
                  // height: "91px",
                },
              })}
            />
          </Box>
        </Box>
      </Container>
      <Container
        variant="section"
        sx={(theme) => ({
          marginTop: "93px",
          // height: "500px",
          [theme.breakpoints.down("md")]: {
            marginTop: "50px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 134px",
            [theme.breakpoints.down("md")]: {
              padding: "0 20px",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "35px",
              [theme.breakpoints.down("md")]: {
                gap: "20px",
              },
            })}
          >
            <Typography variant="sectionTitle">Our Use Case</Typography>
            <Divider
              sx={(theme) => ({
                maxWidth: "80px",
                backgroundColor: "bluePrimary",
                borderBottomWidth: "3px",
                borderRadius: "30px",
              })}
            />
          </Box>
          <Typography
            variant="sectionSubTitle"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                lineHeight: "20px",
                fontSize: "11px",
              },
            })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "95px",
            [theme.breakpoints.down("md")]: {
              gap: "30px",
              padding: "30px 30px 0",
              marginTop: "0",
            },
          })}
        >
          <Stack
            flexDirection="row"
            // gap="250px"
            alignItems="center"
            sx={(theme) => ({
              gap: "200px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                gap: "25px",
              },
            })}
          >
            <Images
              src="/fraud_case.png"
              width={350}
              height={367}
              alt="fraud_case_pic"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  width: "170px",
                  height: "180px",
                },
              })}
            />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
                gap: "25px",
                [theme.breakpoints.down("md")]: {
                  gap: "10px",
                },
              })}
            >
              <Typography
                variant="sectionTitle"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {},
                })}
              >
                Fraud Detection
              </Typography>
              <Typography
                variant="sectionSubTitle"
                sx={(theme) => ({
                  textAlign: "justify",
                  lineHeight: "30px",
                  [theme.breakpoints.down("md")]: {
                    lineHeight: "20px",
                  },
                })}
              >
                Fraud is a financial drain, a risk for businesses and consumers
                alike. With fraud attempts skyrocketing, how can you identify
                fraud in time to stop it? Graph-based approaches to detecting
                fraud analyze complex linkages between people, transactions, and
                institutions.
              </Typography>
              <Button
                sx={(theme) => ({
                  display: "flex",
                  gap: "10px",
                  [theme.breakpoints.down("md")]: {
                    gap: "5px",
                  },
                })}
              >
                <Typography
                  sx={(theme) => ({
                    color: "bluePrimary",
                    fontSize: "16px",
                    fontWeight: 500,
                    [theme.breakpoints.down("md")]: {
                      fontSize: "11px",
                    },
                  })}
                >
                  Learn More
                </Typography>
                <ArrowCircleRightRounded
                  sx={{
                    color: "bluePrimary",
                    [theme.breakpoints.down("md")]: {
                      "&.MuiSvgIcon-root": {
                        fontSize: "1.2rem",
                      },
                    },
                  }}
                />
              </Button>
            </Box>
          </Stack>
          <Divider
            orientation="horizontal"
            sx={(theme) => ({
              borderBottomWidth: "2px",
            })}
          />
          <Stack
            flexDirection="row"
            // gap="250px"
            alignItems="center"
            sx={(theme) => ({
              gap: "200px",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column-reverse",
                gap: "25px",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
                gap: "25px",
                [theme.breakpoints.down("md")]: {
                  gap: "10px",
                },
              })}
            >
              <Typography
                variant="sectionTitle"
                sx={(theme) => ({
                  // fontSize: "36px",
                })}
              >
                Recommendation Engine
              </Typography>
              <Typography
                variant="sectionSubTitle"
                sx={(theme) => ({
                  textAlign: "justify",
                  lineHeight: "30px",
                  [theme.breakpoints.down("md")]: {
                    lineHeight: "20px",
                  },
                })}
              >
                Today&apos;s retailers face a number of complex and emerging
                challenges. To remain viable, they must be nimble enough to face
                their colossal online competition while also addressing another
                new reality: The customer is now at the center of the value
                chain.
              </Typography>
              <Button
                sx={(theme) => ({
                  display: "flex",
                  gap: "10px",
                  [theme.breakpoints.down("md")]: {
                    gap: "5px",
                  },
                })}
              >
                <Typography
                  sx={(theme) => ({
                    color: "bluePrimary",
                    fontSize: "16px",
                    fontWeight: 500,
                    [theme.breakpoints.down("md")]: {
                      fontSize: "11px",
                    },
                  })}
                >
                  Learn More
                </Typography>
                <ArrowCircleRightRounded
                  sx={{
                    color: "bluePrimary",
                    [theme.breakpoints.down("md")]: {
                      "&.MuiSvgIcon-root": {
                        fontSize: "1.2rem",
                      },
                    },
                  }}
                />
              </Button>
            </Box>
            <Images
              src="/recommendation_engine.png"
              width={350}
              height={367}
              alt="recommendation_case_pic"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  width: "170px",
                  height: "180px",
                },
              })}
            />
          </Stack>
        </Box>
      </Container>
      <Container
        variant="section"
        sx={(theme) => ({
          marginTop: "113px",
          height: "100%",
          [theme.breakpoints.down("md")]: {
            marginTop: "120px",
            padding: "0 35px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "35px",
            [theme.breakpoints.down("md")]: {
              gap: "25px",
            },
          })}
        >
          <Typography variant="sectionTitle">Contact</Typography>
          <Divider
            sx={(theme) => ({
              maxWidth: "80px",
              backgroundColor: "bluePrimary",
              borderBottomWidth: "3px",
              borderRadius: "30px",
            })}
          />
        </Box>
        <Stack
          gap="55px"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              gap: "35px",
            },
          })}
        >
          {contactData.map((item) => {
            return (
              <Box
                key={item.id}
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                })}
              >
                <Typography
                  variant="h3"
                  sx={(theme) => ({
                    color: "navbarFontColor",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "0.32px",
                    [theme.breakpoints.down("md")]: {
                      fontSize: "15px",
                    },
                  })}
                >
                  {item.title}
                </Typography>
                <Links
                  href={item.to}
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
                  <Typography
                    variant="cardSubTitle"
                    sx={(theme) => ({
                      color: "grey1",
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "17px",
                      width: "fit-content",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "14px",
                      },
                    })}
                  >
                    {item.subTitle}
                  </Typography>
                </Links>
              </Box>
            );
          })}
          <Links
            component="button"
            href="https://wa.link/ts5kog"
            sx={(theme) => ({
              backgroundColor: "#40C351",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              alignItems: "center",
              textDecoration: "unset",
              width: "100%",
              maxWidth: "fit-content",
              borderRadius: "10px",
              padding: "10px 35px",
              mx: "auto",
              boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.30)",
              [theme.breakpoints.down("md")]: {
                gap: "15px",
                padding: "15px 25px",
              },
            })}
          >
            <WhatsApp
              sx={(theme) => ({
                color: "white",
                fontSize: "4rem",
                [theme.breakpoints.down("md")]: {
                  fontSize: "2.5rem",
                },
              })}
            />
            <Typography
              variant="cardTitle"
              sx={(theme) => ({
                textTransform: "capitalize",
                fontSize: "16px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                },
              })}
            >
              Whatsapp Chat
            </Typography>
          </Links>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
