"use client";

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import HomeBanner from "../../../../public/abstract/HomeBanner";
import {
  CardRecommendationEngineData,
  easierNaturalData,
  efficiencyQuery,
  efficiencyQueryDescGraph,
  efficiencyQueryDescRDBMS,
  schemaFlexData,
  summaryEasierNaturalData,
  tabTitle,
  tabTitleRecommen,
} from "@/app/MappingData";
import CodeBlock from "@/Components/CodeBlock";

const Images = styled(Image)({});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // const [scrollValue, setScrollValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RecommendationEnginePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container
        component="section"
        sx={(theme) => ({
          padding: "0 74px",
          [theme.breakpoints.down("md")]: { padding: "0" },
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1400px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "500px",
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
          <Box
            flex={2}
            sx={(theme) => ({
              width: "fit-content",
            })}
          >
            <Typography
              variant="title"
              // position={"absolute"}
              sx={(theme) => ({
                // marginLeft: "70px",
                width: "100%",
                maxWidth: "600px",
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
              Uses Cases: Recommendation Engine
            </Typography>
            <Typography
              variant="subTitle"
              // position={"absolute"}
              sx={(theme) => ({
                Width: "100%",
                maxWidth: "600px",
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
              Fraud is a financial drain, a risk for businesses and consumers
              alike. With fraud attempts skyrocketing, how can you identify
              fraud in time to stop it? Graph-based approaches to detecting
              fraud analyze complex linkages between people, transactions, and
              institutions. Peruri Graph Analytics effectively reveals patterns
              of fraud and surfaces anomalies.
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
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1400px",
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
                // display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "35px",
                [theme.breakpoints.down("md")]: {
                  gap: "5px",
                },
              })}
            >
              <Typography variant="sectionTitle">What will You Do</Typography>
              <Divider
                sx={(theme) => ({
                  maxWidth: "80px",
                  margin: "0 auto",
                  backgroundColor: "bluePrimary",
                  borderBottomWidth: "4px",
                  borderRadius: "30px",
                })}
              />
            </Box>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexWrap: "wrap",
              rowGap: "45px",
              columnGap: "30px",
              marginTop: "60px",
              // marginBottom: "100px",
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                gap: "20px",
                marginTop: "25px",
              },
            })}
          >
            {CardRecommendationEngineData.map((item) => {
              return (
                <Paper
                  key={item.id}
                  sx={(theme) => ({
                    backgroundColor: "bluePrimary",
                    width: "100%",
                    maxWidth: "250px",
                    padding: "20px",
                    borderRadius: "20px",
                    [theme.breakpoints.down("md")]: {
                      maxWidth: "270px",
                      padding: "25px",
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      // display: "flex",
                      // flexDirection: "row",
                      // gap: "10px",
                      width: "fit-content",
                      margin: "0 auto",
                      marginBottom: "10px",
                      [theme.breakpoints.down("md")]: {
                        marginBottom: "15px",
                      },
                    })}
                  >
                    <item.icon
                      sx={(theme) => ({
                        "&.MuiSvgIcon-root": {
                          width: "60px",
                          height: "60px",
                          color: "white",
                        },
                      })}
                    />
                  </Box>
                  <Typography
                    variant="cardSubTitle"
                    sx={(theme) => ({
                      textAlign: "center",
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
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              position: "sticky",
              top: "0",
              zIndex: 10,
              paddingBlock: "2rem",
              backgroundColor: "primary.main",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              // scrollButtons
              allowScrollButtonsMobile
              aria-label="Compare Tabs"
              sx={(theme) => ({
                border: "none",
                padding: "8px",
                backgroundColor: "blueTeritary",
                borderRadius: "16px",
                margin: "0 auto",
                width: "100%",
                // isolation: "isolate",
                // position: "fixed",
                // zIndex: "990",
                // margin: "0 auto",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              })}
            >
              {tabTitleRecommen.map((item, idx) => {
                return (
                  <Tab
                    key={idx}
                    label={item}
                    sx={{
                      flex: 1,
                      fontSize: "clamp(0.5rem, 0.72vw + 0.31rem, 1rem)",
                    }}
                    {...a11yProps(idx)}
                  />
                );
              })}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid item xs={10}>
                  <Paper>xs=8</Paper>
                </Grid>
                <Grid item xs={2} sx={{ paddingLeft: "40px" }}>
                  <Box maxWidth="200px">
                    <Typography variant="navTitle">On This Page</Typography>
                    <Box>
                      <Typography variant="navSubtitle">Dataset</Typography>
                      <Typography
                        variant="navSubtitle"
                        sx={{ paddingLeft: "10px" }}
                      >
                        Nodes
                      </Typography>
                      <Typography
                        variant="navSubtitle"
                        sx={{ paddingLeft: "10px" }}
                      >
                        Relationships
                      </Typography>
                      <Typography variant="navSubtitle">
                        Nodes and Relationships in Northwind Graph
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
          <CustomTabPanel value={value} index={2}></CustomTabPanel>
        </Box>
      </Container>
    </Box>
  );
}
