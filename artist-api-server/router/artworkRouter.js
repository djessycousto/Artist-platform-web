const express = require("express");
const router = express.Router();
const upload = require("../middleware/Multer_Midelware");

/*
### controller import
*/

const {
  // showArtwork,

  getAllArtwork,
  ArtworkPicture,
  deleteArtwork,
  updateArtwork,
  createArtwork,
  singleArtwork,
} = require("../controller/artwork");

router.route("/artwork").get(getAllArtwork);
router.route("/artwork").post(createArtwork);
router
  .route("/artwork/:id/picture")
  .post(upload.single("photo"), ArtworkPicture);

// :id
router.route("/artwork/:id").get(singleArtwork);
router.route("/artwork/:id").patch(updateArtwork);
router.route("/artwork/:id").delete(deleteArtwork);

// router.route("/artwork/:picture").post(ArtworkPicture);÷
module.exports = router;
