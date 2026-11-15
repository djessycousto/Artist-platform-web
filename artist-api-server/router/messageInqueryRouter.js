const express = require("express");
const router = express.Router();

const {
  createMessage,
  getAllMessages,
} = require("../controller/contactMessage");

// router
router.route("/inquiry").post(createMessage).get(getAllMessages);
// router.route("/inquiry").post(create);

module.exports = router;
