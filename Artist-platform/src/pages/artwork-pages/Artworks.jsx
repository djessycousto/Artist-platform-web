import { useState, useEffect } from "react";
import Artwork from "./Artwork";
import { Outlet, Link } from "react-router-dom"; // outlet is for a nested router
import Categories from "./Categories";

// const Artworks = ({ data: artworks }) => {
//  const artworks = data.data ?? [];

const Artworks = ({ data }) => {
  // Filter menu
  const artworks = data?.artworks ?? [];
  const allCategories = [
    "All",
    ...new Set(artworks.map((item) => item.categories)),
  ];
  console.log(allCategories, "all cat");

  const [menuItem, setMenuitem] = useState(artworks);
  // const [category, setCategory] = useState(allCategories); // i passed the unique category
  const category = allCategories;
  // states

  const filterItem = (category) => {
    if (category === "All") {
      setMenuitem(artworks);
      return;
    }

    const newCategory = artworks.filter((item) => {
      return item.categories === category;
    });

    setMenuitem(newCategory);
  };

  useEffect(() => {
    setMenuitem(artworks);
  }, [artworks]);

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
        <Categories category={category} filterItem={filterItem} />
      </div>

      {/* map */}
      {menuItem.map((artworkList) => {
        return <Artwork artworkList={artworkList} key={artworkList._id} />;
      })}
      {/* <Outlet /> */}
      <p>AFTER OUTLET</p>
    </section>
  );
};
export default Artworks;
