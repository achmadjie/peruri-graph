"use client";

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import HomeBanner from "../../../../public/abstract/HomeBanner";
import {
  CardRecommendationEngineData,
  categoryList,
  customerList,
  easierNaturalData,
  efficiencyQuery,
  efficiencyQueryDescGraph,
  efficiencyQueryDescRDBMS,
  orderList,
  productList,
  relationshipList,
  schemaFlexData,
  summaryEasierNaturalData,
  tabTitle,
  tabTitleRecommen,
} from "@/app/MappingData";
// import CodeBlock from "@/Components/CodeBlock";
import ScrollSpy from "react-ui-scrollspy";
import Link from "next/link";
import CodeBlock from "@/Components/CodeBlock";

const Images = styled(Image)({});
const Links = styled(Link)({});
const importantText = styled(Typography)({
  fontWeight: 400,
  color: "bluePrimary",
  fontSize: "tabSubtitle",
});
const ScrollSpyMUI = styled(ScrollSpy)({});
const CodeBlockStyle = styled(CodeBlock)({});

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
      {value === index && (
        <Box sx={{ p: 3, position: "relative" }}>{children}</Box>
      )}
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
              // allowScrollButtonsMobile
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
            <Box
              sx={{
                flexGrow: 1,
                // gap: "60px",
                // padding: 0,
                // position: "sticky",
              }}
            >
              <Stack
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: "50px",
                })}
              >
                <Box
                  component="nav"
                  sx={{
                    height: "fit-content",
                    width: "600px",
                    position: "sticky",
                    top: "130px",
                    right: "30px",
                    fontSize: "14px",
                  }}
                >
                  <Typography variant="navTitle">On This Page</Typography>
                  <Box>
                    <Links href="#dataset" sx={{ textDecoration: "unset" }}>
                      <Typography
                        variant="navSubtitle"
                        data-to-scrollspy-id="dataset"
                      >
                        Dataset
                      </Typography>
                    </Links>
                    <Links href="#nodes" sx={{ textDecoration: "unset" }}>
                      <Typography
                        variant="navSubtitle"
                        sx={{ paddingLeft: "10px" }}
                        data-to-scrollspy-id="nodes"
                      >
                        Nodes
                      </Typography>
                    </Links>
                    <Links
                      href="#relationships"
                      sx={{ textDecoration: "unset" }}
                    >
                      <Typography
                        variant="navSubtitle"
                        sx={{ paddingLeft: "10px" }}
                      >
                        Relationships
                      </Typography>
                    </Links>
                    <Typography variant="navSubtitle">
                      Nodes and Relationships in Northwind Graph
                    </Typography>
                  </Box>
                </Box>
                <ScrollSpyMUI
                  sx={(theme) => ({
                    "& .active-scroll-spy": {
                      backgroundColor: "bluePrimary",
                    },
                  })}
                >
                  <Box
                    component="article"
                    id="dataset"
                    sx={(theme) => ({
                      // display: "flex",
                      // flexDirection: "column",
                      // gap: "10px",
                      marginBottom: "10px",
                    })}
                  >
                    <Typography
                      variant="tabContentTitle"
                      sx={(theme) => ({
                        marginBottom: "10px",
                      })}
                    >
                      Dataset
                    </Typography>
                    <Typography
                      variant="tabContentSubtitle"
                      sx={(theme) => ({
                        marginBottom: "10px",
                      })}
                    >
                      The Northwind dataset is a sample dataset that presents
                      comprehensive information about product sales business
                      operations, with the main entities involving Customer,
                      Order, Product, and Product Category. Specifically
                      designed to provide application and query examples in a
                      relational and graph database environment, Northwind not
                      only provides a comprehensive overview of the
                      relationships between its entities, but also offers
                      potential for a variety of uses, including the development
                      of recommendation engines. By mining Customer, Order,
                      Product, and Product Category data, this dataset can
                      assist in creating an intelligent recommendation system,
                      enabling the use of purchase patterns and preferences to
                      provide relevant product recommendations.
                    </Typography>
                    <Box
                      position={"relative"}
                      sx={(theme) => ({
                        // width: "100%",
                        height: "330px",
                        marginLeft: "70px",
                        flex: 1,
                        marginBottom: "10px",
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
                        src="/call_db_schema_visual_1.png"
                        // width={500}
                        // height={380}
                        alt="db_schema_visual"
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
                    <Typography
                      variant="tabContentSubtitle"
                      sx={(theme) => ({
                        marginBottom: "10px",
                      })}
                    >
                      In the context of a graph database, the Northwind dataset
                      can be represented as a graph where entities are nodes and
                      relationships between entities are edges. Each node in the
                      graph represents a different type of entity, and the
                      relationships between edges represent the associations
                      between those entities.
                    </Typography>
                    <Divider />
                  </Box>
                  <Box
                    component="article"
                    id="nodes"
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    })}
                  >
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="tabContentTitle">Nodes</Typography>
                      <Typography variant="tabContentSubtitle">
                        There are four main entities that form the basic
                        framework of business operations and product
                        transactions. The four entities, namely Customer,
                        Product, Order, and Category, create a rich structure of
                        information about customers, products, orders, and
                        product categories.
                      </Typography>
                    </Box>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="bulletTitle">• Customer</Typography>
                      <Typography
                        variant="tabContentSubtitle"
                        sx={(theme) => ({
                          paddingLeft: "12px",
                        })}
                      >
                        <Typography
                          sx={{ color: "bluePrimary", fontWeight: 600 }}
                          variant="span"
                        >
                          Customer
                        </Typography>{" "}
                        is an entity that represents individuals or companies
                        that make purchases or transactions in the system. Each
                        Customer node has properties such as customerID,
                        companyName, contactName, and other contact information.
                      </Typography>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        })}
                      >
                        {customerList.map((item, idx) => {
                          return (
                            <Typography variant="tabContentSubtitle" key={idx}>
                              <Typography
                                variant="span"
                                sx={{ color: "bluePrimary", fontWeight: 500 }}
                              >
                                {item.title}
                              </Typography>
                              {item.desc}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="bulletTitle">• Order</Typography>
                      <Typography
                        variant="tabContentSubtitle"
                        sx={(theme) => ({
                          paddingLeft: "12px",
                        })}
                      >
                        <Typography
                          sx={{ color: "bluePrimary", fontWeight: 600 }}
                          variant="span"
                        >
                          Order
                        </Typography>{" "}
                        is an entity that represents an order or transaction
                        made by a Customer. Each Order node has properties such
                        as orderID, orderDate, customerID, and other order
                        information.
                      </Typography>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        })}
                      >
                        {orderList.map((item, idx) => {
                          return (
                            <Typography variant="tabContentSubtitle" key={idx}>
                              <Typography
                                variant="span"
                                sx={{ color: "bluePrimary", fontWeight: 500 }}
                              >
                                {item.title}
                              </Typography>
                              {item.desc}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="bulletTitle">• Product</Typography>
                      <Typography
                        variant="tabContentSubtitle"
                        sx={(theme) => ({
                          paddingLeft: "12px",
                        })}
                      >
                        <Typography
                          sx={{ color: "bluePrimary", fontWeight: 600 }}
                          variant="span"
                        >
                          Product
                        </Typography>{" "}
                        is an entity that represents an order or transaction
                        made by a Customer. Each Order node has properties such
                        as orderID, orderDate, customerID, and other order
                        information.
                      </Typography>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        })}
                      >
                        {productList.map((item, idx) => {
                          return (
                            <Typography variant="tabContentSubtitle" key={idx}>
                              <Typography
                                variant="span"
                                sx={{ color: "bluePrimary", fontWeight: 500 }}
                              >
                                {item.title}
                              </Typography>
                              {item.desc}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="bulletTitle">• Category</Typography>
                      <Typography
                        variant="tabContentSubtitle"
                        sx={(theme) => ({
                          paddingLeft: "12px",
                        })}
                      >
                        <Typography
                          sx={{ color: "bluePrimary", fontWeight: 600 }}
                          variant="span"
                        >
                          Category
                        </Typography>{" "}
                        is an entity that represents a particular category or
                        type of product. Each Category node has properties such
                        as categoryID, categoryName, and other category
                        information.
                      </Typography>
                      <Box
                        sx={(theme) => ({
                          paddingLeft: "14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        })}
                      >
                        {categoryList.map((item, idx) => {
                          return (
                            <Typography variant="tabContentSubtitle" key={idx}>
                              <Typography
                                variant="span"
                                sx={{ color: "bluePrimary", fontWeight: 500 }}
                              >
                                {item.title}
                              </Typography>
                              {item.desc}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                  <Box
                    component="article"
                    id="relationships"
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "10px",
                    })}
                  >
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      })}
                    >
                      <Typography variant="tabContentTitle">
                        Relationships
                      </Typography>
                      <Typography variant="tabContentSubtitle">
                        In a graph database, relationships are very important.
                        Relationships make it possible to traverse the graph so
                        as to find relationships between entities. In a graph
                        database, relationships between nodes can be represented
                        by edges or relationships of a certain type. In the
                        context of the Northwind dataset, there are three types
                        of relations: PURCHASED, ORDERS, and PART_OF.
                      </Typography>
                    </Box>
                    {relationshipList.map((item, idx) => {
                      return (
                        <Box
                          key={idx}
                          sx={(theme) => ({
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          })}
                        >
                          <Typography variant="bulletTitle">
                            {item.title}
                          </Typography>
                          <Box>
                            <CodeBlockStyle
                              code={item.code}
                              language={item.titleCode}
                              sx={(theme) => ({
                                margin: "0",
                              })}
                            />
                          </Box>
                          <Typography variant="tabContentSubtitle">
                            {item.exampleTitle}
                            <Typography
                              variant="span"
                              sx={{ fontWeight: 600, color: "bluePrimary" }}
                            >
                              {item.importantSubtitle}
                            </Typography>{" "}
                            {item.exampleTitleLast}
                          </Typography>
                          <Typography variant="tabContentSubtitle">
                            The{" "}
                            <Typography
                              variant="span"
                              sx={{ fontWeight: 600, color: "bluePrimary" }}
                            >
                              {item.importantSubtitle}
                            </Typography>{" "}
                            {item.subTitle}
                          </Typography>
                        </Box>
                      );
                    })}

                    <Divider />
                  </Box>
                </ScrollSpyMUI>
              </Stack>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
          <CustomTabPanel value={value} index={2}></CustomTabPanel>
        </Box>
      </Container>
    </Box>
  );
}
