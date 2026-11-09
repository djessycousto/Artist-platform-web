const mongoose = require("mongoose");
const Exhibition = require("../model/Exibition");

const createExhibition = async (req, res) => {
  const exhibition = await Exhibition.create(req.body);

  res.status(201).json({ exhibition });
};

// first part just get only the manager allowed to book an exhibition
const getAllExhibition = (req, res) => {
  res.send("exhibitions");
};

const getSingleExhibition = (req, res) => {
  res.send("one exhibition");
};

module.exports = {
  getAllExhibition,
  getSingleExhibition,
  createExhibition,
};
