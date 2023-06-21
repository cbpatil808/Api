const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

const typeDefs = gql`
  type Query {
    branches: [Branch]
  }

  type Branch {
    branch: String
    ifsc: String
    bank: Bank
  }

  type Bank {
    name: String
  }
`;

const resolvers = {
  Query: {
    branches: () => {
      // Logic to fetch bank branches from the database or any other source
      // and return the data
      // Example:
      return [
        {
          branch: 'Branch 1',
          ifsc: 'IFSC123',
          bank: {
            name: 'Bank 1'
          }
        },
        {
          branch: 'Branch 2',
          ifsc: 'IFSC456',
          bank: {
            name: 'Bank 2'
          }
        }
      ];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
  });
})();
