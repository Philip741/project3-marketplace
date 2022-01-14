const db = require('../config/connection');
const { User, Item } = require('../models')

const userSeeds = require('./userSeeds.json');
const userItems = require('./userItems.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await Item.deleteMany({});
        
        await User.create(userSeeds);

        for ( let i = 0; i < userItems.length; i++) {
            //takes username as input itemPoster from seeds and assigns that value to the user that posted it in the items collection
            const { _id, itemPoster } = await Item.create(userItems[i]);
            const user = await User.findOneAndUpdate(
                {username: itemPoster},
                {
                    $addToSet: {
                        items: _id, 
                    },
                }
            )

        }
    
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Success")
    process.exit(0)
})