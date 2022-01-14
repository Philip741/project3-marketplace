const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  itemPoster: {
    type: String,
    required: true,
    trim: true,
  },
  
  name: { type: String, required: true, trim: true },

  description: { type: String, required: true, trim: true },

  price: {type: Number, required: true, trim: true },

  //ReferenceError: Image is not defined at {type: Image}
  // image: { type: Image, required: true,}
});

// export const Item = model('Item', itemSchema);

const Item = model("Item", itemSchema);
module.exports = Item;



//TO DO : ADD A DATE AND FORMAT IT 
