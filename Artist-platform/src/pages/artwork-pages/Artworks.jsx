import Artwork from "./Artwork";

// const Artworks = ({ data: artworks }) => {
//  const artworks = data.data ?? [];
const Artworks = ({ data }) => {
  // const { size, works: artworks } = data;
  // const { works: artworks } = data;
  const artworks = data?.data ?? []; // ?? why and what this means
  console.log(artworks);

  return (
    <section>
      {/* map */}
      {artworks.map((artworkList) => {
        return <Artwork artworkList={artworkList} key={artworkList.title} />;
      })}
    </section>
  );
};
export default Artworks;
