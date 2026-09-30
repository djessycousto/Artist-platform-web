const { user, artwork, exhibition } = require("../data");

const createArtwork = (req, res) => {};

const getAllArtwork = (req, res) => {
  // const data = artwork.map((work) => {
  //   return work;
  // });
  const data = artwork;

  // res.status(200).json({ size: works.length, works });
  // res.status(200).json(data); // this gives array [{}]
  res.status(200).json({ data }); // this gives object {data}
};

// const showArtwork = (req, res) => {
//   console.log("show current");
//   res.send("show current");
// }; // not working

const singleArtwork = (req, res) => {
  const { id } = req.params;
  console.log(id);

  // console.log(artworkId);

  const data = artwork.find((work) => {
    console.log(work);

    return work.id === id;
  });

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "data not found",
    });
  }

  res.status(200).json({ success: true, data });
};

const updateArtwork = (req, res) => {
  console.log("update Artwork");
  res.send("update Artwork");
};

const ArtworkPicture = (req, res) => {
  console.log("ArtworkPict");
  res.send("ArtworkPict");
};

const deleteArtwork = (req, res) => {
  console.log("delete artwork ");
  res.send("delete artwork ");
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
