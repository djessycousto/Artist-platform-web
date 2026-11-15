const mongoose = require("mongoose");
const ContactMessage = require("../model/ContactMessage");
const { BadRequestError } = require("../errors/errors");

const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject } = req.body;

    /// question how the read work?

    if (!name || !email || !subject) {
      // throw new Error();
      throw new BadRequestError(
        "please fill the missing field for before sending ",
      ); // need to be tested
      // res.status(400).json({ msg: error });
    }

    const inquiry = await ContactMessage.create({ name, email, subject });

    res.status(201).json({ inquiry });
  } catch (error) {
    // console.log(error);
    next(error); // 2. hand the error to your errorHandlerMiddleWare
  }
};

// get all emails
const getAllMessages = async (req, res, next) => {
  try {
    const inquiries = await ContactMessage.find({});
    res.status(200).json({ inquiries });
  } catch (error) {
    next(error);
  }
};

// i guess the read is an update!!!!!!!! where we change the the status to read based on the id

module.exports = { createMessage, getAllMessages };
