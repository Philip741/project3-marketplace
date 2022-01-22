const express = require('express');
const path = require('path');
const {ApolloServer} = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const  { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//server for modifications using graphql
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
})

server.applyMiddleware({app});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//production static assets?

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        //log for testing GQL API
        console.log(`GraphQL @ http://localhost:${PORT}${server.graphqlPath}`);
    });
}); 