const express = require("express");
const router = express.Router();

// controller
const {
  showMe,
  getAllUser,
  userPicture,
  deleteUser,
  updateUser,
} = require("../../controller/user");

router.route("/user").get(getAllUser);
router.route("/user").post(getAllUser);
router.route("/user/:picture").post(userPicture); // watch out

// with id
router.route("/user/:showUser").get(showMe);
router.route("/user/:id").patch(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;
