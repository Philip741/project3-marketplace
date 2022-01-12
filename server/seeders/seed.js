const db = require('../config/connection');

// const { User, Item } = require('../models');
const { User } = require('../models')

const userSeeds = require('./userSeeds.json');
//const itemSeeds = require('./itemSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        // await User.deleteMany({})

        await User.create(userSeeds);
    
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Success")
    process.exit(0)
})