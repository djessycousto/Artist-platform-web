const express = require("express");
const app = express();
const cors = require("cors");

const { user, artwork, exhibition } = require("./data");
const {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
} = require("./errors/errors");

// app.use(express.json())

// middleWear
const authRouter = require("./router/authRoutes");
const artworkRouter = require("./router/artworkRouter");
// const errorHandlerMiddleWare = require("./errorHandler");
// const notFound = require("./notFound");

//

// app.use("/", authRouter);
app.use(cors());
app.use("/api/artist-web", authRouter);
app.use("/api/artist-web", artworkRouter);
// app.use("/authentication", authRouter);

app.get("/", (req, res) => {
  res.json({ user });
});

// app.get("/test-not-found", (req, res) => {
//   console.log("i am here");

//   throw new NotFoundError("Artist not found");
// });

// app.get("/test-bad-request", (req, res) => {
//   throw new BadRequestError("Invalid artist information");
// });

// app.get("/test-normal-error", (req, res) => {
//   throw new Error("Something broke");
// });

//

// app.use(notFound);
// app.use(errorHandlerMiddleWare);

//
const port = 8080;

const start = function () {
  app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
  });
};

start(port);
