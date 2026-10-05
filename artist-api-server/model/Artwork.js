const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, "name must have at least 3 characters"],
    trim: true,
    min: 3,
  },

  artist: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    // required: true,
    type: String,
  },

  categories: {
    type: String,
    enum: ["book & manuscript", "fine art", "sculpture", "digital & media"],
  },

  year: Number,

  dimensions: {
    width: Number,
    height: Number,
    depth: Number,
    unit: String,
    display: String,
  },

  medium: String, // need to limit this 20 char

  images: [
    {
      url: String,
      alt: String,
      isPrimary: Boolean,
      // default:"/upload/example" // no default
      //  main image
      // detail image
      // back view
      // installation view
      // exhibition view
    },
  ],

  paperStock: String,

  edition: {
    number: Number, // this need to be mandatory
    total: Number,
    editionType: { type: String, enum: ["Limited", "mainstream", "unique"] },
    display: String,
  },

  catalogueReference: String, // "KV-2026-0042"

  location: {
    locationType: String,
    name: String,
    city: String,
    country: String,
  },

  description: {
    type: String,
    trim: true,
    require: [true, "Please fill the description"],
    // min:[5, "please fill the description"],
    // max:[5, "please fill the description"]
  },

  aboutTheItem: {
    type: String,
    trim: true,
    require: [true, "Please fill the description"],
    // min:[5, "please fill the description"],
    // max:[5, "please fill the description"]
  },
  featured: {
    type: Boolean,
    default: false,
  },

  specifications: {
    format: String,
    pageCount: Number,
    binding: String,
    language: String,
    material: String,
    weight: String,
    duration: String,
    resolution: String,
    sound: Boolean,
  },

  //   end
});

module.exports = mongoose.model("Artworks", artworkSchema);
