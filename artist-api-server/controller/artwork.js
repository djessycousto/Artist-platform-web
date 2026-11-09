// const { user, artwork, exhibition } = require("../data");
const mongoose = require("mongoose");
const Artwork = require("../model/Artwork");

const createArtwork = async (req, res) => {
  const artwork = await Artwork.create(req.body); // no safe
  res.status(201).json({ artwork });
  // res.send("created ");
};

const getAllArtwork = async (req, res) => {
  try {
    const artworks = await Artwork.find({});

    if (!artworks) {
      res
        .status(401)
        .json({ message: "This artwork does not exist", artworks: {} });
      return;
    }

    res.status(200).json({ message: "success", artworks });
  } catch (error) {
    console.log(error);
  }

  // res.status(200).json({ size: works.length, works });
  // res.status(200).json(data); // this gives array [{}]
  // res.status(200).json({ artwork }); // this gives object {data}
};

// const showArtwork = (req, res) => {
//   console.log("show current");
//   res.send("show current");
// }; // not working

const singleArtwork = async (req, res) => {
  const { id: artworkID } = req.params;

  // 400 = bad request: the id isn't even a valid format
  if (!mongoose.isValidObjectId(artworkID)) {
    return res.status(400).json({
      success: false,
      message: "incorrect request, invalid artwork id",
    });
  }

  // i need the above to show the error

  const artwork = await Artwork.findOne({ _id: artworkID });

  if (!artwork) {
    return res.status(404).json({
      success: false,
      message: "artwork not found",
    });
  }

  res.status(200).json({ success: true, artwork });
};

const updateArtwork = async (req, res) => {
  const { id: artworkID } = req.params;

  console.log("ID:", artworkID);
  console.log("BODY:", req.body);
  try {
    const artwork = await Artwork.findByIdAndUpdate(
      {
        _id: artworkID,
      },
      req.body,
      {
        // new: true,
        returnDocument: "after",
        // renValidator: true,
      },
    );

    // not checks ?

    res.status(200).json({ message: "success", artwork });
  } catch (error) {
    console.log(error);
  }
};

const ArtworkPicture = (req, res) => {
  console.log("ArtworkPict");
  res.send("ArtworkPict");
};

const deleteArtwork = async (req, res) => {
  const { id: artworkID } = req.params;
  const artwork = await Artwork.findOne({ _id: artworkID });

  if (!artwork) {
    res.status(400).json({ message: "No such a file exist to delete" });
  }

  // await artwork.deleteOne()
  // await artwork.remove()

  res.status(200).json({ message: "deleted" });
};

module.exports = {
  // showArtwork,
  getAllArtwork,
  ArtworkPicture,
  deleteArtwork,
  updateArtwork,
  createArtwork,
  singleArtwork,
};
