const Artwork = ({ artworkList }) => {
  // const artworkId = date.now();

  return (
    // top blog same as the rest of the page

    <article>
      {/* header  */}

      <section className="">
        <p>Curated repository</p>
        <h1>Works & Artworks</h1>
        <p>
          An expansive collection of literary volumes, rare manuscripts, fine
          art canvases, sculptures, and mixed-media compositions created by our
          resident collective members.
        </p>
      </section>

      <div>
        <button>Click</button>
        <button>Click</button>
        <button>Click</button>
        <button>Click</button>
      </div>

      <div>
        <p>{artworkList.title}</p>
        <p>{artworkList.year}</p>
      </div>
      <p>{artworkList.artist}</p>
      <p>{artworkList.medium}</p>
    </article>
  );
};
export default Artwork;
