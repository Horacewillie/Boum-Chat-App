const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  members: {
    ref: 'User',
    type: Array,
    default: []
}
});

module.exports = mongoose.model("Channel", ChannelSchema);
