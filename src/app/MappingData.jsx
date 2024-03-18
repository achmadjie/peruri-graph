import {
  AutoGraph,
  IntegrationInstructions,
  Analytics,
  StackedBarChart,
  JoinLeft,
  ArrowCircleRightRounded,
  Search,
  Lightbulb,
  InsertChart,
  Timeline,
} from "@mui/icons-material";
import { Typography, styled } from "@mui/material";

const Code = styled(`code`)({});

export const CardHomeData = [
  {
    id: 1,
    icon: AutoGraph,
    title: "Graph Data Science",
    subTitle:
      "Our powerful graph data science tool helps you make better predictions using your existing data.",
  },
  {
    id: 2,
    icon: IntegrationInstructions,
    title: "Easy Integration",
    subTitle:
      "Effortlessly integrate our product into your workflow and boost your productivity.",
  },
  {
    id: 3,
    icon: Analytics,
    title: "Graph Database Analytics",
    subTitle:
      "Uncover hidden insights from your data with our innovative graph analysis tools.",
  },
  {
    id: 4,
    icon: StackedBarChart,
    title: "Interactive Data Visualization",
    subTitle:
      "Our intuitive data visualization tools bring your data to life, making it easy to understand and share.",
  },
  {
    id: 5,
    icon: JoinLeft,
    title: "Eliminate Joins, Simplify Querying",
    subTitle:
      "Easily transform and analyze your data with our simple query language, requiring much less code than SQL.",
  },
];

export const useCaseData = [
  {
    id: 1,
    banner: "/fraud_case.png",
    alt: "fraud_case_pic",
    title: "fraud detection",
    subTitle:
      "Fraud is a financial drain, a risk for businesses and consumers alike. With fraud attempts skyrocketing, how can you identify fraud in time to stop it? Graph-based approaches to detecting fraud analyze complex linkages between people, transactions, and institutions.",
  },
  {
    id: 2,
    banner: "/recommendation_engine.png",
    alt: "recommendation_case_pic",
    title: "recommendation engine",
    subTitle:
      "Today's retailers face a number of complex and emerging challenges. To remain viable, they must be nimble enough to face their colossal online competition while also addressing another new reality: The customer is now at the center of the value chain.",
  },
];

export const contactData = [
  {
    id: 1,
    title: "SBU Digital Office",
    to: "https://maps.app.goo.gl/cGhe7UPUGUyeFrcR6",
    subTitle: "Jl. Palatehan No. 4, Blok K-V, Kebayoran Baru, Jakarta",
  },
  {
    id: 2,
    title: "Email (Contact Center)",
    to: "mailto: cs.digital@peruri.co.id",
    subTitle: "cs.digital@peruri.co.id",
  },
  {
    id: 3,
    title: "Email (Marketing)",
    to: "mailto: digitalchannel@peruri.co.id",
    subTitle: "digitalchannel@peruri.co.id",
  },
];

export const tabTitle = [
  "Easier and Natural Data Modeling",
  "Schema Flexibility",
  "Graph Search Analysis",
  "Efficient Query",
];

export const tabTitleRecommen = [
  "Introduction",
  "Data Preparation",
  "Recommendation and Result",
];

