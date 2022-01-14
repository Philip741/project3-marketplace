const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        username: String
        email: String
        password: String
        items: [Item]
    }

    type Item {
        _id: ID
        name: String
        description: String
        price: Int
        itemPoster: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        items(username: String): [Item]
        
    }


    

`;

module.exports = typeDefs;


// Use this query to get all users and all item Ids associated with each individual user
// query users {
//     users {
//       username
//       email
//       password
//       items {
//         _id
//       }
//     }
//   }
  