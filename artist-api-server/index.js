const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

//

const port = 3000;

const start = function () {
  app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
  });
};

start(port);