export const easierNaturalData = [
  {
    titleGraph: "1. Create User Nodes",
    titleRDBMS: "1. Create a User Table and Insert Data",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `CREATE (:User {id: 1, name: 'Alice'})
CREATE (:User {id: 2, name: 'Bob'})
CREATE (:User {id: 3, name: 'Charlie'})
CREATE (:User {id: 4, name: 'David'})`,
    rdbmsCode: `CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO Users (id, name) VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie'), (4, 'David');`,
    descGraph:
      "This is the query to create user nodes in the graph database. Each CREATE statement creates one node with a User label and id and name properties.",
    // imageCodeGraph: "/",
    descRDBMS:
      "This is the query to create a Users table with two columns: id as the PRIMARY KEY and name as a character column with a maximum length limit of 255 characters. There is also a query to insert data into the Users table. Four rows of data are inserted with corresponding id and name values.",
    // imageCodeRDBMS: "/",
  },

  {
    titleGraph: "2. Add friend relationships",
    titleRDBMS: "2. Create a Friend Relationship Table",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `MATCH (alice:User {name: 'Alice'}), (bob:User {name: 'Bob'})
CREATE (alice)-[:FRIENDS]->(bob)

MATCH (bob:User {name: 'Bob'}), (charlie:User {name: 'Charlie'})
CREATE (bob)-[:FRIENDS]->(charlie)

MATCH (bob:User {name: 'Bob'}), (david:User {name: 'David'})
CREATE (bob)-[:FRIENDS]->(david)

MATCH (charlie:User {name: 'Charlie'}), (david:User {name: 'David'})
CREATE (charlie)-[:FRIENDS]->(david)`,
    rdbmsCode: `CREATE TABLE Friends (
  user_id1 INT,
  user_name1 VARCHAR(255),
  user_id2 INT,
  user_name2 VARCHAR(255),
  FOREIGN KEY (user_id1) REFERENCES Users(id),
  FOREIGN KEY (user_id2) REFERENCES Users(id),
  PRIMARY KEY (user_id1, user_id2)
);

INSERT INTO Friends (user_id1, user_name1, user_id2, user_name2) VALUES
  (1, 'Alice', 2, 'Bob'),
  (2, 'Bob', 3, 'Charlie'),
  (2, 'Bob', 4, 'David'),
  (3, 'Charlie', 4, 'David');`,
    descGraph:
      "This is the query to create a friend relationship between user nodes. Each MATCH is used to find nodes with certain conditions, and then CREATE is used to create an edge with the label FRIENDS connecting the two user nodes.",
    imageCodeGraph: null,
    descRDBMS:
      "This is a query to create a Friends table with four columns: two pairs of user_id and user_name to represent the two users who are friends, and two FOREIGN KEYS that refer to the id column in the Users table. In addition, there is a composite PRIMARY KEY of the two columns user_id1 and user_id2. Then, there is a query to insert data into the Friends table. Four rows of data are inserted with pairs of users who are friends.",
    imageCodeRDBMS: null,
  },

  {
    titleGraph: "3. Show Data",
    titleRDBMS: "3. Return Data",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `MATCH (n) RETURN n`,
    rdbmsCode: `SELECT * FROM Friends;`,
    descGraph:
      "This is a query to display all nodes and edges in the database. MATCH (n) matches all nodes and edges, and RETURN n returns all matching results.",
    imageCodeGraph: "/show_data_image.png",
    descRDBMS:
      "Overall, this SQL code creates four users in a table and adds friend relationships between them in another table, then displays all the Friends relationships (table) in the database.",
    imageCodeRDBMS: "/return_data_image.png",
  },
];

export const summaryEasierNaturalData = [
  {
    title: "• Intuitive Query Structure",
    desc1: (
      <Typography variant="summaryDesc">
        • In Cypher queries, the creation and management of friend relationships
        is done with clear and easy-to-understand syntax. For example,{" "}
        <Code
          lang="cypher"
          sx={{
            backgroundColor: "grey.main",
            padding: "4px 7px",
            borderRadius: "5px",
          }}
        >
          CREATE (alice)-[:FRIENDS]-&gt;(bob)
        </Code>{" "}
        clearly states that Alice and Bob have a friend relationship.
      </Typography>
    ),
    desc2: `• In comparison, in SQL, the representation of friend
  relationships requires separate tables and JOIN operations,
  which may be less intuitive for simple relationship cases.`,
  },

  {
    title: "• Direct Relationship Modeling",
    desc1: `• In Graph Database, entities and their relationships are represented as nodes and edges, creating a more direct model that matches the way humans think about relationships.
  relationship.`,
    desc2: `• In RDBMS, relationship representation requires modeling through separate tables, which can make the data structure feel more complex.`,
  },

  {
    title: "• Easier Relationship Creation and Management",
    desc1: `• In the Cypher example, friend relationship creation is done with a single CREATE statement for each relationship. This creates a more compact and manageable structure.`,
    desc2: `• In SQL, each friend relationship requires a new row in a separate table, which may require more queries and data manipulation.`,
  },
];

