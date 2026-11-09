const mongoose = require("mongoose");

const contactMessage = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    IsRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("ContactMessage", contactMessage);
