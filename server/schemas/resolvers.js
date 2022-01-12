const {AuthendicationError} = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {


    }
};

module.exports = resolvers;