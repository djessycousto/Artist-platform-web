import Artwork from "./Artwork";
import { Outlet, Link } from "react-router-dom";

// const Artworks = ({ data: artworks }) => {
//  const artworks = data.data ?? [];
const Artworks = ({ data }) => {
  const artworks = data?.data ?? [];

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
      {/* <Outlet /> */}
      <p>AFTER OUTLET</p>
    </section>
  );
};
export default Artworks;
