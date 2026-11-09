const User = require("../model/User");

const getAllUser = async (req, res) => {
  const users = await User.find({});
  if (!users) res.status(400).json({ message: "not user yet " });

  res.status(200).json({ message: "users " });
};

const showMe = (req, res) => {
  console.log("show mw");
  res.send("show mw");
};

const singleUser = async (req, res) => {
  const { id: userId } = req.params;
  // can have a id check here

  const user = await User.find({ userId });

  if (!user) {
    if (!user)
      res.status(400).json({ message: "the requested user does not exist   " });
  }

  res.status(200).json({ message: "users " });
};

const updateUser = (req, res) => {
  console.log("update User");
  res.send("update User");
};

const userPicture = (req, res) => {
  console.log("userPict");
  res.send("userPict"); // issue already solved sowing show me
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  // can have a id check here

  const user = await User.find({ userId });

  if (!user) {
    if (!user)
      res.status(400).json({ message: "the requested user does not exist   " });
  }

  user.remove();

  res.status(200).json({ message: "users  deleted " });
};

module.exports = { showMe, getAllUser, userPicture, deleteUser, updateUser };
