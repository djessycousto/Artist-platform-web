const mongoose = require("mongoose");

const dbConnect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("db Connected");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

module.exports = dbConnect;
