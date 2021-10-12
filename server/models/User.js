const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    max: 20,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    maxlength: 100,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Number,
    default: 0,
  },
//   details:{
//       type: Array,
//       default: []
//   }
});

module.exports = mongoose.model("User", UserSchema);
