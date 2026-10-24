import { axios } from "axios";

const Exhibition = () => {
  // test with axios

  const data = axios.get("http://localhost:5173/api/artist-web/artwork");

  console.log(data);

  return <div>Exhibition</div>;
};
export default Exhibition;
