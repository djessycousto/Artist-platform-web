import Artwork from "./Artwork";

// const Artworks = ({ data: artworks }) => {
//  const artworks = data.data ?? [];
const Artworks = ({ data }) => {
  // const { size, works: artworks } = data;
  // const { works: artworks } = data;
  const artworks = data?.data ?? []; // ?? why and what this means
  return (
    //

    <section>
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

      {/* map */}
      {artworks.map((artworkList) => {
        return <Artwork artworkList={artworkList} key={artworkList.title} />;
      })}
    </section>
  );
};
export default Artworks;
