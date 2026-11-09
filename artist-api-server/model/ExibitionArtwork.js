const mongoose = require("mongoose");

const exhibitionArtwork = new mongoose.Schema(
  {
    exhibition: mongoose.Types.ObjectId,
    artwork: mongoose.Types.ObjectId,

    isHighlighted: {
      Type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("ExhibitionArtwork", exhibitionArtwork);
