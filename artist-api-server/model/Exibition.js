const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "this need to be filled"],
    },
    description: String,
    startDate: Date,
    endDate: Date,
    location: {
      locationType: String,
      name: String,
      city: String,
      country: String,
    },
    log: Number,
    lat: Number,
    bannerImage: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Exhibition", exhibitionSchema);
