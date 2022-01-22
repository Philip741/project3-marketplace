const { gql } = require('apollo-server-express');

typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    items: [Item]
  }

  type Item {
    _id: ID
    itemPoster: String
    category: String
    name: String
    description: String
    price: Int
    isSold: Boolean
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    items(username: String): [Item]
    item(itemId: ID!): Item
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
    addItem(name: String!, description: String!, price: Int): Item
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
// THis pulls up uses and the item id but not other information associated with them
// query user($username: String!) {
//     user(username: $username) {
//     _id
//     username
//     email
//       items {
//         _id
//         price
//         description

//       }
//     }
//   }

//Login
// mutation login($email:String! , $password:String!){
//     login(email:$email, password:$password){
//       token
//       user{
//         _id
//         username
//       }
//     }
//   }
// Use params
// {
//     "email": "zacharymoore@gmail.com",
//     "password": "123456789"
//   }

//Create User
// mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
//use params
// {
//     "username": "WhoFuckinKnows",
//     "password": "123456789",
//     "email": "Whoknows@gmail.com"
//   }
