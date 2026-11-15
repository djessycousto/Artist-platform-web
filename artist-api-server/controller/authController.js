const User = require("../model/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json("please fill the missing field");
    }

    // check if email exist

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide a valid credentials" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Credentials invalid" });
    }

    if (!password) {
      return res.status(400).json({ msg: "Credentials invalid" });
    }

    if (!password === !user.password) {
      return res.status(400).json({ msg: "Credentials invalid" });
    }

    res.status(200).json({ msg: "loggedIn", user });
  } catch (error) {
    console.log(error, "login");
  }
};

// verify Email

const logout = (req, res) => {
  res.send("logout");
};

module.exports = { register, login, logout };
