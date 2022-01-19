const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  //string with no spaces for username, must be unique
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  //email
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  //password must be 8 characters or longer
  password: {
    type: String,
    required: true,
    minlength: 8,
  },

  // this is to reference items for particular user
  // this creates a
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    // encryption cost factor
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;
