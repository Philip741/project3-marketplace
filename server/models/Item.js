const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: { type: String, required: true, trim: true },

  description: { type: String, required: true, trim: true },

  price: {type: Number, required: true, trim: true },

  image: { type: Image, required: true,}
});

export const Item = model('Item', itemSchema);