export const schemaFlexData = [
  {
    titleGraph: "Add New Property",
    titleRDBMS: "Add a New Property",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `// Add a new property (e.g. 'email') to the user node
MATCH (user:User {name: 'Alice'})
SET user.email = 'alice@example.com`,
    rdbmsCode: `-- Add a new column (e.g. 'email') to the user table
ALTER TABLE Users
ADD COLUMN email VARCHAR(255);

-- Add a new value for the 'email' column to an existing row
UPDATE Users
SET email = 'alice@example.com'
WHERE name = 'Alice';`,
    descGraph:
      "In the Graph Database, adding a new property such as 'email' to a user node is easily done using the SET statement. This requires no global schema changes and can be done directly on the node in question without affecting other nodes or the overall database structure.",
    descRDBMS:
      "This is the query to create a Users table with two columns: id as the PRIMARY KEY and name as a character column with a maximum length limit of 255 characters.",
  },

  {
    titleGraph: "Add a New Relationship",
    titleRDBMS: "Add a New Relationship",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `// Add a new realtionship 'LIKES' between users
MATCH (alice:User {name: 'Alice'}), (bob:User {name: 'Bob'})
CREATE (alice)-[:LIKES]->(bob)`,
    rdbmsCode: `-- Create new table 'Likes' to represent a new relationship
CREATE TABLE Likes (
  user_id1 INT,
  user_id2 INT,
  FOREIGN KEY (user_id1) REFERENCES Users(id),
  FOREIGN KEY (user_id2) REFERENCES Users(id),
  PRIMARY KEY (user_id1, user_id2)
);

-- Add a new relationship 'LIKES' between users
INSERT INTO Likes (user_id1, user_id2)
VALUES (
  (SELECT id FROM Users WHERE name = 'Alice'),
  (SELECT id FROM Users WHERE name = 'Bob')
);`,
    descGraph:
      "In Graph Database, adding new relationships such as 'LIKES' between two user nodes is done with a clear and direct CREATE statement. This increases flexibility and reduces complexity in handling new relationships.",
    descRDBMS:
      "In an RDBMS, adding a new relationship involves creating a new table (e.g. 'Likes') to represent the relationship, which requires more steps and can increase the complexity of the schema. Furthermore, the INSERT INTO statement is used to add a new row representing the relationship between two users.",
  },
];

export const graphSearchAnalysis = [
  {
    titleGraph: "Find the Shortest Path",
    titleRDBMS: "Find the Shortest Path",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `MATCH path = shortestPath((alice:User {name: 'Alice'})-[:FRIENDS*]-(david:User {name: 'David'}))
RETURN path`,
    rdbmsCode: `SELECT * 
FROM Users AS u1, Friends AS f1, Users AS u2, Friends AS f2, Users AS u3
WHERE u1.name = 'Alice'
  AND u1.id = f1.user_id1
  AND f1.user_id2 = u2.id
  AND u2.id = f2.user_id1
  AND f2.user_id2 = u3.id
  AND u3.name = 'David';`,
    descGraph1: `• Cypher provides a special syntax shortestPath to find the shortest path between two nodes easily and clearly.`,
    descGraph2: `• Shortest path search in Graph Database is implemented efficiently, utilizing graphical structures and algorithms optimized for the purpose.`,
    imageCodeGraph: "/graph_search_2.png",
    descRDBMS:
      "• This SQL query uses a combination of multiple WHERE conditions to find the shortest path, which can make the query structure more complex and difficult to interpret, thus requiring longer execution time especially at large scale.",
    imageCodeRDBMS: "/graph_search_1.png",
    showTable: false,
  },

  {
    titleGraph: "Find Interconnected Nodes",
    titleRDBMS: "Find Interconnected Nodes",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `MATCH (charlie:User {name: 'Charlie'})-[:FRIENDS]->(commonFriend)<-[:FRIENDS]-(bob:User {name: 'Bob'})
RETURN commonFriend`,
    rdbmsCode: `SELECT u3.name AS commonFriend
FROM Users AS u1
JOIN Friends AS f1 ON u1.id = f1.user_id1
JOIN Users AS u2 ON f1.user_id2 = u2.id
JOIN Friends AS f2 ON u2.id = f2.user_id1
JOIN Users AS u3 ON f2.user_id2 = u3.id
WHERE u1.name = 'Bob'
  AND u2.name = 'Charlie'
  AND u3.name <> 'Bob'
  AND u3.name <> 'Charlie';`,
    descGraph1:
      "• This is the query to create a friend relationship between user nodes. Each MATCH is used to find nodes with certain conditions, and then CREATE is used to create an edge with the label FRIENDS connecting the two user nodes.",
    imageCodeGraph: "/graph_search_3.png",
    descRDBMS:
      "• These SQL queries use a combination of JOIN and complex WHERE conditions, which can result in queries that are more difficult to understand and manage.",
    imageCodeRDBMS: null,
    showTable: true,
  },
];

