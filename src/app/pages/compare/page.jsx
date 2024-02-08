"use client";

import CodeBlock from "@/Components/CodeBlock";
import {
  easierNaturalData,
  efficiencyQuery,
  efficiencyQueryDesc,
  efficiencyQueryDescGraph,
  efficiencyQueryDescRDBMS,
  graphSearchAnalysis,
  schemaFlexData,
  summaryEasierNaturalData,
  tabTitle,
} from "@/app/MappingData";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
// import StickyTabs from "@/Components/StickyTabs";
// import StickyHeader from "@/Components/StickyHeader";
import Footer from "@/Components/footer/Footer";

const Images = styled(Image)({});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // const [scrollValue, setScrollValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
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

export default function ComparePages() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container
        width="100%"
        sx={(theme) => ({
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1390px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 134px",
            marginBottom: "50px",
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
            <Typography
              variant="sectionTitle"
              sx={(theme) => ({
                textTransform: "initial",
              })}
            >
              Graph Database vs RDBMS
            </Typography>
            <Divider
              variant="middle"
              sx={(theme) => ({
                maxWidth: "150px",
                margin: "0 auto",
                backgroundColor: "bluePrimary",
                borderBottomWidth: "3.5px",
                borderRadius: "30px",
                marginTop: "5px",
                marginBottom: "20px",
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
            Graph Databases and RDBMS (Relational Database Management System)
            have different approaches to data storage and manipulation. Graph
            Database, with its graphical representation, provides advantages in
            more natural data modeling, schema flexibility, efficient queries,
            and graph search analysis.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              border: "none",
              padding: "8px",
              backgroundColor: "blueTeritary",
              borderRadius: "16px",
              margin: "0 auto",
              // position: "fixed",
              width: "100%",
              top: "0",
              zIndex: 9999,
              // position: "fixed",
              // zIndex: "990",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="Compare Tabs"
              sx={(theme) => ({
                // margin: "0 auto",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                [theme.breakpoints.up("md")]: {
                  "& .css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root.Mui-disabled": {
                    display: "none",
                  }
                }
                // "& .MuiTabs-flexContainer": {
                //   justifyContent: "center",
                // },
                // padding: "8px",
              })}
            >
              {tabTitle.map((item, idx) => {
                return (
                  <Tab
                    key={idx}
                    label={item}
                    sx={{
                      flex: "1",
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
              <Grid
                container
                sx={(theme) => ({
                  marginBottom: "15px",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                <Grid item xs={12} md={6}>
                  <Typography variant="tabTitle">Graph Database</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={(theme) => ({
                    paddingLeft: "50px",
                    [theme.breakpoints.down("md")]: {
                      paddingLeft: 0,
                    },
                  })}
                >
                  <Typography variant="tabTitle">RDBMS</Typography>
                </Grid>
              </Grid>
              {easierNaturalData.map((item, idx) => {
                return (
                  <Grid
                    container
                    key={idx}
                    sx={(theme) => ({
                      marginBottom: "30px",
                    })}
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingRight: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingRight: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleGraph}
                      </Typography>
                      <CodeBlock
                        code={item.graphCode}
                        language={item.languageGraph}
                      ></CodeBlock>
                      <Typography variant="tabContentSubtitle">
                        {item.descGraph}
                      </Typography>
                      <Box sx={{ marginTop: "25px" }}>
                        <Images
                          sx={{ marginTop: "25px", margin: "0 auto" }}
                          src={item.imageCodeGraph}
                          width={421}
                          height={273}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingLeft: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingLeft: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleRDBMS}
                      </Typography>
                      <CodeBlock
                        code={item.rdbmsCode}
                        language={item.languageRDBMS}
                      ></CodeBlock>
                      <Typography variant="tabContentSubtitle">
                        {item.descRDBMS}
                      </Typography>
                      <Box sx={{ marginTop: "25px" }}>
                        <Images
                          sx={{ margin: "0 auto" }}
                          src={item.imageCodeRDBMS}
                          width={473}
                          height={273}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                );
              })}
              <Divider
                sx={(theme) => ({
                  // maxWidth: "80px",
                  // marginBottom: "35px",
                  backgroundColor: "grey2",
                  borderBottomWidth: "1.5px",
                  borderRadius: "30px",
                  margin: "0 auto",
                  marginBottom: "35px",
                })}
              />
              <Box>
                <Typography
                  variant="summaryTitle"
                  sx={(theme) => ({
                    marginBottom: "10px",
                  })}
                >
                  Summary
                </Typography>
                <Box
                  sx={(theme) => ({
                    paddingLeft: "10px",
                    marginBottom: "10px",
                  })}
                >
                  {summaryEasierNaturalData.map((item, idx) => {
                    return (
                      <Box
                        key={idx}
                        sx={(theme) => ({
                          marginBottom: "10px",
                        })}
                      >
                        <Typography
                          variant="summarySubTitle"
                          sx={(theme) => ({
                            marginBottom: "5px",
                          })}
                        >
                          {item.title}
                        </Typography>
                        <Box
                          sx={(theme) => ({
                            paddingLeft: "10px",
                          })}
                        >
                          <Typography variant="summaryDesc">
                            {item.desc1}
                          </Typography>
                          <Typography variant="summaryDesc">
                            {item.desc2}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Typography variant="summaryDesc">
                  By using a specially designed query language such as Cypher,
                  Graph Databases provide a way that is closer to the way humans
                  think about relationships between entities. This is especially
                  useful when working with data that has complex and dynamic
                  relationship structures.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                sx={(theme) => ({
                  marginBottom: "15px",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                <Grid item xs={12} md={6}>
                  <Typography variant="tabTitle">Graph Database</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={(theme) => ({
                    paddingLeft: "50px",
                    [theme.breakpoints.down("md")]: {
                      paddingLeft: 0,
                    },
                  })}
                >
                  <Typography variant="tabTitle">RDBMS</Typography>
                </Grid>
              </Grid>
              {schemaFlexData.map((item, idx) => {
                return (
                  <Grid
                    container
                    key={idx}
                    sx={(theme) => ({
                      marginBottom: "30px",
                    })}
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingRight: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingRight: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleGraph}
                      </Typography>
                      <CodeBlock
                        code={item.graphCode}
                        language={item.languageGraph}
                      ></CodeBlock>
                      <Typography variant="tabContentSubtitle">
                        {item.descGraph}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingLeft: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingLeft: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleRDBMS}
                      </Typography>
                      <CodeBlock
                        code={item.rdbmsCode}
                        language={item.languageRDBMS}
                      ></CodeBlock>
                      <Typography variant="tabContentSubtitle">
                        {item.descRDBMS}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
              <Divider
                sx={(theme) => ({
                  // maxWidth: "80px",
                  // marginBottom: "35px",
                  backgroundColor: "grey2",
                  borderBottomWidth: "1.5px",
                  borderRadius: "30px",
                  margin: "0 auto",
                  marginBottom: "35px",
                })}
              />
              <Box>
                <Typography
                  variant="summaryTitle"
                  sx={(theme) => ({
                    marginBottom: "10px",
                  })}
                >
                  Summary
                </Typography>
                <Typography variant="summaryDesc">
                  Schema flexibility is one of the main advantages of Graph
                  Databases, and the example queries are given to show how Graph
                  Databases can easily handle schema changes without requiring
                  the complex steps required by a Relational Database Management
                  System (RDBMS). Graph Database demonstrates excellence in
                  schema flexibility, where the addition of new properties or
                  relationships can be done without global schema changes and
                  with a more direct and intuitive syntax. This provides
                  flexibility and ease in managing and customizing data
                  structures based on application needs without sacrificing
                  performance or complexity.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                sx={(theme) => ({
                  marginBottom: "15px",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                <Grid item xs={12} md={6}>
                  <Typography variant="tabTitle">Graph Database</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={(theme) => ({
                    paddingLeft: "50px",
                    [theme.breakpoints.down("md")]: {
                      paddingLeft: 0,
                    },
                  })}
                >
                  <Typography variant="tabTitle">RDBMS</Typography>
                </Grid>
              </Grid>
              {graphSearchAnalysis.map((item, idx) => {
                return (
                  <Grid
                    container
                    key={idx}
                    sx={(theme) => ({
                      marginBottom: "30px",
                    })}
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingRight: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingRight: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleGraph}
                      </Typography>
                      <CodeBlock
                        code={item.graphCode}
                        language={item.languageGraph}
                      ></CodeBlock>
                      <Box sx={{ marginBottom: "25px" }}>
                        <Images
                          sx={{ marginTop: "25px", margin: "0 auto" }}
                          src={item.imageCodeGraph}
                          width={421}
                          height={190}
                        />
                      </Box>
                      <Typography variant="tabContentSubtitle">
                        {item.descGraph1}
                      </Typography>
                      <Typography variant="tabContentSubtitle">
                        {item.descGraph2}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingLeft: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingLeft: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleRDBMS}
                      </Typography>
                      <CodeBlock
                        code={item.rdbmsCode}
                        language={item.languageRDBMS}
                      ></CodeBlock>
                      <Box sx={{ marginBottom: "25px" }}>
                        <Images
                          sx={{ margin: "0 auto" }}
                          src={item.imageCodeRDBMS}
                          width={500}
                          height={200}
                        />
                      </Box>
                      <TableContainer
                        sx={{
                          width: "fit-content",
                          borderRadius: "5px",
                          margin: "0 auto",
                          marginBottom: "15px",
                        }}
                      >
                        <Table
                          sx={{ width: "200px", borderRadius: "20px" }}
                          aria-label="table-code"
                        >
                          <TableBody>
                            <TableRow>
                              <TableCell
                                sx={{
                                  border: "solid 2px grey",
                                  padding: "10px",
                                }}
                              >
                                commonFriend
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                sx={{
                                  border: "solid 2px grey",
                                  padding: "10px",
                                }}
                              >
                                David
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Typography variant="tabContentSubtitle">
                        {item.descRDBMS}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
              <Divider
                sx={(theme) => ({
                  // maxWidth: "80px",
                  // marginBottom: "35px",
                  backgroundColor: "grey2",
                  borderBottomWidth: "1.5px",
                  borderRadius: "30px",
                  margin: "0 auto",
                  marginBottom: "35px",
                })}
              />
              <Box>
                <Typography
                  variant="summaryTitle"
                  sx={(theme) => ({
                    marginBottom: "10px",
                  })}
                >
                  Summary
                </Typography>
                <Typography variant="summaryDesc">
                  Graph Database shows advantages in terms of efficiency and
                  clarity of syntax in the context of graph search analysis.
                  Cypher allows for more direct and intuitive query
                  construction, while RDBMS may require more steps and
                  complexity in query structure to achieve similar results. In
                  graph analysis scenarios, Graph Databases often provide more
                  optimal solutions.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                sx={(theme) => ({
                  marginBottom: "15px",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                <Grid item xs={12} md={6}>
                  <Typography variant="tabTitle">Graph Database</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={(theme) => ({
                    paddingLeft: "50px",
                    [theme.breakpoints.down("md")]: {
                      paddingLeft: 0,
                    },
                  })}
                >
                  <Typography variant="tabTitle">RDBMS</Typography>
                </Grid>
              </Grid>
              {efficiencyQuery.map((item, idx) => {
                return (
                  <Grid
                    container
                    key={idx}
                    sx={(theme) => ({
                      marginBottom: "30px",
                    })}
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingRight: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingRight: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleGraph}
                      </Typography>
                      <CodeBlock
                        code={item.graphCode}
                        language={item.languageGraph}
                      ></CodeBlock>
                      <Box sx={{ marginBottom: "25px" }}>
                        <Images
                          sx={{ marginTop: "25px", margin: "0 auto" }}
                          src={item.imageCodeGraph}
                          width={421}
                          height={190}
                        />
                      </Box>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "10px",
                          marginBottom: "10px",
                        })}
                      >
                        {efficiencyQueryDescGraph.map((item, idx) => {
                          return (
                            <Box
                              key={idx}
                              sx={(theme) => ({
                                marginBottom: "10px",
                              })}
                            >
                              <Typography
                                variant="tabContentTitle"
                                sx={(theme) => ({
                                  marginBottom: "5px",
                                })}
                              >
                                {item.title}
                              </Typography>
                              <Box
                                sx={(theme) => ({
                                  paddingLeft: "10px",
                                })}
                              >
                                <Typography variant="tabContentSubtitle">
                                  {item.desc1}
                                </Typography>
                                <Typography variant="tabContentSubtitle">
                                  {item.desc2}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={(theme) => ({
                        paddingLeft: "50px",
                        [theme.breakpoints.down("md")]: {
                          paddingLeft: 0,
                        },
                      })}
                    >
                      <Typography variant="tabContentTitle" marginBottom="30px">
                        {item.titleRDBMS}
                      </Typography>
                      <CodeBlock
                        code={item.rdbmsCode}
                        language={item.languageRDBMS}
                      ></CodeBlock>
                      <Box sx={{ marginBottom: "25px" }}>
                        <Images
                          sx={{ margin: "0 auto" }}
                          src={item.imageCodeRDBMS}
                          width={500}
                          height={250}
                        />
                      </Box>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "10px",
                          marginBottom: "10px",
                        })}
                      >
                        {efficiencyQueryDescRDBMS.map((item, idx) => {
                          return (
                            <Box
                              key={idx}
                              sx={(theme) => ({
                                marginBottom: "10px",
                              })}
                            >
                              <Typography
                                variant="tabContentTitle"
                                sx={(theme) => ({
                                  marginBottom: "5px",
                                })}
                              >
                                {item.title}
                              </Typography>
                              <Box
                                sx={(theme) => ({
                                  paddingLeft: "10px",
                                })}
                              >
                                <Typography variant="tabContentSubtitle">
                                  {item.desc1}
                                </Typography>
                                <Typography variant="tabContentSubtitle">
                                  {item.desc2}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Grid>
                  </Grid>
                );
              })}
              <Divider
                sx={(theme) => ({
                  // maxWidth: "80px",
                  // marginBottom: "35px",
                  backgroundColor: "grey2",
                  borderBottomWidth: "1.5px",
                  borderRadius: "30px",
                  margin: "0 auto",
                  marginBottom: "35px",
                })}
              />
              <Box>
                <Typography
                  variant="summaryTitle"
                  sx={(theme) => ({
                    marginBottom: "10px",
                  })}
                >
                  Summary
                </Typography>
                <Typography variant="summaryDesc">
                  Graph Database, as demonstrated by Cypher queries, stands out
                  in efficiency and syntactic clarity when performing graph
                  traversing operations. A data structure closer to the way
                  humans think about relationships makes it more efficient for
                  this kind of task. Graph Database is specifically designed to
                  perform graph traversing on the fly. In this data structure,
                  searching for entities and their relationships becomes more
                  efficient than JOIN operations in RDBMS. The
                  easy-to-understand syntax and operational efficiency make
                  Graph Database a good choice for applications that require
                  queries involving complex relationship structures.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
        {/* <StickyHeader></StickyHeader> */}
      </Container>
      <Footer />
    </>
  );
}
