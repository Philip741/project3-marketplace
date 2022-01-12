const {AuthendicationError} = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('item')
        }
    },

    // Mutation: {


    // }
};

module.exports = resolvers;