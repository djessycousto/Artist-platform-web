const register = (req, res) => {
  console.log("register");
  res.send("register");
};

const login = (req, res) => {
  console.log("login");
  res.send("login");
};

const logout = (req, res) => {
  res.send("logout");
};

module.exports = { register, login, logout };
