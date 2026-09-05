const express = require("express");
const router = express.Router();

/*
### controller import
*/

const {
  showArtwork,
  getAllArtwork,
  ArtworkPicture,
  deleteArtwork,
  updateArtwork,
  createArtwork,
} = require("../controller/artwork");

router.route("/artwork").get(getAllArtwork);
router.route("/artwork").post(createArtwork);

// :id
router.route("/artwork/:id").patch(updateArtwork);
router.route("/artwork/:id").delete(deleteArtwork);

router.route("/artwork/:show-me").get(showArtwork);
router.route("/artwork/:picture").post(ArtworkPicture);
module.exports = router;
