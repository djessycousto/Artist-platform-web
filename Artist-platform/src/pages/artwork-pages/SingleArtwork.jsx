import { useParams } from "react-router-dom";
import { useFetchSingleData } from "../../../useFetchData";
const url = `http://localhost:8080/api/artist-web/artwork`;

const SingleArtwork = () => {
  const { id } = useParams();
  const { singleItem, isLoading, fetchError } = useFetchSingleData(url, id);
  const item = singleItem?.artwork; // if exist then look for data

  //====> checks
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>{fetchError}</p>;
  }

  if (!item) {
    return <p>Artwork not found.</p>;
  }

  return (
    <div>
      <h1>SingleArtwork</h1>
      <h2>{item.title}</h2>
      <p>{item.year}</p>
      <p>{item.artist}</p>
      <p>{item.medium}</p>
      <p>{item.dimension}</p>
    </div>
  );
};
export default SingleArtwork;
