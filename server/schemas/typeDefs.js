const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    item: [Item]
  }

  type Item {
    _id: ID
    name: String!
    description: String!
    price: Number!
  }

  type Query {
    users: [User]
    user(username: String!): User
  }
`;
