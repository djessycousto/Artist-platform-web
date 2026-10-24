import axios from "axios";

const Home = () => {
  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:5173/api/artist-web/artwork",
    );

    const { artworks } = response.data;

    console.log(artworks);
  };

  fetchData();

  return (
    <div>
      <h1>Welcome to HOME</h1>
    </div>
  );
};

export default Home;
//  i will pass artist , art , and exhibition
