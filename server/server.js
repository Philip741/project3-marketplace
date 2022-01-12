const express = require('express');
const path = require('path');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/connection');
//const {blah, blah} = require(./schemas)   

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    //blah blah blah
})

server.applyMiddleware({app});

app.use(express.urlencoded({ extenede: true }));
app.use(express.json());

