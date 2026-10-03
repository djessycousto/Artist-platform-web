import { useParams } from "react-router-dom";
import { useFetchSingleData } from "../../../useFetchData";

const SingleArtwork = () => {
  // do i have to passe as props?
  const { id } = useParams();
  const { singleItem } = useFetchSingleData(id);
  const item = singleItem?.data; // if exist then look for data
  console.log(item, "item"); /// after reload revert to null first and breaks
  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>SingleArtwork</h1>
      <h2>{item.title}</h2>
      <p>{item.year}</p>
      <p>{item.artist}</p>
      <p>{item.medium}</p>
      <p>{item.dimensions}</p>
    </div>
  );
};
export default SingleArtwork;
