const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema(
  {
    title: String,
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