export const efficiencyQuery = [
  {
    titleGraph: "Find All Connected Nodes",
    titleRDBMS: "Find the Shortest Path",
    languageGraph: "cypher",
    languageRDBMS: "SQL",
    graphCode: `MATCH (friend)-[:FRIENDS]->(david:User {name: 'David'})
RETURN friend`,
    rdbmsCode: `SELECT u1.name AS friend
FROM Users u2
JOIN Friends ON u2.id = Friends.user_id2
JOIN Users u1 ON Friends.user_id1 = u1.id
WHERE u2.name = 'David';`,
    descGraph1: `• Cypher provides a special syntax shortestPath to find the shortest path between two nodes easily and clearly.`,
    descGraph2: `• Shortest path search in Graph Database is implemented efficiently, utilizing graphical structures and algorithms optimized for the purpose.`,
    imageCodeGraph: "/graph_search_4.png",
    descRDBMS:
      "• This SQL query uses a combination of multiple WHERE conditions to find the shortest path, which can make the query structure more complex and difficult to interpret, thus requiring longer execution time especially at large scale.",
    imageCodeRDBMS: "/graph_search_5.png",
  },
];

export const efficiencyQueryDescGraph = [
  {
    title: "• Intuitive Graphical Structure",
    desc1: `• This query creates a graphical pattern that directly illustrates the 'FRIENDS' relationship between the nodes 'friend' and 'David'.`,
    desc2: `• A more direct and intuitive syntax describes the structure of the relationship, making it easy to understand.`,
  },

  {
    title: "• Add friend relationships",
    desc1: `• Graph Database is designed for efficiency in graph traversing, and this query directly retrieves all nodes connected to 'David' through the 'FRIENDS' relationship.`,
    desc2: `• This operation can be executed efficiently in the graph data structure.`,
  },

  {
    title: "• Ease of Query Compilation",
    desc1: `• Composing queries using Cypher provides flexibility and ease in composing queries that reflect the relationship structure.`,
    // desc2: `• In SQL, each friend relationship requires a new row in a separate table, which may require more queries and data manipulation.`,
  },
];

export const efficiencyQueryDescRDBMS = [
  {
    title: "• Complex JOIN Operations",
    desc1: `• This query involves multiple JOIN operations to join the Users and Friends tables, which can affect performance especially at scale.`,
    // desc2: `• A more direct and intuitive syntax describes the structure of the relationship, making it easy to understand.`,
  },

  {
    title: "• More Complex Syntax",
    desc1: `• SQL syntax requires JOIN operations that require further understanding of relational structures.`,
    desc2: `• The query structure is more complex and requires more steps to achieve the same result.`,
  },
];

export const CardRecommendationEngineData = [
  {
    id: 1,
    icon: Search,
    subTitle:
      "Discover how a top fintech company reduces manual investigation and finds more fraud",
  },
  {
    id: 2,
    icon: Lightbulb,
    subTitle: "Find out which graph algorithms to run and why",
  },
  {
    id: 3,
    icon: InsertChart,
    subTitle:
      "Uncover hidden insights from your data with our innovative graph analysis tools.",
  },
  {
    id: 4,
    icon: Timeline,
    subTitle: "See a sample graph data model",
  },
];

export const customerList = [
  {
    title: "• customerID",
    desc: ": A unique identification for each customer in the dataset. It is a string used to distinguish one customer from another.",
  },
  {
    title: "• companyName",
    desc: ": The name of the company or business entity of the customer. This property provides information about the legal entity that made the transaction or purchase.",
  },
  {
    title: "• contactName",
    desc: ": The name of the contact associated with the customer. This is the name of the person who is responsible for or has a relationship with the business transaction.",
  },
  {
    title: "• contactTitle",
    desc: ": The title or position held by the customer contact. It provides additional context about the contact's role or responsibilities within the company.",
  },
  {
    title: "• address",
    desc: ": The physical address or office of the customer",
  },
  {
    title: "• city",
    desc: ": The name of the city where the customer is located.",
  },
  {
    title: "• country",
    desc: ": The country where the customer is located.",
  },
  {
    title: "• region",
    desc: ": A specific region or part of the country where the customer is located.",
  },
  {
    title: "• postalCode",
    desc: ": The zip code or postal code associated with the customer's address.",
  },
  {
    title: "• phone",
    desc: ": The phone number that can be used to contact the customer.",
  },
  {
    title: "• fax",
    desc: ": The fax number associated with the customer.",
  },
];

