const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },

    channelId: {
      type: String,
      ref: "Channel",
    },
    userId: {
      ref: "User",
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
