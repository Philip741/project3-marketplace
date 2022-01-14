const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        
        username: String
        email: String
        password: String
        Item: Item
    }

    type Item {
        _id: ID
        name: String
        description: String
        price: Int
    }

    type Query {
        users: [User]
        user(username: String!): User

    }

    

`;

module.exports = typeDefs;