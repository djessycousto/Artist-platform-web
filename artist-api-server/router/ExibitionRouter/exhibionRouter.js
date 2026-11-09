const express = require("express");
const router = express.Router();

const {
  getAllExhibition,
  getSingleExhibition,
  createExhibition,
} = require("../../controller/exhibition");

// first
router.route("/exhibition").post(createExhibition);
router.route("/exhibition").get(getAllExhibition);
router.route("/exhibition/:id").get(getSingleExhibition);
// from exhibition artwork

// router.get("/exhibitions/:id/artworks", getExhibitionArtworks);

module.exports = router;