export const orderList = [
  {
    title: "• orderID",
    desc: ": Unique identification for each order.",
  },
  {
    title: "• customerID",
    desc: ": The unique identification of the customer who placed the order. It is a foreign key that can be used to link the Order node with the Customer node.",
  },
  {
    title: "• freight",
    desc: ": The shipping cost or freight cost of the order.",
  },
  {
    title: "• orderDate",
    desc: ": The date when the order was placed.",
  },
  {
    title: "• requiredDate",
    desc: ": The shipping address of the order.",
  },
  {
    title: "• shipAddress",
    desc: ": The name of the city where the customer is located.",
  },
  {
    title: "• shipCity",
    desc: ": The destination city of the order.",
  },
  {
    title: "• shipCountry",
    desc: ":  The country to which the order is destined.",
  },
  {
    title: "• shipName",
    desc: ": The name of the order recipient.",
  },
  {
    title: "• shipPostalCode",
    desc: ": The postal code of the order destination.",
  },
  {
    title: "• shipRegion",
    desc: ": The region or specific part of the country the order is destined for.",
  },
  {
    title: "• shipVia",
    desc: ": The shipping method or third party responsible for shipping the order.",
  },
  {
    title: "• shippedDate",
    desc: ": The date when the order was actually shipped.",
  },
];

export const productList = [
  {
    title: "• productID",
    desc: ": Unique identification for each product in the dataset.",
  },
  {
    title: "• productName",
    desc: ": Product name that provides information about the product type or brand.",
  },
  {
    title: "• categoryID",
    desc: ": A unique identification for the product category. This can be a foreign key that links the product with the Category node.",
  },
  {
    title: "• quantityPerUnit",
    desc: ": The quantity of the product in one packaging unit or one item. It provides information about how the product is sold or packaged.",
  },
  {
    title: "• unitPrice",
    desc: ": The price per unit of the product. It reflects the selling price of one unit of the product.",
  },
  {
    title: "• unitsInStock",
    desc: ": The number of product units available in stock at any given moment.",
  },
  {
    title: "• unitsOnOrder",
    desc: ": The number of units of a product that have been ordered by a customer but are not yet in stock.",
  },
  {
    title: "• reorderLevel",
    desc: ":  The minimum stock level that will trigger a product reorder.",
  },
  {
    title: "• discontinued",
    desc: ": A status that indicates whether the product has been discontinued or is still actively on sale. This can be a boolean value (true/false).",
  },
];

export const categoryList = [
  {
    title: "• categoryID",
    desc: ": Unique identification for each product category in the dataset.",
  },
  {
    title: "• categoryName",
    desc: ": The name of the category that provides information about the types of products included in the category.",
  },
  {
    title: "• description",
    desc: ": A short description that provides additional information about the type of product or characteristic of the category.",
  },
  {
    title: "• picture",
    desc: ":  Contains image data representing the category that has been encrypted in base64 format.",
  },
];

export const relationshipList = [
  {
    title: "• PURCHASED",
    titleCode: "cypher",
    code: "(customer)-[:PURCHASED]->(order)",
    exampleTitle: "An example of using the ",
    exampleTitleLast: "relation:",
    importantSubtitle: "PURCHASED",
    subTitle:
      "relation can be used to describe the relationship between a Customer node and an Order node. For example, if a customer purchases a particular product, you can use the PURCHASED relation to connect the Customer node with the Order node, indicating that the customer has made a purchase or order.",
  },

  {
    title: "• ORDERS",
    titleCode: "cypher",
    code: "(order)-[:ORDERS]->(product)",
    exampleTitle: "An example of using the ",
    exampleTitleLast: "relation:",
    importantSubtitle: "ORDERS",
    subTitle:
      "relation can be used to describe the relationship between the Order node and the Product node. It reflects that within an order, there are certain products ordered or purchased by the customer.",
  },

  {
    title: "• PART_OF",
    titleCode: "cypher",
    code: "(product)-[:PART_OF]->(category)",
    exampleTitle: "An example of using the ",
    exampleTitleLast: "relation:",
    importantSubtitle: "PART_OF",
    subTitle:
      "relation can be used to describe the relationship between a Product node and a Category node. If a product belongs to a category, the relation can be used to show the relationship between the product and the category.",
  },
];
