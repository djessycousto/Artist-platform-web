const artistProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, //as a user he has picture / as owm profile get unique detail

    stageName: String,
    bio: String,
    website: String,
    location: String,
    socialLinks: Object,
  },
  { timestamps: true },
);

// const artistProfileSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     manager: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     stageName: String,
//     bio: String,
//     website: String,
//     location: String,
//     socialLinks: Object,
//   },
//   { timestamps: true },
// );

module.exports = mongoose.model("ArtistProfile", artistProfileSchema);
